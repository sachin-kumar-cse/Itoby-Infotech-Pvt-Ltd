import { CaseStudyTemplate } from "@/components/CaseStudyTemplate";
import heroImage from "@/assets/portfolio/kaspereye-security.jpg";
import freightxpressImage from "@/assets/portfolio/freightxpress-logistics.jpg";
import rainfraImage from "@/assets/portfolio/rainfra-architecture.jpg";

const caseStudy = {
  title: "Kaspereye Security Solutions",
  category: "Website",
  client: "Kaspereye Security",
  duration: "4 months",
  year: "2025",
  heroImage: heroImage,
  overview: "A premium dark-themed website for a leading security solutions provider in Delhi NCR, featuring service showcases, product catalogs, and lead generation systems that boosted inquiries by 180%.",
  challenge: [
    "Outdated website that failed to convey the company's expertise in advanced security technology.",
    "No online lead generation system, relying solely on phone calls and walk-ins.",
    "Needed to showcase 50+ security products with detailed specifications and comparison tools.",
    "Mobile experience was poor, missing a significant portion of potential clients browsing on phones."
  ],
  solution: [
    "Designed a sleek, dark-themed UI with cyan accents that reflects the high-tech nature of security solutions.",
    "Built an interactive product catalog with filtering, comparison tools, and detailed spec sheets.",
    "Implemented a multi-step quote request form with automated email notifications and CRM integration.",
    "Created a fully responsive design optimized for all devices with fast loading times.",
    "Added client testimonials, portfolio showcase, and trust signals throughout the site."
  ],
  results: [
    { metric: "Lead Generation", value: "+180%" },
    { metric: "Mobile Traffic", value: "+250%" },
    { metric: "Bounce Rate", value: "-45%" },
    { metric: "Page Load Time", value: "1.2s" }
  ],
  techStack: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Node.js", "MongoDB", "Cloudflare"],
  testimonial: {
    quote: "Our new website has transformed how we attract and convert clients. The modern design and seamless user experience have significantly boosted our online presence and lead generation.",
    author: "Rahul Sharma",
    role: "Director, Kaspereye Security Solutions"
  },
  relatedProjects: [
    {
      title: "FreightXpress Logistics",
      category: "Website",
      image: freightxpressImage,
      path: "/portfolio/freightxpress"
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
