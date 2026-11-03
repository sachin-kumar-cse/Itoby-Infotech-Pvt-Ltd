import { CaseStudyTemplate } from "@/components/CaseStudyTemplate";
import heroImage from "@/assets/portfolio/rainfra-architecture.webp";
import solidedgeImage from "@/assets/portfolio/solidedge-construction.png";
import kaspereyeImage from "@/assets/portfolio/kaspereye-security.webp";

const caseStudy = {
  title: "RA Infra Studio – Architecture Portfolio",
  category: "Website",
  client: "RA Infra Studio",
  duration: "3 months",
  year: "2025",
  heroImage: heroImage,
  overview: "A dark-themed portfolio website for an architecture and interior design firm, featuring immersive project showcases, full-screen galleries, and responsive design.",
  challenge: [
    "An established architecture firm required a modern digital portfolio to showcase their architectural portfolio.",
    "Needed to convey the quality and craftsmanship of their structural designs online.",
    "Required a system to categorize projects by type (housing, commercial, interior) with rich media galleries.",
    "Wanted to attract prospective commercial and residential clients through a professional digital presence."
  ],
  solution: [
    "Designed an elegant dark-themed website reflecting the firm's architectural positioning.",
    "Built immersive project showcase pages with full-screen hero imagery, galleries, and specifications.",
    "Created a project filtering system with categories for architecture, interior, and planning.",
    "Implemented smooth animations and transitions for an intuitive browsing experience.",
    "Added profile overviews, capabilities summary, and a consultation inquiry system."
  ],
  results: [
    { metric: "Frontend", value: "React + Vite" },
    { metric: "Styling", value: "Tailwind CSS" },
    { metric: "Animations", value: "Framer Motion" },
    { metric: "Media Delivery", value: "Cloudinary" }
  ],
  techStack: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Supabase", "Three.js", "Cloudinary"],
  relatedProjects: [
    {
      title: "Solid Edge Constructions",
      category: "Website",
      image: solidedgeImage,
      path: "/portfolio/solidedgeconstructions"
    },
    {
      title: "Kaspereye Security Solutions",
      category: "Website",
      image: kaspereyeImage,
      path: "/portfolio/kaspereye-security"
    }
  ]
};

const RainfraStudio = () => <CaseStudyTemplate caseStudy={caseStudy} />;

export default RainfraStudio;
