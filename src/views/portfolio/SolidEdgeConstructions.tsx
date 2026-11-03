import { CaseStudyTemplate } from "@/components/CaseStudyTemplate";
import heroImage from "@/assets/portfolio/solidedge-construction.png";
import juxtudioImage from "@/assets/portfolio/juxtudio-architecture.png";
import rainfraImage from "@/assets/portfolio/rainfra-architecture.webp";

const caseStudy = {
  title: "Solid Edge Constructions",
  category: "Website",
  client: "Solid Edge Constructions",
  duration: "2 months",
  year: "2025",
  heroImage: heroImage,
  overview: "A modern corporate website design and project portfolio showcase built for a civil construction and infrastructure engineering firm.",
  challenge: [
    "A civil engineering firm wanted to establish a digital footprint to showcase commercial structural capabilities.",
    "Required a professional website to present corporate capabilities to commercial contractors.",
    "Needed a structured showcase page to display project details, scope of work, and timelines.",
    "Needed a fast, responsive layout that performs optimally across mobile and desktop devices."
  ],
  solution: [
    "Designed and developed a corporate website layout detailing construction services and standards.",
    "Created an interactive portfolio gallery filtering projects by commercial, residential, and infrastructure categories.",
    "Implemented service catalogs and quote request consultation funnels.",
    "Optimized for search engines (SEO) with structured metadata and fast load times.",
    "Configured analytics tracking to monitor visitor engagement and form submissions."
  ],
  results: [
    { metric: "Frontend", value: "React + Vite" },
    { metric: "Styling", value: "Tailwind CSS" },
    { metric: "Animations", value: "Framer Motion" },
    { metric: "Page Speed", value: "< 1.5s" }
  ],
  techStack: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Supabase", "Lucide Icons", "Google Analytics"],
  relatedProjects: [
    {
      title: "RA Infra Studio Portfolio",
      category: "Website",
      image: rainfraImage,
      path: "/portfolio/rainfra-studio"
    },
    {
      title: "Juxtudio Architecture Design",
      category: "Website",
      image: juxtudioImage,
      path: "/portfolio/juxtudio"
    }
  ]
};

const SolidEdgeConstructions = () => <CaseStudyTemplate caseStudy={caseStudy} />;

export default SolidEdgeConstructions;
