"use client";

import { motion } from "framer-motion";
import { PageHeroBanner } from "@/components/ui/page-hero-banner";
import { CTASection } from "@/components/sections/CTASection";
import { TechnologyData } from "@/data/technologyData";
import { CheckCircle, ArrowRight, Code2, Cpu, Sparkles, Layers } from "lucide-react";
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
  const techSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${tech.name} Development Services`,
    serviceType: `${tech.category} Engineering`,
    provider: {
      "@type": "Organization",
      name: "Itoby Infotech Pvt. Ltd.",
      url: "https://itobyinfotech.com",
    },
    areaServed: ["US", "CA", "AU", "GB", "AE", "IN"],
    description: tech.heroDescription,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(techSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Banner */}
      <PageHeroBanner
        title={`${tech.name} Development Services`}
        description={tech.heroDescription}
        badge={tech.category}
        breadcrumbs={[
          { label: "Services", path: "/services" },
          { label: "Technologies", path: "/technology" },
          { label: tech.name },
        ]}
      />

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
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold">
                <Cpu size={14} />
                <span>Tech Stack Engineering</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
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
              <h3 className="font-display font-extrabold text-xl mb-4 flex items-center gap-2">
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

      {/* Features */}
      <section className="section-padding bg-card/30 border-y border-border/60">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold mb-3">
              Core Capabilities in {tech.name}
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
                <h3 className="font-display font-bold text-lg mb-2">{feat}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  Best-in-class implementation adhering to clean code guidelines and automated CI/CD pipelines.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-10">
            <h3 className="font-display text-xl sm:text-2xl font-bold">Ideal Use Cases for {tech.name}</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {tech.useCases.map((useCase, i) => (
              <div key={i} className="p-5 rounded-2xl bg-secondary/60 border border-border/70 text-center font-semibold text-sm">
                {useCase}
              </div>
            ))}
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
            {tech.faqs.map((faq, i) => (
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

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
