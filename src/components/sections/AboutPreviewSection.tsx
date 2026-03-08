import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import aboutTeam from "@/assets/about-team.webp";
import { useRef } from "react";

const features = [
  "Quality-Certified Digital Solutions",
  "Goal-Driven Development Methodology",
  "12 Months Premium Support",
];

const listItemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export const AboutPreviewSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section className="section-padding relative overflow-hidden" ref={sectionRef}>
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />
      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -80, scale: 0.95 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -80, scale: 0.95 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 rounded-3xl blur-2xl" />
            <div className="relative rounded-2xl overflow-hidden border border-border/50">
              <motion.img
                src={aboutTeam}
                alt="Itoby Infotech team at work"
                className="w-full h-auto"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>

            {/* Experience Badge - Glassmorphism */}
            <motion.div
              initial={{ scale: 0, rotate: -20 }}
              animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -20 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 200, damping: 15 }}
              whileHover={{ scale: 1.08, rotate: 3 }}
              className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-24 h-24 sm:w-32 sm:h-32 rounded-2xl bg-card/80 backdrop-blur-xl border border-border/50 flex flex-col items-center justify-center shadow-2xl"
            >
              <span className="text-2xl sm:text-4xl font-display font-bold text-primary">11+</span>
              <span className="text-xs sm:text-sm font-medium text-muted-foreground text-center">Years of<br/>Experience</span>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
            className="space-y-6"
          >
            <span className="text-primary font-semibold uppercase tracking-wider text-sm inline-block">About Us</span>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              A Digital Partner{" "}
              <span className="gradient-text">Built for Growth</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed">
              We don't just design websites—we engineer digital products that convert.
              From UI/UX design to full-stack development and marketing, we deliver
              complete solutions for modern businesses.
            </p>

            <motion.ul
              className="space-y-3"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.6 } } }}
            >
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  variants={listItemVariants}
                  className="flex items-center gap-3 p-3 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50"
                >
                  <CheckCircle className="text-primary shrink-0" size={18} />
                  <span className="text-foreground text-sm font-medium">{feature}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <Button variant="hero" size="lg" className="mt-4" asChild>
                <Link to="/about">
                  More About Us
                  <ArrowRight size={18} />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
