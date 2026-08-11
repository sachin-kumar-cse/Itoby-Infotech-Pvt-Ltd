"use client";

import { motion } from "framer-motion";
import { PageHeroBanner } from "@/components/ui/page-hero-banner";
import { CTASection } from "@/components/sections/CTASection";
import { IndustryData } from "@/data/industriesData";
import {
  CheckCircle,
  ArrowRight,
  ShieldCheck,
  Zap,
  Sparkles,
  Building2,
  Cpu,
  Globe2,
  Lock,
  Code,
  FileCheck,
  HelpCircle,
} from "lucide-react";
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
  const canonicalUrl = `https://www.itobyinfotech.com/industries/${industry.slug}`;

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
        name: "Industries",
        item: "https://www.itobyinfotech.com/industries",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: industry.title,
        item: canonicalUrl,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: industry.title,
    serviceType: industry.heroBadge,
    provider: {
      "@type": "Organization",
      name: "Itoby Infotech Pvt. Ltd.",
      url: "https://www.itobyinfotech.com",
    },
    areaServed: ["US", "CA", "AU", "GB", "AE", "IN"],
    description: industry.metaDescription || industry.heroDescription,
    url: canonicalUrl,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
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
          { label: "Home", path: "/" },
          { label: "Industries", path: "/industries" },
          { label: industry.title, path: canonicalUrl },
        ]}
      />

      {/* Entity & GEO Trust Signal Banner */}
      <section className="py-4 bg-primary/10 border-b border-primary/20 text-xs font-semibold text-foreground">
        <div className="container-wide flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Building2 className="text-primary w-4 h-4 shrink-0" />
            <span><strong>Engineered by Itoby Infotech Pvt. Ltd.</strong> (Custom Software, SaaS & AI Solutions)</span>
          </div>
          <div className="flex items-center gap-4 text-muted-foreground">
            <span className="flex items-center gap-1.5"><Globe2 className="w-3.5 h-3.5 text-primary" /> Global HQ: Noida, UP, India</span>
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-primary" /> Serving: US, CA, AU, GB, AE, IN</span>
            <span className="flex items-center gap-1.5"><Lock className="w-3.5 h-3.5 text-primary" /> 100% IP Ownership</span>
          </div>
        </div>
      </section>

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
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold">
                <Building2 size={14} />
                <span>Industry Overview</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight text-foreground">
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
              <h3 className="font-display font-extrabold text-xl mb-4 flex items-center gap-2 text-foreground">
                <Zap size={20} className="text-primary" /> Key Business Outcomes
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

      {/* AI Search & LLM Direct Answer Section */}
      {industry.aiOverview && (
        <section className="section-padding bg-card/60 border-y border-border/60 relative">
          <div className="container-wide space-y-8">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary">
                <Cpu size={14} /> AI & LLM Search Insights
              </div>
              <h2 className="font-display text-3xl font-extrabold text-foreground">
                Industry Software Architecture & Specifications
              </h2>
              <p className="text-sm text-muted-foreground">
                Factual technical insights detailing Itoby Infotech's delivery architecture, security standards, and industry solution modules.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-background border border-border/60 space-y-2">
                <h3 className="font-display text-base font-bold text-foreground flex items-center gap-2">
                  <Sparkles size={16} className="text-primary" /> What Software Do We Build?
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {industry.aiOverview.whatIs}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-background border border-border/60 space-y-2">
                <h3 className="font-display text-base font-bold text-foreground flex items-center gap-2">
                  <Building2 size={16} className="text-primary" /> Who Benefits Most?
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {industry.aiOverview.whoNeeds}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-background border border-border/60 space-y-2">
                <h3 className="font-display text-base font-bold text-foreground flex items-center gap-2">
                  <CheckCircle size={16} className="text-primary" /> Features & Modules
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {industry.aiOverview.capabilities}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-background border border-border/60 space-y-2">
                <h3 className="font-display text-base font-bold text-foreground flex items-center gap-2">
                  <Code size={16} className="text-primary" /> Technology Stack
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {industry.aiOverview.technologies}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-background border border-border/60 space-y-2">
                <h3 className="font-display text-base font-bold text-foreground flex items-center gap-2">
                  <Zap size={16} className="text-primary" /> Development Lifecycle
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {industry.aiOverview.processSummary}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-background border border-border/60 space-y-2">
                <h3 className="font-display text-base font-bold text-foreground flex items-center gap-2">
                  <Lock size={16} className="text-primary" /> Security & Scalability
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {industry.aiOverview.securityAndScalability}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Core Features Grid */}
      <section className="section-padding bg-background border-b border-border/60 relative">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold mb-3 text-foreground">
              Engineered Capabilities & Modules
            </h2>
            <p className="text-muted-foreground text-sm">
              Delivering high-throughput industry software built for scale, reliability, and security.
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
                <h3 className="font-display font-bold text-lg mb-2 text-foreground">{feat}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  Enterprise-grade software module engineered with custom API gateways and strict security controls.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Pills */}
      <section className="section-padding bg-secondary/30 border-b border-border/50">
        <div className="container-wide text-center">
          <h3 className="font-display text-xl sm:text-2xl font-bold mb-6 text-foreground">
            Technologies Empowering {industry.title}
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
            {industry.techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-xl bg-card border border-border/60 text-xs sm:text-sm font-semibold text-foreground hover:border-primary/50 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Feature Highlight */}
      {industry.caseStudy && (
        <section className="section-padding bg-background border-b border-border/60">
          <div className="container-wide">
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-primary/10 via-card to-glow-secondary/10 border border-primary/20 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-3 text-center md:text-left">
                <span className="text-xs font-bold uppercase tracking-wider text-primary flex items-center justify-center md:justify-start gap-1.5">
                  <FileCheck size={14} /> Proven Industry Case Study
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-foreground">{industry.caseStudy.title}</h3>
                <p className="text-muted-foreground text-sm font-medium">{industry.caseStudy.metrics}</p>
              </div>
              <Button variant="hero" size="lg" asChild className="shrink-0">
                <Link href={industry.caseStudy.path || "/portfolio"}>View Portfolio Case Study →</Link>
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      <section className="section-padding bg-secondary/20">
        <div className="container-wide max-w-4xl">
          <div className="text-center mb-10 space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary">
              <HelpCircle size={14} /> Frequently Asked Questions
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">Industry Software Questions & Answers</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {industry.faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border border-border/80 rounded-2xl px-6 bg-card/60">
                <AccordionTrigger className="font-display font-semibold text-sm sm:text-base hover:no-underline py-4 text-left text-foreground">
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

      {/* Related Services & Engineering Cluster */}
      <section className="py-12 bg-background border-t border-border/40">
        <div className="container-wide space-y-6 max-w-5xl mx-auto">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-wider text-primary mb-3">Related Engineering & SaaS Services:</p>
            <div className="flex flex-wrap gap-2.5">
              {industry.relatedServices ? (
                industry.relatedServices.map((rs, idx) => (
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
                  <Link href="/services/ai-development-company" className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-card border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors">
                    AI Development Company
                  </Link>
                  <Link href="/services/saas-development-company" className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-card border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors">
                    SaaS Development Services
                  </Link>
                  <Link href="/services/web-design" className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-card border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors">
                    Web Application Engineering
                  </Link>
                  <Link href="/services/mobile-app" className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-card border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors">
                    Mobile App Development
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
