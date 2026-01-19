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

export const IndustriesSection = () => {
  return (
    <section className="section-padding bg-card/30">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Industries We Serve
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Expertise Across <span className="gradient-text">Industries</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We've helped businesses across diverse industries achieve digital transformation with tailored solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 text-center h-full cursor-pointer">
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:shadow-[0_0_20px_hsl(75_100%_50%/0.3)] transition-all"
                >
                  <industry.icon className="text-primary group-hover:text-primary-foreground" size={28} />
                </motion.div>
                <h3 className="font-medium text-sm mb-1 group-hover:text-primary transition-colors">
                  {industry.name}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {industry.projects}+ Projects
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
