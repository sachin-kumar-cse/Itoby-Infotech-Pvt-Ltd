"use client";

import { motion } from "framer-motion";
import { PageHeroBanner } from "@/components/ui/page-hero-banner";
import Link from "next/link";
import restaurantImage from "@/assets/portfolio/restaurant-marketing.webp";
import b2bSaasImage from "@/assets/portfolio/b2b-saas-marketing.webp";
import { Button } from "@/components/ui/button";
import { 
  Search,
  Target,
  Facebook,
  Share2,
  TrendingUp,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  LineChart,
  Megaphone,
  Rocket,
  Sparkles
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CTASection } from "@/components/sections/CTASection";
import { PricingSection } from "@/components/sections/PricingSection";

const getImgSrc = (img: any) => typeof img === "string" ? img : img?.src || img;

const offerings = [
  { icon: Search, title: "SEO Services", description: "Improve your search rankings and drive organic traffic with proven SEO strategies." },
  { icon: Target, title: "Google Ads", description: "Data-driven PPC campaigns that maximize your ROI and bring qualified leads." },
  { icon: Facebook, title: "Meta Ads", description: "Targeted Facebook and Instagram advertising to reach your ideal customers." },
  { icon: Share2, title: "Social Media Marketing", description: "Build brand awareness and engagement across all social platforms." },
  { icon: TrendingUp, title: "Lead Generation", description: "Strategic campaigns designed to capture and nurture high-quality leads." },
  { icon: BarChart3, title: "Analytics & Reporting", description: "Comprehensive insights and reporting to track campaign performance." },
];

const benefits = [
  "Increase organic traffic by up to 300%",
  "Lower cost per acquisition with optimized campaigns",
  "Real-time performance tracking and reporting",
  "Targeted audience segmentation",
  "A/B testing for continuous improvement",
  "Multi-channel marketing strategies",
];

const processSteps = [
  { step: "01", title: "Audit", description: "We analyze your current marketing efforts, competitors, and market opportunities.", icon: Lightbulb },
  { step: "02", title: "Strategy", description: "Develop a customized marketing plan aligned with your business goals.", icon: LineChart },
  { step: "03", title: "Execute", description: "Launch campaigns across selected channels with continuous optimization.", icon: Megaphone },
  { step: "04", title: "Scale", description: "Analyze results, refine strategies, and scale successful campaigns.", icon: Rocket },
];

const tools = [
  "Google Ads", "Google Analytics 4", "Meta Ads Manager", "SEMrush", "Ahrefs", "HubSpot", "OpenAI GEO Tools", "Google Search Console"
];

const faqs = [
  {
    question: "What digital marketing & SEO services does Itoby Infotech provide?",
    answer: "Itoby Infotech Pvt. Ltd. provides performance digital marketing, Technical SEO, Generative Engine Optimization (GEO), Answer Engine Optimization (AEO), Google Ads (PPC), Meta Ads (Facebook/Instagram), B2B lead generation, and multi-channel conversion funnel tracking."
  },
  {
    question: "What is Generative Engine Optimization (GEO) and Answer Engine Optimization (AEO)?",
    answer: "GEO and AEO optimize your brand's content so AI Search engines like Google AI Overviews, ChatGPT Search, Gemini, Perplexity, and Copilot index and cite your business as a direct answer in conversational search results."
  },
  {
    question: "How long does it take to see organic rankings and traffic from SEO?",
    answer: "Technical SEO and on-page optimization show measurable ranking improvements within 4-8 weeks. Sustained #1 Google search positions and domain authority growth occur within 3-6 months of technical, semantic, and backlink execution."
  },
  {
    question: "What is the recommended budget for Google Ads and Meta Ads campaigns?",
    answer: "We recommend a starting monthly ad spend of $1,000–$3,000 depending on industry competitiveness. Our PPC specialists continuously perform A/B testing, negative keyword filtering, and conversion rate optimization (CRO) to maximize your ROAS."
  },
  {
    question: "How do you track conversions and ROI for digital marketing campaigns?",
    answer: "We set up end-to-end conversion tracking using Google Analytics 4 (GA4), Meta Pixel, Google Tag Manager (GTM), and CRM lead integration. You receive real-time monthly dashboards showing exact Cost Per Lead (CPL) and Return on Ad Spend (ROAS)."
  },
  {
    question: "Do you offer localized SEO for target regions like USA, UK, UAE, Australia & India?",
    answer: "Yes! We specialize in regional and multi-geo SEO targeting local entities in New York, London, Sydney, Dubai, and Delhi-NCR with localized Schema.org markup, Google Business Profile optimization, and geotargeted content."
  },
  {
    question: "Can your marketing team collaborate with our internal marketing staff?",
    answer: "Yes. We operate as an extended growth team providing dedicated SEO strategists, media buyers, copywriters, and analytics engineers who integrate seamlessly with your internal workflow."
  },
  {
    question: "What is included in monthly digital marketing retainer contracts?",
    answer: "Our monthly retainers include Technical SEO audits, weekly ad campaign management, A/B ad creative testing, high-quality blog content creation, conversion rate optimization, and dedicated SLA account support."
  },
];

