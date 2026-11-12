import { CaseStudyTemplate } from "@/components/CaseStudyTemplate";
import heroImage from "@/assets/portfolio/iipl-billing.webp";
import juxtudioImage from "@/assets/portfolio/juxtudio-interior.webp";
import rainfraImage from "@/assets/portfolio/rainfra-studio-real.webp";

const caseStudy = {
  title: "IIPL Billing SaaS – Modern ERP for High-Velocity Commerce",
  category: "Proprietary SaaS",
  client: "Itoby Infotech (IIPL SaaS Lab)",
  duration: "6 months",
  year: "2026",
  heroImage: heroImage,
  alt: "IIPL Billing SaaS enterprise platform",
  overview: "High-velocity commerce billing ERP platform engineered by Itoby Infotech Pvt. Ltd. (IIPL) to accelerate transaction checkout, enforce automated GST splits, synchronize inventory catalogs, and query business metrics using natural AI models.",
  challenge: [
    "High transaction latency during peak commercial sales checkout.",
    "Complex GST and multi-state tax split calculations requiring manual auditing.",
    "Inventory desynchronization across multi-location retail warehouses.",
    "Lack of natural language querying for executive financial metrics."
  ],
  solution: [
    "Architected high-velocity in-memory transaction checkout pipeline with millisecond response.",
    "Engineered automated GST split engine supporting CGST, SGST, IGST and export invoices.",
    "Implemented real-time bidirectional inventory sync with low-stock predictive replenishment.",
    "Embedded AI assistant to query financial health, revenue velocity, and sales forecasting."
  ],
  results: [
    { metric: "Checkout Speed", value: "< 200ms" },
    { metric: "Tax Accuracy", value: "99.99%" },
    { metric: "Architecture", value: "Next.js + Go" },
    { metric: "Cloud Scale", value: "Multi-Tenant" }
  ],
  techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Framer Motion", "Docker"],
  relatedProjects: [
    {
      title: "RA Infra Studio Architecture",
      category: "Architecture",
      image: rainfraImage,
      path: "/portfolio/rainfra-studio"
    },
    {
      title: "Juxtudio Interior Studio",
      category: "Spatial Design",
      image: juxtudioImage,
      path: "/portfolio/juxtudio"
    }
  ]
};

const IIPLBilling = () => <CaseStudyTemplate caseStudy={caseStudy} />;

export default IIPLBilling;

