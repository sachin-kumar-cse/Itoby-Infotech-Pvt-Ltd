import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useDbProjects } from "@/hooks/useDbProjects";

// Import portfolio images
import techflowImg from "@/assets/portfolio/techflow-saas.webp";
import luxeImg from "@/assets/portfolio/luxe-fashion.webp";
import fittrackImg from "@/assets/portfolio/fittrack-app.webp";
import quickpayImg from "@/assets/portfolio/quickpay-fintech.webp";
import restaurantImg from "@/assets/portfolio/restaurant-marketing.webp";
import manufacturingImg from "@/assets/portfolio/manufacturing-erp.webp";
import kaspereyeImg from "@/assets/portfolio/kaspereye-security.webp";
import freightxpressImg from "@/assets/portfolio/freightxpress-logistics.webp";
import rainfraImg from "@/assets/portfolio/rainfra-architecture.webp";
import easy2buyImg from "@/assets/portfolio/easy2buy-ecommerce.webp";

const categories = ["All", "Website", "E-commerce", "App", "Marketing", "Software"];

const projects = [
  {
    slug: "techflow",
    title: "TechFlow SaaS Platform",
    category: "Website",
    description: "Complete web application redesign for B2B SaaS",
    image: techflowImg,
  },
  {
    slug: "luxe-fashion",
    title: "Luxe Fashion E-commerce",
    category: "Website",
    description: "Premium e-commerce with AR try-on feature",
    image: luxeImg,
  },
  {
    slug: "fittrack",
    title: "FitTrack Health App",
    category: "App",
    description: "AI-powered health and fitness tracking",
    image: fittrackImg,
  },
  {
    slug: "quickpay",
    title: "QuickPay Fintech App",
    category: "App",
    description: "Cross-platform financial management app",
    image: quickpayImg,
  },
  {
    slug: "restaurant-chain",
    title: "Restaurant Chain Marketing",
    category: "Marketing",
    description: "300% organic traffic increase in 6 months",
    image: restaurantImg,
  },
  {
    slug: "manufacturing-erp",
    title: "Manufacturing ERP System",
    category: "Software",
    description: "Custom inventory and sales management system",
    image: manufacturingImg,
  },
  {
    slug: "kaspereye-security",
    title: "Kaspereye Security Solutions",
    category: "Website",
    description: "Premium security solutions website with lead generation",
    image: kaspereyeImg,
  },
  {
    slug: "freightxpress",
    title: "FreightXpress Logistics",
    category: "Website",
    description: "Logistics platform with real-time shipment tracking",
    image: freightxpressImg,
  },
  {
    slug: "rainfra-studio",
    title: "RA Infra Studio",
    category: "Website",
    description: "Architecture portfolio with immersive project showcases",
    image: rainfraImg,
  },
  {
    slug: "easy2buy",
    title: "Easy2Buy Fashion Store",
    category: "E-commerce",
    description: "Vibrant fashion e-commerce with 10K+ happy customers",
    image: easy2buyImg,
  },
];

export const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const { dbProjects } = useDbProjects();

  // Merge DB projects (shown first) with hardcoded ones
  const allProjects = [
    ...dbProjects.map(p => ({
      slug: p.slug,
      title: p.title,
      category: p.category,
      description: p.description,
      image: p.image,
    })),
    ...projects,
  ];

  const filteredProjects =
    activeCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);

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

        {/* Filters with count badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12 p-4 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/30 max-w-fit mx-auto"
        >
          {categories.map((category) => {
            const count = category === "All" ? allProjects.length : allProjects.filter(p => p.category === category).length;
            return (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
                    : "bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {category}
                <span className={`text-xs px-1.5 py-0.5 rounded-full ${
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

        {/* Projects Grid */}
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
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Link
                  to={`/portfolio/${project.slug}`}
                  className="group block rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 hover:shadow-[0_20px_60px_-15px_hsl(var(--primary)/0.15)] transition-all duration-500"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <ArrowUpRight className="text-primary-foreground" size={24} />
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-primary text-sm font-medium">
                      {project.category}
                    </span>
                    <h3 className="font-display text-xl font-bold mt-2 mb-2 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {project.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
