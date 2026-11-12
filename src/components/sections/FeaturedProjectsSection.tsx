"use client";

import { useState, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValueEvent,
  MotionValue,
} from "framer-motion";
import Link from "next/link";
import { Sparkles, ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// 8 Verified Real Project Screenshots (Exact Sequence Requested by User)
import iiplBillingImage from "@/assets/portfolio/iipl-billing.webp";
import iiplCashmemoImage from "@/assets/portfolio/iipl-cashmemo.webp";
import iiplLeadImage from "@/assets/portfolio/iipl-lead.webp";
import iiplRentingImage from "@/assets/portfolio/iipl-renting.webp";
import jetsetterssImage from "@/assets/portfolio/jetsetterss-travel.webp";
import rainfraRealImage from "@/assets/portfolio/rainfra-studio-real.webp";
import juxtudioRealImage from "@/assets/portfolio/juxtudio-interior.webp";
import solidedgeRealImage from "@/assets/portfolio/solidedge-construction-real.webp";

const getImgSrc = (img: any) => (typeof img === "string" ? img : img?.src || img);

export interface Project {
  slug: string;
  title: string;
  category: string;
  meta: string;
  description: string;
  image: string;
  source: "hardcoded" | "db";
}

// Exact 8 Projects Ordered as Requested by User:
// 1. IIPL Billing Saas
// 2. IIPL Cashmemo
// 3. IIPL Lead
// 4. IIPL Renting
// 5. Jetsetterss Travel
// 6. Ra Infra Studio
// 7. Juxtudio
// 8. Solid Edge Construction
const verifiedProjects: Project[] = [
  {
    slug: "iipl-billing",
    title: "IIPL Billing SaaS",
    category: "Proprietary SaaS",
    meta: "PROPRIETARY SAAS · 2026",
    description: "High-velocity commerce billing ERP with automated GST split, real-time inventory catalog synchronization, and natural AI metrics.",
    image: getImgSrc(iiplBillingImage),
    source: "hardcoded",
  },
  {
    slug: "iipl-cashmemo",
    title: "IIPL Cashmemo",
    category: "Proprietary SaaS",
    meta: "PROPRIETARY SAAS · 2026",
    description: "Enterprise management portal for tenant invoices, office rent, commercial electricity billing, and instant SVG master vector printing.",
    image: getImgSrc(iiplCashmemoImage),
    source: "hardcoded",
  },
  {
    slug: "lead-itoby",
    title: "IIPL Lead",
    category: "Proprietary SaaS",
    meta: "PROPRIETARY SAAS · 2026",
    description: "Official B2B sales automation CRM product by Itoby Infotech Pvt Ltd with Google Maps scraper, AI website auditor, and AI phone agents.",
    image: getImgSrc(iiplLeadImage),
    source: "hardcoded",
  },
  {
    slug: "rent-itoby",
    title: "IIPL Renting",
    category: "Proprietary SaaS",
    meta: "PROPRIETARY SAAS · 2026",
    description: "Comprehensive property management portal tracking multi-building units, tenant agreements, occupancy rates, and revenue forecasting.",
    image: getImgSrc(iiplRentingImage),
    source: "hardcoded",
  },
  {
    slug: "jetsetterss-travel",
    title: "Jetsetterss Travel",
    category: "Travel & Flights",
    meta: "TRAVEL & FLIGHTS · 2025",
    description: "Luxury travel booking portal with flight search, cruise packages, hotel reservations, and handpicked concierge flight planning.",
    image: getImgSrc(jetsetterssImage),
    source: "hardcoded",
  },
  {
    slug: "rainfra-studio",
    title: "Ra Infra Studio",
    category: "Architecture",
    meta: "ARCHITECTURE · 2025",
    description: "Architecture, interior & planning portfolio showcasing commercial developments and luxury residential projects like HL Residency.",
    image: getImgSrc(rainfraRealImage),
    source: "hardcoded",
  },
  {
    slug: "juxtudio",
    title: "Juxtudio",
    category: "Spatial Design",
    meta: "SPATIAL DESIGN · 2025",
    description: "Interior design studio transforming chaos into masterpiece design, featuring modern workspace interiors and architectural concepts.",
    image: getImgSrc(juxtudioRealImage),
    source: "hardcoded",
  },
  {
    slug: "solidedgeconstructions",
    title: "Solid Edge Construction",
    category: "Infrastructure",
    meta: "INFRASTRUCTURE · 2025",
    description: "Civil contracting and luxury renovation firm built strong with finished premium marble polishing and corporate contracting capabilities.",
    image: getImgSrc(solidedgeRealImage),
    source: "hardcoded",
  },
];

// Balanced coordinates centered and offset to the right so they NEVER overlap the left "Work, in depth" text
const tunnelCoordinates = [
  { left: "46%", top: "22%" },  // 1. IIPL Billing (Center)
  { left: "56%", top: "20%" },  // 2. IIPL Cashmemo (Right)
  { left: "44%", top: "24%" },  // 3. IIPL Lead (Center-Left)
  { left: "54%", top: "22%" },  // 4. IIPL Renting (Right)
  { left: "46%", top: "20%" },  // 5. Jetsetterss Travel (Center)
  { left: "56%", top: "24%" },  // 6. Ra Infra Studio (Right)
  { left: "44%", top: "22%" },  // 7. Juxtudio (Center-Left)
  { left: "54%", top: "20%" },  // 8. Solid Edge Construction (Right)
];

/* =========================================================================
   3D PERSPECTIVE TUNNEL CARD (.ix-glass .ix-shot)
   - Real 3D Z-axis translation in 1200px perspective
   - Optical zoom magnification as card approaches viewer
   - Wide spacing (gap = 1600px): Each card completes its full zoom before
     the next card begins zooming in. Zero visual clutter or collision.
   - Exact 1024 / 480 widescreen ratio: 100% full screenshot fit.
   - Dual-theme support: #161616 in dark mode, #F4F6F8 in light mode.
   ========================================================================= */
const VyntraTunnelCard = ({
  project,
  index,
  count,
  gap,
  progress,
  position,
}: {
  project: Project;
  index: number;
  count: number;
  gap: number;
  progress: MotionValue<number>;
  position: { left: string; top: string };
}) => {
  // Travel distance along tunnel
  const travel = useTransform(progress, (p) => p * (gap * (count - 1) + 400));

  // Z position: cards spaced with wide gap (1600px)
  const z = useTransform(travel, (t) => -index * gap + t);

  // Exact sequential alpha interpolation:
  // - Deep distance (z < -900): Completely invisible (opacity 0)
  // - Zoom-in approach (z between -900 and -250): Fades in smoothly as it starts zooming
  // - Primary full-zoom hold (z between -250 and +350): 100% visible, fully zoomed & readable
  // - Fly-past & exit (z between +350 and +750): Fades out smoothly as it zooms past the camera
  // - Exited (z > 750): Completely invisible (opacity 0)
  const opacity = useTransform(z, (curZ) => {
    if (curZ < -900) return 0;
    if (curZ < -250) return (curZ + 900) / 650;
    if (curZ < 350) return 1;
    if (curZ < 750) return Math.max(0, 1 - (curZ - 350) / 400);
    return 0;
  });

  const pointerEvents = useTransform(opacity, (o) => (o > 0.6 ? "auto" : "none"));

  // Native 3D Z translation
  const transform = useTransform(z, (curZ) => `translate3d(0, 0, ${curZ}px)`);

  return (
    <motion.article
      style={{
        left: position.left,
        top: position.top,
        transform,
        opacity,
        pointerEvents,
      }}
      className="absolute w-[min(38vw,520px)] rounded-[24px] bg-card/95 dark:bg-[#1a1a1a] border border-border/80 dark:border-white/10 p-[14px] shadow-[0_20px_50px_rgba(0,0,0,0.08)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.85)] group transition-all duration-300 hover:border-primary/50 dark:hover:border-primary/50 hover:shadow-[0_0_40px_hsl(var(--primary)/0.25)] transform-gpu will-change-transform"
    >
      <Link href={`/portfolio/${project.slug}`} className="block">
        {/* Subtle Glare Light Overlay */}
        <div className="absolute inset-0 rounded-[24px] bg-gradient-to-br from-white/10 via-transparent to-primary/5 dark:to-white/5 pointer-events-none" />

        {/* Card Image Frame (Exact 1024 / 480 widescreen ratio - 100% full screenshot fit) */}
        <div
          className="relative w-full rounded-[14px] overflow-hidden bg-muted/40 dark:bg-[#161616] mb-3 border border-border/60 dark:border-white/10 shadow-[inset_0_0_20px_rgba(0,0,0,0.15)] dark:shadow-[inset_0_0_20px_rgba(0,0,0,0.6)]"
          style={{ aspectRatio: "1024 / 480" }}
        >
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="block w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>

        {/* Caption Bar */}
        <div className="flex items-center justify-between gap-4 pt-2 px-1 pb-1">
          <div>
            <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-primary dark:text-cyan-400 mb-1">
              {project.meta}
            </p>
            <h3 className="font-heading font-semibold text-lg xl:text-xl text-card-foreground tracking-tight group-hover:text-primary dark:group-hover:text-cyan-300 transition-colors">
              {project.title}
            </h3>
          </div>

          <span className="shrink-0 inline-flex items-center gap-1.5 text-sm font-semibold text-primary dark:text-cyan-400 group-hover:text-foreground group-hover:translate-x-1 transition-all duration-300">
            <span>View</span>
            <span className="text-base">&rarr;</span>
          </span>
        </div>
      </Link>
    </motion.article>
  );
};

/* =========================================================================
   MAIN SECTION COMPONENT ("Work, in depth")
   ========================================================================= */
export const FeaturedProjectsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCounter, setActiveCounter] = useState("01 / 08");

  // Verified 8 Projects in User's exact requested sequence
  const allProjects = verifiedProjects;
  const count = allProjects.length;

  // Generous gap (1600px) so each card has its own dedicated zoom stage without overlap
  const gap = 1600;

  // Framer Motion pinned scroll tracking for Desktop
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Fluid spring physics for silky-smooth mouse-wheel response
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 95,
    damping: 28,
    mass: 0.15,
    restDelta: 0.001,
  });

  // Track the nearest project in focus along the tunnel to update counter (01/08, 02/08...)
  useMotionValueEvent(smoothProgress, "change", (p) => {
    const travel = p * (gap * (count - 1) + 400);
    let best = Infinity;
    let nearest = 0;
    for (let i = 0; i < count; i++) {
      const curZ = -i * gap + travel;
      const dist = Math.abs(curZ);
      if (dist < best) {
        best = dist;
        nearest = i;
      }
    }
    const pad = (n: number) => String(n).padStart(2, "0");
    setActiveCounter(`${pad(nearest + 1)} / ${pad(count)}`);
  });

  return (
    // Section canvas: strictly #161616 in dark mode, #F4F6F8 in light mode
    <section
      id="portfolio"
      className="relative w-full bg-[#F4F6F8] dark:bg-[#161616] text-foreground transition-colors duration-300"
    >
      {/* =========================================================================
          DESKTOP 3D PERSPECTIVE TUNNEL EXPERIENCE (SCREEN >= 1024px)
          - Pinned stage: sticky top-0 h-screen w-full
          - Outer container: h-[760vh] gives generous, unhurried scroll for all 8 projects
          - Perspective: 1200px creates authentic 3D optics
         ========================================================================= */}
      <div ref={containerRef} className="hidden lg:block relative h-[760vh]">
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-[#F4F6F8] dark:bg-[#161616]">
          
          {/* Pure Tone-Adaptive Background Canvas (Exact #161616 in Dark, #F4F6F8 in Light) */}
          <div className="absolute inset-0 bg-[#F4F6F8] dark:bg-[#161616] pointer-events-none transition-colors duration-300" />

          {/* Subtle Monochrome Tech Wireframe (Zero color tint, pure monochrome depth) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="relative w-80 h-80 flex items-center justify-center opacity-10 dark:opacity-15 pointer-events-none"
            >
              <div className="absolute inset-0 rounded-full border border-foreground/20 border-dashed" />
              <div className="absolute inset-8 rounded-full border border-foreground/15" />
              <div className="absolute inset-20 rounded-full border border-foreground/20 border-dotted" />
            </motion.div>
          </div>

          {/* ===================================================================
              PINNED HEADER: Stays fixed on top-left while cards fly past
             =================================================================== */}
          <div className="absolute top-12 xl:top-16 left-8 xl:left-16 z-20 pointer-events-none max-w-lg">
            {/* Pill: Selected Work */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 dark:bg-cyan-500/10 border border-primary/25 dark:border-cyan-500/30 text-primary dark:text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2.5 shadow-[0_0_20px_hsl(var(--primary)/0.2)] dark:shadow-[0_0_20px_rgba(6,182,212,0.25)] pointer-events-auto">
              <Sparkles size={12} className="text-primary dark:text-cyan-400 animate-pulse" />
              <span>Selected Work</span>
            </div>

            {/* Title: Work, in depth */}
            <h2 className="font-heading text-4xl sm:text-5xl xl:text-6xl font-bold tracking-tight text-foreground leading-tight">
              Work, in depth
            </h2>

            {/* Dynamic Real-Time Counter (01 / 08) */}
            <p className="mt-2 font-heading text-xl sm:text-2xl font-bold text-primary dark:text-cyan-400/90 tracking-wider">
              {activeCounter}
            </p>

            {/* Subtitle Paragraph */}
            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mt-3 max-w-sm line-clamp-2">
              Explore our portfolio of software engineering, website development, proprietary SaaS applications, and technical project implementations.
            </p>
          </div>

          {/* ===================================================================
              3D PERSPECTIVE TUNNEL SCENE (.ix-tunnel__scene)
              - perspective: 1200px
              - perspective-origin: 50% 50%
              - transform-style: preserve-3d
             =================================================================== */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              perspective: "1200px",
              perspectiveOrigin: "50% 50%",
              transformStyle: "preserve-3d",
            }}
          >
            {allProjects.map((project, idx) => (
              <VyntraTunnelCard
                key={project.slug}
                project={project}
                index={idx}
                count={count}
                gap={gap}
                progress={smoothProgress}
                position={tunnelCoordinates[idx % tunnelCoordinates.length]}
              />
            ))}
          </div>

          {/* Bottom Center Mouse Wheel / Scroll Indicator (Exact Vyntra UI from screenshot) */}
          <div className="absolute bottom-8 z-10 pointer-events-none flex flex-col items-center gap-2">
            <div className="w-5 h-8 rounded-full border border-border/80 dark:border-white/30 flex items-start justify-center p-1 bg-card/80 dark:bg-black/40 backdrop-blur-sm shadow-sm">
              <motion.div
                animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-2 rounded-full bg-primary dark:bg-cyan-400"
              />
            </div>
            <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-mono">
              Scroll
            </span>
          </div>

        </div>
      </div>

      {/* =========================================================================
          MOBILE & TABLET RESPONSIVE VIEW (< 1024px)
          - Falls back to a clean responsive grid with matching frosted glass aesthetic
         ========================================================================= */}
      <div className="block lg:hidden section-padding px-6 py-16 bg-[#F4F6F8] dark:bg-[#161616] text-foreground transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-primary/10 dark:bg-cyan-500/10 border border-primary/25 dark:border-cyan-500/25 text-primary dark:text-cyan-400 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles size={12} className="text-primary dark:text-cyan-400" />
              Selected Work
            </span>

            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight mb-3 text-foreground">
              Work, in depth
            </h2>

            <p className="text-muted-foreground text-sm leading-relaxed">
              Explore our portfolio of software engineering, website development, proprietary SaaS applications, and technical project implementations.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {allProjects.map((project) => (
              <article
                key={project.slug}
                className="rounded-[24px] bg-card/95 dark:bg-[#1a1a1a] border border-border/80 dark:border-white/10 p-[14px] shadow-lg dark:shadow-2xl transition-transform duration-300 hover:scale-[1.01]"
              >
                <Link href={`/portfolio/${project.slug}`} className="block">
                  <div
                    className="relative w-full rounded-[14px] overflow-hidden bg-muted/40 dark:bg-[#161616] mb-3 border border-border/60 dark:border-white/10 shadow-[inset_0_0_20px_rgba(0,0,0,0.15)] dark:shadow-[inset_0_0_20px_rgba(0,0,0,0.6)]"
                    style={{ aspectRatio: "1024 / 480" }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="block w-full h-full object-cover object-center"
                    />
                  </div>

                  <div className="flex items-center justify-between gap-4 pt-2 px-1 pb-1">
                    <div>
                      <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-primary dark:text-cyan-400 mb-1">
                        {project.meta}
                      </p>
                      <h3 className="font-heading font-semibold text-lg text-card-foreground">
                        {project.title}
                      </h3>
                    </div>

                    <span className="shrink-0 inline-flex items-center gap-1.5 text-sm font-semibold text-primary dark:text-cyan-400">
                      <span>View</span>
                      <span className="text-base">&rarr;</span>
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA Row */}
      <div className="container-wide relative z-20 pb-16 pt-8 bg-[#F4F6F8] dark:bg-[#161616] transition-colors duration-300">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <p className="text-muted-foreground text-sm font-medium">
            Want to explore all client projects and software solutions?
          </p>
          <Button
            variant="outline"
            asChild
            className="rounded-2xl border-border hover:border-primary hover:bg-primary/10 text-foreground gap-2 shadow-sm"
          >
            <Link href="/portfolio">
              <span>View Full Portfolio</span>
              <ExternalLink size={15} />
            </Link>
          </Button>
          <Button asChild className="rounded-2xl gap-2 shadow-xl shadow-primary/25 bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
            <Link href="/contact">
              <span>Start Your Project</span>
              <ArrowRight size={15} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
