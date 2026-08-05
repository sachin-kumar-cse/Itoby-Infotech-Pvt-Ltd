"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

interface PerformanceMetric {
  name: string;
  value: number;
  rating: "good" | "needs-improvement" | "poor";
}

const isDev = process.env.NODE_ENV !== "production";

const getRating = (name: string, value: number): PerformanceMetric["rating"] => {
  const thresholds: Record<string, [number, number]> = {
    LCP: [2500, 4000],
    FID: [100, 300],
    CLS: [0.1, 0.25],
    FCP: [1800, 3000],
    TTFB: [800, 1800],
    INP: [200, 500],
  };
  const [good, poor] = thresholds[name] || [1000, 3000];
  if (value <= good) return "good";
  if (value <= poor) return "needs-improvement";
  return "poor";
};

const reportToGA = (metric: PerformanceMetric) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "web_vitals", {
      event_category: "Web Vitals",
      event_label: metric.name,
      value: Math.round(metric.name === "CLS" ? metric.value * 1000 : metric.value),
      non_interaction: true,
      metric_rating: metric.rating,
    });
  }
};

const observePaint = (entryName: string, metricName: string) => {
  if (typeof PerformanceObserver === "undefined") return;

  try {
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.name === entryName) {
          const value = entry.startTime;
          const rating = getRating(metricName, value);
          const metric = { name: metricName, value, rating };

          if (isDev) {
            console.log(`[Perf] ${metricName}: ${Math.round(value)}ms (${rating})`);
          }
          reportToGA(metric);
        }
      });
    });

    observer.observe({ type: "paint", buffered: true });
  } catch (e) {
    // Observer not supported
  }
};

export const usePerformanceMonitoring = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Observe Paint Timing (FCP)
    observePaint("first-contentful-paint", "FCP");

    // Observe LCP
    if (typeof PerformanceObserver !== "undefined") {
      try {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          if (lastEntry) {
            const value = lastEntry.startTime;
            const rating = getRating("LCP", value);
            const metric = { name: "LCP", value, rating };

            if (isDev) {
              console.log(`[Perf] LCP: ${Math.round(value)}ms (${rating})`);
            }
            reportToGA(metric);
          }
        });
        lcpObserver.observe({ type: "largest-contentful-paint", buffered: true });
      } catch (e) {}

      // Observe CLS
      try {
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          });

          const rating = getRating("CLS", clsValue);
          const metric = { name: "CLS", value: clsValue, rating };

          if (isDev) {
            console.log(`[Perf] CLS: ${clsValue.toFixed(3)} (${rating})`);
          }
          reportToGA(metric);
        });
        clsObserver.observe({ type: "layout-shift", buffered: true });
      } catch (e) {}

      // Observe INP / FID
      try {
        const fidObserver = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry: any) => {
            const value = entry.processingStart - entry.startTime;
            const rating = getRating("FID", value);
            const metric = { name: "FID", value, rating };

            if (isDev) {
              console.log(`[Perf] FID: ${Math.round(value)}ms (${rating})`);
            }
            reportToGA(metric);
          });
        });
        fidObserver.observe({ type: "first-input", buffered: true });
      } catch (e) {}
    }

    // Navigation Timing (TTFB)
    if (performance && performance.getEntriesByType) {
      const navEntries = performance.getEntriesByType("navigation") as PerformanceNavigationTiming[];
      if (navEntries.length > 0) {
        const ttfb = navEntries[0].responseStart;
        if (ttfb > 0) {
          const rating = getRating("TTFB", ttfb);
          const metric = { name: "TTFB", value: ttfb, rating };

          if (isDev) {
            console.log(`[Perf] TTFB: ${Math.round(ttfb)}ms (${rating})`);
          }
          reportToGA(metric);
        }
      }
    }
  }, []);
};
