import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Floating3DBubbles } from "@/components/ui/floating-3d-bubbles";
import { TechStack3DOrbit } from "@/components/ui/tech-stack-3d-orbit";
import { TechArchitectureModal } from "@/components/ui/tech-architecture-modal";
import { Button } from "@/components/ui/button";
import { Activity, ArrowRight } from "lucide-react";

const techStack = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Vue.js", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Laravel", category: "Backend" },
  { name: "PHP", category: "Backend" },
  { name: "WordPress", category: "CMS" },
  { name: "Shopify", category: "E-commerce" },
  { name: "Flutter", category: "Mobile" },
  { name: "Android", category: "Mobile" },
  { name: "iOS", category: "Mobile" },
  { name: "SEO", category: "Marketing" },
  { name: "Google Ads", category: "Marketing" },
  { name: "Meta Ads", category: "Marketing" },
  { name: "Microsoft 365", category: "Cloud" },
  { name: "AWS", category: "Cloud" },
];

const categoryGlows: Record<string, string> = {
  Frontend: "hover:border-cyan-500/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.25)]",
  Backend: "hover:border-emerald-500/50 hover:shadow-[0_0_25px_rgba(16,185,129,0.25)]",
  CMS: "hover:border-blue-500/50 hover:shadow-[0_0_25px_rgba(59,130,246,0.25)]",
  "E-commerce": "hover:border-pink-500/50 hover:shadow-[0_0_25px_rgba(236,72,153,0.25)]",
  Mobile: "hover:border-violet-500/50 hover:shadow-[0_0_25px_rgba(139,92,246,0.25)]",
  Marketing: "hover:border-amber-500/50 hover:shadow-[0_0_25px_rgba(245,158,11,0.25)]",
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
    "Mobile",
    "CMS",
    "E-commerce",
    "Cloud",
    "Marketing",
  ];

  const filteredTech = activeCategory === "All"
    ? techStack
    : techStack.filter(tech => tech.category === activeCategory);

  return (
    <section className="section-padding bg-card/30 relative overflow-hidden">
      <TechArchitectureModal
        isOpen={isArchOpen}
        onClose={() => setIsArchOpen(false)}
      />
      <Floating3DBubbles count={20} />
      <TechStack3DOrbit />
      <div className="container-wide relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-primary font-semibold uppercase tracking-wider text-sm"
          >
            Technologies
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6"
          >
            Our <span className="gradient-text">Tech Stack</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-muted-foreground text-lg"
          >
            We leverage cutting-edge technologies to build solutions that are 
            fast, scalable, and future-proof.
          </motion.p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 max-w-4xl mx-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 relative ${
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
          className="flex flex-wrap justify-center gap-3 sm:gap-4 min-h-[120px] mb-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredTech.map((tech) => (
              <motion.div
                key={tech.name}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                whileHover={{ 
                  scale: 1.08, 
                  y: -6,
                  transition: { duration: 0.2 }
                }}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl bg-card border border-border transition-all duration-300 cursor-default ${
                  categoryGlows[tech.category] || "hover:border-primary/50"
                }`}
              >
                <p className="font-medium text-sm sm:text-base text-foreground">{tech.name}</p>
                <p className="text-xs text-muted-foreground">{tech.category}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* System Architecture Blueprint Button */}
        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            onClick={() => setIsArchOpen(true)}
            className="rounded-2xl gap-2 border-primary/40 text-primary hover:bg-primary/10 shadow-lg shadow-primary/10"
          >
            <Activity className="w-4 h-4" /> Inspect System Architecture Blueprints <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};
