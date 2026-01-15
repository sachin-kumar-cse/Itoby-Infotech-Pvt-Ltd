import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PricingTier {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  popular?: boolean;
  cta?: string;
}

interface PricingSectionProps {
  title?: string;
  subtitle?: string;
  tiers: PricingTier[];
}

export const PricingSection = ({ 
  title = "Pricing Plans", 
  subtitle = "Choose the perfect plan for your needs",
  tiers 
}: PricingSectionProps) => {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Pricing
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            {title.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="gradient-text">{title.split(' ').slice(-1)}</span>
          </h2>
          <p className="text-muted-foreground text-lg">{subtitle}</p>
        </motion.div>

        <div className={`grid gap-8 ${tiers.length === 3 ? 'lg:grid-cols-3' : 'md:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto'}`}>
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 rounded-2xl border transition-all duration-300 ${
                tier.popular
                  ? "bg-card border-primary shadow-[0_0_40px_hsl(75_100%_50%/0.15)]"
                  : "bg-card border-border hover:border-primary/50"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                    <Star size={14} fill="currentColor" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="font-display text-2xl font-bold mb-2">{tier.name}</h3>
                <p className="text-muted-foreground text-sm mb-6">{tier.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  {tier.period && (
                    <span className="text-muted-foreground">/{tier.period}</span>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-primary shrink-0 mt-0.5" size={18} />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                variant={tier.popular ? "hero" : "outline"}
                className="w-full"
                size="lg"
              >
                <Link to="/contact">{tier.cta || "Get Started"}</Link>
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground text-sm mt-12"
        >
          All prices are starting points. Final pricing depends on project complexity.{" "}
          <Link to="/contact" className="text-primary hover:underline">
            Contact us
          </Link>{" "}
          for a custom quote.
        </motion.p>
      </div>
    </section>
  );
};
