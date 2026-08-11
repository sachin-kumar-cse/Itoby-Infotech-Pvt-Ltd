"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PageHeroBanner } from "@/components/ui/page-hero-banner";
import { CTASection } from "@/components/sections/CTASection";
import { detailedServicesList } from "@/data/servicesData";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  ArrowRight,
  Sparkles,
  Layers,
  Code,
  ShieldCheck,
  Zap,
  HelpCircle,
  Cpu,
  Globe2,
  Building2,
  Lock,
  FileCheck,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ServicesSlugClient({ slug }: { slug: string }) {
  const service = detailedServicesList.find((s) => s.slug === slug) || detailedServicesList[0];

  const canonicalUrl = `https://www.itobyinfotech.com/services/${service.slug}`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.itobyinfotech.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://www.itobyinfotech.com/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: canonicalUrl,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    provider: {
      "@type": "Organization",
      name: "Itoby Infotech Pvt. Ltd.",
      url: "https://www.itobyinfotech.com",
    },
    serviceType: service.heroBadge,
    description: service.metaDescription || service.heroDescription,
    areaServed: ["US", "CA", "AU", "IN", "GB", "AE"],
    url: canonicalUrl,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <PageHeroBanner
        title={service.title}
        description={service.heroDescription}
        badge={service.heroBadge}
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Services", path: "/services" },
          { label: service.title, path: `/services/${service.slug}` },
        ]}
      />

      {/* Entity & GEO Trust Signal Banner */}
      <section className="py-4 bg-primary/10 border-b border-primary/20 text-xs font-semibold text-foreground">
        <div className="container-wide flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Building2 className="text-primary w-4 h-4 shrink-0" />
            <span><strong>Engineered by Itoby Infotech Pvt. Ltd.</strong> (Premier Software & AI Development Company)</span>
          </div>
          <div className="flex items-center gap-4 text-muted-foreground">
            <span className="flex items-center gap-1.5"><Globe2 className="w-3.5 h-3.5 text-primary" /> Global HQ: Noida, UP, India</span>
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-primary" /> US Hub: California, USA</span>
            <span className="flex items-center gap-1.5"><Lock className="w-3.5 h-3.5 text-primary" /> 100% IP Ownership</span>
          </div>
        </div>
      </section>

      {/* Overview & Key Benefits */}
      <section className="section-padding relative overflow-hidden bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary">
                <Sparkles size={14} /> Service Overview
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
                High-Performance Solutions Engineered for Global Enterprises
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                {service.overview}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-card border border-border/50">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-xs font-semibold text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 p-8 rounded-3xl bg-gradient-to-br from-card to-secondary/30 border border-border/80 shadow-xl space-y-6"
            >
              <h3 className="font-display text-xl font-bold text-foreground flex items-center gap-2">
                <Layers className="text-primary" size={20} /> Key Capabilities
              </h3>
              <ul className="space-y-3">
                {service.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>
              <Button className="w-full gap-2 shadow-lg hover:shadow-primary/25" asChild size="lg">
                <Link href="/contact">
                  Request Custom Proposal <ArrowRight size={16} />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Search & LLM Direct Answer Section */}
      {service.aiOverview && (
        <section className="section-padding bg-card/60 border-y border-border/60 relative">
          <div className="container-wide space-y-8">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary">
                <Cpu size={14} /> AI & LLM Search Insights
              </div>
              <h2 className="font-display text-3xl font-extrabold text-foreground">
                Technical Specifications & Capabilities
              </h2>
              <p className="text-sm text-muted-foreground">
                Factual insights detailing Itoby Infotech's delivery architecture, security standards, and target business applications.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-background border border-border/60 space-y-2">
                <h3 className="font-display text-base font-bold text-foreground flex items-center gap-2">
                  <Sparkles size={16} className="text-primary" /> What is {service.title}?
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {service.aiOverview.whatIs}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-background border border-border/60 space-y-2">
                <h3 className="font-display text-base font-bold text-foreground flex items-center gap-2">
                  <Building2 size={16} className="text-primary" /> Who Needs This Service?
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {service.aiOverview.whoNeeds}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-background border border-border/60 space-y-2">
                <h3 className="font-display text-base font-bold text-foreground flex items-center gap-2">
                  <CheckCircle size={16} className="text-primary" /> Itoby Infotech Capabilities
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {service.aiOverview.capabilities}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-background border border-border/60 space-y-2">
                <h3 className="font-display text-base font-bold text-foreground flex items-center gap-2">
                  <Code size={16} className="text-primary" /> Stack & Infrastructure
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {service.aiOverview.technologies}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-background border border-border/60 space-y-2">
                <h3 className="font-display text-base font-bold text-foreground flex items-center gap-2">
                  <Zap size={16} className="text-primary" /> Development Lifecycle
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {service.aiOverview.processSummary}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-background border border-border/60 space-y-2">
                <h3 className="font-display text-base font-bold text-foreground flex items-center gap-2">
                  <Lock size={16} className="text-primary" /> Security & Scalability
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {service.aiOverview.securityAndScalability}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Development Process */}
      {service.process && service.process.length > 0 && (
        <section className="section-padding bg-secondary/30 border-b border-border/50">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary">
                <Zap size={14} /> Process Lifecycle
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight">
                Our Agile Software Delivery Lifecycle
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {service.process.map((step, idx) => (
                <div key={idx} className="p-6 rounded-3xl bg-card border border-border/60 relative overflow-hidden group hover:border-primary/50 transition-colors">
                  <span className="font-display text-4xl font-black text-primary/20 group-hover:text-primary/40 transition-colors block mb-4">
                    {step.step}
                  </span>
                  <h3 className="font-display text-lg font-bold mb-2 text-foreground">{step.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tech Stack & Use Cases */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="p-8 rounded-3xl bg-card border border-border/60 space-y-6">
              <h3 className="font-display text-2xl font-bold flex items-center gap-2 text-foreground">
                <Code className="text-primary" size={24} /> Primary Technologies & Tools
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {service.techStack.map((tech, idx) => (
                  <span key={idx} className="px-3.5 py-2 rounded-xl bg-secondary border border-border/40 text-xs font-semibold text-foreground">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-card border border-border/60 space-y-6">
              <h3 className="font-display text-2xl font-bold flex items-center gap-2 text-foreground">
                <ShieldCheck className="text-primary" size={24} /> Business Applications & Industry Use Cases
              </h3>
              <ul className="space-y-3">
                {service.useCases.map((uc, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                    {uc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Connections */}
      {service.relatedCaseStudies && service.relatedCaseStudies.length > 0 && (
        <section className="section-padding bg-secondary/20 border-t border-border/50">
          <div className="container-wide space-y-8">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary">
                <FileCheck size={14} /> Proven Case Studies
              </div>
              <h2 className="font-display text-3xl font-extrabold text-foreground">
                Real-World Client Solutions & Results
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.relatedCaseStudies.map((cs, idx) => (
                <Link
                  key={idx}
                  href={cs.path}
                  className="p-6 rounded-3xl bg-card border border-border/60 hover:border-primary/60 transition-all flex flex-col justify-between space-y-4 group"
                >
                  <div className="space-y-2">
                    <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                      {cs.name} <ArrowRight size={16} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {cs.description}
                    </p>
                  </div>
                  <span className="text-xs font-bold text-primary flex items-center gap-1">
                    View Portfolio Case Study →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      <section className="section-padding bg-background border-t border-border/50">
        <div className="container-wide max-w-4xl">
          <div className="text-center mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary">
              <HelpCircle size={14} /> Frequently Asked Questions
            </div>
            <h2 className="font-display text-3xl font-extrabold">Service Questions & Answers</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {service.faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border border-border/60 rounded-2xl bg-card px-6 py-2">
                <AccordionTrigger className="font-display text-base font-bold hover:no-underline text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Related Services Contextual Links */}
      <section className="py-12 bg-secondary/30 border-t border-border/40">
        <div className="container-wide space-y-6">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-wider text-primary mb-3">Related Engineering & SaaS Services:</p>
            <div className="flex flex-wrap gap-2.5">
              {service.relatedServices ? (
                service.relatedServices.map((rs, idx) => (
                  <Link
                    key={idx}
                    href={rs.path}
                    className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-card border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                  >
                    {rs.name}
                  </Link>
                ))
              ) : (
                <>
                  <Link href="/services/custom-software-development" className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-card border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors">
                    Custom Software Development
                  </Link>
                  <Link href="/services/erp-development" className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-card border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors">
                    Enterprise ERP Systems
                  </Link>
                  <Link href="/services/crm-development" className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-card border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors">
                    Custom CRM Software
                  </Link>
                  <Link href="/services/saas-development-company" className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-card border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors">
                    SaaS Development Services
                  </Link>
                  <Link href="/services/ai-development-company" className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-card border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors">
                    AI Development Company
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
