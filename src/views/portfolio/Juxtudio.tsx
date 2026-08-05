import { CaseStudyTemplate } from "@/components/CaseStudyTemplate";
import heroImage from "@/assets/portfolio/juxtudio-architecture.png";
import rainfraImage from "@/assets/portfolio/rainfra-architecture.webp";
import luxeImage from "@/assets/portfolio/luxe-fashion.webp";

const caseStudy = {
  title: "Juxtudio – Architecture & Design Portfolio",
  category: "Website",
  client: "Juxtudio Design Studio",
  duration: "2.5 months",
  year: "2025",
  heroImage: heroImage,
  overview: "A premium, minimalist design portfolio showcasing high-end luxury interiors and structural design layouts with immersive parallax scrolling and full-screen media galleries.",
  challenge: [
    "An architectural interior design firm needed an ultra-premium web presence to target high-net-worth residential projects.",
    "Traditional grid layouts failed to capture the artistic depth of their interior aesthetics.",
    "Required fluid transitions and cinematic scroll animations to mimic a physical luxury gallery walk.",
    "Wanted seamless contact integration for setting up physical and virtual site consultations."
  ],
  solution: [
    "Built a high-end dark-themed aesthetic with sleek gold borders and fluid layouts.",
    "Created custom parallax project galleries, allowing full-screen previews and high-resolution zooming.",
    "Developed a custom design journal (blog) to showcase concepts, blueprint sketches, and design thoughts.",
    "Integrated a seamless scheduling application hook to book architectural consultations directly.",
    "Optimized image loading using lazy-loaded WebP layouts to ensure fluid frame rates on mobile screens."
  ],
  results: [
    { metric: "Page Session Time", value: "+180%" },
    { metric: "Image Load Speed", value: "98/100" },
    { metric: "Consultation Bookings", value: "+95%" },
    { metric: "Bounce Rate", value: "-40%" }
  ],
  techStack: ["React", "Vite", "Tailwind CSS", "Framer Motion", "GSAP ScrollTrigger", "PWA Support"],
  testimonial: {
    quote: "Juxtudio's digital gallery has given us the platform we needed to compete at the highest tier of design. The fluid parallax motion makes our work feel incredibly luxury and modern.",
    author: "Neha Sharma",
    role: "Lead Creative Designer, Juxtudio"
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

const Juxtudio = () => <CaseStudyTemplate caseStudy={caseStudy} />;

export default Juxtudio;
