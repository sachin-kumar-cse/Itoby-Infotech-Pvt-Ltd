import { CaseStudyTemplate } from "@/components/CaseStudyTemplate";
import heroImage from "@/assets/portfolio/jetsetterss-travel.webp";
import rainfraImage from "@/assets/portfolio/rainfra-studio-real.webp";
import solidedgeImage from "@/assets/portfolio/solidedge-construction-real.webp";

const caseStudy = {
  title: "Jetsetterss Travel – Luxury Travel & Flight Booking Portal",
  category: "Travel & Hospitality",
  client: "Jetsetterss Jet Set Go",
  duration: "3 months",
  year: "2025",
  heroImage: heroImage,
  alt: "Jetsetterss Travel luxury flight booking platform",
  overview: "A bespoke luxury travel booking and concierge platform featuring global flight discovery, handpicked cruise itineraries, multi-currency pricing, and real human concierge booking assistance.",
  challenge: [
    "Fragmented booking experiences across flights, luxury cruises, and curated hotel packages.",
    "Need for multi-currency conversion (USD, INR, EUR) with live exchange rates.",
    "Fast, responsive flight search interface with intuitive filters for luxury travelers.",
    "Seamless concierge contact routing via WhatsApp and integrated instant booking."
  ],
  solution: [
    "Developed an ultra-clean, modern travel booking UI with flight search, cruise, and hotel modules.",
    "Integrated dynamic currency selector and live fare calculation endpoints.",
    "Engineered lightning-fast responsive search with cabin class, stopover, and airline filtering.",
    "Implemented 24/7 concierge request capture and instant itinerary dispatch."
  ],
  results: [
    { metric: "Search Speed", value: "< 500ms" },
    { metric: "Mobile Conversion", value: "+38%" },
    { metric: "Frontend", value: "Next.js" },
    { metric: "Concierge Lead Time", value: "< 2 min" }
  ],
  techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Supabase", "Lucide Icons"],
  relatedProjects: [
    {
      title: "RA Infra Studio Architecture",
      category: "Architecture",
      image: rainfraImage,
      path: "/portfolio/rainfra-studio"
    },
    {
      title: "Solid Edge Constructions",
      category: "Infrastructure",
      image: solidedgeImage,
      path: "/portfolio/solidedgeconstructions"
    }
  ]
};

const JetsetterssTravel = () => <CaseStudyTemplate caseStudy={caseStudy} />;

export default JetsetterssTravel;

