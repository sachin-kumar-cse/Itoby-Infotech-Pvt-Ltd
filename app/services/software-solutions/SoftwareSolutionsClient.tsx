"use client";

import { motion } from "framer-motion";
import { PageHeroBanner } from "@/components/ui/page-hero-banner";
import Link from "next/link";
import manufacturingErpImage from "@/assets/portfolio/manufacturing-erp.webp";
import healthcarePortalImage from "@/assets/portfolio/healthcare-portal.webp";
import { Button } from "@/components/ui/button";
import { 
  Database,
  Settings,
  Cog,
  Layout as LayoutIcon,
  Plug,
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
  { icon: Database, title: "CRM/ERP Systems", description: "Custom CRM and ERP solutions that streamline your business operations." },
  { icon: LayoutIcon, title: "Admin Panels", description: "Powerful dashboards and admin interfaces for managing your business data." },
  { icon: Cog, title: "Automation Tools", description: "Workflow automation that saves time and reduces human error." },
  { icon: Settings, title: "Custom Portals", description: "Client and employee portals tailored to your specific needs." },
  { icon: Plug, title: "API Integrations", description: "Seamless connections between your existing tools and platforms." },
  { icon: Shield, title: "Security Solutions", description: "Enterprise-grade security implementations to protect your data." },
];

const benefits = [
  "Reduce operational costs by up to 40%",
  "Automate repetitive tasks and workflows",
  "Centralize data for better decision making",
  "Improve team collaboration and efficiency",
  "Scalable solutions that grow with your business",
  "24/7 system monitoring and support",
];

const processSteps = [
  { step: "01", title: "Analysis", description: "Deep dive into your business processes to identify pain points and opportunities.", icon: Lightbulb },
  { step: "02", title: "Architecture", description: "Design a scalable, secure system architecture tailored to your needs.", icon: PenTool },
  { step: "03", title: "Development", description: "Agile development with regular demos and feedback cycles.", icon: Code },
  { step: "04", title: "Deployment", description: "Smooth rollout with training and ongoing support.", icon: Rocket },
];

const tools = [
  "Node.js", "Python", "PostgreSQL", "Supabase", "Redis", "AWS", "Docker", "Kubernetes", "REST & GraphQL APIs"
];

const faqs = [
  {
    question: "What custom software & enterprise automation solutions does Itoby Infotech build?",
    answer: "Itoby Infotech Pvt. Ltd. builds enterprise CRM/ERP systems, client portals, automated GST billing software, property leasing platforms, AI voice agents, and custom workflow microservices using Node.js, Python, PostgreSQL, and AWS."
  },
  {
    question: "How do you ensure custom software architecture is scalable and secure?",
    answer: "We design modular microservices architecture with cloud auto-scaling (AWS/Docker/Kubernetes), PostgreSQL database indexing, Redis caching, AES-256 encryption, role-based access control (RBAC), and strict OWASP security standards."
  },
  {
    question: "How long does custom enterprise software development take?",
    answer: "Custom business automation tools take 4-8 weeks. Complex multi-tenant SaaS platforms, enterprise ERP systems, or custom CRM portals take 12-24 weeks with bi-weekly agile sprint demos."
  },
  {
    question: "Can you integrate custom software with legacy databases and third-party APIs?",
    answer: "Yes! We specialize in custom REST & GraphQL API integrations connecting legacy SQL/Oracle databases, SAP, Salesforce, QuickBooks, Stripe, Razorpay, and cloud SaaS platforms with zero data loss."
  },
  {
    question: "Do you provide source code ownership and IP rights for custom software?",
    answer: "Yes. 100% of the custom source code, intellectual property (IP) rights, database schemas, and deployment credentials are fully owned by your company upon project completion."
  },
  {
    question: "How do you handle system maintenance, uptime monitoring, and SLA support?",
    answer: "We provide 24/7 server health monitoring, automated cloud backups, SSL renewals, vulnerability patching, and SLA-guaranteed technical support by dedicated DevOps and full-stack engineers."
  },
  {
    question: "What built-in SaaS products has Itoby Infotech engineered?",
    answer: "Our in-house SaaS lab engineered IIPL Lead (B2B Lead Gen CRM), IIPL Renting (Leasing Management), IIPL Billing (GST Enterprise Invoicing), IIPL Cashmemo (Instant PDF Receipt Builder), and IIPL Calling (AI Voice Agents)."
  },
  {
    question: "Do you provide user training and technical documentation?",
    answer: "Yes. Every custom software project includes comprehensive API documentation, admin user guides, video walkthroughs, and live interactive training sessions for your operational team."
  },
];

