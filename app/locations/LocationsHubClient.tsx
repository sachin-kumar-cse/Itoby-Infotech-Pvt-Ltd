"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PageHeroBanner } from "@/components/ui/page-hero-banner";
import { locationsList } from "@/data/locationsData";
import { MapPin, ArrowRight } from "lucide-react";

export default function LocationsHubClient() {
  return (
    <>
      <PageHeroBanner
        badge="Global Delivery Hubs"
        title="Regional Tech Hubs & Client Locations"
        description="Localized web development and software engineering teams serving enterprises across Noida, Delhi NCR, Bangalore, and Dubai UAE."
        breadcrumbs={[{ label: "Locations", path: "/locations" }]}
      />

      <section className="py-20 bg-background">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {locationsList.map((loc, idx) => (
              <motion.div
                key={`${loc.citySlug}-${loc.serviceSlug}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <Link
                  href={`/locations/${loc.citySlug}/${loc.serviceSlug}`}
                  className="group block p-6 rounded-3xl bg-card/50 backdrop-blur-xl border border-border/50 hover:border-primary/50 transition-all duration-300 h-full flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                      <MapPin size={24} />
                    </div>
                    <h2 className="font-display font-bold text-xl mb-1 group-hover:text-primary transition-colors">
                      {loc.cityName}
                    </h2>
                    <span className="inline-block text-xs font-semibold text-primary mb-3">
                      {loc.serviceName}
                    </span>
                    <p className="text-muted-foreground text-xs line-clamp-3 mb-4 leading-relaxed">
                      {loc.heroDescription}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-border/40 flex items-center justify-between text-xs font-bold text-primary">
                    <span>View Location Hub</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
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
