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

export const useThemeAccent = () => {
  const [activeAccent, setActiveAccent] = useState<AccentPreset>(ACCENT_PRESETS[0]);

  const applyAccent = (preset: AccentPreset) => {
    setActiveAccent(preset);
    if (typeof window !== "undefined") {
      localStorage.setItem("itoby-theme-accent", preset.id);

      const root = document.documentElement;
      root.style.setProperty("--primary", preset.hsl);
      root.style.setProperty("--accent", preset.hsl);
      root.style.setProperty("--ring", preset.hsl);
      root.style.setProperty("--glow-primary", preset.hsl);
      root.style.setProperty("--gradient-start", preset.hsl);
      root.style.setProperty("--chart-1", preset.hsl);
      root.style.setProperty("--sidebar-primary", preset.hsl);
      root.style.setProperty("--sidebar-ring", preset.hsl);

      // Dispatch custom event for canvas components to listen & update dynamically
      window.dispatchEvent(new CustomEvent("themeAccentChange", { detail: preset }));
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("itoby-theme-accent");
      if (saved) {
        const found = ACCENT_PRESETS.find((p) => p.id === saved);
        if (found) {
          applyAccent(found);
          return;
        }
      }
    }
    applyAccent(ACCENT_PRESETS[0]);
  }, []);

  return {
    activeAccent,
    setAccent: applyAccent,
    presets: ACCENT_PRESETS,
  };
};
