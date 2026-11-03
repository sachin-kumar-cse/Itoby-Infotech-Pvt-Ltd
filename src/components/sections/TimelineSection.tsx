import { motion, useScroll, useTransform } from "framer-motion";
import { Rocket, Users, Trophy, Building, Globe, Star } from "lucide-react";
import { useRef } from "react";

const milestones = [
  { year: "2017", title: "Company Incorporation", description: "Itoby Infotech Private Limited was incorporated in India as a technology and software development company.", icon: Rocket },
  { year: "2019", title: "Custom Software Engineering", description: "Expanded core engineering capabilities into full-stack custom software and modern web applications.", icon: Building },
  { year: "2021", title: "Cloud Architecture & Delivery", description: "Standardized modern cloud infrastructure and agile frameworks for clients across India and international markets.", icon: Globe },
  { year: "2023", title: "Proprietary SaaS Solutions", description: "Engineered internal software platforms including IIPL Lead, Renting, Billing, Cashmemo, and Calling.", icon: Users },
  { year: "2024", title: "Microsoft Solutions Partner", description: "Participates in Microsoft's partner ecosystem, providing technology services related to verified capabilities.", icon: Star },
];

export const TimelineSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />
      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">Our Journey</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Milestones & <span className="gradient-text">Growth</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Our commitment to technical excellence and practical software development since incorporation in 2017.
          </p>
        </motion.div>

        <div ref={containerRef} className="relative">
          {/* Static line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border/30 md:-translate-x-1/2" />
          {/* Animated progress line */}
          <motion.div
            className="absolute left-4 md:left-1/2 top-0 w-0.5 bg-primary md:-translate-x-1/2 origin-top"
            style={{ height: lineHeight }}
          />

          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? 60 : -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                  <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? "md:mr-12" : "md:ml-12"}`}>
                    <motion.div
                      whileHover={{ y: -5, transition: { duration: 0.3 } }}
                      className="relative p-6 rounded-3xl bg-card/50 backdrop-blur-xl border border-border/50 hover:border-primary/50 transition-all group overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                      <div className="relative z-10">
                        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold mb-3 border border-primary/20">
                          {milestone.year}
                        </span>
                        <h3 className="font-display text-xl font-bold mb-2">{milestone.title}</h3>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Icon - Glowing dot */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.3 }}
                    className="relative w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-[0_0_20px_hsl(var(--primary)/0.4)]"
                  >
                    <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />
                    <milestone.icon className="text-primary-foreground" size={14} />
                  </motion.div>
                </div>

                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
