import { CaseStudyTemplate } from "@/components/CaseStudyTemplate";
import heroImage from "@/assets/portfolio/quickpay-fintech.jpg";
import fittrackImage from "@/assets/portfolio/fittrack-app.jpg";
import manufacturingImage from "@/assets/portfolio/manufacturing-erp.jpg";

const caseStudy = {
  title: "QuickPay Fintech App",
  category: "Finance",
  client: "QuickPay Financial Services",
  duration: "8 months",
  year: "2024",
  heroImage: heroImage,
  overview: "A secure, user-friendly mobile payment app that achieved a 4.8★ rating on the App Store through exceptional UX and robust security.",
  challenge: [
    "Fintech requires the highest levels of security while maintaining a frictionless user experience.",
    "Regulatory compliance across multiple regions with different banking and data protection laws.",
    "Users were hesitant to trust a new payment app with their financial information.",
    "Integration with multiple banks and payment networks with varying technical standards."
  ],
  solution: [
    "Implemented bank-grade security with biometric authentication, end-to-end encryption, and real-time fraud detection.",
    "Built a compliance framework that automatically adapts to regional requirements (GDPR, PCI-DSS, PSD2).",
    "Created a trust-building onboarding experience with transparent security explanations and social proof elements.",
    "Developed a universal banking adapter that connects seamlessly with 200+ financial institutions.",
    "Designed an intuitive interface that makes complex financial transactions feel simple and secure."
  ],
  results: [
    { metric: "App Store Rating", value: "4.8★" },
    { metric: "Transactions/Month", value: "2M+" },
    { metric: "User Trust Score", value: "94%" },
    { metric: "Fraud Rate", value: "<0.01%" }
  ],
  techStack: ["React Native", "TypeScript", "Node.js", "PostgreSQL", "Plaid", "Stripe", "AWS", "Terraform"],
  testimonial: {
    quote: "Security and user experience are typically at odds in fintech. This team found the perfect balance, and our users appreciate both the safety and simplicity.",
    author: "David Park",
    role: "CTO, QuickPay Financial Services"
  },
  relatedProjects: [
    {
      title: "FitTrack Health App",
      category: "Health & Fitness",
      image: fittrackImage,
      path: "/portfolio/fittrack"
    },
    {
      title: "Manufacturing ERP System",
      category: "Enterprise Software",
      image: manufacturingImage,
      path: "/portfolio/manufacturing-erp"
    }
  ]
};

const QuickPay = () => <CaseStudyTemplate caseStudy={caseStudy} />;

export default QuickPay;
