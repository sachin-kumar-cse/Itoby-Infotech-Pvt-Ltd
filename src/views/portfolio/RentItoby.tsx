import { CaseStudyTemplate } from "@/components/CaseStudyTemplate";
import heroImage from "@/assets/portfolio/rent-itoby.png";
import leadItobyImage from "@/assets/portfolio/lead-itoby.png";
import kaspereyeImage from "@/assets/portfolio/kaspereye-security.webp";

const caseStudy = {
  title: "Rent Itoby – Rental CRM Dashboard",
  category: "Software",
  client: "Company Product / Internal Project",
  duration: "4 months",
  year: "2025",
  heroImage: heroImage,
  overview: "A proprietary rental CRM dashboard and automated customer booking platform designed for managing equipment, vehicle fleets, and property leasing businesses.",
  challenge: [
    "Rental businesses struggled with disconnected systems for inventory, rental agreements, and payment tracking.",
    "Manual booking entries led to scheduling errors and inventory conflicts.",
    "Needed real-time analytics to view active rentals, return schedules, and outstanding balances.",
    "Required a responsive mobile view for field operators to log delivery and return status updates."
  ],
  solution: [
    "Engineered a unified CRM dashboard displaying real-time reservation schedules and asset availability status.",
    "Built an automated calendar grid preventing double-booking and tracking rental durations.",
    "Integrated digital signature flows for on-screen rental agreement confirmation.",
    "Connected payment gateways for rent collection, deposit records, and auto-invoicing.",
    "Added a mobile-first field delivery view with status updates and confirmation notes."
  ],
  results: [
    { metric: "Frontend", value: "React + TS" },
    { metric: "Backend", value: "Node.js" },
    { metric: "Database", value: "Supabase" },
    { metric: "Payments", value: "Stripe API" }
  ],
  techStack: ["React", "TypeScript", "Node.js", "Express", "Supabase", "Stripe API", "Chart.js"],
  relatedProjects: [
    {
      title: "Lead Itoby – Lead Scoring CRM",
      category: "Software",
      image: leadItobyImage,
      path: "/portfolio/lead-itoby"
    },
    {
      title: "Kaspereye Security Solutions",
      category: "Website",
      image: kaspereyeImage,
      path: "/portfolio/kaspereye-security"
    }
  ]
};

const RentItoby = () => <CaseStudyTemplate caseStudy={caseStudy} />;

export default RentItoby;
