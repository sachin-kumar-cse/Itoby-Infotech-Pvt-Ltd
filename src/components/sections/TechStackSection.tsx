import { motion } from "framer-motion";

const techStack = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Vue.js", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Laravel", category: "Backend" },
  { name: "PHP", category: "Backend" },
  { name: "WordPress", category: "CMS" },
  { name: "Shopify", category: "E-commerce" },
  { name: "Flutter", category: "Mobile" },
  { name: "Android", category: "Mobile" },
  { name: "iOS", category: "Mobile" },
  { name: "SEO", category: "Marketing" },
  { name: "Google Ads", category: "Marketing" },
  { name: "Meta Ads", category: "Marketing" },
  { name: "Microsoft 365", category: "Cloud" },
  { name: "AWS", category: "Cloud" },
];

export const TechStackSection = () => {
  return (
    <section className="section-padding bg-card/30">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Technologies
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Our <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We leverage cutting-edge technologies to build solutions that are 
            fast, scalable, and future-proof.
          </p>
        </motion.div>

        {/* Tech Grid */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-[0_0_20px_hsl(75_100%_50%/0.1)] transition-all cursor-default"
            >
              <p className="font-medium text-sm sm:text-base text-foreground">{tech.name}</p>
              <p className="text-xs text-muted-foreground">{tech.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
