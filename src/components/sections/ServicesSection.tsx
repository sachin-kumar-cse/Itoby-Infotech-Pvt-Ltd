"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import {
  Globe,
  Smartphone,
  TrendingUp,
  Code2,
  Cloud,
  ArrowUpRight,
  Sparkles,
  Bot,
  Building2,
  Receipt,
  PhoneCall,
  ExternalLink,
  Zap,
  ShieldCheck,
  Activity,
  Layers,
  Terminal,
  Database,
  Server,
  Cpu,
  ArrowRight,
  SlidersHorizontal,
  FileSpreadsheet,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export interface ServiceItem {
  icon: any;
  title: string;
  description: string;
  path: string;
  category: "saas" | "development" | "marketing" | "cloud";
  isSaaS?: boolean;
  isExternal?: boolean;
  badge?: string;
}

export const allServices: ServiceItem[] = [
  // IIPL SaaS Products
  {
    icon: Bot,
    title: "IIPL Lead",
    description: "AI Cold Email & B2B Lead Generation CRM. Google Maps scraper, 15s AI site auditor & outreach outbox.",
    path: "https://lead.itobyinfotech.com",
    category: "saas",
    isSaaS: true,
    isExternal: true,
    badge: "Flagship SaaS",
  },
  {
    icon: Building2,
    title: "IIPL Renting",
    description: "Enterprise commercial office leasing & tenant CRM. Rent collection, agreement generator & fleet tracking.",
    path: "https://rent.itobyinfotech.com",
    category: "saas",
    isSaaS: true,
    isExternal: true,
    badge: "PropTech CRM",
  },
  {
    icon: Receipt,
    title: "IIPL Billing",
    description: "Automated GST invoicing, client ledgers, retainer subscriptions & payment gateway integration.",
    path: "https://billing.itobyinfotech.com",
    category: "saas",
    isSaaS: true,
    isExternal: true,
    badge: "FinTech GST",
  },
  {
    icon: FileSpreadsheet,
    title: "IIPL Cashmemo",
    description: "Instant retail cash invoice generator. Instant WhatsApp PDF sharing & thermal printer ready.",
    path: "https://cashmemo.itobyinfotech.com",
    category: "saas",
    isSaaS: true,
    isExternal: true,
    badge: "POS Receipts",
  },
  {
    icon: PhoneCall,
    title: "IIPL Calling",
    description: "Autonomous conversational AI voice agents for restaurant table bookings, insurance renewals & follow-ups.",
    path: "https://calling.itobyinfotech.com",
    category: "saas",
    isSaaS: true,
    isExternal: true,
    badge: "Voice AI Bot",
  },

  // Core Digital Services
  {
    icon: Code2,
    title: "Custom Software Development",
    description: "Bespoke enterprise software, microservices architecture, and scalable workflow automation.",
    path: "/services/custom-software-development",
    category: "development",
  },
  {
    icon: Bot,
    title: "AI Development Services",
    description: "Enterprise RAG AI models, LLM fine-tuning, and intelligent automation systems.",
    path: "/services/ai-development-company",
    category: "development",
  },
  {
    icon: Sparkles,
    title: "SaaS Development Company",
    description: "Multi-tenant cloud SaaS products with Supabase PostgreSQL RLS and sub-second performance.",
    path: "/services/saas-development-company",
    category: "development",
  },
  {
    icon: Globe,
    title: "Web Design & Development",
    description: "High-converting Next.js 15 web applications engineered for 100/100 Core Web Vitals.",
    path: "/services/web-design",
    category: "development",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native iOS, Android, and Flutter cross-platform apps built for high scale.",
    path: "/services/mobile-app",
    category: "development",
  },
  {
    icon: Bot,
    title: "AI Agent Development",
    description: "Autonomous multi-tool AI agents capable of planning and executing complex API workflows.",
    path: "/services/ai-agent-development",
    category: "development",
  },
  {
    icon: PhoneCall,
    title: "AI Chatbot Development",
    description: "24/7 conversational RAG AI chatbots for customer support and lead intake.",
    path: "/services/ai-chatbot-development",
    category: "development",
  },
  {
    icon: Building2,
    title: "ERP Software Development",
    description: "Custom ERP systems for manufacturing, inventory control, and financial operations.",
    path: "/services/erp-development",
    category: "development",
  },
  {
    icon: TrendingUp,
    title: "CRM Software Development",
    description: "Tailored sales pipeline CRMs, lead scoring automation, and tenant portals.",
    path: "/services/crm-development",
    category: "development",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Data-driven SEO, GEO AI search optimization, and performance marketing.",
    path: "/services/digital-marketing",
    category: "marketing",
  },
  {
    icon: Cloud,
    title: "Microsoft Office 365",
    description: "Enterprise Microsoft 365 cloud migration, security compliance, and licensing.",
    path: "/services/microsoft-365",
    category: "cloud",
  },
];

