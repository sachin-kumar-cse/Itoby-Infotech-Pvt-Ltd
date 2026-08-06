"use client";

import { motion } from "framer-motion";
import { PageHeroBanner } from "@/components/ui/page-hero-banner";
import Link from "next/link";
import lawFirmImage from "@/assets/portfolio/law-firm-m365.webp";
import retailImage from "@/assets/portfolio/retail-m365.webp";
import { Button } from "@/components/ui/button";
import { 
  Cloud,
  Mail,
  FolderSync,
  Users,
  Shield,
  RefreshCw,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Settings,
  MonitorCheck,
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
  { icon: Cloud, title: "Microsoft 365 Setup", description: "Complete M365 deployment tailored to your organization's needs." },
  { icon: Mail, title: "Business Email", description: "Professional email with custom domain and advanced security features." },
  { icon: FolderSync, title: "SharePoint", description: "Collaborative document management and intranet solutions." },
  { icon: Users, title: "Teams Integration", description: "Unified communication platform for meetings, chat, and collaboration." },
  { icon: Shield, title: "Security Setup", description: "Multi-factor authentication, compliance policies, and threat protection." },
  { icon: RefreshCw, title: "Migration Support", description: "Seamless migration from existing platforms with zero data loss." },
];

const benefits = [
  "Access files and collaborate from anywhere",
  "Enterprise-grade security and compliance",
  "Automatic updates and new features",
  "Integrated suite of productivity tools",
  "Reduced IT infrastructure costs",
  "99.9% uptime guarantee",
];

const processSteps = [
  { step: "01", title: "Assessment", description: "Evaluate your current setup, requirements, and goals for M365 implementation.", icon: Lightbulb },
  { step: "02", title: "Planning", description: "Create a detailed migration and deployment plan with minimal disruption.", icon: Settings },
  { step: "03", title: "Migration", description: "Execute migration with data integrity checks and user communication.", icon: MonitorCheck },
  { step: "04", title: "Support", description: "Provide training, documentation, and ongoing technical support.", icon: Rocket },
];

const tools = [
  "Microsoft 365", "Azure Active Directory", "Exchange Online", "SharePoint", "Teams", "OneDrive", "Power Automate", "Microsoft Intune"
];

const faqs = [
  {
    question: "What Microsoft 365 migration & cloud setup services does Itoby Infotech provide?",
    answer: "Itoby Infotech Pvt. Ltd. provides complete Microsoft 365 tenant deployment, zero-downtime email migration (Exchange Online), SharePoint intranet setup, Microsoft Teams integration, Azure AD SSO, and Intune mobile device management."
  },
  {
    question: "How do you guarantee zero downtime and zero data loss during M365 email migration?",
    answer: "We perform staged cutover or hybrid migrations using encrypted sync protocols. Dual-delivery MX routing ensures all incoming emails, calendars, contacts, and historical archives transfer smoothly with 100% data integrity and zero business disruption."
  },
  {
    question: "How long does enterprise Microsoft 365 migration take?",
    answer: "Small business tenant setups (1-50 users) take 1-2 weeks. Enterprise migrations (100-1000+ mailboxes with custom SharePoint structure) take 3-6 weeks with pre-migration staging and post-migration validation."
  },
  {
    question: "How do you configure security and compliance in Microsoft 365?",
    answer: "We enforce Multi-Factor Authentication (MFA), Conditional Access policies, Anti-Phishing & Anti-Spam protection (Defender for Office 365), Data Loss Prevention (DLP) rules, and automated cloud backup retention."
  },
  {
    question: "Can Microsoft Power Automate streamline our business workflows?",
    answer: "Yes. We build custom Power Automate flows that automate invoice approval chains, email attachments to SharePoint sync, contract signature notifications, and CRM task automation."
  },
  {
    question: "Which Microsoft 365 license plan is best for my business?",
    answer: "We analyze your staff requirements to recommend optimal licensing across Business Basic, Business Standard, Business Premium, or E3/E5 enterprise plans, ensuring you pay only for active user features."
  },
  {
    question: "Do you provide staff training and change management support?",
    answer: "Yes. We conduct interactive video training, produce customized user cheat-sheets, and provide dedicated helpdesk support so your team adopts Microsoft Teams, OneDrive, and SharePoint with ease."
  },
  {
    question: "What is included in ongoing Microsoft 365 managed administration?",
    answer: "Our M365 managed IT SLA includes user onboarding/offboarding, license optimization, 24/7 security threat monitoring, SharePoint permissions auditing, and dedicated SLA technical support."
  },
];

