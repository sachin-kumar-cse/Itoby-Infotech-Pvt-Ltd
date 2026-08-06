"use client";

import { motion } from "framer-motion";
import { PageHeroBanner } from "@/components/ui/page-hero-banner";
import { CTASection } from "@/components/sections/CTASection";
import { PricingGuideData } from "@/data/pricingData";
import { CheckCircle, ArrowRight, DollarSign, ShieldCheck, Sparkles, HelpCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Props {
  guide: PricingGuideData;
}

export default function PricingClient({ guide }: Props) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: guide.faqs.map((f) => ({
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
        title={guide.title}
        description={guide.heroDescription}
        badge={guide.serviceCategory}
        breadcrumbs={[
          { label: "Services", path: "/services" },
          { label: "Pricing Guides", path: "/pricing" },
          { label: guide.title },
        ]}
      />

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-3">
              <DollarSign size={14} />
              <span>Transparent Project Estimates</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold">
              Cost & Pricing Breakdown for <span className="gradient-text">{guide.title}</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base mt-3 leading-relaxed">
              {guide.overview}
            </p>
          </div>

          {/* Pricing Tiers Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {guide.costBreakdown.map((item, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl bg-card border border-border/80 hover:border-primary/50 transition-all shadow-xl flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-2">{item.tier}</span>
                  <div className="font-display text-2xl sm:text-3xl font-extrabold mb-4 gradient-text">{item.estimate}</div>
                  <p className="text-muted-foreground text-xs leading-relaxed">{item.scope}</p>
                </div>
                <div className="pt-6 border-t border-border/60 mt-6">
                  <Button variant="hero" size="sm" className="w-full" asChild>
                    <Link href="/request-quote">Get Custom Proposal</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Cost Drivers */}
          <div className="p-8 rounded-3xl bg-card/60 border border-border/80 shadow-xl max-w-4xl mx-auto backdrop-blur-xl">
            <h3 className="font-display font-extrabold text-xl mb-4 flex items-center gap-2">
              <ShieldCheck size={20} className="text-primary" /> Key Cost Impact Factors
            </h3>
            <ul className="grid sm:grid-cols-2 gap-3">
              {guide.factors.map((factor, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90 font-medium">
                  <CheckCircle size={16} className="text-primary shrink-0 mt-0.5" />
                  <span>{factor}</span>
                </li>
              ))}
            </ul>
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
            {guide.faqs.map((faq, i) => (
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

      <CTASection />
    </>
  );
}
