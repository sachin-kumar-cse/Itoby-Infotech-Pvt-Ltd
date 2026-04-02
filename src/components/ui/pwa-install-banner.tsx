import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, X, Smartphone, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

const DISMISS_KEY = "itoby-pwa-banner-dismissed";
const DISMISS_DURATION = 7 * 24 * 60 * 60 * 1000; // 7 days

export const PWAInstallBanner = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [show, setShow] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Don't show in iframe/preview
    try {
      if (window.self !== window.top) return;
    } catch { return; }
    if (window.location.hostname.includes("id-preview--") || window.location.hostname.includes("lovableproject.com")) return;

    // Check if already installed
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsInstalled(true);
      return;
    }

    // Check dismiss timeout
    const dismissed = localStorage.getItem(DISMISS_KEY);
    if (dismissed && Date.now() - parseInt(dismissed) < DISMISS_DURATION) return;

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      // Show after 30 seconds of browsing
      setTimeout(() => setShow(true), 30000);
    };

    window.addEventListener("beforeinstallprompt", handler);
    window.addEventListener("appinstalled", () => {
      setIsInstalled(true);
      setShow(false);
    });

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") {
      setIsInstalled(true);
      setShow(false);
    }
    setDeferredPrompt(null);
  };

  const handleDismiss = () => {
    setShow(false);
    localStorage.setItem(DISMISS_KEY, Date.now().toString());
  };

  if (isInstalled || !show) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:w-[400px] z-[55] rounded-2xl border border-border/50 bg-card/95 backdrop-blur-xl shadow-2xl shadow-primary/10 p-4"
      >
        <button
          onClick={handleDismiss}
          className="absolute top-3 right-3 w-6 h-6 rounded-full bg-secondary/80 flex items-center justify-center hover:bg-secondary transition-colors"
        >
          <X className="w-3.5 h-3.5 text-muted-foreground" />
        </button>

        <div className="flex gap-3 items-start">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/30 to-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
            <Download className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-sm mb-0.5">Install Itoby Infotech</h3>
            <p className="text-xs text-muted-foreground mb-3">
              Add to your home screen for instant access, offline browsing & faster loading.
            </p>
            <div className="flex items-center gap-3 mb-3">
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Zap className="w-3 h-3 text-primary" />
                <span>Instant</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Smartphone className="w-3 h-3 text-primary" />
                <span>Native feel</span>
              </div>
            </div>
            <div className="flex gap-2">
              <Button size="sm" onClick={handleInstall} className="text-xs h-8 gap-1.5 rounded-lg">
                <Download className="w-3.5 h-3.5" />
                Install Now
              </Button>
              <Button size="sm" variant="ghost" onClick={handleDismiss} className="text-xs h-8 rounded-lg text-muted-foreground">
                Not now
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
