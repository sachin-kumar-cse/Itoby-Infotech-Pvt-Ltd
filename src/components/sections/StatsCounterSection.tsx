"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import {
  Clock,
  Code2,
  Trophy,
  Globe,
  Users,
  ShieldCheck,
  Sparkles,
  Cpu,
  ChevronLeft,
  ChevronRight,
  Star,
} from "lucide-react";

// Exact company overview & core capabilities content preserved with 100% fidelity
const capabilitiesData = [
  {
    icon: Clock,
    display: "2017",
    label: "Established",
    description: "Incorporated in India",
    category: "Foundation & History",
    rating: "7+ Years Experience",
    badge: "Regd. 2017",
  },
  {
    icon: Code2,
    display: "Full-Stack",
    label: "Core Capabilities",
    description: "Web, SaaS & Mobile Apps",
    category: "Software Engineering",
    rating: "Enterprise Grade Stack",
    badge: "Full-Stack SDLC",
  },
  {
    icon: Trophy,
    display: "Agile",
    label: "Delivery Model",
    description: "Sprint-Based Engineering",
    category: "Agile Methodology",
    rating: "Requirement-Driven",
    badge: "100% Sprint Delivery",
  },
  {
    icon: Globe,
    display: "Global",
    label: "Client Services",
    description: "Serving India & USA",
    category: "International Delivery",
    rating: "Cross-Border Delivery",
    badge: "India & USA Clients",
  },
  {
    icon: Users,
    display: "Dedicated",
    label: "Technical Support",
    description: "Post-Launch Maintenance",
    category: "SLA Infrastructure",
    rating: "24/7 SLA Monitoring",
    badge: "12-Month Support",
  },
  {
    icon: ShieldCheck,
    display: "Enterprise",
    label: "Security & Standards",
    description: "NDA Protected Codebases",
    category: "Confidentiality & IP",
    rating: "Zero Data Leak Policy",
    badge: "SOC-Ready Security",
  },
  {
    icon: Sparkles,
    display: "AI & SaaS",
    label: "Proprietary Products",
    description: "IIPL Billing, Lead & CRM",
    category: "In-House SaaS Lab",
    rating: "Production AI Engines",
    badge: "5+ Live SaaS Systems",
  },
  {
    icon: Cpu,
    display: "Cloud Native",
    label: "Infrastructure",
    description: "AWS, Azure & Supabase",
    category: "Cloud Architecture",
    rating: "High-Availability SLAs",
    badge: "99.9% Uptime SLA",
  },
];

