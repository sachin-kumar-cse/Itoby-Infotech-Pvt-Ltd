import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SCORE_MAP: Record<string, number> = {
  contact_form: 15,
  quote_request: 30,
  appointment_booked: 40,
  job_application: 5,
  newsletter_signup: 10,
  page_visit: 1,
  chat_interaction: 8,
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, name, action, service, budget } = await req.json();

    if (!email || !action) {
      return new Response(
        JSON.stringify({ error: "Missing email or action" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    const points = SCORE_MAP[action] || 5;
    const activityEntry = {
      action,
      points,
      service: service || null,
      timestamp: new Date().toISOString(),
    };

    // Check if lead exists
    const { data: existing } = await supabase
      .from("lead_scores")
      .select("*")
      .eq("email", email)
      .maybeSingle();

    if (existing) {
      const currentLog = Array.isArray(existing.activity_log) ? existing.activity_log : [];
      const updatedLog = [...currentLog, activityEntry];
      const newServices = existing.services_interested || [];
      if (service && !newServices.includes(service)) {
        newServices.push(service);
      }

      const { error } = await supabase
        .from("lead_scores")
        .update({
          score: existing.score + points,
          activity_log: updatedLog,
          services_interested: newServices,
          budget_range: budget || existing.budget_range,
          name: name || existing.name,
          last_activity_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        })
        .eq("id", existing.id);

      if (error) throw error;
    } else {
      const { error } = await supabase.from("lead_scores").insert({
        email,
        name: name || "",
        score: points,
        activity_log: [activityEntry],
        services_interested: service ? [service] : [],
        budget_range: budget || null,
        source: "website",
      });

      if (error) throw error;
    }

    return new Response(
      JSON.stringify({ success: true, points_added: points }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Lead score error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
