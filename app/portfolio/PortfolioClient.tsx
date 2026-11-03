"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useDbProjects } from "@/hooks/useDbProjects";
import { ArrowUpRight, Filter, Sparkles, TrendingUp, Layers, Building2, Globe2, ShieldCheck, Lock } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";
import { PortfolioStatsSection } from "@/components/sections/PortfolioStatsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { WorkProcessSection } from "@/components/sections/WorkProcessSection";
import ROICalculatorSection from "@/components/sections/ROICalculatorSection";

import easy2buyImage from "@/assets/portfolio/easy2buy-ecommerce.webp";
import rainfraImage from "@/assets/portfolio/rainfra-architecture.webp";
import kaspereyeImage from "@/assets/portfolio/kaspereye-security.webp";
import solidedgeImage from "@/assets/portfolio/solidedge-construction.png";
import juxtudioImage from "@/assets/portfolio/juxtudio-architecture.png";
import rentItobyImage from "@/assets/portfolio/rent-itoby.png";
import leadItobyImage from "@/assets/portfolio/lead-itoby.png";

import { PageHeroBanner } from "@/components/ui/page-hero-banner";

const getImgSrc = (img: any) => typeof img === "string" ? img : img?.src || img;

const categories = ["All", "Website", "E-commerce", "Software"];

const fallbackProjects = [
  {
    slug: "easy2buy",
    title: "Easy2Buy E-commerce",
    category: "E-commerce",
    description: "Modern e-commerce platform with catalog management, product filters, and payment gateway integration.",
    image: getImgSrc(easy2buyImage),
    results: "E-Commerce System",
    tech: ["Next.js", "Stripe", "MongoDB", "AI"],
    client: "Easy2Buy",
    source: "hardcoded" as const,
  },
  {
    slug: "rainfra-studio",
    title: "RA Infra Studio – Architecture Portfolio",
    category: "Website",
    description: "Dark-themed portfolio website for an architecture firm with immersive visual showcases and project galleries.",
    image: getImgSrc(rainfraImage),
    results: "Architecture Showcase",
    tech: ["React", "Framer Motion", "Three.js"],
    client: "RA Infra Studio",
    source: "hardcoded" as const,
  },
  {
    slug: "kaspereye-security",
    title: "Kaspereye Security Solutions",
    category: "Website",
    description: "B2B corporate website for an electronic physical security and surveillance equipment provider in India.",
    image: getImgSrc(kaspereyeImage),
    results: "Security Systems Web",
    tech: ["React", "Tailwind CSS", "Supabase"],
    client: "Kaspereye Security",
    source: "hardcoded" as const,
  },
  {
    slug: "solidedgeconstructions",
    title: "Solid Edge Constructions",
    category: "Website",
    description: "Corporate website for a civil engineering and infrastructure development firm to showcase contracting capabilities.",
    image: getImgSrc(solidedgeImage),
    results: "Construction Firm Web",
    tech: ["React", "Vite", "Tailwind CSS"],
    client: "Solid Edge Constructions",
    source: "hardcoded" as const,
  },
  {
    slug: "juxtudio",
    title: "Juxtudio – Architecture & Interior Design",
    category: "Website",
    description: "Portfolio website showcasing architectural designs, spatial renderings, and project concepts.",
    image: getImgSrc(juxtudioImage),
    results: "Design Showcase",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    client: "Juxtudio",
    source: "hardcoded" as const,
  },
  {
    slug: "rent-itoby",
    title: "Rent Itoby – Rental CRM Dashboard",
    category: "Software",
    description: "Proprietary IIPL SaaS platform for managing vehicle fleets, equipment leasing, and inventory reservations.",
    image: getImgSrc(rentItobyImage),
    results: "Company Product / Internal Project",
    tech: ["React", "Node.js", "Stripe API"],
    client: "Company Product / Internal Project",
    source: "hardcoded" as const,
  },
  {
    slug: "lead-itoby",
    title: "Lead Itoby – Lead Scoring CRM",
    category: "Software",
    description: "Proprietary IIPL SaaS platform for B2B lead discovery, verification, and campaign tracking.",
    image: getImgSrc(leadItobyImage),
    results: "Company Product / Internal Project",
    tech: ["React", "Python", "PostgreSQL"],
    client: "Company Product / Internal Project",
    source: "hardcoded" as const,
  },
];

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
  ],
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Software Engineering Portfolio & Projects",
  description: "Explore Itoby Infotech's portfolio of verified client projects and proprietary software solutions across custom web development, e-commerce, and software applications.",
  provider: {
    "@type": "Organization",
    name: "Itoby Infotech Pvt. Ltd.",
    url: "https://www.itobyinfotech.com",
  },
  url: "https://www.itobyinfotech.com/portfolio",
};

