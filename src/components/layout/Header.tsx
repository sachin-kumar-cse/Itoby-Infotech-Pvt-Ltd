"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { ChevronDown, ArrowRight, Mail, Phone, LogIn, Globe, Search, ExternalLink, Bot, Sparkles, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { ThemeAccentPicker } from "@/components/ui/theme-accent-picker";

const serviceLinks = [
  { name: "Web Design & Development", path: "/services/web-design" },
  { name: "Mobile App Development", path: "/services/mobile-app" },
  { name: "Digital Marketing", path: "/services/digital-marketing" },
  { name: "Custom Software Solutions", path: "/services/software-solutions" },
  { name: "Microsoft 365 Services", path: "/services/microsoft-365" },
];

const saasProductNavLinks = [
  { name: "IIPL Lead (AI Cold Email & B2B CRM)", path: "https://lead.itobyinfotech.com", isExternal: true, badge: "Flagship" },
  { name: "IIPL Renting (Office & Tenant CRM)", path: "https://rent.itobyinfotech.com", isExternal: true, badge: "PropTech" },
  { name: "IIPL Billing (GST Invoicing SaaS)", path: "https://billing.itobyinfotech.com", isExternal: true, badge: "GST" },
  { name: "IIPL Cashmemo (Cash Invoice Builder)", path: "https://cashmemo.itobyinfotech.com", isExternal: true, badge: "POS" },
  { name: "IIPL Calling (AI Voice Agents)", path: "https://royalblue-ant-234341.hostingersite.com/", isExternal: true, badge: "Voice AI" },
];

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services & SaaS", path: "/services", hasDropdown: true },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

// Menu item stagger animation variants
const menuItemVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
  exit: (i: number) => ({
    opacity: 0,
    x: 50,
    transition: {
      delay: i * 0.03,
      duration: 0.2,
    },
  }),
};

// Magnetic button hook
const useMagneticButton = () => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) * 0.3;
    const deltaY = (e.clientY - centerY) * 0.3;
    x.set(deltaX);
    y.set(deltaY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return { ref, springX, springY, handleMouseMove, handleMouseLeave };
};

interface HeaderProps {
  onOpenSearch?: () => void;
}

