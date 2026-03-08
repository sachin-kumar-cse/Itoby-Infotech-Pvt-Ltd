import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

import kaspereyeImg from "@/assets/portfolio/kaspereye-security.webp";
import freightxpressImg from "@/assets/portfolio/freightxpress-logistics.webp";
import rainfraImg from "@/assets/portfolio/rainfra-architecture.webp";
import easy2buyImg from "@/assets/portfolio/easy2buy-ecommerce.webp";
import techflowImg from "@/assets/portfolio/techflow-saas.webp";
import fittrackImg from "@/assets/portfolio/fittrack-app.webp";

const projects = [
  { title: "Kaspereye Security Solutions", category: "Website", description: "Premium security solutions website with smart surveillance showcase and lead generation.", image: kaspereyeImg, link: "/portfolio/kaspereye-security", tags: ["React", "Tailwind CSS", "Node.js"], results: "+180% Leads" },
  { title: "FreightXpress Logistics", category: "Website", description: "Logistics platform with real-time tracking and online booking system.", image: freightxpressImg, link: "/portfolio/freightxpress", tags: ["React", "PostgreSQL", "Maps API"], results: "+320% Bookings" },
  { title: "RA Infra Studio", category: "Architecture", description: "Stunning architecture portfolio with immersive project showcases.", image: rainfraImg, link: "/portfolio/rainfra-studio", tags: ["React", "Three.js", "Framer Motion"], results: "+200% Inquiries" },
  { title: "Easy2Buy Fashion Store", category: "E-commerce", description: "Vibrant fashion e-commerce with 500+ products and 10K+ happy customers.", image: easy2buyImg, link: "/portfolio/easy2buy", tags: ["React", "Supabase", "Razorpay"], results: "+400% Revenue" },
  { title: "TechFlow SaaS Platform", category: "Web Development", description: "Complete SaaS solution with dashboard, analytics, and team collaboration.", image: techflowImg, link: "/portfolio/techflow", tags: ["React", "Node.js", "MongoDB"], results: "+200% Conversions" },
  { title: "FitTrack Mobile App", category: "Mobile App", description: "AI-powered fitness tracking with workout plans and progress analytics.", image: fittrackImg, link: "/portfolio/fittrack", tags: ["Flutter", "Firebase", "AI"], results: "100K+ Downloads" },
];

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export const FeaturedProjectsSection = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, amount: 0.5 });
  const gridInView = useInView(gridRef, { once: true, amount: 0.05 });

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />

      <div className="container-wide relative z-10">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12"
        >
          <div>
            <span className="text-primary font-semibold uppercase tracking-wider text-sm inline-block">Featured Work</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-4">
              Our Latest <span className="gradient-text">Projects</span>
            </h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={headerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Button variant="outline" asChild className="shrink-0 group rounded-xl">
              <Link to="/portfolio">
                View All Projects
                <ArrowUpRight size={16} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          ref={gridRef}
          variants={staggerContainer}
          initial="hidden"
          animate={gridInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 auto-rows-[minmax(220px,1fr)]"
        >
          {projects.map((project, index) => {
            const isLarge = index === 0;
            const isWide = index === 3;

            return (
              <motion.div
                key={project.title}
                variants={fadeUp}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className={`group relative ${
                  isLarge ? "sm:col-span-2 sm:row-span-2 lg:col-span-1 lg:row-span-2" : ""
                } ${isWide ? "sm:col-span-2 lg:col-span-2" : ""}`}
              >
                <Link
                  to={project.link}
                  className="block relative h-full min-h-[220px] rounded-3xl overflow-hidden border border-border/50 hover:border-primary/40 transition-all duration-500 hover:shadow-[0_20px_60px_-15px_hsl(var(--primary)/0.15)]"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-85 group-hover:opacity-90 transition-opacity duration-300" />

                  {/* Result Badge - Glassmorphism */}
                  <div className="absolute top-4 left-4 sm:top-5 sm:left-5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/15 backdrop-blur-md border border-primary/25 text-primary text-xs font-semibold">
                      {project.results}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 sm:top-5 sm:right-5 w-10 h-10 rounded-full bg-card/30 backdrop-blur-md border border-border/30 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <ExternalLink size={16} className="text-primary" />
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 lg:p-6 flex flex-col justify-end">
                    <span className="text-primary/80 text-xs font-semibold uppercase tracking-wider mb-1.5">
                      {project.category}
                    </span>
                    <h3 className="font-display text-lg sm:text-xl font-bold mb-1.5 group-hover:text-primary transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-xs sm:text-sm mb-3 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-0.5 text-[10px] sm:text-xs rounded-full bg-card/30 backdrop-blur-sm text-primary/90 border border-primary/15">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
