"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layers, Code2, Award, ShieldCheck, CheckCircle2 } from "lucide-react";

interface StandardItem {
  id: string;
  num: string;
  label: string;
  title: string;
  description: string;
  tag: string;
  color: string;
  icon: typeof Layers;
}

const standards: StandardItem[] = [
  {
    id: "step-1",
    num: "01",
    label: "Microsoft Partner",
    title: "Microsoft Solutions Partner",
    description:
      "Active participant in Microsoft's partner ecosystem, delivering verified enterprise Microsoft 365, Azure cloud, and tenant productivity solutions.",
    tag: "Cloud & Productivity",
    color: "#ffd9c9",
    icon: Layers,
  },
  {
    id: "step-2",
    num: "02",
    label: "Full-Stack",
    title: "Full-Stack Engineering",
    description:
      "Modern web and application architecture engineered with Next.js 15, React, TypeScript, and high-performance Node.js backend microservices.",
    tag: "Modern Standards",
    color: "#d9e4ff",
    icon: Code2,
  },
  {
    id: "step-3",
    num: "03",
    label: "Agile SDLC",
    title: "Agile Methodology",
    description:
      "Requirement-driven sprints with structured milestone tracking, regular client demos, and transparent delivery with zero surprises at launch.",
    tag: "Sprint Delivery",
    color: "#e2f1d2",
    icon: Award,
  },
  {
    id: "step-4",
    num: "04",
    label: "Security",
    title: "Enterprise Security",
    description:
      "Comprehensive code security audits, OWASP-aligned engineering standards, zero-trust architecture, and secure end-to-end data encryption.",
    tag: "Quality Assured",
    color: "#fff0b8",
    icon: ShieldCheck,
  },
  {
    id: "step-5",
    num: "05",
    label: "Reliability",
    title: "Production Reliability",
    description:
      "Automated testing pipelines, cross-device QA validation, and resilient multi-region cloud hosting engineered for 99.9% uptime SLA.",
    tag: "99.9% Uptime SLA",
    color: "#f1d9ff",
    icon: CheckCircle2,
  },
];

export const AwardsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="partner-standards"
      className="section-padding relative overflow-hidden bg-background dark:bg-[#161616] transition-colors duration-300"
    >
      <div className="container-wide relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 lg:mb-14"
        >
          <div>
            <span className="text-primary font-semibold uppercase tracking-wider text-xs sm:text-sm">
              Verified Capabilities &amp; Standards
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 text-foreground">
              Partner Ecosystem &amp;{" "}
              <span className="gradient-text">Engineering Standards</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-sm sm:text-base max-w-md leading-relaxed">
            Itoby Infotech participates in Microsoft&apos;s partner ecosystem and delivers software following industry-standard development practices.
          </p>
        </motion.div>

        {/* Desktop Horizontal Expanding Accordion (lg+) */}
        <div className="hidden lg:flex flex-row gap-3 h-[480px] xl:h-[520px] w-full">
          {standards.map((item, index) => {
            const isActive = activeIndex === index;
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                layout
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
                style={{
                  backgroundColor: item.color,
                  flex: isActive ? 3.4 : 1,
                }}
                transition={{
                  flex: { duration: 0.55, ease: [0.25, 1, 0.5, 1] },
                  layout: { duration: 0.55, ease: [0.25, 1, 0.5, 1] },
                }}
                className="group relative cursor-pointer overflow-hidden rounded-[28px] xl:rounded-[32px] select-none shadow-sm hover:shadow-lg transition-shadow duration-300 min-w-0"
              >
                {/* Big Number at Top Left */}
                <span className="absolute top-7 left-7 font-serif text-5xl xl:text-6xl font-bold tracking-tight text-[#14150a] leading-none pointer-events-none">
                  {item.num}
                </span>

                {/* Collapsed State: Vertical Sideways Label */}
                <motion.div
                  initial={false}
                  animate={{
                    opacity: isActive ? 0 : 1,
                    scale: isActive ? 0.9 : 1,
                  }}
                  transition={{ duration: 0.25 }}
                  className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none flex items-center justify-center"
                >
                  <p
                    className="font-display font-semibold text-xl xl:text-2xl text-[#14150a] tracking-tight whitespace-nowrap"
                    style={{
                      writingMode: "vertical-rl",
                      transform: "rotate(180deg)",
                    }}
                  >
                    {item.label}
                  </p>
                </motion.div>

                {/* Expanded State: Body Content */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 12 }}
                      transition={{ duration: 0.4, delay: 0.18, ease: "easeOut" }}
                      className="absolute bottom-0 left-0 w-full max-w-[420px] p-8 xl:p-9 z-10 flex flex-col justify-end"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#14150a]/10 flex items-center justify-center mb-4">
                        <Icon size={22} className="text-[#14150a]" />
                      </div>
                      <h3 className="font-display text-2xl xl:text-3xl font-bold text-[#14150a] tracking-tight mb-3">
                        {item.title}
                      </h3>
                      <p className="text-[#14150a]/80 text-sm xl:text-[15px] leading-relaxed mb-5">
                        {item.description}
                      </p>
                      <div>
                        <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold border border-[#14150a]/30 text-[#14150a] bg-[#14150a]/5 hover:bg-[#14150a] hover:text-white transition-colors duration-200">
                          {item.tag}
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile & Tablet Interactive Accordion (< lg) */}
        <div className="flex lg:hidden flex-col gap-3.5">
          {standards.map((item, index) => {
            const isActive = activeIndex === index;
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                layout
                onClick={() => setActiveIndex(index)}
                style={{ backgroundColor: item.color }}
                className="rounded-[24px] overflow-hidden p-6 cursor-pointer select-none shadow-sm transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="font-serif text-3xl font-bold text-[#14150a]">
                      {item.num}
                    </span>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-[#14150a]">
                      {item.title}
                    </h3>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-[#14150a]/10 flex items-center justify-center">
                    <Icon size={18} className="text-[#14150a]" />
                  </div>
                </div>

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="pt-4"
                    >
                      <p className="text-[#14150a]/80 text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>
                      <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold border border-[#14150a]/30 text-[#14150a] bg-[#14150a]/5">
                        {item.tag}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