const pricingTiers = [
  {
    name: "Starter",
    price: { USD: "$1,500", AUD: "A$2,100", CAD: "C$2,000", INR: "₹1,00,000" },
    period: "month",
    description: "Essential marketing for small businesses",
    features: [
      "SEO optimization (5 keywords)",
      "Social media management (2 platforms)",
      "Monthly blog post",
      "Basic analytics reporting",
      "Email support",
    ],
  },
  {
    name: "Growth",
    price: { USD: "$3,500", AUD: "A$4,900", CAD: "C$4,600", INR: "₹2,50,000" },
    period: "month",
    description: "Comprehensive marketing for scaling businesses",
    features: [
      "SEO optimization (15 keywords)",
      "Google Ads management ($2K spend)",
      "Social media (4 platforms)",
      "Content marketing (4 posts/month)",
      "Lead generation campaigns",
      "Weekly reporting calls",
      "Dedicated account manager",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: { USD: "$7,500", AUD: "A$10,500", CAD: "C$9,900", INR: "₹5,50,000" },
    period: "month",
    description: "Full-service marketing for large organizations",
    features: [
      "Unlimited keyword SEO",
      "Multi-channel ad management",
      "Complete social media suite",
      "Video content creation",
      "Marketing automation",
      "Conversion rate optimization",
      "Custom integrations",
      "24/7 priority support",
    ],
  },
];

const caseStudies = [
  {
    title: "Local Restaurant Chain",
    category: "Local SEO & Ads",
    result: "250% increase in reservations",
    image: getImgSrc(restaurantImage),
    path: "/portfolio/restaurant-chain",
  },
  {
    title: "B2B SaaS Company",
    category: "Lead Generation",
    result: "85% reduction in cost per lead",
    image: getImgSrc(b2bSaasImage),
    path: "/portfolio/b2b-saas",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Digital Marketing & SEO Services",
  serviceType: "Digital Marketing Agency",
  provider: {
    "@type": "Organization",
    name: "Itoby Infotech Pvt. Ltd.",
    url: "https://www.itobyinfotech.com"
  },
  areaServed: ["US", "CA", "AU", "GB", "AE", "IN"],
  description: "Data-driven SEO, Generative Engine Optimization (GEO), Google Ads PPC, Meta Ads, and conversion rate optimization services by Itoby Infotech."
};

export default function DigitalMarketingClient() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <PageHeroBanner
        title="Data-Driven Digital Marketing & SEO Solutions"
        description="Results-oriented digital marketing strategies, SEO, PPC advertising, and conversion optimization that generate qualified leads and revenue."
        badge="Targeted Growth Marketing"
        breadcrumbs={[
          { label: "Services", path: "/services" },
          { label: "Digital Marketing" },
        ]}
      />

      {/* What We Offer */}
      <section className="section-padding bg-card/30">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              What We Offer
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Full-Service Marketing <span className="gradient-text">Solutions</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Comprehensive digital marketing services designed to grow your 
              business and outperform competitors.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((offering, index) => (
              <motion.div
                key={offering.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <offering.icon size={28} className="text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{offering.title}</h3>
                <p className="text-muted-foreground">{offering.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                Why Choose Us
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
                Results That <span className="gradient-text">Speak</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Our marketing strategies are designed to deliver measurable 
                results and sustainable growth.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <CheckCircle className="text-primary shrink-0 mt-1" size={20} />
                    <span>{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-glow-secondary/20 border border-primary/30 flex items-center justify-center">
                <div className="text-center p-8">
                  <span className="text-7xl font-bold gradient-text">300%</span>
                  <p className="text-xl text-muted-foreground mt-4">Average Traffic Growth</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="section-padding bg-card/30">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Our Process
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Strategy to <span className="gradient-text">Success</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Our data-driven approach ensures optimal results at every stage.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative p-8 rounded-2xl bg-card border border-border"
              >
                <span className="text-6xl font-bold text-primary/10 absolute top-4 right-4">
                  {step.step}
                </span>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <step.icon size={28} className="text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Tools & Platforms
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4">
              Industry-Leading <span className="gradient-text">Tools</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {tools.map((tool, index) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-6 py-3 rounded-full bg-secondary text-foreground font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              >
                {tool}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <PricingSection
        title="Monthly Plans"
        subtitle="Scalable marketing packages that grow with your business."
        tiers={pricingTiers}
      />

      {/* FAQs */}
      <section className="section-padding bg-card/30">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              FAQ
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border rounded-xl px-6 bg-card"
                >
                  <AccordionTrigger className="text-left font-semibold hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Case Studies
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4">
              Related <span className="gradient-text">Projects</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={study.path}
                  className="group block overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-primary text-sm font-medium">{study.category}</span>
                    <h3 className="font-display text-xl font-bold mt-2 group-hover:text-primary transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-muted-foreground mt-2 flex items-center gap-2">
                      <ArrowRight size={16} className="text-primary" />
                      {study.result}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Contextual Engineering & GEO Guides */}
          <div className="mt-16 p-8 rounded-3xl bg-card border border-border/60 backdrop-blur-xl">
            <h3 className="font-display text-xl font-bold mb-4 text-foreground flex items-center gap-2">
              <Sparkles className="text-primary" size={20} /> Featured Growth Engineering & AI SEO Guides
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Our growth strategists publish actionable methodologies on Generative Engine Optimization (GEO), AI search ranking algorithms, and B2B client acquisition pipelines:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <Link href="/blog/mastering-ai-seo-geo-generative-engine-optimization" className="p-4 rounded-2xl bg-secondary/50 border border-border/50 hover:border-primary/50 text-foreground hover:text-primary transition-all font-medium">
                → Read our playbook on mastering AI SEO and Generative Engine Optimization (GEO) in 2026
              </Link>
              <Link href="/blog/b2b-lead-generation-google-maps-scraping-ai-audits" className="p-4 rounded-2xl bg-secondary/50 border border-border/50 hover:border-primary/50 text-foreground hover:text-primary transition-all font-medium">
                → Learn B2B lead generation with AI site auditing and Google Maps extraction
              </Link>
              <Link href="/resources/technical-seo-checklist-2026" className="p-4 rounded-2xl bg-secondary/50 border border-border/50 hover:border-primary/50 text-foreground hover:text-primary transition-all font-medium">
                → Explore our 30-point technical SEO and Core Web Vitals audit checklist for 2026
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
