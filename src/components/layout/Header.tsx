"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import {
  ChevronDown,
  LogIn,
  Search,
  ExternalLink,
  Bot,
  Sparkles,
  Code2,
  Layers,
  X,
  Phone,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { ThemeAccentPicker } from "@/components/ui/theme-accent-picker";
import { BrandLogo } from "@/components/ui/BrandLogo";

const serviceLinks = [
  { name: "Web Design & Development", path: "/services/web-design" },
  { name: "Mobile App Development", path: "/services/mobile-app" },
  { name: "Digital Marketing", path: "/services/digital-marketing" },
  { name: "Custom Software Solutions", path: "/services/software-solutions" },
  { name: "Microsoft 365 Services", path: "/services/microsoft-365" },
  { name: "AI Development", path: "/services/ai-development-company" },
  { name: "SaaS Development", path: "/services/saas-development-company" },
  { name: "AI Agent Development", path: "/services/ai-agent-development" },
  { name: "AI Chatbot Development", path: "/services/ai-chatbot-development" },
  { name: "ERP Development", path: "/services/erp-development" },
  { name: "CRM Development", path: "/services/crm-development" },
];

const saasProductNavLinks = [
  { name: "IIPL Lead (AI Cold Email & B2B CRM)", path: "https://lead.itobyinfotech.com", isExternal: true, badge: "Flagship" },
  { name: "IIPL Renting (Office & Tenant CRM)", path: "https://rent.itobyinfotech.com", isExternal: true, badge: "PropTech" },
  { name: "IIPL Billing (GST Invoicing SaaS)", path: "https://billing.itobyinfotech.com", isExternal: true, badge: "GST" },
  { name: "IIPL Cashmemo (Cash Invoice Builder)", path: "https://cashmemo.itobyinfotech.com", isExternal: true, badge: "POS" },
  { name: "IIPL Calling (AI Voice Agents)", path: "https://calling.itobyinfotech.com", isExternal: true, badge: "Voice AI" },
];

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services & SaaS", path: "/services", hasDropdown: true },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const menuItemVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.06,
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
  exit: (i: number) => ({
    opacity: 0,
    x: 50,
    transition: {
      delay: i * 0.02,
      duration: 0.2,
    },
  }),
};

interface HeaderProps {
  onOpenSearch?: () => void;
}

