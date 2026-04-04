import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

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
    const WEBHOOK_URL = Deno.env.get("WEBHOOK_NOTIFICATION_URL");
    if (!WEBHOOK_URL) {
      console.warn("WEBHOOK_NOTIFICATION_URL not configured, skipping notification");
      return new Response(
        JSON.stringify({ success: false, reason: "Webhook URL not configured" }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const { type, data } = await req.json();

    if (!type || !data) {
      return new Response(
        JSON.stringify({ error: "Missing type or data" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Format message based on type
    let title = "";
    let message = "";
    let color = "#84cc16";

    switch (type) {
      case "contact":
        title = "📬 New Contact Form Submission";
        message = `**Name:** ${data.name}\n**Email:** ${data.email}\n**Phone:** ${data.phone || "N/A"}\n**Service:** ${data.service}\n**Message:** ${data.message}`;
        color = "#22c55e";
        break;
      case "quote":
        title = "💰 New Quote Request";
        message = `**Name:** ${data.name}\n**Email:** ${data.email}\n**Company:** ${data.company || "N/A"}\n**Services:** ${Array.isArray(data.services) ? data.services.join(", ") : data.services}\n**Budget:** ${data.budget}\n**Timeline:** ${data.timeline}`;
        color = "#3b82f6";
        break;
      case "job_application":
        title = "👤 New Job Application";
        message = `**Name:** ${data.name}\n**Email:** ${data.email}\n**Position:** ${data.job_title}\n**Experience:** ${data.experience}`;
        color = "#8b5cf6";
        break;
      case "newsletter":
        title = "📧 New Newsletter Subscriber";
        message = `**Email:** ${data.email}`;
        color = "#f59e0b";
        break;
      case "appointment":
        title = "📅 New Appointment Booked";
        message = `**Name:** ${data.name}\n**Email:** ${data.email}\n**Service:** ${data.service}\n**Date:** ${data.date}\n**Time:** ${data.time_slot}\n**Company:** ${data.company || "N/A"}`;
        color = "#06b6d4";
        break;
      case "chat_handoff":
        title = "🤝 Chat Human Handoff Requested";
        message = `**Visitor wants to talk to a human**\n**Last message:** ${data.lastMessage || "N/A"}\n**Via:** ${data.channel || "Chat"}`;
        color = "#ef4444";
        break;
      default:
        title = `🔔 New Notification: ${type}`;
        message = JSON.stringify(data, null, 2);
    }

    // Detect webhook type and format payload
    let payload: any;

    if (WEBHOOK_URL.includes("hooks.slack.com")) {
      // Slack format
      payload = {
        blocks: [
          {
            type: "header",
            text: { type: "plain_text", text: title, emoji: true },
          },
          {
            type: "section",
            text: { type: "mrkdwn", text: message.replace(/\*\*/g, "*") },
          },
          {
            type: "context",
            elements: [
              {
                type: "mrkdwn",
                text: `⏰ ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST | via Itoby Infotech Website`,
              },
            ],
          },
        ],
      };
    } else if (WEBHOOK_URL.includes("office.com") || WEBHOOK_URL.includes("webhook.office")) {
      // Microsoft Teams format
      payload = {
        "@type": "MessageCard",
        "@context": "http://schema.org/extensions",
        themeColor: color.replace("#", ""),
        summary: title,
        sections: [
          {
            activityTitle: title,
            facts: Object.entries(data)
              .filter(([_, v]) => v)
              .map(([k, v]) => ({
                name: k.charAt(0).toUpperCase() + k.slice(1).replace(/_/g, " "),
                value: String(v),
              })),
            markdown: true,
          },
        ],
      };
    } else if (WEBHOOK_URL.includes("discord.com")) {
      // Discord format
      payload = {
        embeds: [
          {
            title,
            description: message.replace(/\*\*/g, "**"),
            color: parseInt(color.replace("#", ""), 16),
            timestamp: new Date().toISOString(),
            footer: { text: "Itoby Infotech Website" },
          },
        ],
      };
    } else {
      // Generic webhook
      payload = {
        event: type,
        title,
        message,
        data,
        timestamp: new Date().toISOString(),
        source: "itobyinfotech.com",
      };
    }

    const webhookRes = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!webhookRes.ok) {
      console.error("Webhook send failed:", webhookRes.status, await webhookRes.text());
      return new Response(
        JSON.stringify({ success: false, status: webhookRes.status }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Webhook error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
