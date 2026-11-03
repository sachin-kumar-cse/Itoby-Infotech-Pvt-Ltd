import { CaseStudyTemplate } from "@/components/CaseStudyTemplate";
import heroImage from "@/assets/portfolio/easy2buy-ecommerce.webp";
import juxtudioImage from "@/assets/portfolio/juxtudio-architecture.png";
import kaspereyeImage from "@/assets/portfolio/kaspereye-security.webp";

const caseStudy = {
  title: "Easy2Buy Fashion E-commerce",
  category: "E-commerce",
  client: "Easy2Buy",
  duration: "4 months",
  year: "2025",
  heroImage: heroImage,
  alt: "Easy2Buy fashion e-commerce platform",
  overview: "A vibrant fashion e-commerce platform architecture featuring category filtering across apparel and accessories with integrated payment processing and mobile-first responsive design.",
  challenge: [
    "No online storefront for an established fashion retailer transitioning to digital sales.",
    "Needed to showcase diverse product collections across multiple categories with rich filtering and search.",
    "Required a mobile-first design as mobile users comprise the primary audience.",
    "Integration with payment gateways and order tracking endpoints."
  ],
  solution: [
    "Built a modern e-commerce platform with responsive branding tailored for apparel retail.",
    "Implemented advanced product filtering by category, price, color, and size with instant search.",
    "Created a responsive mobile-first interface with product carousels and quick-view modals.",
    "Integrated digital payment gateways with real-time order tracking architecture.",
    "Added wishlist, cart persistence, promotional banners, and coupon code workflows."
  ],
  results: [
    { metric: "Payment Gateway", value: "Razorpay" },
    { metric: "Frontend", value: "React + Vite" },
    { metric: "Database", value: "Supabase" },
    { metric: "Design Model", value: "Mobile-First" }
  ],
  techStack: ["React", "Vite", "Tailwind CSS", "Supabase", "Razorpay", "Cloudinary", "Framer Motion", "Node.js"],
  relatedProjects: [
    {
      title: "Juxtudio Architecture Design",
      category: "Website",
      image: juxtudioImage,
      path: "/portfolio/juxtudio"
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
