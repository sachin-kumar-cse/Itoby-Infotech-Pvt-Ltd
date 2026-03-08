import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Play, Code, Globe, Smartphone, TrendingUp, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { useRef, useState, useEffect } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const rotatingWords = ["Websites", "Apps", "Brands", "Campaigns"];

const stats = [
  { value: 100, suffix: "+", label: "Projects Delivered" },
  { value: 50, suffix: "+", label: "Happy Clients" },
  { value: 11, suffix: "+", label: "Years Experience" },
];

const floatingIcons = [
  { Icon: Code, delay: 0 },
  { Icon: Globe, delay: 0.5 },
  { Icon: Smartphone, delay: 1 },
  { Icon: TrendingUp, delay: 1.5 },
];

// Text reveal animation variants
const textRevealVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

const letterVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.03,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Parallax Background */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0">
        <img
          src={heroBg}
          alt="Digital innovation background"
          className="w-full h-full object-cover opacity-30"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </motion.div>

      {/* Animated Gradient Mesh Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.3, 0.5, 0.3] 
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-1/2 -left-1/4 w-[300px] sm:w-[500px] lg:w-[800px] h-[300px] sm:h-[500px] lg:h-[800px] rounded-full bg-gradient-to-br from-primary/30 to-transparent blur-[80px] sm:blur-[120px]"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            opacity: [0.2, 0.4, 0.2] 
          }}
          transition={{ duration: 20, repeat: Infinity, delay: 2, ease: "easeInOut" }}
          className="absolute -bottom-1/2 -right-1/4 w-[300px] sm:w-[500px] lg:w-[800px] h-[300px] sm:h-[500px] lg:h-[800px] rounded-full bg-gradient-to-tl from-glow-secondary/30 to-transparent blur-[80px] sm:blur-[120px]"
        />
        {/* Additional moving gradient - hidden on mobile for performance */}
        <motion.div
          animate={{ 
            x: ["-20%", "20%", "-20%"],
            y: ["-10%", "10%", "-10%"],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/3 w-[200px] sm:w-[300px] lg:w-[400px] h-[200px] sm:h-[300px] lg:h-[400px] rounded-full bg-primary/10 blur-[60px] sm:blur-[100px] hidden sm:block"
        />
      </div>

      {/* Floating Particles - fewer on mobile */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.5, 0],
            y: [0, -100],
            x: [0, Math.random() * 50 - 25],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeOut",
          }}
          className="absolute w-1 h-1 rounded-full bg-primary/50 hidden sm:block"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${60 + Math.random() * 40}%`,
          }}
        />
      ))}

      <motion.div style={{ y: textY, opacity }} className="container-wide relative z-10 pt-24 sm:pt-32 pb-16 sm:pb-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 sm:space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
            >
              <motion.span 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-primary"
              />
              <span className="text-xs sm:text-sm font-medium text-primary">
                Digital Excellence Since 2013
              </span>
              <Sparkles size={14} className="text-primary" />
            </motion.div>

            {/* Headline with Letter Animation */}
            <div className="overflow-hidden">
              <motion.h1
                initial="hidden"
                animate="visible"
                className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1]"
              >
                <motion.span 
                  custom={0}
                  variants={textRevealVariants}
                  className="block"
                >
                  We Build
                </motion.span>
                <motion.span 
                  custom={1}
                  variants={textRevealVariants}
                  className="block gradient-text"
                >
                  {headlineText.split("").map((letter, i) => (
                    <motion.span
                      key={i}
                      custom={i}
                      variants={letterVariants}
                      initial="hidden"
                      animate="visible"
                      className="inline-block"
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                  ))}
                </motion.span>
                <motion.span 
                  custom={2}
                  variants={textRevealVariants}
                  className="block"
                >
                  Digital Experiences
                </motion.span>
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-base sm:text-lg text-muted-foreground max-w-xl"
            >
              Itoby Infotech helps brands grow with premium websites, powerful apps, 
              and performance marketing. Transform your vision into digital reality.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <Button variant="hero" size="lg" className="w-full sm:w-auto group" asChild>
                <Link to="/contact">
                  Get a Free Consultation
                  <motion.span
                    className="inline-block"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight size={20} />
                  </motion.span>
                </Link>
              </Button>
              <Button variant="hero-outline" size="lg" className="w-full sm:w-auto group" asChild>
                <Link to="/portfolio">
                  <motion.span
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Play size={20} className="fill-current" />
                  </motion.span>
                  View Our Work
                </Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap gap-6 sm:gap-8 pt-6 sm:pt-8 border-t border-border"
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="space-y-1"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <p className="text-2xl sm:text-3xl font-display font-bold text-primary">
                    <AnimatedCounter 
                      value={stat.value} 
                      suffix={stat.suffix}
                      duration={2}
                    />
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block relative"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Animated Rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-full border border-glow-secondary/20"
              />
              
              {/* Inner Content */}
              <div className="absolute inset-12 rounded-full bg-gradient-to-br from-primary/20 to-glow-secondary/20 backdrop-blur-sm border border-primary/20 flex items-center justify-center">
                <div className="text-center p-6">
                  <motion.div
                    animate={{ 
                      y: [0, -10, 0],
                      rotateY: [0, 360],
                    }}
                    transition={{ 
                      y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                      rotateY: { duration: 8, repeat: Infinity, ease: "linear" },
                    }}
                    className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-primary flex items-center justify-center shadow-[0_0_40px_hsl(75_100%_50%/0.4)]"
                  >
                    <span className="text-4xl font-display font-bold text-primary-foreground">I</span>
                  </motion.div>
                  <motion.p 
                    className="font-display font-bold text-xl"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Itoby Infotech
                  </motion.p>
                  <p className="text-sm text-muted-foreground">Digital Excellence</p>
                </div>
              </div>

              {/* Floating Icon Elements */}
              {floatingIcons.map(({ Icon, delay }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: [0, -15, 0],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    opacity: { delay: delay + 0.5, duration: 0.5 },
                    scale: { delay: delay + 0.5, duration: 0.5 },
                    y: { duration: 4, repeat: Infinity, delay },
                    rotate: { duration: 6, repeat: Infinity, delay },
                  }}
                  className={`absolute w-14 h-14 rounded-xl bg-card border border-border flex items-center justify-center shadow-lg hover:border-primary hover:shadow-[0_0_20px_hsl(75_100%_50%/0.2)] transition-all cursor-pointer ${
                    i === 0 ? "-top-2 left-1/4" :
                    i === 1 ? "top-1/4 -right-2" :
                    i === 2 ? "bottom-1/4 -left-2" :
                    "-bottom-2 right-1/4"
                  }`}
                >
                  <Icon className="text-primary" size={24} />
                </motion.div>
              ))}

              {/* Glow orbs */}
              <motion.div
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-0 right-0 w-20 h-20 rounded-full bg-primary/30 blur-xl"
              />
              <motion.div
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                className="absolute bottom-0 left-0 w-20 h-20 rounded-full bg-glow-secondary/30 blur-xl"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-primary"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