export const Header = ({ onOpenSearch }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  
  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();
  const location = { pathname };
  const { ref: magneticRef, springX, springY, handleMouseMove, handleMouseLeave } = useMagneticButton();

  const handleServicesMouseEnter = () => {
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    setIsServicesOpen(true);
  };

  const handleServicesMouseLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => setIsServicesOpen(false), 150);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? "glass py-3 shadow-lg shadow-background/20" 
            : "py-4 sm:py-5"
        }`}
      >
        <div className="container-wide flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <motion.div 
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary flex items-center justify-center group-hover:shadow-[0_0_20px_hsl(75_100%_50%/0.5)] transition-shadow duration-300">
                <span className="text-primary-foreground font-display font-bold text-base sm:text-xl">IIPL</span>
              </div>
              <span className="text-foreground font-display font-bold text-sm sm:text-xl">
                Itoby<span className="text-primary"> Infotech</span>
              </span>
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
                      className={`group flex items-center gap-1 text-sm font-semibold transition-colors relative ${
                        location.pathname.startsWith('/services')
                          ? "text-primary"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {link.name}
                      <ChevronDown 
                        size={14} 
                        className={`transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} 
                      />
                      {location.pathname.startsWith('/services') && (
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
                          <div className="w-[580px] rounded-3xl border border-border/80 bg-card/95 backdrop-blur-xl p-4 shadow-2xl grid grid-cols-2 gap-4">
                            
                            {/* Col 1: Digital Agency Services */}
                            <div className="space-y-1 bg-secondary/30 p-3 rounded-2xl border border-border/40">
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
                                  className="block px-2.5 py-1.5 text-xs font-medium rounded-xl hover:bg-primary/10 hover:text-primary transition-colors"
                                >
                                  {service.name}
                                </Link>
                              ))}
                            </div>

                            {/* Col 2: IIPL SaaS Products */}
                            <div className="space-y-1 bg-primary/5 p-3 rounded-2xl border border-primary/20">
                              <div className="flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wider text-primary px-2 py-1 mb-1">
                                <Sparkles size={14} className="animate-pulse" />
                                IIPL SaaS Products
                              </div>
                              {saasProductNavLinks.map((prod) => (
                                prod.isExternal ? (
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
                                ) : (
                                  <Link 
                                    key={prod.name}
                                    href={prod.path} 
                                    className="flex items-center justify-between px-2.5 py-1.5 text-xs font-semibold rounded-xl hover:bg-primary/15 hover:text-primary transition-colors"
                                  >
                                    <span className="flex items-center gap-1.5 truncate">
                                      <Bot size={12} className="text-primary shrink-0" />
                                      {prod.name}
                                    </span>
                                    <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-primary/20 text-primary shrink-0">
                                      {prod.badge}
                                    </span>
                                  </Link>
                                )
                              ))}
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
                    location.pathname === link.path
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary rounded-full transition-all duration-300 ${
                    location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
                  }`} />
                </Link>
              );
            })}
          </nav>

          {/* Theme Toggle & CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <ThemeAccentPicker />
            <ThemeToggle />
            {onOpenSearch && (
              <button
                onClick={onOpenSearch}
                className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-accent transition-colors cursor-pointer"
                aria-label="Search"
                title="Search (Ctrl+K)"
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
            <motion.div
              ref={magneticRef}
              style={{ x: springX, y: springY }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <Button variant="hero" size="lg" className="magnetic-btn" asChild>
                <Link href="/request-quote">Get a Free Quote</Link>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Theme Toggle & Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            {onOpenSearch && (
              <button
                onClick={onOpenSearch}
                className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-accent transition-colors cursor-pointer"
                aria-label="Search"
              >
                <Search size={20} />
              </button>
            )}
            <ThemeAccentPicker />
            <ThemeToggle />
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-foreground relative w-10 h-10 flex items-center justify-center cursor-pointer"
              aria-label="Toggle menu"
              whileTap={{ scale: 0.9 }}
            >
              <div className="relative w-6 h-5 flex flex-col justify-between">
                <motion.span
                  animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-0.5 bg-foreground rounded-full block origin-center"
                />
                <motion.span
                  animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="w-full h-0.5 bg-foreground rounded-full block"
                />
                <motion.span
                  animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-0.5 bg-foreground rounded-full block origin-center"
                />
              </div>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Fullscreen Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden glass-dark bg-background/95 backdrop-blur-2xl pt-24 pb-8 px-6 overflow-y-auto"
          >
            <div className="flex flex-col justify-between min-h-full">
              {/* Navigation Links */}
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link, i) => (
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
                      className={`text-2xl font-display font-bold tracking-tight block transition-colors ${
                        location.pathname === link.path
                          ? "text-primary"
                          : "text-foreground hover:text-primary"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* IIPL SaaS Products Mobile Section */}
              <div className="mt-6 pt-4 border-t border-border">
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3 flex items-center gap-1.5">
                  <Sparkles size={13} />
                  IIPL SaaS Products
                </p>
                <div className="grid grid-cols-1 gap-2">
                  {saasProductNavLinks.map((prod) => (
                    prod.isExternal ? (
                      <a
                        key={prod.name}
                        href={prod.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center justify-between p-2.5 rounded-xl bg-secondary/50 hover:bg-primary/10 text-xs font-semibold text-foreground transition-colors"
                      >
                        <span className="flex items-center gap-1.5">
                          <ExternalLink size={13} className="text-primary" />
                          {prod.name}
                        </span>
                        <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-primary/20 text-primary">
                          {prod.badge}
                        </span>
                      </a>
                    ) : (
                      <Link
                        key={prod.name}
                        href={prod.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center justify-between p-2.5 rounded-xl bg-secondary/50 hover:bg-primary/10 text-xs font-semibold text-foreground transition-colors"
                      >
                        <span className="flex items-center gap-1.5">
                          <Bot size={13} className="text-primary" />
                          {prod.name}
                        </span>
                        <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-primary/20 text-primary">
                          {prod.badge}
                        </span>
                      </Link>
                    )
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-6 pt-4 border-t border-border space-y-4">
                <Button variant="hero" size="lg" className="w-full text-base" asChild>
                  <Link href="/request-quote" onClick={() => setIsMobileMenuOpen(false)}>Get a Free Quote</Link>
                </Button>
                <a href="mailto:info@itobyinfotech.com" className="flex items-center gap-3 text-xs text-muted-foreground hover:text-foreground transition-colors py-1">
                  <Mail size={16} className="text-primary" />
                  info@itobyinfotech.com
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
