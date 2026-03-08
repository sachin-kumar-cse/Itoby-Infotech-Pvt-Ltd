import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { BackToTop } from "@/components/ui/back-to-top";
import { CursorGlow } from "@/components/ui/cursor-glow";
import { PageTransition } from "@/components/ui/page-transition";
import { AIChatbot } from "@/components/ui/ai-chatbot";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { NewsletterPopup } from "@/components/ui/newsletter-popup";
import { ExitIntentPopup } from "@/components/ui/exit-intent-popup";
import { usePageTracking } from "@/hooks/usePageTracking";
import { useKeyboardShortcuts } from "@/hooks/useKeyboardShortcuts";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  usePageTracking();
  useKeyboardShortcuts();
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <ScrollProgress />
      <CursorGlow />
      <Header />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <PageTransition key={location.pathname}>{children}</PageTransition>
        </AnimatePresence>
      </main>
      <Footer />
      <WhatsAppButton />
      <AIChatbot />
      <NewsletterPopup />
      <ExitIntentPopup />
      <BackToTop />
    </div>
  );
};
