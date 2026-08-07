export interface ResourceData {
  slug: string;
  title: string;
  category: "Checklist" | "Template" | "Statistics" | "Glossary" | "Resource";
  heroDescription: string;
  overview: string;
  items: { key: string; detail: string }[];
  faqs: { question: string; answer: string }[];
}

export const resourcesList: ResourceData[] = [
  {
    slug: "technical-seo-checklist-2026",
    title: "The Ultimate Technical SEO & Core Web Vitals Checklist 2026",
    category: "Checklist",
    heroDescription: "Production-grade 30-point Technical SEO checklist for web developers and business owners to audit crawlability, Core Web Vitals, and AI Search readiness.",
    overview: "Engineering an authoritative website requires a robust technical foundation. Use this 30-point Technical SEO audit checklist created by Itoby Infotech's Senior Technical SEO Engineers to ensure your web application passes all Google search & AI crawler audits.",
    items: [
      { key: "Single H1 Tag per Page", detail: "Ensure every page has exactly one descriptive H1 headline followed logically by H2 and H3 tags." },
      { key: "Self-Referencing Canonical URLs", detail: "Set canonical tags pointing to exact 200 OK HTTPS URLs without trailing slash redirects." },
      { key: "Core Web Vitals LCP < 1.2s", detail: "Optimize Largest Contentful Paint with Next.js image priority loading and critical CSS inline rendering." },
      { key: "Core Web Vitals INP < 50ms", detail: "Minimize main thread JavaScript execution to ensure instant Interaction to Next Paint responsiveness." },
      { key: "Schema.org JSON-LD Graphs", detail: "Inject Organization, LocalBusiness, WebSite, Service, and FAQPage structured data scripts." },
      { key: "AI Crawler Robots.txt Rules", detail: "Explicitly allow GPTBot, ChatGPT-User, ClaudeBot, PerplexityBot, and Google-Extended crawlers." }
    ],
    faqs: [
      {
        question: "How often should a website undergo a Technical SEO audit?",
        answer: "We recommend performing a full Technical SEO and Core Web Vitals audit quarterly, as well as after any major code updates or site migrations."
      }
    ]
  },
  {
    slug: "web-development-glossary",
    title: "Enterprise Web Engineering & Software Development Glossary",
    category: "Glossary",
    heroDescription: "A comprehensive reference guide defining key terms in modern web engineering, AI search optimization, SaaS multi-tenancy, and cloud DevOps.",
    overview: "This glossary translates complex technical terminology into plain language for business executives, product managers, and engineering teams.",
    items: [
      { key: "PPR (Partial Prerendering)", detail: "A Next.js 15 feature combining static shell caching with dynamic streaming Server Components." },
      { key: "GEO (Generative Engine Optimization)", detail: "The practice of structuring content so AI engines (ChatGPT, Gemini, Perplexity) cite your brand as an authority." },
      { key: "Multi-Tenancy", detail: "A software architecture where a single instance of a SaaS application serves multiple tenant organizations with data isolation." },
      { key: "RAG (Retrieval-Augmented Generation)", detail: "An AI architecture that connects custom enterprise databases with LLMs to provide accurate, hallucination-free answers." }
    ],
    faqs: [
      {
        question: "How does GEO differ from traditional SEO?",
        answer: "Traditional SEO focuses on keyword rankings in search engine results pages (SERPs). GEO focuses on optimizing content structure and entity relationships so AI Search Overviews cite your business as a direct answer."
      }
    ]
  },
  {
    slug: "website-launch-checklist",
    title: "Production Website Launch & Pre-Flight Checklist 2026",
    category: "Checklist",
    heroDescription: "Comprehensive 25-point pre-launch checklist covering domain DNS, SSL certificates, open-graph meta tags, 404 monitoring, and Vercel CDN deployment.",
    overview: "Launching a high-traffic web application requires strict quality controls. Use this production launch checklist built by Itoby Infotech's Senior Frontend Engineers to guarantee a zero-downtime, flawless launch.",
    items: [
      { key: "HTTPS & HSTS Security Headers", detail: "Enforce TLS 1.3 encryption, automatic HTTP to HTTPS redirects, and strict HSTS headers." },
      { key: "Custom 404 & Error Boundaries", detail: "Deploy helpful custom 404 pages and React error boundaries to catch runtime exceptions gracefully." },
      { key: "Analytics & Conversion Tracking", detail: "Verify Google Analytics 4 (GA4), GTM triggers, and conversion goals are logging accurately." },
      { key: "Sitemap & Search Console Sync", detail: "Submit dynamic sitemap.xml and robots.txt rules to Google Search Console and Bing Webmaster Tools." }
    ],
    faqs: [
      {
        question: "Why run a pre-launch technical checklist?",
        answer: "Pre-launch checklists prevent critical post-launch bugs such as broken links, missing meta titles, unoptimized images, and broken payment webhooks."
      }
    ]
  },
  {
    slug: "software-development-checklist",
    title: "Enterprise Custom Software Architecture & Code Quality Checklist",
    category: "Checklist",
    heroDescription: "Battle-tested 30-point engineering checklist for microservices, database row-level security, environment variables, and CI/CD pipelines.",
    overview: "Ensure your custom enterprise software meets high standards for code maintainability, security compliance, and database performance.",
    items: [
      { key: "Row Level Security (RLS) Policies", detail: "Verify all PostgreSQL tables have strict multi-tenant RLS policies preventing unauthorized cross-tenant data access." },
      { key: "Environment Secret Management", detail: "Ensure zero hardcoded API keys or database passwords exist in source code repositories." },
      { key: "Automated Unit & E2E Testing", detail: "Enforce > 85% test coverage for critical payment and authentication API routes." }
    ],
    faqs: [
      {
        question: "What is the most critical step in custom software QA?",
        answer: "Automated penetration testing and database isolation verification are the most critical steps before production deployment."
      }
    ]
  },
  {
    slug: "ai-implementation-checklist",
    title: "Enterprise AI & LLM Deployment Checklist 2026",
    category: "Checklist",
    heroDescription: "Operational checklist for integrating OpenAI models, Pgvector RAG search, rate limiting, and hallucination filters into web apps.",
    overview: "Deploying AI in enterprise environments requires strict safety guardrails. Use this checklist to ensure zero data retention, sub-second vector queries, and accurate LLM outputs.",
    items: [
      { key: "Zero Data Retention API Setup", detail: "Verify third-party LLM APIs operate under enterprise zero-retention privacy policies." },
      { key: "Vector Embedding Indexing (IVFFlat/HNSW)", detail: "Tune Pgvector index parameters to ensure sub-100ms vector similarity lookups." },
      { key: "Hallucination & Fallback Guardrails", detail: "Implement prompt guardrails and system fallbacks when model confidence drops below threshold." }
    ],
    faqs: [
      {
        question: "How do you prevent AI model hallucinations?",
        answer: "We use Retrieval-Augmented Generation (RAG) with strict context bounds, requiring the LLM to cite exact document chunks or return a fallback answer."
      }
    ]
  }
];
