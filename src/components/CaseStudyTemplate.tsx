"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  CheckCircle,
  Building2,
  Globe2,
  ShieldCheck,
  Lock,
  Cpu,
  Sparkles,
  Layers,
  HelpCircle,
  FileCheck,
  Code,
} from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface CaseStudy {
  title: string;
  category: string;
  client: string;
  duration: string;
  year: string;
  heroImage: any;
  alt?: string;
  overview: string;
  challenge: string[];
  solution: string[];
  results: {
    metric: string;
    value: string;
  }[];
  techStack: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  relatedServices?: { name: string; path: string }[];
  relatedIndustries?: { name: string; path: string }[];
  relatedTechnologies?: { name: string; path: string }[];
  faqs?: { question: string; answer: string }[];
  relatedProjects: {
    title: string;
    category: string;
    image: any;
    path: string;
    alt?: string;
  }[];
}

interface CaseStudyTemplateProps {
  caseStudy: CaseStudy;
}

const getImgSrc = (img: any) => typeof img === "string" ? img : img?.src || img;

export const CaseStudyTemplate = ({ caseStudy }: CaseStudyTemplateProps) => {
  const pathname = usePathname();
  const canonicalUrl = `https://www.itobyinfotech.com${pathname}`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.itobyinfotech.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Portfolio",
        item: "https://www.itobyinfotech.com/portfolio",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: caseStudy.title,
        item: canonicalUrl,
      },
    ],
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: caseStudy.title,
    applicationCategory: caseStudy.category,
    operatingSystem: "Web / iOS / Android / Cloud",
    author: {
      "@type": "Organization",
      name: "Itoby Infotech Pvt. Ltd.",
      url: "https://www.itobyinfotech.com",
    },
    description: caseStudy.overview,
    url: canonicalUrl,
  };

  const faqList = caseStudy.faqs || [
    {
      question: `What solution did Itoby Infotech engineer for ${caseStudy.title}?`,
      answer: `Itoby Infotech Pvt. Ltd. engineered a custom ${caseStudy.category} software application utilizing ${caseStudy.techStack.slice(0, 4).join(", ")} to streamline operational workflows and boost performance.`,
    },
    {
      question: `What technologies were used in the ${caseStudy.title} project?`,
      answer: `The project was built using ${caseStudy.techStack.join(", ")} adhering to enterprise security standards and sub-second rendering performance.`,
    },
    {
      question: `Can Itoby Infotech build a similar ${caseStudy.category} solution for another business?`,
      answer: `Yes. We engineer 100% custom software, web platforms, SaaS applications, and mobile apps tailored to your specific business requirements with full source code ownership.`,
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqList.map((f) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.1),transparent_50%)]" />

        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 text-sm font-semibold"
            >
              <ArrowLeft size={16} />
              Back to Portfolio Hub
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-primary font-bold uppercase tracking-wider text-xs px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 inline-block mb-4">
                  {caseStudy.category} Case Study
                </span>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold mt-2 mb-6 text-foreground">
                  {caseStudy.title}
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {caseStudy.overview}
                </p>

                <div className="grid grid-cols-3 gap-6 p-6 rounded-2xl bg-card border border-border/60">
                  <div>
                    <span className="text-muted-foreground text-xs font-medium">Client / Project</span>
                    <p className="font-bold text-foreground text-sm sm:text-base mt-1">{caseStudy.client}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground text-xs font-medium">Duration</span>
                    <p className="font-bold text-foreground text-sm sm:text-base mt-1">{caseStudy.duration}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground text-sm font-medium">Engineered</span>
                    <p className="font-bold text-foreground text-sm sm:text-base mt-1">{caseStudy.year}</p>
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="relative aspect-video rounded-3xl overflow-hidden border border-border/80 shadow-2xl"
              >
                <img
                  src={getImgSrc(caseStudy.heroImage)}
                  alt={caseStudy.alt || `${caseStudy.title} Case Study Interface`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Entity & GEO Trust Signal Banner */}
      <section className="py-4 bg-primary/10 border-y border-primary/20 text-xs font-semibold text-foreground">
        <div className="container-wide flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Building2 className="text-primary w-4 h-4 shrink-0" />
            <span><strong>Engineered by Itoby Infotech Pvt. Ltd.</strong> (Custom Software, SaaS & AI Solutions)</span>
          </div>
          <div className="flex items-center gap-4 text-muted-foreground">
            <span className="flex items-center gap-1.5"><Globe2 className="w-3.5 h-3.5 text-primary" /> Global HQ: Noida, UP, India</span>
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-primary" /> Serving: US, CA, AU, GB, AE, IN</span>
            <span className="flex items-center gap-1.5"><Lock className="w-3.5 h-3.5 text-primary" /> 100% IP Ownership</span>
          </div>
        </div>
      </section>

      {/* Results */}
      {caseStudy.results && caseStudy.results.length > 0 && (
        <section className="py-16 bg-card/50 border-b border-border/60">
          <div className="container-wide">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {caseStudy.results.map((result, index) => (
                <motion.div
                  key={result.metric}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6 rounded-2xl bg-background border border-border/50 shadow-sm"
                >
                  <span className="text-4xl lg:text-5xl font-extrabold gradient-text">
                    {result.value}
                  </span>
                  <p className="text-muted-foreground font-semibold mt-2 text-sm">{result.metric}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* AI Search / LLM Direct Factual Answer Block */}
      <section className="py-12 bg-card/30 border-b border-border/60">
        <div className="container-wide max-w-5xl space-y-6">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
            <Cpu size={14} /> AI & LLM Discovery Summary
          </div>
          <h2 className="font-display text-2xl font-extrabold text-foreground">
            Project Engineering Specifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-background border border-border/60 space-y-1">
              <strong className="text-foreground font-bold flex items-center gap-1.5"><FileCheck size={14} className="text-primary" /> What Was Built?</strong>
              <p className="text-muted-foreground">{caseStudy.title} ({caseStudy.category})</p>
            </div>
            <div className="p-4 rounded-xl bg-background border border-border/60 space-y-1">
              <strong className="text-foreground font-bold flex items-center gap-1.5"><Building2 size={14} className="text-primary" /> Client / Industry Context</strong>
              <p className="text-muted-foreground">{caseStudy.client} | {caseStudy.category}</p>
            </div>
            <div className="p-4 rounded-xl bg-background border border-border/60 space-y-1">
              <strong className="text-foreground font-bold flex items-center gap-1.5"><Code size={14} className="text-primary" /> Technologies Used</strong>
              <p className="text-muted-foreground">{caseStudy.techStack.join(", ")}</p>
            </div>
            <div className="p-4 rounded-xl bg-background border border-border/60 space-y-1">
              <strong className="text-foreground font-bold flex items-center gap-1.5"><ShieldCheck size={14} className="text-primary" /> Itoby Infotech's Role</strong>
              <p className="text-muted-foreground">Full-stack software engineering, UI/UX prototyping, database architecture, and deployment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="section-padding bg-background border-b border-border/60">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Challenge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-semibold uppercase tracking-wider text-xs px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 inline-block mb-3">
                The Challenge
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold mt-2 mb-8 text-foreground">
                What We <span className="gradient-text">Faced</span>
              </h2>
              <div className="space-y-4">
                {caseStudy.challenge.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border/60">
                    <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-destructive text-xs font-bold">{index + 1}</span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-semibold uppercase tracking-wider text-xs px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 inline-block mb-3">
                Our Solution
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold mt-2 mb-8 text-foreground">
                How We <span className="gradient-text">Solved It</span>
              </h2>
              <div className="space-y-4">
                {caseStudy.solution.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border/60">
                    <CheckCircle className="text-primary shrink-0 mt-0.5" size={20} />
                    <p className="text-muted-foreground text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section-padding bg-card/30 border-b border-border/60">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="text-primary font-semibold uppercase tracking-wider text-xs">
              Technologies Used
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold mt-4 text-foreground">
              Technology <span className="gradient-text">Stack</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
          >
            {caseStudy.techStack.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-5 py-2.5 rounded-xl bg-card border border-border text-foreground font-semibold text-xs sm:text-sm shadow-sm"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      {caseStudy.testimonial && (
        <section className="section-padding bg-background border-b border-border/60">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center p-8 sm:p-12 rounded-3xl bg-card/60 border border-border/80 shadow-xl backdrop-blur-xl"
            >
              <div className="text-5xl text-primary mb-4 font-serif">"</div>
              <blockquote className="font-display text-xl sm:text-2xl font-medium mb-6 text-foreground leading-relaxed">
                {caseStudy.testimonial.quote}
              </blockquote>
              <div>
                <p className="font-bold text-primary text-base">{caseStudy.testimonial.author}</p>
                <p className="text-muted-foreground text-xs">{caseStudy.testimonial.role}</p>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* FAQs */}
      <section className="section-padding bg-card/20 border-b border-border/60">
        <div className="container-wide max-w-4xl">
          <div className="text-center mb-10 space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary">
              <HelpCircle size={14} /> Frequently Asked Questions
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">Project Questions & Answers</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqList.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border border-border/80 rounded-2xl px-6 bg-card/60">
                <AccordionTrigger className="font-display font-semibold text-sm sm:text-base hover:no-underline py-4 text-left text-foreground">
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

      {/* Five-Layer Internal Linking Architecture (Portfolio -> Case Study -> Service -> Industry -> Tech) */}
      <section className="py-12 bg-background border-b border-border/40">
        <div className="container-wide space-y-6 max-w-5xl mx-auto">
          <p className="text-xs font-extrabold uppercase tracking-wider text-primary">
            Explore Related Software Engineering Hubs:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Services */}
            <div className="p-4 rounded-2xl bg-card border border-border/60 space-y-2">
              <span className="text-xs font-bold text-primary block uppercase tracking-wider">Related Services</span>
              <div className="flex flex-col gap-1.5 text-xs font-medium text-muted-foreground">
                <Link href="/services/custom-software-development" className="hover:text-primary transition-colors">→ Custom Software Development</Link>
                <Link href="/services/mobile-app" className="hover:text-primary transition-colors">→ Mobile App Development</Link>
                <Link href="/services/saas-development-company" className="hover:text-primary transition-colors">→ SaaS Development Company</Link>
                <Link href="/services/web-design" className="hover:text-primary transition-colors">→ Web Development Company</Link>
              </div>
            </div>

            {/* Industries */}
            <div className="p-4 rounded-2xl bg-card border border-border/60 space-y-2">
              <span className="text-xs font-bold text-primary block uppercase tracking-wider">Related Industries</span>
              <div className="flex flex-col gap-1.5 text-xs font-medium text-muted-foreground">
                <Link href="/industries/healthcare" className="hover:text-primary transition-colors">→ Software for Healthcare</Link>
                <Link href="/industries/real-estate" className="hover:text-primary transition-colors">→ Software for Real Estate</Link>
                <Link href="/industries/manufacturing" className="hover:text-primary transition-colors">→ Software for Manufacturing</Link>
                <Link href="/industries/retail" className="hover:text-primary transition-colors">→ Software for Retail</Link>
              </div>
            </div>

            {/* Technologies */}
            <div className="p-4 rounded-2xl bg-card border border-border/60 space-y-2">
              <span className="text-xs font-bold text-primary block uppercase tracking-wider">Related Technologies</span>
              <div className="flex flex-col gap-1.5 text-xs font-medium text-muted-foreground">
                <Link href="/technology/nextjs" className="hover:text-primary transition-colors">→ Next.js Development</Link>
                <Link href="/technology/react" className="hover:text-primary transition-colors">→ React Development</Link>
                <Link href="/technology/nodejs" className="hover:text-primary transition-colors">→ Node.js Development</Link>
                <Link href="/technology/flutter" className="hover:text-primary transition-colors">→ Flutter Mobile App Dev</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {caseStudy.relatedProjects && caseStudy.relatedProjects.length > 0 && (
        <section className="section-padding bg-card/30">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <span className="text-primary font-semibold uppercase tracking-wider text-xs">
                More Work
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4 text-foreground">
                Related <span className="gradient-text">Projects</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {caseStudy.relatedProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={project.path}
                    className="group block overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 shadow-md"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={getImgSrc(project.image)}
                        alt={project.alt || `${project.title} Case Study Preview`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-primary text-xs font-bold uppercase tracking-wider">{project.category}</span>
                      <h3 className="font-display text-xl font-bold mt-2 group-hover:text-primary transition-colors text-foreground">
                        {project.title}
                      </h3>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
};
