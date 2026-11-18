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

export const AboutPreviewSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const isImageInView = useInView(imageRef, { once: true, amount: 0.15 });
  const isTextInView = useInView(contentRef, { once: true, amount: 0.15 });

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;
    const rect = imageRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x: x * 30, y: y * 30 });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section
      id="about"
      className="section-padding relative overflow-hidden bg-background dark:bg-[#161616] transition-colors duration-300"
      ref={sectionRef}
    >
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-center">
          {/* Left: 3D Workspace Card & Mockup Container */}
          <div ref={imageRef} className="relative">
            <motion.div
              initial={{ opacity: 0, x: -50, scale: 0.96 }}
              animate={isImageInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -50, scale: 0.96 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 rounded-3xl blur-2xl pointer-events-none" />

              {/* Floating Badge 1 - Client Centric Quality */}
              <motion.div
                initial={{ opacity: 0, x: -30, scale: 0.9 }}
                animate={isImageInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -30, scale: 0.9 }}
                transition={{ delay: 0.35, duration: 0.55, ease: "easeOut" }}
                className="absolute top-8 sm:top-12 -left-3 sm:-left-6 z-20 hidden sm:flex items-center gap-2 px-3.5 py-2.5 rounded-2xl bg-card/95 backdrop-blur-xl border border-border/80 shadow-2xl text-xs font-semibold text-foreground"
              >
                <CheckCircle className="text-primary" size={16} />
                <span>Client-Centric Delivery</span>
              </motion.div>

              {/* Floating Badge 2 - Agile Assured */}
              <motion.div
                initial={{ opacity: 0, x: 30, scale: 0.9 }}
                animate={isImageInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 30, scale: 0.9 }}
                transition={{ delay: 0.45, duration: 0.55, ease: "easeOut" }}
                className="absolute top-4 sm:top-6 -right-2 sm:-right-4 z-20 hidden sm:flex items-center gap-2 px-3.5 py-2.5 rounded-2xl bg-card/95 backdrop-blur-xl border border-border/80 shadow-2xl text-xs font-semibold text-foreground"
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
                className="relative w-full aspect-[4/3] rounded-2xl sm:rounded-3xl border border-border/60 bg-card/40 backdrop-blur-xl overflow-hidden shadow-2xl flex items-center justify-center min-h-[260px] sm:min-h-[380px] group"
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
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 z-10 flex items-center gap-2 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl bg-card/90 backdrop-blur-md border border-border/80 shadow-xl">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-[10px] sm:text-[11px] font-semibold text-foreground">
                    Custom Software & Web Engineering
                  </span>
                </div>
              </motion.div>

              {/* Experience Badge - Glassmorphism */}
              <motion.div
                initial={{ scale: 0, rotate: -20, opacity: 0 }}
                animate={isImageInView ? { scale: 1, rotate: 0, opacity: 1 } : { scale: 0, rotate: -20, opacity: 0 }}
                transition={{ delay: 0.4, type: "spring", stiffness: 200, damping: 15 }}
                whileHover={{ scale: 1.08, rotate: 3 }}
                className="absolute -bottom-3 right-2 sm:-bottom-6 sm:-right-6 w-20 h-20 sm:w-32 sm:h-32 rounded-xl sm:rounded-2xl bg-card/95 backdrop-blur-xl border border-border/80 flex flex-col items-center justify-center shadow-2xl z-20"
              >
                <span className="text-lg sm:text-3xl font-display font-bold text-primary">2017</span>
                <span className="text-[10px] sm:text-xs font-medium text-muted-foreground text-center leading-tight">
                  Year<br />Incorporated
                </span>
              </motion.div>
            </motion.div>
          </div>

          {/* Right: Text Content with Mobile-Responsive Flow & Scroll Animations */}
          <div ref={contentRef} className="space-y-4 sm:space-y-6">
            {/* Tag Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-primary font-bold uppercase tracking-wider text-[11px] sm:text-xs px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-primary/10 border border-primary/20 inline-block shadow-sm">
                About Itoby Infotech Pvt Ltd (IIPL)
              </span>
            </motion.div>

            {/* Headline with Natural Fluid Typography on Mobile & Desktop */}
            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug sm:leading-tight text-foreground"
            >
              <span>Technology &amp; Software Engineering </span>
              <span className="gradient-text">
                Delivering Practical Digital Solutions
              </span>
            </motion.h2>

            {/* Paragraph 1 */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="text-muted-foreground text-sm sm:text-base lg:text-lg leading-relaxed"
            >
              <strong className="text-foreground font-bold">Itoby Infotech Private Limited</strong> is an India-based technology and software development company incorporated in 2017. 
              We help businesses build and improve their digital operations through website development, custom software, SaaS applications, mobile applications, AI integrations and technology consulting.
            </motion.p>

            {/* Paragraph 2 */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="text-muted-foreground text-xs sm:text-sm lg:text-base leading-relaxed"
            >
              Headquartered in India, Itoby Infotech provides technology and software development services to clients in India and international markets, including the United States.
            </motion.p>

            {/* Features Checklist */}
            <div className="space-y-2.5 sm:space-y-3 pt-1">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isTextInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.45 + index * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  className="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3 rounded-xl bg-card/50 dark:bg-card/30 backdrop-blur-sm border border-border/50 hover:border-primary/40 transition-colors cursor-default"
                >
                  <CheckCircle className="text-primary shrink-0" size={16} />
                  <span className="text-foreground text-xs sm:text-sm font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
              transition={{ delay: 0.75, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="pt-2"
            >
              <Button variant="hero" size="lg" className="w-full sm:w-auto group h-11 sm:h-12 px-6 sm:px-8 text-sm" asChild>
                <Link href="/about">
                  More About Us
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
