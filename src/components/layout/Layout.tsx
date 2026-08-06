"use client";

import { ReactNode, useState, useEffect } from "react";
import dynamic from "next/dynamic";
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

// Dynamically import overlay components with ssr: false for Next.js App Router stability
const AIChatbot = dynamic(() => import("@/components/ui/ai-chatbot").then(m => m.AIChatbot), { ssr: false });
const PWAInstallBanner = dynamic(() => import("@/components/ui/pwa-install-banner").then(m => m.PWAInstallBanner), { ssr: false });
const CommandPaletteModal = dynamic(() => import("@/components/ui/command-palette-modal").then(m => m.CommandPaletteModal), { ssr: false });
const LiveActivityToast = dynamic(() => import("@/components/ui/live-activity-toast").then(m => m.LiveActivityToast), { ssr: false });

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
        <CommandPaletteModal isOpen={isCommandOpen} onClose={() => setIsCommandOpen(false)} />
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
      <AIChatbot />
      <PWAInstallBanner />
      <LiveActivityToast />
      <CommandPaletteModal isOpen={isCommandOpen} onClose={() => setIsCommandOpen(false)} />
    </div>
  );
};
