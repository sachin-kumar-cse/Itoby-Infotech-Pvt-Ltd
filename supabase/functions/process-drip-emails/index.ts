// @ts-nocheck
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    const { trigger_event, recipient_email, recipient_name } = await req.json();

    if (!trigger_event || !recipient_email) {
      return new Response(
        JSON.stringify({ error: "Missing trigger_event or recipient_email" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Find active sequences for this trigger
    const { data: sequences, error: seqError } = await supabase
      .from("email_drip_sequences")
      .select("id, name")
      .eq("trigger_event", trigger_event)
      .eq("is_active", true);

    if (seqError) throw seqError;
    if (!sequences || sequences.length === 0) {
      return new Response(
        JSON.stringify({ message: "No active drip sequences for this trigger" }),
        { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    let emailsSent = 0;

    for (const sequence of sequences) {
      // Get already sent emails for this recipient in this sequence
      const { data: sentLogs } = await supabase
        .from("email_drip_log")
        .select("email_id, sent_at")
        .eq("sequence_id", sequence.id)
        .eq("recipient_email", recipient_email)
        .order("sent_at", { ascending: false });

      // Get all emails in this sequence
      const { data: emails, error: emailsError } = await supabase
        .from("email_drip_emails")
        .select("*")
        .eq("sequence_id", sequence.id)
        .order("sort_order", { ascending: true });

      if (emailsError || !emails) continue;

      const sentEmailIds = new Set((sentLogs || []).map((l) => l.email_id));
      const lastSentAt = sentLogs && sentLogs.length > 0
        ? new Date(sentLogs[0].sent_at)
        : null;

      // Find next email to send
      for (const email of emails) {
        if (sentEmailIds.has(email.id)) continue;

        // Check delay
        const hoursSinceLastSend = lastSentAt
          ? (Date.now() - lastSentAt.getTime()) / (1000 * 60 * 60)
          : email.delay_hours + 1; // First email: send immediately if no delay constraint

        if (hoursSinceLastSend < email.delay_hours) break; // Not time yet

        // Personalize and send
        const personalizedBody = email.body_html
          .replace(/{{name}}/g, recipient_name || "there")
          .replace(/{{email}}/g, recipient_email);

        const personalizedSubject = email.subject
          .replace(/{{name}}/g, recipient_name || "there");

        if (RESEND_API_KEY) {
          const res = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${RESEND_API_KEY}`,
            },
            body: JSON.stringify({
              from: "Itoby Infotech <onboarding@resend.dev>",
              to: [recipient_email],
              subject: personalizedSubject,
              html: personalizedBody,
            }),
          });

          const status = res.ok ? "sent" : "failed";

          await supabase.from("email_drip_log").insert({
            sequence_id: sequence.id,
            email_id: email.id,
            recipient_email,
            status,
          });

          if (res.ok) emailsSent++;
        }

        break; // Only send one email per sequence per invocation
      }
    }

    return new Response(
      JSON.stringify({ success: true, emails_sent: emailsSent }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } catch (error) {
    console.error("Drip email error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to process drip emails" }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
});
