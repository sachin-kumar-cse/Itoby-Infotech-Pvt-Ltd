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
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 10 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="absolute right-0 mt-3 z-50 w-80 p-4 rounded-2xl bg-card/95 backdrop-blur-xl border border-border/80 shadow-2xl space-y-3"
            >
              <div className="flex items-center justify-between border-b border-border/60 pb-2.5">
                <div className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-foreground">
                  <Sparkles className="w-3.5 h-3.5 text-primary" />
                  Cyber Glow Palette (20 Colors)
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground hover:text-foreground p-1 cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* 4x5 Color Swatch Grid */}
              <div className="grid grid-cols-4 gap-2 max-h-[300px] overflow-y-auto custom-scrollbar p-0.5">
                {presets.map((preset) => {
                  const isSelected = activeAccent.id === preset.id;
                  return (
                    <button
                      key={preset.id}
                      onClick={() => setAccent(preset)}
                      title={preset.name}
                      className={`relative p-2 rounded-xl border text-xs font-semibold flex flex-col items-center gap-1 transition-all duration-300 cursor-pointer ${
                        isSelected
                          ? "border-primary bg-primary/15 ring-2 ring-primary/40 shadow-lg shadow-primary/20 scale-105"
                          : "border-border/50 hover:border-border bg-secondary/40 hover:bg-secondary"
                      }`}
                    >
                      <span
                        className="w-6 h-6 rounded-full shadow-md flex items-center justify-center transition-transform hover:scale-110 shrink-0"
                        style={{ backgroundColor: preset.hex }}
                      >
                        {isSelected && <Check className="w-3.5 h-3.5 text-black font-bold" />}
                      </span>
                      <span className="text-[9px] text-muted-foreground truncate w-full text-center font-medium">
                        {preset.name.split(" ")[0]}
                      </span>
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
