export interface DetailedServiceData {
  slug: string;
  title: string;
  heroBadge: string;
  heroDescription: string;
  overview: string;
  benefits: string[];
  features: string[];
  process: { step: string; title: string; description: string }[];
  techStack: string[];
  useCases: string[];
  faqs: { question: string; answer: string }[];
}

export const detailedServicesList: DetailedServiceData[] = [
  {
    slug: "custom-software-development",
    title: "Custom Software Development Services",
    heroBadge: "Bespoke Software Engineering",
    heroDescription: "Itoby Infotech Pvt. Ltd. engineers custom software solutions, enterprise microservices, and automated business applications tailored to your exact operational workflows.",
    overview: "Custom software development is the process of designing, building, deploying, and maintaining software tailored specifically to a business's unique operational requirements rather than adapting to generic off-the-shelf SaaS tools. Itoby Infotech Pvt. Ltd. delivers custom business applications, multi-tenant portals, legacy software modernization, and API integrations engineered for long-term scalability and 100% IP ownership.",
    benefits: [
      "100% intellectual property ownership with zero recurring per-user seat licenses",
      "Bespoke database schemas and API integrations built for your unique operations",
      "Enterprise-grade security with Role-Based Access Control (RBAC) and OAuth 2.0",
      "High-throughput microservices architecture with sub-second PostgreSQL query speeds",
      "Seamless integration with legacy databases, CRMs, ERPs, and cloud APIs",
      "24/7 SLA maintenance, automated CI/CD pipelines, and dedicated engineering support"
    ],
    features: [
      "Custom Enterprise ERP & CRM Software Engineering",
      "Legacy Codebase Modernization & Cloud Migration",
      "High-Throughput Microservices & Event-Driven Architecture",
      "Real-Time Business Intelligence & Financial Analytics",
      "RESTful & GraphQL API Gateway Integrations",
      "Automated Workflow & Data Synchronization Pipelines"
    ],
    process: [
      { step: "01", title: "Discovery & Solution Architecture", description: "Analyzing operational bottlenecks, mapping relational database schemas, and defining API contracts." },
      { step: "02", title: "UI/UX & Interactive Prototyping", description: "Designing intuitive responsive user interfaces tailored for employee productivity and client portals." },
      { step: "03", title: "Agile Development Sprints", description: "Executing 2-week development sprints with automated unit testing, continuous integration, and code reviews." },
      { step: "04", title: "Security & Penetration Testing", description: "Conducting OWASP security audits, input validation, role-based access checks, and load benchmarking." },
      { step: "05", title: "Production Deployment & SLA Support", description: "Zero-downtime deployment on Vercel/AWS infrastructure backed by 12 months of SLA technical maintenance." }
    ],
    techStack: ["Next.js 15", "TypeScript", "React 19", "Node.js", "Python", "PostgreSQL", "Supabase", "Docker", "AWS"],
    useCases: [
      "Enterprise Resource Planning (ERP) & Inventory Portals",
      "B2B SaaS Multi-Tenant Platforms & Subscription Engines",
      "Automated Supply Chain & Logistics Management Systems",
      "Custom Financial Dashboards & Real-Time Analytics"
    ],
    faqs: [
      {
        question: "What is custom software development?",
        answer: "Custom software development is the creation of bespoke software applications engineered to address the specific workflows, security requirements, and growth objectives of an organization, giving the business full ownership of its source code."
      },
      {
        question: "Why choose custom software development over off-the-shelf software?",
        answer: "Custom software provides 100% source code IP ownership, eliminates expensive monthly per-user licensing fees, allows complete customization of business logic, and integrates directly with existing legacy tools without operational compromises."
      },
      {
        question: "How much does custom software development cost?",
        answer: "Custom software development costs depend on project scope, feature complexity, number of user roles, third-party API integrations, and security requirements. We provide detailed fixed-scope or milestone-based estimates after an initial technical discovery session."
      },
      {
        question: "How long does custom software development take?",
        answer: "A Minimum Viable Product (MVP) custom software application typically takes 8 to 12 weeks. Large-scale enterprise ERP or multi-tenant SaaS platforms take 14 to 24 weeks depending on architectural complexity."
      },
      {
        question: "Can custom software integrate with existing business systems?",
        answer: "Yes. We build custom RESTful and GraphQL API gateways that connect your new custom software seamlessly with legacy databases, Salesforce, HubSpot, Stripe, QuickBooks, and internal server infrastructure."
      },
      {
        question: "Who owns the developed custom software source code?",
        answer: "You own 100% of the custom software source code, intellectual property rights, database schemas, and documentation upon project completion."
      }
    ]
  },
  {
    slug: "ai-development-company",
    title: "AI Development Services",
    heroBadge: "Artificial Intelligence Engineering",
    heroDescription: "Itoby Infotech Pvt. Ltd. delivers custom AI development services, RAG enterprise search engines, LLM fine-tuning, and intelligent automation systems.",
    overview: "AI development is the engineering process of designing, building, integrating, and deploying artificial intelligence models and microservices into business software. Itoby Infotech Pvt. Ltd. builds custom AI applications, Retrieval-Augmented Generation (RAG) knowledge systems, document intelligence tools, and automated predictive workflows tailored to enterprise operational needs.",
    benefits: [
      "100% private data security with zero third-party AI model training retention",
      "RAG architecture for hallucination-free enterprise document search",
      "Automate up to 80% of repetitive operational and back-office data workflows",
      "Seamless integration with OpenAI GPT-4o, Claude 3.5, and Llama 3 models",
      "Sub-second vector retrieval using Pgvector and Supabase vector stores",
      "Scalable AI microservices backed by 12 months of SLA maintenance"
    ],
    features: [
      "Custom LLM Fine-Tuning & Prompt Architecture",
      "Enterprise RAG Vector Search & Document Engines",
      "AI Predictive Analytics & Data Pipeline Automation",
      "Computer Vision, OCR & Document Extraction",
      "Conversational AI & Autonomous Voice Systems",
      "Multi-Agent Workflow Orchestration & API Gateways"
    ],
    process: [
      { step: "01", title: "AI Feasibility & Data Audit", description: "Evaluating enterprise data cleanliness, vector database readiness, and LLM model selection." },
      { step: "02", title: "RAG Architecture & Model Tuning", description: "Configuring vector embeddings, chunking strategies, and tuning system prompts for accurate retrieval." },
      { step: "03", title: "Application Integration & UI/UX", description: "Connecting AI microservices into Next.js web dashboards with real-time streaming interfaces." },
      { step: "04", title: "Guardrails, Security & Testing", description: "Implementing hallucination filters, OWASP input validation, PII redaction, and latency benchmarks." },
      { step: "05", title: "Deployment & SLA Monitoring", description: "Zero-downtime deployment on Vercel/AWS infrastructure with 24/7 SLA error tracking." }
    ],
    techStack: ["OpenAI API", "Python", "LangChain", "LlamaIndex", "Pgvector", "Supabase", "Next.js 15", "FastAPI", "Docker", "AWS"],
    useCases: [
      "Enterprise Document Vector Search & Knowledge Base",
      "Autonomous Back-Office Data Extraction & Invoicing",
      "Predictive Customer Analytics & Lead Scoring",
      "Smart Recommendation Engines for E-Commerce & SaaS"
    ],
    faqs: [
      {
        question: "What is AI development?",
        answer: "AI development is the engineering process of building, fine-tuning, and integrating artificial intelligence models, vector embeddings, and machine learning algorithms into custom software applications to automate business processes and extract actionable insights."
      },
      {
        question: "What is the difference between custom AI development and AI integration?",
        answer: "AI integration connects an existing software application to pre-built AI APIs (like OpenAI or Claude). Custom AI development involves building proprietary Retrieval-Augmented Generation (RAG) pipelines, fine-tuning open-source models (like Llama 3) on custom dataset schemas, and orchestrating multi-agent microservices."
      },
      {
        question: "How does Itoby Infotech ensure AI data privacy and security?",
        answer: "We enforce strict zero-data-retention enterprise API contracts, redact PII (Personally Identifiable Information) before embedding, and deploy open-source LLM models inside private VPC environments (AWS/Azure) so proprietary data is never sent to third-party public models."
      },
      {
        question: "What is the difference between general AI development, AI agents, and AI chatbots?",
        answer: "General AI development covers broad AI software features like RAG document search, OCR extraction, and predictive analytics. AI chatbots focus specifically on 24/7 conversational customer service, while autonomous AI agents plan and execute multi-step API tool workflows independently."
      },
      {
        question: "How much does custom AI development cost?",
        answer: "AI development costs depend on data volume, model selection (cloud API vs self-hosted LLM), vector database complexity, and API integrations. We provide fixed-scope or milestone estimates after a technical discovery audit."
      },
      {
        question: "How long does AI software development take?",
        answer: "A RAG document search or basic AI application MVP takes 6 to 10 weeks. Multi-agent workflow automation systems and enterprise fine-tuned model pipelines take 12 to 18 weeks."
      }
    ]
  },
  {
    slug: "saas-development-company",
    title: "SaaS Development Company & Cloud Architecture",
    heroBadge: "SaaS Product Engineering",
    heroDescription: "Multi-tenant SaaS application development, subscription billing engines, and enterprise cloud architecture built for hyper-growth.",
    overview: "Itoby Infotech Pvt. Ltd. is a premier SaaS development lab. We engineer multi-tenant web applications, self-service subscription portals, and API-driven SaaS platforms designed to scale seamlessly from seed stage to million-user benchmarks.",
    benefits: [
      "Multi-tenant database schema with strict data isolation",
      "Automated Stripe & Razorpay recurring billing & dunning",
      "Instant tenant onboarding with sub-second provisioning",
      "100/100 Core Web Vitals with Next.js 15 server rendering",
      "Role-based access controls (RBAC) and team workspaces",
      "Comprehensive telemetry, usage analytics, and audit logs"
    ],
    features: [
      "Multi-Tenant SaaS Architecture",
      "Automated Subscription & Tiered Billing",
      "Self-Service User & Team Management",
      "API Monetization & Webhook Engine",
      "White-Label Tenant Customization",
      "Real-Time Usage & Revenue Analytics"
    ],
    process: [
      { step: "01", title: "Product Strategy & UX", description: "Defining tenant boundaries, subscription tiers, and user onboarding journeys." },
      { step: "02", title: "Full-Stack Development", description: "Building multi-tenant schemas, auth flows, and Stripe webhook handlers." },
      { step: "03", title: "Load & Security Testing", description: "Stress testing concurrent tenant connections and data isolation bounds." },
      { step: "04", title: "Launch & Scaling", description: "Deploying to Vercel and Supabase with automated CI/CD and analytics." }
    ],
    techStack: ["Next.js 15", "TypeScript", "React", "Supabase", "PostgreSQL", "Stripe API", "Tailwind CSS"],
    useCases: [
      "B2B Workflow Automation SaaS",
      "PropTech Property Management CRM",
      "GST Invoicing & Billing SaaS",
      "AI Content & Voice Automation SaaS"
    ],
    faqs: [
      {
        question: "What multi-tenant database approach do you use for SaaS products?",
        answer: "Depending on your regulatory requirements, we implement row-level security (RLS) schema multi-tenancy in PostgreSQL/Supabase for cost efficiency, or separate schema/database isolation for enterprise clients."
      }
    ]
  },
  {
    slug: "web-development-company",
    title: "Website & Web Development Company",
    heroBadge: "Full-Stack Web Engineering",
    heroDescription: "Custom Next.js web applications, headless e-commerce storefronts, and enterprise corporate websites engineered for maximum conversions.",
    overview: "We engineer custom high-converting web applications and enterprise portals using Next.js 15, React, and modern TypeScript. Every website we build features sub-second page loads, 100/100 Core Web Vitals, and robust search engine rankings.",
    benefits: [
      "Sub-second page navigation with Server Components",
      "Built-in OpenGraph, Meta, and JSON-LD Schema SEO",
      "100% responsive glassmorphic UI design across all devices",
      "Headless CMS integration (Sanity, Strapi, Decap)",
      "Zero vulnerability plugins unlike legacy CMS tools",
      "Full ownership of clean, maintainable source code"
    ],
    features: [
      "Custom Next.js Web App Development",
      "Headless E-Commerce Storefronts",
      "Enterprise Corporate Portals",
      "PWA Progressive Web Apps",
      "API Integrations & Payment Gateways",
      "Continuous Core Web Vitals Optimization"
    ],
    process: [
      { step: "01", title: "UX Wireframing", description: "Designing conversion-focused user journeys and glassmorphic UI components." },
      { step: "02", title: "Full-Stack Web Coding", description: "Developing Next.js pages, responsive Tailwind CSS layouts, and API routes." },
      { step: "03", title: "SEO & Speed Tuning", description: "Optimizing images, fonts, meta tags, and structured data schemas." },
      { step: "04", title: "Vercel Global Launch", description: "Deploying on global Edge CDN with SSL and continuous deployment." }
    ],
    techStack: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Supabase", "Vercel"],
    useCases: [
      "Corporate Tech Agency Portals",
      "Headless Shopify & WooCommerce Sites",
      "SaaS Product Landing Hubs",
      "High-Conversion Lead Gen Pages"
    ],
    faqs: [
      {
        question: "Why should we choose Next.js over WordPress for our business website?",
        answer: "Next.js websites deliver 5x faster page loads, 100/100 Core Web Vitals, top Google SEO rankings, and zero security risks from unmaintained third-party WordPress plugins."
      }
    ]
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development Company (iOS & Android)",
    heroBadge: "Cross-Platform Mobile Apps",
    heroDescription: "Native-performing iOS and Android mobile applications engineered with Flutter, React Native, and robust cloud backends.",
    overview: "Itoby Infotech Pvt. Ltd. builds high-performance mobile applications for iOS and Android. Using Flutter and React Native, we deliver fluid 60fps native user experiences, offline data caching, and real-time cloud synchronizations.",
    benefits: [
      "Single codebase cuts iOS & Android development cost by 40%",
      "Native 60fps hardware-accelerated graphics performance",
      "Seamless integration with device camera, GPS, and push notifications",
      "Biometric security (FaceID / TouchID) & encrypted storage",
      "Full app store publishing & approval management",
      "Real-time sync with Supabase and Firebase cloud databases"
    ],
    features: [
      "Cross-Platform iOS & Android Development",
      "Flutter & React Native Architecture",
      "Real-Time Push Notifications",
      "Offline-First SQLite / Hive Data Sync",
      "In-App Purchases & Payment Gateways",
      "Biometric Security & Authentication"
    ],
    process: [
      { step: "01", title: "UI/UX Mobile Design", description: "Creating pixel-perfect iOS Human Interface and Android Material Design wireframes." },
      { step: "02", title: "Mobile Code Engineering", description: "Developing reactive Flutter/React Native components connected to REST APIs." },
      { step: "03", title: "Device Testing", description: "Testing across multiple physical iPhone and Android screen resolutions." },
      { step: "04", title: "App Store Publishing", description: "Handling Apple App Store and Google Play Store submission & approvals." }
    ],
    techStack: ["Flutter", "React Native", "Dart", "TypeScript", "Supabase", "Firebase", "PostgreSQL"],
    useCases: [
      "On-Demand Booking & Service Apps",
      "FinTech Digital Wallet Mobile Apps",
      "Healthcare Telemedicine Mobile Apps",
      "E-Commerce Mobile Shopping Apps"
    ],
    faqs: [
      {
        question: "Will a Flutter app perform as well as native Swift or Kotlin?",
        answer: "Yes. Flutter compiles directly to ARM machine code for iOS and Android, leveraging the Skia/Impeller graphics renderer for liquid 60fps native UI performance."
      }
    ]
  },
  {
    slug: "ai-agent-development",
    title: "AI Agent Development Company",
    heroBadge: "Autonomous AI Workflows",
    heroDescription: "Autonomous AI agents, multi-agent orchestrations, and intelligent task execution workflows for enterprise automation.",
    overview: "We engineer autonomous AI agents capable of reasoning, executing API actions, processing multi-step tasks, and collaborating to automate complex business workflows with human-in-the-loop oversight.",
    benefits: [
      "Autonomous 24/7 task execution without human bottleneck",
      "Multi-agent collaboration for complex decision chains",
      "Integrates directly with CRMs, databases, and third-party APIs",
      "Strict safety guardrails and audit trails for compliance",
      "Reduces manual operational costs by up to 75%",
      "Scales processing volume instantly on demand"
    ],
    features: [
      "Autonomous Multi-Agent Systems",
      "Tool-Calling & API Execution Agents",
      "Goal-Oriented Planning Models",
      "Memory & Context Management",
      "Human-in-the-Loop Approval Portals",
      "Real-Time Execution Logs"
    ],
    process: [
      { step: "01", title: "Workflow Mapping", description: "Deconstructing business processes into discrete agent tools and triggers." },
      { step: "02", title: "Agent Construction", description: "Building agent prompts, tool integrations, and state machine transitions." },
      { step: "03", title: "Simulation & Tuning", description: "Simulating edge cases and testing tool-execution precision." },
      { step: "04", title: "Enterprise Deployment", description: "Integrating agents into your web dashboard with real-time logs." }
    ],
    techStack: ["LangChain", "CrewAI", "OpenAI API", "Python", "Node.js", "Pgvector", "Supabase"],
    useCases: [
      "Automated B2B Lead Enrichment",
      "Customer Support Triage Agents",
      "Code Refactoring & Audit Agents",
      "Financial Data Reconciliation Agents"
    ],
    faqs: [
      {
        question: "What is an autonomous AI agent?",
        answer: "An AI agent is a specialized software model that can evaluate a high-level goal, break it into sub-tasks, call external APIs, query databases, and complete complex workflows autonomously."
      }
    ]
  },
  {
    slug: "ai-chatbot-development",
    title: "AI Chatbot Development Company",
    heroBadge: "Conversational AI Portals",
    heroDescription: "Custom AI chatbots, RAG customer support bots, and WhatsApp AI assistants integrated with enterprise CRMs.",
    overview: "We build intelligent conversational AI chatbots trained on your internal documentation, knowledge bases, and product catalogs to deliver instant 24/7 customer support and lead qualification across web and mobile channels.",
    benefits: [
      "Instant < 1s response times for 80%+ of support inquiries",
      "Zero hallucinations using proprietary RAG vector embeddings",
      "Omnichannel deployment across Web, WhatsApp, and Mobile Apps",
      "Seamless human escalation when complex intervention is needed",
      "Supports 50+ international languages automatically",
      "Direct lead generation and CRM calendar booking"
    ],
    features: [
      "RAG Knowledge Base Training",
      "Omnichannel Web & WhatsApp Widgets",
      "CRM & Calendar Booking Integration",
      "Multi-Language Conversational AI",
      "Human Agent Live Chat Handoff",
      "Sentiment & Analytics Dashboard"
    ],
    process: [
      { step: "01", title: "Data Ingestion", description: "Scraping PDFs, help documentation, and FAQs into vector storage." },
      { step: "02", title: "Widget & Flow Setup", description: "Designing dark glassmorphic chat widgets and conversational flows." },
      { step: "03", title: "Testing & Guardrails", description: "Verifying response accuracy and preventing off-topic prompts." },
      { step: "04", title: "Embed & Go Live", description: "Adding the lightweight widget snippet onto your Next.js application." }
    ],
    techStack: ["Next.js 15", "OpenAI API", "Pgvector", "Supabase", "Tailwind CSS", "WebSockets"],
    useCases: [
      "24/7 E-Commerce Order Support Bot",
      "SaaS Technical Knowledge Base Assistant",
      "WhatsApp Real Estate Inquiry Agent",
      "Patient Appointment Intake Bot"
    ],
    faqs: [
      {
        question: "Can an AI chatbot hand off complex chats to human support agents?",
        answer: "Yes. Our AI chatbots continuously evaluate query complexity and user sentiment, offering automated one-click handoff to human support representatives via email or live chat dashboard."
      }
    ]
  },
  {
    slug: "erp-development",
    title: "Custom ERP Development Company",
    heroBadge: "Enterprise Resource Planning",
    heroDescription: "Custom ERP software development, inventory tracking engines, supply chain management, and HR portals built for modern business scale.",
    overview: "Itoby Infotech Pvt. Ltd. engineers bespoke ERP systems that centralize enterprise operations, supply chain logistics, human resources, and financial management into one secure, real-time cloud dashboard.",
    benefits: [
      "Centralizes all business departments into a single source of truth",
      "Automates inventory management, purchase orders, and billing",
      "Real-time executive reporting and profit-loss analytics",
      "Custom role-based permissions protecting sensitive business data",
      "Zero recurring per-user licensing fees",
      "High-throughput PostgreSQL architecture supporting millions of records"
    ],
    features: [
      "Supply Chain & Inventory Management",
      "HR & Automated Payroll Processing",
      "Financial Accounting & GST Invoicing",
      "Production Planning & Warehouse Logistics",
      "Custom Executive Analytics Dashboards",
      "Multi-Branch & Multi-Currency Architecture"
    ],
    process: [
      { step: "01", title: "Process Audit", description: "Mapping department workflows, data dependencies, and manual spreadsheets." },
      { step: "02", title: "Database Architecture", description: "Designing relational schemas and high-speed data indexing." },
      { step: "03", title: "Module Development", description: "Building Inventory, HR, Billing, and Analytics modules in sprints." },
      { step: "04", title: "Data Migration & SLA", description: "Migrating legacy data smoothly and providing dedicated 24/7 SLA." }
    ],
    techStack: ["Next.js 15", "Node.js", "PostgreSQL", "Supabase", "Docker", "AWS", "Tailwind CSS"],
    useCases: [
      "Manufacturing Plant Operations ERP",
      "Logistics & Warehouse Management ERP",
      "Retail Multi-Branch Inventory ERP",
      "Healthcare Hospital Operations ERP"
    ],
    faqs: [
      {
        question: "Can custom ERP software replace legacy systems like SAP or Tally?",
        answer: "Yes. We design custom ERPs that either replace bloated legacy software completely or connect bi-directionally via REST APIs to handle specialized department workflows."
      }
    ]
  },
  {
    slug: "crm-development",
    title: "Custom CRM Development Company",
    heroBadge: "Customer Relationship Management",
    heroDescription: "Custom CRM software development, sales pipeline automation, B2B lead scoring, and automated email/WhatsApp client outreach engines.",
    overview: "We engineer custom CRM solutions (such as IIPL Lead and IIPL Renting) tailored to your sales funnel. Track leads, automate email and WhatsApp follow-ups, and empower your sales team with actionable pipeline intelligence.",
    benefits: [
      "Tailored sales funnels built 100% around your sales process",
      "Automated lead capture from website forms and WhatsApp",
      "Integrated cold email and WhatsApp outreach engines",
      "360-degree customer activity history and call logs",
      "Real-time sales velocity and revenue forecasting metrics",
      "No per-seat monthly license fees"
    ],
    features: [
      "Kanban Sales Pipeline Management",
      "Automated Lead Scoring & Assignment",
      "WhatsApp & Email Campaign Sync",
      "Client Document & Invoice Storage",
      "Team Activity Tracking & Metrics",
      "Custom Data Export & API Integrations"
    ],
    process: [
      { step: "01", title: "Sales Funnel Audit", description: "Mapping deal stages, lead sources, and communication channels." },
      { step: "02", title: "Custom CRM Coding", description: "Developing responsive Kanban boards, lead cards, and outreach triggers." },
      { step: "03", title: "Integration", description: "Connecting web forms, payment portals, and messaging gateways." },
      { step: "04", title: "Team Onboarding", description: "Training sales teams and launching production CRM dashboards." }
    ],
    techStack: ["Next.js 15", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS", "Stripe API"],
    useCases: [
      "Commercial Property Leasing CRM (IIPL Renting)",
      "B2B SaaS Lead Capture CRM (IIPL Lead)",
      "Financial Services Client Onboarding CRM",
      "Agency Client Project Portal"
    ],
    faqs: [
      {
        question: "How long does custom CRM software development take?",
        answer: "A core custom CRM MVP takes 6-10 weeks. Advanced enterprise CRMs with automated AI scoring and WhatsApp multi-agent routing take 10-16 weeks."
      }
    ]
  }
];
