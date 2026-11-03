"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowUpRight,
  TrendingUp,
  ExternalLink,
  Sparkles,
  Monitor,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  CheckCircle2,
  Zap,
  Globe2,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useDbProjects } from "@/hooks/useDbProjects";
import { TiltCard } from "@/components/ui/tilt-card";
import { Floating3DBubbles } from "@/components/ui/floating-3d-bubbles";
import { DevicePreviewModal } from "@/components/ui/device-preview-modal";

// Import fallback project images
import easy2buyImage from "@/assets/portfolio/easy2buy-ecommerce.webp";
import rainfraImage from "@/assets/portfolio/rainfra-architecture.webp";
import kaspereyeImage from "@/assets/portfolio/kaspereye-security.webp";
import solidedgeImage from "@/assets/portfolio/solidedge-construction.png";
import juxtudioImage from "@/assets/portfolio/juxtudio-architecture.png";
import rentItobyImage from "@/assets/portfolio/rent-itoby.png";
import leadItobyImage from "@/assets/portfolio/lead-itoby.png";

const getImgSrc = (img: any) => (typeof img === "string" ? img : img?.src || img);

interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  results?: string;
  tech?: string[];
  client?: string;
  source: "hardcoded" | "db";
}

interface ProjectCardProps {
  project: Project;
  onPreview?: (project: Project) => void;
  widthClass?: string;
}

