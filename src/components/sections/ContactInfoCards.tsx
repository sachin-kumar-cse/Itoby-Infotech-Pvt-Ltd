import { motion } from "framer-motion";
import { Clock, Globe, Headphones, Shield } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Quick Response",
    description: "We respond to all inquiries within 24 hours. Your time is valuable to us.",
  },
  {
    icon: Globe,
    title: "Global Availability",
    description: "Serving clients across 15+ countries with flexible communication hours.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Each project gets a dedicated project manager for seamless communication.",
  },
  {
    icon: Shield,
    title: "NDA Protection",
    description: "Your ideas are safe with us. We sign NDAs before discussing sensitive projects.",
  },
];

export const ContactInfoCards = () => {
  return (
    <section className="py-12">
      <div className="container-wide">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors"
              >
                <feature.icon className="text-primary group-hover:text-primary-foreground" size={28} />
              </motion.div>
              <h3 className="font-display text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