export default function PortfolioClient() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { dbProjects, isLoading } = useDbProjects();

  const projects = [
    ...dbProjects,
    ...fallbackProjects.filter((fb) => !dbProjects.some((db) => db.slug === fb.slug)),
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      {/* 3D Animated Hero & Breadcrumbs */}
      <PageHeroBanner
        title="Our Software Engineering & Development Portfolio"
        description="Explore our portfolio of verified client projects and proprietary software solutions across custom web development, e-commerce, and software applications."
        badge="Verified Projects & Products"
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "Portfolio", path: "/portfolio" }]}
      />

      {/* Entity & GEO Trust Signal Banner */}
      <section className="py-4 bg-primary/10 border-b border-primary/20 text-xs font-semibold text-foreground">
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

      <PortfolioStatsSection />

      {/* Portfolio Grid */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute top-1/3 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px]" />
        <div className="container-wide relative z-10">
          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-14 p-3 sm:p-4 rounded-2xl bg-card/40 backdrop-blur-md border border-border/30 max-w-fit mx-auto"
          >
            <div className="flex items-center gap-2 mr-2 text-muted-foreground">
              <Filter size={18} />
              <span className="text-sm font-medium hidden sm:inline">Filter:</span>
            </div>
            {categories.map((category) => {
              const count = category === "All" ? projects.length : projects.filter(p => p.category === category).length;
              if (count === 0 && category !== "All") return null;
              return (
                <motion.button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all flex items-center gap-1.5 sm:gap-2 ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground shadow-[0_0_25px_hsl(var(--primary)/0.35)]"
                      : "bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {category}
                  <span className={`text-[10px] sm:text-xs px-1.5 py-0.5 rounded-full ${
                    activeCategory === category
                      ? "bg-primary-foreground/20 text-primary-foreground"
                      : "bg-muted-foreground/20 text-muted-foreground"
                  }`}>
                    {count}
                  </span>
                </motion.button>
              );
            })}
          </motion.div>

          {/* Loading / Content */}
          {isLoading && projects.length === 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="rounded-3xl bg-card/50 border border-border/30 overflow-hidden animate-pulse">
                  <div className="aspect-[4/3] bg-secondary/40" />
                  <div className="p-6 space-y-3">
                    <div className="h-4 bg-secondary/40 rounded w-1/4" />
                    <div className="h-6 bg-secondary/40 rounded w-3/4" />
                    <div className="h-4 bg-secondary/40 rounded w-full" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.slug}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -10 }}
                    className="group"
                  >
                    <Link
                      href={`/portfolio/${project.slug}`}
                      className="block rounded-3xl overflow-hidden bg-card/40 backdrop-blur-xl border border-border/40 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_30px_80px_-20px_hsl(var(--primary)/0.2)]"
                    >
                      {/* Image Container */}
                      <div className="relative aspect-[16/10] overflow-hidden">
                        {project.image ? (
                          <img
                            src={project.image}
                            alt={project.title}
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                            <Layers className="w-12 h-12 text-primary/40" />
                          </div>
                        )}

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                        {/* Hover Glow */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_80%,hsl(var(--primary)/0.1),transparent_60%)]" />

                        {/* Result Badge */}
                        {project.results && (
                          <div className="absolute top-4 left-4 z-10">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/20 backdrop-blur-xl border border-primary/30 text-primary text-xs font-bold shadow-lg">
                              <TrendingUp size={11} />
                              {project.results}
                            </span>
                          </div>
                        )}

                        {/* Arrow */}
                        <div className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-primary/90 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 scale-75 group-hover:scale-100 transition-all duration-400 shadow-xl">
                          <ArrowUpRight className="text-primary-foreground" size={18} />
                        </div>

                        {/* Bottom Content on Image */}
                        <div className="absolute bottom-4 left-4 right-4 z-10">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="px-2.5 py-1 rounded-md bg-primary/90 text-primary-foreground text-[10px] font-semibold uppercase tracking-wider">
                              {project.category}
                            </span>
                            {project.client && (
                              <span className="px-2.5 py-1 rounded-md bg-card/50 backdrop-blur-md text-foreground/80 text-[10px] font-medium border border-border/30">
                                {project.client}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Card Body */}
                      <div className="p-5 sm:p-6">
                        <h3 className="font-display text-lg sm:text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-1">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2 leading-relaxed">
                          {project.description}
                        </p>

                        {/* Tech Tags */}
                        {project.tech && project.tech.length > 0 && (
                          <div className="flex flex-wrap gap-1.5">
                            {project.tech.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="px-2.5 py-1 text-[10px] sm:text-xs rounded-full bg-secondary/60 text-muted-foreground border border-border/20 group-hover:border-primary/20 group-hover:text-foreground transition-colors"
                              >
                                {tag}
                              </span>
                            ))}
                            {project.tech.length > 3 && (
                              <span className="px-2.5 py-1 text-[10px] sm:text-xs rounded-full bg-secondary/40 text-muted-foreground">
                                +{project.tech.length - 3}
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          )}

          {!isLoading && filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Layers className="w-10 h-10 text-primary/50" />
              </div>
              <p className="text-muted-foreground text-lg max-w-lg mx-auto">
                We are updating our portfolio. Contact us to learn more about our web development, software engineering, and digital solutions.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      <ROICalculatorSection />
      <WorkProcessSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
