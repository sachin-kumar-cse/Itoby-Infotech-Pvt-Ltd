import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, TrendingUp, Layers } from "lucide-react";
import { useDbProjects } from "@/hooks/useDbProjects";

const categories = ["All", "Website", "E-commerce", "App", "Marketing", "Software"];

export const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const { dbProjects, isLoading } = useDbProjects();

  const filteredProjects =
    activeCategory === "All"
      ? dbProjects
      : dbProjects.filter((p) => p.category === activeCategory);

  return (
    <section className="section-padding bg-card/30">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Our Work
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Featured <span className="gradient-text">Case Studies</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore how we've helped businesses achieve their digital goals with
            innovative solutions and measurable results.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 p-3 sm:p-4 rounded-2xl bg-card/40 backdrop-blur-sm border border-border/30 max-w-fit mx-auto"
        >
          {categories.map((category) => {
            const count = category === "All" ? dbProjects.length : dbProjects.filter(p => p.category === category).length;
            return (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all flex items-center gap-1.5 sm:gap-2 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.06 }}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <Link
                    to={`/portfolio/${project.slug}`}
                    className="block rounded-3xl overflow-hidden bg-card/40 backdrop-blur-xl border border-border/40 hover:border-primary/50 hover:shadow-[0_25px_60px_-15px_hsl(var(--primary)/0.2)] transition-all duration-500"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
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
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Result Badge */}
                      {project.results && (
                        <div className="absolute top-4 left-4">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/20 backdrop-blur-xl border border-primary/30 text-primary text-xs font-bold">
                            <TrendingUp size={11} />
                            {project.results}
                          </span>
                        </div>
                      )}

                      <div className="absolute bottom-4 right-4 w-11 h-11 rounded-full bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-xl">
                        <ArrowUpRight className="text-primary-foreground" size={20} />
                      </div>
                    </div>
                    <div className="p-5 sm:p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2.5 py-1 rounded-md bg-primary/90 text-primary-foreground text-[10px] font-semibold uppercase tracking-wider">
                          {project.category}
                        </span>
                        {project.client && (
                          <span className="text-xs text-muted-foreground">{project.client}</span>
                        )}
                      </div>
                      <h3 className="font-display text-lg sm:text-xl font-bold mt-2 mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-1">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
                        {project.description}
                      </p>
                      {project.tech && project.tech.length > 0 && (
                        <div className="flex flex-wrap gap-1.5">
                          {project.tech.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 text-[10px] sm:text-xs rounded-full bg-secondary/60 text-muted-foreground border border-border/20"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </section>
  );
};
