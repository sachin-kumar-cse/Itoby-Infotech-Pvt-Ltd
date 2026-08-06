export interface LocationServiceData {
  citySlug: string;
  cityName: string;
  country: string;
  region: string;
  serviceSlug: string;
  serviceName: string;
  title: string;
  heroDescription: string;
  overview: string;
  benefits: string[];
  features: string[];
  techStack: string[];
  faqs: { question: string; answer: string }[];
}

export const locationsList: LocationServiceData[] = [
  {
    citySlug: "noida",
    cityName: "Noida",
    country: "India",
    region: "Uttar Pradesh",
    serviceSlug: "website-development",
    serviceName: "Website Development",
    title: "Website Development Company in Noida",
    heroDescription: "Premier website development company in Noida engineering custom Next.js web applications, e-commerce stores, and high-converting websites for businesses across Sector-62, Sector-63 & NCR.",
    overview: "Itoby Infotech Pvt. Ltd. is a top-rated website development agency in Noida, Sector-4. We specialize in engineering ultra-fast, secure, and SEO-optimized web applications using Next.js 15, React, and TypeScript with 100/100 Core Web Vitals performance.",
    benefits: [
      "Local software engineering office in Sector-4, Noida",
      "Sub-second page navigation with Next.js 15 Server Components",
      "100/100 Core Web Vitals score guarantee for Google SEO",
      "Custom UI/UX design tailored for NCR startups & enterprises",
      "Dedicated 12 months post-launch technical SLA support",
      "Seamless integration with GST invoicing & payment gateways"
    ],
    features: [
      "Custom Next.js Web Development",
      "Headless E-Commerce Storefronts",
      "Enterprise SaaS Portals & Admin CRMs",
      "Generative Engine Optimization (GEO)",
      "Mobile-First Responsive Web Design",
      "API & Cloud Microservices Setup"
    ],
    techStack: ["Next.js 15", "React", "TypeScript", "Tailwind CSS", "Node.js", "Supabase", "PostgreSQL", "Vercel"],
    faqs: [
      {
        question: "Why choose Itoby Infotech as your website development company in Noida?",
        answer: "Itoby Infotech Pvt. Ltd. is physically headquartered in Sector-4, Noida with 11+ years of proven software development experience, having delivered 500+ successful digital projects for startups, SMEs, and global enterprises."
      },
      {
        question: "Where is Itoby Infotech located in Noida?",
        answer: "Our main software engineering hub is located at Sector-4, Noida, Uttar Pradesh, 201301. We provide in-person strategy sessions as well as remote consulting worldwide."
      },
      {
        question: "How long does a custom website development project take in Noida?",
        answer: "A corporate website takes 2-4 weeks. Custom Next.js SaaS portals or e-commerce platforms take 6-12 weeks from discovery to deployment."
      }
    ]
  },
  {
    citySlug: "delhi",
    cityName: "Delhi",
    country: "India",
    region: "Delhi-NCR",
    serviceSlug: "website-development",
    serviceName: "Website Development",
    title: "Website Development Company in Delhi",
    heroDescription: "Leading website development agency in Delhi engineering custom Next.js web applications, e-commerce portals, and enterprise software for brands across Connaught Place, South Delhi & NCR.",
    overview: "We empower businesses across Delhi with cutting-edge web development, custom software, and AI solutions. Our engineering teams deliver high-converting web applications optimized for search engine rankings and conversational AI search engines.",
    benefits: [
      "Top-ranked web design & development company in Delhi-NCR",
      "Fast page load speed & mobile-first responsive architecture",
      "SEO & Generative Engine Optimization (GEO) built-in",
      "Enterprise security compliance and automated backups",
      "Custom CRM/ERP integrations for local commerce",
      "Dedicated account managers with direct SLA support"
    ],
    features: [
      "Custom Web Application Engineering",
      "E-Commerce & Digital Billing Solutions",
      "B2B Lead Generation Platforms",
      "SEO & Conversion Rate Optimization",
      "API Integration & Cloud Deployment",
      "Maintenance & 24/7 Monitoring"
    ],
    techStack: ["React", "Next.js 15", "Node.js", "Python", "Supabase", "AWS", "Stripe", "Razorpay"],
    faqs: [
      {
        question: "Do you serve businesses across South Delhi, Central Delhi, and North Delhi?",
        answer: "Yes. We partner with companies across Connaught Place, Saket, Nehru Place, Janakpuri, Okhla, and the entire Delhi-NCR region."
      }
    ]
  },
  {
    citySlug: "dubai",
    cityName: "Dubai",
    country: "United Arab Emirates",
    region: "Dubai",
    serviceSlug: "website-development",
    serviceName: "Website Development",
    title: "Website Development Company in Dubai (UAE)",
    heroDescription: "Premier web development agency in Dubai delivering high-converting Next.js websites, mobile apps, and enterprise software for UAE businesses across Business Bay, Downtown & DIFC.",
    overview: "Itoby Infotech Pvt. Ltd. builds ultra-fast, multi-currency web applications and mobile apps for enterprises in Dubai, UAE. We specialize in custom web design, Arabic localization, and headless e-commerce platforms.",
    benefits: [
      "Bilingual English & Arabic localized web applications",
      "Multi-currency support (AED, USD, EUR) with Telr & Stripe sync",
      "100/100 Core Web Vitals for top UAE Google search rankings",
      "Commercial leasing CRM (IIPL Renting) for Dubai real estate",
      "Enterprise Cloud & AWS UAE region infrastructure",
      "Dedicated 24/7 SLA technical support"
    ],
    features: [
      "Custom Web & Portal Development",
      "Real Estate Leasing & CRM Systems",
      "FinTech & Multi-Currency E-Commerce",
      "AI Voice Calling & WhatsApp Automation",
      "API Development & System Sync",
      "Enterprise Security & GDPR / UAE Compliance"
    ],
    techStack: ["Next.js 15", "React", "TypeScript", "Node.js", "PostgreSQL", "AWS UAE", "Telr API", "Tailwind CSS"],
    faqs: [
      {
        question: "Why hire Itoby Infotech for website development in Dubai?",
        answer: "We bring global software engineering expertise combined with deep understanding of UAE business requirements, Arabic typography, multi-currency payment gateways, and regional cloud compliance."
      }
    ]
  },
  {
    citySlug: "bangalore",
    cityName: "Bangalore",
    country: "India",
    region: "Karnataka",
    serviceSlug: "website-development",
    serviceName: "Website Development",
    title: "Website Development Company in Bangalore",
    heroDescription: "High-performance website development & SaaS engineering company in Bangalore for tech startups & enterprises across Indiranagar, Koramangala & HSR Layout.",
    overview: "We partner with Bangalore's leading tech startups and enterprise companies to engineer scalable Next.js web applications, mobile apps, and microservices architecture.",
    benefits: [
      "Full-stack Next.js & Node.js development specialists",
      "High-throughput microservices for tech startups",
      "Sub-second load times & 100/100 Core Web Vitals",
      "Agile 2-week sprint delivery model",
      "Scalable AWS/Supabase cloud backends",
      "Post-launch technical support SLA"
    ],
    features: [
      "Startup MVP & SaaS Development",
      "Full-Stack React & Next.js Apps",
      "Cloud Microservices & API Gateway",
      "Mobile App Sync (Flutter)",
      "Database Architecture & Vector Search",
      "CI/CD Automated Pipelines"
    ],
    techStack: ["Next.js 15", "React", "Node.js", "Python", "PostgreSQL", "Redis", "Docker", "AWS"],
    faqs: [
      {
        question: "Do you specialize in building SaaS MVPs for Bangalore startups?",
        answer: "Yes! We work closely with Bangalore founders to design, build, and deploy production-ready SaaS MVPs within 6-8 weeks."
      }
    ]
  }
];
