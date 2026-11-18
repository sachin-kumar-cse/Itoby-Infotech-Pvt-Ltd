"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import { Floating3DBubbles } from "@/components/ui/floating-3d-bubbles";
import { TechStack3DOrbit } from "@/components/ui/tech-stack-3d-orbit";
import { TechArchitectureModal } from "@/components/ui/tech-architecture-modal";
import { Button } from "@/components/ui/button";
import { Activity, ArrowRight } from "lucide-react";

const techStack = [
  { name: "Next.js", slug: "nextjs", category: "Frontend" },
  { name: "React", slug: "react", category: "Frontend" },
  { name: "Node.js", slug: "nodejs", category: "Backend" },
  { name: "Python", slug: "python", category: "Backend" },
  { name: "Supabase", slug: "supabase-development", category: "Cloud" },
  { name: "PostgreSQL", slug: "postgresql-development", category: "Backend" },
  { name: "OpenAI API", slug: "openai-integration", category: "AI" },
  { name: "AI Automation", slug: "ai-automation", category: "AI" },
];

const categoryGlows: Record<string, string> = {
  Frontend: "hover:border-cyan-500/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.25)]",
  Backend: "hover:border-emerald-500/50 hover:shadow-[0_0_25px_rgba(16,185,129,0.25)]",
  AI: "hover:border-primary/50 hover:shadow-[0_0_25px_hsl(var(--primary)/0.25)]",
  Cloud: "hover:border-sky-500/50 hover:shadow-[0_0_25px_rgba(14,165,233,0.25)]",
};

export const TechStackSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeCategory, setActiveCategory] = useState("All");
  const [isArchOpen, setIsArchOpen] = useState(false);

  const categories = [
    "All",
    "Frontend",
    "Backend",
    "AI",
    "Cloud",
  ];

  const filteredTech = activeCategory === "All"
    ? techStack
    : techStack.filter(tech => tech.category === activeCategory);

  return (
    <section className="section-padding bg-background dark:bg-[#161616] relative overflow-hidden">
      <div className="absolute inset-0 bg-card/20 pointer-events-none" />
      <TechArchitectureModal
        isOpen={isArchOpen}
        onClose={() => setIsArchOpen(false)}
      />
      <Floating3DBubbles count={20} />
      <TechStack3DOrbit />
      <div className="container-wide relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-12"
        >
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="text-primary font-semibold uppercase tracking-wider text-xs sm:text-sm"
          >
            Capabilities
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2 sm:mt-4 mb-3 sm:mb-5"
          >
            Engineering <span className="gradient-text">Tech Stack</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-2xl mx-auto"
          >
            We leverage high-throughput cloud architectures to build solutions that are 
            sub-second fast, secure, and future-proof.
          </motion.p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 max-w-3xl mx-auto px-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 relative ${
                activeCategory === category
                  ? "text-primary-foreground font-bold"
                  : "text-muted-foreground hover:text-foreground bg-card/40 border border-border/50"
              }`}
            >
              {activeCategory === category && (
                <motion.div
                  layoutId="activeTechTab"
                  className="absolute inset-0 bg-primary rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {category}
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <motion.div
          ref={ref}
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 sm:gap-4 max-w-3xl mx-auto min-h-[120px] mb-8 sm:mb-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredTech.map((tech) => (
              <motion.div
                key={tech.slug}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -4,
                  transition: { duration: 0.2 }
                }}
                className="w-full"
              >
                <Link
                  href={`/technology/${tech.slug}`}
                  className={`block h-full px-3 sm:px-5 py-3 sm:py-3.5 rounded-xl bg-card border border-border transition-all duration-300 cursor-pointer text-center ${
                    categoryGlows[tech.category] || "hover:border-primary/50"
                  }`}
                >
                  <p className="font-bold text-xs sm:text-sm text-foreground hover:text-primary transition-colors truncate">
                    {tech.name}
                  </p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground font-semibold mt-0.5">
                    {tech.category}
                  </p>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* System Architecture Blueprint Button */}
        <div className="text-center px-4">
          <Button
            variant="outline"
            size="lg"
            onClick={() => setIsArchOpen(true)}
            className="w-full sm:w-auto h-auto py-2.5 sm:py-3 px-4 sm:px-6 rounded-2xl gap-2 border-primary/40 text-primary hover:bg-primary/10 shadow-lg shadow-primary/10 text-xs sm:text-sm font-semibold justify-center inline-flex items-center"
          >
            <Activity className="w-4 h-4 shrink-0" />
            <span className="hidden sm:inline">Inspect System Architecture Blueprints</span>
            <span className="sm:hidden">Architecture Blueprints</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </Button>
        </div>
      </div>
    </section>
  );
};
