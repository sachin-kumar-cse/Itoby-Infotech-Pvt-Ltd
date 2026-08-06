"use client";

import { motion } from "framer-motion";
import { PageHeroBanner } from "@/components/ui/page-hero-banner";
import Link from "next/link";
import techflowImage from "@/assets/portfolio/techflow-saas.webp";
import luxeFashionImage from "@/assets/portfolio/luxe-fashion.webp";
import { 
  Palette, 
  Code, 
  Zap, 
  ShoppingCart, 
  Gauge, 
  Wrench,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  PenTool,
  Layers,
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
  { icon: Palette, title: "UI/UX Design", description: "Beautiful, intuitive interfaces that delight users and drive engagement." },
  { icon: Code, title: "Website Development", description: "Clean, performant code built with modern technologies and best practices." },
  { icon: Zap, title: "Landing Pages", description: "High-converting landing pages optimized for lead generation and sales." },
  { icon: ShoppingCart, title: "E-commerce Websites", description: "Powerful online stores with seamless checkout and inventory management." },
  { icon: Gauge, title: "Performance Optimization", description: "Lightning-fast load times and optimal Core Web Vitals scores." },
  { icon: Wrench, title: "Maintenance Support", description: "Ongoing updates, security patches, and technical support." },
];

const benefits = [
  "Increase conversions by up to 200% with optimized design",
  "24/7 uptime with enterprise-grade hosting",
  "SEO-optimized structure for better search rankings",
  "Mobile-first responsive design for all devices",
  "Analytics integration for data-driven decisions",
  "Scalable architecture for future growth",
];

const processSteps = [
  { step: "01", title: "Discovery", description: "We learn about your business, goals, and target audience through in-depth consultations.", icon: Lightbulb },
  { step: "02", title: "Design", description: "Our designers create stunning mockups and prototypes tailored to your brand.", icon: PenTool },
  { step: "03", title: "Development", description: "Our developers bring designs to life with clean, efficient code.", icon: Layers },
  { step: "04", title: "Launch", description: "We deploy your site and provide training and ongoing support.", icon: Rocket },
];

const tools = [
  "React", "Next.js", "TypeScript", "Tailwind CSS", "Figma", "WordPress", "Shopify", "Webflow"
];

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer: "Typically, a standard website takes 4-8 weeks from discovery to launch. Complex e-commerce or custom web applications may take 8-16 weeks depending on requirements."
  },
  {
    question: "Do you provide website hosting?",
    answer: "Yes, we offer managed hosting solutions with 99.9% uptime guarantee, daily backups, and SSL certificates included."
  },
  {
    question: "Can I update the website myself?",
    answer: "Absolutely! We build websites with user-friendly content management systems and provide training so you can make updates independently."
  },
  {
    question: "What's included in maintenance support?",
    answer: "Our maintenance packages include security updates, performance monitoring, regular backups, bug fixes, and priority support."
  },
  {
    question: "Do you redesign existing websites?",
    answer: "Yes, we specialize in website redesigns and can modernize your existing site while preserving your SEO rankings and content."
  },
];

const pricingTiers = [
  {
    name: "Starter",
    price: { USD: "$2,500", AUD: "A$3,500", CAD: "C$3,300", INR: "₹1,50,000" },
    description: "Perfect for small businesses needing a professional online presence",
    features: [
      "Up to 5 pages",
      "Mobile responsive design",
      "Basic SEO setup",
      "Contact form integration",
      "2 rounds of revisions",
      "1 month support",
    ],
  },
  {
    name: "Professional",
    price: { USD: "$5,500", AUD: "A$7,700", CAD: "C$7,200", INR: "₹3,50,000" },
    description: "Ideal for growing businesses with advanced requirements",
    features: [
      "Up to 15 pages",
      "Custom UI/UX design",
      "Advanced SEO optimization",
      "CMS integration",
      "Blog functionality",
      "Analytics dashboard",
      "3 rounds of revisions",
      "3 months support",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: { USD: "$12,000", AUD: "A$16,800", CAD: "C$15,800", INR: "₹8,00,000" },
    description: "Full-scale solution for large organizations",
    features: [
      "Unlimited pages",
      "E-commerce functionality",
      "Custom integrations",
      "Multi-language support",
      "Performance optimization",
      "Security hardening",
      "Unlimited revisions",
      "12 months support",
    ],
  },
];

const caseStudies = [
  {
    title: "TechFlow SaaS Platform",
    category: "Web Application",
    result: "300% increase in user signups",
    image: getImgSrc(techflowImage),
    path: "/portfolio/techflow",
  },
  {
    title: "Luxe Fashion E-commerce",
    category: "E-commerce",
    result: "150% boost in online sales",
    image: getImgSrc(luxeFashionImage),
    path: "/portfolio/luxe-fashion",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Web Design & Development Services",
  serviceType: "Website Development",
  provider: {
    "@type": "Organization",
    name: "Itoby Infotech Pvt. Ltd.",
    url: "https://itobyinfotech.com"
  },
  areaServed: ["US", "CA", "AU", "GB", "AE", "IN"],
  description: "Custom web design and Next.js development services by Itoby Infotech. UI/UX design, e-commerce development, landing pages, and speed optimization."
};

export default function WebDesignClient() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {/* 3D Animated Hero & Breadcrumbs */}
      <PageHeroBanner
        title="Web Design & High-Performance Development"
        description="We create stunning, high-performance websites that captivate audiences, drive conversions, and establish your brand as an industry leader."
        badge="Custom UI/UX & Web Engineering"
        breadcrumbs={[
          { label: "Services", path: "/services" },
          { label: "Web Design" },
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
              Comprehensive Web <span className="gradient-text">Solutions</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              From concept to launch, we deliver end-to-end web development services 
              tailored to your unique business needs.
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
                Benefits That <span className="gradient-text">Drive Growth</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Our websites are built to deliver measurable results and support 
                your business objectives.
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
                  <span className="text-7xl font-bold gradient-text">200%</span>
                  <p className="text-xl text-muted-foreground mt-4">Average Conversion Increase</p>
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
              From Vision to <span className="gradient-text">Reality</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Our proven process ensures successful project delivery every time.
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
              Built With <span className="gradient-text">Modern Tech</span>
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
        title="Pricing Packages"
        subtitle="Transparent pricing with no hidden fees. Choose the package that fits your needs."
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
