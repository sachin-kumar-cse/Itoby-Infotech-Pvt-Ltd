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
    title: "Healthcare Software Development",
    heroBadge: "Healthcare Software Engineering",
    heroDescription: "Itoby Infotech Pvt. Ltd. builds custom healthcare software, patient portals, medical inventory engines, and automated scheduling systems for providers.",
    overview: "Healthcare software development is the engineering process of building secure digital applications, patient portals, and operational systems for medical practices, clinics, and healthtech companies. Itoby Infotech Pvt. Ltd. develops custom appointment scheduling engines, administrative workflow portals, patient communication tools, and inventory management systems to streamline healthcare operations.",
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
      metrics: "Engineered custom web and mobile workflows for streamlined appointment scheduling, patient intake, and administrative data management."
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
  },
  {
    slug: "insurance-software-development",
    title: "Insurance Software Development & Claims Automation",
    heroBadge: "InsurTech IT Engineering",
    heroDescription: "Secure InsurTech platforms, automated claims processing portals, AI policy recommendation engines, and customer portals for insurance providers.",
    overview: "We engineer enterprise InsurTech software, automated claims verification portals, and policy management dashboards enabling insurance companies and brokers to digitize underwriting workflows and reduce claims processing times by 80%.",
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
    faqs: [
      {
        question: "How does InsurTech software automate claims processing?",
        answer: "Our software leverages AI document OCR and automated business rules to instantly verify damage photos, policy limits, and identity documents, routing clean claims for instant approval."
      }
    ],
    caseStudy: {
      title: "InsureShield Claims Portal",
      metrics: "Reduced claims processing time from 7 days to 4 hours"
    }
  },
  {
    slug: "education-software-development",
    title: "EdTech & Learning Management System (LMS) Development",
    heroBadge: "EdTech Software Engineering",
    heroDescription: "Custom EdTech platforms, virtual classroom portals, interactive learning management systems (LMS), and student analytics for institutions.",
    overview: "Itoby Infotech Pvt. Ltd. builds custom LMS platforms, online assessment portals, and interactive virtual learning environments for universities, K-12 schools, and corporate training academies.",
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
    techStack: ["Next.js 15", "React", "Node.js", "WebRTC", "PostgreSQL", "Supabase", "Tailwind CSS"],
    faqs: [
      {
        question: "Can custom EdTech platforms handle live video lectures for thousands of students?",
        answer: "Yes. We implement scalable WebRTC and AWS IVS media streaming pipelines capable of serving tens of thousands of concurrent video viewers with sub-second latency."
      }
    ],
    caseStudy: {
      title: "EduCampus LMS Portal",
      metrics: "Enrolled 100,000+ active students with 99.99% uptime"
    }
  },
  {
    slug: "manufacturing-software-development",
    title: "Smart Manufacturing & Supply Chain ERP Software",
    heroBadge: "Manufacturing IT Solutions",
    heroDescription: "IoT-enabled manufacturing ERP systems, automated shop floor management, inventory control, and supply chain tracking software.",
    overview: "We engineer industrial manufacturing software, real-time inventory management ERPs, and factory automation dashboards that optimize production efficiency and eliminate inventory stockouts.",
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
    faqs: [
      {
        question: "Can your manufacturing software connect with IoT shop floor sensors?",
        answer: "Yes. We integrate MQTT and HTTP telemetry protocols connecting PLC hardware and IoT sensors to your web dashboard for real-time machine monitoring."
      }
    ],
    caseStudy: {
      title: "Apex Manufacturing ERP",
      metrics: "Increased factory OEE by 35% across 8 production facilities"
    }
  },
  {
    slug: "logistics-software-development",
    title: "Logistics & Fleet Management Software Development",
    heroBadge: "Logistics & Transport IT",
    heroDescription: "Real-time fleet tracking portals, dispatch optimization engines, warehouse management software, and supply chain tracking.",
    overview: "We build high-capacity logistics software, route optimization tools, driver mobile apps, and warehouse management ERPs that empower transportation providers to track shipments in real time.",
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
    faqs: [
      {
        question: "Does your logistics software support real-time GPS tracking on mobile?",
        answer: "Yes. We build driver mobile apps with background GPS location streaming and real-time WebSocket sync to update customer tracking pages instantly."
      }
    ],
    caseStudy: {
      title: "FreightXpress Global Logistics",
      metrics: "Dispatched 500,000+ monthly shipments with zero lost packages"
    }
  },
  {
    slug: "retail-software-development",
    title: "Retail POS & Multi-Store Inventory Software",
    heroBadge: "Retail IT Solutions",
    heroDescription: "Cloud POS systems, multi-branch retail inventory software, instant digital cash memo builders, and omnichannel retail platforms.",
    overview: "Itoby Infotech Pvt. Ltd. builds omnichannel retail software, cloud Point of Sale (POS) tools, and instant digital cash memo generators (IIPL Cashmemo) that sync inventory across physical stores and e-commerce websites.",
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
    techStack: ["Next.js 15", "React", "Node.js", "PostgreSQL", "Supabase", "Stripe API", "Tailwind CSS"],
    faqs: [
      {
        question: "How does IIPL Cashmemo help retail store owners?",
        answer: "IIPL Cashmemo allows retail cashier staff to generate digital PDF cash memos and send them directly to customers' WhatsApp numbers in seconds, cutting paper receipt costs to zero."
      }
    ],
    caseStudy: {
      title: "OmniRetail Store Chain",
      metrics: "Connected 45 physical retail outlets with single-click inventory sync"
    }
  }
];
