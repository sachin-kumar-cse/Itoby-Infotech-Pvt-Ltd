import { CaseStudyTemplate } from "@/components/CaseStudyTemplate";
import heroImage from "@/assets/portfolio/retail-m365.jpg";
import lawFirmImage from "@/assets/portfolio/law-firm-m365.jpg";
import restaurantImage from "@/assets/portfolio/restaurant-marketing.jpg";

const caseStudy = {
  title: "Retail Chain Collaboration",
  category: "Retail",
  client: "ValueMart Retail Group",
  duration: "4 months",
  year: "2024",
  heroImage: heroImage,
  overview: "Connected 200+ retail locations with Microsoft 365, enabling real-time communication and collaboration that transformed operational efficiency.",
  challenge: [
    "200+ locations with inconsistent communication methods - some using email, others fax, some just phone.",
    "Store managers had no easy way to share best practices or communicate with corporate.",
    "Training materials were outdated and distributed inconsistently across locations.",
    "Corporate had limited visibility into store-level operations and couldn't quickly disseminate policy updates."
  ],
  solution: [
    "Deployed Microsoft Teams to all locations with standardized channels for different departments and topics.",
    "Created a SharePoint intranet with centralized policies, training materials, and operational documents.",
    "Implemented live event capabilities for company-wide announcements and training sessions.",
    "Built Power Automate workflows for common processes like inventory requests and HR forms.",
    "Configured Viva Engage (Yammer) for cross-store knowledge sharing and community building."
  ],
  results: [
    { metric: "Locations Connected", value: "200+" },
    { metric: "Communication Speed", value: "10x" },
    { metric: "Training Completion", value: "94%" },
    { metric: "Process Automation", value: "45+" }
  ],
  techStack: ["Microsoft 365", "Teams", "SharePoint", "Power Automate", "Power Apps", "Viva Engage", "Stream", "Intune"],
  testimonial: {
    quote: "For the first time, we feel like one company instead of 200 separate stores. The ability to communicate instantly and share knowledge has been transformative.",
    author: "Patricia Nguyen",
    role: "VP Operations, ValueMart Retail Group"
  },
  relatedProjects: [
    {
      title: "Law Firm M365 Migration",
      category: "Professional Services",
      image: lawFirmImage,
      path: "/portfolio/law-firm-m365"
    },
    {
      title: "Local Restaurant Chain",
      category: "Digital Marketing",
      image: restaurantImage,
      path: "/portfolio/restaurant-chain"
    }
  ]
};

const RetailM365 = () => <CaseStudyTemplate caseStudy={caseStudy} />;

export default RetailM365;
