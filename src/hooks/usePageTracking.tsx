"use client";

import { useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function PageTrackerInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag && pathname) {
      const search = searchParams?.toString();
      const url = search ? `${pathname}?${search}` : pathname;
      window.gtag("config", "G-M5G3MH5KZK", {
        page_path: url,
      });
    }
  }, [pathname, searchParams]);

  return null;
}

export function PageTracker() {
  return (
    <Suspense fallback={null}>
      <PageTrackerInner />
    </Suspense>
  );
}

export const usePageTracking = () => {
  // Retained for hook signature compatibility
};
