import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, PhoneCall, Sparkles, ArrowRight, Clock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const EXIT_POPUP_DISMISSED_KEY = "itoby-exit-popup-dismissed";
const EXIT_POPUP_CONVERTED_KEY = "itoby-exit-popup-converted";
const EXIT_POPUP_SHOWN_TODAY_KEY = "itoby-exit-popup-shown-date";

export const ExitIntentPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const showPopup = useCallback(() => {
    const converted = localStorage.getItem(EXIT_POPUP_CONVERTED_KEY);
    if (converted) return;

    const dismissedAt = localStorage.getItem(EXIT_POPUP_DISMISSED_KEY);
    if (dismissedAt && Date.now() < Number(dismissedAt)) return;

    setIsVisible(true);
  }, []);

  useEffect(() => {
    let hasTriggered = false;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasTriggered) {
        hasTriggered = true;
        showPopup();
      }
    };

    // Mobile: detect back button / rapid scroll up
    let lastScrollY = window.scrollY;
    let scrollUpCount = 0;
    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        scrollUpCount++;
      } else {
        scrollUpCount = 0;
      }
      lastScrollY = window.scrollY;

      if (scrollUpCount > 5 && window.scrollY < 100 && !hasTriggered) {
        hasTriggered = true;
        showPopup();
      }
    };

    // Delay adding listener so it doesn't fire on page load
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
      window.addEventListener("scroll", handleScroll, { passive: true });
    }, 10000); // Wait 10 seconds before arming

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showPopup]);

  const handleDismiss = () => {
    setIsVisible(false);
    // Don't show again for 7 days
    localStorage.setItem(EXIT_POPUP_DISMISSED_KEY, String(Date.now() + 7 * 24 * 60 * 60 * 1000));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || isSubmitting) return;

    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("contact_submissions").insert({
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim() || null,
        service: "Free Consultation (Exit Intent)",
        message: message.trim() || "Requested free consultation via exit-intent popup.",
      });

      if (error) throw error;

      // Also try to send email notification
      await supabase.functions.invoke("send-contact-email", {
        body: {
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim() || undefined,
          service: "Free Consultation",
          message: message.trim() || "Requested free consultation via exit-intent popup.",
        },
      }).catch(() => {});

      // Trigger drip campaign
      supabase.functions.invoke("process-drip-emails", {
        body: { trigger_event: "contact_form", recipient_email: email.trim(), recipient_name: name.trim() },
      }).catch(() => {});

      setIsSuccess(true);
      localStorage.setItem(EXIT_POPUP_CONVERTED_KEY, "true");
      toast.success("We'll contact you shortly! 🎉");
      setTimeout(() => setIsVisible(false), 3000);
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleDismiss}
            className="fixed inset-0 bg-background/70 backdrop-blur-md z-[80]"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 40 }}
            transition={{ type: "spring", damping: 20, stiffness: 250 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[81] w-[480px] max-w-[calc(100vw-32px)] rounded-3xl bg-card/95 backdrop-blur-xl border border-border/50 shadow-2xl overflow-hidden"
          >
            {/* Ambient glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 rounded-full blur-[100px]" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-primary/10 rounded-full blur-[100px]" />

            {/* Urgency bar */}
            <div className="bg-primary/10 border-b border-primary/20 px-6 py-2.5 flex items-center justify-center gap-2">
              <Clock className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-xs font-semibold text-primary">Limited Time — Free 30-Min Strategy Session</span>
            </div>

            {/* Close button */}
            <button
              onClick={handleDismiss}
              className="absolute top-12 right-4 w-8 h-8 rounded-full bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors z-10"
            >
              <X size={16} />
            </button>

            <div className="relative p-6 sm:p-8">
              {!isSuccess ? (
                <>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.15, type: "spring" }}
                    className="w-14 h-14 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center mx-auto mb-4"
                  >
                    <PhoneCall className="w-7 h-7 text-primary" />
                  </motion.div>

                  <h3 className="font-display text-2xl font-bold text-center mb-1.5">
                    Wait! Get a <span className="gradient-text">Free Consultation</span>
                  </h3>
                  <p className="text-muted-foreground text-sm text-center mb-5 max-w-sm mx-auto">
                    Before you go — let our experts analyze your project for free. No obligations, just valuable insights.
                  </p>

                  {/* Benefits */}
                  <div className="grid grid-cols-2 gap-2 mb-5">
                    {[
                      "Project roadmap",
                      "Cost estimation",
                      "Tech recommendations",
                      "Timeline planning",
                    ].map((benefit) => (
                      <div key={benefit} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-3">
                    <Input
                      placeholder="Your Name *"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="h-10 rounded-xl bg-secondary/50 border-border/30"
                    />
                    <div className="grid grid-cols-2 gap-3">
                      <Input
                        type="email"
                        placeholder="Email *"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="h-10 rounded-xl bg-secondary/50 border-border/30"
                      />
                      <Input
                        type="tel"
                        placeholder="Phone (optional)"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="h-10 rounded-xl bg-secondary/50 border-border/30"
                      />
                    </div>
                    <Textarea
                      placeholder="Briefly describe your project (optional)"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={2}
                      className="rounded-xl bg-secondary/50 border-border/30 resize-none text-sm"
                    />
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-11 rounded-xl font-bold"
                      variant="hero"
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                          <Sparkles size={18} />
                        </motion.div>
                      ) : (
                        <>
                          Book Free Consultation
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </>
                      )}
                    </Button>
                  </form>

                  <p className="text-[10px] text-muted-foreground/50 text-center mt-3">
                    🔒 100% free. No spam. Your info is safe with us.
                  </p>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-4"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-2">You're All Set! 🎉</h3>
                  <p className="text-muted-foreground text-sm">
                    We'll reach out within 24 hours to schedule your free consultation.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
