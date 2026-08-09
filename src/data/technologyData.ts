export interface TechnologyData {
  slug: string;
  name: string;
  title?: string;
  category: string;
  heroDescription: string;
  overview: string;
  benefits: string[];
  features: string[];
  useCases: string[];
  faqs: { question: string; answer: string }[];
}

export const technologyList: TechnologyData[] = [
  {
    slug: "nextjs",
    name: "Next.js 15",
    category: "Frontend Framework",
    heroDescription: "Enterprise Next.js 15 App Router engineering with Partial Prerendering (PPR), React 19 Server Components, and sub-second page loads.",
    overview: "Itoby Infotech Pvt. Ltd. builds high-converting web applications using Next.js 15. Leveraging server-side rendering (SSR), static site generation (SSG), and incremental static regeneration (ISR), we deliver 100/100 Core Web Vitals and top search engine rankings.",
    benefits: [
      "Sub-second page navigation with Server Components & PPR",
      "Automatic image, font, and script optimization",
      "Superior Search Engine Optimization (SEO) & GEO indexing",
      "Full-stack API routes & Edge Functions support",
      "Enterprise security with zero client bundle bloat",
      "Seamless integration with Vercel, Supabase & Node.js"
    ],
    features: [
      "App Router Architecture",
      "React 19 Server Components",
      "Partial Prerendering (PPR)",
      "Built-in OpenGraph & Metadata API",
      "Edge Middleware & API Routes",
      "Automatic Image Optimization"
    ],
    useCases: [
      "SaaS Web Portals & Dashboards",
      "Headless E-Commerce Storefronts",
      "High-Traffic Corporate Websites",
      "PWA & Web Applications"
    ],
    faqs: [
      {
        question: "Why choose Next.js 15 over traditional React SPAs?",
        answer: "Next.js 15 offers Server-Side Rendering (SSR) and Partial Prerendering (PPR), eliminating slow client-side JS bundles and providing instant first contentful paint (FCP), top Google search rankings, and superior security."
      },
      {
        question: "How long does custom Next.js web application development take?",
        answer: "A custom Next.js corporate website takes 2-4 weeks. Enterprise SaaS web applications or headless e-commerce platforms take 6-12 weeks."
      }
    ]
  },
  {
    slug: "react",
    name: "React.js",
    category: "Frontend UI Library",
    heroDescription: "High-performance React web applications built with clean component architecture, TypeScript, and state management.",
    overview: "Our React engineers build intuitive, modular user interfaces tailored for complex web applications, SaaS dashboards, and dynamic single-page applications (SPAs).",
    benefits: [
      "Reusable component-driven UI architecture",
      "Virtual DOM for smooth 60fps animations and transitions",
      "Rich ecosystem of hooks and open-source libraries",
      "Full TypeScript integration for type safety",
      "Seamless integration with REST & GraphQL APIs",
      "High performance on desktop and mobile viewports"
    ],
    features: [
      "Modular Component Design",
      "State Management (Zustand / Redux)",
      "Custom React Hooks",
      "Framer Motion Animations",
      "TypeScript Integration",
      "Tailwind CSS Styling"
    ],
    useCases: [
      "Enterprise SaaS Dashboards",
      "Admin Control Panels",
      "Interactive Web Applications",
      "FinTech & Analytics Portals"
    ],
    faqs: [
      {
        question: "What is React.js used for in web development?",
        answer: "React.js is used to build fast, interactive user interfaces for single-page applications, dynamic dashboards, complex web portals, and cross-platform mobile apps (React Native)."
      }
    ]
  },
  {
    slug: "nodejs",
    name: "Node.js",
    category: "Backend Runtime",
    heroDescription: "Scalable Node.js microservices, asynchronous REST & GraphQL APIs, and real-time backend architecture.",
    overview: "We architect high-concurrency backend services, real-time WebSockets, and microservices powered by Node.js, Express, and NestJS for maximum throughput.",
    benefits: [
      "Non-blocking asynchronous event-driven I/O",
      "Handles tens of thousands of concurrent connections",
      "Unified JavaScript/TypeScript stack from frontend to backend",
      "Lightweight Docker containerization",
      "Rich NPM ecosystem for enterprise integrations",
      "Rapid deployment on AWS Lambda, GCP, or Vercel"
    ],
    features: [
      "RESTful API Development",
      "GraphQL Gateway Engineering",
      "WebSocket Realtime Sync",
      "JWT & OAuth 2.0 Authentication",
      "PostgreSQL & Redis Integrations",
      "Microservices Architecture"
    ],
    useCases: [
      "Realtime Messaging & Notification Services",
      "High-Traffic API Gateways",
      "SaaS Backend Microservices",
      "E-Commerce Payment Engines"
    ],
    faqs: [
      {
        question: "Why choose Node.js for backend microservices?",
        answer: "Node.js offers non-blocking event-driven I/O, allowing servers to process thousands of concurrent API requests efficiently with minimal RAM footprint."
      }
    ]
  },
  {
    slug: "flutter",
    name: "Flutter",
    category: "Cross-Platform Mobile",
    heroDescription: "Cross-platform mobile apps for iOS and Android built from a single codebase with native 60fps performance.",
    overview: "Our Flutter mobile developers engineer cross-platform apps using Dart, delivering native UI responsiveness, offline data persistence, and seamless cloud sync.",
    benefits: [
      "Single codebase for iOS and Android reduces cost by 40%",
      "Native 60fps/120fps hardware-accelerated graphics engine",
      "Fast feature iteration with Stateful Hot Reload",
      "Consistent UI styling across all device screen sizes",
      "Full access to native camera, GPS, and Bluetooth sensors",
      "App Store & Google Play Store publication ready"
    ],
    features: [
      "Dart Programming Language",
      "Custom Material & Cupertino UI Widgets",
      "Riverpod / BLoC State Management",
      "Firebase & Supabase Integration",
      "Offline Storage (SQLite / Hive)",
      "Push Notification Management"
    ],
    useCases: [
      "Cross-Platform Mobile Apps",
      "FinTech & Wallet Applications",
      "On-Demand Delivery & Booking Apps",
      "Health & Fitness Mobile Apps"
    ],
    faqs: [
      {
        question: "Does Flutter deliver native performance on iOS and Android?",
        answer: "Yes. Flutter compiles directly to native ARM machine code for both iOS (Swift runtime) and Android (Kotlin runtime), using the Skia/Impeller graphics engine for fluid 60fps performance."
      }
    ]
  },
  {
    slug: "supabase-development",
    title: "Supabase Database & Auth Development",
    name: "Supabase",
    category: "Backend & Database",
    heroDescription: "Enterprise Supabase PostgreSQL architecture, Row Level Security (RLS), real-time subscriptions, and vector search embeddings.",
    overview: "We build scalable backend infrastructure with Supabase, leveraging native PostgreSQL capabilities, instantaneous edge functions, JWT authentication, and Pgvector embeddings for modern AI applications.",
    benefits: [
      "Real-time database subscriptions with sub-100ms latency",
      "Row Level Security (RLS) policies protecting tenant data",
      "Integrated AI vector embeddings with Pgvector",
      "Instant RESTful and GraphQL APIs auto-generated from Postgres",
      "Self-hosted Docker options for enterprise compliance",
      "Seamless integration with Next.js 15 App Router"
    ],
    features: [
      "PostgreSQL Relational Schemas & Indexing",
      "Row Level Security (RLS) Multi-Tenancy",
      "Edge Functions (Deno Runtime)",
      "Supabase Vector & Semantic Search",
      "Realtime Presence & Broadcast Channels",
      "Storage Buckets & Media Optimization"
    ],
    useCases: [
      "SaaS Multi-Tenant Database Backends",
      "Realtime Collaborative Web Dashboards",
      "AI Knowledge Base Vector Storage",
      "Mobile App Cloud Sync Engine"
    ],
    faqs: [
      {
        question: "Is Supabase suitable for enterprise production workloads?",
        answer: "Yes. Supabase is built on top of enterprise-grade PostgreSQL, offering automatic Point-In-Time Recovery (PITR), dedicated database compute instances, SOC 2 Type II compliance, and zero vendor lock-in."
      }
    ]
  },
  {
    slug: "postgresql-development",
    title: "PostgreSQL Database Architecture & Tuning",
    name: "PostgreSQL",
    category: "Relational Database",
    heroDescription: "High-capacity PostgreSQL database design, query indexing, ACID-compliant transactions, and high availability clusters.",
    overview: "Our database architects design, optimize, and scale mission-critical PostgreSQL databases for multi-tenant SaaS platforms, financial ledgers, and enterprise web applications.",
    benefits: [
      "ACID compliance for strict financial transaction integrity",
      "JSONB unstructured data support with GIN indexing",
      "Connection pooling with PgBouncer for high concurrency",
      "Automated partition tables for billions of log records",
      "Advanced query tuning reducing execution times by up to 90%",
      "High availability read-replicas and zero-downtime backups"
    ],
    features: [
      "Relational Schema Normalization",
      "B-Tree, GIN & GiST Index Optimization",
      "PostgreSQL Partitioning & Sharding",
      "Pgvector AI Embedding Integration",
      "Database Replication & Read Scales",
      "Automated PITR Backups & Encryption"
    ],
    useCases: [
      "FinTech Ledger & Billing Systems",
      "Enterprise ERP Relational Backends",
      "High-Traffic E-Commerce Databases",
      "Multi-Tenant SaaS Data Warehouses"
    ],
    faqs: [
      {
        question: "Why is PostgreSQL preferred for modern cloud applications?",
        answer: "PostgreSQL is the world's most advanced open-source database, offering rock-solid ACID reliability, powerful JSONB document storage, extensible extension ecosystems (Pgvector), and zero licensing costs."
      }
    ]
  },
  {
    slug: "openai-integration",
    title: "OpenAI API Integration & Custom LLM Engineering",
    name: "OpenAI",
    category: "Generative AI",
    heroDescription: "Enterprise OpenAI GPT-4o integration, function calling, custom RAG pipelines, and conversational AI agents.",
    overview: "Itoby Infotech Pvt. Ltd. integrates OpenAI GPT-4o, DALL-E, and Whisper APIs into web applications, establishing automated document search, voice assistants, and AI decision engines.",
    benefits: [
      "Transform static enterprise data into interactive AI search",
      "Function calling connecting LLMs with your live SQL database",
      "Structured JSON mode outputs for zero-parser API workflows",
      "Sub-second streaming text & audio token responses",
      "Enterprise zero-retention data privacy guarantees",
      "Cost optimization with smart prompt caching and fine-tuning"
    ],
    features: [
      "GPT-4o & GPT-4o-mini Integration",
      "Custom Assistant API & Thread Management",
      "Function Calling & Webhook Triggers",
      "Vision AI & Multimodal Image Analysis",
      "Whisper Real-Time Speech Recognition",
      "Embeddings (text-embedding-3-large)"
    ],
    useCases: [
      "Enterprise Document Q&A RAG Portals",
      "AI Customer Support Chatbots",
      "Automated B2B Contract Analyzers",
      "Voice AI Booking Assistants"
    ],
    faqs: [
      {
        question: "Does integrating OpenAI API expose our company data?",
        answer: "No. We utilize OpenAI Enterprise zero-retention API endpoints where inputs and outputs are never stored, logged, or used to train public models."
      }
    ]
  },
  {
    slug: "ai-automation",
    title: "Enterprise AI Automation & Workflow Engineering",
    name: "AI Automation",
    category: "Business Process Automation",
    heroDescription: "End-to-end AI process automation, n8n/Zapier pipeline engineering, and custom Python workflow bots.",
    overview: "We automate manual business operations by engineering intelligent AI pipelines that connect CRMs, email inboxes, accounting tools, and internal databases with zero human latency.",
    benefits: [
      "Reduces manual data entry and back-office effort by 80%",
      "Processes documents, invoices, and lead forms 24/7",
      "Connects disjointed SaaS tools via custom webhooks",
      "Real-time exception logging and Slack/WhatsApp alerts",
      "Saves hundreds of operational staff hours every month",
      "Higher data accuracy with zero human copy-paste errors"
    ],
    features: [
      "n8n & Custom Python Workflow Pipelines",
      "OCR Document & Receipt Extraction",
      "Automated Lead Enrichment & Scoring",
      "WhatsApp & Email Auto-Response Agents",
      "E-Way Bill & GST Invoice Auto-Sync",
      "Webhook & Cloud Queue Orchestration"
    ],
    useCases: [
      "Automated Accounting & Billing Reconciliation",
      "B2B Lead Scraping & Verification Pipelines",
      "HR Employee Onboarding Workflows",
      "E-Commerce Fulfillment & Inventory Sync"
    ],
    faqs: [
      {
        question: "What is AI business process automation?",
        answer: "AI process automation uses intelligent software bots and API pipelines to perform repetitive multi-step tasks (like reading emails, updating CRMs, and generating invoices) automatically."
      }
    ]
  },
  {
    slug: "nextjs-development",
    title: "Next.js Development Company",
    name: "Next.js Development",
    category: "Full-Stack Framework",
    heroDescription: "Enterprise Next.js 15 App Router web application development with sub-second page rendering and 100/100 Core Web Vitals.",
    overview: "We build custom Next.js web applications, headless e-commerce storefronts, and SaaS portals engineered for peak performance and top search engine rankings.",
    benefits: [
      "Sub-second page load times with Server Components",
      "100/100 Core Web Vitals performance scores",
      "Built-in OpenGraph and structured data SEO",
      "Seamless Vercel Edge deployment"
    ],
    features: ["App Router", "React 19 Server Components", "Partial Prerendering", "Edge API Routes"],
    useCases: ["SaaS Web Portals", "Headless E-Commerce", "Corporate Tech Websites"],
    faqs: [{ question: "Why build with Next.js?", answer: "Next.js provides sub-second rendering, security, and top SEO rankings out of the box." }]
  },
  {
    slug: "react-development",
    title: "React Development Company",
    name: "React Development",
    category: "Frontend UI Library",
    heroDescription: "High-converting React web applications, single-page dashboards, and custom UI components.",
    overview: "Our React engineers build intuitive, modular user interfaces for complex web applications and SaaS control panels.",
    benefits: ["Modular UI architecture", "60fps smooth animations", "TypeScript type safety"],
    features: ["Component Engineering", "Hooks Architecture", "Framer Motion", "Tailwind CSS"],
    useCases: ["SaaS Dashboards", "Admin Control Panels", "Interactive Web Portals"],
    faqs: [{ question: "What is React.js ideal for?", answer: "React.js is ideal for building dynamic, interactive web applications and SaaS user interfaces." }]
  },
  {
    slug: "nodejs-development",
    title: "Node.js Backend Development Company",
    name: "Node.js Development",
    category: "Backend Architecture",
    heroDescription: "High-capacity Node.js microservices, asynchronous APIs, and real-time backend systems.",
    overview: "We architect scalable backend microservices and RESTful API gateways using Node.js for maximum concurrency and low latency.",
    benefits: ["Asynchronous non-blocking I/O", "Handles high API traffic concurrency", "Docker & cloud native"],
    features: ["REST & GraphQL APIs", "Microservices Architecture", "Realtime WebSockets", "Redis Caching"],
    useCases: ["API Gateways", "SaaS Backend Systems", "Realtime Messaging"],
    faqs: [{ question: "Why choose Node.js for backend development?", answer: "Node.js handles thousands of concurrent API requests efficiently with minimal server overhead." }]
  },
  {
    slug: "python",
    title: "Python AI & Backend Engineering",
    name: "Python",
    category: "AI & Backend Engineering",
    heroDescription: "Enterprise Python development for AI Agent systems, LangChain RAG pipelines, FastAPI microservices, and Machine Learning algorithms.",
    overview: "Itoby Infotech Pvt. Ltd. builds high-performance AI applications, autonomous agents, and microservices powered by Python 3.12, FastAPI, PyTorch, LangChain, and OpenAI APIs.",
    benefits: [
      "Preferred programming language for AI, Machine Learning, and NLP models",
      "Sub-second API execution with asynchronous FastAPI & Starlette engines",
      "Seamless integration with LangChain, LlamaIndex, PyTorch, and OpenAI",
      "High-throughput data engineering and pandas/numpy telemetry processing",
      "Containerized microservices scalable on AWS ECS, GCP & Docker",
      "Clean, maintainable backend code architecture backed by 12 months SLA"
    ],
    features: [
      "FastAPI & Django REST Framework",
      "LangChain & Autonomous Agent Architecture",
      "Async WebSockets & Real-Time Telemetry",
      "PyTorch & Scikit-Learn Model Deployment",
      "Celery & Redis Background Task Queues",
      "Pgvector & Supabase Vector Indexing"
    ],
    useCases: [
      "Autonomous AI Agents & Tool-Calling Microservices",
      "Enterprise Document RAG Knowledge Engines",
      "Real-Time Telephony & Voice AI Systems",
      "Predictive Analytics & Financial Algorithms"
    ],
    faqs: [
      {
        question: "Why is Python the industry standard for AI & LLM development?",
        answer: "Python has the richest ecosystem of machine learning and LLM orchestration libraries—including PyTorch, TensorFlow, LangChain, LlamaIndex, and OpenAI SDKs—allowing rapid engineering of autonomous agents and RAG pipelines."
      },
      {
        question: "How fast is FastAPI for production Python web microservices?",
        answer: "FastAPI is built on Starlette and Pydantic, making it one of the fastest Python frameworks available—delivering near-Node.js/Go async performance for high-concurrency AI API gateways."
      }
    ]
  },
  {
    slug: "python-development",
    title: "Python AI & Backend Development Company",
    name: "Python Development",
    category: "AI & Backend Engineering",
    heroDescription: "Enterprise Python development for AI Agent systems, LangChain RAG pipelines, FastAPI microservices, and Machine Learning algorithms.",
    overview: "Itoby Infotech Pvt. Ltd. builds high-performance AI applications, autonomous agents, and microservices powered by Python 3.12, FastAPI, PyTorch, LangChain, and OpenAI APIs.",
    benefits: [
      "Preferred programming language for AI, Machine Learning, and NLP models",
      "Sub-second API execution with asynchronous FastAPI & Starlette engines",
      "Seamless integration with LangChain, LlamaIndex, PyTorch, and OpenAI",
      "High-throughput data engineering and pandas/numpy telemetry processing"
    ],
    features: ["FastAPI & Django", "LangChain & AI Agents", "PyTorch & ML Models", "Pgvector & Redis"],
    useCases: ["Autonomous AI Agents", "Document RAG Engines", "Voice AI Telephony", "Predictive Analytics"],
    faqs: [{ question: "Why build AI backends with Python?", answer: "Python provides native ecosystem support for PyTorch, LangChain, and OpenAI APIs with async FastAPI endpoints." }]
  }
];
