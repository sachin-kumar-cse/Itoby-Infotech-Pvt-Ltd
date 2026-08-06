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
  }
];
