import { CaseStudyTemplate } from "@/components/CaseStudyTemplate";
import heroImage from "@/assets/portfolio/rent-itoby.png";
import quickpayImage from "@/assets/portfolio/quickpay-fintech.webp";
import techflowImage from "@/assets/portfolio/techflow-saas.webp";

const caseStudy = {
  title: "Rent Itoby – Rental CRM Dashboard",
  category: "App",
  client: "Itoby Rental Systems",
  duration: "4 months",
  year: "2025",
  heroImage: heroImage,
  overview: "A state-of-the-art rental CRM dashboard and automated customer booking app designed for managing equipment, vehicle fleets, and property leasing businesses.",
  challenge: [
    "Rental business owners struggled with fragmented systems for inventory, rental agreements, and payment tracking.",
    "Manual booking entries led to overbooking issues and double-reservations.",
    "Needed real-time analytics to view active rentals, return schedules, and outstanding balances.",
    "Required a responsive mobile view for field operators to log delivery and return status updates."
  ],
  solution: [
    "Engineered a unified CRM dashboard displaying real-time reservation schedules and asset availability status.",
    "Built an automated calendar grid preventing double-booking and tracking rental durations.",
    "Integrated custom digital signature panels for direct on-screen rental agreement signing.",
    "Connected payment gateways for secure rent collection, deposit holding, and auto-invoicing.",
    "Added a mobile-first field delivery view with status updates, geo-location logging, and client confirmation notes."
  ],
  results: [
    { metric: "Overbooking Incidents", value: "0%" },
    { metric: "Operational Savings", value: "35% ↓" },
    { metric: "Payment Collections", value: "+80% Faster" },
    { metric: "Booking Count", value: "+120%" }
  ],
  techStack: ["React", "TypeScript", "Node.js", "Express", "Supabase", "Stripe API", "Chart.js"],
  testimonial: {
    quote: "Rent Itoby transformed our fleet operations. We went from pen-and-paper tracking to a fully automated cloud grid, cutting down operations overhead significantly and boosting our booking counts.",
    author: "Sanjay Kumar",
    role: "Operations Chief, FleetDrive India"
  },
  relatedProjects: [
    {
      title: "QuickPay FinTech Solution",
      category: "Software",
      image: quickpayImage,
      path: "/portfolio/quickpay"
    },
    {
      title: "TechFlow SaaS Platform",
      category: "Software",
      image: techflowImage,
      path: "/portfolio/techflow"
    }
  ]
};

const RentItoby = () => <CaseStudyTemplate caseStudy={caseStudy} />;

export default RentItoby;
