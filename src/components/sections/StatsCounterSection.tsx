import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Code2, Users, Trophy, Clock, Briefcase, Globe } from "lucide-react";

const stats = [
  { icon: Code2, value: 500, suffix: "+", label: "Projects Delivered", description: "Successfully completed projects" },
  { icon: Users, value: 150, suffix: "+", label: "Happy Clients", description: "Satisfied customers worldwide" },
  { icon: Trophy, value: 25, suffix: "+", label: "Awards Won", description: "Industry recognitions" },
  { icon: Clock, value: 11, suffix: "+", label: "Years Experience", description: "Delivering excellence" },
  { icon: Briefcase, value: 50, suffix: "+", label: "Team Members", description: "Expert professionals" },
  { icon: Globe, value: 15, suffix: "+", label: "Countries Served", description: "Global presence" },
];

export const StatsCounterSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-gradient-to-b from-card/50 to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Our Impact
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Numbers That <span className="gradient-text">Speak</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Our track record of success speaks for itself. Here's a glimpse of our journey and achievements.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 text-center h-full">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors"
                >
                  <stat.icon className="text-primary group-hover:text-primary-foreground" size={24} />
                </motion.div>
                <p className="text-3xl sm:text-4xl font-display font-bold text-primary mb-1">
                  {isInView ? (
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={2.5} />
                  ) : (
                    "0" + stat.suffix
                  )}
                </p>
                <p className="font-medium text-foreground text-sm mb-1">{stat.label}</p>
                <p className="text-muted-foreground text-xs hidden sm:block">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
