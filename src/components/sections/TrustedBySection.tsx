import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const clients = [
  "TechCorp",
  "InnovateLabs",
  "GlobalTech",
  "StartupHub",
  "DigitalFirst",
  "CloudWorks",
  "DataFlow",
  "SmartBiz",
];

export const TrustedBySection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-16 border-y border-border bg-card/50" ref={ref}>
      <div className="container-wide">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center text-sm text-muted-foreground uppercase tracking-widest mb-8"
        >
          Trusted by Industry Leaders
        </motion.p>

        <motion.div 
          className="relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-card/50 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-card/50 to-transparent z-10" />

          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex gap-16 items-center whitespace-nowrap"
          >
            {[...clients, ...clients].map((client, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -3 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-3 text-muted-foreground/50 hover:text-foreground transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center">
                  <span className="font-display font-bold">{client[0]}</span>
                </div>
                <span className="text-lg font-medium">{client}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
