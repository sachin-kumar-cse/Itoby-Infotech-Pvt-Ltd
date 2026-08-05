"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Globe, Smartphone, Code, Shield, Calculator, Gauge, FileText, ArrowRight, X, Sparkles, PhoneCall, Briefcase, BookOpen } from "lucide-react";
import { Input } from "@/components/ui/input";

interface CommandPaletteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SearchItem {
  id: string;
  title: string;
  category: "Page" | "Service" | "Case Study" | "Tool";
  path: string;
  icon: typeof Search;
  description?: string;
}

const searchDatabase: SearchItem[] = [
  // Pages
  { id: "home", title: "Home", category: "Page", path: "/", icon: Globe, description: "Main homepage with company overview & hero" },
  { id: "about", title: "About Us", category: "Page", path: "/about", icon: Briefcase, description: "Our 11+ year story, team & global footprint" },
  { id: "services", title: "Services Overview", category: "Page", path: "/services", icon: Code, description: "All web design, mobile apps & software services" },
  { id: "portfolio", title: "Portfolio & Case Studies", category: "Page", path: "/portfolio", icon: Sparkles, description: "18+ client case studies and digital transformation stories" },
  { id: "blog", title: "Blog & Insights", category: "Page", path: "/blog", icon: BookOpen, description: "Articles on React, SEO, AI & Web Architecture" },
  { id: "contact", title: "Contact Us", category: "Page", path: "/contact", icon: PhoneCall, description: "Get in touch with our engineering hubs in India & USA" },
  { id: "careers", title: "Careers & Hiring", category: "Page", path: "/careers", icon: Briefcase, description: "Join our global software engineering team" },

  // Services
  { id: "s-web", title: "Web Design & Development", category: "Service", path: "/services/web-design", icon: Globe, description: "Custom React/Vite high-converting web applications" },
  { id: "s-mob", title: "Mobile App Development", category: "Service", path: "/services/mobile-app", icon: Smartphone, description: "iOS & Android native apps with real-time sync" },
  { id: "s-soft", title: "Custom Software Solutions", category: "Service", path: "/services/software-solutions", icon: Code, description: "Enterprise SaaS, ERP & CRM platforms" },
  { id: "s-m365", title: "Microsoft 365 Services", category: "Service", path: "/services/microsoft-365", icon: Shield, description: "Cloud migration, Security & Teams integration" },

  // IIPL SaaS Products
  { id: "saas-lead", title: "IIPL Lead (AI Cold Email & B2B Lead Automation)", category: "Tool", path: "https://lead.itobyinfotech.com", icon: Sparkles, description: "Google Maps Scraper, AI Site Auditor & Cold Email Outreach (lead.itobyinfotech.com)" },
  { id: "saas-renting", title: "IIPL Renting (Office Renting & Tenant CRM)", category: "Tool", path: "https://rent.itobyinfotech.com", icon: Briefcase, description: "Office leasing, tenant management & rent collection SaaS (rent.itobyinfotech.com)" },
  { id: "saas-billing", title: "IIPL Billing (GST Invoicing & Revenue SaaS)", category: "Tool", path: "https://billing.itobyinfotech.com", icon: FileText, description: "GST billing software, tax invoice generation & ledgers (billing.itobyinfotech.com)" },
  { id: "saas-cashmemo", title: "IIPL Cashmemo (Instant Digital Cash Memo Generator)", category: "Tool", path: "https://cashmemo.itobyinfotech.com", icon: FileText, description: "Instant cash receipts, WhatsApp PDF share & thermal print (cashmemo.itobyinfotech.com)" },
  { id: "saas-calling", title: "IIPL Calling (AI Voice Agents for Restaurants & Insurance)", category: "Tool", path: "https://royalblue-ant-234341.hostingersite.com/", icon: PhoneCall, description: "AI restro calling, insurance renewal reminders & voice bots" },

  // Tools
  { id: "t-quote", title: "Instant Project Cost Estimator", category: "Tool", path: "/request-quote", icon: FileText, description: "Calculate project estimate and generate PDF proposal" },
  { id: "t-roi", title: "ROI Growth Calculator", category: "Tool", path: "/#roi-calculator", icon: Calculator, description: "Calculate projected return on investment & revenue" },
  { id: "t-audit", title: "AI Website Performance Audit", category: "Tool", path: "/#site-audit", icon: Gauge, description: "Run instant PageSpeed, Mobile UX & SEO scan" },
];

