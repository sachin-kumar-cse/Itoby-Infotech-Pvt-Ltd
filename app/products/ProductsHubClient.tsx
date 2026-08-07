"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PageHeroBanner } from "@/components/ui/page-hero-banner";
import { CTASection } from "@/components/sections/CTASection";
import { productsList } from "@/data/productsData";
import { Button } from "@/components/ui/button";
import {
  Sparkles,
  ArrowRight,
  ExternalLink,
  Bot,
  Zap,
  CheckCircle,
  Code,
  HelpCircle,
  Layers,
  ShieldCheck,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ProductsHubClient() {
  const productsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: productsList.map((prod, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: prod.name,
      url: `https://itobyinfotech.com/products/${prod.slug}`,
    })),
  };

  const categories = Array.from(new Set(productsList.map((p) => p.category)));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productsSchema) }}
      />

      <PageHeroBanner
        title="Proprietary SaaS Products & AI Platforms"
        description="Discover enterprise-grade B2B SaaS software, AI lead generation tools, proptech CRMs, GST invoicing platforms, and autonomous voice calling agents built in our engineering lab."
        badge="Enterprise SaaS Software Lab"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Products", path: "/products" },
        ]}
      />

      {/* Featured Products Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary">
              <Sparkles size={14} /> SaaS Ecosystem
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight">
              Featured Software Products & Platforms
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              Tailored SaaS products engineered for high scalability, 100/100 Core Web Vitals performance, and immediate ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productsList.map((prod, idx) => (
              <motion.div
                key={prod.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-card border border-border/80 hover:border-primary/50 transition-all shadow-lg flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-primary/15 text-primary border border-primary/20">
                      {prod.badge}
                    </span>
                    <span className="text-xs font-semibold text-muted-foreground">
                      {prod.category}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {prod.name}
                  </h3>

                  <p className="text-xs font-semibold text-primary/90">
                    {prod.tagline}
                  </p>

                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {prod.overview}
                  </p>

                  <div className="pt-2 space-y-2">
                    <p className="text-[11px] font-bold text-foreground uppercase tracking-wider">Key Capabilities:</p>
                    <ul className="space-y-1.5">
                      {prod.keyFeatures.slice(0, 3).map((kf, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <CheckCircle size={13} className="text-primary shrink-0" />
                          <span>{kf}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-border/50 flex items-center justify-between gap-3">
                  <Button variant="outline" size="sm" className="w-full text-xs font-bold rounded-xl gap-1.5" asChild>
                    <Link href={`/products/${prod.slug}`}>
                      Explore Product <ArrowRight size={13} />
                    </Link>
                  </Button>
                  {prod.externalUrl && (
                    <Button variant="ghost" size="sm" className="text-xs font-bold gap-1 rounded-xl" asChild>
                      <a href={prod.externalUrl} target="_blank" rel="noopener noreferrer">
                        Live Demo <ExternalLink size={13} />
                      </a>
                    </Button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section-padding bg-secondary/30 border-y border-border/50">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold mb-3">
              Explore by Solution Category
            </h2>
            <p className="text-xs text-muted-foreground">
              Software suites engineered to address key business operational needs.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                className="px-5 py-3 rounded-2xl bg-card border border-border/70 text-sm font-bold text-foreground flex items-center gap-2 hover:border-primary/50 transition-colors cursor-default"
              >
                <Layers size={16} className="text-primary" /> {cat} Software
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary">
              <Code size={14} /> Cloud Architecture
            </div>
            <h2 className="font-display text-3xl font-extrabold">Engineered on Modern Stack</h2>
            <p className="text-xs text-muted-foreground">
              Built using Next.js 15 App Router, Supabase PostgreSQL, Pgvector AI embeddings, and Docker containerization.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {["Next.js 15", "TypeScript", "React 19", "Node.js", "PostgreSQL", "Supabase", "Pgvector", "OpenAI API", "Stripe API", "Docker", "Vercel"].map((t, idx) => (
              <span key={idx} className="px-4 py-2 rounded-xl bg-card border border-border/60 text-xs font-semibold text-foreground">
                {t}
              </span>
            ))}
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
            <h2 className="font-display text-3xl font-extrabold">SaaS Product Inquiries</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="faq-1" className="border border-border/60 rounded-2xl bg-card px-6 py-2">
              <AccordionTrigger className="font-display text-base font-bold hover:no-underline">
                Can Itoby Infotech customize a SaaS product for our enterprise workflows?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed pt-2">
                Yes. While all our products operate as standalone self-service SaaS platforms, we offer dedicated white-label enterprise customizations and private VPC deployments.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-2" className="border border-border/60 rounded-2xl bg-card px-6 py-2">
              <AccordionTrigger className="font-display text-base font-bold hover:no-underline">
                Do your SaaS products offer API integrations for third-party CRMs?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed pt-2">
                Yes. All IIPL SaaS products provide RESTful API endpoints and webhook triggers allowing easy synchronization with Salesforce, HubSpot, Zoho, and custom PostgreSQL databases.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <CTASection />
    </>
  );
}
