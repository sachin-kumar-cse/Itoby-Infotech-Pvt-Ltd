import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const BASE_URL = "https://itobyinfotech.in";

const STATIC_PAGES = [
  { loc: "/", changefreq: "weekly", priority: "1.0" },
  { loc: "/about", changefreq: "monthly", priority: "0.8" },
  { loc: "/services", changefreq: "monthly", priority: "0.9" },
  { loc: "/services/web-design", changefreq: "monthly", priority: "0.8" },
  { loc: "/services/mobile-app", changefreq: "monthly", priority: "0.8" },
  { loc: "/services/digital-marketing", changefreq: "monthly", priority: "0.8" },
  { loc: "/services/software-solutions", changefreq: "monthly", priority: "0.8" },
  { loc: "/services/microsoft-365", changefreq: "monthly", priority: "0.8" },
  { loc: "/portfolio", changefreq: "weekly", priority: "0.8" },
  { loc: "/blog", changefreq: "daily", priority: "0.8" },
  { loc: "/contact", changefreq: "monthly", priority: "0.7" },
  { loc: "/careers", changefreq: "weekly", priority: "0.7" },
  { loc: "/request-quote", changefreq: "monthly", priority: "0.7" },
  { loc: "/privacy", changefreq: "yearly", priority: "0.3" },
  { loc: "/terms", changefreq: "yearly", priority: "0.3" },
];

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    // Fetch published blog posts and active projects
    const [blogRes, projectsRes, jobsRes] = await Promise.all([
      supabase
        .from("blog_posts")
        .select("slug, updated_at")
        .eq("is_published", true)
        .order("updated_at", { ascending: false }),
      supabase
        .from("projects")
        .select("slug, updated_at")
        .eq("is_active", true)
        .order("updated_at", { ascending: false }),
      supabase
        .from("jobs")
        .select("id, updated_at")
        .eq("is_active", true)
        .order("updated_at", { ascending: false }),
    ]);

    const blogs = blogRes.data || [];
    const projects = projectsRes.data || [];
    const jobs = jobsRes.data || [];

    // Build XML
    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

    // Static pages
    for (const page of STATIC_PAGES) {
      xml += `  <url>\n`;
      xml += `    <loc>${BASE_URL}${page.loc}</loc>\n`;
      xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
      xml += `    <priority>${page.priority}</priority>\n`;
      xml += `  </url>\n`;
    }

    // Dynamic blog posts
    for (const post of blogs) {
      const lastmod = post.updated_at ? post.updated_at.split("T")[0] : "";
      xml += `  <url>\n`;
      xml += `    <loc>${BASE_URL}/blog/${post.slug}</loc>\n`;
      if (lastmod) xml += `    <lastmod>${lastmod}</lastmod>\n`;
      xml += `    <changefreq>monthly</changefreq>\n`;
      xml += `    <priority>0.6</priority>\n`;
      xml += `  </url>\n`;
    }

    // Dynamic portfolio projects
    for (const project of projects) {
      const lastmod = project.updated_at ? project.updated_at.split("T")[0] : "";
      xml += `  <url>\n`;
      xml += `    <loc>${BASE_URL}/portfolio/${project.slug}</loc>\n`;
      if (lastmod) xml += `    <lastmod>${lastmod}</lastmod>\n`;
      xml += `    <changefreq>monthly</changefreq>\n`;
      xml += `    <priority>0.6</priority>\n`;
      xml += `  </url>\n`;
    }

    // Dynamic job pages
    for (const job of jobs) {
      const lastmod = job.updated_at ? job.updated_at.split("T")[0] : "";
      xml += `  <url>\n`;
      xml += `    <loc>${BASE_URL}/careers/${job.id}</loc>\n`;
      if (lastmod) xml += `    <lastmod>${lastmod}</lastmod>\n`;
      xml += `    <changefreq>weekly</changefreq>\n`;
      xml += `    <priority>0.5</priority>\n`;
      xml += `  </url>\n`;
    }

    xml += `</urlset>`;

    return new Response(xml, {
      status: 200,
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "public, max-age=3600",
        ...corsHeaders,
      },
    });
  } catch (error) {
    console.error("Sitemap generation error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to generate sitemap" }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
