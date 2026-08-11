export interface IndustryData {
  slug: string;
  title: string;
  seoTitle?: string;
  metaDescription?: string;
  heroBadge: string;
  heroDescription: string;
  overview: string;
  aiOverview?: {
    whatIs: string;
    whoNeeds: string;
    capabilities: string;
    technologies: string;
    processSummary: string;
    securityAndScalability: string;
  };
  benefits: string[];
  features: string[];
  techStack: string[];
  relatedServices?: { name: string; path: string }[];
  relatedCaseStudies?: { name: string; path: string; description: string }[];
  faqs: { question: string; answer: string }[];
  caseStudy: {
    title: string;
    metrics: string;
    path?: string;
  };
}

export const industriesList: IndustryData[] = [
  {
    slug: "healthcare",
    title: "Healthcare Software Development Company",
    seoTitle: "Healthcare Software Development Company | Itoby Infotech",
    metaDescription: "Itoby Infotech Pvt. Ltd. is a healthcare software development company building custom patient portals, appointment scheduling engines, and medical inventory ERPs.",
    heroBadge: "Healthcare Software Engineering",
    heroDescription: "Itoby Infotech Pvt. Ltd. builds custom healthcare software, patient portals, medical inventory engines, and automated scheduling systems for healthcare providers.",
    overview: "Healthcare software development is the engineering process of building secure digital applications, patient portals, and operational systems for medical practices, clinics, and healthtech companies. Itoby Infotech Pvt. Ltd. develops custom appointment scheduling engines, administrative workflow portals, patient communication tools, and inventory management systems to streamline healthcare operations.",
    aiOverview: {
      whatIs: "Healthcare software development is the engineering of custom patient portals, doctor appointment scheduling platforms, medical inventory ERPs, and administrative workflow management tools.",
      whoNeeds: "Hospitals, medical clinics, dental chains, wellness platforms, and healthtech startups seeking to streamline patient intake, automate appointment reminders, and eliminate manual paperwork.",
      capabilities: "Itoby Infotech Pvt. Ltd. delivers custom patient portals, WhatsApp/SMS appointment automation, medical supply chain inventory management, and secure administrative reporting dashboards.",
      technologies: "React 19, Next.js 15, TypeScript, Node.js, Python, PostgreSQL, Supabase, Tailwind CSS, Docker, and AWS.",
      processSummary: "5-stage healthcare lifecycle: Workflow & Requirements Discovery -> UI/UX Prototyping -> Agile Sprint Coding -> AES-256 Security & Access Audits -> Production Rollout with SLA Support.",
      securityAndScalability: "Built with Role-Based Access Control (RBAC), multi-factor authentication (MFA), AES-256 database encryption at rest, TLS 1.3 in transit, and high-availability cloud infrastructure."
    },
    benefits: [
      "Centralized patient appointment booking and administrative workflows",
      "Automated SMS and WhatsApp appointment reminders to reduce no-shows",
      "Granular Role-Based Access Control (RBAC) protecting sensitive patient records",
      "AES-256 data encryption at rest and TLS 1.3 transport layer security",
      "Tailored patient and staff portals built 100% for your operational needs",
      "High-availability cloud infrastructure with sub-second page load performance"
    ],
    features: [
      "Online Patient Appointment & Doctor Scheduling",
      "Custom Patient Communication & Consultation Portals",
      "Medical Inventory & Supply Chain Tracking (ERP)",
      "Patient Contact & Administrative Workflows (CRM)",
      "Automated Invoice Billing & Payment Gateway Sync",
      "Real-Time Administrative Telemetry & Operational Dashboards"
    ],
    techStack: ["React 19", "Next.js 15", "Node.js", "Python", "PostgreSQL", "Supabase", "Tailwind CSS", "AWS"],
    relatedServices: [
      { name: "Custom Software Development", path: "/services/custom-software-development" },
      { name: "AI Development Company", path: "/services/ai-development-company" },
      { name: "Mobile App Development", path: "/services/mobile-app" },
      { name: "Enterprise ERP Development", path: "/services/erp-development" }
    ],
    relatedCaseStudies: [
      { name: "Healthcare Operational Portal", path: "/portfolio/healthcare-portal", description: "Patient management and administrative workflow system." }
    ],
    faqs: [
      {
        question: "What is healthcare software development?",
        answer: "Healthcare software development is the process of creating or customizing digital systems—such as patient portals, appointment scheduling tools, administrative CRMs, and operational ERPs—to streamline healthcare organization workflows."
      },
      {
        question: "What types of healthcare software solutions can Itoby Infotech build?",
        answer: "We build custom web and mobile applications, including patient portals, doctor appointment scheduling platforms, medical inventory tracking engines, patient communication tools, and administrative analytics dashboards."
      },
      {
        question: "Can healthcare software be customized for unique clinic workflows?",
        answer: "Yes. We build 100% custom software tailored to your specific administrative procedures, staff roles, and patient intake requirements rather than forcing rigid off-the-shelf software models."
      },
      {
        question: "How is security and data protection handled in custom healthcare software?",
        answer: "We implement enterprise-grade security controls including role-based access control (RBAC), multi-factor authentication (MFA), AES-256 data encryption at rest, TLS 1.3 encryption in transit, strict input validation, and audit logging."
      },
      {
        question: "Can healthcare software integrate with CRM or ERP systems?",
        answer: "Yes. We engineer secure RESTful and GraphQL API gateways that sync custom healthcare portals with ERP inventory modules, CRM client management pipelines, and third-party payment gateways."
      },
      {
        question: "Can AI features be added to healthcare software applications?",
        answer: "Yes. We can integrate AI-powered features such as automated FAQ chatbots, voice assistants for administrative call triage, document parsing tools, and natural-language internal data search."
      },
      {
        question: "How long does custom healthcare software development take?",
        answer: "A core patient portal MVP typically takes 8 to 12 weeks. Comprehensive administrative healthcare systems with multi-branch inventory, CRM workflows, and custom dashboards take 14 to 22 weeks."
      }
    ],
    caseStudy: {
      title: "Custom Patient Portal & Administrative System",
      metrics: "Engineered custom web and mobile workflows for streamlined appointment scheduling, patient intake, and administrative data management.",
      path: "/portfolio/healthcare-portal"
    }
  },
  {
    slug: "real-estate",
    title: "Real Estate Software Development Company",
    seoTitle: "Real Estate Software Development Company | PropTech CRM | Itoby Infotech",
    metaDescription: "Leading real estate software development company engineering commercial leasing CRMs (IIPL Renting), tenant portals, and property management platforms.",
    heroBadge: "Real Estate PropTech",
    heroDescription: "Custom PropTech solutions, commercial leasing CRMs, MLS listing integrations, and tenant management portals for real estate developers and brokers.",
    overview: "We engineer enterprise PropTech software, commercial property leasing CRMs (IIPL Renting), and MLS-integrated property portals that empower real estate agencies, property managers, and brokers to automate tenant workflows and boost lease conversions.",
    aiOverview: {
      whatIs: "Real estate software development is the engineering of PropTech platforms, commercial property leasing CRMs, MLS listing feeds, tenant portals, and automated rental invoicing software.",
      whoNeeds: "Commercial real estate developers, property leasing managers, residential brokerage firms, and PropTech SaaS startups needing automated tenant onboarding and lease management.",
      capabilities: "Itoby Infotech Pvt. Ltd. delivers custom real estate CRMs (like IIPL Renting), RETS/RESO MLS API property sync, digital tenant onboarding, automated rent receipt generation, and investor dashboards.",
      technologies: "Next.js 15, React 19, TypeScript, Node.js, PostgreSQL, Supabase, Google Maps API, Stripe API, and Tailwind CSS.",
      processSummary: "5-step PropTech lifecycle: Property Funnel Audit -> Database Schema Design -> Agile CRM Development -> Payment Gateway Sync -> Production Launch & Training.",
      securityAndScalability: "Granular Row Level Security (RLS) data isolation, multi-currency financial tracking, automated payment webhooks, and zero-downtime Vercel/AWS hosting."
    },
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
    techStack: ["Next.js 15", "React 19", "Node.js", "PostgreSQL", "Supabase", "Google Maps API", "Tailwind CSS"],
    relatedServices: [
      { name: "CRM Development Services", path: "/services/crm-development" },
      { name: "SaaS Development Company", path: "/services/saas-development-company" },
      { name: "Custom Software Development", path: "/services/custom-software-development" },
      { name: "ERP Development Services", path: "/services/erp-development" }
    ],
    relatedCaseStudies: [
      { name: "Rent Itoby PropTech Platform", path: "/portfolio/rent-itoby", description: "Commercial office leasing and tenant management CRM." }
    ],
    faqs: [
      {
        question: "What is IIPL Renting for commercial property leasing?",
        answer: "IIPL Renting is our built-in real estate CRM designed for commercial property managers to track unit vacancies, automate tenant lease renewals, manage maintenance tickets, and generate rent invoices."
      },
      {
        question: "Can you integrate MLS / IDX feeds into custom real estate websites?",
        answer: "Yes. We integrate RETS and RESO Web API feeds to automatically sync real-time MLS property listings onto your custom Next.js website with zero lag."
      },
      {
        question: "Can custom real estate software automate WhatsApp rent reminders and receipts?",
        answer: "Yes. We build automated messaging triggers that send WhatsApp lease renewal notices, digital PDF rent receipts, and payment reminders directly to tenants."
      },
      {
        question: "How long does real estate software development take?",
        answer: "A property listing or tenant portal MVP takes 6 to 10 weeks. Comprehensive commercial leasing CRMs with multi-building tracking take 12 to 18 weeks."
      }
    ],
    caseStudy: {
      title: "Rent Itoby Commercial Leasing CRM",
      metrics: "Commercial property leasing & tenant management CRM platform engineered by Itoby Infotech.",
      path: "/portfolio/rent-itoby"
    }
  },
  {
    slug: "fintech",
    title: "FinTech App & Secure Payment Software Development",
    seoTitle: "FinTech Software Development Company | Payment Apps | Itoby Infotech",
    metaDescription: "FinTech software development company engineering digital payment wallets, GST invoicing platforms (IIPL Billing), and secure financial microservices.",
    heroBadge: "FinTech & Banking IT",
    heroDescription: "PCI-DSS compliant financial software, digital wallets, payment gateways, micro-lending platforms, and GST invoicing software for financial institutions.",
    overview: "Itoby Infotech Pvt. Ltd. builds secure FinTech applications, digital payment gateways, micro-lending portals, and automated billing tools (IIPL Billing & IIPL Cashmemo) engineered for high transaction speed and banking-grade security.",
    aiOverview: {
      whatIs: "FinTech software development is the engineering of digital payment wallets, automated GST invoicing software, micro-lending platforms, and banking API microservices.",
      whoNeeds: "Financial institutions, payment processors, retail chains, and SaaS startups needing secure transaction ledgers, digital receipt generation, and payment gateway sync.",
      capabilities: "Itoby Infotech Pvt. Ltd. delivers custom FinTech applications, IIPL Billing (enterprise GST invoicing), IIPL Cashmemo (instant digital cash memos via WhatsApp), and multi-currency ledgers.",
      technologies: "Node.js, Python, React Native, PostgreSQL, Supabase, Redis, AWS KMS, Docker, and Stripe API.",
      processSummary: "5-step FinTech lifecycle: Security Architecture -> Ledger Schema Design -> Agile API Development -> PCI-DSS & OWASP Audits -> High-Availability Deployment.",
      securityAndScalability: "AES-256 hardware security module key encryption, role-based permissions, sub-second ledger processing, and 99.99% cloud availability."
    },
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
    relatedServices: [
      { name: "Custom Software Development", path: "/services/custom-software-development" },
      { name: "SaaS Development Company", path: "/services/saas-development-company" },
      { name: "ERP Development Services", path: "/services/erp-development" }
    ],
    relatedCaseStudies: [
      { name: "QuickPay Digital Wallet App", path: "/portfolio/quickpay", description: "Secure FinTech mobile payment wallet app." }
    ],
    faqs: [
      {
        question: "How do you ensure PCI-DSS security in FinTech applications?",
        answer: "We implement tokenization, AES-256 hardware security module (HSM) key management, zero-knowledge architecture, and automated vulnerability scanning to satisfy strict PCI-DSS Level 1 compliance."
      }
    ],
    caseStudy: {
      title: "QuickPay Digital Wallet",
      metrics: "Processed $50M+ in transactions with 4.9★ rating",
      path: "/portfolio/quickpay"
    }
  },
  {
    slug: "ecommerce",
    title: "Headless E-Commerce & Multi-Vendor Marketplace Development",
    seoTitle: "Headless E-Commerce Development Company | Itoby Infotech",
    metaDescription: "Custom Next.js headless e-commerce storefronts, Shopify Plus integrations, WooCommerce platforms, and multi-vendor marketplaces built for maximum conversion.",
    heroBadge: "E-Commerce Engineering",
    heroDescription: "Custom Next.js headless e-commerce storefronts, Shopify Plus integrations, WooCommerce platforms, and multi-vendor marketplaces built for maximum conversion.",
    overview: "We engineer lightning-fast headless e-commerce platforms using Next.js 15, Shopify API, and WooCommerce backends that deliver sub-second page loads, zero checkout friction, and multi-currency international shopping experiences.",
    aiOverview: {
      whatIs: "Headless e-commerce development is the decoupling of frontend shopping user interfaces (using Next.js 15) from backend e-commerce engines for 100/100 Core Web Vitals performance.",
      whoNeeds: "E-commerce brands, multi-vendor platforms, and D2C retailers needing sub-second page loads, custom checkout flows, and multi-currency localized shopping.",
      capabilities: "Itoby Infotech Pvt. Ltd. builds Next.js 15 headless storefronts, Shopify/WooCommerce API integrations, multi-vendor marketplace portals, and automated abandoned cart tools.",
      technologies: "Next.js 15, React 19, TypeScript, Shopify API, Stripe API, Supabase, and Tailwind CSS.",
      processSummary: "4-step e-commerce engineering: Storefront UX -> Next.js API Integration -> Core Web Vitals Tuning -> Global Vercel Deployment.",
      securityAndScalability: "Zero heavy third-party app scripts, sub-second global CDN caching, secure payment tokenization, and instant cart updates."
    },
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
    techStack: ["Next.js 15", "React 19", "TypeScript", "Shopify API", "Stripe", "Supabase", "Tailwind CSS"],
    relatedServices: [
      { name: "Web Development Company", path: "/services/web-design" },
      { name: "Mobile App Development", path: "/services/mobile-app" },
      { name: "Custom Software Development", path: "/services/custom-software-development" }
    ],
    relatedCaseStudies: [
      { name: "Luxe Fashion Storefront", path: "/portfolio/luxe-fashion", description: "Headless e-commerce storefront with sub-second page rendering." },
      { name: "Easy2Buy Shopping Platform", path: "/portfolio/easy2buy", description: "Omnichannel e-commerce and retail integration." }
    ],
    faqs: [
      {
        question: "Why choose Headless Next.js E-Commerce over traditional Shopify?",
        answer: "Headless Next.js decoupling gives you 100/100 Core Web Vitals, sub-second page loads, complete design freedom, superior Google SEO rankings, and zero reliance on heavy third-party app scripts."
      }
    ],
    caseStudy: {
      title: "Luxe Fashion Headless Store",
      metrics: "+145% organic revenue growth in 90 days",
      path: "/portfolio/luxe-fashion"
    }
  },
  {
    slug: "insurance",
    title: "Insurance Software Development Company",
    seoTitle: "Insurance Software Development Company | InsurTech | Itoby Infotech",
    metaDescription: "InsurTech software development company engineering custom insurance CRMs, automated policy renewal engines, claims verification tools, and AI voice calling agents.",
    heroBadge: "InsurTech IT Engineering",
    heroDescription: "Secure InsurTech platforms, automated claims processing portals, AI policy recommendation engines, and customer portals for insurance providers.",
    overview: "We engineer enterprise InsurTech software, automated claims verification portals, and policy management dashboards enabling insurance companies and brokers to digitize underwriting workflows and reduce claims processing times by 80%.",
    aiOverview: {
      whatIs: "Insurance software development is the engineering of custom InsurTech platforms, policy management CRMs, claims verification workflows, and automated renewal reminder systems.",
      whoNeeds: "Insurance agencies, brokers, underwriters, and InsurTech startups seeking to automate policy quote generation, claims intake, and customer communication.",
      capabilities: "Itoby Infotech Pvt. Ltd. delivers custom insurance CRMs, digital claims submission portals, automated policy renewal triggers (via WhatsApp/SMS), and IIPL Calling (AI voice agents for policy reminders).",
      technologies: "Next.js 15, Node.js, Python, PostgreSQL, Supabase, AWS KMS, and Docker.",
      processSummary: "5-step InsurTech lifecycle: Underwriting Audit -> Security Schema Planning -> Agile Portal Development -> Claims Automation Testing -> High-Availability Cloud Launch.",
      securityAndScalability: "AES-256 database encryption, role-based permission boundaries, secure policyholder PII handling, and 99.99% server availability."
    },
    benefits: [
      "Automated document verification & AI fraud detection",
      "Sub-second policy quote generation and digital signing",
      "Seamless integration with payment gateways & billing systems",
      "Secure encrypted storage of policyholder PII data",
      "Automated WhatsApp & SMS policy renewal reminders",
      "Real-time claims tracking dashboard for customers and adjusters"
    ],
    features: [
      "Digital Claims Submission & Tracking",
      "AI Underwriting & Quote Generator",
      "Policyholder Customer Portal",
      "Automated Premium Renewal Engine",
      "Regulatory Compliance & Audit Trail",
      "Broker & Agency Partner Dashboard"
    ],
    techStack: ["Next.js 15", "Node.js", "Python", "PostgreSQL", "Supabase", "AWS KMS", "Docker"],
    relatedServices: [
      { name: "CRM Development Services", path: "/services/crm-development" },
      { name: "AI Agent Development Company", path: "/services/ai-agent-development" },
      { name: "Custom Software Development", path: "/services/custom-software-development" },
      { name: "AI Chatbot Development Company", path: "/services/ai-chatbot-development" }
    ],
    relatedCaseStudies: [
      { name: "Autonomous AI Voice Calling Agent", path: "/blog/autonomous-ai-voice-agents-restaurant-sales-calling", description: "AI voice agent architecture for automated renewal calls." }
    ],
    faqs: [
      {
        question: "How does InsurTech software automate claims processing?",
        answer: "Our software leverages AI document OCR and automated business rules to instantly verify damage photos, policy limits, and identity documents, routing clean claims for instant approval."
      },
      {
        question: "Can custom insurance software send automated policy renewal reminders via WhatsApp and AI voice calls?",
        answer: "Yes! We integrate automated WhatsApp messaging webhooks and IIPL Calling conversational AI voice agents to notify policyholders ahead of expiration dates and record renewal commitments."
      },
      {
        question: "How long does insurance software development take?",
        answer: "A core policyholder portal MVP takes 8 to 12 weeks. Comprehensive InsurTech platforms with claims processing and broker portals take 14 to 20 weeks."
      }
    ],
    caseStudy: {
      title: "InsureShield Claims Portal",
      metrics: "Reduced claims processing time from 7 days to 4 hours"
    }
  },
  {
    slug: "insurance-software-development",
    title: "Insurance Software Development Company",
    seoTitle: "Insurance Software Development Company | InsurTech | Itoby Infotech",
    metaDescription: "InsurTech software development company engineering custom insurance CRMs, automated policy renewal engines, claims verification tools, and AI voice calling agents.",
    heroBadge: "InsurTech IT Engineering",
    heroDescription: "Secure InsurTech platforms, automated claims processing portals, AI policy recommendation engines, and customer portals for insurance providers.",
    overview: "We engineer enterprise InsurTech software, automated claims verification portals, and policy management dashboards enabling insurance companies and brokers to digitize underwriting workflows and reduce claims processing times by 80%.",
    benefits: ["Automated document verification & AI fraud detection", "Sub-second policy quote generation and digital signing", "Seamless integration with payment gateways & billing systems"],
    features: ["Digital Claims Submission", "AI Underwriting", "Policyholder Portal", "Renewal Engine"],
    techStack: ["Next.js 15", "Node.js", "Python", "PostgreSQL", "Supabase"],
    faqs: [{ question: "How does InsurTech software automate claims?", answer: "Our software leverages AI document OCR and automated business rules." }],
    caseStudy: { title: "InsureShield Claims Portal", metrics: "Reduced claims processing time from 7 days to 4 hours" }
  },
  {
    slug: "education",
    title: "Education Software Development Company",
    seoTitle: "Education Software Development Company | EdTech LMS | Itoby Infotech",
    metaDescription: "Custom education software development company engineering learning management systems (LMS), student portals, live video classrooms, and subscription billing engines.",
    heroBadge: "EdTech Software Engineering",
    heroDescription: "Custom EdTech platforms, virtual classroom portals, interactive learning management systems (LMS), and student analytics for institutions.",
    overview: "Itoby Infotech Pvt. Ltd. builds custom LMS platforms, online assessment portals, and interactive virtual learning environments for universities, K-12 schools, and corporate training academies.",
    aiOverview: {
      whatIs: "Education software development is the engineering of custom Learning Management Systems (LMS), virtual classroom portals, student management databases, and educational subscription platforms.",
      whoNeeds: "Universities, K-12 schools, online coaching institutes, and corporate training academies seeking custom student portals, automated grading, and video streaming.",
      capabilities: "Itoby Infotech Pvt. Ltd. delivers custom LMS portals, WebRTC live video classrooms, automated digital certificate generation, course subscription engines, and student analytics dashboards.",
      technologies: "Next.js 15, React 19, Node.js, WebRTC, PostgreSQL, Supabase, Tailwind CSS, and AWS IVS.",
      processSummary: "5-step EdTech lifecycle: Pedagogy & Workflow Audit -> Portal Wireframing -> Agile Full-Stack Coding -> Video Streaming Load Audits -> Global Cloud Rollout.",
      securityAndScalability: "Scalable WebRTC media streaming for thousands of concurrent students, role-based student/teacher access control, and sub-second page loads."
    },
    benefits: [
      "Scalable video streaming for thousands of concurrent students",
      "Automated grading, quizzes, and digital certificate generation",
      "Interactive student-teacher portals with live Q&A",
      "Integrated payment gateways for course subscriptions",
      "Real-time progress tracking and engagement analytics",
      "Mobile-friendly responsive UI accessible on any device"
    ],
    features: [
      "Custom Learning Management System (LMS)",
      "Live Video Classroom Integration",
      "Student Performance Analytics",
      "Automate Certificate Verification",
      "Course Monetization & Subscription Billing",
      "Interactive Assignments & AI Quizzes"
    ],
    techStack: ["Next.js 15", "React 19", "Node.js", "WebRTC", "PostgreSQL", "Supabase", "Tailwind CSS"],
    relatedServices: [
      { name: "Custom Software Development", path: "/services/custom-software-development" },
      { name: "SaaS Development Company", path: "/services/saas-development-company" },
      { name: "Mobile App Development", path: "/services/mobile-app" },
      { name: "AI Chatbot Development Company", path: "/services/ai-chatbot-development" }
    ],
    relatedCaseStudies: [
      { name: "EduCampus LMS Portal", path: "/portfolio/techflow", description: "Scalable learning management system portal." }
    ],
    faqs: [
      {
        question: "Can custom EdTech platforms handle live video lectures for thousands of students?",
        answer: "Yes. We implement scalable WebRTC and AWS IVS media streaming pipelines capable of serving tens of thousands of concurrent video viewers with sub-second latency."
      },
      {
        question: "Can a custom LMS platform support automated course subscription billing?",
        answer: "Yes. We integrate Stripe Billing and Razorpay Subscriptions to support recurring monthly or annual student tuition plans, tier upgrades, and automated invoice receipts."
      },
      {
        question: "How long does EdTech LMS development take?",
        answer: "A core student learning portal MVP takes 6 to 10 weeks. Enterprise university LMS platforms with live video streaming and automated grading take 12 to 18 weeks."
      }
    ],
    caseStudy: {
      title: "EduCampus LMS Portal",
      metrics: "Enrolled 100,000+ active students with 99.99% uptime"
    }
  },
  {
    slug: "education-software-development",
    title: "Education Software Development Company",
    seoTitle: "Education Software Development Company | EdTech LMS | Itoby Infotech",
    metaDescription: "Custom education software development company engineering learning management systems (LMS), student portals, live video classrooms, and subscription billing engines.",
    heroBadge: "EdTech Software Engineering",
    heroDescription: "Custom EdTech platforms, virtual classroom portals, interactive learning management systems (LMS), and student analytics for institutions.",
    overview: "Itoby Infotech Pvt. Ltd. builds custom LMS platforms, online assessment portals, and interactive virtual learning environments for universities, K-12 schools, and corporate training academies.",
    benefits: ["Scalable video streaming", "Automated grading & quizzes", "Student-teacher portals"],
    features: ["Custom LMS", "Live Video Classroom", "Student Analytics", "Subscription Billing"],
    techStack: ["Next.js 15", "React", "Node.js", "WebRTC", "PostgreSQL"],
    faqs: [{ question: "Can EdTech platforms handle live video lectures?", answer: "Yes, we implement WebRTC and AWS streaming." }],
    caseStudy: { title: "EduCampus LMS Portal", metrics: "Enrolled 100,000+ active students" }
  },
  {
    slug: "manufacturing",
    title: "Manufacturing Software Development Company",
    seoTitle: "Manufacturing Software Development Company | Factory ERP | Itoby Infotech",
    metaDescription: "Specialized manufacturing software development company building custom industrial ERPs, shop floor execution (MES), IoT sensor telemetry, and inventory control.",
    heroBadge: "Manufacturing IT Solutions",
    heroDescription: "IoT-enabled manufacturing ERP systems, automated shop floor management, inventory control, and supply chain tracking software.",
    overview: "We engineer industrial manufacturing software, real-time inventory management ERPs, and factory automation dashboards that optimize production efficiency and eliminate inventory stockouts.",
    aiOverview: {
      whatIs: "Manufacturing software development is the engineering of custom industrial ERPs, Manufacturing Execution Systems (MES), IoT shop floor telemetry, and supply chain management software.",
      whoNeeds: "Manufacturing plant managers, industrial factories, and multi-warehouse distributors needing real-time visibility into production lines, inventory stock levels, and equipment efficiency.",
      capabilities: "Itoby Infotech Pvt. Ltd. delivers custom manufacturing ERPs, shop floor execution systems (MES), automated Bill of Materials (BOM) tracking, MQTT IoT sensor telemetry, and executive OEE reporting dashboards.",
      technologies: "Next.js 15, Node.js, Python, PostgreSQL, Supabase, MQTT, Docker, and AWS.",
      processSummary: "5-step manufacturing lifecycle: Plant Process Audit -> Database Schema Design -> Agile ERP Development -> IoT Telemetry Integration -> On-Site Rollout & SLA Support.",
      securityAndScalability: "100% source code IP ownership, Role-Based Access Control (RBAC), multi-branch inventory partitioning, sub-second query indexing, and 99.99% cloud availability."
    },
    benefits: [
      "Real-time visibility into factory floor production lines",
      "Automated raw material inventory tracking & reordering",
      "IoT sensor telemetry integration for predictive maintenance",
      "Quality assurance inspection & batch tracking",
      "Reduces production bottlenecks and idle machine time",
      "Custom executive dashboards for overall equipment effectiveness (OEE)"
    ],
    features: [
      "Shop Floor Execution System (MES)",
      "Industrial Inventory & Warehouse ERP",
      "IoT Telemetry & Machine Monitoring",
      "Automated Bill of Materials (BOM)",
      "Supply Chain & Procurement Sync",
      "Quality Control & Audit Logging"
    ],
    techStack: ["Next.js 15", "Node.js", "Python", "PostgreSQL", "Supabase", "MQTT", "Docker"],
    relatedServices: [
      { name: "ERP Development Services", path: "/services/erp-development" },
      { name: "Custom Software Development", path: "/services/custom-software-development" },
      { name: "CRM Development Services", path: "/services/crm-development" }
    ],
    relatedCaseStudies: [
      { name: "Manufacturing Plant ERP Case Study", path: "/portfolio/manufacturing-erp", description: "Custom multi-warehouse manufacturing ERP system." }
    ],
    faqs: [
      {
        question: "Can your manufacturing software connect with IoT shop floor sensors?",
        answer: "Yes. We integrate MQTT and HTTP telemetry protocols connecting PLC hardware and IoT sensors to your web dashboard for real-time machine monitoring."
      },
      {
        question: "What is the difference between an MES and a custom manufacturing ERP?",
        answer: "An MES (Manufacturing Execution System) controls real-time shop floor production execution and machine telemetry. An ERP manages enterprise back-office functions like procurement, inventory financial accounting, and sales order processing."
      },
      {
        question: "How long does manufacturing software development take?",
        answer: "A core inventory ERP MVP takes 10 to 14 weeks. Enterprise manufacturing platforms with IoT telemetry and shop floor MES take 16 to 24 weeks."
      }
    ],
    caseStudy: {
      title: "Manufacturing Plant ERP System",
      metrics: "Enterprise multi-warehouse manufacturing ERP system engineered by Itoby Infotech.",
      path: "/portfolio/manufacturing-erp"
    }
  },
  {
    slug: "manufacturing-software-development",
    title: "Manufacturing Software Development Company",
    seoTitle: "Manufacturing Software Development Company | Factory ERP | Itoby Infotech",
    metaDescription: "Specialized manufacturing software development company building custom industrial ERPs, shop floor execution (MES), IoT sensor telemetry, and inventory control.",
    heroBadge: "Manufacturing IT Solutions",
    heroDescription: "IoT-enabled manufacturing ERP systems, automated shop floor management, inventory control, and supply chain tracking software.",
    overview: "We engineer industrial manufacturing software, real-time inventory management ERPs, and factory automation dashboards that optimize production efficiency and eliminate inventory stockouts.",
    benefits: ["Real-time factory floor visibility", "Automated raw material inventory", "IoT sensor integration"],
    features: ["Shop Floor Execution (MES)", "Inventory ERP", "IoT Telemetry", "Bill of Materials"],
    techStack: ["Next.js 15", "Node.js", "Python", "PostgreSQL", "MQTT"],
    faqs: [{ question: "Can manufacturing software connect with IoT sensors?", answer: "Yes, we integrate MQTT and HTTP telemetry protocols." }],
    caseStudy: { title: "Apex Manufacturing ERP", metrics: "Increased factory OEE by 35%", path: "/portfolio/manufacturing-erp" }
  },
  {
    slug: "logistics",
    title: "Logistics Software Development Company",
    seoTitle: "Logistics Software Development Company | Fleet & Supply Chain | Itoby Infotech",
    metaDescription: "Top logistics software development company engineering real-time GPS fleet tracking portals, route optimization tools, driver mobile apps, and warehouse ERPs.",
    heroBadge: "Logistics & Transport IT",
    heroDescription: "Real-time fleet tracking portals, dispatch optimization engines, warehouse management software, and supply chain tracking.",
    overview: "We build high-capacity logistics software, route optimization tools, driver mobile apps, and warehouse management ERPs that empower transportation providers to track shipments in real time.",
    aiOverview: {
      whatIs: "Logistics software development is the engineering of real-time GPS fleet tracking portals, automated dispatching tools, driver mobile applications, and warehouse inventory ERPs.",
      whoNeeds: "Freight carriers, 3PL logistics providers, dispatch centers, and delivery fleets seeking to optimize fuel costs, automate dispatching, and provide real-time tracking.",
      capabilities: "Itoby Infotech Pvt. Ltd. delivers GPS fleet tracking dashboards, driver mobile apps (React Native/Flutter), electronic Proof of Delivery (e-POD), route optimization algorithms, and warehouse picking ERPs.",
      technologies: "Next.js 15, React Native, Flutter, Node.js, Google Maps API, PostgreSQL, Supabase, and WebSockets.",
      processSummary: "5-step logistics lifecycle: Dispatch Workflow Audit -> Maps & API Architecture -> Mobile & Web Coding -> Real-Time GPS Audits -> Enterprise Rollout & SLA Support.",
      securityAndScalability: "Background GPS location streaming, WebSocket real-time updates, offline mobile data caching, and sub-second fleet telemetry processing."
    },
    benefits: [
      "Real-time GPS fleet tracking and automated ETA updates",
      "Route optimization algorithms reducing fuel costs by up to 25%",
      "Digital Proof of Delivery (e-POD) with signature capture",
      "Automate freight dispatching and driver job assignment",
      "Warehouse inventory barcode scanning & picking optimization",
      "Multi-carrier API integration (FedEx, UPS, DHL, custom fleets)"
    ],
    features: [
      "GPS Fleet & Vessel Tracking Dashboard",
      "Automated Freight Dispatch & Scheduling",
      "Driver Mobile App with Offline Maps",
      "Digital Proof of Delivery (e-POD)",
      "Warehouse Picking & Packing Management",
      "Automated Freight Billing & Invoicing"
    ],
    techStack: ["Next.js 15", "React Native", "Node.js", "Google Maps API", "PostgreSQL", "Supabase"],
    relatedServices: [
      { name: "Custom Software Development", path: "/services/custom-software-development" },
      { name: "SaaS Development Company", path: "/services/saas-development-company" },
      { name: "AI Development Company", path: "/services/ai-development-company" },
      { name: "Mobile App Development", path: "/services/mobile-app" }
    ],
    relatedCaseStudies: [
      { name: "FreightXpress Logistics System", path: "/portfolio/freightxpress", description: "Fleet management and logistics dispatch software." }
    ],
    faqs: [
      {
        question: "Does your logistics software support real-time GPS tracking on mobile?",
        answer: "Yes. We build driver mobile apps with background GPS location streaming and real-time WebSocket sync to update customer tracking pages instantly."
      },
      {
        question: "What is electronic Proof of Delivery (e-POD)?",
        answer: "Electronic Proof of Delivery (e-POD) allows drivers to capture digital customer signatures, photo verification of packages, and timestamped GPS coordinates on their mobile app upon delivery."
      },
      {
        question: "How long does logistics software development take?",
        answer: "A core fleet tracking or dispatch MVP takes 6 to 10 weeks. Enterprise 3PL logistics platforms with multi-warehouse picking and carrier API sync take 12 to 18 weeks."
      }
    ],
    caseStudy: {
      title: "FreightXpress Global Logistics",
      metrics: "Dispatched 500,000+ monthly shipments with zero lost packages",
      path: "/portfolio/freightxpress"
    }
  },
  {
    slug: "logistics-software-development",
    title: "Logistics Software Development Company",
    seoTitle: "Logistics Software Development Company | Fleet & Supply Chain | Itoby Infotech",
    metaDescription: "Top logistics software development company engineering real-time GPS fleet tracking portals, route optimization tools, driver mobile apps, and warehouse ERPs.",
    heroBadge: "Logistics & Transport IT",
    heroDescription: "Real-time fleet tracking portals, dispatch optimization engines, warehouse management software, and supply chain tracking.",
    overview: "We build high-capacity logistics software, route optimization tools, driver mobile apps, and warehouse management ERPs that empower transportation providers to track shipments in real time.",
    benefits: ["Real-time GPS fleet tracking", "Route optimization algorithms", "Digital Proof of Delivery"],
    features: ["GPS Fleet Tracking", "Automated Dispatch", "Driver Mobile App", "Warehouse Management"],
    techStack: ["Next.js 15", "React Native", "Node.js", "Google Maps API", "PostgreSQL"],
    faqs: [{ question: "Does logistics software support real-time GPS tracking?", answer: "Yes, we build driver mobile apps with background GPS streaming." }],
    caseStudy: { title: "FreightXpress Global Logistics", metrics: "Dispatched 500,000+ monthly shipments", path: "/portfolio/freightxpress" }
  },
  {
    slug: "retail",
    title: "Retail Software Development Company",
    seoTitle: "Retail Software Development Company | Cloud POS & Inventory | Itoby Infotech",
    metaDescription: "Retail software development company building cloud POS systems, instant WhatsApp cash memo builders (IIPL Cashmemo), multi-store inventory sync, and retail CRMs.",
    heroBadge: "Retail IT Solutions",
    heroDescription: "Cloud POS systems, multi-branch retail inventory software, instant digital cash memo builders, and omnichannel retail platforms.",
    overview: "Itoby Infotech Pvt. Ltd. builds omnichannel retail software, cloud Point of Sale (POS) tools, and instant digital cash memo generators (IIPL Cashmemo) that sync inventory across physical stores and e-commerce websites.",
    aiOverview: {
      whatIs: "Retail software development is the engineering of cloud Point of Sale (POS) systems, instant WhatsApp digital cash memo builders, multi-branch inventory synchronization, and retail customer CRMs.",
      whoNeeds: "Retail store chains, supermarkets, boutiques, and multi-channel retailers seeking to eliminate paper receipt costs and maintain real-time inventory across physical and online channels.",
      capabilities: "Itoby Infotech Pvt. Ltd. delivers cloud POS interfaces, IIPL Cashmemo (instant digital PDF receipts sent directly to WhatsApp), multi-location inventory sync, and customer reward CRMs.",
      technologies: "Next.js 15, React 19, Node.js, PostgreSQL, Supabase, Stripe API, and Tailwind CSS.",
      processSummary: "5-step retail software lifecycle: Retail Workflow Audit -> Database Schema Design -> POS & Messaging Development -> Barcode & Payment Gateway Testing -> Store Rollout.",
      securityAndScalability: "Multi-branch store inventory partitioning, automated payment webhooks, sub-second POS barcode scanning, and instant WhatsApp PDF delivery."
    },
    benefits: [
      "Instant checkout with digital WhatsApp receipts (IIPL Cashmemo)",
      "Real-time multi-branch stock synchronization",
      "Omnichannel integration connecting POS with e-commerce",
      "Automated low-stock alerts and purchase order generation",
      "Customer loyalty & gift card program management",
      "Detailed daily sales and profit margin analytics"
    ],
    features: [
      "Cloud POS & Barcode Scanner Interface",
      "Instant WhatsApp Digital Cash Memos",
      "Multi-Location Inventory Management",
      "Customer Loyalty & Reward CRM",
      "E-Commerce & Payment Gateway Sync",
      "Sales Tax & GST Automated Invoicing"
    ],
    techStack: ["Next.js 15", "React 19", "Node.js", "PostgreSQL", "Supabase", "Stripe API", "Tailwind CSS"],
    relatedServices: [
      { name: "Web Development Company", path: "/services/web-design" },
      { name: "Mobile App Development", path: "/services/mobile-app" },
      { name: "ERP Development Services", path: "/services/erp-development" },
      { name: "CRM Development Services", path: "/services/crm-development" }
    ],
    relatedCaseStudies: [
      { name: "Easy2Buy Retail Platform", path: "/portfolio/easy2buy", description: "Omnichannel e-commerce and retail POS integration." }
    ],
    faqs: [
      {
        question: "How does IIPL Cashmemo help retail store owners?",
        answer: "IIPL Cashmemo allows retail cashier staff to generate digital PDF cash memos and send them directly to customers' WhatsApp numbers in seconds, cutting paper receipt costs to zero."
      },
      {
        question: "Can custom retail software sync inventory between physical stores and our e-commerce site?",
        answer: "Yes. We engineer bi-directional inventory synchronization APIs connecting cloud POS systems with Next.js e-commerce storefronts, Shopify, and WooCommerce."
      },
      {
        question: "How long does retail software development take?",
        answer: "A cloud POS or WhatsApp cash memo tool MVP takes 4 to 8 weeks. Comprehensive multi-branch retail inventory systems take 10 to 16 weeks."
      }
    ],
    caseStudy: {
      title: "OmniRetail Store Chain",
      metrics: "Connected 45 physical retail outlets with single-click inventory sync",
      path: "/portfolio/easy2buy"
    }
  },
  {
    slug: "retail-software-development",
    title: "Retail Software Development Company",
    seoTitle: "Retail Software Development Company | Cloud POS & Inventory | Itoby Infotech",
    metaDescription: "Retail software development company building cloud POS systems, instant WhatsApp cash memo builders (IIPL Cashmemo), multi-store inventory sync, and retail CRMs.",
    heroBadge: "Retail IT Solutions",
    heroDescription: "Cloud POS systems, multi-branch retail inventory software, instant digital cash memo builders, and omnichannel retail platforms.",
    overview: "Itoby Infotech Pvt. Ltd. builds omnichannel retail software, cloud Point of Sale (POS) tools, and instant digital cash memo generators (IIPL Cashmemo) that sync inventory across physical stores and e-commerce websites.",
    benefits: ["Instant WhatsApp digital receipts", "Real-time stock synchronization", "Omnichannel POS integration"],
    features: ["Cloud POS Interface", "Instant Cash Memos", "Multi-Location Inventory", "E-Commerce Sync"],
    techStack: ["Next.js 15", "React", "Node.js", "PostgreSQL", "Stripe API"],
    faqs: [{ question: "How does IIPL Cashmemo help retail owners?", answer: "Generates digital PDF receipts sent directly to WhatsApp." }],
    caseStudy: { title: "OmniRetail Store Chain", metrics: "Connected 45 physical retail outlets", path: "/portfolio/easy2buy" }
  }
];
