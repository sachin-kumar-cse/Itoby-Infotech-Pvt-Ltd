export interface ComparisonData {
  slug: string;
  title: string;
  itemA: string;
  itemB: string;
  heroDescription: string;
  overview: string;
  comparisonMatrix: { feature: string; itemAVal: string; itemBVal: string }[];
  recommendation: string;
  faqs: { question: string; answer: string }[];
}

export const comparisonList: ComparisonData[] = [
  {
    slug: "nextjs-vs-react",
    title: "Next.js 15 vs React: Enterprise Web Comparison 2026",
    itemA: "Next.js 15",
    itemB: "React SPA",
    heroDescription: "Detailed technical comparison between Next.js 15 App Router and traditional React single-page applications for speed, SEO, and scalability.",
    overview: "While React is an excellent UI library for building dynamic client interfaces, Next.js 15 is a full-stack framework providing server-side rendering (SSR), partial prerendering (PPR), built-in routing, and optimal search engine optimization out of the box.",
    comparisonMatrix: [
      { feature: "Server-Side Rendering (SSR)", itemAVal: "Built-in (Default)", itemBVal: "Requires custom setup / SPA only" },
      { feature: "Google SEO & Indexability", itemAVal: "Instant HTML indexing", itemBVal: "Requires SSR or pre-rendering" },
      { feature: "Core Web Vitals Performance", itemAVal: "Sub-second LCP & zero CLS", itemBVal: "Client bundle bloat can delay LCP" },
      { feature: "API Routes & Middleware", itemAVal: "Built-in Edge Functions", itemBVal: "Requires separate backend server" },
      { feature: "Image Optimization", itemAVal: "Built-in Next/Image", itemBVal: "Manual image compression required" }
    ],
    recommendation: "Choose Next.js 15 for corporate websites, e-commerce storefronts, and SaaS portals that require top Google SEO rankings and sub-second page loads. Choose React SPA for internal admin dashboards behind login screens.",
    faqs: [
      {
        question: "Can I migrate an existing React app to Next.js 15?",
        answer: "Yes. Our engineering team specializes in migrating React SPAs to Next.js 15 App Router, improving Google search rankings and reducing initial page load times by up to 70%."
      }
    ]
  },
  {
    slug: "flutter-vs-react-native",
    title: "Flutter vs React Native: Mobile App Benchmark 2026",
    itemA: "Flutter",
    itemB: "React Native",
    heroDescription: "Comprehensive 2026 performance benchmark comparing Flutter and React Native for iOS & Android mobile app development.",
    overview: "Both Flutter and React Native enable cross-platform mobile development from a single codebase. Flutter uses Dart and its own Skia/Impeller graphics engine, while React Native uses JavaScript/TypeScript with native OS bridge elements.",
    comparisonMatrix: [
      { feature: "Rendering Engine", itemAVal: "Impeller Graphics (60/120fps)", itemBVal: "Native Bridge Components" },
      { feature: "Codebase Reuse", itemAVal: "Up to 95%", itemBVal: "Up to 90%" },
      { feature: "Hot Reload", itemAVal: "Stateful Hot Reload", itemBVal: "Fast Refresh" },
      { feature: "App Size", itemAVal: "Slightly larger initial APK", itemBVal: "Slightly smaller bundle" }
    ],
    recommendation: "Choose Flutter for high-performance apps requiring custom UI animations and 60fps performance across iOS and Android. Choose React Native if your team is already proficient in React & TypeScript.",
    faqs: [
      {
        question: "Which framework is faster to develop in, Flutter or React Native?",
        answer: "Both offer similar development speeds. Flutter provides more consistent UI rendering across devices because it uses its own rendering engine."
      }
    ]
  }
];
