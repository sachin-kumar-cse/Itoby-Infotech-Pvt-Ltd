"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function NotFound() {
  const pathname = usePathname();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", pathname);
  }, [pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center p-8 rounded-2xl border border-border bg-card max-w-md shadow-2xl">
        <h1 className="mb-4 text-6xl font-extrabold text-primary font-display">404</h1>
        <p className="mb-2 text-2xl font-bold text-foreground">Page Not Found</p>
        <p className="mb-6 text-muted-foreground text-sm">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}
