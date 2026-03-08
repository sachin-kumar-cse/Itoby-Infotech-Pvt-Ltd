import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useDbProjects } from "@/hooks/useDbProjects";

// Import portfolio images
import techflowImg from "@/assets/portfolio/techflow-saas.jpg";
import luxeImg from "@/assets/portfolio/luxe-fashion.jpg";
import fittrackImg from "@/assets/portfolio/fittrack-app.jpg";
import quickpayImg from "@/assets/portfolio/quickpay-fintech.jpg";
import restaurantImg from "@/assets/portfolio/restaurant-marketing.jpg";
import manufacturingImg from "@/assets/portfolio/manufacturing-erp.jpg";
import kaspereyeImg from "@/assets/portfolio/kaspereye-security.jpg";
import freightxpressImg from "@/assets/portfolio/freightxpress-logistics.jpg";
import rainfraImg from "@/assets/portfolio/rainfra-architecture.jpg";
import easy2buyImg from "@/assets/portfolio/easy2buy-ecommerce.jpg";

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
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={`/portfolio/${project.slug}`}
                  className="group block rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all">
                      <ArrowUpRight className="text-primary-foreground" size={24} />
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-primary text-sm font-medium">
                      {project.category}
                    </span>
                    <h3 className="font-display text-xl font-bold mt-2 mb-2 group-hover:text-primary transition-colors">
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
