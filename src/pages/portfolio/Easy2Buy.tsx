import { CaseStudyTemplate } from "@/components/CaseStudyTemplate";
import heroImage from "@/assets/portfolio/easy2buy-ecommerce.jpg";
import luxeImage from "@/assets/portfolio/luxe-fashion.jpg";
import kaspereyeImage from "@/assets/portfolio/kaspereye-security.jpg";

const caseStudy = {
  title: "Easy2Buy Fashion E-commerce",
  category: "E-commerce",
  client: "Easy2Buy",
  duration: "4 months",
  year: "2025",
  heroImage: heroImage,
  overview: "A vibrant, full-featured fashion e-commerce platform serving 10,000+ customers with categories spanning sarees, kurtis, lehengas, jewelry, and accessories — achieving 40% month-over-month growth.",
  challenge: [
    "No online storefront for an established fashion retailer with a loyal offline customer base.",
    "Needed to showcase 500+ products across 10+ categories with rich filtering and search.",
    "Required a mobile-first design as 80% of target customers browse on smartphones.",
    "Integration with multiple payment gateways and logistics partners for pan-India delivery."
  ],
  solution: [
    "Built a vibrant, gradient-themed e-commerce platform with pink-orange branding that resonates with the target audience.",
    "Implemented advanced product filtering by category, price, color, and size with instant search.",
    "Created a fully responsive mobile-first design with swipe-friendly carousels and quick-view modals.",
    "Integrated Razorpay and UPI payment gateways with real-time order tracking via logistics APIs.",
    "Added wishlist, cart persistence, promotional banners, and coupon code system."
  ],
  results: [
    { metric: "Monthly Revenue", value: "+400%" },
    { metric: "Happy Customers", value: "10K+" },
    { metric: "Product Rating", value: "4.9/5" },
    { metric: "Mobile Conversion", value: "+65%" }
  ],
  techStack: ["React", "Vite", "Tailwind CSS", "Supabase", "Razorpay", "Cloudinary", "Framer Motion", "Node.js"],
  testimonial: {
    quote: "Easy2Buy has transformed our business from a local shop to a nationwide brand. The website captures the vibrancy of our collections perfectly, and our customers love the seamless shopping experience.",
    author: "Priya Gupta",
    role: "Founder, Easy2Buy"
  },
  relatedProjects: [
    {
      title: "Luxe Fashion E-commerce",
      category: "E-commerce",
      image: luxeImage,
      path: "/portfolio/luxe-fashion"
    },
    {
      title: "Kaspereye Security Solutions",
      category: "Website",
      image: kaspereyeImage,
      path: "/portfolio/kaspereye-security"
    }
  ]
};

const Easy2Buy = () => <CaseStudyTemplate caseStudy={caseStudy} />;

export default Easy2Buy;
