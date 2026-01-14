import { CaseStudyTemplate } from "@/components/CaseStudyTemplate";
import heroImage from "@/assets/portfolio/b2b-saas-marketing.jpg";
import restaurantImage from "@/assets/portfolio/restaurant-marketing.jpg";
import techflowImage from "@/assets/portfolio/techflow-saas.jpg";

const caseStudy = {
  title: "B2B SaaS Company",
  category: "Lead Generation",
  client: "CloudSync Solutions",
  duration: "6 months",
  year: "2024",
  heroImage: heroImage,
  overview: "A data-driven lead generation campaign that reduced cost per lead by 85% while significantly improving lead quality for a B2B SaaS company.",
  challenge: [
    "High cost per lead ($150+) with low conversion rates making customer acquisition unsustainable.",
    "Generic marketing messaging that failed to resonate with different buyer personas.",
    "Long sales cycle (6+ months) with limited visibility into which marketing touchpoints influenced decisions.",
    "Competitors with larger budgets dominating paid search for high-intent keywords."
  ],
  solution: [
    "Developed detailed buyer personas and created targeted content journeys for each decision-maker type.",
    "Implemented account-based marketing (ABM) strategy focusing on high-value target accounts.",
    "Built sophisticated attribution modeling to understand the full customer journey and optimize accordingly.",
    "Created a content marketing engine with SEO-optimized blog posts, whitepapers, and case studies.",
    "Launched LinkedIn advertising campaigns with precise targeting based on job titles, company size, and industry."
  ],
  results: [
    { metric: "Cost Per Lead", value: "-85%" },
    { metric: "Lead Quality Score", value: "+120%" },
    { metric: "SQL Conversion", value: "3.5x" },
    { metric: "Pipeline Value", value: "+200%" }
  ],
  techStack: ["HubSpot", "LinkedIn Ads", "Google Ads", "Clearbit", "6sense", "Salesforce", "Drift", "Zapier"],
  testimonial: {
    quote: "We were burning money on marketing with little to show for it. Now we have a predictable, efficient lead generation machine that our sales team loves.",
    author: "Jennifer Walsh",
    role: "VP Marketing, CloudSync Solutions"
  },
  relatedProjects: [
    {
      title: "Local Restaurant Chain",
      category: "Local SEO & Ads",
      image: restaurantImage,
      path: "/portfolio/restaurant-chain"
    },
    {
      title: "TechFlow SaaS Platform",
      category: "Web Application",
      image: techflowImage,
      path: "/portfolio/techflow"
    }
  ]
};

const B2BSaas = () => <CaseStudyTemplate caseStudy={caseStudy} />;

export default B2BSaas;
