import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Globe,
  Smartphone,
  TrendingUp,
  Code2,
  Cloud,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Design & Development",
    description: "Premium websites that captivate audiences and drive conversions.",
    path: "/services/web-design",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform apps built for speed and scale.",
    path: "/services/mobile-app",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Data-driven strategies that bring qualified leads to your business.",
    path: "/services/digital-marketing",
  },
  {
    icon: Code2,
    title: "Software Solutions",
    description: "Custom software and automation tools tailored to your needs.",
    path: "/services/software-solutions",
  },
  {
    icon: Cloud,
    title: "Microsoft Office 365",
    description: "Seamless Microsoft 365 setup, migration, and support services.",
    path: "/services/microsoft-365",
  },
];

export const ServicesSection = () => {
  return (
    <section className="section-padding bg-card/30">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            What We Do
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Services <span className="gradient-text">Designed to Scale</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive digital solutions engineered to transform your business
            and accelerate growth in the digital landscape.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                className="group block h-full p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_40px_hsl(75_100%_50%/0.1)]"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <service.icon size={28} className="text-primary group-hover:text-primary-foreground" />
                  </div>
                  <ArrowUpRight
                    size={24}
                    className="text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary transform translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-all"
                  />
                </div>

                <h3 className="font-display text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </Link>
            </motion.div>
          ))}

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <Link
              to="/services"
              className="group flex flex-col items-center justify-center h-full p-8 rounded-2xl bg-gradient-to-br from-primary/20 to-glow-secondary/20 border border-primary/30 hover:border-primary transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <ArrowUpRight size={32} className="text-primary" />
              </div>
              <p className="font-display text-lg font-bold text-center">
                Explore All Services
              </p>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