export const Header = ({ onOpenSearch }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock background body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Auto close mobile menu on route navigation
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  }, [pathname]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleServicesMouseEnter = () => {
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    setIsServicesOpen(true);
  };

  const handleServicesMouseLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 150);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-background/90 backdrop-blur-xl border-b border-border/60 py-3 shadow-sm dark:shadow-lg"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container-wide">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link
              href="/"
              className="flex items-center group py-1 select-none focus:outline-none"
              aria-label="Itoby Infotech Private Limited - Home"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="flex items-center"
              >
                <BrandLogo className="h-10 sm:h-11 md:h-12 lg:h-14" />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                if (link.hasDropdown) {
                  return (
                    <div
                      key={link.path}
                      className="relative"
                      onMouseEnter={handleServicesMouseEnter}
                      onMouseLeave={handleServicesMouseLeave}
                    >
                      <Link
                        href={link.path}
                        className={`group flex items-center gap-1 text-sm font-semibold transition-colors relative py-1 ${
                          pathname.startsWith("/services")
                            ? "text-primary"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {link.name}
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-200 ${isServicesOpen ? "rotate-180 text-primary" : ""}`}
                        />
                        {pathname.startsWith("/services") && (
                          <motion.span
                            layoutId="activeNav"
                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                          />
                        )}
                      </Link>

                      {/* Megamenu Dropdown combining Services & IIPL SaaS */}
                      <AnimatePresence>
                        {isServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full -left-20 pt-2 z-50"
                          >
                            <div className="w-[880px] rounded-3xl border border-border/80 bg-card/95 backdrop-blur-xl p-4 shadow-2xl grid grid-cols-3 gap-4">
                              {/* Col 1: Digital Agency Services */}
                              <div className="space-y-1 bg-secondary/30 p-3 rounded-2xl border border-border/40 max-h-[380px] overflow-y-auto">
                                <div className="flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wider text-primary px-2 py-1 mb-1">
                                  <Code2 size={14} />
                                  Digital Services
                                </div>
                                <Link
                                  href="/services"
                                  className="block px-2.5 py-1.5 text-xs font-bold text-foreground hover:text-primary rounded-xl hover:bg-secondary transition-colors"
                                >
                                  All Services Overview →
                                </Link>
                                {serviceLinks.map((service) => (
                                  <Link
                                    key={service.path}
                                    href={service.path}
                                    className="block px-2.5 py-1.5 text-xs font-medium rounded-xl hover:bg-primary/10 hover:text-primary transition-colors text-muted-foreground"
                                  >
                                    {service.name}
                                  </Link>
                                ))}
                              </div>

                              {/* Col 2: IIPL SaaS Platforms */}
                              <div className="space-y-1 bg-primary/5 p-3 rounded-2xl border border-primary/20">
                                <div className="flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wider text-primary px-2 py-1 mb-1">
                                  <Sparkles size={14} className="animate-pulse" />
                                  Live SaaS Apps
                                </div>
                                {saasProductNavLinks.map((prod) => (
                                  <a
                                    key={prod.name}
                                    href={prod.path}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-between px-2.5 py-1.5 text-xs font-semibold rounded-xl hover:bg-primary/15 hover:text-primary transition-colors group"
                                  >
                                    <span className="flex items-center gap-1.5 truncate">
                                      <ExternalLink size={12} className="text-primary shrink-0" />
                                      {prod.name}
                                    </span>
                                    <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-primary/20 text-primary shrink-0">
                                      {prod.badge}
                                    </span>
                                  </a>
                                ))}
                              </div>

                              {/* Col 3: Software Products Hub */}
                              <div className="space-y-1 bg-secondary/20 p-3 rounded-2xl border border-border/40">
                                <div className="flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wider text-primary px-2 py-1 mb-1">
                                  <Layers size={14} />
                                  Products Hub
                                </div>
                                <Link
                                  href="/products"
                                  className="block px-2.5 py-1.5 text-xs font-bold text-foreground hover:text-primary rounded-xl hover:bg-secondary transition-colors"
                                >
                                  All Products Hub →
                                </Link>
                                <Link
                                  href="/products/leadflow"
                                  className="block px-2.5 py-1.5 text-xs font-medium rounded-xl hover:bg-primary/10 hover:text-primary transition-colors text-muted-foreground"
                                >
                                  LeadFlow B2B SaaS
                                </Link>
                                <Link
                                  href="/products/billing"
                                  className="block px-2.5 py-1.5 text-xs font-medium rounded-xl hover:bg-primary/10 hover:text-primary transition-colors text-muted-foreground"
                                >
                                  IIPL Billing GST SaaS
                                </Link>
                                <Link
                                  href="/products/whatsapp"
                                  className="block px-2.5 py-1.5 text-xs font-medium rounded-xl hover:bg-primary/10 hover:text-primary transition-colors text-muted-foreground"
                                >
                                  IIPL Cashmemo WhatsApp
                                </Link>
                                <Link
                                  href="/products/renting"
                                  className="block px-2.5 py-1.5 text-xs font-medium rounded-xl hover:bg-primary/10 hover:text-primary transition-colors text-muted-foreground"
                                >
                                  IIPL Renting CRM
                                </Link>
                                <Link
                                  href="/products/calling"
                                  className="block px-2.5 py-1.5 text-xs font-medium rounded-xl hover:bg-primary/10 hover:text-primary transition-colors text-muted-foreground"
                                >
                                  IIPL Calling Voice AI
                                </Link>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.path}
                    href={link.path}
                    className={`relative text-sm font-medium transition-colors group ${
                      pathname === link.path
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.name}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-primary rounded-full transition-all duration-300 ${
                        pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Actions & Theme Toggles */}
            <div className="hidden lg:flex items-center gap-4">
              <ThemeAccentPicker />
              <ThemeToggle />
              {onOpenSearch && (
                <button
                  onClick={onOpenSearch}
                  className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-accent transition-colors cursor-pointer"
                  aria-label="Search"
                >
                  <Search size={20} />
                </button>
              )}
              <Link
                href="/admin"
                className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-accent transition-colors"
                aria-label="Admin Login"
              >
                <LogIn size={20} />
              </Link>
              <Button size="lg" className="gap-2 shadow-lg hover:shadow-primary/25" asChild>
                <Link href="/request-quote">Get a Free Quote</Link>
              </Button>
            </div>

            {/* Mobile Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <ThemeToggle />
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2.5 rounded-xl bg-card border border-border text-foreground hover:text-primary transition-colors focus:outline-none flex items-center justify-center"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 text-primary stroke-[2.5]" />
                ) : (
                  <div className="w-5 h-4 flex flex-col justify-between">
                    <span className="w-full h-0.5 bg-foreground rounded-full block" />
                    <span className="w-3/4 h-0.5 bg-foreground rounded-full block" />
                    <span className="w-full h-0.5 bg-foreground rounded-full block" />
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-0 z-[70] lg:hidden bg-background/98 dark:bg-[#161616]/98 backdrop-blur-3xl flex flex-col h-[100dvh] overflow-hidden"
          >
            {/* Mobile Nav Top Bar with Brand Logo and Prominent Close Button */}
            <div className="flex items-center justify-between px-4 py-3.5 border-b border-border/60 bg-background/90 dark:bg-[#161616]/90 backdrop-blur-md shrink-0">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center select-none focus:outline-none"
                aria-label="Itoby Infotech Home"
              >
                <BrandLogo className="h-9 sm:h-10" />
              </Link>

              <div className="flex items-center gap-2">
                <ThemeAccentPicker />
                <ThemeToggle />
                {onOpenSearch && (
                  <button
                    type="button"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      onOpenSearch();
                    }}
                    className="p-2 rounded-xl bg-card border border-border text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Search site"
                  >
                    <Search size={18} />
                  </button>
                )}
                {/* Prominent Dedicated Close Button */}
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 focus:outline-none shadow-sm cursor-pointer"
                  aria-label="Close menu"
                >
                  <X size={20} className="stroke-[2.5]" />
                </button>
              </div>
            </div>

            {/* Scrollable Navigation List */}
            <div className="flex-1 overflow-y-auto px-4 py-5 space-y-5 overscroll-contain">
              <nav className="flex flex-col space-y-2.5">
                {navLinks.map((link, i) => {
                  if (link.hasDropdown) {
                    const isDropdownActive = pathname.startsWith("/services");
                    return (
                      <motion.div
                        key={link.path}
                        custom={i}
                        variants={menuItemVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="rounded-2xl bg-card/60 border border-border/60 overflow-hidden"
                      >
                        {/* Accordion Toggle Card */}
                        <div
                          role="button"
                          tabIndex={0}
                          onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault();
                              setIsMobileServicesOpen(!isMobileServicesOpen);
                            }
                          }}
                          className={`w-full flex items-center justify-between p-3.5 cursor-pointer transition-colors ${
                            isDropdownActive ? "bg-primary/10 border-l-4 border-l-primary" : "hover:bg-accent/40"
                          }`}
                        >
                          <span className="text-base sm:text-lg font-display font-bold text-foreground flex items-center gap-2.5">
                            <Layers size={18} className="text-primary" />
                            {link.name}
                          </span>
                          <div
                            className={`p-1.5 rounded-lg bg-primary/10 text-primary transition-transform duration-300 ${
                              isMobileServicesOpen ? "rotate-180 bg-primary/20" : ""
                            }`}
                          >
                            <ChevronDown size={18} />
                          </div>
                        </div>

                        {/* Collapsible Content */}
                        <AnimatePresence>
                          {isMobileServicesOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25 }}
                              className="overflow-hidden border-t border-border/50 bg-secondary/30 p-3 space-y-4"
                            >
                              {/* Direct Link to all services */}
                              <Link
                                href="/services"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex items-center justify-between p-2.5 rounded-xl bg-primary/15 text-primary font-bold text-xs hover:bg-primary hover:text-primary-foreground transition-all"
                              >
                                <span>Explore All Services & SaaS Overview</span>
                                <ArrowRight size={14} />
                              </Link>

                              {/* Digital Services */}
                              <div>
                                <p className="text-[11px] font-extrabold uppercase tracking-wider text-primary mb-2 flex items-center gap-1.5 px-1">
                                  <Code2 size={13} /> Digital Services
                                </p>
                                <div className="grid grid-cols-1 gap-1">
                                  {serviceLinks.map((svc) => (
                                    <Link
                                      key={svc.path}
                                      href={svc.path}
                                      onClick={() => setIsMobileMenuOpen(false)}
                                      className={`block py-2 px-3 rounded-lg text-xs font-semibold transition-colors ${
                                        pathname === svc.path
                                          ? "bg-primary text-primary-foreground font-bold"
                                          : "text-muted-foreground hover:text-foreground hover:bg-primary/10"
                                      }`}
                                    >
                                      {svc.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>

                              {/* IIPL SaaS Products */}
                              <div>
                                <p className="text-[11px] font-extrabold uppercase tracking-wider text-primary mb-2 flex items-center gap-1.5 px-1">
                                  <Sparkles size={13} /> IIPL SaaS Products
                                </p>
                                <div className="space-y-1">
                                  {saasProductNavLinks.map((prod) => (
                                    <a
                                      key={prod.name}
                                      href={prod.path}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex items-center justify-between py-2 px-3 rounded-lg text-xs font-semibold text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                                    >
                                      <span className="flex items-center gap-1.5 truncate">
                                        <ExternalLink size={12} className="text-primary shrink-0" />
                                        {prod.name}
                                      </span>
                                      <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-primary/20 text-primary shrink-0">
                                        {prod.badge}
                                      </span>
                                    </a>
                                  ))}
                                </div>
                              </div>

                              {/* Products Hub */}
                              <div className="pt-1">
                                <Link
                                  href="/products"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="flex items-center justify-between p-2.5 rounded-xl border border-border/60 bg-card text-xs font-bold text-foreground hover:text-primary hover:border-primary/40 transition-colors"
                                >
                                  <span>View Products Hub</span>
                                  <ArrowRight size={13} />
                                </Link>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  }

                  const isActive = pathname === link.path;

                  return (
                    <motion.div
                      key={link.path}
                      custom={i}
                      variants={menuItemVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <Link
                        href={link.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center justify-between p-3.5 rounded-2xl border transition-all ${
                          isActive
                            ? "bg-primary text-primary-foreground border-primary font-bold shadow-md shadow-primary/20"
                            : "bg-card/60 border-border/60 text-foreground hover:border-primary/40 hover:text-primary font-semibold"
                        }`}
                      >
                        <span className="text-base sm:text-lg font-display">{link.name}</span>
                        <ArrowRight
                          size={16}
                          className={isActive ? "text-primary-foreground" : "text-muted-foreground"}
                        />
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Bottom Actions & Contacts */}
              <div className="pt-3 border-t border-border/40 space-y-3">
                <Button className="w-full font-bold rounded-2xl py-6 text-base shadow-lg shadow-primary/20 gap-2" asChild>
                  <Link href="/request-quote" onClick={() => setIsMobileMenuOpen(false)}>
                    Get a Free Quote <ArrowRight size={16} />
                  </Link>
                </Button>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <a
                    href="tel:+919142773500"
                    className="flex items-center justify-center gap-1.5 p-3 rounded-xl bg-card border border-border/60 text-muted-foreground hover:text-primary transition-colors font-medium"
                  >
                    <Phone size={14} className="text-primary" />
                    <span>Call Us</span>
                  </a>
                  <Link
                    href="/admin"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-1.5 p-3 rounded-xl bg-card border border-border/60 text-muted-foreground hover:text-primary transition-colors font-medium"
                  >
                    <LogIn size={14} className="text-primary" />
                    <span>Admin Portal</span>
                  </Link>
                </div>

                <div className="text-center pt-1 pb-4">
                  <p className="text-[11px] text-muted-foreground">
                    Itoby Infotech Pvt. Ltd. • ISO 9001:2015 Certified
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
