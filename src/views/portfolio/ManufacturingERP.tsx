import { CaseStudyTemplate } from "@/components/CaseStudyTemplate";
import heroImage from "@/assets/portfolio/manufacturing-erp.webp";
import healthcareImage from "@/assets/portfolio/healthcare-portal.webp";
import quickpayImage from "@/assets/portfolio/quickpay-fintech.webp";

const caseStudy = {
  title: "Manufacturing ERP System",
  category: "Enterprise Software",
  client: "Precision Manufacturing Co.",
  duration: "10 months",
  year: "2024",
  heroImage: heroImage,
  overview: "A custom ERP system that improved operational efficiency by 45% for a mid-sized manufacturing company through automation and real-time visibility.",
  challenge: [
    "Multiple disconnected systems for inventory, production, and sales creating data silos.",
    "Manual data entry consuming 15+ hours per week and leading to frequent errors.",
    "No real-time visibility into production status, causing delayed shipments and customer dissatisfaction.",
    "Scaling operations was impossible without hiring proportionally more administrative staff."
  ],
  solution: [
    "Built a unified ERP platform that connects inventory, production scheduling, sales, and financial data.",
    "Automated data capture from production machines using IoT sensors, eliminating manual entry.",
    "Created real-time dashboards showing production status, inventory levels, and order fulfillment.",
    "Implemented predictive analytics for demand forecasting and inventory optimization.",
    "Developed mobile applications for floor supervisors to manage production on the go."
  ],
  results: [
    { metric: "Efficiency Gain", value: "+45%" },
    { metric: "Data Entry Time", value: "-90%" },
    { metric: "On-Time Delivery", value: "98.5%" },
    { metric: "Inventory Costs", value: "-25%" }
  ],
  techStack: ["Node.js", "React", "PostgreSQL", "Redis", "Docker", "Kubernetes", "Azure IoT", "Power BI"],
  testimonial: {
    quote: "This system has transformed our operations. We can now see everything in real-time and make decisions based on data, not guesswork. It's like night and day.",
    author: "Robert Martinez",
    role: "COO, Precision Manufacturing Co."
  },
  relatedProjects: [
    {
      title: "Healthcare Patient Portal",
      category: "Custom Portal",
      image: healthcareImage,
      path: "/portfolio/healthcare-portal"
    },
    {
      title: "QuickPay Fintech App",
      category: "Finance",
      image: quickpayImage,
      path: "/portfolio/quickpay"
    }
  ]
};

const ManufacturingERP = () => <CaseStudyTemplate caseStudy={caseStudy} />;

export default ManufacturingERP;
