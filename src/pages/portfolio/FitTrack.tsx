import { CaseStudyTemplate } from "@/components/CaseStudyTemplate";
import heroImage from "@/assets/portfolio/fittrack-app.jpg";
import quickpayImage from "@/assets/portfolio/quickpay-fintech.jpg";
import techflowImage from "@/assets/portfolio/techflow-saas.jpg";

const caseStudy = {
  title: "FitTrack Health App",
  category: "Health & Fitness",
  client: "FitTrack Wellness",
  duration: "6 months",
  year: "2025",
  heroImage: heroImage,
  overview: "A comprehensive health and fitness tracking app that achieved 500K+ downloads in just 6 months with innovative features and engaging UX.",
  challenge: [
    "Fitness app market is highly saturated with established competitors like MyFitnessPal and Strava.",
    "Users wanted a unified solution for workout tracking, nutrition, sleep, and mental wellness.",
    "Previous app version had poor retention due to lack of motivation features and social elements.",
    "Integration with various wearables and health devices was fragmented and unreliable."
  ],
  solution: [
    "Developed a unique gamification system with challenges, streaks, and rewards that keeps users engaged long-term.",
    "Built a unified health dashboard that aggregates data from workouts, nutrition, sleep, and mindfulness in one intuitive interface.",
    "Implemented social features including friends, group challenges, and community leaderboards to boost motivation.",
    "Created a robust wearable integration layer supporting Apple Watch, Fitbit, Garmin, and other popular devices.",
    "Added AI-powered workout recommendations and personalized nutrition plans based on user goals and progress."
  ],
  results: [
    { metric: "Downloads", value: "500K+" },
    { metric: "User Retention", value: "78%" },
    { metric: "App Store Rating", value: "4.8★" },
    { metric: "Daily Active Users", value: "125K" }
  ],
  techStack: ["Flutter", "Dart", "Firebase", "Node.js", "MongoDB", "HealthKit", "Google Fit", "TensorFlow Lite"],
  testimonial: {
    quote: "The team understood our vision perfectly and delivered an app that users absolutely love. The engagement metrics exceeded all our projections.",
    author: "Michael Torres",
    role: "Founder, FitTrack Wellness"
  },
  relatedProjects: [
    {
      title: "QuickPay Fintech App",
      category: "Finance",
      image: quickpayImage,
      path: "/portfolio/quickpay"
    },
    {
      title: "TechFlow SaaS Platform",
      category: "Web Application",
      image: techflowImage,
      path: "/portfolio/techflow"
    }
  ]
};

const FitTrack = () => <CaseStudyTemplate caseStudy={caseStudy} />;

export default FitTrack;
