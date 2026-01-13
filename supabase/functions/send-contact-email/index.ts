import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, service, message }: ContactEmailRequest = await req.json();

    // Validate required fields
    if (!name || !email || !service || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Send notification email to admin using Resend API directly
    const adminEmailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Itoby Infotech <onboarding@resend.dev>",
        to: ["info@itobyinfotech.in"],
        subject: `New Contact Form Submission: ${service}`,
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
                  <div class="field-value">${name}</div>
                </div>
                <div class="field">
                  <div class="field-label">Email</div>
                  <div class="field-value"><a href="mailto:${email}">${email}</a></div>
                </div>
                ${phone ? `
                <div class="field">
                  <div class="field-label">Phone</div>
                  <div class="field-value"><a href="tel:${phone}">${phone}</a></div>
                </div>
                ` : ''}
                <div class="field">
                  <div class="field-label">Service Interested In</div>
                  <div class="field-value">${service}</div>
                </div>
                <div class="field">
                  <div class="field-label">Message</div>
                  <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
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
    } else {
      console.log("Admin notification email sent successfully");
    }

    // Send confirmation email to user
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
                <h1>Thank You, ${name}! 🎉</h1>
              </div>
              <div class="content">
                <p>We've received your message and appreciate you reaching out to us.</p>
                
                <div class="highlight">
                  <p><strong>What happens next?</strong></p>
                  <p>Our team will review your inquiry about <strong>${service}</strong> and get back to you within 24-48 business hours.</p>
                </div>
                
                <p>In the meantime, feel free to explore our website to learn more about our services.</p>
                
                <p>Best regards,<br><strong>The Itoby Infotech Team</strong></p>
                
                <div class="footer">
                  <p>Itoby Infotech Pvt. Ltd.<br>
                  Patna, Bihar, India<br>
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
      const errorData = await userEmailRes.text();
      console.error("Failed to send user confirmation email:", errorData);
    } else {
      console.log("User confirmation email sent successfully");
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Emails sent successfully" 
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
