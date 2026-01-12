import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { ArrowUpRight } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";

const categories = ["All", "Website", "App", "Marketing", "Software"];

const projects = [
  {
    id: 1,
    title: "TechCorp Website Redesign",
    category: "Website",
    description: "Complete brand overhaul and e-commerce platform for a leading technology company.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    results: "+200% Conversions",
  },
  {
    id: 2,
    title: "FinanceApp Mobile",
    category: "App",
    description: "Cross-platform financial management app with real-time analytics.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    results: "50K+ Downloads",
  },
  {
    id: 3,
    title: "GrowthHub SEO Campaign",
    category: "Marketing",
    description: "Comprehensive SEO and content strategy for a SaaS startup.",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&h=600&fit=crop",
    results: "+300% Traffic",
  },
  {
    id: 4,
    title: "RetailPro ERP System",
    category: "Software",
    description: "Custom inventory and sales management system for retail chain.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    results: "40% Efficiency Gain",
  },
  {
    id: 5,
    title: "Luxe Fashion E-commerce",
    category: "Website",
    description: "Premium e-commerce store with AR try-on feature.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
    results: "+400% Sales",
  },
  {
    id: 6,
    title: "HealthTrack Wellness App",
    category: "App",
    description: "AI-powered health and fitness tracking application.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    results: "100K+ Users",
  },
  {
    id: 7,
    title: "StartupHub Lead Campaign",
    category: "Marketing",
    description: "Multi-channel lead generation campaign for B2B startup.",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&h=600&fit=crop",
    results: "500+ Leads/Month",
  },
  {
    id: 8,
    title: "LogiFlow CRM Solution",
    category: "Software",
    description: "Custom CRM with automated workflow for logistics company.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    results: "60% Time Saved",
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(75_100%_50%/0.1),transparent_50%)]" />
        
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Our Work
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              Featured <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our successful projects and see how we've helped businesses 
              achieve their digital transformation goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding">
        <div className="container-wide">
          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-[0_0_20px_hsl(75_100%_50%/0.3)]"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={`/portfolio/${project.id}`}
                    className="group block rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                      
                      <div className="absolute bottom-6 left-6 right-6">
                        <span className="inline-block px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium mb-3">
                          {project.category}
                        </span>
                        <h3 className="font-display text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-3">
                          {project.description}
                        </p>
                        <span className="inline-flex items-center gap-2 text-primary font-medium">
                          {project.results}
                        </span>
                      </div>

                      <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all">
                        <ArrowUpRight className="text-primary-foreground" size={24} />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Portfolio;
