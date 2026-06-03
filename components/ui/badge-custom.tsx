"use client";

import { cn } from "@/lib/utils";

interface BadgeCustomProps {
  children: React.ReactNode;
  variant?: "default" | "secondary" | "accent";
  className?: string;
}

export function BadgeCustom({
  children,
  variant = "default",
  className,
}: BadgeCustomProps) {
  const variants = {
    default: "bg-primary text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground",
    accent: "bg-accent text-accent-foreground",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 text-xs font-medium rounded-full transition-transform hover:scale-105",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
