'use client';

import { useState, useEffect } from "react";

export interface AccentPreset {
  id: string;
  name: string;
  hex: string; // for UI swatch preview
  dark: {
    hsl: string;
    gradientEnd: string;
    glowSecondary: string;
  };
  light: {
    hsl: string;
    gradientEnd: string;
    glowSecondary: string;
  };
}

/**
 * 5 Curated Executive Themes for Itoby Infotech.
 * Tone-on-tone gradient pairs and matched glowing ambient layers
 * ensure 100% visual harmony with zero clashing or rainbow effects.
 * Royal Blue (#003BA1) is the permanent official brand anchor (Default).
 */
export const ACCENT_PRESETS: AccentPreset[] = [
  {
    id: "royal-blue",
    name: "Royal Blue (Brand)",
    hex: "#003BA1",
    dark: {
      hsl: "218 100% 46%",
      gradientEnd: "232 90% 36%", // Deep Royal Navy
      glowSecondary: "218 100% 62%",
    },
    light: {
      hsl: "218 100% 32%",
      gradientEnd: "235 90% 42%",
      glowSecondary: "218 100% 45%",
    },
  },
  {
    id: "indigo",
    name: "Electric Indigo",
    hex: "#6366f1",
    dark: {
      hsl: "238 100% 67%",
      gradientEnd: "258 85% 55%", // Deep Violet
      glowSecondary: "245 90% 68%",
    },
    light: {
      hsl: "238 75% 46%",
      gradientEnd: "260 70% 42%",
      glowSecondary: "238 75% 46%",
    },
  },
  {
    id: "sapphire",
    name: "Sapphire Cyan",
    hex: "#0284c7",
    dark: {
      hsl: "199 95% 48%",
      gradientEnd: "218 90% 42%", // Deep Sapphire
      glowSecondary: "192 90% 55%",
    },
    light: {
      hsl: "199 89% 34%",
      gradientEnd: "220 85% 36%",
      glowSecondary: "199 89% 34%",
    },
  },
  {
    id: "emerald",
    name: "Emerald Growth",
    hex: "#10b981",
    dark: {
      hsl: "155 100% 42%",
      gradientEnd: "172 90% 32%", // Deep Forest
      glowSecondary: "150 90% 50%",
    },
    light: {
      hsl: "155 80% 28%",
      gradientEnd: "170 75% 26%",
      glowSecondary: "155 80% 28%",
    },
  },
  {
    id: "amber",
    name: "Executive Amber",
    hex: "#f59e0b",
    dark: {
      hsl: "38 100% 50%",
      gradientEnd: "24 90% 44%", // Deep Warm Bronze
      glowSecondary: "42 95% 58%",
    },
    light: {
      hsl: "35 90% 34%",
      gradientEnd: "45 85% 30%",
      glowSecondary: "35 90% 34%",
    },
  },
];

export const useThemeAccent = () => {
  const [activeAccent, setActiveAccent] = useState<AccentPreset>(ACCENT_PRESETS[0]);

  const applyAccent = (preset: AccentPreset) => {
    setActiveAccent(preset);
    if (typeof window !== "undefined") {
      localStorage.setItem("itoby-theme-accent", preset.id);

      const isLight = document.documentElement.classList.contains("light");
      const config = isLight ? preset.light : preset.dark;
      const effectiveForeground = isLight ? "0 0% 100%" : "0 0% 100%";

      const root = document.documentElement;
      root.style.setProperty("--primary", config.hsl);
      root.style.setProperty("--primary-foreground", effectiveForeground);
      root.style.setProperty("--accent", config.hsl);
      root.style.setProperty("--accent-foreground", effectiveForeground);
      root.style.setProperty("--ring", config.hsl);
      root.style.setProperty("--glow-primary", config.hsl);
      root.style.setProperty("--glow-secondary", config.glowSecondary);
      root.style.setProperty("--gradient-start", config.hsl);
      root.style.setProperty("--gradient-end", config.gradientEnd);
      root.style.setProperty("--chart-1", config.hsl);
      root.style.setProperty("--sidebar-primary", config.hsl);
      root.style.setProperty("--sidebar-primary-foreground", effectiveForeground);
      root.style.setProperty("--sidebar-ring", config.hsl);

      window.dispatchEvent(
        new CustomEvent("themeAccentChange", {
          detail: { ...preset, effectiveHsl: config.hsl, isLight },
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
      if (found) {
        currentPreset = found;
      } else {
        // If an old deleted preset (e.g. lime/fuchsia) was cached, reset to Royal Blue
        currentPreset = ACCENT_PRESETS[0];
        localStorage.setItem("itoby-theme-accent", currentPreset.id);
      }
    } else {
      localStorage.setItem("itoby-theme-accent", currentPreset.id);
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
