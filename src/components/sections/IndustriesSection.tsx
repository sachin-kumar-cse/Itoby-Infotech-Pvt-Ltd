"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import {
  Building2,
  ShoppingCart,
  Heart,
  GraduationCap,
  Factory,
  Banknote,
  ShieldCheck,
  Truck,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

export const industries = [
  { icon: Banknote, name: "Fintech & Banking", slug: "fintech" },
  { icon: ShoppingCart, name: "Retail & E-Commerce", slug: "retail" },
  { icon: Heart, name: "Healthcare & MedTech", slug: "healthcare" },
  { icon: GraduationCap, name: "Education & EdTech", slug: "education" },
  { icon: Factory, name: "Manufacturing & IoT", slug: "manufacturing" },
  { icon: ShieldCheck, name: "Insurance & InsurTech", slug: "insurance" },
  { icon: Truck, name: "Logistics & Supply Chain", slug: "logistics" },
  { icon: Building2, name: "Real Estate & PropTech", slug: "real-estate" },
];

interface IndustryTheme {
  cardBg: string;
  iconBg: string;
  pillBg: string;
  arrowBtn: string;
  titleColor: string;
  shadow: string;
}

const getIndustryTheme = (index: number): IndustryTheme => {
  switch (index % 8) {
    case 0: // Electric Studio Purple
      return {
        cardBg: "bg-[#6339F4] text-white border-white/10",
        iconBg: "bg-white/15 text-white border-white/20",
        pillBg: "bg-white/20 text-white border-white/20 font-bold",
        arrowBtn: "bg-white text-[#6339F4] group-hover:bg-white/90",
        titleColor: "text-white",
        shadow: "hover:shadow-[0_20px_45px_rgba(99,57,244,0.35)]",
      };
    case 1: // Electric Lime
      return {
        cardBg: "bg-[#B8F625] text-slate-950 border-black/10",
        iconBg: "bg-black/10 text-black border-black/15",
        pillBg: "bg-black/10 text-black border-black/15 font-extrabold",
        arrowBtn: "bg-black text-[#B8F625] group-hover:bg-black/90",
        titleColor: "text-slate-950",
        shadow: "hover:shadow-[0_20px_45px_rgba(184,246,37,0.3)]",
      };
    case 2: // Crisp Pure White
      return {
        cardBg: "bg-white text-slate-900 border-slate-200/90 shadow-xl",
        iconBg: "bg-emerald-50 text-emerald-600 border-emerald-200/80",
        pillBg: "bg-slate-100 text-slate-700 border-slate-200/80 font-bold",
        arrowBtn: "bg-slate-900 text-white group-hover:bg-slate-800",
        titleColor: "text-slate-950",
        shadow: "hover:shadow-[0_20px_45px_rgba(0,0,0,0.12)]",
      };
    case 3: // Cobalt Blue
      return {
        cardBg: "bg-[#2563EB] text-white border-white/10",
        iconBg: "bg-white/15 text-white border-white/20",
        pillBg: "bg-white/20 text-white border-white/20 font-bold",
        arrowBtn: "bg-white text-[#2563EB] group-hover:bg-white/90",
        titleColor: "text-white",
        shadow: "hover:shadow-[0_20px_45px_rgba(37,99,235,0.35)]",
      };
    case 4: // Cyber Carbon / Obsidian
      return {
        cardBg: "bg-[#0E131F] text-white border-cyan-500/20",
        iconBg: "bg-cyan-500/15 text-cyan-400 border-cyan-500/25",
        pillBg: "bg-white/10 text-cyan-300 border-cyan-500/20 font-bold",
        arrowBtn: "bg-cyan-400 text-slate-950 group-hover:bg-cyan-300",
        titleColor: "text-white",
        shadow: "hover:shadow-[0_20px_45px_rgba(6,182,212,0.25)]",
      };
    case 5: // Mint Teal
      return {
        cardBg: "bg-[#0D9488] text-white border-white/10",
        iconBg: "bg-white/15 text-white border-white/20",
        pillBg: "bg-white/20 text-white border-white/20 font-bold",
        arrowBtn: "bg-white text-[#0D9488] group-hover:bg-white/90",
        titleColor: "text-white",
        shadow: "hover:shadow-[0_20px_45px_rgba(13,148,136,0.35)]",
      };
    case 6: // Sunset Electric Coral
      return {
        cardBg: "bg-[#FF5C38] text-white border-white/10",
        iconBg: "bg-white/15 text-white border-white/20",
        pillBg: "bg-white/20 text-white border-white/20 font-bold",
        arrowBtn: "bg-white text-[#FF5C38] group-hover:bg-white/90",
        titleColor: "text-white",
        shadow: "hover:shadow-[0_20px_45px_rgba(255,92,56,0.35)]",
      };
    case 7: // Crisp Pure White (Real Estate)
    default:
      return {
        cardBg: "bg-white text-slate-900 border-slate-200/90 shadow-xl",
        iconBg: "bg-amber-50 text-amber-600 border-amber-200/80",
        pillBg: "bg-slate-100 text-slate-700 border-slate-200/80 font-bold",
        arrowBtn: "bg-slate-900 text-white group-hover:bg-slate-800",
        titleColor: "text-slate-950",
        shadow: "hover:shadow-[0_20px_45px_rgba(0,0,0,0.12)]",
      };
  }
};