const pricingTiers = [
  {
    name: "Automation",
    price: { USD: "$8,000", AUD: "A$11,200", CAD: "C$10,500", INR: "₹5,50,000" },
    description: "Simple workflow automation and tools",
    features: [
      "Process automation",
      "Single integration",
      "Admin dashboard",
      "User documentation",
      "4-6 weeks delivery",
      "3 months support",
    ],
  },
  {
    name: "Custom Portal",
    price: { USD: "$25,000", AUD: "A$35,000", CAD: "C$33,000", INR: "₹18,00,000" },
    description: "Client or employee portals with custom features",
    features: [
      "Custom portal development",
      "User management system",
      "Multiple integrations",
      "Role-based access control",
      "Reporting dashboard",
      "Mobile responsive",
      "6 months support",
    ],
    popular: true,
  },
  {
    name: "Enterprise System",
    price: { USD: "$75,000", AUD: "A$105,000", CAD: "C$99,000", INR: "₹55,00,000" },
    description: "Full CRM/ERP or complex enterprise solutions",
    features: [
      "Complete system development",
      "Unlimited modules",
      "Legacy system integration",
      "Data migration",
      "Advanced security",
      "Staff training",
      "24/7 monitoring",
      "12 months support",
    ],
  },
];

const caseStudies = [
  {
    title: "Manufacturing ERP System",
    category: "Enterprise Software",
    result: "45% improvement in efficiency",
    image: getImgSrc(manufacturingErpImage),
    path: "/portfolio/manufacturing-erp",
  },
  {
    title: "Healthcare Patient Portal",
    category: "Custom Portal",
    result: "Reduced admin time by 60%",
    image: getImgSrc(healthcarePortalImage),
    path: "/portfolio/healthcare-portal",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Custom Software Solutions & Enterprise Automation",
  serviceType: "Software Engineering Company",
  provider: {
    "@type": "Organization",
    name: "Itoby Infotech Pvt. Ltd.",
    url: "https://itobyinfotech.com"
  },
  areaServed: ["US", "CA", "AU", "GB", "AE", "IN"],
  description: "Custom ERP, CRM, portal, microservices, and workflow automation development services by Itoby Infotech using Node.js, Python, PostgreSQL, and AWS."
};

export default function SoftwareSolutionsClient() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <PageHeroBanner
        title="Custom Enterprise Software Solutions & Automation"
        description="Tailored software solutions that automate workflows, streamline operations, and give your business a competitive edge."
        badge="Enterprise Software Engineering"
        breadcrumbs={[
          { label: "Services", path: "/services" },
          { label: "Software Solutions" },
        ]}
      />

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
              Enterprise-Grade <span className="gradient-text">Solutions</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              From simple automation to complex enterprise systems, we build 
              software that transforms how you do business.
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
                Benefits That <span className="gradient-text">Transform</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Our software solutions are designed to deliver tangible results 
                and operational excellence.
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
                  <span className="text-7xl font-bold gradient-text">40%</span>
                  <p className="text-xl text-muted-foreground mt-4">Cost Reduction Average</p>
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
              From Concept to <span className="gradient-text">Deployment</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Our agile methodology ensures quality delivery at every milestone.
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
              Built With <span className="gradient-text">Robust Tech</span>
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
        title="Investment Options"
        subtitle="Transparent pricing for software solutions of any scale."
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

      <CTASection />
    </>
  );
}
