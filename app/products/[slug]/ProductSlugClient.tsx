"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PageHeroBanner } from "@/components/ui/page-hero-banner";
import { CTASection } from "@/components/sections/CTASection";
import { productsList } from "@/data/productsData";
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
  ExternalLink,
  Users,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ProductSlugClient({ slug }: { slug: string }) {
  const product = productsList.find((p) => p.slug === slug) || productsList[0];

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: product.name,
    operatingSystem: "Web Browser",
    applicationCategory: `${product.category}Application`,
    url: product.externalUrl || `https://www.itobyinfotech.com/products/${product.slug}`,
    description: product.heroDescription,
    provider: {
      "@type": "Organization",
      name: "Itoby Infotech Pvt. Ltd.",
      url: "https://www.itobyinfotech.com",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: product.faqs.map((f) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <PageHeroBanner
        title={product.name}
        description={product.heroDescription}
        badge={product.badge}
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Products", path: "/products" },
          { label: product.name, path: `/products/${product.slug}` },
        ]}
      />

      {/* Product Overview & Primary Benefits */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary">
                <Sparkles size={14} /> What is {product.name}?
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
                {product.tagline}
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                {product.overview}
              </p>

              <div className="p-4 rounded-2xl bg-secondary/50 border border-border/60">
                <p className="text-xs font-bold text-foreground mb-1 flex items-center gap-1.5">
                  <Users size={14} className="text-primary" /> Target Audience:
                </p>
                <p className="text-xs text-muted-foreground">{product.targetAudience}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {product.benefits.map((benefit, idx) => (
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
                <Layers className="text-primary" size={20} /> Key Features
              </h3>
              <ul className="space-y-3">
                {product.keyFeatures.map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-xs sm:text-sm text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>
              <div className="space-y-3 pt-2">
                {product.externalUrl && (
                  <Button className="w-full gap-2 shadow-lg hover:shadow-primary/25" asChild size="lg">
                    <a href={product.externalUrl} target="_blank" rel="noopener noreferrer">
                      Launch Product Demo <ExternalLink size={16} />
                    </a>
                  </Button>
                )}
                <Button variant="outline" className="w-full gap-2" asChild size="lg">
                  <Link href="/request-quote">
                    Talk to SaaS Sales <ArrowRight size={16} />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      {product.howItWorks && product.howItWorks.length > 0 && (
        <section className="section-padding bg-secondary/30 border-y border-border/50">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary">
                <Zap size={14} /> Workflow Steps
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight">
                How {product.name} Drives Business Results
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {product.howItWorks.map((step, idx) => (
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

      {/* Tech Stack & Target Industries */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="p-8 rounded-3xl bg-card border border-border/60 space-y-6">
              <h3 className="font-display text-2xl font-bold flex items-center gap-2 text-foreground">
                <Code className="text-primary" size={24} /> Engine Architecture Stack
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {product.techStack.map((tech, idx) => (
                  <span key={idx} className="px-3.5 py-2 rounded-xl bg-secondary border border-border/40 text-xs font-semibold text-foreground">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-card border border-border/60 space-y-6">
              <h3 className="font-display text-2xl font-bold flex items-center gap-2 text-foreground">
                <ShieldCheck className="text-primary" size={24} /> Primary Target Industries
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {product.targetIndustries.map((ind, idx) => (
                  <span key={idx} className="px-3.5 py-2 rounded-xl bg-primary/10 border border-primary/20 text-xs font-bold text-primary">
                    {ind}
                  </span>
                ))}
              </div>
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
            <h2 className="font-display text-3xl font-extrabold">Product Details & Pricing FAQs</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {product.faqs.map((faq, idx) => (
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

      {/* Related Products Internal Links */}
      <section className="py-12 bg-background border-t border-border/40">
        <div className="container-wide">
          <p className="text-xs font-extrabold uppercase tracking-wider text-primary mb-4">Related Proprietary SaaS Suite:</p>
          <div className="flex flex-wrap gap-3">
            {productsList.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold border transition-colors ${
                  p.slug === product.slug
                    ? "bg-primary/20 border-primary text-primary"
                    : "bg-card border-border/60 text-muted-foreground hover:text-primary hover:bg-secondary"
                }`}
              >
                {p.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
