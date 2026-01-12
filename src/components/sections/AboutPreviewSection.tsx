import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import aboutTeam from "@/assets/about-team.jpg";

const features = [
  "Quality-Certified Digital Solutions",
  "Goal-Driven Development Methodology",
  "12 Months Premium Support",
];

export const AboutPreviewSection = () => {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={aboutTeam}
                alt="Itoby Infotech team at work"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>

            {/* Experience Badge */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring" }}
              className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-primary flex flex-col items-center justify-center text-primary-foreground shadow-lg"
            >
              <span className="text-4xl font-display font-bold">11+</span>
              <span className="text-sm font-medium">Years of<br/>Experience</span>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              About Us
            </span>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              A Digital Partner{" "}
              <span className="gradient-text">Built for Growth</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed">
              We don't just design websites—we engineer digital products that convert. 
              From UI/UX design to full-stack development and marketing, we deliver 
              complete solutions for modern businesses. Our revolutionary approach 
              combines cutting-edge technology with strategic thinking.
            </p>

            <ul className="space-y-4">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="text-primary shrink-0" size={20} />
                  <span className="text-foreground">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <Button variant="hero" size="lg" className="mt-4" asChild>
              <Link to="/about">
                More About Us
                <ArrowRight size={18} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
