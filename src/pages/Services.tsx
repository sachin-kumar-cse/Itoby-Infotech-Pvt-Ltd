import { motion } from "framer-motion";
import { SEOHead } from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Globe, Smartphone, TrendingUp, Code2, Cloud, ArrowRight } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";

const services = [
  {
    icon: Globe,
    title: "Web Design & Development",
    description: "Premium websites that captivate audiences, drive conversions, and establish your brand as an industry leader.",
    features: ["UI/UX Design", "Website Development", "E-commerce Solutions", "Performance Optimization"],
    path: "/services/web-design",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications built for speed, scale, and exceptional user experience.",
    features: ["Android & iOS Apps", "Flutter Development", "API Integration", "App Maintenance"],
    path: "/services/mobile-app",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Data-driven marketing strategies that bring qualified leads, increase visibility, and maximize ROI.",
    features: ["SEO Services", "Google Ads", "Social Media Marketing", "Content Marketing"],
    path: "/services/digital-marketing",
  },
  {
    icon: Code2,
    title: "Software Solutions",
    description: "Custom software and automation tools designed to streamline operations and boost productivity.",
    features: ["CRM/ERP Systems", "Admin Panels", "Automation Tools", "Custom Integrations"],
    path: "/services/software-solutions",
  },
  {
    icon: Cloud,
    title: "Microsoft Office 365",
    description: "Complete Microsoft 365 setup, migration, and support services to modernize your workplace.",
    features: ["M365 Setup", "Business Email", "SharePoint & Teams", "Security Configuration"],
    path: "/services/microsoft-365",
  },
];

const Services = () => {
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
              Our Services
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              Complete Digital <span className="gradient-text">Solutions</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital solutions engineered to transform your business 
              and accelerate growth in the competitive digital landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="space-y-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={service.path}
                  className="group block p-8 md:p-12 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                    <div className="shrink-0">
                      <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                        <service.icon size={40} className="text-primary group-hover:text-primary-foreground" />
                      </div>
                    </div>

                    <div className="flex-1">
                      <h2 className="font-display text-2xl md:text-3xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {service.title}
                      </h2>
                      <p className="text-muted-foreground mb-4 max-w-2xl">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature) => (
                          <span
                            key={feature}
                            className="px-3 py-1 rounded-full bg-secondary text-muted-foreground text-sm"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="shrink-0">
                      <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary transition-colors">
                        <ArrowRight className="text-muted-foreground group-hover:text-primary-foreground" size={24} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Services;