/* 🏆 Best Cyber 3D Box Design Component */
const BestProjectCard = ({ project, onPreview, widthClass = "w-[340px] sm:w-[380px] lg:w-[420px]" }: ProjectCardProps) => {
  return (
    <div className={`h-full shrink-0 ${widthClass} group relative transition-all duration-500`}>
      <TiltCard className="h-full">
        <Link href={`/portfolio/${project.slug}`} className="block h-full">
          <div className="relative overflow-hidden rounded-3xl min-h-[440px] h-full bg-card/80 backdrop-blur-2xl border border-white/15 dark:border-primary/25 group-hover:border-primary/80 transition-all duration-500 shadow-2xl group-hover:shadow-[0_25px_60px_-15px_hsl(var(--primary)/0.35)] flex flex-col justify-between card-shimmer-effect">
            
            {/* Background image with smooth scale */}
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary to-accent/20" />
            )}

            {/* Dark glass gradient overlays for high text contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/30 group-hover:from-black/90 group-hover:via-black/60 transition-all duration-500" />

            {/* Glowing Corner Accents */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/30 via-primary/5 to-transparent rounded-bl-full pointer-events-none group-hover:from-primary/50 transition-all duration-500" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-accent/25 via-transparent to-transparent rounded-tr-full pointer-events-none" />

            {/* Top Bar Header */}
            <div className="relative z-10 p-5 flex items-center justify-between gap-2">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-white/20 backdrop-blur-xl text-white border border-white/30 shadow-lg">
                <Sparkles size={12} className="text-primary animate-pulse" />
                {project.category}
              </span>

              {project.results && (
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-black bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-xl shadow-primary/30">
                  <TrendingUp size={13} />
                  {project.results}
                </span>
              )}
            </div>

            {/* Bottom Content Info Box */}
            <div className="relative z-10 p-6 space-y-3.5 mt-auto">
              <div className="flex items-center justify-between text-xs font-bold text-primary-foreground/80 uppercase tracking-widest">
                <span className="flex items-center gap-1.5 text-primary">
                  <CheckCircle2 size={13} />
                  {project.client || "Project Showcase"}
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-white/70 border border-white/10">
                  Case Study
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white group-hover:text-primary transition-colors duration-300 leading-tight">
                {project.title}
              </h3>

              <p className="text-white/85 text-xs sm:text-sm line-clamp-2 leading-relaxed font-medium">
                {project.description}
              </p>

              {/* Tech Stack Pills & Interactive Action Buttons */}
              <div className="pt-3 flex items-center justify-between gap-2 border-t border-white/20">
                <div className="flex flex-wrap gap-1.5">
                  {(project.tech ?? []).slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-white/15 backdrop-blur-md text-white border border-white/20 group-hover:bg-white/25 transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                  {(project.tech?.length ?? 0) > 3 && (
                    <span className="px-2 py-1 rounded-full text-[10px] font-bold bg-white/15 text-white/80">
                      +{(project.tech?.length ?? 0) - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      onPreview?.(project);
                    }}
                    className="px-3 py-1.5 rounded-full text-[11px] font-extrabold bg-white/20 hover:bg-primary hover:text-primary-foreground backdrop-blur-xl text-white border border-white/30 transition-all duration-300 flex items-center gap-1.5 shadow-lg cursor-pointer"
                    title="Interactive Device View"
                  >
                    <Monitor size={13} />
                    <span className="hidden sm:inline">Preview</span>
                  </button>

                  <div className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-xl shadow-primary/40 group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>
            </div>

            {/* Multi-layer Neon Hover Ring */}
            <div className="absolute inset-0 rounded-3xl ring-0 group-hover:ring-2 group-hover:ring-primary/70 transition-all duration-500 pointer-events-none" />
          </div>
        </Link>
      </TiltCard>
    </div>
  );
};

export const FeaturedProjectsSection = () => {
  const { dbProjects, isLoading } = useDbProjects();

  const fallbackProjects: Project[] = [
    {
      slug: "easy2buy",
      title: "Easy2Buy E-commerce",
      category: "E-commerce",
      description:
        "Modern e-commerce platform with catalog management, product filters, and payment gateway integration.",
      image: getImgSrc(easy2buyImage),
      results: "E-Commerce System",
      tech: ["Next.js", "Stripe", "MongoDB", "AI"],
      client: "Easy2Buy",
      source: "hardcoded",
    },
    {
      slug: "rainfra-studio",
      title: "RA Infra Studio Architecture",
      category: "Website",
      description:
        "Dark-themed portfolio website for an architecture firm with immersive visual showcases and project galleries.",
      image: getImgSrc(rainfraImage),
      results: "Architecture Showcase",
      tech: ["React", "Framer Motion", "Tailwind CSS"],
      client: "RA Infra Studio",
      source: "hardcoded",
    },
    {
      slug: "kaspereye-security",
      title: "Kaspereye Security Systems",
      category: "Website",
      description:
        "B2B corporate website for an electronic physical security and surveillance equipment provider in India.",
      image: getImgSrc(kaspereyeImage),
      results: "Security Systems Web",
      tech: ["React", "Tailwind CSS", "Supabase"],
      client: "Kaspereye Security",
      source: "hardcoded",
    },
    {
      slug: "solidedgeconstructions",
      title: "Solid Edge Constructions",
      category: "Website",
      description:
        "Corporate website for a civil engineering and infrastructure development firm to showcase contracting capabilities.",
      image: getImgSrc(solidedgeImage),
      results: "Construction Firm Web",
      tech: ["React", "Vite", "Tailwind CSS"],
      client: "Solid Edge Constructions",
      source: "hardcoded",
    },
    {
      slug: "juxtudio",
      title: "Juxtudio Architecture & Design",
      category: "Website",
      description:
        "Portfolio website showcasing architectural designs, spatial renderings, and project concepts.",
      image: getImgSrc(juxtudioImage),
      results: "Design Showcase",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      client: "Juxtudio",
      source: "hardcoded",
    },
    {
      slug: "rent-itoby",
      title: "Rent Itoby Rental CRM",
      category: "Software",
      description:
        "Proprietary IIPL SaaS platform for managing vehicle fleets, equipment leasing, and inventory reservations.",
      image: getImgSrc(rentItobyImage),
      results: "Company Product / Internal Project",
      tech: ["React", "Node.js", "Stripe API"],
      client: "Company Product / Internal Project",
      source: "hardcoded",
    },
    {
      slug: "lead-itoby",
      title: "Lead Itoby Lead CRM",
      category: "Software",
      description:
        "Proprietary IIPL SaaS platform for B2B lead discovery, verification, and campaign tracking.",
      image: getImgSrc(leadItobyImage),
      results: "Company Product / Internal Project",
      tech: ["React", "Python", "PostgreSQL"],
      client: "Company Product / Internal Project",
      source: "hardcoded",
    },
  ];

  const [selectedFilter, setSelectedFilter] = useState("All");
  const [previewProject, setPreviewProject] = useState<Project | null>(null);
  const [viewMode, setViewMode] = useState<"marquee" | "grid">("marquee");
  const [isMarqueePaused, setIsMarqueePaused] = useState(false);

  // Merge DB & hardcoded projects
  const allProjects = [
    ...dbProjects,
    ...fallbackProjects.filter((fb) => !dbProjects.some((db) => db.slug === fb.slug)),
  ];

  const filterCategories = ["All", "Website", "Software", "E-commerce"];

  const filteredProjects =
    selectedFilter === "All"
      ? allProjects
      : allProjects.filter(
          (p) =>
            p.category.toLowerCase().includes(selectedFilter.toLowerCase()) ||
            selectedFilter.toLowerCase().includes(p.category.toLowerCase())
        );

  // Duplicate items array for infinite seamless smooth marquee gliding
  const marqueeProjects = [...filteredProjects, ...filteredProjects];

  return (
    <section className="section-padding relative overflow-hidden bg-background">
      {/* Device Preview Modal */}
      <DevicePreviewModal
        isOpen={!!previewProject}
        onClose={() => setPreviewProject(null)}
        project={previewProject}
      />

      {/* Interactive 3D Floating Glass Orbs Canvas */}
      <Floating3DBubbles count={22} />

      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container-wide relative z-10">
        {/* Scroll-Triggered Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4.5 py-2 rounded-full bg-primary/10 border border-primary/20 mb-5 shadow-xl">
            <Zap className="w-4 h-4 text-primary animate-bounce" />
            <span className="text-primary text-xs font-extrabold uppercase tracking-widest">
              Selected Projects & Case Studies
            </span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
            Our Selected{" "}
            <span className="bg-gradient-to-r from-primary via-purple-400 to-accent bg-clip-text text-transparent">
              Projects & Solutions
            </span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Explore our portfolio of software engineering, website development, proprietary SaaS applications, and technical project implementations.
          </p>
        </motion.div>

        {/* Toolbar: Category Filters + View Mode Switcher */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 bg-card/50 backdrop-blur-2xl p-3 sm:p-4 rounded-3xl border border-border/60 shadow-2xl"
        >
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
            {filterCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedFilter(category)}
                className={`px-4 py-2 rounded-2xl text-xs font-extrabold transition-all duration-300 cursor-pointer ${
                  selectedFilter === category
                    ? "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-xl shadow-primary/30 scale-105"
                    : "bg-secondary/60 text-muted-foreground hover:text-foreground hover:bg-secondary border border-border/40"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Marquee Mode vs Grid View Toggle Controls */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsMarqueePaused(!isMarqueePaused)}
              className={`p-2.5 rounded-2xl border transition-all duration-300 flex items-center gap-2 text-xs font-extrabold cursor-pointer ${
                isMarqueePaused
                  ? "bg-primary text-primary-foreground border-primary shadow-lg"
                  : "bg-secondary/80 hover:bg-secondary border-border/60 text-muted-foreground hover:text-foreground"
              }`}
              title={isMarqueePaused ? "Resume Smooth Scroll" : "Pause Smooth Scroll"}
            >
              {isMarqueePaused ? <Play size={15} /> : <Pause size={15} />}
              <span className="hidden sm:inline">{isMarqueePaused ? "Resume Scroll" : "Pause Scroll"}</span>
            </button>

            <div className="flex items-center p-1 bg-secondary/80 rounded-2xl border border-border/60">
              <button
                type="button"
                onClick={() => setViewMode("marquee")}
                className={`px-3 py-1.5 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                  viewMode === "marquee"
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Auto Smooth Marquee
              </button>

              <button
                type="button"
                onClick={() => setViewMode("grid")}
                className={`px-3 py-1.5 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                  viewMode === "grid"
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Grid View
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Mode A: Infinite Continuous Auto Smooth Scroll Marquee */}
      {viewMode === "marquee" ? (
        <div
          className="relative w-full overflow-hidden py-4"
          onMouseEnter={() => setIsMarqueePaused(true)}
          onMouseLeave={() => setIsMarqueePaused(false)}
        >
          {/* Left & Right Edge Gradient Vignette Fades */}
          <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />

          {/* Endless Smooth Gliding Marquee Track */}
          <div
            className={`animate-smooth-marquee gap-6 px-4 ${isMarqueePaused ? "pause-marquee" : ""}`}
            style={{
              animationPlayState: isMarqueePaused ? "paused" : "running",
            }}
          >
            {marqueeProjects.map((project, idx) => (
              <BestProjectCard
                key={`${project.slug}-${idx}`}
                project={project}
                onPreview={setPreviewProject}
              />
            ))}
          </div>
        </div>
      ) : (
        /* Mode B: Interactive Bento Grid View */
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project) => (
              <BestProjectCard
                key={project.slug}
                project={project}
                onPreview={setPreviewProject}
                widthClass="w-full"
              />
            ))}
          </motion.div>
        </div>
      )}

      {/* Bottom CTA Row */}
      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-14"
        >
          <p className="text-muted-foreground text-sm font-medium">
            Want to explore our client projects and software solutions?
          </p>
          <Button
            variant="outline"
            asChild
            className="rounded-2xl border-primary/30 hover:border-primary hover:bg-primary/10 gap-2 shadow-lg"
          >
            <Link href="/portfolio">
              View Full Portfolio
              <ExternalLink size={15} />
            </Link>
          </Button>
          <Button asChild className="rounded-2xl gap-2 shadow-xl shadow-primary/25 font-bold">
            <Link href="/contact">
              Start Your Project
              <ArrowUpRight size={15} />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
