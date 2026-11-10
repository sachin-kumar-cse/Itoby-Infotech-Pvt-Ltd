"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string;
  withLink?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className,
  withLink = false,
}) => {
  const logoContent = (
    <div
      className={cn(
        "relative inline-block shrink-0 select-none",
        "h-10 sm:h-11 md:h-12 lg:h-14 aspect-[1024/342]",
        "transition-all duration-300",
        className
      )}
      style={{
        aspectRatio: "1024 / 342",
        minWidth: "120px",
      }}
    >
      {/* 
        Dynamic Base Layer:
        Masked with the official Itoby letterforms & typography.
        Its fill is driven by bg-primary (CSS variable --primary), which
        dynamically and instantly reflects any color chosen from the Theme Accent Palette.
      */}
      <div
        className="absolute inset-0 bg-primary transition-colors duration-300 group-hover:brightness-110 group-hover:drop-shadow-[0_0_15px_hsl(var(--primary)/0.35)]"
        style={{
          maskImage: "url(/images/itoby-logo-base.png)",
          WebkitMaskImage: "url(/images/itoby-logo-base.png)",
          maskSize: "contain",
          WebkitMaskSize: "contain",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskPosition: "left center",
          WebkitMaskPosition: "left center",
        }}
        aria-hidden="true"
      />

      {/* 
        Signature Brand Orange Accent:
        Renders the iconic orange (#FE8901) quadrant of the "o" and the tail of "y".
      */}
      <img
        src="/images/itoby-logo-accent.png"
        alt="Itoby Infotech Private Limited"
        className="absolute inset-0 w-full h-full object-contain pointer-events-none"
        style={{ objectPosition: "left center" }}
        loading="eager"
      />
    </div>
  );

  if (withLink) {
    return (
      <Link
        href="/"
        className="inline-flex items-center group focus:outline-none"
        aria-label="Itoby Infotech Private Limited - Home"
      >
        {logoContent}
      </Link>
    );
  }

  return logoContent;
};

