import { useEffect } from "react";

interface PerformanceMetric {
  name: string;
  value: number;
  rating: "good" | "needs-improvement" | "poor";
}

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
  if (window.gtag) {
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
  try {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name === entryName) {
          const metric: PerformanceMetric = {
            name: metricName,
            value: entry.startTime,
            rating: getRating(metricName, entry.startTime),
          };
          reportToGA(metric);
          if (import.meta.env.DEV) console.log(`[Perf] ${metricName}: ${entry.startTime.toFixed(1)}ms (${metric.rating})`);
        }
      }
    });
    observer.observe({ type: "paint", buffered: true });
  } catch { /* unsupported */ }
};

const observeLCP = () => {
  try {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const last = entries[entries.length - 1];
      if (last) {
        const metric: PerformanceMetric = {
          name: "LCP",
          value: last.startTime,
          rating: getRating("LCP", last.startTime),
        };
        reportToGA(metric);
        if (import.meta.env.DEV) console.log(`[Perf] LCP: ${last.startTime.toFixed(1)}ms (${metric.rating})`);
      }
    });
    observer.observe({ type: "largest-contentful-paint", buffered: true });
  } catch { /* unsupported */ }
};

const observeCLS = () => {
  try {
    let clsValue = 0;
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value;
        }
      }
    });
    observer.observe({ type: "layout-shift", buffered: true });

    // Report on page hide
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "hidden") {
        const metric: PerformanceMetric = {
          name: "CLS",
          value: clsValue,
          rating: getRating("CLS", clsValue),
        };
        reportToGA(metric);
        if (import.meta.env.DEV) console.log(`[Perf] CLS: ${clsValue.toFixed(4)} (${metric.rating})`);
      }
    }, { once: true });
  } catch { /* unsupported */ }
};

const observeINP = () => {
  try {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const duration = entry.duration;
        const metric: PerformanceMetric = {
          name: "INP",
          value: duration,
          rating: getRating("INP", duration),
        };
        reportToGA(metric);
        if (import.meta.env.DEV) console.log(`[Perf] INP: ${duration.toFixed(1)}ms (${metric.rating})`);
      }
    });
    observer.observe({ type: "event", buffered: true, durationThreshold: 40 } as any);
  } catch { /* unsupported */ }
};

const measureTTFB = () => {
  try {
    const nav = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming;
    if (nav) {
      const ttfb = nav.responseStart - nav.requestStart;
      const metric: PerformanceMetric = {
        name: "TTFB",
        value: ttfb,
        rating: getRating("TTFB", ttfb),
      };
      reportToGA(metric);
      if (import.meta.env.DEV) console.log(`[Perf] TTFB: ${ttfb.toFixed(1)}ms (${metric.rating})`);
    }
  } catch { /* unsupported */ }
};

export const usePerformanceMonitoring = () => {
  useEffect(() => {
    // Defer to avoid impacting page load
    const timeout = setTimeout(() => {
      observePaint("first-contentful-paint", "FCP");
      observeLCP();
      observeCLS();
      observeINP();
      measureTTFB();
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);
};
