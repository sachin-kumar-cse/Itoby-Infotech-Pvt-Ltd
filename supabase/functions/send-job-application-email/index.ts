import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface JobApplicationEmailRequest {
  name: string;
  email: string;
  phone?: string;
  jobTitle: string;
  experience: string;
  portfolioUrl?: string;
  coverLetter?: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, jobTitle, experience, portfolioUrl, coverLetter }: JobApplicationEmailRequest = await req.json();

    if (!name || !email || !jobTitle || !experience) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Send notification email to admin
    const adminEmailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Itoby Infotech <onboarding@resend.dev>",
        to: ["info@itobyinfotech.in"],
        subject: `New Job Application: ${jobTitle}`,
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
                <h1>💼 New Job Application</h1>
              </div>
              <div class="content">
                <div class="field">
                  <div class="field-label">Position</div>
                  <div class="field-value"><strong>${jobTitle}</strong></div>
                </div>
                <div class="field">
                  <div class="field-label">Applicant Name</div>
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
                  <div class="field-label">Experience</div>
                  <div class="field-value">${experience}</div>
                </div>
                ${portfolioUrl ? `
                <div class="field">
                  <div class="field-label">Portfolio / LinkedIn</div>
                  <div class="field-value"><a href="${portfolioUrl}">${portfolioUrl}</a></div>
                </div>
                ` : ''}
                ${coverLetter ? `
                <div class="field">
                  <div class="field-label">Cover Letter</div>
                  <div class="message-box">${coverLetter.replace(/\n/g, '<br>')}</div>
                </div>
                ` : ''}
              </div>
            </div>
          </body>
          </html>
        `,
      }),
    });

    if (!adminEmailRes.ok) {
      console.error("Failed to send admin email:", await adminEmailRes.text());
    }

    // Send confirmation email to applicant
    const userEmailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Itoby Infotech <onboarding@resend.dev>",
        to: [email],
        subject: `Application Received: ${jobTitle} - Itoby Infotech`,
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
                <p>We've received your application for the <strong>${jobTitle}</strong> position.</p>
                
                <div class="highlight">
                  <p><strong>What happens next?</strong></p>
                  <p>Our HR team will carefully review your application. If your profile matches our requirements, we'll reach out to schedule an interview within 5-7 business days.</p>
                </div>
                
                <p>In the meantime, feel free to explore our website to learn more about our culture and work.</p>
                
                <p>Best regards,<br><strong>The Itoby Infotech HR Team</strong></p>
                
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
      console.error("Failed to send user email:", await userEmailRes.text());
    }

    return new Response(
      JSON.stringify({ success: true, message: "Emails sent successfully" }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } catch (error: any) {
    console.error("Error in send-job-application-email:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
