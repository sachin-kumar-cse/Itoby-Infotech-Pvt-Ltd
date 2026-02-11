import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { ArrowUpRight, Filter } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";
import { PortfolioStatsSection } from "@/components/sections/PortfolioStatsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { WorkProcessSection } from "@/components/sections/WorkProcessSection";

// Import portfolio images
import techflowImg from "@/assets/portfolio/techflow-saas.jpg";
import luxeImg from "@/assets/portfolio/luxe-fashion.jpg";
import fittrackImg from "@/assets/portfolio/fittrack-app.jpg";
import quickpayImg from "@/assets/portfolio/quickpay-fintech.jpg";
import restaurantImg from "@/assets/portfolio/restaurant-marketing.jpg";
import b2bSaasImg from "@/assets/portfolio/b2b-saas-marketing.jpg";
import manufacturingImg from "@/assets/portfolio/manufacturing-erp.jpg";
import healthcareImg from "@/assets/portfolio/healthcare-portal.jpg";
import lawFirmImg from "@/assets/portfolio/law-firm-m365.jpg";
import retailImg from "@/assets/portfolio/retail-m365.jpg";
import kaspereyeImg from "@/assets/portfolio/kaspereye-security.jpg";
import freightxpressImg from "@/assets/portfolio/freightxpress-logistics.jpg";
import rainfraImg from "@/assets/portfolio/rainfra-architecture.jpg";

const categories = ["All", "Website", "App", "Marketing", "Software", "Microsoft 365"];

const projects = [
  {
    slug: "techflow",
    title: "TechFlow SaaS Platform",
    category: "Website",
    description: "Complete web application redesign for a B2B SaaS company serving 10,000+ users.",
    image: techflowImg,
    results: "+200% Conversions",
    tech: ["React", "Node.js", "PostgreSQL"],
    client: "TechFlow Inc.",
  },
  {
    slug: "luxe-fashion",
    title: "Luxe Fashion E-commerce",
    category: "Website",
    description: "Premium e-commerce store with AR try-on feature for a luxury fashion brand.",
    image: luxeImg,
    results: "+400% Sales",
    tech: ["Next.js", "Shopify", "AR.js"],
    client: "Luxe Fashion",
  },
  {
    slug: "fittrack",
    title: "FitTrack Health App",
    category: "App",
    description: "AI-powered health and fitness tracking mobile application with 100K+ users.",
    image: fittrackImg,
    results: "100K+ Downloads",
    tech: ["React Native", "TensorFlow", "Firebase"],
    client: "FitTrack",
  },
  {
    slug: "quickpay",
    title: "QuickPay Fintech App",
    category: "App",
    description: "Cross-platform mobile payment and financial management application.",
    image: quickpayImg,
    results: "50K+ Active Users",
    tech: ["Flutter", "Stripe", "Node.js"],
    client: "QuickPay",
  },
  {
    slug: "restaurant-chain",
    title: "Restaurant Chain Marketing",
    category: "Marketing",
    description: "Full-scale digital marketing campaign for a 25-location restaurant chain.",
    image: restaurantImg,
    results: "+150% Foot Traffic",
    tech: ["Google Ads", "Meta Ads", "SEO"],
    client: "FoodHub",
  },
  {
    slug: "b2b-saas",
    title: "B2B SaaS Lead Generation",
    category: "Marketing",
    description: "Multi-channel lead generation campaign for enterprise software company.",
    image: b2bSaasImg,
    results: "500+ Leads/Month",
    tech: ["LinkedIn Ads", "Content Marketing", "HubSpot"],
    client: "SaaS Corp",
  },
  {
    slug: "manufacturing-erp",
    title: "Manufacturing ERP System",
    category: "Software",
    description: "Custom ERP solution for a manufacturing company with 500+ employees.",
    image: manufacturingImg,
    results: "40% Efficiency Gain",
    tech: ["Python", "Django", "React"],
    client: "ManufacturePro",
  },
  {
    slug: "healthcare-portal",
    title: "Healthcare Patient Portal",
    category: "Software",
    description: "HIPAA-compliant patient portal for a multi-location healthcare network.",
    image: healthcareImg,
    results: "60% Admin Reduction",
    tech: ["Vue.js", "Laravel", "MySQL"],
    client: "HealthFirst",
  },
  {
    slug: "law-firm-m365",
    title: "Law Firm M365 Migration",
    category: "Microsoft 365",
    description: "Complete Microsoft 365 migration for a 150-attorney law firm.",
    image: lawFirmImg,
    results: "99.9% Uptime",
    tech: ["SharePoint", "Teams", "Power Automate"],
    client: "LegalPro LLP",
  },
  {
    slug: "retail-m365",
    title: "Retail Chain M365 Deployment",
    category: "Microsoft 365",
    description: "Enterprise M365 deployment across 50+ retail locations nationwide.",
    image: retailImg,
    results: "35% Cost Savings",
    tech: ["Azure AD", "Intune", "Dynamics 365"],
    client: "RetailMax",
  },
  {
    slug: "kaspereye-security",
    title: "Kaspereye Security Solutions",
    category: "Website",
    description: "Premium security solutions website with smart surveillance showcase and lead generation.",
    image: kaspereyeImg,
    results: "+180% Leads",
    tech: ["React", "Tailwind CSS", "Node.js"],
    client: "Kaspereye Security",
  },
  {
    slug: "freightxpress",
    title: "FreightXpress Logistics Platform",
    category: "Website",
    description: "Comprehensive logistics website with real-time tracking and online booking system.",
    image: freightxpressImg,
    results: "+320% Bookings",
    tech: ["React", "PostgreSQL", "Maps API"],
    client: "FreightXpress",
  },
  {
    slug: "rainfra-studio",
    title: "RA Infra Studio Portfolio",
    category: "Website",
    description: "Stunning architecture portfolio with immersive project showcases and 3D walkthroughs.",
    image: rainfraImg,
    results: "+200% Inquiries",
    tech: ["React", "Three.js", "Framer Motion"],
    client: "RA Infra Studio",
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
              Our Portfolio
            </span>
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

      {/* Stats */}
      <PortfolioStatsSection />

      {/* Portfolio Grid */}
      <section className="section-padding">
        <div className="container-wide">
          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            <div className="flex items-center gap-2 mr-4 text-muted-foreground">
              <Filter size={18} />
              <span className="text-sm font-medium">Filter:</span>
            </div>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-[0_0_20px_hsl(75_100%_50%/0.3)]"
                    : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
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
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                      
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className="inline-block px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                            {project.category}
                          </span>
                          <span className="inline-block px-3 py-1 rounded-full bg-card/80 text-foreground text-xs font-medium backdrop-blur-sm">
                            {project.client}
                          </span>
                        </div>
                        <h3 className="font-display text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-3">
                          {project.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="inline-flex items-center gap-2 text-primary font-medium">
                            {project.results}
                          </span>
                          <div className="flex gap-1">
                            {project.tech.slice(0, 2).map((t) => (
                              <span key={t} className="text-xs px-2 py-1 rounded bg-secondary text-muted-foreground">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
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

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-muted-foreground text-lg">No projects found in this category.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Work Process */}
      <WorkProcessSection />

      {/* Testimonials */}
      <TestimonialsSection />

      <CTASection />
    </Layout>
  );
};

export default Portfolio;