const IndustryCard = ({
  industry,
  index,
}: {
  industry: (typeof industries)[0];
  index: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [-12, 12]);
  const Icon = industry.icon;
  const theme = getIndustryTheme(index);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.45 }}
      className="group relative w-full"
    >
      <Link
        href={`/industries/${industry.slug}`}
        className={`block rounded-[2rem] ${theme.cardBg} border p-6 sm:p-7 xl:p-8 transition-all duration-500 ${theme.shadow} relative overflow-hidden group-hover:scale-[1.01]`}
      >
        {/* Top Row: Icon + Case Studies & Arrow */}
        <div className="flex items-center justify-between gap-3 mb-6 relative z-10">
          <motion.div
            style={{ y: parallaxY }}
            className={`w-13 h-13 sm:w-14 sm:h-14 rounded-2xl ${theme.iconBg} border flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-sm`}
          >
            <Icon size={24} />
          </motion.div>

          <div className="flex items-center gap-2.5">
            <span className={`text-[11px] sm:text-xs font-semibold px-3 py-1 rounded-full border ${theme.pillBg}`}>
              Case Studies
            </span>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${theme.arrowBtn} group-hover:rotate-45 transition-all duration-300 shadow-sm`}>
              <ArrowUpRight size={15} />
            </div>
          </div>
        </div>

        {/* Industry Title */}
        <div className="relative z-10">
          <h3 className={`font-display font-extrabold uppercase tracking-tight text-xl sm:text-2xl ${theme.titleColor}`}>
            {industry.name}
          </h3>
        </div>
      </Link>
    </motion.div>
  );
};

export const IndustriesSection = () => {
  return (
    <section id="industries-section" className="section-padding bg-background relative overflow-visible">
      {/* Subtle Background Radial Ambient Aura */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container-wide relative z-10">
        {/* =========================================================================
            SPLIT PINNED ARCHITECTURE
            - Left Side: Wider sticky pinned display (56% to 58%)
            - Right Side: Sleek compact cards feed with diverse modern colors (42% to 44%)
           ========================================================================= */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 xl:gap-16 items-start relative">
          
          {/* =======================================================================
              LEFT COLUMN: WIDER STICKY PINNED DISPLAY (56% to 58%)
             ======================================================================= */}
          <div className="w-full lg:w-[56%] xl:w-[58%] lg:sticky lg:top-28 xl:lg:top-36 self-start space-y-5 pr-0 lg:pr-6 xl:pr-10">
            
            {/* Subtitle Badge - EXACT ORIGINAL */}
            <span className="text-primary font-semibold uppercase tracking-wider text-xs sm:text-sm inline-flex items-center gap-1.5">
              <Sparkles size={14} className="animate-pulse" />
              Global Industry Solutions
            </span>

            {/* Heading - EXACT ORIGINAL */}
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.12]">
              Digital Innovation Across <span className="gradient-text">Key Industries</span>
            </h2>

            {/* Description - EXACT ORIGINAL */}
            <p className="text-muted-foreground text-base sm:text-lg xl:text-xl leading-relaxed pt-1 max-w-2xl">
              We deliver bespoke custom software development, AI solutions, and SaaS platforms
              tailored to solve business problems across major global industries.
            </p>
          </div>

          {/* =======================================================================
              RIGHT COLUMN: SLEEK COMPACT CARDS FEED (42% to 44%)
             ======================================================================= */}
          <div className="w-full lg:w-[44%] xl:w-[42%] flex flex-col gap-5 sm:gap-6">
            {industries.map((industry, index) => (
              <IndustryCard key={industry.slug} industry={industry} index={index} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
