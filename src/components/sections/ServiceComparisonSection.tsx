import { motion } from "framer-motion";
import { Check, X, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "₹25,000",
    period: "starting",
    description: "Perfect for small businesses getting started online",
    popular: false,
    features: {
      "Custom Website": true,
      "Mobile Responsive": true,
      "SEO Optimization": true,
      "Social Media Setup": false,
      "E-commerce": false,
      "Custom Software": false,
      "Mobile App": false,
      "Microsoft 365": false,
      "Dedicated Manager": false,
      "Priority Support": false,
    },
  },
  {
    name: "Professional",
    price: "₹75,000",
    period: "starting",
    description: "Comprehensive solution for growing businesses",
    popular: true,
    features: {
      "Custom Website": true,
      "Mobile Responsive": true,
      "SEO Optimization": true,
      "Social Media Setup": true,
      "E-commerce": true,
      "Custom Software": true,
      "Mobile App": false,
      "Microsoft 365": false,
      "Dedicated Manager": true,
      "Priority Support": true,
    },
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "quote",
    description: "Full-scale digital transformation for enterprises",
    popular: false,
    features: {
      "Custom Website": true,
      "Mobile Responsive": true,
      "SEO Optimization": true,
      "Social Media Setup": true,
      "E-commerce": true,
      "Custom Software": true,
      "Mobile App": true,
      "Microsoft 365": true,
      "Dedicated Manager": true,
      "Priority Support": true,
    },
  },
];

const featureNames = Object.keys(plans[0].features);

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const ServiceComparisonSection = () => {
  return (
    <section className="section-padding bg-card/30 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Compare Plans
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Choose Your <span className="gradient-text">Perfect Plan</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Transparent pricing with no hidden fees. Pick the plan that fits your business needs.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="overflow-x-auto"
        >
          <div className="min-w-[700px]">
            {/* Plan Headers */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              <div /> {/* Empty cell */}
              {plans.map((plan) => (
                <motion.div
                  key={plan.name}
                  variants={fadeUp}
                  className={`relative p-6 rounded-2xl text-center ${
                    plan.popular
                      ? "bg-primary/10 border-2 border-primary/50"
                      : "bg-card/50 border border-border/50"
                  } backdrop-blur-xl`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary rounded-full text-primary-foreground text-xs font-bold flex items-center gap-1">
                      <Sparkles size={12} /> Most Popular
                    </div>
                  )}
                  <h3 className="font-display text-xl font-bold mb-1">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1 mb-2">
                    <span className="text-3xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground text-sm">{plan.period}</span>
                  </div>
                  <p className="text-muted-foreground text-xs">{plan.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Feature Rows */}
            {featureNames.map((feature, i) => (
              <motion.div
                key={feature}
                variants={fadeUp}
                className={`grid grid-cols-4 gap-4 py-3 px-4 rounded-xl ${
                  i % 2 === 0 ? "bg-card/30" : ""
                }`}
              >
                <div className="flex items-center text-sm font-medium">
                  {feature}
                </div>
                {plans.map((plan) => (
                  <div key={`${plan.name}-${feature}`} className="flex items-center justify-center">
                    {plan.features[feature as keyof typeof plan.features] ? (
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.03 }}
                        className="w-7 h-7 rounded-full bg-primary/15 flex items-center justify-center"
                      >
                        <Check size={14} className="text-primary" />
                      </motion.div>
                    ) : (
                      <div className="w-7 h-7 rounded-full bg-muted/30 flex items-center justify-center">
                        <X size={14} className="text-muted-foreground/50" />
                      </div>
                    )}
                  </div>
                ))}
              </motion.div>
            ))}

            {/* CTA Row */}
            <motion.div variants={fadeUp} className="grid grid-cols-4 gap-4 mt-6">
              <div />
              {plans.map((plan) => (
                <div key={`cta-${plan.name}`} className="flex justify-center">
                  <motion.a
                    href="/request-quote"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all ${
                      plan.popular
                        ? "bg-primary text-primary-foreground hover:shadow-[0_10px_30px_-10px_hsl(var(--primary)/0.4)]"
                        : "bg-secondary text-foreground hover:bg-secondary/80 border border-border/50"
                    }`}
                  >
                    Get Started
                  </motion.a>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
