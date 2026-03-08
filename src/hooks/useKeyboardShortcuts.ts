import { useEffect, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface ShortcutMap {
  [key: string]: () => void;
}

export const useKeyboardShortcuts = (additionalShortcuts?: ShortcutMap) => {
  const navigate = useNavigate();
  const location = useLocation();

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
        // Could open search/command palette in future
        return;
      }

      // Navigation shortcuts (Alt + key)
      if (e.altKey) {
        switch (key) {
          case "h": e.preventDefault(); navigate("/"); break;
          case "a": e.preventDefault(); navigate("/about"); break;
          case "s": e.preventDefault(); navigate("/services"); break;
          case "p": e.preventDefault(); navigate("/portfolio"); break;
          case "b": e.preventDefault(); navigate("/blog"); break;
          case "c": e.preventDefault(); navigate("/contact"); break;
        }
        return;
      }

      // Escape to close modals (handled by components individually)
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
    [navigate, additionalShortcuts]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);
};
