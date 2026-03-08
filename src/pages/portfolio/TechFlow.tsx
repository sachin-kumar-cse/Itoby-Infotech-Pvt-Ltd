import { CaseStudyTemplate } from "@/components/CaseStudyTemplate";
import heroImage from "@/assets/portfolio/techflow-saas.webp";
import luxeFashionImage from "@/assets/portfolio/luxe-fashion.webp";
import fittrackImage from "@/assets/portfolio/fittrack-app.webp";

const caseStudy = {
  title: "TechFlow SaaS Platform",
  category: "Web Application",
  client: "TechFlow Inc.",
  duration: "4 months",
  year: "2025",
  heroImage: heroImage,
  overview: "A comprehensive SaaS platform redesign that transformed user engagement and drove a 300% increase in signups through intuitive UX and modern design.",
  challenge: [
    "The existing platform had a confusing navigation structure that led to high user drop-off rates during onboarding.",
    "Legacy codebase made it difficult to add new features and maintain performance standards.",
    "Mobile experience was severely lacking, with over 40% of users abandoning the platform on mobile devices.",
    "No analytics integration meant the team was flying blind on user behavior and conversion optimization."
  ],
  solution: [
    "Conducted extensive user research and created detailed user journey maps to redesign the entire information architecture.",
    "Built a modern React-based frontend with TypeScript for type safety and maintainability, integrated with their existing backend APIs.",
    "Implemented a mobile-first responsive design with progressive web app capabilities for offline access.",
    "Integrated comprehensive analytics tracking with custom dashboards for real-time insights into user behavior.",
    "Created an intuitive onboarding flow with interactive tutorials that reduced time-to-value by 60%."
  ],
  results: [
    { metric: "Signup Increase", value: "300%" },
    { metric: "User Retention", value: "+85%" },
    { metric: "Mobile Usage", value: "2.5x" },
    { metric: "Load Time", value: "<2s" }
  ],
  techStack: ["React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Redis", "AWS", "Figma"],
  testimonial: {
    quote: "The team delivered beyond our expectations. The new platform has completely transformed how our users interact with our product, and the results speak for themselves.",
    author: "Sarah Chen",
    role: "CEO, TechFlow Inc."
  },
  relatedProjects: [
    {
      title: "Luxe Fashion E-commerce",
      category: "E-commerce",
      image: luxeFashionImage,
      path: "/portfolio/luxe-fashion"
    },
    {
      title: "FitTrack Health App",
      category: "Mobile App",
      image: fittrackImage,
      path: "/portfolio/fittrack"
    }
  ]
};

const TechFlow = () => <CaseStudyTemplate caseStudy={caseStudy} />;

export default TechFlow;
