import { CaseStudyTemplate } from "@/components/CaseStudyTemplate";
import heroImage from "@/assets/portfolio/freightxpress-logistics.webp";
import kaspereyeImage from "@/assets/portfolio/kaspereye-security.webp";
import techflowImage from "@/assets/portfolio/techflow-saas.webp";

const caseStudy = {
  title: "FreightXpress Logistics Platform",
  category: "Website",
  client: "FreightXpress",
  duration: "5 months",
  year: "2025",
  heroImage: heroImage,
  overview: "A comprehensive logistics and freight management website with real-time tracking, service booking, and customer portal that increased online bookings by 320%.",
  challenge: [
    "No online presence for a growing logistics company serving 500+ businesses.",
    "Manual booking process via phone calls causing delays and errors in shipment scheduling.",
    "Clients had no visibility into shipment status, leading to excessive support calls.",
    "Needed to showcase multiple service categories across different transportation modes."
  ],
  solution: [
    "Built a modern, dark-themed website with dynamic hero sections and smooth animations.",
    "Implemented an online booking system with instant quote generation and scheduling.",
    "Created a real-time shipment tracking interface with GPS integration and status updates.",
    "Designed service pages highlighting road transport, warehousing, express delivery, and supply chain solutions.",
    "Added a customer portal for managing shipments, invoices, and communication."
  ],
  results: [
    { metric: "Online Bookings", value: "+320%" },
    { metric: "Support Calls", value: "-60%" },
    { metric: "Customer Retention", value: "+45%" },
    { metric: "On-Time Delivery", value: "99%" }
  ],
  techStack: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Node.js", "PostgreSQL", "Google Maps API"],
  testimonial: {
    quote: "The website has completely digitized our booking process. Our clients love the real-time tracking feature, and we've seen a massive reduction in support calls since launch.",
    author: "Michael Torres",
    role: "CEO, FreightXpress"
  },
  relatedProjects: [
    {
      title: "Kaspereye Security Solutions",
      category: "Website",
      image: kaspereyeImage,
      path: "/portfolio/kaspereye-security"
    },
    {
      title: "TechFlow SaaS Platform",
      category: "Web Development",
      image: techflowImage,
      path: "/portfolio/techflow"
    }
  ]
};

const FreightXpress = () => <CaseStudyTemplate caseStudy={caseStudy} />;

export default FreightXpress;
