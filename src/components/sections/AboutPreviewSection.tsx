"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";

const features = [
  "Custom Software & Web Solutions",
  "Agile Development & Goal-Driven Execution",
  "12 Months Dedicated Premium Support",
];

const listItemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export const AboutPreviewSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x: x * 30, y: y * 30 });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section className="section-padding relative overflow-hidden" ref={sectionRef}>
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />
      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* 3D Dashboard Mockup Container */}
          <motion.div
            initial={{ opacity: 0, x: -80, scale: 0.95 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -80, scale: 0.95 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="relative"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 rounded-3xl blur-2xl" />
            
            {/* Floating Badge 1 - Client Centric Quality */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute top-12 -left-6 z-20 hidden sm:flex items-center gap-2 px-3.5 py-2.5 rounded-2xl bg-card/95 backdrop-blur-xl border border-border/80 shadow-2xl text-xs font-semibold text-foreground"
            >
              <CheckCircle className="text-primary" size={16} />
              <span>Client-Centric Delivery</span>
            </motion.div>

            {/* Floating Badge 2 - Agile Assured */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute top-6 -right-4 z-20 hidden sm:flex items-center gap-2 px-3.5 py-2.5 rounded-2xl bg-card/95 backdrop-blur-xl border border-border/80 shadow-2xl text-xs font-semibold text-foreground"
            >
              <ShieldCheck className="text-primary animate-pulse" size={16} />
              <span>Agile Quality Assured</span>
            </motion.div>

            {/* 3D Perspective Card Container with Real Software Dev Workspace */}
            <motion.div
              style={{
                rotateX: -mousePos.y,
                rotateY: mousePos.x,
                transformStyle: "preserve-3d",
              }}
              className="relative w-full aspect-[4/3] rounded-3xl border border-border/60 bg-card/40 backdrop-blur-xl overflow-hidden shadow-2xl flex items-center justify-center min-h-[300px] sm:min-h-[380px] group"
            >
              {/* Software Development Team Image */}
              <img
                src="/images/about-software-dev.webp"
                alt="Itoby Infotech Software Development & Engineering Team"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              {/* Gradient Overlay for Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent pointer-events-none" />

              {/* Live Engineering Status Badge */}
              <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2 px-3.5 py-2 rounded-xl bg-card/90 backdrop-blur-md border border-border/80 shadow-xl">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-[11px] font-semibold text-foreground">
                  Custom Software & Web Engineering
                </span>
              </div>
            </motion.div>

            {/* Experience Badge - Glassmorphism */}
            <motion.div
              initial={{ scale: 0, rotate: -20 }}
              animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -20 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 200, damping: 15 }}
              whileHover={{ scale: 1.08, rotate: 3 }}
              className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-24 h-24 sm:w-32 sm:h-32 rounded-2xl bg-card/90 backdrop-blur-xl border border-border/80 flex flex-col items-center justify-center shadow-2xl z-20"
            >
              <span className="text-xl sm:text-3xl font-display font-bold text-primary">2017</span>
              <span className="text-xs sm:text-sm font-medium text-muted-foreground text-center">Year<br/>Incorporated</span>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
            className="space-y-6"
          >
            <span className="text-primary font-bold uppercase tracking-wider text-xs px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 inline-block shadow-sm">
              About Itoby Infotech Pvt Ltd (IIPL)
            </span>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Technology & Software Engineering{" "}
              <span className="gradient-text">Delivering Practical Digital Solutions</span>
            </h2>

            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              <strong className="text-foreground font-bold">Itoby Infotech Private Limited</strong> is an India-based technology and software development company incorporated in 2017. 
              We help businesses build and improve their digital operations through website development, custom software, SaaS applications, mobile applications, AI integrations and technology consulting.
            </p>

            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Headquartered in India, Itoby Infotech provides technology and software development services to clients in India and international markets, including the United States.
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
                <Link href="/about">
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
