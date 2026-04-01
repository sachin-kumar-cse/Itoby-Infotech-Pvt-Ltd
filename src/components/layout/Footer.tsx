import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Facebook, Youtube, ArrowUpRight, MessageCircle, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const services = [
  { name: "Web Design & Development", path: "/services/web-design" },
  { name: "Mobile App Development", path: "/services/mobile-app" },
  { name: "Digital Marketing", path: "/services/digital-marketing" },
  { name: "Software Solutions", path: "/services/software-solutions" },
  { name: "Microsoft Office 365", path: "/services/microsoft-365" },
];

const quickLinks = [
  { name: "About Us", path: "/about" },
  { name: "Our Portfolio", path: "/portfolio" },
  { name: "Careers", path: "/careers" },
  { name: "Blog", path: "/blog" },
  { name: "Contact Us", path: "/contact" },
];

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com/company/itobyinfotech", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/itobyinfotech", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com/itobyinfotech", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com/itobyinfotech", label: "Facebook" },
  { icon: Youtube, href: "https://youtube.com/@itobyinfotech", label: "YouTube" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = "919876543210";
  const whatsappMessage = encodeURIComponent("Hi! I'm interested in your digital services.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  
  const newsletterRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const newsletterInView = useInView(newsletterRef, { once: true, amount: 0.3 });
  const mainInView = useInView(mainRef, { once: true, amount: 0.1 });

  return (
    <footer className="relative bg-card border-t border-border overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-glow-secondary/5 rounded-full blur-3xl" />

      {/* Newsletter Section */}
      <div className="relative border-b border-border" ref={newsletterRef}>
        <div className="container-wide py-12 sm:py-16">
          <motion.div 
            className="flex flex-col items-center gap-8 text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={newsletterInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-center lg:text-left">
              <h3 className="font-display text-2xl sm:text-3xl font-bold mb-2">
                Stay Updated with <span className="gradient-text">Our Insights</span>
              </h3>
              <p className="text-muted-foreground">Get the latest trends, tips, and news delivered to your inbox.</p>
            </div>
            <motion.form
              className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto"
              initial={{ opacity: 0, x: 30 }}
              animate={newsletterInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              onSubmit={async (e) => {
                e.preventDefault();
                const trimmed = email.trim();
                if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
                  toast.error("Please enter a valid email address.");
                  return;
                }
                setIsSubmitting(true);
                try {
                  const { error } = await supabase
                    .from("newsletter_subscribers")
                    .insert({ email: trimmed });
                  if (error) {
                    if (error.code === "23505") {
                      toast.info("You're already subscribed!");
                    } else {
                      throw error;
                    }
                  } else {
                    toast.success("Successfully subscribed! 🎉");
                    // Trigger drip campaign
                    supabase.functions.invoke("process-drip-emails", {
                      body: { trigger_event: "newsletter", recipient_email: trimmed, recipient_name: "" },
                    }).catch(() => {});
                  }
                  setIsSubscribed(true);
                  setEmail("");
                } catch {
                  toast.error("Something went wrong. Please try again.");
                } finally {
                  setIsSubmitting(false);
                }
              }}
            >
              {isSubscribed ? (
                <div className="flex items-center gap-2 text-primary font-medium">
                  <CheckCircle2 size={20} />
                  <span>Thank you for subscribing!</span>
                </div>
              ) : (
                <>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="h-12 px-4 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:shadow-[0_0_20px_hsl(75_100%_50%/0.2)] transition-all w-full sm:w-72"
                    disabled={isSubmitting}
                    required
                  />
                  <Button variant="hero" size="lg" className="shrink-0 group" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? <Loader2 className="animate-spin" size={18} /> : "Subscribe"}
                    {!isSubmitting && <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                  </Button>
                </>
              )}
            </motion.form>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <motion.div 
        ref={mainRef}
        className="container-wide section-padding relative"
        variants={containerVariants}
        initial="hidden"
        animate={mainInView ? "visible" : "hidden"}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <motion.div variants={itemVariants} className="sm:col-span-2 lg:col-span-1 space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <motion.div 
                className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center group-hover:shadow-[0_0_20px_hsl(75_100%_50%/0.5)] transition-shadow"
                whileHover={{ rotate: 5, scale: 1.05 }}
              >
                <span className="text-primary-foreground font-display font-bold text-xl">I</span>
              </motion.div>
              <span className="text-foreground font-display font-bold text-xl">
                Itoby<span className="text-primary">.</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Itoby Infotech is a premier digital agency delivering exceptional web design, 
              app development, and marketing solutions that drive business growth. 
              Transforming visions into digital reality since 2013.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
            {/* WhatsApp CTA */}
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 transition-colors text-sm font-medium"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </motion.a>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="font-display font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-muted-foreground hover:text-primary text-sm transition-colors inline-flex items-center gap-1 group"
                  >
                    <span className="w-0 group-hover:w-4 transition-all overflow-hidden">
                      <ArrowUpRight size={14} />
                    </span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-display font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary text-sm transition-colors inline-flex items-center gap-1 group"
                  >
                    <span className="w-0 group-hover:w-4 transition-all overflow-hidden">
                      <ArrowUpRight size={14} />
                    </span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="font-display font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://maps.google.com/?q=Patna,Bihar,India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                    <MapPin size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      Sector-4, Noida, UP
                    </p>
                    <p className="text-xs text-muted-foreground/70">Head Office</p>
                  </div>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+919876543210"
                  className="flex items-start gap-3 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                    <Phone size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      +91 98765 43210
                    </p>
                    <p className="text-xs text-muted-foreground/70">Mon-Sat, 9AM-6PM IST</p>
                  </div>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@itobyinfotech.in"
                  className="flex items-start gap-3 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                    <Mail size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      info@itobyinfotech.in
                    </p>
                    <p className="text-xs text-muted-foreground/70">Quick Response</p>
                  </div>
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <div className="border-t border-border py-6 relative">
        <div className="container-wide flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p className="text-center md:text-left">
            © {currentYear} Itoby Infotech Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <Link to="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <a href="/sitemap.xml" className="hover:text-primary transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
