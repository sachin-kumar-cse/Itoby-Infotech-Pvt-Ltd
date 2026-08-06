"use client";

import { motion } from "framer-motion";
import { PageHeroBanner } from "@/components/ui/page-hero-banner";
import { CTASection } from "@/components/sections/CTASection";
import { LocationServiceData } from "@/data/locationsData";
import { CheckCircle, ArrowRight, MapPin, Building2, Sparkles, Zap } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Props {
  data: LocationServiceData;
}

export default function LocationClient({ data }: Props) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `Itoby Infotech Pvt. Ltd. - ${data.cityName}`,
    image: "https://storage.googleapis.com/gpt-engineer-file-uploads/NuIqdmrGTlSdYJak86UeamHtiDq1/uploads/1768299997879-logo.png",
    "@id": `https://itobyinfotech.com/locations/${data.citySlug}/${data.serviceSlug}`,
    url: `https://itobyinfotech.com/locations/${data.citySlug}/${data.serviceSlug}`,
    telephone: "+91-91427-73500",
    address: {
      "@type": "PostalAddress",
      addressLocality: data.cityName,
      addressRegion: data.region,
      addressCountry: data.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.58,
      longitude: 77.33,
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: data.title,
    serviceType: data.serviceName,
    provider: {
      "@type": "Organization",
      name: "Itoby Infotech Pvt. Ltd.",
      url: "https://itobyinfotech.com",
    },
    areaServed: data.cityName,
    description: data.heroDescription,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((f) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Banner */}
      <PageHeroBanner
        title={data.title}
        description={data.heroDescription}
        badge={`Serving ${data.cityName}, ${data.country}`}
        breadcrumbs={[
          { label: "Services", path: "/services" },
          { label: "Locations", path: "/locations" },
          { label: data.cityName },
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
                <MapPin size={14} />
                <span>Regional Engineering Hub</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                Top-Rated <span className="gradient-text">{data.serviceName}</span> Services in {data.cityName}
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                {data.overview}
              </p>
              <div className="pt-2">
                <Button variant="hero" size="lg" asChild>
                  <Link href="/contact" className="gap-2">
                    Book {data.cityName} Strategy Call <ArrowRight size={16} />
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Benefits List */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-6 sm:p-8 rounded-3xl bg-card/60 border border-border/80 shadow-xl space-y-4 backdrop-blur-xl"
            >
              <h3 className="font-display font-extrabold text-xl mb-4 flex items-center gap-2">
                <Zap size={20} className="text-primary" /> Local Advantages & Value
              </h3>
              <ul className="space-y-3">
                {data.benefits.map((b, i) => (
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
              Full-Stack Capabilities for {data.cityName} Businesses
            </h2>
            <p className="text-muted-foreground text-sm">
              Delivering high-performance software tailored for local market competitiveness.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.features.map((feat, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-card border border-border/70 hover:border-primary/50 transition-all shadow-md group"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Sparkles size={20} />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{feat}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  Enterprise-grade execution tailored to meet regional compliance, fast load times, and conversion targets.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section-padding bg-background">
        <div className="container-wide text-center">
          <h3 className="font-display text-xl sm:text-2xl font-bold mb-6">
            Tech Stack powering {data.cityName} Projects
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
            {data.techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-xl bg-secondary/80 border border-border text-xs sm:text-sm font-semibold text-foreground hover:border-primary/50 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-card/30">
        <div className="container-wide max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl sm:text-3xl font-bold">Frequently Asked Questions ({data.cityName})</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {data.faqs.map((faq, i) => (
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
