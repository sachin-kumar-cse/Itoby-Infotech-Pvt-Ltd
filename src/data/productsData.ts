export interface ProductData {
  slug: string;
  name: string;
  tagline: string;
  category: "CRM" | "Billing" | "Lead Management" | "AI" | "Automation" | "PropTech";
  badge: string;
  externalUrl?: string;
  heroDescription: string;
  overview: string;
  targetAudience: string;
  keyFeatures: string[];
  benefits: string[];
  howItWorks: { step: string; title: string; description: string }[];
  techStack: string[];
  useCases: string[];
  targetIndustries: string[];
  faqs: { question: string; answer: string }[];
}

export const productsList: ProductData[] = [
  {
    slug: "leadflow",
    name: "IIPL Lead (LeadFlow SaaS)",
    tagline: "AI Cold Email & B2B Lead Generation CRM",
    category: "Lead Management",
    badge: "Flagship SaaS",
    externalUrl: "https://lead.itobyinfotech.com",
    heroDescription: "Autonomous B2B lead generation, Google Maps business scraper, 15-second instant AI site auditor, and personalized cold email outreach automation.",
    overview: "IIPL Lead (LeadFlow) is an enterprise B2B lead discovery and sales outreach platform. Scraping real-time decision-maker contacts from Google Maps and LinkedIn, it runs automated AI site audits and triggers personalized email campaigns.",
    targetAudience: "B2B Sales Agencies, Tech Consultancies, SaaS Founders, and Digital Marketing Teams",
    keyFeatures: [
      "Real-time Google Maps & Local Business Scraper",
      "15-Second Instant AI Website Performance Auditor",
      "Automated Cold Email Sequence & Dunning Engine",
      "CRM Lead Pipeline Kanban Board",
      "SMTP & Email Domain Warm-Up System",
      "AI Personalized Email Body Generator"
    ],
    benefits: [
      "Extract 1,000+ verified B2B leads per hour automatically",
      "Increase cold email open rates by 3x with personalized AI audits",
      "Integrated lead scoring and CRM pipeline management",
      "Zero manual data entry with auto-enrichment APIs"
    ],
    howItWorks: [
      { step: "01", title: "Search & Scrape", description: "Input target industry and city to scrape verified B2B leads from Google Maps." },
      { step: "02", title: "Run Instant AI Audit", description: "LeadFlow runs a 15-second site audit highlighting performance bugs." },
      { step: "03", title: "Trigger Email Campaign", description: "Send personalized audit reports automatically to decision-maker emails." }
    ],
    techStack: ["Next.js 15", "TypeScript", "Node.js", "Puppeteer", "PostgreSQL", "Supabase", "OpenAI API"],
    useCases: [
      "Digital Marketing Client Acquisition",
      "B2B Software Agency Sales Outreach",
      "Local Business Service Lead Scraping",
      "SaaS Product Cold Outreach"
    ],
    targetIndustries: ["Healthcare", "Real Estate", "FinTech", "E-Commerce", "Services"],
    faqs: [
      {
        question: "What makes IIPL Lead (LeadFlow) unique?",
        answer: "LeadFlow combines live Google Maps lead extraction with a 15-second AI site auditor, giving your cold email outreach high-value personalized reports that triple response rates."
      }
    ]
  },
  {
    slug: "billing",
    name: "IIPL Billing (GST Invoicing SaaS)",
    tagline: "Enterprise Cloud GST Invoicing & Accounting Software",
    category: "Billing",
    badge: "GST Approved",
    externalUrl: "https://billing.itobyinfotech.com",
    heroDescription: "Multi-tenant GST billing software, automated tax invoice generation, recurring client subscriptions, and WhatsApp receipt delivery.",
    overview: "IIPL Billing simplifies GST tax compliance, automated PDF invoice creation, recurring retainer billing, and client payment links for SMBs, freelancers, and enterprises.",
    targetAudience: "Small Business Owners, Retail Stores, Agencies, and Accounting Teams",
    keyFeatures: [
      "Automated HSN/SAC Tax Code Indexing & GST Calculation",
      "One-Click PDF Tax Invoice & Credit Note Builder",
      "Instant WhatsApp & Email Invoice Delivery",
      "Stripe & Razorpay Payment Gateway Integration",
      "Automated Payment Overdue Reminders & Retainer Billing",
      "Comprehensive GSTR-1 & GSTR-3B Tax Filing Analytics"
    ],
    benefits: [
      "Reduce invoice generation time from 15 minutes to 30 seconds",
      "Accelerate payment collection by 50% with instant payment links",
      "100% compliant with Indian GST laws and international e-invoicing standards",
      "Multi-currency conversion for global client billing"
    ],
    howItWorks: [
      { step: "01", title: "Client & Item Setup", description: "Add client details and catalog products with HSN tax codes." },
      { step: "02", title: "Generate Invoice", description: "Click once to build a branded PDF tax invoice with QR payment code." },
      { step: "03", title: "Auto WhatsApp Send", description: "Send invoice directly to client WhatsApp with one-click payment link." }
    ],
    techStack: ["Next.js 15", "React", "TypeScript", "PostgreSQL", "Supabase", "Stripe API", "Puppeteer PDF"],
    useCases: [
      "Retail GST Invoicing",
      "B2B Monthly Retainer Billing",
      "Freelance Invoice Management",
      "Multi-Branch Store Billing"
    ],
    targetIndustries: ["Retail", "Services", "Manufacturing", "Logistics", "Education"],
    faqs: [
      {
        question: "Is IIPL Billing fully compliant with GST regulations?",
        answer: "Yes. IIPL Billing supports CGST, SGST, IGST, UTGST, HSN/SAC codes, and GSTR-1 JSON export formats required for monthly filing."
      }
    ]
  },
  {
    slug: "whatsapp",
    name: "IIPL Cashmemo (WhatsApp SaaS)",
    tagline: "Instant Retail Digital Cash Memo Builder via WhatsApp",
    category: "Automation",
    badge: "POS & Retail",
    externalUrl: "https://cashmemo.itobyinfotech.com",
    heroDescription: "Cloud POS cash memo generator allowing retail store cashier staff to send digital PDF receipts to customers via WhatsApp in 5 seconds.",
    overview: "IIPL Cashmemo eliminates paper thermal receipts. Retail store cashiers enter items on a lightweight web dashboard, generating digital PDF receipts delivered directly to customer WhatsApp numbers.",
    targetAudience: "Retail Outlets, Supermarkets, Restaurants, Garment Shops, and Service Counters",
    keyFeatures: [
      "5-Second Digital Cash Memo Generation",
      "Direct WhatsApp Cloud API Delivery",
      "Bar-code Scanner Web App Support",
      "Daily Cash Counter Sales Analytics",
      "Customer Phone Directory & Loyalty CRM",
      "Zero Paper Thermal Printer Dependency"
    ],
    benefits: [
      "Save $1,000+ per year on thermal paper rolls and ink cartridges",
      "Build a verified WhatsApp customer database with every sale",
      "Zero app download required for customers",
      "Eco-friendly 100% paperless retail checkout"
    ],
    howItWorks: [
      { step: "01", title: "Punch Items", description: "Cashier selects items or scans barcodes on web POS." },
      { step: "02", title: "Enter Phone", description: "Enter customer mobile number." },
      { step: "03", title: "Instant WhatsApp Receipt", description: "Customer receives branded PDF cash memo on WhatsApp instantly." }
    ],
    techStack: ["Next.js 15", "TypeScript", "Supabase", "WhatsApp Business API", "Tailwind CSS"],
    useCases: [
      "Supermarket Checkout Counters",
      "Restaurant Cash Receipt Delivery",
      "Garment Store WhatsApp Invoicing",
      "Service Center Job Cards"
    ],
    targetIndustries: ["Retail", "Logistics", "Healthcare", "Real Estate"],
    faqs: [
      {
        question: "Does the customer need to download an app to receive receipts?",
        answer: "No. Customers receive their PDF cash memo directly inside their existing WhatsApp chat application."
      }
    ]
  },
  {
    slug: "renting",
    name: "IIPL Renting (PropTech CRM)",
    tagline: "Commercial Property Leasing & Tenant Management CRM",
    category: "PropTech",
    badge: "PropTech CRM",
    externalUrl: "https://rent.itobyinfotech.com",
    heroDescription: "Cloud real estate leasing CRM for commercial office towers, residential complexes, tenant onboarding, and automated rent collection.",
    overview: "IIPL Renting empowers real estate developers, leasing brokers, and property managers to manage unit availability, automate tenant lease renewals, and collect monthly rent.",
    targetAudience: "Commercial Property Managers, Real Estate Agencies, Landlords, and Co-Working Hubs",
    keyFeatures: [
      "Interactive Property Availability & Unit Floorplan Matrix",
      "Digital Tenant Lease Agreement Generator",
      "Automated Rent Collection & PDF Receipt Delivery",
      "Maintenance Ticket & Maintenance Escalation Portal",
      "WhatsApp Renewal Reminder Automation",
      "Investor Portfolio Financial Yield Dashboards"
    ],
    benefits: [
      "Reduce tenant onboarding time by 75%",
      "Eliminate late rent payments with automated WhatsApp reminders",
      "Centralize commercial unit vacancies across multiple property towers",
      "Automated financial profit-loss reporting for property investors"
    ],
    howItWorks: [
      { step: "01", title: "Add Property Units", description: "Log office units, square footage, and monthly rental pricing." },
      { step: "02", title: "Onboard Tenants", description: "Upload lease contracts and set automated billing dates." },
      { step: "03", title: "Auto Rent Alerts", description: "System collects rent and sends digital receipts automatically." }
    ],
    techStack: ["Next.js 15", "TypeScript", "Node.js", "PostgreSQL", "Supabase", "Stripe API"],
    useCases: [
      "Commercial Office Leasing CRM",
      "Co-Working Space Tenant Portal",
      "Residential Apartment Rent Collection",
      "Industrial Warehouse Lease Tracker"
    ],
    targetIndustries: ["Real Estate", "Services", "FinTech"],
    faqs: [
      {
        question: "Can IIPL Renting handle multi-building real estate portfolios?",
        answer: "Yes. IIPL Renting is built with multi-property hierarchy support, enabling managers to track hundreds of buildings from a single dashboard."
      }
    ]
  },
  {
    slug: "calling",
    name: "IIPL Calling (Voice AI SaaS)",
    tagline: "Conversational AI Voice Calling Agents",
    category: "AI",
    badge: "Voice AI",
    externalUrl: "https://royalblue-ant-234341.hostingersite.com/",
    heroDescription: "Autonomous Voice AI calling agents that handle inbound customer inquiries and outbound sales calls with human-like conversation latency.",
    overview: "IIPL Calling deploys conversational AI voice agents capable of conducting natural phone calls, qualifying sales leads, booking calendar appointments, and answering customer support inquiries 24/7.",
    targetAudience: "Call Centers, Insurance Brokers, Real Estate Agencies, and Customer Support Teams",
    keyFeatures: [
      "Sub-800ms Human-Like Conversation Latency",
      "Outbound Automated Cold Calling & Lead Triage",
      "Inbound 24/7 Customer Service Answering Bot",
      "Direct Google Calendar & CRM Appointment Booking",
      "Multilingual Voice Models (English, Spanish, Hindi)",
      "Real-Time Call Transcript & Sentiment Analysis"
    ],
    benefits: [
      "Scale call volume to 10,000+ simultaneous calls instantly",
      "Reduce call center operational costs by 80%",
      "Zero missed inbound customer calls 24 hours a day",
      "Seamless integration with CRM lead workflows"
    ],
    howItWorks: [
      { step: "01", title: "Train Voice Agent", description: "Upload business FAQs and phone script guidelines." },
      { step: "02", title: "Connect Phone Line", description: "Assign a virtual telephony number." },
      { step: "03", title: "Automate Calls", description: "Agent handles calls and logs qualified leads into CRM." }
    ],
    techStack: ["Python", "Twilio Telephony", "OpenAI Realtime API", "FastAPI", "Supabase"],
    useCases: [
      "Insurance Lead Qualification Calls",
      "Doctor Appointment Scheduling Calls",
      "Real Estate Property Tour Bookings",
      "E-Commerce Order Status Inquiries"
    ],
    targetIndustries: ["Healthcare", "Real Estate", "Insurance", "Retail", "Services"],
    faqs: [
      {
        question: "How realistic does the AI Voice Agent sound?",
        answer: "Our voice models utilize sub-second neural speech synthesis and natural turn-taking algorithms that sound indistinguishable from human sales representatives."
      }
    ]
  }
];
