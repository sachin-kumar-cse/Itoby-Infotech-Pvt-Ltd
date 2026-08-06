export interface TechnologyData {
  slug: string;
  name: string;
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
  }
];
