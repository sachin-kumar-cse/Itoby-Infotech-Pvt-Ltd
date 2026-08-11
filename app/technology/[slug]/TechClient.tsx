"use client";

import { motion } from "framer-motion";
import { PageHeroBanner } from "@/components/ui/page-hero-banner";
import { CTASection } from "@/components/sections/CTASection";
import { TechnologyData } from "@/data/technologyData";
import {
  CheckCircle,
  ArrowRight,
  Code2,
  Cpu,
  Sparkles,
  Layers,
  Building2,
  Globe2,
  ShieldCheck,
  Lock,
  Code,
  Zap,
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
  tech: TechnologyData;
}

export default function TechClient({ tech }: Props) {
  const canonicalUrl = `https://www.itobyinfotech.com/technology/${tech.slug}`;

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
        name: "Technologies",
        item: "https://www.itobyinfotech.com/technology",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: tech.title || `${tech.name} Development Services`,
        item: canonicalUrl,
      },
    ],
  };

  const techSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: tech.title || `${tech.name} Development Services`,
    serviceType: `${tech.category} Engineering`,
    provider: {
      "@type": "Organization",
      name: "Itoby Infotech Pvt. Ltd.",
      url: "https://www.itobyinfotech.com",
    },
    areaServed: ["US", "CA", "AU", "GB", "AE", "IN"],
    description: tech.metaDescription || tech.heroDescription,
    url: canonicalUrl,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: tech.faqs.map((f) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(techSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Banner */}
      <PageHeroBanner
        title={tech.title || `${tech.name} Development Services`}
        description={tech.heroDescription}
        badge={tech.category}
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Technologies", path: "/technology" },
          { label: tech.name, path: canonicalUrl },
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
      <section className="section-padding bg-background">
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
                <Cpu size={14} />
                <span>Tech Stack Engineering</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight text-foreground">
                Enterprise <span className="gradient-text">{tech.name}</span> Development Company
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                {tech.overview}
              </p>
              <div className="pt-2">
                <Button variant="hero" size="lg" asChild>
                  <Link href="/request-quote" className="gap-2">
                    Talk to a {tech.name} Specialist <ArrowRight size={16} />
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Benefits Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-6 sm:p-8 rounded-3xl bg-card/60 border border-border/80 shadow-xl space-y-4 backdrop-blur-xl"
            >
              <h3 className="font-display font-extrabold text-xl mb-4 flex items-center gap-2 text-foreground">
                <Code2 size={20} className="text-primary" /> Key Technical Advantages
              </h3>
              <ul className="space-y-3">
                {tech.benefits.map((b, i) => (
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
      {tech.aiOverview && (
        <section className="section-padding bg-card/60 border-y border-border/60 relative">
          <div className="container-wide space-y-8">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary">
                <Cpu size={14} /> AI & LLM Search Insights
              </div>
              <h2 className="font-display text-3xl font-extrabold text-foreground">
                {tech.name} Technical Specifications & Engineering Insights
              </h2>
              <p className="text-sm text-muted-foreground">
                Factual architecture specifications, security standards, and application use cases for {tech.name} development.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-background border border-border/60 space-y-2">
                <h3 className="font-display text-base font-bold text-foreground flex items-center gap-2">
                  <Sparkles size={16} className="text-primary" /> What is {tech.name} Development?
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {tech.aiOverview.whatIs}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-background border border-border/60 space-y-2">
                <h3 className="font-display text-base font-bold text-foreground flex items-center gap-2">
                  <Building2 size={16} className="text-primary" /> Who Benefits Most?
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {tech.aiOverview.whoNeeds}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-background border border-border/60 space-y-2">
                <h3 className="font-display text-base font-bold text-foreground flex items-center gap-2">
                  <CheckCircle size={16} className="text-primary" /> Core Capabilities
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {tech.aiOverview.capabilities}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-background border border-border/60 space-y-2">
                <h3 className="font-display text-base font-bold text-foreground flex items-center gap-2">
                  <Code size={16} className="text-primary" /> Ecosystem & Integrations
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {tech.aiOverview.technologies}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-background border border-border/60 space-y-2">
                <h3 className="font-display text-base font-bold text-foreground flex items-center gap-2">
                  <Zap size={16} className="text-primary" /> Development Lifecycle
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {tech.aiOverview.processSummary}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-background border border-border/60 space-y-2">
                <h3 className="font-display text-base font-bold text-foreground flex items-center gap-2">
                  <Lock size={16} className="text-primary" /> Security & Scalability
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {tech.aiOverview.securityAndScalability}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Features */}
      <section className="section-padding bg-background border-b border-border/60">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold mb-3 text-foreground">
              Core Engineering Capabilities in {tech.name}
            </h2>
            <p className="text-muted-foreground text-sm">
              We leverage modern architecture standards to build secure, scalable solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tech.features.map((feat, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-card border border-border/70 hover:border-primary/50 transition-all shadow-md group"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Sparkles size={20} />
                </div>
                <h3 className="font-display font-bold text-lg mb-2 text-foreground">{feat}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  Best-in-class implementation adhering to clean code guidelines and automated CI/CD pipelines.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-padding bg-secondary/30 border-b border-border/50">
        <div className="container-wide">
          <div className="text-center mb-10">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground">Ideal Application Use Cases for {tech.name}</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {tech.useCases.map((useCase, i) => (
              <div key={i} className="p-5 rounded-2xl bg-card border border-border/70 text-center font-semibold text-sm text-foreground">
                {useCase}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Feature Highlight */}
      {tech.caseStudy && (
        <section className="section-padding bg-background border-b border-border/60">
          <div className="container-wide">
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-primary/10 via-card to-glow-secondary/10 border border-primary/20 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-3 text-center md:text-left">
                <span className="text-xs font-bold uppercase tracking-wider text-primary flex items-center justify-center md:justify-start gap-1.5">
                  <FileCheck size={14} /> Proven Technology Case Study
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-foreground">{tech.caseStudy.title}</h3>
                <p className="text-muted-foreground text-sm font-medium">{tech.caseStudy.metrics}</p>
              </div>
              <Button variant="hero" size="lg" asChild className="shrink-0">
                <Link href={tech.caseStudy.path || "/portfolio"}>View Portfolio Case Study →</Link>
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
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">{tech.name} Development Questions & Answers</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {tech.faqs.map((faq, i) => (
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

      {/* Three-Layer Internal Linking (Technology -> Service -> Industry) */}
      <section className="py-12 bg-background border-t border-border/40">
        <div className="container-wide space-y-8 max-w-5xl mx-auto">
          {tech.relatedServices && tech.relatedServices.length > 0 && (
            <div>
              <p className="text-xs font-extrabold uppercase tracking-wider text-primary mb-3">1. Related Engineering Services ({tech.name} → Services):</p>
              <div className="flex flex-wrap gap-2.5">
                {tech.relatedServices.map((rs, idx) => (
                  <Link
                    key={idx}
                    href={rs.path}
                    className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-card border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                  >
                    {rs.name}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {tech.relatedIndustries && tech.relatedIndustries.length > 0 && (
            <div>
              <p className="text-xs font-extrabold uppercase tracking-wider text-primary mb-3">2. Target Industry Solutions ({tech.name} → Services → Industries):</p>
              <div className="flex flex-wrap gap-2.5">
                {tech.relatedIndustries.map((ri, idx) => (
                  <Link
                    key={idx}
                    href={ri.path}
                    className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-card border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                  >
                    {ri.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