interface StudioCard {
  id: string;
  tags: string[];
  theme: "purple" | "white" | "lime";
  tiltDeg: number;
  icon3D: string;
  title: string;
  description: string;
  actionUrl: string;
  isExternal: boolean;
  renderCapsule: () => React.ReactNode;
}

const studioCards: StudioCard[] = [
  // Card 1: IIPL Lead (Electric Purple - as in reference screenshot)
  {
    id: "iipl-lead",
    tags: ["B2B LEAD GEN", "AI SCRAPER", "OUTBOX"],
    theme: "purple",
    tiltDeg: -2.5,
    icon3D: "💎",
    title: "IIPL LEAD & AI ENGINE",
    description: "Automated Google Maps scraper, 15-second instant AI site audit & multi-channel cold email outreach.",
    actionUrl: "https://lead.itobyinfotech.com",
    isExternal: true,
    renderCapsule: () => (
      <div className="w-full h-full bg-gradient-to-b from-[#3d1bb8] to-[#1e0a75] p-3 flex flex-col justify-between text-white">
        <div className="flex items-center justify-between text-[10px] font-mono text-purple-200">
          <span>● AI AUDITOR</span>
          <span className="bg-emerald-400 text-slate-950 px-1.5 py-0.5 rounded-full text-[9px] font-extrabold">LIVE</span>
        </div>
        <div className="space-y-1.5 my-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-2 flex items-center justify-between border border-white/10">
            <span className="text-[11px] font-bold text-white truncate max-w-[130px]">Apex Global</span>
            <span className="text-[9px] bg-emerald-400 text-slate-950 font-extrabold px-1.5 py-0.5 rounded">Verified</span>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-2 flex items-center justify-between border border-white/10">
            <span className="text-[11px] font-bold text-white truncate max-w-[130px]">NextGen Labs</span>
            <span className="text-[9px] text-purple-200 font-bold">98% Match</span>
          </div>
        </div>
        <div className="flex justify-between items-center text-[9px] font-mono text-purple-200 border-t border-white/10 pt-1">
          <span>50k+ Leads/mo</span>
          <span className="text-emerald-300 font-bold">Auto-Outbox ON</span>
        </div>
      </div>
    ),
  },

  // Card 2: IIPL Renting (Crisp Pure White - as in reference screenshot)
  {
    id: "iipl-renting",
    tags: ["COMMERCIAL LEASING", "PROPTECH"],
    theme: "white",
    tiltDeg: 0,
    icon3D: "🏛️",
    title: "IIPL RENTING PLATFORM",
    description: "Enterprise commercial office leasing CRM, automated digital lease agreements & fleet tracking.",
    actionUrl: "https://rent.itobyinfotech.com",
    isExternal: true,
    renderCapsule: () => (
      <div className="w-full h-full bg-gradient-to-b from-slate-100 to-slate-200 p-3 flex flex-col justify-between text-slate-900">
        <div className="flex items-center justify-between text-[10px] font-mono text-slate-600">
          <span>TOWER A • LEASING</span>
          <span className="bg-blue-600/15 text-blue-600 px-1.5 py-0.5 rounded-full text-[9px] font-bold">96% OCCUPIED</span>
        </div>
        <div className="my-auto space-y-1 text-center">
          <p className="text-[9px] text-slate-500 uppercase tracking-wider">Monthly Collections</p>
          <p className="text-base font-mono font-extrabold text-blue-600 leading-tight">₹24,85,000</p>
          <div className="bg-white rounded-lg p-1.5 border border-slate-300 text-[10px] flex justify-between">
            <span className="font-semibold text-slate-800">Commercial Lease</span>
            <span className="text-emerald-600 font-bold text-[9px]">E-Signed ✓</span>
          </div>
        </div>
        <div className="flex justify-between items-center text-[9px] font-mono text-slate-500 border-t border-slate-300 pt-1">
          <span>12 Towers</span>
          <span className="font-bold text-slate-800">Fleet Active</span>
        </div>
      </div>
    ),
  },

  // Card 3: IIPL Calling (Electric Lime - as in reference screenshot)
  {
    id: "iipl-calling",
    tags: ["VOICE AI", "SUB-500MS"],
    theme: "lime",
    tiltDeg: 4,
    icon3D: "⚡",
    title: "IIPL CALLING VOICE BOT",
    description: "Autonomous conversational AI voice agents for table bookings, insurance follow-ups & customer qualification.",
    actionUrl: "https://calling.itobyinfotech.com",
    isExternal: true,
    renderCapsule: () => (
      <div className="w-full h-full bg-[#111317] p-3 flex flex-col justify-between text-white border border-black/30">
        <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
          <span className="text-[#B8F625] flex items-center gap-1 font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B8F625] animate-ping" /> CALL ACTIVE
          </span>
          <span className="text-[9px] text-slate-300 font-mono">LATENCY: 412MS</span>
        </div>
        <div className="flex items-center justify-center gap-1.5 h-10 my-auto">
          {[35, 75, 100, 60, 85, 95, 70, 40, 85, 55, 90, 45].map((h, i) => (
            <span
              key={i}
              className="w-1 bg-[#B8F625] rounded-full animate-pulse"
              style={{
                height: `${h}%`,
                animationDelay: `${i * 0.08}s`,
              }}
            />
          ))}
        </div>
        <div className="bg-white/10 rounded-lg p-1.5 text-[9px] font-mono text-slate-200">
          Agent: &quot;Table for 4 confirmed for Friday 8 PM.&quot;
        </div>
      </div>
    ),
  },

  // Card 4: IIPL Billing & Cashmemo (Crisp Pure White)
  {
    id: "iipl-billing",
    tags: ["GST INVOICING", "POS RECEIPTS"],
    theme: "white",
    tiltDeg: 0,
    icon3D: "🧾",
    title: "IIPL BILLING & CASHMEMO",
    description: "Automated GST invoices, recurring client retainers & instant retail POS receipts on WhatsApp.",
    actionUrl: "https://billing.itobyinfotech.com",
    isExternal: true,
    renderCapsule: () => (
      <div className="w-full h-full bg-gradient-to-b from-slate-100 to-slate-200 p-3 flex flex-col justify-between text-slate-900">
        <div className="flex items-center justify-between text-[10px] font-mono text-slate-600">
          <span>TAX INVOICE</span>
          <span className="text-[9px] font-bold text-emerald-600 bg-emerald-500/10 px-1.5 py-0.5 rounded-full">GST 100%</span>
        </div>
        <div className="my-auto space-y-1.5">
          <div className="bg-white p-1.5 rounded-lg border border-slate-300 flex items-center justify-between">
            <div>
              <p className="text-[11px] font-bold text-slate-900">Retainer Invoice</p>
              <p className="text-[8px] text-slate-500">CGST (9%) + SGST (9%)</p>
            </div>
            <p className="text-[11px] font-mono font-extrabold text-blue-600">₹1,18,000</p>
          </div>
          <div className="bg-emerald-500/15 text-emerald-700 rounded-lg p-1 text-[9px] font-bold flex items-center gap-1">
            <span>✓ WhatsApp PDF sent instantly</span>
          </div>
        </div>
        <div className="flex justify-between items-center text-[9px] font-mono text-slate-500 border-t border-slate-300 pt-1">
          <span>POS Thermal Ready</span>
          <span className="font-bold text-emerald-600">Paid NEFT</span>
        </div>
      </div>
    ),
  },

  // Card 5: Custom Software Engineering (Electric Purple)
  {
    id: "custom-software",
    tags: ["MICROSERVICES", "FULL-STACK"],
    theme: "purple",
    tiltDeg: -3,
    icon3D: "⚙️",
    title: "CUSTOM SOFTWARE LAB",
    description: "Bespoke enterprise software architectures, microservices pipelines & sub-second databases.",
    actionUrl: "/services/custom-software-development",
    isExternal: false,
    renderCapsule: () => (
      <div className="w-full h-full bg-gradient-to-b from-[#3d1bb8] to-[#1e0a75] p-3 flex flex-col justify-between text-white font-mono">
        <div className="flex items-center justify-between text-[10px] text-purple-200">
          <span>● CLOUD CLUSTER</span>
          <span className="bg-emerald-400 text-slate-950 text-[8px] font-extrabold px-1.5 py-0.5 rounded">99.99% SLA</span>
        </div>
        <div className="my-auto space-y-1.5">
          <div className="bg-white/10 rounded-lg p-1.5 text-[10px] flex justify-between items-center border border-white/10">
            <span>API Gateway</span>
            <span className="text-emerald-300 font-bold text-[9px]">200 OK • 12ms</span>
          </div>
          <div className="bg-white/10 rounded-lg p-1.5 text-[10px] flex justify-between items-center border border-white/10">
            <span>PostgreSQL RLS</span>
            <span className="text-purple-200 text-[9px]">Active Pool</span>
          </div>
        </div>
        <div className="flex justify-between items-center text-[9px] text-purple-300 border-t border-white/10 pt-1">
          <span>Zero Vendor Lock-in</span>
          <span className="text-emerald-300 font-bold">100k req/min</span>
        </div>
      </div>
    ),
  },

  // Card 6: AI Development & Autonomous Agents (Crisp Pure White)
  {
    id: "ai-development",
    tags: ["ENTERPRISE RAG", "LLM AGENTS"],
    theme: "white",
    tiltDeg: 0,
    icon3D: "🧠",
    title: "AI & AUTONOMOUS AGENTS",
    description: "Enterprise RAG models, autonomous multi-tool planning agents & conversational AI assistants.",
    actionUrl: "/services/ai-development-company",
    isExternal: false,
    renderCapsule: () => (
      <div className="w-full h-full bg-gradient-to-b from-slate-100 to-slate-200 p-3 flex flex-col justify-between text-slate-900 font-mono">
        <div className="flex items-center justify-between text-[10px] text-slate-600">
          <span>RAG ORCHESTRATOR</span>
          <span className="bg-purple-600/15 text-purple-700 px-1.5 py-0.5 rounded-full text-[9px] font-bold">MULTI-TOOL</span>
        </div>
        <div className="my-auto space-y-1 text-[10px]">
          <div className="bg-white p-1.5 rounded-lg border border-slate-300">
            <span className="text-blue-600 font-bold">Agent Plan:</span> Financial synthesis
          </div>
          <div className="bg-white p-1.5 rounded-lg border border-slate-300 flex justify-between items-center">
            <span className="text-slate-700">vector_search(docs)</span>
            <span className="text-emerald-600 font-bold text-[9px]">sim: 0.96</span>
          </div>
        </div>
        <div className="flex justify-between items-center text-[9px] text-slate-500 border-t border-slate-300 pt-1">
          <span>Guardrails: Verified</span>
          <span className="text-emerald-600 font-bold">Autonomous</span>
        </div>
      </div>
    ),
  },

  // Card 7: Web & Mobile Development (Electric Lime)
  {
    id: "web-mobile",
    tags: ["NEXT.JS 15", "FLUTTER", "CROSS-PLATFORM"],
    theme: "lime",
    tiltDeg: 4,
    icon3D: "📱",
    title: "WEB & MOBILE APPLICATIONS",
    description: "Ultra-fast 100/100 Core Web Vitals web platforms and cross-platform native mobile applications.",
    actionUrl: "/services/web-design",
    isExternal: false,
    renderCapsule: () => (
      <div className="w-full h-full bg-[#111317] p-3 flex flex-col justify-between text-white border border-black/30">
        <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
          <span className="text-[#B8F625] font-bold">LIGHTHOUSE 100</span>
          <span className="text-[9px] text-slate-300 font-mono">60 FPS FLUID</span>
        </div>
        <div className="grid grid-cols-3 gap-1.5 my-auto text-center font-mono">
          <div className="bg-white/10 p-1.5 rounded-lg border border-white/10">
            <p className="text-[11px] font-bold text-[#B8F625]">100</p>
            <p className="text-[7px] text-slate-300 mt-0.5">PERF</p>
          </div>
          <div className="bg-white/10 p-1.5 rounded-lg border border-white/10">
            <p className="text-[11px] font-bold text-[#B8F625]">100</p>
            <p className="text-[7px] text-slate-300 mt-0.5">SEO</p>
          </div>
          <div className="bg-white/10 p-1.5 rounded-lg border border-white/10">
            <p className="text-[11px] font-bold text-[#B8F625]">100</p>
            <p className="text-[7px] text-slate-300 mt-0.5">A11Y</p>
          </div>
        </div>
        <div className="flex justify-between items-center text-[9px] font-mono text-slate-400 border-t border-white/10 pt-1">
          <span>iOS • Android • Web</span>
          <span className="text-[#B8F625] font-bold">&lt; 0.4s FCP</span>
        </div>
      </div>
    ),
  },

  // Card 8: Enterprise ERP, CRM & Cloud (Electric Purple)
  {
    id: "erp-crm-cloud",
    tags: ["CUSTOM ERP", "CRMS", "MICROSOFT 365"],
    theme: "purple",
    tiltDeg: -2.5,
    icon3D: "🌐",
    title: "ENTERPRISE ERP & CRM LAB",
    description: "End-to-end inventory ERPs, automated sales pipeline CRMs & Microsoft 365 cloud migrations.",
    actionUrl: "/services/erp-development",
    isExternal: false,
    renderCapsule: () => (
      <div className="w-full h-full bg-gradient-to-b from-[#3d1bb8] to-[#1e0a75] p-3 flex flex-col justify-between text-white font-mono border border-white/10">
        <div className="flex items-center justify-between text-[10px] text-purple-200">
          <span>ERP REAL-TIME SYNC</span>
          <span className="bg-emerald-400 text-slate-950 text-[8px] font-extrabold px-1.5 py-0.5 rounded">ISO 27001</span>
        </div>
        <div className="my-auto space-y-1.5 text-[10px]">
          <div className="bg-white/10 rounded-lg p-1.5 flex justify-between items-center border border-white/10">
            <span>Auto-Reorder</span>
            <span className="text-emerald-300 font-bold text-[9px]">Triggered</span>
          </div>
          <div className="bg-white/10 rounded-lg p-1.5 flex justify-between items-center border border-white/10">
            <span>Pipeline Velocity</span>
            <span className="text-purple-200 font-bold text-[9px]">+38% YoY</span>
          </div>
        </div>
        <div className="flex justify-between items-center text-[9px] text-purple-300 border-t border-white/10 pt-1">
          <span>Microsoft 365 Cloud</span>
          <span className="text-emerald-300 font-bold">Compliant</span>
        </div>
      </div>
    ),
  },
];

