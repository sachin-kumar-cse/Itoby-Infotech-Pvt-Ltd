"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global App Error:", error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-6">
      <div className="text-center p-8 rounded-2xl border border-border bg-card max-w-md shadow-2xl space-y-4">
        <h1 className="text-4xl font-extrabold text-primary font-display">System Error</h1>
        <p className="text-muted-foreground text-sm leading-relaxed">
          An unexpected error occurred. Please try again or return to the homepage.
        </p>
        <div className="flex gap-3 justify-center pt-2">
          <button
            onClick={() => reset()}
            className="px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-bold text-sm hover:opacity-90 transition-opacity"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="px-5 py-2.5 rounded-full bg-secondary border border-border text-foreground font-semibold text-sm hover:bg-card transition-colors"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
