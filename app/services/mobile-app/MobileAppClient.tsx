"use client";

import { motion } from "framer-motion";
import { PageHeroBanner } from "@/components/ui/page-hero-banner";
import Link from "next/link";
import fittrackImage from "@/assets/portfolio/fittrack-app.webp";
import quickpayImage from "@/assets/portfolio/quickpay-fintech.webp";
import { Button } from "@/components/ui/button";
import { 
  Smartphone,
  TabletSmartphone,
  Palette,
  Plug,
  Wrench,
  Shield,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  PenTool,
  Code,
  Rocket
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CTASection } from "@/components/sections/CTASection";
import { PricingSection } from "@/components/sections/PricingSection";

const getImgSrc = (img: any) => typeof img === "string" ? img : img?.src || img;

const offerings = [
  { icon: Smartphone, title: "Android Apps", description: "Native Android applications with Material Design and optimal performance." },
  { icon: TabletSmartphone, title: "iOS Apps", description: "Native iOS applications with intuitive UX following Apple's guidelines." },
  { icon: Palette, title: "Flutter Apps", description: "Cross-platform apps with a single codebase for faster time-to-market." },
  { icon: Palette, title: "UI/UX Design", description: "User-centered mobile interfaces designed for engagement and conversion." },
  { icon: Plug, title: "API Integration", description: "Seamless integration with third-party services and your existing systems." },
  { icon: Wrench, title: "App Maintenance", description: "Continuous updates, monitoring, and support to keep your app running smoothly." },
];

const benefits = [
  "Cross-platform development to reach iOS and Android users",
  "Optimized performance for smooth user experience",
  "Offline functionality for uninterrupted access",
  "Push notifications for user engagement",
  "Secure data encryption and authentication",
  "App Store optimization for better visibility",
];

const processSteps = [
  { step: "01", title: "Strategy", description: "We define your app's goals, target audience, and key features through workshops.", icon: Lightbulb },
  { step: "02", title: "Design", description: "Create wireframes, prototypes, and polished UI designs for your approval.", icon: PenTool },
  { step: "03", title: "Development", description: "Build your app with clean architecture and comprehensive testing.", icon: Code },
  { step: "04", title: "Launch", description: "Deploy to app stores and provide ongoing support and updates.", icon: Rocket },
];

const tools = [
  "Flutter", "React Native", "Swift", "Kotlin", "Firebase", "Supabase", "AWS", "REST & GraphQL APIs"
];

const faqs = [
  {
    question: "What mobile app development services does Itoby Infotech provide?",
    answer: "Itoby Infotech Pvt. Ltd. provides native iOS (Swift), native Android (Kotlin), and cross-platform (Flutter & React Native) mobile app development integrated with real-time cloud backends, secure authentication, and App Store Optimization (ASO)."
  },
  {
    question: "Should I choose Flutter cross-platform or native app development?",
    answer: "Flutter cross-platform development allows you to deploy native-performance iOS and Android apps from a single codebase, saving up to 40% in cost and time. Native Swift and Kotlin are recommended for complex hardware integrations or intensive graphics applications."
  },
  {
    question: "How long does custom mobile app development take?",
    answer: "An MVP mobile app takes 6-10 weeks from prototype to launch. Enterprise mobile applications with multi-tier roles, payment gateways, and real-time syncing take 12-20 weeks depending on custom feature requirements."
  },
  {
    question: "Do you handle App Store and Google Play Store submission?",
    answer: "Yes. We manage the full app publishing lifecycle for Apple App Store and Google Play Store, ensuring 100% compliance with guidelines, human review requirements, privacy manifest standards, and App Store Optimization (ASO)."
  },
  {
    question: "Can your mobile apps work offline?",
    answer: "Yes. We build offline-first mobile architecture using local SQLite/WatermelonDB storage with automatic background cloud synchronization (Supabase/Firebase/AWS) when internet connectivity is restored."
  },
  {
    question: "Can you integrate our mobile app with existing enterprise REST & GraphQL APIs?",
    answer: "Yes. We seamlessly connect mobile applications with existing enterprise backends, ERP/CRM databases, custom Node.js/Python microservices, and third-party APIs (Stripe, Twilio, Google Maps, Razorpay)."
  },
  {
    question: "How do you ensure mobile app data security and GDPR compliance?",
    answer: "We implement AES-256 data encryption at rest, TLS/SSL encryption in transit, biometric authentication (Face ID & Touch ID), OAuth 2.0 security, and strict OWASP mobile security guidelines."
  },
  {
    question: "What is included in mobile app post-launch maintenance?",
    answer: "Our maintenance SLA includes OS version compatibility updates (iOS & Android updates), crash analytics monitoring (Sentry), push notification management, server monitoring, and continuous bug resolution."
  },
];

