import { motion } from "framer-motion";
import { 
  Zap, 
  Palette, 
  Search, 
  Headphones, 
  Shield, 
  BadgeIndianRupee 
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Lightning-fast project turnaround without compromising on quality. Your time matters to us.",
  },
  {
    icon: Palette,
    title: "Modern Design",
    description: "Cutting-edge aesthetics that captivate audiences and set your brand apart from competition.",
  },
  {
    icon: Search,
    title: "SEO Optimized",
    description: "Built for visibility from day one. Every project is optimized for search engine performance.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock dedicated support to ensure your digital presence never misses a beat.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Enterprise-grade security and 99.9% uptime guarantee for peace of mind.",
  },
  {
    icon: BadgeIndianRupee,
    title: "Best Pricing",
    description: "Premium quality at competitive rates. Maximum value for your investment.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const WhyChooseUsSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <motion.div
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-primary/5"
      />
      <motion.div
        animate={{ 
          rotate: -360,
        }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary/10"
      />

      <div className="container-wide relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Built for <span className="gradient-text">Excellence</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We combine technical expertise with creative innovation to deliver 
            digital solutions that drive real business results.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group relative"
            >
              <div className="relative p-8 rounded-2xl bg-card/50 border border-border hover:border-primary/50 transition-all duration-500 h-full">
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/5 via-transparent to-glow-secondary/5" />
                
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="relative w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:shadow-[0_0_30px_hsl(75_100%_50%/0.3)] transition-all duration-300"
                >
                  <feature.icon 
                    size={28} 
                    className="text-primary group-hover:text-primary-foreground transition-colors duration-300" 
                  />
                </motion.div>

                {/* Content */}
                <h3 className="relative font-display text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="relative text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Number indicator */}
                <span className="absolute top-6 right-6 text-6xl font-display font-bold text-border/50 group-hover:text-primary/10 transition-colors duration-300">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
