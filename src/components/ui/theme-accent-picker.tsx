'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, Check, Sparkles, X } from "lucide-react";
import { useThemeAccent } from "@/hooks/useThemeAccent";

export const ThemeAccentPicker = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { activeAccent, setAccent, presets } = useThemeAccent();

  return (
    <div className="relative">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-9 h-9 rounded-xl bg-secondary/80 hover:bg-secondary border border-border/60 flex items-center justify-center text-muted-foreground hover:text-foreground transition-all duration-300 group shadow-lg cursor-pointer"
        title="Customize Cyber Glow Color"
      >
        <Palette className="w-4 h-4 text-primary group-hover:rotate-45 transition-transform duration-300" />
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-primary ring-2 ring-background animate-pulse" />
      </button>

      {/* Floating Color Swatch Popover */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop for closing */}
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 8 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="absolute right-0 mt-3 z-50 w-72 p-3.5 rounded-2xl bg-card/95 backdrop-blur-xl border border-border shadow-2xl space-y-2.5"
            >
              <div className="flex items-center justify-between border-b border-border/60 pb-2">
                <div className="flex items-center gap-1.5 text-xs font-bold tracking-wide text-foreground">
                  <Sparkles className="w-3.5 h-3.5 text-primary" />
                  Executive Themes
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground hover:text-foreground p-1 cursor-pointer"
                  aria-label="Close"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* 5 Executive Themes List */}
              <div className="space-y-1.5">
                {presets.map((preset) => {
                  const isSelected = activeAccent.id === preset.id;
                  return (
                    <button
                      key={preset.id}
                      onClick={() => setAccent(preset)}
                      className={`w-full flex items-center justify-between p-2 rounded-xl border text-xs font-semibold transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? "border-primary bg-primary/10 ring-1 ring-primary/40 shadow-sm"
                          : "border-border/40 hover:border-border/80 bg-secondary/30 hover:bg-secondary/70"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span
                          className="w-4 h-4 rounded-full shadow-sm shrink-0 ring-1 ring-border/50"
                          style={{ backgroundColor: preset.hex }}
                        />
                        <span
                          className={`text-xs ${
                            isSelected ? "text-foreground font-bold" : "text-muted-foreground"
                          }`}
                        >
                          {preset.name}
                        </span>
                      </div>
                      {isSelected && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary/20 text-primary flex items-center gap-1">
                          <Check className="w-3 h-3" /> Active
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
