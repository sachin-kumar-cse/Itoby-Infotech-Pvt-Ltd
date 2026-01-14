import { CaseStudyTemplate } from "@/components/CaseStudyTemplate";
import heroImage from "@/assets/portfolio/luxe-fashion.jpg";
import techflowImage from "@/assets/portfolio/techflow-saas.jpg";
import quickpayImage from "@/assets/portfolio/quickpay-fintech.jpg";

const caseStudy = {
  title: "Luxe Fashion E-commerce",
  category: "E-commerce",
  client: "Luxe Fashion House",
  duration: "3 months",
  year: "2025",
  heroImage: heroImage,
  overview: "A premium e-commerce experience for a luxury fashion brand that elevated their online presence and boosted sales by 150%.",
  challenge: [
    "The existing website didn't reflect the premium nature of the brand, leading to low conversion rates.",
    "Product discovery was difficult with poor search functionality and no filtering options.",
    "Checkout process was lengthy with a 70% cart abandonment rate.",
    "No integration with inventory management led to frequent overselling issues."
  ],
  solution: [
    "Designed a sophisticated, minimalist interface that captures the essence of luxury fashion with elegant animations and high-quality imagery.",
    "Implemented advanced filtering and AI-powered search with visual similarity matching for better product discovery.",
    "Streamlined the checkout process to 3 steps with guest checkout, multiple payment options, and one-click purchasing for returning customers.",
    "Built real-time inventory sync with their warehouse management system to prevent overselling and display accurate stock levels.",
    "Added personalized product recommendations based on browsing history and purchase patterns."
  ],
  results: [
    { metric: "Sales Increase", value: "150%" },
    { metric: "Cart Abandonment", value: "-45%" },
    { metric: "Avg Order Value", value: "+65%" },
    { metric: "Return Rate", value: "-30%" }
  ],
  techStack: ["Next.js", "TypeScript", "Shopify", "Stripe", "Algolia", "Cloudinary", "Vercel", "Figma"],
  testimonial: {
    quote: "Our new website finally represents who we are as a brand. The attention to detail and seamless shopping experience has transformed our online business.",
    author: "Isabella Romano",
    role: "Creative Director, Luxe Fashion House"
  },
  relatedProjects: [
    {
      title: "TechFlow SaaS Platform",
      category: "Web Application",
      image: techflowImage,
      path: "/portfolio/techflow"
    },
    {
      title: "QuickPay Fintech App",
      category: "Mobile App",
      image: quickpayImage,
      path: "/portfolio/quickpay"
    }
  ]
};

const LuxeFashion = () => <CaseStudyTemplate caseStudy={caseStudy} />;

export default LuxeFashion;
