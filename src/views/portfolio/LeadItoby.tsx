import { CaseStudyTemplate } from "@/components/CaseStudyTemplate";
import heroImage from "@/assets/portfolio/lead-itoby.png";
import rentItobyImage from "@/assets/portfolio/rent-itoby.png";
import easy2buyImage from "@/assets/portfolio/easy2buy-ecommerce.webp";

const caseStudy = {
  title: "Lead Itoby – Lead Scoring CRM",
  category: "Software",
  client: "Company Product / Internal Project",
  duration: "3.5 months",
  year: "2025",
  heroImage: heroImage,
  overview: "An automated lead discovery, scoring, and sales pipeline CRM built as part of IIPL's proprietary SaaS suite to help sales teams track prospect interactions.",
  challenge: [
    "Sales teams needed structured pipeline tracking to categorize and prioritize prospect interactions.",
    "No centralized repository for managing multi-channel lead engagement points.",
    "Needed an automated scoring system to organize prospects by engagement and industry criteria.",
    "Required instant notification triggers (Email/Webhook) as soon as high-intent inquiries arrive."
  ],
  solution: [
    "Built a high-performance React dashboard showing sales pipelines, deal stages, and lead scores.",
    "Developed a rule-based scoring engine calculating values from engagement touchpoints.",
    "Integrated custom email and notification triggers to organize outreach sequences.",
    "Configured webhook integrations to connect leads with external databases and notification channels.",
    "Designed a responsive lead dashboard containing search filters, note logs, and appointment booking controls."
  ],
  results: [
    { metric: "Dashboard", value: "React + TS" },
    { metric: "Backend", value: "Python / Django" },
    { metric: "Database", value: "PostgreSQL" },
    { metric: "Cache & Queue", value: "Redis" }
  ],
  techStack: ["React", "TypeScript", "Python (Django)", "PostgreSQL", "Redis", "Twilio", "Resend API"],
  relatedProjects: [
    {
      title: "Rent Itoby – Rental CRM Dashboard",
      category: "Software",
      image: rentItobyImage,
      path: "/portfolio/rent-itoby"
    },
    {
      title: "Easy2Buy Fashion E-commerce",
      category: "E-commerce",
      image: easy2buyImage,
      path: "/portfolio/easy2buy"
    }
  ]
};

const LeadItoby = () => <CaseStudyTemplate caseStudy={caseStudy} />;

export default LeadItoby;
