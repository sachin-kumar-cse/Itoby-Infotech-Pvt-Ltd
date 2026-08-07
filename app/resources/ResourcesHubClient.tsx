"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PageHeroBanner } from "@/components/ui/page-hero-banner";
import { resourcesList } from "@/data/resourcesData";
import { FileText, ArrowRight } from "lucide-react";

export default function ResourcesHubClient() {
  return (
    <>
      <PageHeroBanner
        badge="Developer & Enterprise Toolkits"
        title="Technical Resources & Developer Guides"
        description="Actionable SEO audit checklists, web development glossaries, and architectural frameworks curated by IIPL engineering leads."
        breadcrumbs={[{ label: "Resources", path: "/resources" }]}
      />

      <section className="py-20 bg-background">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {resourcesList.map((item, idx) => (
              <motion.div
                key={item.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link
                  href={`/resources/${item.slug}`}
                  className="group block p-8 rounded-3xl bg-card/50 backdrop-blur-xl border border-border/50 hover:border-primary/50 transition-all duration-300 h-full flex flex-col justify-between"
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                      <FileText size={28} />
                    </div>
                    <h2 className="font-display font-bold text-2xl mb-3 group-hover:text-primary transition-colors">
                      {item.title}
                    </h2>
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-6 leading-relaxed">
                      {item.heroDescription}
                    </p>
                  </div>
                  <div className="pt-6 border-t border-border/40 flex items-center justify-between text-sm font-bold text-primary">
                    <span>Access Resource</span>
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