export const ServicesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const [windowWidth, setWindowWidth] = useState(1400);
  const [trackWidth, setTrackWidth] = useState(3600);

  // Framer Motion pinned scroll tracking for Desktop
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Calculate track width and window width
  useEffect(() => {
    const updateDims = () => {
      setWindowWidth(window.innerWidth);
      if (trackRef.current) {
        setTrackWidth(trackRef.current.scrollWidth);
      }
    };
    updateDims();
    window.addEventListener("resize", updateDims);
    let ro: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined" && trackRef.current) {
      ro = new ResizeObserver(() => updateDims());
      ro.observe(trackRef.current);
    }
    const timer = setTimeout(updateDims, 300);
    return () => {
      window.removeEventListener("resize", updateDims);
      ro?.disconnect();
      clearTimeout(timer);
    };
  }, []);

  // 1. CARDS START 100% OFF-SCREEN TO THE RIGHT ("card right side me chhupa rahega")
  // 2. SCROLL GLIDES THEM SMOOTHLY ACROSS THE SCREEN
  // 3. CARDS EXIT 100% OFF-SCREEN TO THE LEFT ("last card left side me chhup ke chala jayega")
  // 4. WHEN LAST CARD EXITS, BACKGROUND TEXT BECOMES FULLY VISIBLE AGAIN ("jab last scroll card scroll ho to back pe text hai wo visible ho")
  // 5. THEN SECTION UNPINS AND NEXT SECTION ROLLS UP
  const startX = windowWidth + 60;
  const endX = -(trackWidth + 60);

  // Cards translate between scroll progress 0.02 and 0.86
  const x = useTransform(scrollYProgress, [0.02, 0.86], [startX, endX]);

  // High-performance spring: responsive, silky smooth, zero stutter/lag
  const smoothX = useSpring(x, {
    stiffness: 280,
    damping: 34,
    mass: 0.05,
    restDelta: 0.001,
  });

  // Background text:
  // - 100% visible at start (0 -> 0.12)
  // - Fades down while cards are actively in center view
  // - Fades BACK IN to 100% full visibility as the last card scrolls away (0.70 -> 0.85 -> 1.0)
  const introOpacity = useTransform(
    scrollYProgress,
    [0, 0.12, 0.70, 0.85, 1],
    [1, 0, 0, 1, 1]
  );
  const introX = useTransform(
    scrollYProgress,
    [0, 0.12, 0.70, 0.85, 1],
    [0, -25, 25, 0, 0]
  );
  const introY = useTransform(
    scrollYProgress,
    [0, 0.12, 0.70, 0.85, 1],
    [0, -18, 18, 0, 0]
  );
  const introScale = useTransform(
    scrollYProgress,
    [0, 0.12, 0.70, 0.85, 1],
    [1, 0.94, 0.94, 1, 1]
  );
  const hintOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);

  const categories = [
    { id: "all", label: "All 16 Solutions" },
    { id: "saas", label: "IIPL SaaS Suite" },
    { id: "development", label: "Software & AI" },
    { id: "marketing", label: "Marketing" },
    { id: "cloud", label: "Cloud Services" },
  ];

  const filteredDirectory =
    activeCategory === "all"
      ? allServices
      : allServices.filter((s) => s.category === activeCategory);

  const getThemeClasses = (theme: StudioCard["theme"]) => {
    switch (theme) {
      case "purple":
        return {
          cardBg: "bg-[#6339F4] text-white shadow-2xl border border-white/10",
          tagBg: "bg-white/20 text-white border border-white/20 font-bold",
          titleColor: "text-white",
          descColor: "text-purple-100",
          actionBtn: "bg-white text-[#6339F4] font-extrabold hover:bg-white/90 shadow-md",
        };
      case "lime":
        return {
          cardBg: "bg-[#B8F625] text-black shadow-2xl border border-black/10",
          tagBg: "bg-black/10 text-black border border-black/10 font-bold",
          titleColor: "text-black",
          descColor: "text-black/85 font-medium",
          actionBtn: "bg-black text-[#B8F625] font-extrabold hover:bg-black/90 shadow-md",
        };
      case "white":
      default:
        return {
          cardBg: "bg-white text-slate-900 shadow-2xl border border-slate-200/90",
          tagBg: "bg-[#F1F3F6] text-[#374151] border border-slate-200/80 font-bold",
          titleColor: "text-[#0D1117]",
          descColor: "text-[#4B5563]",
          actionBtn: "bg-[#0D1117] text-white font-extrabold hover:bg-black/90 shadow-md",
        };
    }
  };

  return (
    <section id="services-section" className="relative bg-background">
      {/* =========================================================================
          DESKTOP PINNED HORIZONTAL EXPERIENCE (SCREEN >= 1024px)
          - Cards start 100% off-screen on the right (hidden)
          - Scroll glides cards smoothly across
          - Last card exits 100% off-screen to the left (hidden)
          - Section unpins, next section smoothly rolls up
         ========================================================================= */}
      <div ref={containerRef} className="hidden lg:block relative h-[280vh]">
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">
          {/* Subtle Clean Center Brand Glow (Single-tone, no muddy blur splotches) */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,hsl(var(--primary)/0.06),transparent_70%)] pointer-events-none" />

          {/* TOP PROGRESS PILL */}
          <div className="absolute top-8 right-10 z-40 flex items-center gap-3 bg-background/85 backdrop-blur-md px-4 py-2 rounded-full border border-border/80 shadow-md">
            <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Scroll to Explore
            </span>
            <div className="w-20 h-1.5 bg-secondary rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-primary rounded-full origin-left"
                style={{ scaleX: scrollYProgress }}
              />
            </div>
            <button
              onClick={() => setDialogOpen(true)}
              className="text-xs font-extrabold text-primary hover:underline flex items-center gap-1 cursor-pointer pl-1"
            >
              <SlidersHorizontal size={12} />
              All 16
            </button>
          </div>

          {/* ===================================================================
              BACKGROUND LAYER: CENTERED PINNED TEXT WITH DYNAMIC ANIMATIONS
             =================================================================== */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pointer-events-none z-10">
            {/* Ambient Breathing Glow Aura behind the text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10 overflow-hidden">
              <motion.div
                animate={{
                  scale: [1, 1.18, 1],
                  opacity: [0.35, 0.65, 0.35],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-[580px] h-[340px] bg-gradient-to-r from-primary/25 via-blue-500/20 to-cyan-400/20 blur-[110px] rounded-full"
              />
              {/* Subtle Concentric Orbital Tech Rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute w-[660px] h-[660px] rounded-full border border-primary/15 border-dashed"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                className="absolute w-[860px] h-[860px] rounded-full border border-primary/10 border-dotted"
              />
            </div>

            {/* INTRO TEXT: Animated & Dynamic */}
            <motion.div
              style={{ opacity: introOpacity, x: introX, y: introY, scale: introScale }}
              className="max-w-4xl flex flex-col items-center relative z-10"
            >
              {/* Animated Top Pill Badge with Light Beam Sweep */}
              <motion.div
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-primary/15 via-primary/25 to-primary/15 border border-primary/30 text-primary font-bold uppercase tracking-wider text-xs mb-5 shadow-[0_0_25px_hsl(var(--primary)/0.25)] overflow-hidden"
              >
                {/* Moving light beam */}
                <motion.div
                  animate={{ x: ["-100%", "250%"] }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatDelay: 1.2,
                  }}
                  className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 pointer-events-none"
                />
                <Sparkles size={13} className="text-primary animate-spin" style={{ animationDuration: "8s" }} />
                <span className="relative z-10">ENGINEERED BY ITOBY INFOTECH PVT LTD (IIPL)</span>
              </motion.div>

              {/* Main Heading with Animated Shimmering Gradient */}
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-display text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-foreground leading-[1.15] mb-5 select-none"
              >
                <span>Services &amp; SaaS Engineered to</span>{" "}
                <motion.span
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, hsl(var(--gradient-start)), hsl(var(--gradient-end)), hsl(var(--primary)), hsl(var(--gradient-start)))",
                    backgroundSize: "200% auto",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                  className="block sm:inline font-black drop-shadow-[0_0_35px_hsl(var(--primary)/0.35)]"
                >
                  Scale Your Business
                </motion.span>
              </motion.h2>

              {/* Description Paragraph with Tech Highlight Pill */}
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-muted-foreground text-base xl:text-lg max-w-3xl leading-relaxed"
              >
                Explore premium web design, mobile apps, digital marketing &amp; our proprietary{" "}
                <span className="text-foreground font-bold inline-block px-2.5 py-0.5 rounded-lg bg-primary/10 border border-primary/25 shadow-sm">
                  IIPL SaaS &amp; AI Voice Platforms
                </span>{" "}
                built for enterprise efficiency.
              </motion.p>

              {/* Hint */}
              <motion.div
                style={{ opacity: hintOpacity }}
                className="mt-8 flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-wider"
              >
                <span className="text-primary animate-pulse flex items-center gap-1">
                  <span>Mouse scroll down to slide cards</span>
                  <ArrowRight size={14} />
                </span>
              </motion.div>
            </motion.div>
          </div>

          {/* ===================================================================
              FOREGROUND LAYER: HORIZONTAL TRANSLATING CARDS TRACK
              Left origin is at 0px so when x = windowWidth + 60, cards are 100% off-screen right.
              Shifted down (translate-y-12 xl:translate-y-14) as requested ("card to thoda niche karo").
             =================================================================== */}
          <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 translate-y-12 xl:translate-y-14">
            <motion.div
              ref={trackRef}
              style={{ x: smoothX }}
              className="flex gap-7 items-center w-max pointer-events-auto transform-gpu will-change-transform"
            >
              {studioCards.map((card) => {
                const theme = getThemeClasses(card.theme);
                return (
                  <motion.div
                    key={card.id}
                    style={{ rotate: `${card.tiltDeg}deg` }}
                    whileHover={{ rotate: 0, scale: 1.03, y: -6 }}
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    className={`w-[310px] xl:w-[330px] h-[450px] xl:h-[470px] shrink-0 rounded-[2.2rem] ${theme.cardBg} p-5 xl:p-6 flex flex-col justify-between cursor-pointer transition-all duration-300 relative group overflow-hidden transform-gpu will-change-transform`}
                  >
                    {/* Top Bar: Tags + 3D Icon */}
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex flex-wrap gap-1.5">
                          {card.tags.map((t) => (
                            <span
                              key={t}
                              className={`text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full ${theme.tagBg}`}
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                        <span className="text-lg select-none">{card.icon3D}</span>
                      </div>

                      {/* Headline & Description */}
                      <h3 className={`font-display text-lg xl:text-xl font-extrabold uppercase tracking-tight leading-snug mb-1.5 ${theme.titleColor}`}>
                        {card.title}
                      </h3>
                      <p className={`text-xs leading-relaxed line-clamp-2 mb-2 ${theme.descColor}`}>
                        {card.description}
                      </p>
                    </div>

                    {/* Stadium / Oval Capsule Visual Mask */}
                    <div className="w-full h-[165px] xl:h-[180px] rounded-[1.6rem] overflow-hidden shadow-md border border-white/10 dark:border-black/20 my-auto">
                      {card.renderCapsule()}
                    </div>

                    {/* Bottom Action Button */}
                    <div className="pt-2">
                      {card.isExternal ? (
                        <a
                          href={card.actionUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-full py-2.5 rounded-full ${theme.actionBtn} font-extrabold text-[11px] shadow-sm flex items-center justify-center gap-1.5 transition-transform hover:scale-[1.02]`}
                        >
                          <span>LAUNCH SAAS PLATFORM</span>
                          <ExternalLink size={12} />
                        </a>
                      ) : (
                        <Link
                          href={card.actionUrl}
                          className={`w-full py-2.5 rounded-full ${theme.actionBtn} font-extrabold text-[11px] shadow-sm flex items-center justify-center gap-1.5 transition-transform hover:scale-[1.02]`}
                        >
                          <span>VIEW DETAILS</span>
                          <ArrowUpRight size={13} />
                        </Link>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          MOBILE & TABLET TOUCH-SWIPE CAROUSEL (< 1024px)
         ========================================================================= */}
      <div className="block lg:hidden section-padding">
        <div className="container-wide">
          {/* Mobile Header */}
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-primary font-bold uppercase tracking-wider text-xs px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 inline-flex items-center gap-1.5 shadow-sm mb-3">
              <Sparkles size={13} className="animate-pulse" />
              ENGINEERED BY ITOBY INFOTECH PVT LTD (IIPL)
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">
              Services &amp; SaaS Engineered to{" "}
              <motion.span
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, hsl(var(--gradient-start)), hsl(var(--gradient-end)), hsl(var(--primary)), hsl(var(--gradient-start)))",
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                className="font-black drop-shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
              >
                Scale Your Business
              </motion.span>
            </h2>
            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
              Explore premium web design, mobile apps, digital marketing &amp; our proprietary{" "}
              <strong className="text-foreground font-bold">IIPL SaaS &amp; AI Voice Platforms</strong>{" "}
              built for enterprise efficiency.
            </p>
          </div>

          {/* Mobile Swipe Track */}
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-5 pb-6 scrollbar-none -mx-4 px-4">
            {studioCards.map((card) => {
              const theme = getThemeClasses(card.theme);
              return (
                <div
                  key={card.id}
                  className={`snap-center shrink-0 w-[82vw] sm:w-[320px] h-[450px] rounded-[2.2rem] ${theme.cardBg} p-5 flex flex-col justify-between shadow-xl relative`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex flex-wrap gap-1.5">
                        {card.tags.map((t) => (
                          <span
                            key={t}
                            className={`text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full ${theme.tagBg}`}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <span className="text-lg">{card.icon3D}</span>
                    </div>

                    <h3 className={`font-display text-lg font-extrabold uppercase tracking-tight leading-snug mb-1.5 ${theme.titleColor}`}>
                      {card.title}
                    </h3>
                    <p className={`text-xs leading-relaxed line-clamp-2 mb-2 ${theme.descColor}`}>
                      {card.description}
                    </p>
                  </div>

                  <div className="w-full h-[165px] rounded-[1.6rem] overflow-hidden shadow-md my-auto">
                    {card.renderCapsule()}
                  </div>

                  <div className="pt-2">
                    {card.isExternal ? (
                      <a
                        href={card.actionUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full py-2.5 rounded-full ${theme.actionBtn} font-extrabold text-[11px] shadow-sm flex items-center justify-center gap-1.5`}
                      >
                        <span>LAUNCH SAAS PLATFORM</span>
                        <ExternalLink size={12} />
                      </a>
                    ) : (
                      <Link
                        href={card.actionUrl}
                        className={`w-full py-2.5 rounded-full ${theme.actionBtn} font-extrabold text-[11px] shadow-sm flex items-center justify-center gap-1.5`}
                      >
                        <span>VIEW DETAILS</span>
                        <ArrowUpRight size={13} />
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile All 16 Solutions Pill Button */}
          <div className="mt-6 flex justify-center">
            <button
              onClick={() => setDialogOpen(true)}
              className="px-6 py-3 rounded-full bg-secondary hover:bg-secondary/80 text-foreground font-bold text-xs border border-border inline-flex items-center gap-2 shadow-sm transition-colors"
            >
              <SlidersHorizontal size={14} />
              <span>Explore All 16 Solutions Directory</span>
            </button>
          </div>
        </div>
      </div>

      {/* =========================================================================
          FULL SERVICES DIRECTORY MODAL (All 16 Services & SaaS)
         ========================================================================= */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto p-6 sm:p-8">
          <DialogHeader className="mb-6">
            <DialogTitle className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight">
              All 16 Services & SaaS Solutions
            </DialogTitle>
            <DialogDescription className="text-xs sm:text-sm text-muted-foreground">
              Engineered by Itoby Infotech Pvt Ltd (IIPL). Select any custom service or proprietary SaaS platform.
            </DialogDescription>

            {/* Category Filter Pills inside Modal */}
            <div className="flex flex-wrap gap-2 pt-4">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    activeCategory === cat.id
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "bg-secondary text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </DialogHeader>

          {/* 16 Services Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {filteredDirectory.map((srv) => {
              const Icon = srv.icon;
              return (
                <div
                  key={srv.title}
                  className="p-5 rounded-2xl bg-card border border-border/80 hover:border-primary/60 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                        <Icon size={18} />
                      </div>
                      {srv.badge && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-primary/15 text-primary border border-primary/25">
                          {srv.badge}
                        </span>
                      )}
                    </div>
                    <h4 className="font-display text-base font-bold text-foreground mb-1.5">
                      {srv.title}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {srv.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-3 border-t border-border/50">
                    {srv.isExternal ? (
                      <a
                        href={srv.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
                      >
                        <span>Launch SaaS Platform</span>
                        <ExternalLink size={13} />
                      </a>
                    ) : (
                      <Link
                        href={srv.path}
                        onClick={() => setDialogOpen(false)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
                      >
                        <span>View Details</span>
                        <ArrowUpRight size={13} />
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};
