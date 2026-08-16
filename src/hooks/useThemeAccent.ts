'use client';

import { useState, useEffect } from "react";

export interface AccentPreset {
  id: string;
  name: string;
  hsl: string; // e.g. "75 100% 50%"
  hex: string; // for UI swatch preview
}

export const ACCENT_PRESETS: AccentPreset[] = [
  { id: "lime", name: "Cyber Lime", hsl: "75 100% 50%", hex: "#84cc16" },
  { id: "blue", name: "Neon Cyan", hsl: "190 100% 50%", hex: "#06b6d4" },
  { id: "purple", name: "Electric Purple", hsl: "270 100% 60%", hex: "#a855f7" },
  { id: "pink", name: "Hot Pink", hsl: "325 100% 55%", hex: "#ec4899" },
  { id: "indigo", name: "Electric Indigo", hsl: "238 100% 67%", hex: "#6366f1" },
  { id: "crimson", name: "Crimson Rose", hsl: "345 100% 55%", hex: "#f43f5e" },
  { id: "orange", name: "Solar Orange", hsl: "24 100% 53%", hex: "#f97316" },
  { id: "amber", name: "Amber Flame", hsl: "38 100% 50%", hex: "#f59e0b" },
  { id: "emerald", name: "Emerald Cyber", hsl: "155 100% 45%", hex: "#10b981" },
  { id: "teal", name: "Laser Teal", hsl: "173 80% 40%", hex: "#14b8a6" },
  { id: "magenta", name: "Hyper Magenta", hsl: "292 84% 61%", hex: "#d946ef" },
  { id: "gold", name: "Golden Neon", hsl: "48 96% 47%", hex: "#eab308" },
  { id: "mint", name: "Neon Mint", hsl: "168 80% 50%", hex: "#2dd4bf" },
  { id: "violet", name: "Deep Violet", hsl: "258 90% 66%", hex: "#8b5cf6" },
  { id: "coral", name: "Neon Coral", hsl: "0 100% 71%", hex: "#ff6b6b" },
  { id: "sky", name: "Azure Sky", hsl: "200 98% 39%", hex: "#0284c7" },
  { id: "rose", name: "Radiant Rose", hsl: "350 95% 71%", hex: "#fb7185" },
  { id: "chartreuse", name: "Chartreuse Neon", hsl: "84 81% 55%", hex: "#a3e635" },
  { id: "fuchsia", name: "Quantum Fuchsia", hsl: "293 69% 49%", hex: "#c026d3" },
  { id: "sunburst", name: "Sunburst Red", hsl: "0 84% 60%", hex: "#ef4444" },
];

const LIGHT_MODE_ACCENTS: Record<string, string> = {
  lime: "142 72% 32%",       // Rich Emerald Forest Green
  blue: "199 89% 36%",       // Deep Sapphire Blue
  purple: "270 70% 45%",     // Deep Royal Purple
  pink: "330 75% 42%",       // Deep Magenta Rose
  indigo: "238 75% 48%",     // Rich Electric Indigo
  crimson: "345 75% 42%",    // Deep Crimson
  orange: "20 85% 42%",      // Rich Burnt Orange
  amber: "35 90% 36%",       // Deep Amber Gold
  emerald: "155 80% 30%",    // Deep Ocean Emerald
  teal: "173 80% 30%",       // Deep Ocean Teal
  magenta: "292 70% 42%",    // Rich Magenta
  gold: "42 90% 35%",        // Rich Gold
  mint: "165 75% 32%",       // Deep Mint
  violet: "258 75% 48%",     // Deep Violet
  coral: "0 80% 45%",        // Deep Coral
  sky: "200 90% 36%",        // Deep Azure Sky
  rose: "350 75% 45%",       // Deep Rose
  chartreuse: "142 72% 32%", // Rich Forest Green
  fuchsia: "293 65% 42%",    // Deep Fuchsia
  sunburst: "0 80% 45%",     // Deep Crimson Red
};

export const useThemeAccent = () => {
  const [activeAccent, setActiveAccent] = useState<AccentPreset>(ACCENT_PRESETS[0]);

  const applyAccent = (preset: AccentPreset) => {
    setActiveAccent(preset);
    if (typeof window !== "undefined") {
      localStorage.setItem("itoby-theme-accent", preset.id);

      const isLight = document.documentElement.classList.contains("light");
      const effectiveHsl = isLight ? (LIGHT_MODE_ACCENTS[preset.id] || "142 72% 32%") : preset.hsl;

      const root = document.documentElement;
      root.style.setProperty("--primary", effectiveHsl);
      root.style.setProperty("--accent", effectiveHsl);
      root.style.setProperty("--ring", effectiveHsl);
      root.style.setProperty("--glow-primary", effectiveHsl);
      root.style.setProperty("--gradient-start", effectiveHsl);
      root.style.setProperty("--chart-1", effectiveHsl);
      root.style.setProperty("--sidebar-primary", effectiveHsl);
      root.style.setProperty("--sidebar-ring", effectiveHsl);

      window.dispatchEvent(new CustomEvent("themeAccentChange", { detail: { ...preset, hsl: effectiveHsl, isLight } }));
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const saved = localStorage.getItem("itoby-theme-accent");
    let initialPreset = ACCENT_PRESETS[0];
    if (saved) {
      const found = ACCENT_PRESETS.find((p) => p.id === saved);
      if (found) initialPreset = found;
    }

    applyAccent(initialPreset);

    // MutationObserver to automatically adjust accent colors when switching between dark and light themes
    const observer = new MutationObserver(() => {
      applyAccent(initialPreset);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return {
    activeAccent,
    setAccent: applyAccent,
    presets: ACCENT_PRESETS,
  };
};
