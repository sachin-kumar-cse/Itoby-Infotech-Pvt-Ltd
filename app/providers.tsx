"use client";

import React, { useState } from "react";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { CurrencyProvider } from "@/hooks/useCurrency";
import { PageTracker } from "@/hooks/usePageTracking";
import ErrorBoundary from "@/components/ErrorBoundary";

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
          },
        },
      })
  );

  return (
    <ErrorBoundary>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <CurrencyProvider>
          <QueryClientProvider client={queryClient}>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              <PageTracker />
              {children}
            </TooltipProvider>
          </QueryClientProvider>
        </CurrencyProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
