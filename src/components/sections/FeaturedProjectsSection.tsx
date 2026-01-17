import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

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

export const FeaturedProjectsSection = () => {
  return (
    <section className="section-padding">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12"
        >
          <div>
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Featured Work
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-4">
              Our Latest <span className="gradient-text">Projects</span>
            </h2>
          </div>
          <Button variant="outline" asChild className="shrink-0">
            <Link to="/portfolio">
              View All Projects
              <ArrowUpRight size={16} className="ml-2" />
            </Link>
          </Button>
        </motion.div>

        {/* Projects Grid - Bento Style */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative ${index === 0 ? 'md:row-span-2' : ''}`}
            >
              <Link
                to={project.link}
                className="block relative h-full min-h-[280px] sm:min-h-[320px] rounded-2xl overflow-hidden"
              >
                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                
                {/* Content */}
                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
                  <span className="text-primary text-sm font-semibold mb-2">
                    {project.category}
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Hover Icon */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="absolute top-6 right-6 w-12 h-12 rounded-full bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ExternalLink size={20} className="text-primary-foreground" />
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
