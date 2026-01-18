import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import aboutTeam from "@/assets/about-team.jpg";
import { useRef } from "react";

const features = [
  "Quality-Certified Digital Solutions",
  "Goal-Driven Development Methodology",
  "12 Months Premium Support",
];

const listItemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export const AboutPreviewSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section className="section-padding" ref={sectionRef}>
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -80, scale: 0.95 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -80, scale: 0.95 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <motion.img
                src={aboutTeam}
                alt="Itoby Infotech team at work"
                className="w-full h-auto"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>

            {/* Experience Badge */}
            <motion.div
              initial={{ scale: 0, rotate: -20 }}
              animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -20 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 200, damping: 15 }}
              whileHover={{ scale: 1.08, rotate: 3 }}
              className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-24 h-24 sm:w-32 sm:h-32 rounded-xl sm:rounded-2xl bg-primary flex flex-col items-center justify-center text-primary-foreground shadow-lg"
            >
              <span className="text-2xl sm:text-4xl font-display font-bold">11+</span>
              <span className="text-xs sm:text-sm font-medium text-center">Years of<br/>Experience</span>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
            className="space-y-6"
          >
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-primary font-semibold uppercase tracking-wider text-sm inline-block"
            >
              About Us
            </motion.span>

            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
            >
              A Digital Partner{" "}
              <span className="gradient-text">Built for Growth</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-muted-foreground text-lg leading-relaxed"
            >
              We don't just design websites—we engineer digital products that convert. 
              From UI/UX design to full-stack development and marketing, we deliver 
              complete solutions for modern businesses. Our revolutionary approach 
              combines cutting-edge technology with strategic thinking.
            </motion.p>

            <motion.ul 
              className="space-y-4"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.6,
                  },
                },
              }}
            >
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  variants={listItemVariants}
                  className="flex items-center gap-3"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <CheckCircle className="text-primary shrink-0" size={20} />
                  </motion.div>
                  <span className="text-foreground">{feature}</span>
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
