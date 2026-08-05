"use client";

import { ReactNode, useState, useEffect, lazy, Suspense } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { BackToTop } from "@/components/ui/back-to-top";
import { CursorGlow } from "@/components/ui/cursor-glow";
import { CyberCursorTrail } from "@/components/ui/cyber-cursor-trail";
import { PageTransition } from "@/components/ui/page-transition";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { usePageTracking } from "@/hooks/usePageTracking";
import { useKeyboardShortcuts } from "@/hooks/useKeyboardShortcuts";
import { usePerformanceMonitoring } from "@/hooks/usePerformanceMonitoring";

// Lazy load non-critical overlay components for fast first paint
const AIChatbot = lazy(() => import("@/components/ui/ai-chatbot").then(m => ({ default: m.AIChatbot })));
const PWAInstallBanner = lazy(() => import("@/components/ui/pwa-install-banner").then(m => ({ default: m.PWAInstallBanner })));
const CommandPaletteModal = lazy(() => import("@/components/ui/command-palette-modal").then(m => ({ default: m.CommandPaletteModal })));
const LiveActivityToast = lazy(() => import("@/components/ui/live-activity-toast").then(m => ({ default: m.LiveActivityToast })));

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const pathname = usePathname();
  const [isCommandOpen, setIsCommandOpen] = useState(false);

  usePageTracking();
  useKeyboardShortcuts();
  usePerformanceMonitoring();

  useEffect(() => {
    const handleOpenCommand = () => setIsCommandOpen(true);
    window.addEventListener("openCommandPalette", handleOpenCommand);
    return () => window.removeEventListener("openCommandPalette", handleOpenCommand);
  }, []);

  const isAdminPage = pathname?.startsWith("/admin");

  if (isAdminPage) {
    return (
      <div className="min-h-screen flex flex-col overflow-x-hidden bg-background">
        <CursorGlow />
        <CyberCursorTrail />
        <main className="flex-1">{children}</main>
        <Suspense fallback={null}>
          <CommandPaletteModal isOpen={isCommandOpen} onClose={() => setIsCommandOpen(false)} />
        </Suspense>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <ScrollProgress />
      <CursorGlow />
      <CyberCursorTrail />
      <Header onOpenSearch={() => setIsCommandOpen(true)} />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <PageTransition key={pathname}>{children}</PageTransition>
        </AnimatePresence>
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
      <Suspense fallback={null}>
        <AIChatbot />
        <PWAInstallBanner />
        <LiveActivityToast />
        <CommandPaletteModal isOpen={isCommandOpen} onClose={() => setIsCommandOpen(false)} />
      </Suspense>
    </div>
  );
};
