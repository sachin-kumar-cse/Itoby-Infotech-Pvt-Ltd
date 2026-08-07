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
  },
  {
    slug: "saas-development-cost",
    title: "SaaS Development Cost Guide 2026",
    serviceCategory: "SaaS Product Engineering",
    heroDescription: "Transparent cost guide for multi-tenant SaaS MVPs, subscription billing engines, and cloud software infrastructure.",
    overview: "Multi-tenant SaaS development at Itoby Infotech ranges from $10,000 for a seed-stage MVP to $40,000+ for enterprise multi-tenant platforms with automated billing, analytics, and RBAC.",
    costBreakdown: [
      { tier: "SaaS MVP Core", estimate: "$10,000 - $18,000", scope: "Multi-tenant auth, Stripe billing, dashboard, PostgreSQL database & 5 core features." },
      { tier: "Growth SaaS Platform", estimate: "$20,000 - $35,000", scope: "Advanced RLS security, team workspaces, usage metrics, webhooks & API keys." },
      { tier: "Enterprise Multi-Tenant SaaS", estimate: "$40,000 - $75,000+", scope: "Custom DB schemas, white-label branding, SOC 2 audit logs & 24/7 SLA." }
    ],
    factors: [
      "Tenant Isolation Architecture (Row Level Security vs Separate DB)",
      "Subscription & Tiered Metered Billing Complexity (Stripe API)",
      "Integrations with Enterprise Auth (SAML SSO, Okta, OAuth)",
      "Automated DevOps CI/CD & Multi-Region Cloud Deployment"
    ],
    faqs: [
      {
        question: "How much does it cost to build a SaaS MVP in 2026?",
        answer: "A production-ready SaaS MVP with multi-tenant auth, subscription billing, and responsive Next.js 15 UI typically costs between $10,000 and $18,000."
      }
    ]
  },
  {
    slug: "ai-development-cost",
    title: "AI Development & LLM Integration Cost Guide 2026",
    serviceCategory: "AI Engineering & RAG",
    heroDescription: "Cost estimation guide for custom AI development, RAG document search engines, LLM fine-tuning, and AI voice agents.",
    overview: "Custom AI development costs range from $5,000 for a RAG knowledge base chatbot integration to $30,000+ for autonomous multi-agent enterprise automation tools.",
    costBreakdown: [
      { tier: "AI Chatbot / RAG Setup", estimate: "$5,000 - $9,500", scope: "PDF/Doc vector embeddings, OpenAI GPT-4o integration, web chat widget & Supabase Pgvector." },
      { tier: "Conversational AI Voice Agent", estimate: "$12,000 - $22,000", scope: "Real-time speech-to-text, LLM prompt engineering, telephony sync & booking integrations." },
      { tier: "Autonomous Multi-Agent AI System", estimate: "$25,000 - $50,000+", scope: "Multi-agent coordination (CrewAI/LangChain), tool execution, safety guardrails & human approval portal." }
    ],
    factors: [
      "Model Choice (OpenAI API vs Privately Hosted Llama 3 / DeepSeek)",
      "Vector Database Scale & Indexing (Pgvector, Pinecone, Qdrant)",
      "Real-Time Telephony & Voice Audio Streaming Costs",
      "Human-in-the-Loop Approval Workflow Complexity"
    ],
    faqs: [
      {
        question: "What is the ongoing API cost of running an AI application?",
        answer: "API costs depend on usage volume. For example, OpenAI GPT-4o-mini costs pennies per thousand tokens, while high-density enterprise RAG setups typically average $50-$300/month in LLM API fees."
      }
    ]
  },
  {
    slug: "custom-crm-development-cost",
    title: "Custom CRM Development Cost Guide 2026",
    serviceCategory: "Sales Tech & Automation",
    heroDescription: "Pricing guide and cost factors for custom sales CRMs, B2B lead scoring tools, and WhatsApp outreach engines.",
    overview: "Custom CRM development ranges from $9,000 for specialized sales lead tracking tools to $25,000+ for enterprise CRMs with automated WhatsApp routing and multi-branch revenue analytics.",
    costBreakdown: [
      { tier: "Sales Lead Tracker CRM", estimate: "$9,000 - $14,000", scope: "Kanban deal pipeline, web form lead capture, activity history & CSV export." },
      { tier: "Outreach & Automation CRM", estimate: "$15,000 - $25,000", scope: "WhatsApp & cold email sync, automated lead scoring, team metrics & invoicing." }
    ],
    factors: [
      "Number of Custom Sales Stages & Lead Sources",
      "WhatsApp & Cold Email Automation Engine Integration",
      "Team Role Permissions & Data Visibility Limits"
    ],
    faqs: [
      {
        question: "Why invest in a custom CRM instead of Salesforce or HubSpot?",
        answer: "Custom CRMs carry zero per-user monthly licensing fees, match your exact sales methodology 100%, and offer complete control over your client data without hidden tier upgrades."
      }
    ]
  }
];
