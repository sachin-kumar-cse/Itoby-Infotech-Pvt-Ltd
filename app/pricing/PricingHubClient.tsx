"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PageHeroBanner } from "@/components/ui/page-hero-banner";
import { pricingGuidesList } from "@/data/pricingData";
import { DollarSign, ArrowRight } from "lucide-react";

export default function PricingHubClient() {
  return (
    <>
      <PageHeroBanner
        badge="Transparent Investment Estimates"
        title="Development Cost & Pricing Guides"
        description="Detailed cost breakdowns, hourly rate benchmarks, and budget estimation models for web design and enterprise software."
        breadcrumbs={[{ label: "Pricing", path: "/pricing" }]}
      />

      <section className="py-20 bg-background">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pricingGuidesList.map((guide, idx) => (
              <motion.div
                key={guide.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link
                  href={`/pricing/${guide.slug}`}
                  className="group block p-8 rounded-3xl bg-card/50 backdrop-blur-xl border border-border/50 hover:border-primary/50 transition-all duration-300 h-full flex flex-col justify-between"
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                      <DollarSign size={28} />
                    </div>
                    <h2 className="font-display font-bold text-2xl mb-3 group-hover:text-primary transition-colors">
                      {guide.title}
                    </h2>
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-6 leading-relaxed">
                      {guide.heroDescription}
                    </p>
                  </div>
                  <div className="pt-6 border-t border-border/40 flex items-center justify-between text-sm font-bold text-primary">
                    <span>View Cost Breakdown</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
