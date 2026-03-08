import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Sparkles, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const POPUP_DISMISSED_KEY = "itoby-newsletter-dismissed";
const POPUP_SUBSCRIBED_KEY = "itoby-newsletter-subscribed";
const POPUP_DELAY_MS = 15000; // 15 seconds

export const NewsletterPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const subscribed = localStorage.getItem(POPUP_SUBSCRIBED_KEY);
    if (subscribed) return;

    const dismissedAt = localStorage.getItem(POPUP_DISMISSED_KEY);
    if (dismissedAt && Date.now() < Number(dismissedAt)) return;

    // Clear expired dismissal
    if (dismissedAt) localStorage.removeItem(POPUP_DISMISSED_KEY);

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, POPUP_DELAY_MS);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    // Don't show again for 3 days
    localStorage.setItem(POPUP_DISMISSED_KEY, String(Date.now() + 3 * 24 * 60 * 60 * 1000));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || isSubmitting) return;

    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from("newsletter_subscribers")
        .insert({ email: email.trim() });

      if (error) {
        if (error.code === "23505") {
          toast.info("You're already subscribed! 🎉");
        } else {
          throw error;
        }
      } else {
        toast.success("Welcome aboard! 🚀");
        // Trigger drip campaign for new subscribers
        supabase.functions.invoke("process-drip-emails", {
          body: { trigger_event: "newsletter", recipient_email: email.trim(), recipient_name: "" },
        }).catch(() => {});
      }

      setIsSuccess(true);
      localStorage.setItem(POPUP_SUBSCRIBED_KEY, "true");
      setTimeout(() => setIsVisible(false), 2000);
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
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleDismiss}
            className="fixed inset-0 bg-background/60 backdrop-blur-sm z-[70]"
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[71] w-[420px] max-w-[calc(100vw-32px)] rounded-3xl bg-card/90 backdrop-blur-xl border border-border/50 shadow-2xl overflow-hidden"
          >
            {/* Ambient glow */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-[80px]" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-primary/10 rounded-full blur-[80px]" />

            {/* Close button */}
            <button
              onClick={handleDismiss}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors z-10"
            >
              <X size={16} />
            </button>

            <div className="relative p-8 text-center">
              {!isSuccess ? (
                <>
                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="w-16 h-16 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center mx-auto mb-5"
                  >
                    <Gift className="w-8 h-8 text-primary" />
                  </motion.div>

                  <h3 className="font-display text-2xl font-bold mb-2">
                    Get <span className="gradient-text">Exclusive</span> Updates
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6 max-w-xs mx-auto">
                    Subscribe to our newsletter for the latest tips, insights, and special offers delivered to your inbox.
                  </p>

                  <form onSubmit={handleSubmit} className="flex gap-2">
                    <div className="relative flex-1">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="pl-10 h-11 rounded-xl bg-secondary/50 border-border/30"
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="rounded-xl h-11 px-5"
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                          <Sparkles size={18} />
                        </motion.div>
                      ) : (
                        "Subscribe"
                      )}
                    </Button>
                  </form>

                  <p className="text-[11px] text-muted-foreground/50 mt-3">
                    No spam, unsubscribe anytime. We respect your privacy.
                  </p>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-2">You're In! 🎉</h3>
                  <p className="text-muted-foreground text-sm">
                    Thanks for subscribing. Stay tuned for awesome updates!
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
