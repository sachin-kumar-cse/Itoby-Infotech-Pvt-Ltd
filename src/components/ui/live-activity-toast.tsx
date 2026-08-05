import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, TrendingUp, CheckCircle2, Globe, Shield } from "lucide-react";

interface SocialProofItem {
  id: number;
  location: string;
  action: string;
  timeAgo: string;
  icon: typeof Sparkles;
  flag: string;
}

const mockProofItems: SocialProofItem[] = [
  { id: 1, location: "New York, USA 🇺🇸", action: "requested a Custom Software quote", timeAgo: "2 mins ago", icon: Sparkles, flag: "🇺🇸" },
  { id: 2, location: "Sydney, Australia 🇦🇺", action: "viewed Rent Itoby CRM Case Study", timeAgo: "5 mins ago", icon: TrendingUp, flag: "🇦🇺" },
  { id: 3, location: "London, UK 🇬🇧", action: "ran Instant AI Performance Audit", timeAgo: "9 mins ago", icon: CheckCircle2, flag: "🇬🇧" },
  { id: 4, location: "Dubai, UAE 🇦🇪", action: "booked a Mobile App Strategy Call", timeAgo: "14 mins ago", icon: Globe, flag: "🇦🇪" },
  { id: 5, location: "Patna, India 🇮🇳", action: "started a Web Design & Development project", timeAgo: "18 mins ago", icon: Shield, flag: "🇮🇳" },
];

export const LiveActivityToast = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (isDismissed) return;

    // Show initial toast after 4 seconds
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 4000);

    // Rotate toasts every 18 seconds
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % mockProofItems.length);
        setIsVisible(true);
      }, 800);
    }, 18000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [isDismissed]);

  if (isDismissed) return null;

  const currentItem = mockProofItems[currentIndex];
  const ItemIcon = currentItem.icon;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 350, damping: 25 }}
          className="fixed bottom-6 left-6 z-40 max-w-xs sm:max-w-sm bg-card/95 backdrop-blur-xl border border-primary/30 p-3.5 px-4 rounded-2xl shadow-2xl flex items-center justify-between gap-3 group"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
              <span className="text-base">{currentItem.flag}</span>
            </div>
            <div>
              <p className="text-xs font-semibold text-foreground leading-tight">
                Client in <span className="text-primary font-bold">{currentItem.location.split(" ")[0]}</span> {currentItem.action}
              </p>
              <p className="text-[10px] text-muted-foreground mt-0.5 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Verified Activity • {currentItem.timeAgo}
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsDismissed(true)}
            className="text-muted-foreground hover:text-foreground p-1 shrink-0 opacity-60 group-hover:opacity-100 transition-opacity"
            title="Dismiss notification"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
