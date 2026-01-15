import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import fittrackImage from "@/assets/portfolio/fittrack-app.jpg";
import quickpayImage from "@/assets/portfolio/quickpay-fintech.jpg";
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
  "Flutter", "React Native", "Swift", "Kotlin", "Firebase", "AWS", "GraphQL", "REST APIs"
];

const faqs = [
  {
    question: "Should I build native or cross-platform apps?",
    answer: "It depends on your requirements. Native apps offer the best performance and platform-specific features, while cross-platform (Flutter/React Native) reduces development time and cost by using a single codebase for both iOS and Android."
  },
  {
    question: "How long does mobile app development take?",
    answer: "A simple app takes 3-4 months, while complex apps with advanced features can take 6-12 months. We provide detailed timelines during the discovery phase."
  },
  {
    question: "Do you help with app store submission?",
    answer: "Yes, we handle the entire submission process for both Apple App Store and Google Play Store, including app store optimization (ASO) for better visibility."
  },
  {
    question: "Can you integrate with our existing backend?",
    answer: "Absolutely! We have extensive experience integrating mobile apps with various backend systems, APIs, and third-party services."
  },
  {
    question: "What happens after the app is launched?",
    answer: "We offer maintenance packages that include bug fixes, performance monitoring, security updates, and feature enhancements to keep your app competitive."
  },
];

const pricingTiers = [
  {
    name: "MVP",
    price: "$15,000",
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
    price: "$35,000",
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
    price: "$75,000",
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
    image: fittrackImage,
    path: "/portfolio/fittrack",
  },
  {
    title: "QuickPay Fintech App",
    category: "Finance",
    result: "4.8★ rating on App Store",
    image: quickpayImage,
    path: "/portfolio/quickpay",
  },
];

const MobileApp = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(75_100%_50%/0.1),transparent_50%)]" />
        
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Mobile App Development
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              Mobile Apps Built for <span className="gradient-text">Speed & Scale</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              We build native and cross-platform mobile applications that deliver 
              exceptional user experiences and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">Get Quote</Link>
              </Button>
              <Button asChild variant="hero-outline" size="xl">
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </motion.div>
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
                  to={study.path}
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

      <CTASection />
    </Layout>
  );
};

export default MobileApp;
