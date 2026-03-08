import { useState } from "react";
import { SEOHead } from "@/components/SEOHead";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { useDbProjects } from "@/hooks/useDbProjects";
import { ArrowUpRight, Filter, Sparkles } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";
import { PortfolioStatsSection } from "@/components/sections/PortfolioStatsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { WorkProcessSection } from "@/components/sections/WorkProcessSection";

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
import easy2buyImg from "@/assets/portfolio/easy2buy-ecommerce.jpg";

const categories = ["All", "Website", "E-commerce", "App", "Marketing", "Software", "Microsoft 365"];

const projects = [
  { slug: "techflow", title: "TechFlow SaaS Platform", category: "Website", description: "Complete web application redesign for a B2B SaaS company serving 10,000+ users.", image: techflowImg, results: "+200% Conversions", tech: ["React", "Node.js", "PostgreSQL"], client: "TechFlow Inc." },
  { slug: "luxe-fashion", title: "Luxe Fashion E-commerce", category: "Website", description: "Premium e-commerce store with AR try-on feature for a luxury fashion brand.", image: luxeImg, results: "+400% Sales", tech: ["Next.js", "Shopify", "AR.js"], client: "Luxe Fashion" },
  { slug: "fittrack", title: "FitTrack Health App", category: "App", description: "AI-powered health and fitness tracking mobile application with 100K+ users.", image: fittrackImg, results: "100K+ Downloads", tech: ["React Native", "TensorFlow", "Firebase"], client: "FitTrack" },
  { slug: "quickpay", title: "QuickPay Fintech App", category: "App", description: "Cross-platform mobile payment and financial management application.", image: quickpayImg, results: "50K+ Active Users", tech: ["Flutter", "Stripe", "Node.js"], client: "QuickPay" },
  { slug: "restaurant-chain", title: "Restaurant Chain Marketing", category: "Marketing", description: "Full-scale digital marketing campaign for a 25-location restaurant chain.", image: restaurantImg, results: "+150% Foot Traffic", tech: ["Google Ads", "Meta Ads", "SEO"], client: "FoodHub" },
  { slug: "b2b-saas", title: "B2B SaaS Lead Generation", category: "Marketing", description: "Multi-channel lead generation campaign for enterprise software company.", image: b2bSaasImg, results: "500+ Leads/Month", tech: ["LinkedIn Ads", "Content Marketing", "HubSpot"], client: "SaaS Corp" },
  { slug: "manufacturing-erp", title: "Manufacturing ERP System", category: "Software", description: "Custom ERP solution for a manufacturing company with 500+ employees.", image: manufacturingImg, results: "40% Efficiency Gain", tech: ["Python", "Django", "React"], client: "ManufacturePro" },
  { slug: "healthcare-portal", title: "Healthcare Patient Portal", category: "Software", description: "HIPAA-compliant patient portal for a multi-location healthcare network.", image: healthcareImg, results: "60% Admin Reduction", tech: ["Vue.js", "Laravel", "MySQL"], client: "HealthFirst" },
  { slug: "law-firm-m365", title: "Law Firm M365 Migration", category: "Microsoft 365", description: "Complete Microsoft 365 migration for a 150-attorney law firm.", image: lawFirmImg, results: "99.9% Uptime", tech: ["SharePoint", "Teams", "Power Automate"], client: "LegalPro LLP" },
  { slug: "retail-m365", title: "Retail Chain M365 Deployment", category: "Microsoft 365", description: "Enterprise M365 deployment across 50+ retail locations nationwide.", image: retailImg, results: "35% Cost Savings", tech: ["Azure AD", "Intune", "Dynamics 365"], client: "RetailMax" },
  { slug: "kaspereye-security", title: "Kaspereye Security Solutions", category: "Website", description: "Premium security solutions website with smart surveillance showcase and lead generation.", image: kaspereyeImg, results: "+180% Leads", tech: ["React", "Tailwind CSS", "Node.js"], client: "Kaspereye Security" },
  { slug: "freightxpress", title: "FreightXpress Logistics Platform", category: "Website", description: "Comprehensive logistics website with real-time tracking and online booking system.", image: freightxpressImg, results: "+320% Bookings", tech: ["React", "PostgreSQL", "Maps API"], client: "FreightXpress" },
  { slug: "rainfra-studio", title: "RA Infra Studio Portfolio", category: "Website", description: "Stunning architecture portfolio with immersive project showcases and 3D walkthroughs.", image: rainfraImg, results: "+200% Inquiries", tech: ["React", "Three.js", "Framer Motion"], client: "RA Infra Studio" },
  { slug: "easy2buy", title: "Easy2Buy Fashion E-commerce", category: "E-commerce", description: "Vibrant fashion e-commerce platform with 500+ products and 10K+ happy customers.", image: easy2buyImg, results: "+400% Revenue", tech: ["React", "Supabase", "Razorpay"], client: "Easy2Buy" },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const { dbProjects } = useDbProjects();

  // Merge hardcoded + DB projects, DB projects shown first
  const allProjects = [
    ...dbProjects.map(p => ({
      slug: p.slug,
      title: p.title,
      category: p.category,
      description: p.description,
      image: p.image,
      results: p.results || "",
      tech: p.tech || [],
      client: p.client || "",
    })),
    ...projects,
  ];

  const filteredProjects =
    activeCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);

  return (
    <Layout>
      <SEOHead title="Our Portfolio" description="Browse Itoby Infotech's portfolio of successful web design, app development, and digital marketing projects across industries." path="/portfolio" />

      {/* Hero with ambient glows */}
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
        <div className="container-wide relative z-10">
          {/* Filters - Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-12 p-4 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/30 max-w-fit mx-auto"
          >
            <div className="flex items-center gap-2 mr-2 text-muted-foreground">
              <Filter size={18} />
              <span className="text-sm font-medium">Filter:</span>
            </div>
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-2 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -8 }}
                >
                  <Link
                    to={`/portfolio/${project.slug}`}
                    className="group block rounded-3xl overflow-hidden bg-card/50 backdrop-blur-xl border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_20px_60px_-15px_hsl(var(--primary)/0.15)]"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />

                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className="inline-block px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium backdrop-blur-sm">
                            {project.category}
                          </span>
                          <span className="inline-block px-3 py-1 rounded-full bg-card/60 text-foreground text-xs font-medium backdrop-blur-md border border-border/30">
                            {project.client}
                          </span>
                        </div>
                        <h3 className="font-display text-2xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-3">
                          {project.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm">
                            {project.results}
                          </span>
                          <div className="flex gap-1">
                            {project.tech.slice(0, 2).map((t) => (
                              <span key={t} className="text-xs px-2 py-1 rounded-full bg-secondary/60 text-muted-foreground backdrop-blur-sm">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        <ArrowUpRight className="text-primary-foreground" size={24} />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

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

      <WorkProcessSection />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Portfolio;
