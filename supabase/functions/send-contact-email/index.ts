// @ts-nocheck
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

interface ContactEmailRequest {
  name: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, service, message }: ContactEmailRequest = await req.json();

    if (!name || !email || !service || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Rate limiting: max 3 submissions per email per hour
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000).toISOString();
    const { data: recent } = await supabase
      .from('contact_submissions')
      .select('id')
      .eq('email', email)
      .gte('created_at', oneHourAgo);

    if (recent && recent.length >= 3) {
      return new Response(
        JSON.stringify({ error: "Rate limit exceeded. Please try again later." }),
        { status: 429, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Escape all user inputs
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = phone ? escapeHtml(phone) : '';
    const safeService = escapeHtml(service);
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br>');

    const adminEmailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Itoby Infotech <onboarding@resend.dev>",
        to: ["info@itobyinfotech.in"],
        subject: `New Contact Form Submission: ${safeService}`,
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <style>
              body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #84cc16, #22c55e); padding: 30px; border-radius: 10px 10px 0 0; }
              .header h1 { color: #000; margin: 0; font-size: 24px; }
              .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; }
              .field { margin-bottom: 20px; }
              .field-label { font-weight: bold; color: #666; font-size: 12px; text-transform: uppercase; margin-bottom: 5px; }
              .field-value { font-size: 16px; color: #333; }
              .message-box { background: #fff; padding: 20px; border-radius: 8px; border-left: 4px solid #84cc16; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>📬 New Contact Form Submission</h1>
              </div>
              <div class="content">
                <div class="field">
                  <div class="field-label">Name</div>
                  <div class="field-value">${safeName}</div>
                </div>
                <div class="field">
                  <div class="field-label">Email</div>
                  <div class="field-value"><a href="mailto:${safeEmail}">${safeEmail}</a></div>
                </div>
                ${safePhone ? `
                <div class="field">
                  <div class="field-label">Phone</div>
                  <div class="field-value"><a href="tel:${safePhone}">${safePhone}</a></div>
                </div>
                ` : ''}
                <div class="field">
                  <div class="field-label">Service Interested In</div>
                  <div class="field-value">${safeService}</div>
                </div>
                <div class="field">
                  <div class="field-label">Message</div>
                  <div class="message-box">${safeMessage}</div>
                </div>
              </div>
            </div>
          </body>
          </html>
        `,
      }),
    });

    if (!adminEmailRes.ok) {
      const errorData = await adminEmailRes.text();
      console.error("Failed to send admin email:", errorData);
    }

    const userEmailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Itoby Infotech <onboarding@resend.dev>",
        to: [email],
        subject: "Thank you for contacting Itoby Infotech!",
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <style>
              body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #84cc16, #22c55e); padding: 30px; border-radius: 10px 10px 0 0; text-align: center; }
              .header h1 { color: #000; margin: 0; font-size: 24px; }
              .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; }
              .highlight { background: #fff; padding: 20px; border-radius: 8px; margin: 20px 0; }
              .footer { text-align: center; margin-top: 20px; color: #666; font-size: 14px; }
              a { color: #84cc16; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Thank You, ${safeName}! 🎉</h1>
              </div>
              <div class="content">
                <p>We've received your message and appreciate you reaching out to us.</p>
                <div class="highlight">
                  <p><strong>What happens next?</strong></p>
                  <p>Our team will review your inquiry about <strong>${safeService}</strong> and get back to you within 24-48 business hours.</p>
                </div>
                <p>In the meantime, feel free to explore our website to learn more about our services.</p>
                <p>Best regards,<br><strong>The Itoby Infotech Team</strong></p>
                <div class="footer">
                  <p>Itoby Infotech Pvt. Ltd.<br>
                  Sector-4, Noida, UP, India<br>
                  <a href="mailto:info@itobyinfotech.in">info@itobyinfotech.in</a></p>
                </div>
              </div>
            </div>
          </body>
          </html>
        `,
      }),
    });

    if (!userEmailRes.ok) {
      console.error("Failed to send user confirmation email:", await userEmailRes.text());
    }

    // Trigger webhook notification (fire & forget)
    const SUPABASE_URL = Deno.env.get('SUPABASE_URL') ?? '';
    const SUPABASE_ANON_KEY = Deno.env.get('SUPABASE_ANON_KEY') ?? '';
    fetch(`${SUPABASE_URL}/functions/v1/send-webhook-notification`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      },
      body: JSON.stringify({ type: "contact", data: { name, email, phone, service, message } }),
    }).catch((e) => console.error("Webhook notify failed:", e));

    return new Response(
      JSON.stringify({ success: true, message: "Emails sent successfully" }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } catch (error: unknown) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: "An unexpected error occurred" }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
