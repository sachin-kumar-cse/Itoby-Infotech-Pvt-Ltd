import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { BackToTop } from "@/components/ui/back-to-top";
import { CursorGlow } from "@/components/ui/cursor-glow";
import { PageTransition } from "@/components/ui/page-transition";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <CursorGlow />
      <Header />
      <main className="flex-1">
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
};