const pricingTiers = [
  {
    name: "Basic Setup",
    price: { USD: "$1,500", AUD: "A$2,100", CAD: "C$2,000", INR: "₹1,00,000" },
    description: "Essential M365 deployment for small teams",
    features: [
      "Up to 25 users",
      "Email migration",
      "Basic Teams setup",
      "OneDrive configuration",
      "User training (2 hours)",
      "30 days support",
    ],
  },
  {
    name: "Professional",
    price: { USD: "$4,500", AUD: "A$6,300", CAD: "C$6,000", INR: "₹3,00,000" },
    description: "Complete migration for growing organizations",
    features: [
      "Up to 100 users",
      "Full email & data migration",
      "SharePoint intranet setup",
      "Teams configuration",
      "Security policies",
      "User training (8 hours)",
      "90 days support",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: { USD: "$12,000", AUD: "A$16,800", CAD: "C$15,800", INR: "₹8,00,000" },
    description: "Large-scale deployment with advanced features",
    features: [
      "Unlimited users",
      "Complex migration scenarios",
      "Custom SharePoint solutions",
      "Power Automate workflows",
      "Intune device management",
      "Compliance configuration",
      "Dedicated project manager",
      "12 months support",
    ],
  },
];

const caseStudies = [
  {
    title: "Law Firm M365 Migration",
    category: "Professional Services",
    result: "50% reduction in IT costs",
    image: getImgSrc(lawFirmImage),
    path: "/portfolio/law-firm-m365",
  },
  {
    title: "Retail Chain Collaboration",
    category: "Retail",
    result: "200+ locations connected",
    image: getImgSrc(retailImage),
    path: "/portfolio/retail-m365",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Microsoft 365 Cloud Migration & Managed Services",
  serviceType: "Cloud IT Consulting & Managed Services",
  provider: {
    "@type": "Organization",
    name: "Itoby Infotech Pvt. Ltd.",
    url: "https://itobyinfotech.com"
  },
  areaServed: ["US", "CA", "AU", "GB", "AE", "IN"],
  description: "Microsoft 365 migration, SharePoint intranet, Teams deployment, and Azure AD security services by Itoby Infotech."
};

export default function Microsoft365Client() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <PageHeroBanner
        title="Microsoft 365 Cloud Migration & Managed Services"
        description="Complete Microsoft 365 deployment, cloud migration, SharePoint, and 24/7 support services to modernize your workplace."
        badge="Enterprise Cloud Collaboration"
        breadcrumbs={[
          { label: "Services", path: "/services" },
          { label: "Microsoft 365" },
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
              Complete M365 <span className="gradient-text">Services</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              From initial setup to ongoing management, we handle every aspect 
              of your Microsoft 365 journey.
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
                Benefits of <span className="gradient-text">M365</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Microsoft 365 transforms how your team works with powerful, 
                integrated productivity tools.
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
                  <span className="text-7xl font-bold gradient-text">99.9%</span>
                  <p className="text-xl text-muted-foreground mt-4">Uptime Guarantee</p>
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
              Seamless <span className="gradient-text">Migration</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Our proven process ensures a smooth transition to Microsoft 365.
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
              Technologies
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4">
              Microsoft <span className="gradient-text">Ecosystem</span>
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
        title="Service Packages"
        subtitle="One-time setup fees with optional ongoing support."
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
