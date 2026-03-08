import { motion } from "framer-motion";
import {
  Building2, ShoppingCart, Heart, GraduationCap,
  Factory, Plane, Utensils, Banknote, Scale, Building
} from "lucide-react";

const industries = [
  { icon: Banknote, name: "Fintech & Banking", projects: 25 },
  { icon: ShoppingCart, name: "E-commerce & Retail", projects: 40 },
  { icon: Heart, name: "Healthcare", projects: 18 },
  { icon: GraduationCap, name: "Education & EdTech", projects: 22 },
  { icon: Factory, name: "Manufacturing", projects: 15 },
  { icon: Plane, name: "Travel & Hospitality", projects: 12 },
  { icon: Utensils, name: "Food & Restaurant", projects: 30 },
  { icon: Building2, name: "Real Estate", projects: 20 },
  { icon: Scale, name: "Legal & Law Firms", projects: 10 },
  { icon: Building, name: "Enterprise & SaaS", projects: 35 },
];

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const fadeUp = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

export const IndustriesSection = () => {
  return (
    <section className="section-padding bg-card/30 relative overflow-hidden">
      <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />
      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">Industries We Serve</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Expertise Across <span className="gradient-text">Industries</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We've helped businesses across diverse industries achieve digital transformation with tailored solutions.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          {industries.map((industry) => (
            <motion.div
              key={industry.name}
              variants={fadeUp}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="p-6 rounded-3xl bg-card/50 backdrop-blur-xl border border-border/50 hover:border-primary/50 transition-all duration-500 text-center h-full cursor-pointer overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 10 }}
                    className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-all"
                  >
                    <industry.icon className="text-primary" size={28} />
                  </motion.div>
                  <h3 className="font-medium text-sm mb-1 group-hover:text-primary transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {industry.projects}+ Projects
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
