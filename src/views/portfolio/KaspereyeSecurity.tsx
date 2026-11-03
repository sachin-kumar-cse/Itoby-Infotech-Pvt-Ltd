import { CaseStudyTemplate } from "@/components/CaseStudyTemplate";
import heroImage from "@/assets/portfolio/kaspereye-security.webp";
import easy2buyImage from "@/assets/portfolio/easy2buy-ecommerce.webp";
import rainfraImage from "@/assets/portfolio/rainfra-architecture.webp";

const caseStudy = {
  title: "Kaspereye Security Solutions",
  category: "Website",
  client: "Kaspereye Security",
  duration: "4 months",
  year: "2025",
  heroImage: heroImage,
  overview: "A corporate website for an electronic physical security and surveillance equipment provider in Delhi NCR, featuring service showcases, product catalogs, and inquiry capture workflows.",
  challenge: [
    "Outdated digital presence that did not showcase the company's full equipment capabilities.",
    "Required structured online lead inquiry workflows for corporate and residential clients.",
    "Needed to showcase physical security equipment with technical specifications and feature sheets.",
    "Mobile experience required optimization for clients browsing on mobile devices."
  ],
  solution: [
    "Designed a dark-themed UI with cyan accents tailored to high-tech electronic security systems.",
    "Built an interactive product catalog with filtering and detailed equipment specification sheets.",
    "Implemented structured inquiry forms with notification routing.",
    "Created a responsive layout optimized for all device viewports with fast loading times.",
    "Organized client project galleries and technical solution overviews."
  ],
  results: [
    { metric: "Frontend", value: "React + Vite" },
    { metric: "Styling", value: "Tailwind CSS" },
    { metric: "Page Speed", value: "< 1.5s" },
    { metric: "Design", value: "Dark Theme" }
  ],
  techStack: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Node.js", "MongoDB", "Cloudflare"],
  relatedServices: [
    { name: "Web Development Company", path: "/services/web-design" },
    { name: "Custom Software Development", path: "/services/custom-software-development" },
    { name: "AI Development Company", path: "/services/ai-development-company" }
  ],
  relatedIndustries: [
    { name: "Software for Real Estate", path: "/industries/real-estate" },
    { name: "Software for Retail", path: "/industries/retail" }
  ],
  relatedTechnologies: [
    { name: "React Development", path: "/technology/react" },
    { name: "Node.js Development", path: "/technology/nodejs" },
    { name: "Python AI Engineering", path: "/technology/python" }
  ],
  relatedProjects: [
    {
      title: "Easy2Buy Fashion E-commerce",
      category: "E-commerce",
      image: easy2buyImage,
      path: "/portfolio/easy2buy"
    },
    {
      title: "RA Infra Studio",
      category: "Website",
      image: rainfraImage,
      path: "/portfolio/rainfra-studio"
    }
  ]
};

const KaspereyeSecurity = () => <CaseStudyTemplate caseStudy={caseStudy} />;

export default KaspereyeSecurity;
