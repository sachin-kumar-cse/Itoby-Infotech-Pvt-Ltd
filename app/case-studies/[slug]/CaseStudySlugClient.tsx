"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PageHeroBanner } from "@/components/ui/page-hero-banner";
import { CTASection } from "@/components/sections/CTASection";
import { caseStudiesList } from "@/data/caseStudiesData";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  ArrowRight,
  Sparkles,
  Briefcase,
  Layers,
  Code,
  TrendingUp,
  Clock,
  Lightbulb,
  HelpCircle,
  AlertTriangle,
  Target,
  Zap,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function CaseStudySlugClient({ slug }: { slug: string }) {
  const cs = caseStudiesList.find((c) => c.slug === slug) || caseStudiesList[0];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: cs.title,
    description: cs.heroDescription,
    author: {
      "@type": "Organization",
      name: "Itoby Infotech Pvt. Ltd.",
    },
    publisher: {
      "@type": "Organization",
      name: "Itoby Infotech Pvt. Ltd.",
      url: "https://www.itobyinfotech.com",
    },
    mainEntityOfPage: `https://www.itobyinfotech.com/case-studies/${cs.slug}`,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: cs.faqs.map((f) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <PageHeroBanner
        title={cs.title}
        description={cs.heroDescription}
        badge={cs.badge}
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Case Studies", path: "/case-studies" },
          { label: cs.clientName, path: `/case-studies/${cs.slug}` },
        ]}
      />

      {/* 1. Overview & 2. Client Industry */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary">
                <Briefcase size={14} /> Industry: {cs.clientIndustry}
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight">
                Project Overview & Scope
              </h2>

              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                {cs.overview}
              </p>

              {/* 11. Results Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                {cs.results.map((res, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-card border border-border/60 text-center shadow-sm">
                    <span className="font-display font-black text-2xl text-primary block mb-1">
                      {res.metric}
                    </span>
                    <span className="text-xs font-semibold text-muted-foreground">
                      {res.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 p-8 rounded-3xl bg-card border border-border/80 shadow-xl space-y-6">
              <div className="border-b border-border/50 pb-4">
                <span className="text-xs font-bold uppercase text-primary tracking-wider">Client Organization</span>
                <p className="font-display text-xl font-bold text-foreground mt-1">{cs.clientName}</p>
              </div>

              <div className="border-b border-border/50 pb-4">
                <span className="text-xs font-bold uppercase text-primary tracking-wider flex items-center gap-1.5">
                  <Clock size={14} /> 10. Development Timeline
                </span>
                <p className="text-xs font-medium text-muted-foreground mt-1">{cs.developmentTimeline}</p>
              </div>

              <div>
                <span className="text-xs font-bold uppercase text-primary tracking-wider flex items-center gap-1.5">
                  <Code size={14} /> 7. Technologies Used
                </span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {cs.technologiesUsed.map((t, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-lg bg-secondary text-xs font-semibold text-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Business Challenge & 4. Existing Problems */}
      <section className="section-padding bg-secondary/30 border-y border-border/50">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="p-8 rounded-3xl bg-card border border-border/60 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-destructive/10 text-destructive text-xs font-bold">
                <AlertTriangle size={14} /> 3. Business Challenge
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground">Core Problem Statement</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{cs.businessChallenge}</p>

              <div className="pt-4 space-y-2">
                <p className="text-xs font-bold text-foreground uppercase tracking-wider">4. Existing Operational Bottlenecks:</p>
                <ul className="space-y-2">
                  {cs.existingProblems.map((prob, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-destructive mt-1.5 shrink-0" />
                      <span>{prob}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 5. Objectives & 6. Solution Delivered */}
            <div className="p-8 rounded-3xl bg-card border border-border/60 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold">
                <Target size={14} /> 5. Core Objectives
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground">6. Solution Delivered</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{cs.solutionDelivered}</p>

              <div className="pt-4 space-y-2">
                <p className="text-xs font-bold text-foreground uppercase tracking-wider">Target Key Objectives:</p>
                <ul className="space-y-2">
                  {cs.objectives.map((obj, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                      <CheckCircle size={14} className="text-primary shrink-0 mt-0.5" />
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Features Developed & 9. Architecture Overview */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary">
                <Zap size={14} /> 8. Engineering Deliverables
              </div>
              <h3 className="font-display text-3xl font-extrabold">Key Features Developed</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {cs.featuresDeveloped.map((feat, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-card border border-border/50 flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-xs font-semibold text-foreground">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 p-8 rounded-3xl bg-card border border-border/80 space-y-4">
              <h3 className="font-display text-xl font-bold text-foreground flex items-center gap-2">
                <Layers className="text-primary" size={20} /> 9. Architecture Overview
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{cs.architectureOverview}</p>

              {/* 12. Performance Improvements */}
              <div className="pt-4 border-t border-border/50">
                <p className="text-xs font-bold text-foreground uppercase tracking-wider mb-3">12. Performance & Speed Ratings:</p>
                <div className="grid grid-cols-2 gap-3">
                  {cs.performanceImprovements.map((perf, i) => (
                    <div key={i} className="p-3 rounded-xl bg-secondary/50 text-center">
                      <span className="font-display font-bold text-sm text-primary block">{perf.metric}</span>
                      <span className="text-[10px] text-muted-foreground">{perf.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. Business Outcomes & 15. Lessons Learned */}
      <section className="section-padding bg-secondary/30 border-y border-border/50">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="p-8 rounded-3xl bg-card border border-border/60 space-y-4">
              <h3 className="font-display text-2xl font-bold text-foreground flex items-center gap-2">
                <TrendingUp className="text-primary" size={24} /> 13. Business Outcomes
              </h3>
              <ul className="space-y-3">
                {cs.businessOutcomes.map((out, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>{out}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-card border border-border/60 space-y-4">
              <h3 className="font-display text-2xl font-bold text-foreground flex items-center gap-2">
                <Lightbulb className="text-primary" size={24} /> 15. Lessons Learned & Best Practices
              </h3>
              <ul className="space-y-3">
                {cs.lessonsLearned.map((les, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
                    <span>{les}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 16. Related Services, 17. Tech, 19. Products Internal Links */}
      <section className="py-12 bg-background">
        <div className="container-wide space-y-6">
          <div className="flex flex-wrap gap-4">
            <div className="space-y-2">
              <p className="text-[11px] font-extrabold uppercase text-primary tracking-wider">16. Related Services:</p>
              <div className="flex flex-wrap gap-2">
                {cs.relatedServices.map((rs, idx) => (
                  <Link key={idx} href={rs.path} className="px-3 py-1.5 rounded-xl bg-card border border-border/60 text-xs font-semibold text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                    {rs.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-[11px] font-extrabold uppercase text-primary tracking-wider">17. Related Technologies:</p>
              <div className="flex flex-wrap gap-2">
                {cs.relatedTechnologies.map((rt, idx) => (
                  <Link key={idx} href={rt.path} className="px-3 py-1.5 rounded-xl bg-card border border-border/60 text-xs font-semibold text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                    {rt.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-[11px] font-extrabold uppercase text-primary tracking-wider">19. Related SaaS Products:</p>
              <div className="flex flex-wrap gap-2">
                {cs.relatedProducts.map((rp, idx) => (
                  <Link key={idx} href={rp.path} className="px-3 py-1.5 rounded-xl bg-primary/10 border border-primary/20 text-xs font-bold text-primary hover:bg-primary/20 transition-colors">
                    {rp.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
