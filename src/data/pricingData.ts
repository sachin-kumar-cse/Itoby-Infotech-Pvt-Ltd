export interface PricingGuideData {
  slug: string;
  title: string;
  serviceCategory: string;
  heroDescription: string;
  overview: string;
  costBreakdown: { tier: string; estimate: string; scope: string }[];
  factors: string[];
  faqs: { question: string; answer: string }[];
}

export const pricingGuidesList: PricingGuideData[] = [
  {
    slug: "website-development-cost",
    title: "Website Development Cost Guide 2026",
    serviceCategory: "Web Design & Next.js",
    heroDescription: "Transparent pricing guide & cost factors for custom website development, enterprise Next.js web applications, and headless e-commerce platforms.",
    overview: "At Itoby Infotech Pvt. Ltd., custom website development costs range from $2,500 for small business websites to $15,000+ for enterprise Next.js SaaS platforms. Here is a complete breakdown of project pricing, technology costs, and SLA maintenance estimates.",
    costBreakdown: [
      { tier: "Starter Business Site", estimate: "$2,500 - $4,500", scope: "5-8 custom pages, responsive design, basic SEO, contact form & SSL setup." },
      { tier: "Professional Custom Web App", estimate: "$5,500 - $9,500", scope: "Up to 15 pages, Next.js 15 SSR, custom UI/UX, blog CMS & analytics integration." },
      { tier: "Enterprise SaaS / Headless E-Com", estimate: "$12,000 - $25,000+", scope: "Unlimited pages, multi-tenant database, payment gateways, custom APIs & dedicated SLA support." }
    ],
    factors: [
      "Scope of Custom UI/UX Design vs Template Customization",
      "Choice of Technology Stack (Next.js 15, React, Node.js vs WordPress)",
      "Headless CMS & Database Complexity (Supabase, PostgreSQL, Sanity)",
      "Third-Party API Integrations (Stripe, Razorpay, Salesforce, CRM)",
      "Security & Compliance Standards (HIPAA, PCI-DSS, SOC 2)"
    ],
    faqs: [
      {
        question: "Why do custom Next.js websites cost more than basic WordPress templates?",
        answer: "Custom Next.js websites are bespoke software products engineered for sub-second page loads, 100/100 Core Web Vitals, zero plugin security vulnerabilities, and top Google SEO rankings."
      },
      {
        question: "Are there any hidden recurring fees after launch?",
        answer: "No. We provide 100% transparent quotes. Optional post-launch fees include domain registration, cloud hosting (Vercel/AWS), and optional monthly maintenance SLA retainers."
      }
    ]
  },
  {
    slug: "software-development-cost",
    title: "Custom Software Development Cost Guide 2026",
    serviceCategory: "Enterprise Software Engineering",
    heroDescription: "Comprehensive cost estimation guide for enterprise ERP/CRM development, workflow automation tools, and microservices architecture.",
    overview: "Custom software development at Itoby Infotech ranges from $8,000 for specialized workflow automation tools to $35,000+ for full-scale enterprise ERP systems. Explore our transparent cost parameters.",
    costBreakdown: [
      { tier: "Workflow Automation Tool", estimate: "$8,000 - $14,000", scope: "Custom automated scripts, webhook integrations, admin dashboard & reporting." },
      { tier: "Custom CRM / Client Portal", estimate: "$15,000 - $28,000", scope: "Multi-role access, RBAC, database indexing, billing sync & REST APIs." },
      { tier: "Enterprise ERP System", estimate: "$30,000 - $60,000+", scope: "Multi-tenant architecture, inventory, HR, financial ledger, auto-scaling AWS infrastructure." }
    ],
    factors: [
      "Number of User Roles & Permission Hierarchies",
      "Data Migration & Legacy System Integration Complexity",
      "Real-Time Database Sync & Messaging Queues (Redis/RabbitMQ)",
      "Dedicated DevOps & Cloud Infrastructure Setup"
    ],
    faqs: [
      {
        question: "Do you offer fixed-price or dedicated team sprint pricing?",
        answer: "We offer both fixed-price contracts for well-defined project scopes and time-and-materials / monthly agile sprint team retainers for evolving products."
      }
    ]
  }
];