const pricingTiers = [
  {
    name: "MVP",
    price: { USD: "$15,000", AUD: "A$21,000", CAD: "C$19,800", INR: "₹10,00,000" },
    description: "Launch your minimum viable product quickly",
    features: [
      "Single platform (iOS or Android)",
      "Up to 10 screens",
      "Basic UI design",
      "User authentication",
      "Push notifications",
      "2 months development",
      "1 month support",
    ],
  },
  {
    name: "Standard",
    price: { USD: "$35,000", AUD: "A$49,000", CAD: "C$46,200", INR: "₹25,00,000" },
    description: "Full-featured app for growing businesses",
    features: [
      "iOS and Android (cross-platform)",
      "Up to 25 screens",
      "Custom UI/UX design",
      "Backend API development",
      "Payment integration",
      "Analytics dashboard",
      "App Store submission",
      "3 months support",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: { USD: "$75,000", AUD: "A$105,000", CAD: "C$99,000", INR: "₹55,00,000" },
    description: "Complex applications with advanced features",
    features: [
      "Native iOS and Android apps",
      "Unlimited screens",
      "Advanced animations",
      "AI/ML integration",
      "Real-time features",
      "Admin dashboard",
      "Dedicated team",
      "12 months support",
    ],
  },
];

const caseStudies = [
  {
    title: "FitTrack Health App",
    category: "Health & Fitness",
    result: "500K+ downloads in 6 months",
    image: getImgSrc(fittrackImage),
    path: "/portfolio/fittrack",
  },
  {
    title: "QuickPay Fintech App",
    category: "Finance",
    result: "4.8★ rating on App Store",
    image: getImgSrc(quickpayImage),
    path: "/portfolio/quickpay",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Mobile App Development Services",
  serviceType: "Mobile Application Development",
  provider: {
    "@type": "Organization",
    name: "Itoby Infotech Pvt. Ltd.",
    url: "https://www.itobyinfotech.com"
  },
  areaServed: ["US", "CA", "AU", "GB", "AE", "IN"],
  description: "Native iOS, Android, and Flutter mobile app development services by Itoby Infotech with real-time sync, top performance, and intuitive UI/UX design."
};

export default function MobileAppClient() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <PageHeroBanner
        title="Mobile App Development Services"
        description="Itoby Infotech Pvt. Ltd. builds high-performance iOS, Android, and Flutter cross-platform mobile applications engineered for 60fps fluid UI, offline caching, and enterprise cloud sync."
        badge="iOS & Android Mobile Engineering"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Services", path: "/services" },
          { label: "Mobile App Development", path: "/services/mobile-app" },
        ]}
      />

      {/* Answer-First Direct Definition Block */}
      <section className="py-12 bg-background border-b border-border/50">
        <div className="container-wide max-w-4xl mx-auto text-center space-y-4">
          <span className="text-primary font-bold uppercase tracking-wider text-xs px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 inline-block">
            Direct Overview
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-foreground">
            What is Mobile App Development?
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Mobile app development is the software engineering process of designing, coding, testing, and deploying mobile applications tailored for smartphones and tablet devices. It encompasses native iOS (Swift) and Android (Kotlin) development as well as cross-platform frameworks (Flutter & React Native) connected to secure RESTful/GraphQL backend APIs, push notifications, and offline SQLite data stores.
          </p>
        </div>
      </section>

      {/* What We Offer */}
      <section className="section-padding bg-card/30">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              What We Offer
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Complete Mobile <span className="gradient-text">Solutions</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              From concept to app store, we deliver end-to-end mobile development 
              services that exceed expectations.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((offering, index) => (
              <motion.div
                key={offering.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <offering.icon size={28} className="text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{offering.title}</h3>
                <p className="text-muted-foreground">{offering.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                Why Choose Us
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
                Benefits That <span className="gradient-text">Matter</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Our mobile apps are engineered to deliver exceptional performance 
                and user satisfaction.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <CheckCircle className="text-primary shrink-0 mt-1" size={20} />
                    <span>{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-glow-secondary/20 border border-primary/30 flex items-center justify-center">
                <div className="text-center p-8">
                  <span className="text-7xl font-bold gradient-text">500K+</span>
                  <p className="text-xl text-muted-foreground mt-4">App Downloads Delivered</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="section-padding bg-card/30">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Our Process
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              From Idea to <span className="gradient-text">App Store</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Our streamlined process ensures quality delivery at every stage.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative p-8 rounded-2xl bg-card border border-border"
              >
                <span className="text-6xl font-bold text-primary/10 absolute top-4 right-4">
                  {step.step}
                </span>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <step.icon size={28} className="text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Tools & Technologies
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4">
              Powered by <span className="gradient-text">Best Tech</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {tools.map((tool, index) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-6 py-3 rounded-full bg-secondary text-foreground font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              >
                {tool}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <PricingSection
        title="Investment Packages"
        subtitle="Flexible pricing options for apps of any complexity."
        tiers={pricingTiers}
      />

      {/* FAQs */}
      <section className="section-padding bg-card/30">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              FAQ
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border rounded-xl px-6 bg-card"
                >
                  <AccordionTrigger className="text-left font-semibold hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Case Studies
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4">
              Related <span className="gradient-text">Projects</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={study.path}
                  className="group block overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-primary text-sm font-medium">{study.category}</span>
                    <h3 className="font-display text-xl font-bold mt-2 group-hover:text-primary transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-muted-foreground mt-2 flex items-center gap-2">
                      <ArrowRight size={16} className="text-primary" />
                      {study.result}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Mobile & Cloud Technology Clusters */}
      <section className="py-12 bg-background border-t border-border/40">
        <div className="container-wide space-y-6">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-wider text-primary mb-3">Related Mobile & Cloud Technology Clusters:</p>
            <div className="flex flex-wrap gap-2.5">
              <Link href="/services/custom-software-development" className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-card border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors">
                Custom Software Development
              </Link>
              <Link href="/services/web-design" className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-card border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors">
                Web Development Services
              </Link>
              <Link href="/services/saas-development-company" className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-card border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors">
                SaaS Application Development
              </Link>
              <Link href="/services/ai-development-company" className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-card border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors">
                AI Mobile Integration
              </Link>
              <Link href="/technology/nodejs" className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-card border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors">
                Node.js Backend APIs
              </Link>
              <Link href="/technology/supabase-development" className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-card border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors">
                Supabase Real-time Cloud Sync
              </Link>
              <Link href="/comparison/flutter-vs-react-native" className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-primary/10 border border-primary/30 text-primary font-bold hover:bg-primary/20 transition-colors">
                Flutter vs React Native Comparison
              </Link>
              <Link href="/portfolio/fittrack" className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-card border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors">
                FitTrack Mobile Case Study
              </Link>
              <Link href="/portfolio/quickpay" className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-card border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors">
                QuickPay Fintech Mobile Case
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
