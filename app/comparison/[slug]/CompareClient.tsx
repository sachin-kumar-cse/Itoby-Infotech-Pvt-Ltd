"use client";

import { motion } from "framer-motion";
import { PageHeroBanner } from "@/components/ui/page-hero-banner";
import { CTASection } from "@/components/sections/CTASection";
import { ComparisonData } from "@/data/comparisonData";
import { Scale, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Props {
  comparison: ComparisonData;
}

export default function CompareClient({ comparison }: Props) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: comparison.faqs.map((f) => ({
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
        title={comparison.title}
        description={comparison.heroDescription}
        badge="Technology Comparison"
        breadcrumbs={[
          { label: "Services", path: "/services" },
          { label: "Comparisons", path: "/comparison" },
          { label: comparison.title },
        ]}
      />

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-3">
              <Scale size={14} />
              <span>Architectural Trade-Off Analysis</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold">
              <span className="gradient-text">{comparison.itemA}</span> vs <span className="gradient-text">{comparison.itemB}</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base mt-3 leading-relaxed">
              {comparison.overview}
            </p>
          </div>

          {/* Comparison Matrix Table */}
          <div className="rounded-3xl bg-card border border-border/80 overflow-hidden shadow-xl mb-12">
            <div className="grid grid-cols-3 bg-secondary/80 p-4 sm:p-6 font-display font-extrabold text-sm sm:text-base border-b border-border/80">
              <div>Feature / Parameter</div>
              <div className="text-primary">{comparison.itemA}</div>
              <div className="text-foreground/80">{comparison.itemB}</div>
            </div>
            <div className="divide-y divide-border/60">
              {comparison.comparisonMatrix.map((row, i) => (
                <div key={i} className="grid grid-cols-3 p-4 sm:p-6 text-xs sm:text-sm font-medium items-center">
                  <div className="font-bold text-foreground">{row.feature}</div>
                  <div className="text-primary font-semibold flex items-center gap-1.5">
                    <CheckCircle2 size={16} className="shrink-0" />
                    <span>{row.itemAVal}</span>
                  </div>
                  <div className="text-muted-foreground">{row.itemBVal}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Expert Recommendation Box */}
          <div className="p-8 rounded-3xl bg-gradient-to-r from-primary/10 via-card to-glow-secondary/10 border border-primary/20 shadow-xl max-w-4xl mx-auto backdrop-blur-xl">
            <h3 className="font-display font-extrabold text-xl mb-2 flex items-center gap-2">
              <Sparkles size={20} className="text-primary" /> Engineering Leadership Recommendation
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">{comparison.recommendation}</p>
            <Button variant="hero" size="lg" asChild>
              <Link href="/request-quote" className="gap-2">
                Consult Our Technical Architects <ArrowRight size={16} />
              </Link>
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
            {comparison.faqs.map((faq, i) => (
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
