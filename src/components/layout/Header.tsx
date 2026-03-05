import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { ChevronDown, ArrowRight, Mail, Phone, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const serviceLinks = [
  { name: "Web Design & Development", path: "/services/web-design" },
  { name: "Mobile App Development", path: "/services/mobile-app" },
  { name: "Digital Marketing", path: "/services/digital-marketing" },
  { name: "Custom Software Solutions", path: "/services/software-solutions" },
  { name: "Microsoft 365 Services", path: "/services/microsoft-365" },
];

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services", hasDropdown: true },
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

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();
  const { ref: magneticRef, springX, springY, handleMouseMove, handleMouseLeave } = useMagneticButton();

  const handleServicesMouseEnter = () => {
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current);
    }
    setIsServicesOpen(true);
  };

  const handleServicesMouseLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 150);
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
  }, [location]);

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
          <Link to="/" className="flex items-center gap-2 group">
            <motion.div 
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary flex items-center justify-center group-hover:shadow-[0_0_20px_hsl(75_100%_50%/0.5)] transition-shadow duration-300">
                <span className="text-primary-foreground font-display font-bold text-base sm:text-xl">I</span>
              </div>
              <span className="text-foreground font-display font-bold text-sm sm:text-xl">
                Itoby<span className="text-primary"> Infotech</span>
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              link.hasDropdown ? (
                <div 
                  key={link.path}
                  className="relative"
                  onMouseEnter={handleServicesMouseEnter}
                  onMouseLeave={handleServicesMouseLeave}
                >
                  <Link
                    to={link.path}
                    className={`group flex items-center gap-1 text-sm font-medium transition-colors relative ${
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
                    {/* Active indicator */}
                    {location.pathname.startsWith('/services') && (
                      <motion.span 
                        layoutId="activeNav"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                      />
                    )}
                  </Link>
                  
                  {/* Hover Dropdown */}
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 pt-2"
                      >
                        <div className="w-56 rounded-md border bg-popover p-1 text-popover-foreground shadow-lg">
                          <Link 
                            to="/services" 
                            className="block px-3 py-2 text-sm font-medium rounded-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                          >
                            All Services
                          </Link>
                          {serviceLinks.map((service) => (
                            <Link 
                              key={service.path}
                              to={service.path} 
                              className="block px-3 py-2 text-sm rounded-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-sm font-medium transition-colors group ${
                    location.pathname === link.path
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.name}
                  {/* Animated underline */}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary rounded-full transition-all duration-300 ${
                    location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
                  }`} />
                </Link>
              )
            ))}
          </nav>

          {/* Theme Toggle & CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle />
            <Link
              to="/admin"
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
                <Link to="/request-quote">Get a Free Quote</Link>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Theme Toggle & Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <Link
              to="/admin"
              className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-accent transition-colors"
              aria-label="Admin Login"
            >
              <LogIn size={18} />
            </Link>
            <ThemeToggle />
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-foreground relative w-10 h-10 flex items-center justify-center"
              aria-label="Toggle menu"
              whileTap={{ scale: 0.9 }}
            >
              <div className="relative w-6 h-5 flex flex-col justify-between">
                <motion.span
                  animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-0.5 bg-foreground rounded-full origin-center"
                />
                <motion.span
                  animate={isMobileMenuOpen ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-full h-0.5 bg-foreground rounded-full"
                />
                <motion.span
                  animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-0.5 bg-foreground rounded-full origin-center"
                />
              </div>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu - Fullscreen Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-background/80 backdrop-blur-2xl"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Content */}
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-0 h-full w-full max-w-sm bg-card/95 backdrop-blur-xl border-l border-border flex flex-col"
            >
              {/* Top decorative gradient */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-3xl pointer-events-none" />

              {/* Close area / top padding */}
              <div className="h-16 sm:h-20 flex-shrink-0" />
              
              {/* Scrollable nav area */}
              <nav className="relative flex-1 overflow-y-auto px-6 pb-6">
                <div className="flex flex-col gap-0.5">
                  {navLinks.map((link, index) => (
                    <motion.div 
                      key={link.path}
                      custom={index}
                      variants={menuItemVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      {link.hasDropdown ? (
                        <div>
                          <div className="flex items-center justify-between">
                            <Link
                              to={link.path}
                              className={`flex-1 text-xl sm:text-2xl font-display font-bold transition-colors py-3 ${
                                location.pathname === link.path
                                  ? "text-primary"
                                  : "text-foreground hover:text-primary"
                              }`}
                            >
                              {link.name}
                            </Link>
                            <motion.button
                              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                              className="p-2 rounded-lg hover:bg-accent transition-colors"
                              animate={{ rotate: isMobileServicesOpen ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <ChevronDown size={20} className="text-muted-foreground" />
                            </motion.button>
                          </div>
                          <AnimatePresence>
                            {isMobileServicesOpen && (
                              <motion.div 
                                className="pl-4 flex flex-col gap-0.5 border-l-2 border-primary/30 ml-2 mb-2"
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                              >
                                {serviceLinks.map((service, serviceIndex) => (
                                  <motion.div
                                    key={service.path}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: serviceIndex * 0.05 }}
                                  >
                                    <Link
                                      to={service.path}
                                      className={`text-sm sm:text-base transition-colors py-2.5 block rounded-md px-2 hover:bg-accent ${
                                        location.pathname === service.path
                                          ? "text-primary font-medium"
                                          : "text-muted-foreground hover:text-foreground"
                                      }`}
                                    >
                                      {service.name}
                                    </Link>
                                  </motion.div>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          to={link.path}
                          className={`flex items-center justify-between text-xl sm:text-2xl font-display font-bold transition-colors py-3 rounded-lg group ${
                            location.pathname === link.path
                              ? "text-primary"
                              : "text-foreground hover:text-primary"
                          }`}
                        >
                          <span>{link.name}</span>
                          {location.pathname === link.path ? (
                            <motion.span 
                              layoutId="mobileActiveIndicator"
                              className="w-2 h-2 rounded-full bg-primary"
                            />
                          ) : (
                            <ArrowRight size={16} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                          )}
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </div>
                
                {/* CTA */}
                <motion.div
                  custom={navLinks.length}
                  variants={menuItemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="mt-8 pt-6 border-t border-border"
                >
                  <Button variant="hero" size="lg" className="w-full text-base" asChild>
                    <Link to="/contact">Get a Free Quote</Link>
                  </Button>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                  custom={navLinks.length + 1}
                  variants={menuItemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="mt-6 space-y-3"
                >
                  <a href="mailto:info@itobyinfotech.in" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors py-1">
                    <Mail size={16} className="text-primary" />
                    info@itobyinfotech.in
                  </a>
                  <a href="tel:+919876543210" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors py-1">
                    <Phone size={16} className="text-primary" />
                    +91 98765 43210
                  </a>
                </motion.div>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
