"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, Smartphone, Wifi, WifiOff, Zap, Shield, Bell } from "lucide-react";
import { motion } from "framer-motion";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export default function InstallClient() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent);
    setIsIOS(isIOSDevice);

    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsInstalled(true);
    }

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener("beforeinstallprompt", handler);
    window.addEventListener("appinstalled", () => setIsInstalled(true));

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") setIsInstalled(true);
    setDeferredPrompt(null);
  };

  const features = [
    { icon: WifiOff, title: "Offline Access", desc: "Browse content even without internet" },
    { icon: Zap, title: "Lightning Fast", desc: "Instant loading with cached resources" },
    { icon: Smartphone, title: "Native Feel", desc: "Full-screen app experience on your device" },
    { icon: Shield, title: "Secure", desc: "HTTPS secured with latest web standards" },
    { icon: Bell, title: "Stay Updated", desc: "Get the latest content automatically" },
    { icon: Wifi, title: "Smart Caching", desc: "Fonts, images & pages cached for speed" },
  ];

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Download className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Install App</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Install <span className="text-primary">Itoby Infotech</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get instant access to our services, portfolio, and blog — right from your home screen. Works offline!
          </p>
        </motion.div>

        {/* Install Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-16"
        >
          {isInstalled ? (
            <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-8 inline-block">
              <p className="text-green-500 text-xl font-semibold">✅ App Already Installed!</p>
              <p className="text-muted-foreground mt-2">You're using the installed version.</p>
            </div>
          ) : isIOS ? (
            <div className="bg-card border border-border rounded-2xl p-8 max-w-md mx-auto">
              <Smartphone className="w-12 h-12 text-primary mx-auto mb-4" />
              <p className="text-lg font-semibold mb-2">iOS Installation</p>
              <ol className="text-muted-foreground text-left space-y-2">
                <li>1. Tap the <strong>Share</strong> button in Safari</li>
                <li>2. Scroll down and tap <strong>"Add to Home Screen"</strong></li>
                <li>3. Tap <strong>"Add"</strong> to confirm</li>
              </ol>
            </div>
          ) : deferredPrompt ? (
            <Button size="lg" onClick={handleInstall} className="text-lg px-8 py-6 gap-3">
              <Download className="w-5 h-5" />
              Install App Now
            </Button>
          ) : (
            <div className="bg-card border border-border rounded-2xl p-8 max-w-md mx-auto">
              <p className="text-muted-foreground">
                Open this page in <strong>Chrome</strong> or <strong>Edge</strong> on your phone to install the app.
              </p>
            </div>
          )}
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/30 transition-colors"
            >
              <feature.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-1">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
