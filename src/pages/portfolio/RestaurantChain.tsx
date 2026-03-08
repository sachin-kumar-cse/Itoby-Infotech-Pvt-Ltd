import { CaseStudyTemplate } from "@/components/CaseStudyTemplate";
import heroImage from "@/assets/portfolio/restaurant-marketing.webp";
import b2bSaasImage from "@/assets/portfolio/b2b-saas-marketing.webp";
import retailImage from "@/assets/portfolio/retail-m365.webp";

const caseStudy = {
  title: "Local Restaurant Chain",
  category: "Local SEO & Ads",
  client: "Bella's Italian Kitchen",
  duration: "Ongoing (12+ months)",
  year: "2024-2025",
  heroImage: heroImage,
  overview: "A comprehensive digital marketing campaign for a 15-location restaurant chain that increased reservations by 250% through local SEO and targeted advertising.",
  challenge: [
    "15 locations with inconsistent online presence and conflicting business information across platforms.",
    "Losing market share to delivery apps and competitors with better digital marketing.",
    "No centralized system for managing reviews, which were averaging 3.2 stars due to unaddressed feedback.",
    "Limited budget requiring maximum efficiency from every marketing dollar spent."
  ],
  solution: [
    "Unified all location listings across Google Business, Yelp, TripAdvisor, and social platforms with consistent branding.",
    "Implemented local SEO strategies including location-specific landing pages, local content, and citation building.",
    "Created an automated review management system that alerts managers to new reviews and provides response templates.",
    "Launched geo-targeted Google and Meta ad campaigns with dynamic creative based on location and time of day.",
    "Built a loyalty program with email and SMS marketing to increase repeat visits."
  ],
  results: [
    { metric: "Reservations", value: "+250%" },
    { metric: "Avg Rating", value: "4.6★" },
    { metric: "Local Rankings", value: "Top 3" },
    { metric: "Cost Per Booking", value: "-40%" }
  ],
  techStack: ["Google Ads", "Meta Ads Manager", "SEMrush", "Google Analytics", "Mailchimp", "Yelp for Business", "OpenTable", "HubSpot"],
  testimonial: {
    quote: "We went from struggling to fill seats to being booked solid most nights. The transformation in just one year has been incredible for our family business.",
    author: "Maria Bellini",
    role: "Owner, Bella's Italian Kitchen"
  },
  relatedProjects: [
    {
      title: "B2B SaaS Company",
      category: "Lead Generation",
      image: b2bSaasImage,
      path: "/portfolio/b2b-saas"
    },
    {
      title: "Retail Chain Collaboration",
      category: "M365 Integration",
      image: retailImage,
      path: "/portfolio/retail-m365"
    }
  ]
};

const RestaurantChain = () => <CaseStudyTemplate caseStudy={caseStudy} />;

export default RestaurantChain;
