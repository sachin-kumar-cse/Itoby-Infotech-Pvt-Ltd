import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, ExternalLink, TrendingUp, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { useDbProjects } from "@/hooks/useDbProjects";

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export const FeaturedProjectsSection = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, amount: 0.5 });
  const gridInView = useInView(gridRef, { once: true, amount: 0.05 });
  const { dbProjects, isLoading } = useDbProjects();

  // Show first 6 projects
  const projects = dbProjects.slice(0, 6);

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Ambient background effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,hsl(var(--primary)/0.06),transparent_60%)] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />

      <div className="container-wide relative z-10">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-14"
        >
          <div>
            <span className="text-primary font-semibold uppercase tracking-wider text-sm inline-flex items-center gap-2">
              <Layers size={14} />
              Featured Work
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-4">
              Our Latest <span className="gradient-text">Projects</span>
            </h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={headerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Button variant="outline" asChild className="shrink-0 group rounded-xl border-primary/30 hover:bg-primary/10">
              <Link to="/portfolio">
                View All Projects
                <ArrowUpRight size={16} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Loading State */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="rounded-3xl bg-card/50 border border-border/30 overflow-hidden animate-pulse">
                <div className="aspect-[4/3] bg-secondary/50" />
                <div className="p-6 space-y-3">
                  <div className="h-4 bg-secondary/50 rounded w-1/3" />
                  <div className="h-6 bg-secondary/50 rounded w-2/3" />
                  <div className="h-4 bg-secondary/50 rounded w-full" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Bento Grid */
          <motion.div
            ref={gridRef}
            variants={staggerContainer}
            initial="hidden"
            animate={gridInView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-[minmax(280px,1fr)]"
          >
            {projects.map((project, index) => {
              const isLarge = index === 0;
              const isWide = index === 3;

              return (
                <motion.div
                  key={project.slug}
                  variants={fadeUp}
                  whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
                  className={`group relative ${
                    isLarge ? "sm:col-span-2 sm:row-span-2 lg:col-span-1 lg:row-span-2" : ""
                  } ${isWide ? "sm:col-span-2 lg:col-span-2" : ""}`}
                >
                  <Link
                    to={`/portfolio/${project.slug}`}
                    className="block relative h-full min-h-[280px] rounded-3xl overflow-hidden border border-border/40 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_25px_60px_-12px_hsl(var(--primary)/0.2)] bg-card/30 backdrop-blur-sm"
                  >
                    {/* Image */}
                    {project.image && (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                    )}

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/10 opacity-90 group-hover:opacity-95 transition-opacity duration-300" />

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.08),transparent_70%)]" />

                    {/* Result Badge - Top Left */}
                    {project.results && (
                      <div className="absolute top-4 left-4 sm:top-5 sm:left-5 z-10">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/20 backdrop-blur-xl border border-primary/30 text-primary text-xs font-bold shadow-lg">
                          <TrendingUp size={12} />
                          {project.results}
                        </span>
                      </div>
                    )}

                    {/* Arrow Icon - Top Right */}
                    <div className="absolute top-4 right-4 sm:top-5 sm:right-5 z-10 w-10 h-10 rounded-full bg-primary/20 backdrop-blur-xl border border-primary/30 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-400 shadow-lg">
                      <ExternalLink size={16} className="text-primary" />
                    </div>

                    {/* Content - Bottom */}
                    <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 flex flex-col justify-end z-10">
                      {/* Category + Client */}
                      <div className="flex items-center gap-2 mb-2.5">
                        <span className="px-2.5 py-1 rounded-md bg-primary/90 text-primary-foreground text-[10px] sm:text-xs font-semibold uppercase tracking-wider">
                          {project.category}
                        </span>
                        {project.client && (
                          <span className="px-2.5 py-1 rounded-md bg-card/40 backdrop-blur-md text-foreground/80 text-[10px] sm:text-xs font-medium border border-border/30">
                            {project.client}
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="font-display text-lg sm:text-xl lg:text-2xl font-bold mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-muted-foreground text-xs sm:text-sm mb-3 line-clamp-2 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tech Tags */}
                      {project.tech && project.tech.length > 0 && (
                        <div className="flex flex-wrap gap-1.5">
                          {project.tech.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-1 text-[10px] sm:text-xs rounded-full bg-secondary/50 backdrop-blur-sm text-muted-foreground border border-border/20 group-hover:border-primary/20 group-hover:text-foreground transition-colors"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </div>
    </section>
  );
};
