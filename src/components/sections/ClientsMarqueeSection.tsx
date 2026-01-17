import { motion } from "framer-motion";

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
  return (
    <section className="py-8 sm:py-12 overflow-hidden bg-background border-y border-border/50">
      <div className="container-wide mb-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground uppercase tracking-wider"
        >
          Trusted by Leading Brands
        </motion.p>
      </div>
      
      {/* Marquee Container */}
      <div className="relative">
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
            <div
              key={index}
              className="flex-shrink-0 px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-card/50 border border-border/50"
            >
              <span className="text-sm sm:text-base font-medium text-muted-foreground whitespace-nowrap">
                {client}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
