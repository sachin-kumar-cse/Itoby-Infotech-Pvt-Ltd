import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

import techflowImg from "@/assets/portfolio/techflow-saas.jpg";
import fittrackImg from "@/assets/portfolio/fittrack-app.jpg";
import healthcareImg from "@/assets/portfolio/healthcare-portal.jpg";
import luxeImg from "@/assets/portfolio/luxe-fashion.jpg";

const projects = [
  {
    title: "TechFlow SaaS Platform",
    category: "Web Development",
    description: "Complete SaaS solution with dashboard, analytics, and team collaboration features.",
    image: techflowImg,
    link: "/portfolio/techflow-saas",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "FitTrack Mobile App",
    category: "Mobile App",
    description: "Fitness tracking app with workout plans, nutrition logging, and progress analytics.",
    image: fittrackImg,
    link: "/portfolio/fittrack-app",
    tags: ["Flutter", "Firebase", "AI"],
  },
  {
    title: "HealthCare Portal",
    category: "Software Solution",
    description: "Patient management system with appointment booking and telemedicine features.",
    image: healthcareImg,
    link: "/portfolio/healthcare-portal",
    tags: ["Laravel", "Vue.js", "MySQL"],
  },
  {
    title: "Luxe Fashion E-commerce",
    category: "E-commerce",
    description: "Premium fashion e-commerce with AR try-on and personalized recommendations.",
    image: luxeImg,
    link: "/portfolio/luxe-fashion",
    tags: ["Shopify", "React", "AI"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export const FeaturedProjectsSection = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, amount: 0.5 });
  const gridInView = useInView(gridRef, { once: true, amount: 0.1 });

  return (
    <section className="section-padding">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12"
        >
          <div>
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-primary font-semibold uppercase tracking-wider text-sm inline-block"
            >
              Featured Work
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-4"
            >
              Our Latest <span className="gradient-text">Projects</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={headerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Button variant="outline" asChild className="shrink-0 group">
              <Link to="/portfolio">
                View All Projects
                <ArrowUpRight size={16} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Projects Grid - Bento Style */}
        <motion.div
          ref={gridRef}
          variants={containerVariants}
          initial="hidden"
          animate={gridInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className={`group relative ${index === 0 ? 'md:row-span-2' : ''}`}
            >
              <Link
                to={project.link}
                className="block relative h-full min-h-[280px] sm:min-h-[320px] rounded-2xl overflow-hidden"
              >
                {/* Image */}
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7 }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                
                {/* Content */}
                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
                  <motion.span 
                    className="text-primary text-sm font-semibold mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                  >
                    {project.category}
                  </motion.span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + tagIndex * 0.05 }}
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
                
                {/* Hover Icon */}
                <motion.div
                  initial={{ opacity: 0, scale: 0, rotate: -45 }}
                  whileHover={{ opacity: 1, scale: 1, rotate: 0 }}
                  className="absolute top-6 right-6 w-12 h-12 rounded-full bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ExternalLink size={20} className="text-primary-foreground" />
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
