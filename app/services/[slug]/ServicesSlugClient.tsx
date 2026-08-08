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
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ServicesSlugClient({ slug }: { slug: string }) {
  const service = detailedServicesList.find((s) => s.slug === slug) || detailedServicesList[0];

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
      url: "https://itobyinfotech.com",
    },
    serviceType: service.heroBadge,
    description: service.heroDescription,
    areaServed: ["US", "CA", "AU", "IN", "GB", "AE"],
  };

  return (
    <>
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
                Engineering High-Performance Solutions for Global Businesses
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
                <Layers className="text-primary" size={20} /> Feature Highlights
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

      {/* Development Process */}
      {service.process && service.process.length > 0 && (
        <section className="section-padding bg-secondary/30 border-y border-border/50">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary">
                <Zap size={14} /> Process Lifecycle
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight">
                Our Agile Software Delivery Process
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                <Code className="text-primary" size={24} /> Technologies Used
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
                <ShieldCheck className="text-primary" size={24} /> Primary Use Cases
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

      {/* FAQs */}
      <section className="section-padding bg-secondary/20 border-t border-border/50">
        <div className="container-wide max-w-4xl">
          <div className="text-center mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary">
              <HelpCircle size={14} /> Frequently Asked Questions
            </div>
            <h2 className="font-display text-3xl font-extrabold">Common Inquiries</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {service.faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border border-border/60 rounded-2xl bg-card px-6 py-2">
                <AccordionTrigger className="font-display text-base font-bold hover:no-underline">
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

      {/* Related Services Internal Links */}
      <section className="py-12 bg-background border-t border-border/40">
        <div className="container-wide space-y-6">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-wider text-primary mb-3">Related Technology & Service Clusters:</p>
            <div className="flex flex-wrap gap-2.5">
              <Link href="/services/custom-software-development" className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-card border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors">
                Custom Software Development
              </Link>
              <Link href="/services/ai-agent-development" className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-card border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors">
                Autonomous AI Agents
              </Link>
              <Link href="/services/ai-chatbot-development" className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-card border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors">
                24/7 AI Conversational Chatbots
              </Link>
              <Link href="/services/saas-development-company" className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-card border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors">
                SaaS Application Development
              </Link>
              <Link href="/technology/openai-integration" className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-card border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors">
                OpenAI API Solutions
              </Link>
              <Link href="/technology/python" className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-card border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors">
                Python AI Engineering
              </Link>
              <Link href="/technology/ai-automation" className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-card border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors">
                AI Automation Infrastructure
              </Link>
              <Link href="/technology/supabase-development" className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-card border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors">
                Pgvector & Supabase
              </Link>
              <Link href="/comparison/ai-chatbot-vs-ai-agent" className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-primary/10 border border-primary/30 text-primary font-bold hover:bg-primary/20 transition-colors">
                AI Chatbot vs AI Agent Comparison
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