export const CommandPaletteModal = ({ isOpen, onClose }: CommandPaletteModalProps) => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  // Listen for Escape key and Ctrl+K / Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isOpen) {
          e.preventDefault();
          onClose();
        }
      } else if ((e.ctrlKey || e.metaKey) && (e.key === "k" || e.key === "K")) {
        e.preventDefault();
        if (isOpen) onClose();
        else window.dispatchEvent(new CustomEvent("openCommandPalette"));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredItems = query.trim() === ""
    ? searchDatabase.slice(0, 8)
    : searchDatabase.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase()) ||
        (item.description && item.description.toLowerCase().includes(query.toLowerCase()))
      );

  const handleSelect = (path: string) => {
    onClose();
    if (path.startsWith("http://") || path.startsWith("https://")) {
      window.open(path, "_blank");
    } else if (path.startsWith("/#")) {
      const elementId = path.replace("/#", "");
      router.push("/");
      setTimeout(() => {
        const el = document.getElementById(elementId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      router.push(path);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 p-4 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-background/80 backdrop-blur-xl cursor-pointer"
        />

        {/* Command Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          transition={{ type: "spring", damping: 25, stiffness: 350 }}
          className="relative z-10 w-full max-w-2xl bg-card border border-border/80 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
        >
          {/* Search Input Bar */}
          <div className="relative p-4 border-b border-border/60 flex items-center gap-3 bg-muted/30">
            <Search className="w-5 h-5 text-primary shrink-0" />
            <Input
              type="text"
              autoFocus
              placeholder="Search services, tools, case studies or press ESC..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="border-none bg-transparent text-foreground text-sm focus-visible:ring-0 focus-visible:ring-offset-0 h-10 p-0"
            />
            {query && (
              <button onClick={() => setQuery("")} className="text-muted-foreground hover:text-foreground cursor-pointer">
                <X className="w-4 h-4" />
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-secondary hover:bg-destructive/20 hover:text-destructive text-[10px] font-mono font-bold text-muted-foreground border border-border/40 cursor-pointer transition-colors"
              title="Close Search (ESC)"
            >
              ESC <X className="w-3 h-3 ml-0.5" />
            </button>
          </div>

          {/* Results List */}
          <div className="p-3 max-h-[60vh] overflow-y-auto custom-scrollbar space-y-1">
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => {
                const ItemIcon = item.icon;
                return (
                  <motion.div
                    key={item.id}
                    onClick={() => handleSelect(item.path)}
                    whileHover={{ x: 4 }}
                    className="p-3 rounded-2xl hover:bg-primary/10 border border-transparent hover:border-primary/20 cursor-pointer transition-all duration-200 flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                        <ItemIcon className="w-4.5 h-4.5 text-primary group-hover:text-primary-foreground" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-display font-bold text-sm text-foreground group-hover:text-primary transition-colors">
                            {item.title}
                          </h4>
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-secondary text-muted-foreground border border-border/40">
                            {item.category}
                          </span>
                        </div>
                        {item.description && (
                          <p className="text-xs text-muted-foreground line-clamp-1 mt-0.5">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </div>

                    <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all shrink-0" />
                  </motion.div>
                );
              })
            ) : (
              <div className="p-8 text-center text-muted-foreground">
                <Search className="w-8 h-8 mx-auto mb-2 opacity-30" />
                <p className="text-sm font-medium">No matching results found</p>
                <p className="text-xs mt-1">Try searching for "Web Design", "Quote", "Audit", or "Portfolio"</p>
              </div>
            )}
          </div>

          {/* Footer Shortcuts hint */}
          <div className="p-3 px-6 border-t border-border/60 bg-card flex items-center justify-between text-[11px] text-muted-foreground">
            <span>Press <kbd className="px-1.5 py-0.5 bg-secondary rounded text-foreground font-mono font-bold">ESC</kbd> or click outside to close</span>
            <span>Itoby Infotech Search</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
