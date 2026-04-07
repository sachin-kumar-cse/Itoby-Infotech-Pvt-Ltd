import { useState } from "react";
import { SEOHead } from "@/components/SEOHead";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { useDbProjects } from "@/hooks/useDbProjects";
import { ArrowUpRight, Filter, Sparkles, TrendingUp, Layers } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";
import { PortfolioStatsSection } from "@/components/sections/PortfolioStatsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { WorkProcessSection } from "@/components/sections/WorkProcessSection";
import ROICalculatorSection from "@/components/sections/ROICalculatorSection";

const categories = ["All", "Website", "E-commerce", "App", "Marketing", "Software", "Microsoft 365"];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const { dbProjects, isLoading } = useDbProjects();

  const filteredProjects =
    activeCategory === "All"
      ? dbProjects
      : dbProjects.filter((p) => p.category === activeCategory);

  return (
    <Layout>
      <SEOHead title="Our Portfolio" description="Browse Itoby Infotech's portfolio of successful web design, app development, and digital marketing projects across industries." path="/portfolio" />

      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.1),transparent_50%)]" />
        <div className="absolute top-20 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-[120px] animate-pulse" />

        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6"
            >
              <Sparkles className="text-primary" size={16} />
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">Our Portfolio</span>
            </motion.div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              Showcasing Our <span className="gradient-text">Best Work</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our portfolio of successful projects across web development, mobile apps,
              digital marketing, and enterprise solutions.
            </p>
          </motion.div>
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
              const count = category === "All" ? dbProjects.length : dbProjects.filter(p => p.category === category).length;
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

          {/* Loading */}
          {isLoading ? (
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
                      to={`/portfolio/${project.slug}`}
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
              <p className="text-muted-foreground text-lg">No projects found in this category.</p>
            </motion.div>
          )}
        </div>
      </section>

      <ROICalculatorSection />
      <WorkProcessSection />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Portfolio;
