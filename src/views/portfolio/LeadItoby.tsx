import { CaseStudyTemplate } from "@/components/CaseStudyTemplate";
import heroImage from "@/assets/portfolio/lead-itoby.png";
import techflowImage from "@/assets/portfolio/techflow-saas.webp";
import b2bSaasImage from "@/assets/portfolio/b2b-saas-marketing.webp";

const caseStudy = {
  title: "Lead Itoby – Lead Scoring CRM",
  category: "Software",
  client: "Itoby Marketing Solutions",
  duration: "3.5 months",
  year: "2025",
  heroImage: heroImage,
  overview: "An automated lead generation, scoring, and marketing automation CRM built to help sales forces identify and convert high-intent prospective buyers.",
  challenge: [
    "Sales teams were overwhelmed by cold leads, resulting in high churn and low conversion rates.",
    "No structured pipeline tracking or central repository for marketing interaction points.",
    "Needed an automated scoring system to grade leads by email opens, site visits, and budget criteria.",
    "Required immediate notifications (SMS/Email/Webhook) as soon as high-value leads are scored."
  ],
  solution: [
    "Built a high-performance React dashboard showing conversion funnels, sales pipelines, and lead scores.",
    "Developed a customizable rule-based scoring engine calculating values from lead behavioral signals.",
    "Integrated custom email and WhatsApp marketing triggers to drip campaign sequences to segmented audiences.",
    "Configured direct webhook integrations to feed leads into external databases and slack channels instantly.",
    "Designed a responsive lead dashboard containing search filters, note logs, and appointment booking controls."
  ],
  results: [
    { metric: "Sales Conversion Rate", value: "+110%" },
    { metric: "Lead Response Time", value: "<15s" },
    { metric: "Cold Outreach Redundancy", value: "45% ↓" },
    { metric: "Deals Closed", value: "+88%" }
  ],
  techStack: ["React", "TypeScript", "Python (Django)", "PostgreSQL", "Redis", "Twilio", "Resend API"],
  testimonial: {
    quote: "Lead Itoby cut down our cold outreach fatigue immediately. By prioritizing hot leads based on their real-time scoring metrics, our sales reps closed nearly double the deals in a single quarter.",
    author: "Arjun Verma",
    role: "VP Sales, NextGen B2B Systems"
  },
  relatedProjects: [
    {
      title: "TechFlow SaaS Platform",
      category: "Software",
      image: techflowImage,
      path: "/portfolio/techflow"
    },
    {
      title: "B2B SaaS Campaign",
      category: "Marketing",
      image: b2bSaasImage,
      path: "/portfolio/b2b-saas"
    }
  ]
};

const LeadItoby = () => <CaseStudyTemplate caseStudy={caseStudy} />;

export default LeadItoby;
