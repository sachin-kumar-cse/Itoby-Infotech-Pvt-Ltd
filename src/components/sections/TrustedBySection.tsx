import { motion } from "framer-motion";

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
  return (
    <section className="py-16 border-y border-border bg-card/50">
      <div className="container-wide">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground uppercase tracking-widest mb-8"
        >
          Trusted by Industry Leaders
        </motion.p>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-card/50 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-card/50 to-transparent z-10" />

          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex gap-16 items-center whitespace-nowrap"
          >
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-muted-foreground/50 hover:text-foreground transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center">
                  <span className="font-display font-bold">{client[0]}</span>
                </div>
                <span className="text-lg font-medium">{client}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
