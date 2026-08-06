export interface IndustryData {
  slug: string;
  title: string;
  heroBadge: string;
  heroDescription: string;
  overview: string;
  benefits: string[];
  features: string[];
  techStack: string[];
  faqs: { question: string; answer: string }[];
  caseStudy: {
    title: string;
    metrics: string;
  };
}

export const industriesList: IndustryData[] = [
  {
    slug: "healthcare",
    title: "Healthcare & Telemedicine Software Development",
    heroBadge: "Healthcare IT Engineering",
    heroDescription: "HIPAA-compliant healthcare software, EHR/EMR integrations, telemedicine portals, and patient engagement platforms engineered for medical providers.",
    overview: "Itoby Infotech Pvt. Ltd. builds secure, scalable healthcare software and telemedicine portals enabling hospitals, clinics, and digital health startups to streamline patient care, automate appointment scheduling, and ensure strict HIPAA data compliance.",
    benefits: [
      "100% HIPAA & GDPR compliant data architecture",
      "Seamless integration with Epic, Cerner, and HL7/FHIR APIs",
      "End-to-end video consultation and e-prescriptions",
      "Automated SMS/WhatsApp appointment reminders",
      "Secure patient portal with biometric authentication",
      "Real-time analytics dashboard for hospital administrators"
    ],
    features: [
      "Telemedicine Video Consultations",
      "EHR / EMR System Integration",
      "Patient Portal & Medical Records",
      "Online Doctor Scheduling",
      "Digital E-Prescriptions",
      "Medical Billing & Insurance Sync"
    ],
    techStack: ["React", "Next.js 15", "Node.js", "Python", "PostgreSQL", "WebRTC", "AWS HealthLake", "Supabase"],
    faqs: [
      {
        question: "How does Itoby Infotech ensure HIPAA compliance in healthcare software?",
        answer: "We enforce BAA-compliant cloud infrastructure (AWS/GCP), end-to-end AES-256 data encryption at rest and in transit, TLS 1.3 transport security, role-based access controls (RBAC), and full audit logging."
      },
      {
        question: "Can you integrate custom telemedicine apps with existing hospital EHR systems?",
        answer: "Yes. We specialize in HL7 and FHIR API integrations connecting custom telemedicine portals with legacy EHR/EMR platforms like Epic, Cerner, Allscripts, and Athenahealth."
      },
      {
        question: "How long does custom healthcare app development take?",
        answer: "A MVP telemedicine app takes 8-12 weeks. Enterprise hospital management portals with multi-specialty workflows take 14-24 weeks depending on security and certification requirements."
      }
    ],
    caseStudy: {
      title: "MediCare Telehealth Portal",
      metrics: "Served 250,000+ patient consultations with zero downtime"
    }
  },
  {
    slug: "real-estate",
    title: "Real Estate CRM & Property Leasing Software",
    heroBadge: "Real Estate PropTech",
    heroDescription: "Custom PropTech solutions, commercial leasing CRMs, MLS listing integrations, and tenant management portals for real estate developers and brokers.",
    overview: "We engineer enterprise PropTech software, commercial property leasing CRMs (IIPL Renting), and MLS-integrated property portals that empower real estate agencies, property managers, and brokers to automate tenant workflows and boost lease conversions.",
    benefits: [
      "Automate tenant onboarding, lease agreements, and rent collection",
      "Real-time property availability and interactive floorplans",
      "Integrated lead capture with IIPL Lead CRM",
      "Automate WhatsApp lease renewal reminders",
      "Seamless payment gateway integration (Stripe, Razorpay)",
      "Multi-currency financial dashboards for property investors"
    ],
    features: [
      "Commercial Leasing CRM (IIPL Renting)",
      "MLS & IDX Property Listing Sync",
      "Tenant & Landlord Portals",
      "Digital Rent Receipt Generator",
      "Virtual 3D Property Tours",
      "Automate Maintenance Requests"
    ],
    techStack: ["Next.js 15", "React", "Node.js", "PostgreSQL", "Supabase", "Google Maps API", "Tailwind CSS"],
    faqs: [
      {
        question: "What is IIPL Renting for commercial property leasing?",
        answer: "IIPL Renting is our built-in real estate CRM designed for commercial property managers to track unit vacancies, automate tenant lease renewals, manage maintenance tickets, and generate rent invoices."
      },
      {
        question: "Can you integrate MLS / IDX feeds into custom real estate websites?",
        answer: "Yes. We integrate RETS and RESO Web API feeds to automatically sync real-time MLS property listings onto your custom Next.js website with zero lag."
      }
    ],
    caseStudy: {
      title: "MetroLease Commercial CRM",
      metrics: "Reduced tenant onboarding time by 75% across 120+ office towers"
    }
  },
  {
    slug: "fintech",
    title: "FinTech App & Secure Payment Software Development",
    heroBadge: "FinTech & Banking IT",
    heroDescription: "PCI-DSS compliant financial software, digital wallets, payment gateways, micro-lending platforms, and GST invoicing software for financial institutions.",
    overview: "Itoby Infotech Pvt. Ltd. builds secure FinTech applications, digital payment gateways, micro-lending portals, and automated billing tools (IIPL Billing & IIPL Cashmemo) engineered for high transaction speed and banking-grade security.",
    benefits: [
      "PCI-DSS compliant encryption and multi-factor authentication",
      "Real-time ledger processing and sub-second payment settlement",
      "Automated GST invoice generation with IIPL Billing",
      "Instant retail cash memos via WhatsApp (IIPL Cashmemo)",
      "Open Banking & Fraud Detection AI models",
      "Multi-currency conversion for cross-border trade"
    ],
    features: [
      "Digital Wallet & Payment Gateway Sync",
      "Micro-Lending & Credit Scoring Portals",
      "Enterprise GST Billing Software",
      "Instant PDF Cash Memo Builder",
      "Fraud Detection & Risk Analytics",
      "Open Banking API Integrations"
    ],
    techStack: ["Node.js", "Python", "React Native", "PostgreSQL", "Redis", "AWS KMS", "Docker", "Stripe API"],
    faqs: [
      {
        question: "How do you ensure PCI-DSS security in FinTech applications?",
        answer: "We implement tokenization, AES-256 hardware security module (HSM) key management, zero-knowledge architecture, and automated vulnerability scanning to satisfy strict PCI-DSS Level 1 compliance."
      }
    ],
    caseStudy: {
      title: "PayFast Digital Wallet",
      metrics: "Processed $50M+ in transactions with 4.9★ rating"
    }
  },
  {
    slug: "ecommerce",
    title: "Headless E-Commerce & Multi-Vendor Marketplace Development",
    heroBadge: "E-Commerce Engineering",
    heroDescription: "Custom Next.js headless e-commerce storefronts, Shopify Plus integrations, WooCommerce platforms, and multi-vendor marketplaces built for maximum conversion.",
    overview: "We engineer lightning-fast headless e-commerce platforms using Next.js 15, Shopify API, and WooCommerce backends that deliver sub-second page loads, zero checkout friction, and multi-currency international shopping experiences.",
    benefits: [
      "Sub-second page load speeds with Next.js 15 server rendering",
      "Up to 200% higher checkout conversion rates",
      "Multi-currency and multi-language localized shopping",
      "Seamless payment gateway integration (Stripe, Razorpay, PayPal)",
      "Automated inventory and order fulfillment sync",
      "High-converting mobile-first shopping UX"
    ],
    features: [
      "Headless Storefront Development",
      "Multi-Vendor Marketplace Architecture",
      "Custom Shopify & WooCommerce Themes",
      "Instant Cart & One-Click Checkout",
      "AI Product Recommendation Engine",
      "Automated Abandoned Cart Recovery"
    ],
    techStack: ["Next.js 15", "React", "TypeScript", "Shopify API", "Stripe", "Supabase", "Tailwind CSS"],
    faqs: [
      {
        question: "Why choose Headless Next.js E-Commerce over traditional Shopify?",
        answer: "Headless Next.js decoupling gives you 100/100 Core Web Vitals, sub-second page loads, complete design freedom, superior Google SEO rankings, and zero reliance on heavy third-party app scripts."
      }
    ],
    caseStudy: {
      title: "Luxe Fashion Headless Store",
      metrics: "+145% organic revenue growth in 90 days"
    }
  }
];
