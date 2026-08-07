"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { PageHeroBanner } from "@/components/ui/page-hero-banner";
import { CTASection } from "@/components/sections/CTASection";
import { caseStudiesList } from "@/data/caseStudiesData";
import { Button } from "@/components/ui/button";
import {
  Sparkles,
  ArrowRight,
  Search,
  CheckCircle,
  Briefcase,
  Layers,
  Code,
  TrendingUp,
} from "lucide-react";
import { Input } from "@/components/ui/input";

export default function CaseStudiesHubClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("All");

  const industries = ["All", ...Array.from(new Set(caseStudiesList.map((cs) => cs.clientIndustry)))];

  const filteredCaseStudies = caseStudiesList.filter((cs) => {
    const matchesSearch =
      cs.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cs.overview.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cs.technologiesUsed.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesIndustry = selectedIndustry === "All" || cs.clientIndustry === selectedIndustry;

    return matchesSearch && matchesIndustry;
  });

  const hubSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: caseStudiesList.map((cs, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: cs.title,
      url: `https://itobyinfotech.com/case-studies/${cs.slug}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hubSchema) }}
      />

      <PageHeroBanner
        title="Client Case Studies & Technical Impact"
        description="Discover how Itoby Infotech engineers high-performance SaaS applications, AI voice agents, custom CRMs, and enterprise portals that drive measurable business outcomes."
        badge="Proven Results & EEAT Case Studies"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Case Studies", path: "/case-studies" },
        ]}
      />

      {/* Filter & Search Bar */}
      <section className="py-8 bg-background border-b border-border/50">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <Input
                type="text"
                placeholder="Search case studies or technologies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 rounded-2xl bg-card border-border/70"
              />
            </div>

            {/* Industry Filter Buttons */}
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              {industries.map((ind) => (
                <button
                  key={ind}
                  onClick={() => setSelectedIndustry(ind)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-colors border ${
                    selectedIndustry === ind
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-card text-muted-foreground border-border/60 hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {ind}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredCaseStudies.map((cs, idx) => (
              <motion.div
                key={cs.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-card border border-border/80 hover:border-primary/50 transition-all shadow-lg flex flex-col justify-between group"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold uppercase px-3 py-1 rounded-full bg-primary/15 text-primary border border-primary/20">
                      {cs.badge}
                    </span>
                    <span className="text-xs font-semibold text-muted-foreground flex items-center gap-1.5">
                      <Briefcase size={13} className="text-primary" /> {cs.clientIndustry}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                    {cs.title}
                  </h3>

                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {cs.heroDescription}
                  </p>

                  {/* Results Metrics Highlights */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-secondary/30 border border-border/50">
                    {cs.results.map((res, i) => (
                      <div key={i} className="text-center">
                        <span className="font-display font-black text-lg text-primary block">
                          {res.metric}
                        </span>
                        <span className="text-[10px] font-semibold text-muted-foreground leading-none">
                          {res.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="space-y-2">
                    <p className="text-[11px] font-bold text-foreground uppercase tracking-wider">Tech Stack:</p>
                    <div className="flex flex-wrap gap-2">
                      {cs.technologiesUsed.map((t, i) => (
                        <span key={i} className="px-2.5 py-1 rounded-lg bg-secondary text-[11px] font-medium text-foreground">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-border/50">
                  <Button className="w-full gap-2 font-bold rounded-xl" asChild>
                    <Link href={`/case-studies/${cs.slug}`}>
                      Read Full Case Study <ArrowRight size={14} />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
