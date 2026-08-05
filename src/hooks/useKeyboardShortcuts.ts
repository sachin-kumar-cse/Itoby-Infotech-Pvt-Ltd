"use client";

import { useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";

interface ShortcutMap {
  [key: string]: () => void;
}

export const useKeyboardShortcuts = (additionalShortcuts?: ShortcutMap) => {
  const router = useRouter();

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      // Don't trigger when typing in inputs
      const tag = (e.target as HTMLElement).tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
      if ((e.target as HTMLElement).isContentEditable) return;

      const key = e.key.toLowerCase();
      const isCtrl = e.ctrlKey || e.metaKey;

      // Global shortcuts
      if (isCtrl && key === "k") {
        e.preventDefault();
        return;
      }

      // Navigation shortcuts (Alt + key)
      if (e.altKey) {
        switch (key) {
          case "h": e.preventDefault(); router.push("/"); break;
          case "a": e.preventDefault(); router.push("/about"); break;
          case "s": e.preventDefault(); router.push("/services"); break;
          case "p": e.preventDefault(); router.push("/portfolio"); break;
          case "b": e.preventDefault(); router.push("/blog"); break;
          case "c": e.preventDefault(); router.push("/contact"); break;
        }
        return;
      }

      // Back to top with 't'
      if (key === "t" && !isCtrl && !e.altKey && !e.shiftKey) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      // Additional shortcuts from parent
      if (additionalShortcuts?.[key]) {
        additionalShortcuts[key]();
      }
    },
    [router, additionalShortcuts]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);
};
