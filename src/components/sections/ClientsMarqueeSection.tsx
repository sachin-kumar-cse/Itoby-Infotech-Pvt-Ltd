import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const clients = [
  "TechFlow Inc.",
  "RetailMax",
  "HealthFirst",
  "EduLearn",
  "FinanceHub",
  "FoodChain",
  "TravelEase",
  "AutoDrive",
  "GreenEnergy",
  "MediaPro",
  "SportZone",
  "FashionX",
];

export const ClientsMarqueeSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section 
      ref={ref}
      className="py-8 sm:py-12 overflow-hidden bg-background border-y border-border/50"
    >
      <div className="container-wide mb-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm text-muted-foreground uppercase tracking-wider"
        >
          Trusted by Leading Brands
        </motion.p>
      </div>
      
      {/* Marquee Container */}
      <motion.div 
        className="relative"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-background to-transparent z-10" />
        
        {/* Scrolling Content */}
        <motion.div
          animate={{ x: [0, -1920] }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex gap-8 sm:gap-12"
        >
          {[...clients, ...clients, ...clients].map((client, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -3 }}
              transition={{ duration: 0.2 }}
              className="flex-shrink-0 px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-card/50 border border-border/50 hover:border-primary/30 hover:bg-card transition-colors cursor-default"
            >
              <span className="text-sm sm:text-base font-medium text-muted-foreground whitespace-nowrap">
                {client}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