export const StatsCounterSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isSectionInView = useInView(sectionRef, { once: false, amount: 0.1 });

  const [containerWidth, setContainerWidth] = useState(1200);

  // High-performance animation state in refs for 60/120fps GPU updates with ZERO React re-renders
  const xOffsetRef = useRef(0);
  const velocityRef = useRef(0);
  const isDraggingRef = useRef(false);
  const isHoveredRef = useRef(false);
  const lastPointerXRef = useRef(0);
  const currentSpeedRef = useRef(0.42); // base glide speed px/frame (~25px/sec)
  const cardElementsRef = useRef<(HTMLDivElement | null)[]>([]);

  const cardWidth = 264; // Card width in px
  const cardGap = 28; // Spacing in px
  const cardStride = cardWidth + cardGap; // 292px
  const count = capabilitiesData.length;
  const loopPeriod = count * cardStride; // 2336px

  // Triple repeat for seamless wrap-around without pops or jumps
  const allCards = [...capabilitiesData, ...capabilitiesData, ...capabilitiesData];
  const totalCards = allCards.length;

  // Track exact container width for pixel-perfect curve matching
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Curve geometry parameters:
  // baseY: wire height at screen edges
  // dip: downward sag at screen center
  const baseY = 24;
  const dip = 60;

  // Update card positions, Y elevation, and rotation to be 100% mathematically attached to the wire
  // with natural physical pendulum sway ("hilte hue" motion)
  const updateCardPositions = useCallback((time: number) => {
    const width = containerWidth || 1200;
    const centerX = width / 2;
    const currentOffset = xOffsetRef.current;
    const activeVelocity = isDraggingRef.current
      ? velocityRef.current
      : (velocityRef.current - currentSpeedRef.current);

    for (let i = 0; i < totalCards; i++) {
      const el = cardElementsRef.current[i];
      if (!el) continue;

      // Base linear X position
      const basePos = i * cardStride;
      let curX = (basePos + currentOffset) % (totalCards * cardStride);
      if (curX < -cardStride * 2) curX += totalCards * cardStride;

      // Card center relative to screen center
      const cardCenter = curX + cardWidth / 2;
      const distFromCenter = cardCenter - centerX;
      const halfW = Math.max(300, width / 2);
      const u = distFromCenter / halfW;

      // EXACT PARABOLIC WIRE HEIGHT AT THIS X:
      // wireY = baseY + dip * (1 - u^2)
      // Card is positioned so its clip rivet hole (which sits 12px above card top) lands EXACTLY on the wire:
      // cardY = wireY + 12px
      const clampedU = Math.max(-1.5, Math.min(1.5, u));
      const wireY = baseY + dip * (1 - clampedU * clampedU);
      const cardY = wireY + 12;

      // EXACT TANGENT ROTATION ANGLE ALONG ROPE:
      // Slope of curve is dY/dx = - (4 * dip / width) * u
      const slope = -(4 * dip / width) * clampedU;
      const curveRotation = Math.atan(slope) * (180 / Math.PI);

      // NATURAL PHYSICAL PENDULUM SWAY ("hilate huye scroll"):
      // Each card has an organic phase offset so cards sway like real hanging badges in motion
      const swayFrequency = 2.8; // gentle natural rhythm
      const isHovered = isHoveredRef.current;
      const swayAmplitude = isHovered ? 1.4 : 3.8; // degrees of sway
      const phase = i * 0.78;
      const pendulumSway = Math.sin(time * swayFrequency + phase) * swayAmplitude;

      // Velocity-induced drag tilt (lean into the scroll motion)
      const velocityTilt = Math.max(-5.5, Math.min(5.5, activeVelocity * 1.5));

      // Combined total rotation around clip hole pivot
      const totalRotation = curveRotation + pendulumSway + velocityTilt;

      // Subtle scale emphasis in center
      const scale = Math.max(0.94, 1 - 0.06 * Math.min(1, Math.abs(u)));

      // GPU-accelerated transform with clip hole as rotation pivot
      el.style.transform = `translate3d(${curX.toFixed(2)}px, ${cardY.toFixed(2)}px, 0) rotate(${totalRotation.toFixed(2)}deg) scale(${scale.toFixed(3)})`;
      el.style.opacity = Math.abs(u) > 1.35 ? "0.2" : "1";
    }
  }, [containerWidth, totalCards, cardStride, cardWidth, baseY, dip]);

  // Main high-precision RAF loop with momentum physics & smooth deceleration
  useEffect(() => {
    let animationFrameId: number;
    let lastTime = performance.now();
    const targetAutoSpeed = 0.95; // increased speed for a lively, engaging glide

    const tick = (now: number) => {
      const delta = Math.min(34, now - lastTime);
      lastTime = now;
      const frameScale = delta / 16.67;
      const timeInSec = now * 0.001;

      if (isDraggingRef.current) {
        // Dragging is directly updated via pointer events
      } else {
        // Smoothly decay any swipe/flick momentum
        if (Math.abs(velocityRef.current) > 0.08) {
          xOffsetRef.current += velocityRef.current * frameScale;
          velocityRef.current *= 0.94; // natural friction
        } else {
          velocityRef.current = 0;
          // Smoothly ease speed to 0 when hovered, or back to targetAutoSpeed
          const desiredSpeed = isHoveredRef.current || !isSectionInView ? 0 : targetAutoSpeed;
          currentSpeedRef.current += (desiredSpeed - currentSpeedRef.current) * 0.08;

          xOffsetRef.current -= currentSpeedRef.current * frameScale;
        }

        // Invisible wrap-around by single loopPeriod (8 cards)
        if (xOffsetRef.current <= -loopPeriod) {
          xOffsetRef.current += loopPeriod;
        } else if (xOffsetRef.current > 0) {
          xOffsetRef.current -= loopPeriod;
        }
      }

      updateCardPositions(timeInSec);
      animationFrameId = requestAnimationFrame(tick);
    };

    animationFrameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isSectionInView, loopPeriod, updateCardPositions]);

  // Pointer drag interactions with velocity tracking & pointer capture
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    isDraggingRef.current = true;
    velocityRef.current = 0;
    lastPointerXRef.current = e.clientX;
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {}
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    const deltaX = e.clientX - lastPointerXRef.current;
    lastPointerXRef.current = e.clientX;
    xOffsetRef.current += deltaX;
    velocityRef.current = deltaX; // store velocity for momentum flick
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    isDraggingRef.current = false;
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {}
  };

  // Step controls (Left / Right buttons) with smooth momentum nudge
  const handleStep = (direction: "left" | "right") => {
    velocityRef.current = direction === "left" ? 14 : -14;
  };

  // SVG Bezier wire path: perfectly matches Y(x) = baseY + dip * (1 - u^2)
  const curveCenterX = containerWidth / 2;
  const wirePath = `M -80 ${baseY} Q ${curveCenterX} ${baseY + 2 * dip} ${containerWidth + 80} ${baseY}`;

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-24 relative overflow-hidden bg-background text-foreground transition-colors duration-300"
    >
      {/* Subtle Dot Grid Background */}
      <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.07] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      {/* Soft Ambient Radial Accents */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Header Container: Exact content preserved with 100% fidelity */}
      <div className="container-wide relative z-20 mb-12 sm:mb-14">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary font-semibold uppercase tracking-wider text-xs mb-4 shadow-sm">
            Established in 2017
          </span>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Company Overview & <span className="gradient-text">Core Capabilities</span>
          </h2>

          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Itoby Infotech Private Limited is an India-based technology and software development company incorporated in 2017.
          </p>

          {/* Carousel Step Controls */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <button
              onClick={() => handleStep("left")}
              aria-label="Previous capability"
              className="w-9 h-9 rounded-full bg-card border border-border/80 hover:border-primary text-foreground flex items-center justify-center shadow-sm hover:scale-105 active:scale-95 transition-all"
            >
              <ChevronLeft size={18} />
            </button>

            <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase px-2">
              Drag or swipe along the curve
            </span>

            <button
              onClick={() => handleStep("right")}
              aria-label="Next capability"
              className="w-9 h-9 rounded-full bg-card border border-border/80 hover:border-primary text-foreground flex items-center justify-center shadow-sm hover:scale-105 active:scale-95 transition-all"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>

      {/* =========================================================================
          CURVED SUSPENDED CAROUSEL STAGE
         ========================================================================= */}
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onMouseEnter={() => {
          isHoveredRef.current = true;
        }}
        onMouseLeave={() => {
          isHoveredRef.current = false;
          isDraggingRef.current = false;
        }}
        className="relative w-full h-[420px] select-none cursor-grab active:cursor-grabbing overflow-hidden"
      >
        {/* Curved Hanging Line (SVG Arc): Exact mathematical match to card elevation */}
        <div className="absolute top-0 left-0 right-0 w-full h-[140px] pointer-events-none z-10 overflow-visible">
          <svg
            className="w-full h-full overflow-visible"
            viewBox={`0 0 ${containerWidth} 140`}
            preserveAspectRatio="none"
          >
            <defs>
              <filter id="wire-glow-filter" x="-20%" y="-40%" width="140%" height="180%">
                <feGaussianBlur stdDeviation="3.5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Glowing guide aura */}
            <path
              d={wirePath}
              fill="none"
              stroke="#10b981"
              strokeWidth="5"
              strokeOpacity="0.18"
              filter="url(#wire-glow-filter)"
            />

            {/* Crisp Primary Hanging Wire */}
            <path
              d={wirePath}
              fill="none"
              stroke="url(#hanging-wire-gradient)"
              strokeWidth="2.5"
            />

            <linearGradient id="hanging-wire-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.35" />
              <stop offset="25%" stopColor="#06b6d4" stopOpacity="0.75" />
              <stop offset="50%" stopColor="#10b981" stopOpacity="0.95" />
              <stop offset="75%" stopColor="#06b6d4" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.35" />
            </linearGradient>
          </svg>
        </div>

        {/* Carousel Cards Track */}
        <div className="relative w-full h-full pointer-events-none">
          {allCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={`${card.label}-${idx}`}
                ref={(el) => {
                  cardElementsRef.current[idx] = el;
                }}
                className="absolute top-0 left-0 will-change-transform pointer-events-auto transform-gpu select-none"
                style={{
                  width: `${cardWidth}px`,
                  transformOrigin: "50% -12px", // Pivot point at the exact clip hole
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                }}
              >
                {/* Physical Hanging Clip / Badge: 100% attached to the wire */}
                <div className="absolute -top-[22px] left-1/2 -translate-x-1/2 z-30 pointer-events-none flex flex-col items-center">
                  <div className="w-7 h-[34px] rounded-[5px] bg-gradient-to-b from-emerald-400 via-teal-400 to-emerald-600 p-[1.5px] shadow-[0_4px_10px_rgba(0,0,0,0.25)] flex items-center justify-center">
                    <div className="w-full h-full rounded-[3.5px] bg-gradient-to-b from-emerald-500 via-teal-600 to-emerald-700 flex flex-col items-center justify-start pt-1.5">
                      {/* Rivet Hole: centered at exactly Y_wire */}
                      <div className="w-3 h-3 rounded-full bg-white shadow-inner border border-teal-900/40 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-teal-950" />
                      </div>
                      {/* Metallic bracket notch clamping the card */}
                      <div className="w-3.5 h-0.5 bg-emerald-300/40 rounded-full mt-2" />
                    </div>
                  </div>
                </div>

                {/* Card Body: Clamped directly under the clip with zero gap */}
                <div className="relative w-full min-h-[300px] rounded-[24px] bg-card/95 dark:bg-[#1a1a1a] border border-border/80 dark:border-white/10 p-6 flex flex-col items-center justify-between text-center shadow-[0_15px_35px_rgba(0,0,0,0.06)] dark:shadow-[0_25px_50px_rgba(0,0,0,0.7)] backdrop-blur-xl transition-shadow duration-300 hover:shadow-2xl hover:border-primary/50 dark:hover:border-primary/50 group">
                  {/* Subtle Card Glare Highlight */}
                  <div className="absolute inset-0 rounded-[24px] bg-gradient-to-b from-white/10 dark:from-white/[0.04] to-transparent pointer-events-none" />

                  {/* Top: Large Brand Icon Container */}
                  <div className="relative z-10 w-16 h-16 rounded-2xl bg-primary/10 dark:bg-white/[0.06] border border-primary/20 dark:border-white/10 flex items-center justify-center mb-2 group-hover:scale-110 group-hover:bg-primary/15 transition-all duration-300 shadow-sm">
                    <Icon className="text-primary w-8 h-8 group-hover:rotate-6 transition-transform duration-300" />
                  </div>

                  {/* Middle: Display & Labels */}
                  <div className="relative z-10 space-y-1.5 my-auto">
                    <p className="text-2xl sm:text-3xl font-display font-extrabold text-foreground tracking-tight group-hover:text-primary transition-colors">
                      {card.display}
                    </p>
                    <p className="text-xs sm:text-sm font-bold text-foreground/90 uppercase tracking-wider">
                      {card.label}
                    </p>
                    <p className="text-xs text-muted-foreground line-clamp-1 leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  {/* Bottom: SaaSHub Style Star Rating Pill */}
                  <div className="relative z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/20 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 shadow-sm">
                    <Star size={11} className="fill-emerald-500 text-emerald-500" />
                    <span>4.9/5</span>
                    <span className="opacity-40">·</span>
                    <span className="truncate max-w-[130px]">{card.rating}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
