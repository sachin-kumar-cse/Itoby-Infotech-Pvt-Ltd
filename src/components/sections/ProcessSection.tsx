import { motion } from "framer-motion";
import { Search, Palette, Code, TestTube, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Discover & Strategy",
    description: "We analyze your business goals, target audience, and competition to create a winning strategy.",
  },
  {
    icon: Palette,
    number: "02",
    title: "UI/UX Design",
    description: "Our designers craft intuitive, beautiful interfaces that resonate with your users.",
  },
  {
    icon: Code,
    number: "03",
    title: "Development",
    description: "Expert developers bring designs to life with clean, scalable, and performant code.",
  },
  {
    icon: TestTube,
    number: "04",
    title: "Testing & Launch",
    description: "Rigorous QA testing ensures a flawless launch across all devices and browsers.",
  },
  {
    icon: Rocket,
    number: "05",
    title: "Growth & Support",
    description: "Ongoing optimization, maintenance, and support to keep you ahead of competition.",
  },
];

export const ProcessSection = () => {
  return (
    <section className="section-padding">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            How We Work
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Our <span className="gradient-text">Proven Process</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A structured approach that ensures every project is delivered on time, 
            on budget, and beyond expectations.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* Step Card */}
                <div className="relative z-10 flex flex-col items-center text-center group">
                  {/* Icon Circle */}
                  <div className="relative mb-4 sm:mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-14 h-14 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl bg-card border border-border flex items-center justify-center group-hover:border-primary group-hover:shadow-[0_0_30px_hsl(75_100%_50%/0.2)] transition-all duration-300"
                    >
                      <step.icon size={24} className="text-primary sm:w-8 sm:h-8" />
                    </motion.div>
                    <span className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-primary text-primary-foreground text-xs sm:text-sm font-bold flex items-center justify-center">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="font-display text-sm sm:text-lg font-bold mb-1 sm:mb-2 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed hidden sm:block">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
