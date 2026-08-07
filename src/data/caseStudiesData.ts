export interface CaseStudyData {
  slug: string;
  title: string;
  clientName: string;
  clientIndustry: string;
  badge: string;
  heroDescription: string;
  overview: string;
  businessChallenge: string;
  existingProblems: string[];
  objectives: string[];
  solutionDelivered: string;
  technologiesUsed: string[];
  featuresDeveloped: string[];
  architectureOverview: string;
  developmentTimeline: string;
  results: { metric: string; label: string }[];
  performanceImprovements: { metric: string; label: string }[];
  businessOutcomes: string[];
  lessonsLearned: string[];
  relatedServices: { name: string; path: string }[];
  relatedTechnologies: { name: string; path: string }[];
  relatedProducts: { name: string; path: string }[];
  faqs: { question: string; answer: string }[];
}

export const caseStudiesList: CaseStudyData[] = [
  {
    slug: "leadflow-saas",
    title: "LeadFlow B2B SaaS: Automated Lead Scraping & AI Site Auditing Engine",
    clientName: "IIPL SaaS Lab",
    clientIndustry: "B2B Sales Tech & Lead Generation",
    badge: "Flagship B2B SaaS",
    heroDescription: "How we engineered an autonomous B2B lead generation engine with Google Maps scraper and 15-second AI site auditor processing 50,000+ leads daily.",
    overview: "LeadFlow (IIPL Lead) was engineered to solve high manual customer acquisition costs for tech agencies. It combines real-time Google Maps business data extraction with a 15-second automated website performance auditor that generates personalized PDF audit reports for cold outreach.",
    businessChallenge: "B2B sales teams were spending 20+ hours per week manually searching Google Maps for local business contacts, evaluating site speeds manually, and writing cold emails with low open rates (< 12%).",
    existingProblems: [
      "Manual data entry errors when copying business addresses and phone numbers",
      "No automated way to evaluate site performance bugs before reaching out",
      "Low cold email response rates due to generic un-personalized templates",
      "Lack of centralized Kanban pipeline tracking for multi-agent sales teams"
    ],
    objectives: [
      "Automate Google Maps lead extraction with 99% email & phone accuracy",
      "Build a 15-second AI site auditor running Lighthouse performance audits on demand",
      "Triple cold email response rates via automated audit report attachments",
      "Achieve sub-second database query speeds for multi-tenant sales accounts"
    ],
    solutionDelivered: "We engineered a full-stack Next.js 15 App Router platform with Puppeteer headless scraping microservices, PostgreSQL Pgvector indexing, and automated Node.js SMTP dunning pipelines.",
    technologiesUsed: ["Next.js 15", "TypeScript", "Node.js", "Puppeteer", "PostgreSQL", "Supabase", "OpenAI API", "Tailwind CSS"],
    featuresDeveloped: [
      "Google Maps Local Business Geolocation Scraper",
      "15-Second Headless Lighthouse AI Website Auditor",
      "Automated Cold Email Sequence & Dunning Trigger Engine",
      "Kanban Deal Stage Sales Pipeline Dashboard",
      "SMTP & Custom Domain Inbox Warm-Up Engine",
      "Real-Time Email Open & Link Click Tracking Telemetry"
    ],
    architectureOverview: "Built on Next.js 15 Server Components, the backend delegates heavy scraping and Lighthouse audits to asynchronous background worker queues, storing structured JSON lead payloads in Supabase PostgreSQL with Row Level Security.",
    developmentTimeline: "10 Weeks (Initial MVP in 4 weeks, AI Audit Engine in 3 weeks, Pipeline Dashboards in 3 weeks).",
    results: [
      { metric: "50,000+", label: "Leads Scraped Daily" },
      { metric: "3.2x", label: "Cold Email Response Increase" },
      { metric: "15 Sec", label: "Average AI Site Audit Speed" },
      { metric: "99.9%", label: "Uptime on Vercel CDN" }
    ],
    performanceImprovements: [
      { metric: "100/100", label: "Core Web Vitals Score" },
      { metric: "< 800ms", label: "LCP Page Load Speed" },
      { metric: "0.00", label: "Cumulative Layout Shift (CLS)" }
    ],
    businessOutcomes: [
      "Reduced client customer acquisition costs (CAC) by 65% in 60 days",
      "Scaled lead processing to 500+ active agency sub-accounts",
      "Generated over 1.2 Million automated cold email outreach sequences"
    ],
    lessonsLearned: [
      "Asynchronous headless worker queues prevent main-thread server timeouts during bulk site audits.",
      "Personalizing cold emails with instant performance metrics dramatically boosts B2B conversion trust."
    ],
    relatedServices: [
      { name: "Custom Software Development", path: "/services/custom-software-development" },
      { name: "SaaS Development Company", path: "/services/saas-development-company" }
    ],
    relatedTechnologies: [
      { name: "Next.js Development", path: "/technology/nextjs" },
      { name: "Node.js Backend", path: "/technology/nodejs" }
    ],
    relatedProducts: [
      { name: "LeadFlow SaaS", path: "/products/leadflow" }
    ],
    faqs: [
      {
        question: "How does LeadFlow's 15-second AI site auditor work?",
        answer: "LeadFlow launches a headless Chrome instance that evaluates FCP, LCP, CLS, and mobile responsiveness, immediately embedding the results into a personalized lead email."
      }
    ]
  },
  {
    slug: "billing-saas",
    title: "IIPL Billing: Scalable GST Cloud Invoicing & Retainer SaaS",
    clientName: "Enterprise Retail & SaaS Clients",
    clientIndustry: "FinTech & Automated Billing",
    badge: "FinTech SaaS",
    heroDescription: "How we built a multi-tenant cloud GST billing platform processing $25M+ in annual invoices with sub-second PDF generation and WhatsApp delivery.",
    overview: "IIPL Billing is a multi-tenant GST invoicing and retainer accounting software designed for SMBs, retail store chains, and tech agencies requiring compliant tax invoice generation.",
    businessChallenge: "Legacy billing software was slow, desktop-bound, and required manual calculations for CGST, SGST, and IGST tax splits, causing accounting delays and frequent billing errors.",
    existingProblems: [
      "Manual tax calculations causing GSTR-1 filing discrepancies",
      "No support for instant digital invoice delivery via WhatsApp",
      "Slow PDF rendering taking up to 30 seconds per invoice",
      "Lack of recurring subscription billing triggers for monthly retainers"
    ],
    objectives: [
      "Automate 100% of GST tax calculations and HSN/SAC code lookups",
      "Achieve sub-second serverless PDF invoice rendering",
      "Enable instant digital receipt delivery via WhatsApp Business Cloud API",
      "Support multi-tenant client organization data isolation"
    ],
    solutionDelivered: "We engineered an enterprise cloud billing SaaS using Next.js 15, PostgreSQL database partitioning, Stripe API integration, and automated WhatsApp delivery queues.",
    technologiesUsed: ["Next.js 15", "React 19", "Node.js", "PostgreSQL", "Supabase", "Stripe API", "WhatsApp Cloud API"],
    featuresDeveloped: [
      "Automated HSN/SAC Tax Code Indexing & GST Splitter",
      "Sub-Second PDF Tax Invoice & Credit Note Generator",
      "Direct WhatsApp Business PDF Receipt Sender",
      "Multi-Currency Stripe & Razorpay Payment Sync",
      "Automated Subscription Retainer & Dunning Reminders",
      "GSTR-1 JSON Export & Audit Trail Reporting"
    ],
    architectureOverview: "Leveraging PostgreSQL Row Level Security (RLS) and Supabase database functions, client financial records are isolated per tenant workspace with automated daily backups.",
    developmentTimeline: "8 Weeks (Core billing schemas in 3 weeks, PDF/WhatsApp API in 2 weeks, Retainers & Tax Analytics in 3 weeks).",
    results: [
      { metric: "$25M+", label: "Invoices Processed Annually" },
      { metric: "< 500ms", label: "PDF Rendering Latency" },
      { metric: "100%", label: "GST Compliance Rate" },
      { metric: "75%", label: "Faster Payment Collection" }
    ],
    performanceImprovements: [
      { metric: "100/100", label: "Core Web Vitals Rating" },
      { metric: "0ms", label: "Tax Calculation Latency" }
    ],
    businessOutcomes: [
      "Eliminated 100% of manual tax calculation errors for 1,200+ active business users",
      "Accelerated payment collection cycles from 14 days down to 3 days using instant WhatsApp links"
    ],
    lessonsLearned: [
      "Offloading PDF generation to serverless Edge functions prevents server memory exhaustion under peak end-of-month billing surges."
    ],
    relatedServices: [
      { name: "Software Solutions", path: "/services/software-solutions" },
      { name: "SaaS Development Company", path: "/services/saas-development-company" }
    ],
    relatedTechnologies: [
      { name: "Supabase Development", path: "/technology/supabase-development" },
      { name: "PostgreSQL Architecture", path: "/technology/postgresql-development" }
    ],
    relatedProducts: [
      { name: "IIPL Billing SaaS", path: "/products/billing" }
    ],
    faqs: [
      {
        question: "Can IIPL Billing export data directly for monthly GST filing?",
        answer: "Yes. IIPL Billing exports GSTR-1 and GSTR-3B compliant JSON/Excel files compatible with CA tax portals."
      }
    ]
  },
  {
    slug: "jetsetterss",
    title: "Jetsetterss: Premium Luxury Travel & Concierge Platform",
    clientName: "Jetsetterss Luxury Travel Ltd",
    clientIndustry: "Hospitality & High-Net-Worth Concierge",
    badge: "Luxury Travel Tech",
    heroDescription: "Engineering a high-conversion luxury travel booking portal with interactive villa tours, real-time itinerary builder, and concierge messaging.",
    overview: "Jetsetterss is an elite luxury travel and private villa rental portal serving high-net-worth travelers with curated destination experiences, private jet charters, and 24/7 concierge support.",
    businessChallenge: "The legacy luxury travel site was slow, lacked responsive mobile support, and failed to communicate the premium brand aesthetics required to convert high-ticket vacation bookings.",
    existingProblems: [
      "Slow image load speeds delaying property photo galleries",
      "Clunky contact forms with no real-time WhatsApp concierge integration",
      "Unoptimized SEO preventing high-intent organic luxury keyword rankings"
    ],
    objectives: [
      "Build a luxury glassmorphic Next.js web application with sub-second page loads",
      "Implement high-resolution progressive image optimization for property galleries",
      "Integrate instant 24/7 WhatsApp luxury concierge chat widgets",
      "Achieve #1 Google rankings for luxury villa charter terms"
    ],
    solutionDelivered: "We designed and engineered a custom Next.js 15 application featuring 100/100 Core Web Vitals, Framer Motion luxury animations, and headless media delivery via Vercel Edge.",
    technologiesUsed: ["Next.js 15", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Supabase"],
    featuresDeveloped: [
      "Interactive 3D Villa Photo & Video Showcase",
      "Custom Itinerary Builder & Booking Engine",
      "WhatsApp Instant VIP Concierge Chat Integration",
      "Multi-Currency Luxury Pricing Calculator",
      "Localized SEO Metadata & Structured Schema Graph"
    ],
    architectureOverview: "Built with Next.js 15 App Router and server-rendered components, delivering pre-rendered static HTML pages for all villa listings with sub-second Edge CDN delivery.",
    developmentTimeline: "6 Weeks (UI/UX wireframing in 2 weeks, Next.js frontend in 3 weeks, SEO & launch in 1 week).",
    results: [
      { metric: "+210%", label: "Luxury Booking Inquiries" },
      { metric: "< 600ms", label: "Page Load Speed" },
      { metric: "100/100", label: "Lighthouse Performance" },
      { metric: "+180%", label: "Organic Search Growth" }
    ],
    performanceImprovements: [
      { metric: "0.9s", label: "Largest Contentful Paint (LCP)" },
      { metric: "0ms", label: "Interaction to Next Paint (INP)" }
    ],
    businessOutcomes: [
      "Increased qualified high-ticket villa rental bookings by 210% in 90 days",
      "Established brand as a top luxury travel portal across US and European markets"
    ],
    lessonsLearned: [
      "Ultra-high-resolution luxury imagery requires AVIF/WebP Next.js image optimization to maintain sub-second load times without compromising visual fidelity."
    ],
    relatedServices: [
      { name: "Web Development Company", path: "/services/web-development-company" },
      { name: "Digital Marketing", path: "/services/digital-marketing" }
    ],
    relatedTechnologies: [
      { name: "Next.js Development", path: "/technology/nextjs" },
      { name: "React Development", path: "/technology/react" }
    ],
    relatedProducts: [
      { name: "LeadFlow SaaS", path: "/products/leadflow" }
    ],
    faqs: [
      {
        question: "How did Next.js 15 benefit the Jetsetterss luxury platform?",
        answer: "Next.js 15 provided sub-second server rendering and progressive image loading, allowing high-resolution luxury photos to load instantly."
      }
    ]
  },
  {
    slug: "ai-voice-calling",
    title: "IIPL Calling: Autonomous Voice AI Inbound & Outbound Agent",
    clientName: "Insurance & Real Estate Clients",
    clientIndustry: "Telecommunications & Voice AI",
    badge: "Voice AI Platform",
    heroDescription: "How we built a conversational Voice AI telephony platform with sub-800ms response latency handling 10,000+ simultaneous customer calls.",
    overview: "IIPL Calling is an autonomous voice AI agent platform that conducts natural human-like phone calls, qualifies incoming leads, and books appointments directly into client CRMs.",
    businessChallenge: "Call centers were suffering from 40%+ missed call rates during peak hours, high staff turnover, and expensive per-call operational costs.",
    existingProblems: [
      "High missed inbound customer call volume during off-hours",
      "Slow manual lead follow-up taking over 24 hours",
      "Expensive call center staffing and training overhead"
    ],
    objectives: [
      "Build a sub-800ms voice AI pipeline for natural conversation turn-taking",
      "Automate 100% of off-hour inbound customer inquiries",
      "Integrate bi-directional telephony with CRM calendar booking",
      "Support multi-language neural speech models (English, Spanish, Hindi)"
    ],
    solutionDelivered: "We engineered a real-time voice streaming pipeline connecting Twilio SIP trunks with OpenAI Realtime API and FastAPI microservices.",
    technologiesUsed: ["Python", "FastAPI", "Twilio Telephony", "OpenAI Realtime API", "Supabase", "WebSockets"],
    featuresDeveloped: [
      "Sub-800ms Neural Speech Synthesis Engine",
      "Inbound 24/7 Answering & Lead Triage Bot",
      "Outbound Automated Cold Calling & Survey Agent",
      "Google Calendar & CRM Appointment Booking Gateway",
      "Real-Time Telephony Call Transcript & Sentiment Analyzer"
    ],
    architectureOverview: "Leveraging WebSockets over Twilio media streams, audio packets are processed by low-latency Python worker nodes running zero-retention neural speech models.",
    developmentTimeline: "8 Weeks (Audio pipeline in 3 weeks, CRM integrations in 3 weeks, Field testing in 2 weeks).",
    results: [
      { metric: "< 800ms", label: "Turn-Taking Latency" },
      { metric: "10,000+", label: "Simultaneous Calls Handled" },
      { metric: "80%", label: "Call Center Cost Reduction" },
      { metric: "0", label: "Missed Inbound Calls" }
    ],
    performanceImprovements: [
      { metric: "99.9%", label: "Audio Stream Reliability" }
    ],
    businessOutcomes: [
      "Eliminated missed inbound calls 24/7 for participating insurance agencies",
      "Lowered customer lead intake costs from $12 per call down to $0.40 per call"
    ],
    lessonsLearned: [
      "Optimizing WebSocket audio buffer sizes is critical to achieving natural, sub-second conversational latency."
    ],
    relatedServices: [
      { name: "AI Development Company", path: "/services/ai-development-company" },
      { name: "AI Agent Development", path: "/services/ai-agent-development" }
    ],
    relatedTechnologies: [
      { name: "OpenAI Integration", path: "/technology/openai-integration" },
      { name: "AI Automation", path: "/technology/ai-automation" }
    ],
    relatedProducts: [
      { name: "IIPL Calling Voice AI", path: "/products/calling" }
    ],
    faqs: [
      {
        question: "Can IIPL Calling sync call data with custom CRMs?",
        answer: "Yes. Immediately after a phone call ends, call transcripts and appointment details sync automatically to your CRM via webhooks."
      }
    ]
  }
];
