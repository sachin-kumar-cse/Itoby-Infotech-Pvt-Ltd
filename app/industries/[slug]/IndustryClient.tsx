"use client";

import { motion } from "framer-motion";
import { PageHeroBanner } from "@/components/ui/page-hero-banner";
import { CTASection } from "@/components/sections/CTASection";
import { IndustryData } from "@/data/industriesData";
import { CheckCircle, ArrowRight, Shield, Zap, Sparkles, Building2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Props {
  industry: IndustryData;
}

export default function IndustryClient({ industry }: Props) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: industry.title,
    serviceType: "Software Engineering & Digital Transformation",
    provider: {
      "@type": "Organization",
      name: "Itoby Infotech Pvt. Ltd.",
      url: "https://www.itobyinfotech.com",
    },
    areaServed: ["US", "CA", "AU", "GB", "AE", "IN"],
    description: industry.heroDescription,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: industry.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Banner */}
      <PageHeroBanner
        title={industry.title}
        description={industry.heroDescription}
        badge={industry.heroBadge}
        breadcrumbs={[
          { label: "Services", path: "/services" },
          { label: "Industries", path: "/industries" },
          { label: industry.title },
        ]}
      />

      {/* Overview & Benefits */}
      <section className="section-padding relative overflow-hidden bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold">
                <Building2 size={14} />
                <span>Industry Solutions</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                Tailored Software Engineering for <span className="gradient-text">{industry.title}</span>
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                {industry.overview}
              </p>
              <div className="pt-2">
                <Button variant="hero" size="lg" asChild>
                  <Link href="/request-quote" className="gap-2">
                    Request Industry Strategy <ArrowRight size={16} />
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Benefits List */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-6 sm:p-8 rounded-3xl bg-card/60 border border-border/80 shadow-xl space-y-4 backdrop-blur-xl"
            >
              <h3 className="font-display font-extrabold text-xl mb-4 flex items-center gap-2">
                <Zap size={20} className="text-primary" /> Key Business Benefits
              </h3>
              <ul className="space-y-3">
                {industry.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground/90 font-medium">
                    <CheckCircle size={18} className="text-primary shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Features Grid */}
      <section className="section-padding bg-card/30 border-y border-border/60 relative">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold mb-3">
              Engineered Capabilities & Capabilities
            </h2>
            <p className="text-muted-foreground text-sm">
              Delivering high-throughput software built for scale, reliability, and security.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industry.features.map((feat, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-card border border-border/70 hover:border-primary/50 transition-all shadow-md group"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Sparkles size={20} />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{feat}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  Enterprise-grade implementation adhering to strict industry compliance and high availability SLAs.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Pills */}
      <section className="section-padding bg-background">
        <div className="container-wide text-center">
          <h3 className="font-display text-xl sm:text-2xl font-bold mb-6">
            Technologies Empowering {industry.title}
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
            {industry.techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-xl bg-secondary/80 border border-border text-xs sm:text-sm font-semibold text-foreground hover:border-primary/50 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Feature Highlight */}
      <section className="section-padding bg-card/40 border-t border-border/60">
        <div className="container-wide">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-primary/10 via-card to-glow-secondary/10 border border-primary/20 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">Featured Success Case Study</span>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold">{industry.caseStudy.title}</h3>
              <p className="text-muted-foreground text-sm font-medium">{industry.caseStudy.metrics}</p>
            </div>
            <Button variant="hero" size="lg" asChild className="shrink-0">
              <Link href="/portfolio">Explore All Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-background">
        <div className="container-wide max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl sm:text-3xl font-bold">Frequently Asked Questions</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {industry.faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border border-border/80 rounded-2xl px-6 bg-card/60">
                <AccordionTrigger className="font-display font-semibold text-sm sm:text-base hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-xs sm:text-sm leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Related Services Cluster */}
      <section className="py-8 bg-card/20 border-t border-border/40">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs font-extrabold uppercase tracking-wider text-primary mb-3">Related Software Engineering Services:</p>
            <div className="flex flex-wrap gap-2.5">
              <Link href="/services/custom-software-development" className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-card border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors">
                Custom Software Development
              </Link>
              <Link href="/services/ai-development-company" className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-card border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors">
                AI Development Services
              </Link>
              <Link href="/services/saas-development-company" className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-card border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors">
                SaaS Application Development
              </Link>
              <Link href="/services/web-design" className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-card border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors">
                Web Application Engineering
              </Link>
              <Link href="/services/mobile-app" className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-card border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors">
                Mobile App Development
              </Link>
              <Link href="/services/erp-development" className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-card border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors">
                Enterprise ERP Development
              </Link>
              <Link href="/services/crm-development" className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-card border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors">
                Custom CRM Platforms
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
