import { CaseStudyTemplate } from "@/components/CaseStudyTemplate";
import heroImage from "@/assets/portfolio/solidedge-construction.png";
import luxeImage from "@/assets/portfolio/luxe-fashion.webp";
import rainfraImage from "@/assets/portfolio/rainfra-architecture.webp";

const caseStudy = {
  title: "Solid Edge Constructions",
  category: "Website",
  client: "Solid Edge Constructions",
  duration: "2 months",
  year: "2025",
  heroImage: heroImage,
  overview: "A premium, high-performance website design and comprehensive project portfolio showcase built for a leading civil construction and infrastructure engineering firm.",
  challenge: [
    "A rapidly growing civil engineering firm wanted to establish a robust digital footprint to showcase complex commercial structures.",
    "Required a high-converting website to attract government bids and private commercial builders.",
    "Needed an structured showcase page to display detailed stats (square footage, project timelines, materials).",
    "Needed a fast, responsive layout that performs optimally on all mobile and desktop devices."
  ],
  solution: [
    "Designed and developed a premium glassmorphic website with robust layouts showcasing construction details.",
    "Created an interactive portfolio gallery filtering projects by commercial, residential, and infrastructure categories.",
    "Implemented client testimonial sections, service catalogs, and simplified quote request funnels.",
    "Fully optimized for search engines (SEO) with keyword-dense structured data to drive organic commercial leads.",
    "Configured custom analytics tracking to monitor visitor engagement and contact form submissions."
  ],
  results: [
    { metric: "Inbound Leads", value: "+140%" },
    { metric: "Page Load Speed", value: "<1.2s" },
    { metric: "Organic Traffic", value: "+210%" },
    { metric: "Conversion Rate", value: "+75%" }
  ],
  techStack: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Supabase", "Lucide Icons", "Google Analytics"],
  testimonial: {
    quote: "Our new digital home reflects the solidity and engineering excellence of our physical structures. The portfolio showcase is already helping us close major commercial construction accounts.",
    author: "Vikram Singh",
    role: "Managing Director, Solid Edge Constructions"
  },
  relatedProjects: [
    {
      title: "RA Infra Studio Portfolio",
      category: "Website",
      image: rainfraImage,
      path: "/portfolio/rainfra-studio"
    },
    {
      title: "Luxe Fashion E-commerce",
      category: "E-commerce",
      image: luxeImage,
      path: "/portfolio/luxe-fashion"
    }
  ]
};

const SolidEdgeConstructions = () => <CaseStudyTemplate caseStudy={caseStudy} />;

export default SolidEdgeConstructions;
