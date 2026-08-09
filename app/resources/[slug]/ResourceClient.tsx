"use client";

import { motion } from "framer-motion";
import { PageHeroBanner } from "@/components/ui/page-hero-banner";
import { CTASection } from "@/components/sections/CTASection";
import { ResourceData } from "@/data/resourcesData";
import { BookOpen, CheckCircle, ArrowRight, Download, Sparkles, FileText } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Props {
  resource: ResourceData;
}

export default function ResourceClient({ resource }: Props) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: resource.faqs.map((f) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <PageHeroBanner
        title={resource.title}
        description={resource.heroDescription}
        badge={`Engineering ${resource.category}`}
        breadcrumbs={[
          { label: "Services", path: "/services" },
          { label: "Resources", path: "/resources" },
          { label: resource.title },
        ]}
      />

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-3">
              <BookOpen size={14} />
              <span>Authority Content Hub</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold">
              {resource.title}
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base mt-3 leading-relaxed">
              {resource.overview}
            </p>
          </div>

          {/* Checklist / Resource Items Grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
            {resource.items.map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-card border border-border/80 hover:border-primary/50 transition-all shadow-lg space-y-2"
              >
                <div className="flex items-center gap-2.5 font-display font-bold text-base text-primary">
                  <CheckCircle size={18} className="shrink-0" />
                  <span>{item.key}</span>
                </div>
                <p className="text-muted-foreground text-xs leading-relaxed pl-7">{item.detail}</p>
              </div>
            ))}
          </div>

          {/* Download / Consultation Box */}
          <div className="p-8 rounded-3xl bg-card/60 border border-border/80 shadow-xl max-w-3xl mx-auto text-center space-y-4 backdrop-blur-xl">
            <h3 className="font-display font-extrabold text-xl">Need a Custom Technical Audit or Consultation?</h3>
            <p className="text-muted-foreground text-xs sm:text-sm max-w-xl mx-auto">
              Our engineering leads conduct end-to-end site architecture, Core Web Vitals, and security audits for high-growth enterprises.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link href="/request-quote">Request Technical Audit</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-card/30">
        <div className="container-wide max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl sm:text-3xl font-bold">Frequently Asked Questions</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {resource.faqs.map((faq, i) => (
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

      {/* Related Deep-Dive Articles & Checklists */}
      <section className="py-10 bg-background border-t border-border/40">
        <div className="container-wide max-w-5xl space-y-4">
          <p className="text-xs font-bold uppercase tracking-wider text-primary">Related Engineering Guides & Web Tools:</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            {resource.slug === "technical-seo-checklist-2026" && (
              <Link href="/blog/mastering-ai-seo-geo-generative-engine-optimization" className="p-3.5 rounded-xl bg-card border border-border/60 hover:border-primary text-foreground hover:text-primary transition-all font-medium">
                → Read our playbook on mastering AI SEO and Generative Engine Optimization (GEO) in 2026
              </Link>
            )}
            {resource.slug === "software-development-checklist" && (
              <Link href="/blog/top-10-web-architecture-patterns-enterprise-saas" className="p-3.5 rounded-xl bg-card border border-border/60 hover:border-primary text-foreground hover:text-primary transition-all font-medium">
                → Learn top 10 enterprise SaaS web architecture patterns
              </Link>
            )}
            {resource.slug === "website-launch-checklist" && (
              <Link href="/blog/nextjs-15-app-router-performance-optimization-2026" className="p-3.5 rounded-xl bg-card border border-border/60 hover:border-primary text-foreground hover:text-primary transition-all font-medium">
                → Next.js 15 App Router performance optimization guide
              </Link>
            )}
            <Link href="/services/mobile-app-development" className="p-3.5 rounded-xl bg-card border border-border/60 hover:border-primary text-foreground hover:text-primary transition-all font-medium">
              → Discover cross-platform Mobile App Development Services
            </Link>
            <Link href="/install" className="p-3.5 rounded-xl bg-card border border-border/60 hover:border-primary text-foreground hover:text-primary transition-all font-medium">
              → Install Progressive Web App (PWA) on your mobile or desktop device
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
