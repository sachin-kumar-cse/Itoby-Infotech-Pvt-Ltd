"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef, ComponentPropsWithRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkProps extends Omit<ComponentPropsWithRef<typeof Link>, "className" | "href"> {
  to?: string;
  href?: string;
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  end?: boolean;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ className, activeClassName, pendingClassName, to, href, end, ...props }, ref) => {
    const targetHref = href || to || "#";
    const pathname = usePathname();
    const isActive = end
      ? pathname === targetHref
      : pathname === targetHref || (targetHref !== "/" && pathname?.startsWith(targetHref));

    return (
      <Link
        ref={ref}
        href={targetHref}
        className={cn(className, isActive && activeClassName)}
        {...props}
      />
    );
  }
);

NavLink.displayName = "NavLink";

export { NavLink };
