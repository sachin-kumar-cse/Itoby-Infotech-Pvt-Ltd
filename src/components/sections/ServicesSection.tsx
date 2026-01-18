import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
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

export const ServicesSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="section-padding bg-card/30">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-primary font-semibold uppercase tracking-wider text-sm"
          >
            What We Do
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6"
          >
            Services <span className="gradient-text">Designed to Scale</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-muted-foreground text-lg"
          >
            Comprehensive digital solutions engineered to transform your business
            and accelerate growth in the digital landscape.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <Link
                to={service.path}
                className="group block h-full p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_40px_hsl(75_100%_50%/0.1)]"
              >
                <div className="flex items-start justify-between mb-6">
                  <motion.div 
                    className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    whileHover={{ rotate: 5, scale: 1.05 }}
                  >
                    <service.icon size={28} className="text-primary group-hover:text-primary-foreground" />
                  </motion.div>
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
          <motion.div variants={itemVariants}>
            <Link
              to="/services"
              className="group flex flex-col items-center justify-center h-full p-8 rounded-2xl bg-gradient-to-br from-primary/20 to-glow-secondary/20 border border-primary/30 hover:border-primary transition-all duration-300"
            >
              <motion.div 
                className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4"
                whileHover={{ scale: 1.15, rotate: 45 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ArrowUpRight size={32} className="text-primary" />
              </motion.div>
              <p className="font-display text-lg font-bold text-center">
                Explore All Services
              </p>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
