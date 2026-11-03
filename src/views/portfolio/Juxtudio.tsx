import { CaseStudyTemplate } from "@/components/CaseStudyTemplate";
import heroImage from "@/assets/portfolio/juxtudio-architecture.png";
import rainfraImage from "@/assets/portfolio/rainfra-architecture.webp";
import solidedgeImage from "@/assets/portfolio/solidedge-construction.png";

const caseStudy = {
  title: "Juxtudio – Architecture & Design Portfolio",
  category: "Website",
  client: "Juxtudio",
  duration: "2.5 months",
  year: "2025",
  heroImage: heroImage,
  overview: "A premium, minimalist design portfolio showcasing high-end luxury interiors and structural design layouts with immersive parallax scrolling and full-screen media galleries.",
  challenge: [
    "An architectural interior design concept requiring a premium web showcase for residential projects.",
    "Traditional grid layouts failed to capture the artistic depth of interior aesthetics.",
    "Required fluid transitions and cinematic scroll animations to mimic a physical luxury gallery walk.",
    "Needed contact integration for setting up physical and virtual site consultations."
  ],
  solution: [
    "Built a high-end dark-themed aesthetic with sleek borders and fluid layouts.",
    "Created custom parallax project galleries, allowing full-screen previews and high-resolution zooming.",
    "Developed a custom design journal layout to showcase concepts, blueprint sketches, and design thoughts.",
    "Integrated a consultation booking form hook for client inquiries.",
    "Optimized image loading using lazy-loaded WebP layouts to ensure fluid frame rates on mobile screens."
  ],
  results: [
    { metric: "Animations", value: "Framer Motion" },
    { metric: "Scroll Engine", value: "GSAP" },
    { metric: "Performance", value: "WebP / PWA" },
    { metric: "Styling", value: "Tailwind CSS" }
  ],
  techStack: ["React", "Vite", "Tailwind CSS", "Framer Motion", "GSAP ScrollTrigger", "PWA Support"],
  relatedProjects: [
    {
      title: "RA Infra Studio Portfolio",
      category: "Website",
      image: rainfraImage,
      path: "/portfolio/rainfra-studio"
    },
    {
      title: "Solid Edge Constructions",
      category: "Website",
      image: solidedgeImage,
      path: "/portfolio/solidedgeconstructions"
    }
  ]
};

const Juxtudio = () => <CaseStudyTemplate caseStudy={caseStudy} />;

export default Juxtudio;
