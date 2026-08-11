import { CaseStudyTemplate } from "@/components/CaseStudyTemplate";
import heroImage from "@/assets/portfolio/fittrack-app.webp";
import quickpayImage from "@/assets/portfolio/quickpay-fintech.webp";
import techflowImage from "@/assets/portfolio/techflow-saas.webp";

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
  relatedServices: [
    { name: "Mobile App Development", path: "/services/mobile-app" },
    { name: "Custom Software Development", path: "/services/custom-software-development" }
  ],
  relatedIndustries: [
    { name: "Software for Healthcare", path: "/industries/healthcare" }
  ],
  relatedTechnologies: [
    { name: "Flutter Mobile App Dev", path: "/technology/flutter" },
    { name: "Node.js Development", path: "/technology/nodejs" }
  ],
  faqs: [
    {
      question: "What is the FitTrack Health App project developed by Itoby Infotech?",
      answer: "FitTrack Health App is a cross-platform mobile health and fitness application engineered by Itoby Infotech Pvt. Ltd. using Flutter, Dart, Firebase, Node.js, and HealthKit/Google Fit APIs for workout tracking, nutrition logging, and wearable device sync."
    },
    {
      question: "What technologies were used to build the FitTrack mobile app?",
      answer: "The FitTrack mobile app was engineered using Flutter, Dart, Firebase, Node.js, MongoDB, Apple HealthKit, Google Fit API, and TensorFlow Lite for on-device machine learning recommendations."
    },
    {
      question: "Does Itoby Infotech build custom mobile health & fitness applications?",
      answer: "Yes. We engineer custom mobile applications for iOS and Android with wearable device integrations, biometric data security, offline data caching, and real-time cloud synchronization."
    }
  ],
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
