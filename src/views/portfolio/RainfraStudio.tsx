import { CaseStudyTemplate } from "@/components/CaseStudyTemplate";
import heroImage from "@/assets/portfolio/rainfra-architecture.webp";
import luxeImage from "@/assets/portfolio/luxe-fashion.webp";
import kaspereyeImage from "@/assets/portfolio/kaspereye-security.webp";

const caseStudy = {
  title: "RA Infra Studio – Architecture Portfolio",
  category: "Website",
  client: "RA Infra Studio",
  duration: "3 months",
  year: "2025",
  heroImage: heroImage,
  overview: "A stunning dark-themed portfolio website for a leading architecture and interior design firm with 20+ years of experience, featuring immersive project showcases and 3D walkthroughs.",
  challenge: [
    "An established architecture firm with 150+ completed projects had no digital portfolio to showcase their work.",
    "Needed to convey the premium quality and craftsmanship of their architectural designs online.",
    "Required a system to categorize projects by type (housing, commercial, interior) with rich media galleries.",
    "Wanted to attract high-value clients through a professional digital presence."
  ],
  solution: [
    "Designed an elegant dark-themed website with gold accents reflecting the firm's premium positioning.",
    "Built immersive project showcase pages with full-screen hero images, image galleries, and project details.",
    "Created a dynamic project filtering system with categories for architecture, interior, and planning.",
    "Implemented smooth scroll animations and parallax effects for a cinematic browsing experience.",
    "Added team profiles, company timeline, and a streamlined contact/consultation booking system."
  ],
  results: [
    { metric: "Client Inquiries", value: "+200%" },
    { metric: "Avg. Session Duration", value: "4.5min" },
    { metric: "Portfolio Views", value: "10K+/mo" },
    { metric: "Project Conversions", value: "+85%" }
  ],
  techStack: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Supabase", "Three.js", "Cloudinary"],
  testimonial: {
    quote: "Our new website truly represents the quality of our work. The immersive project showcases have helped us attract premium clients who appreciate attention to detail in both architecture and digital experiences.",
    author: "Ar. Rajesh Agarwal",
    role: "Principal Architect, RA Infra Studio"
  },
  relatedProjects: [
    {
      title: "Luxe Fashion E-commerce",
      category: "E-commerce",
      image: luxeImage,
      path: "/portfolio/luxe-fashion"
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
