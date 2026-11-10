'use client';

import { useState, useEffect } from "react";

export interface AccentPreset {
  id: string;
  name: string;
  hsl: string; // e.g. "75 100% 46%"
  hex: string; // for UI swatch preview
}

export const ACCENT_PRESETS: AccentPreset[] = [
  { id: "lime", name: "Cyber Lime", hsl: "75 100% 46%", hex: "#aee801" },
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

/**
 * Carefully balanced light-mode accent values.
 * In light mode, high-luminance neon colors (like chartreuse/lime) produce severe glare
 * and fail WCAG accessibility (< 2:1 contrast ratio against white/light backgrounds).
 * These adaptive values ensure crisp, professional, glare-free legibility (> 5:1 contrast)
 * while preserving the brand color family.
 */
export const LIGHT_MODE_ACCENTS: Record<string, { hsl: string; gradientEnd: string }> = {
  lime: { hsl: "142 72% 30%", gradientEnd: "168 80% 26%" }, // Deep Emerald Tech Green
  blue: { hsl: "199 89% 34%", gradientEnd: "220 85% 36%" }, // Deep Sapphire Cyan
  purple: { hsl: "270 70% 42%", gradientEnd: "290 65% 38%" }, // Royal Purple
  pink: { hsl: "330 75% 42%", gradientEnd: "350 70% 38%" }, // Deep Rose Pink
  indigo: { hsl: "238 75% 46%", gradientEnd: "260 70% 42%" }, // Deep Electric Indigo
  crimson: { hsl: "345 75% 40%", gradientEnd: "0 70% 38%" }, // Deep Crimson
  orange: { hsl: "20 85% 40%", gradientEnd: "35 80% 36%" }, // Deep Burnt Amber
  amber: { hsl: "35 90% 34%", gradientEnd: "45 85% 30%" }, // Deep Amber Gold
  emerald: { hsl: "155 80% 28%", gradientEnd: "170 75% 26%" }, // Deep Pine Emerald
  teal: { hsl: "173 80% 28%", gradientEnd: "188 75% 26%" }, // Deep Ocean Teal
  magenta: { hsl: "292 70% 40%", gradientEnd: "315 65% 36%" }, // Deep Magenta
  gold: { hsl: "42 90% 32%", gradientEnd: "32 85% 30%" }, // Deep Royal Gold
  mint: { hsl: "165 75% 28%", gradientEnd: "180 70% 26%" }, // Deep Mint
  violet: { hsl: "258 75% 44%", gradientEnd: "278 70% 40%" }, // Deep Violet
  coral: { hsl: "0 80% 42%", gradientEnd: "15 75% 38%" }, // Deep Coral
  sky: { hsl: "200 90% 34%", gradientEnd: "215 85% 32%" }, // Deep Azure Sky
  rose: { hsl: "350 75% 42%", gradientEnd: "10 70% 38%" }, // Deep Rose
  chartreuse: { hsl: "142 72% 30%", gradientEnd: "160 70% 28%" }, // Forest Green
  fuchsia: { hsl: "293 65% 40%", gradientEnd: "315 60% 36%" }, // Deep Fuchsia
  sunburst: { hsl: "0 80% 42%", gradientEnd: "15 75% 38%" }, // Deep Red
};

export const useThemeAccent = () => {
  const [activeAccent, setActiveAccent] = useState<AccentPreset>(ACCENT_PRESETS[0]);

  const applyAccent = (preset: AccentPreset) => {
    setActiveAccent(preset);
    if (typeof window !== "undefined") {
      localStorage.setItem("itoby-theme-accent", preset.id);

      const isLight = document.documentElement.classList.contains("light");
      const lightConfig = LIGHT_MODE_ACCENTS[preset.id] || {
        hsl: "142 72% 30%",
        gradientEnd: "168 80% 26%",
      };

      const effectiveHsl = isLight ? lightConfig.hsl : preset.hsl;
      const effectiveGradientEnd = isLight ? lightConfig.gradientEnd : "142 76% 36%";
      const effectiveForeground = isLight ? "0 0% 100%" : "0 0% 0%";

      const root = document.documentElement;
      root.style.setProperty("--primary", effectiveHsl);
      root.style.setProperty("--primary-foreground", effectiveForeground);
      root.style.setProperty("--accent", effectiveHsl);
      root.style.setProperty("--accent-foreground", effectiveForeground);
      root.style.setProperty("--ring", effectiveHsl);
      root.style.setProperty("--glow-primary", effectiveHsl);
      root.style.setProperty("--gradient-start", effectiveHsl);
      root.style.setProperty("--gradient-end", effectiveGradientEnd);
      root.style.setProperty("--chart-1", effectiveHsl);
      root.style.setProperty("--sidebar-primary", effectiveHsl);
      root.style.setProperty("--sidebar-primary-foreground", effectiveForeground);
      root.style.setProperty("--sidebar-ring", effectiveHsl);

      window.dispatchEvent(
        new CustomEvent("themeAccentChange", {
          detail: { ...preset, effectiveHsl, isLight },
        })
      );
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const saved = localStorage.getItem("itoby-theme-accent");
    let currentPreset = ACCENT_PRESETS[0];
    if (saved) {
      const found = ACCENT_PRESETS.find((p) => p.id === saved);
      if (found) currentPreset = found;
    }

    applyAccent(currentPreset);

    // Watch for theme toggles (dark <-> light) and immediately update CSS variables
    const observer = new MutationObserver(() => {
      const latestSaved = localStorage.getItem("itoby-theme-accent");
      let latestPreset = ACCENT_PRESETS[0];
      if (latestSaved) {
        const found = ACCENT_PRESETS.find((p) => p.id === latestSaved);
        if (found) latestPreset = found;
      }
      applyAccent(latestPreset);
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
