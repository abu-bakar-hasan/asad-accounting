import React from "react";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  href: string;
  variant?: "green" | "white";
  graphic: React.ReactNode;
  className?: string;
  titleClassName?: string;
}

export function ServiceCard({
  title,
  href,
  variant = "white",
  graphic,
  className,
  titleClassName,
}: ServiceCardProps) {
  const isGreen = variant === "green";

  return (
    <Link
      href={href}
      className={cn(
        "group relative flex flex-col justify-between rounded-3xl transition-all duration-300 ease-out",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2",
        "hover:-translate-y-1.5 motion-reduce:hover:translate-y-0",
        isGreen
          ? [
              "bg-gradient-to-b from-brand-900 to-brand-950 text-white",
              "p-7 sm:p-9 lg:p-10",
              "border border-brand-900/60 shadow-[0_12px_32px_-8px_rgba(16,45,32,0.32)]",
              "hover:shadow-[0_20px_44px_-8px_rgba(16,45,32,0.48)] hover:border-brand-700/60",
            ]
          : [
              "bg-surface text-foreground",
              "p-6 sm:p-7 lg:p-8",
              "border border-border/90 shadow-[0_4px_20px_-2px_rgba(23,69,45,0.06),0_1px_3px_rgba(0,0,0,0.03)]",
              "hover:shadow-[0_16px_36px_-6px_rgba(23,69,45,0.14)] hover:border-border",
            ],
        className
      )}
    >
      {/* Card Header: Service Title and Clean Action Indicator */}
      <div className="flex items-start justify-between gap-4">
        <h3
          className={cn(
            "font-bold tracking-tight leading-snug transition-colors duration-200",
            isGreen
              ? "text-2xl sm:text-3xl lg:text-[28px] text-white"
              : "text-xl sm:text-2xl text-foreground group-hover:text-brand-900",
            titleClassName
          )}
        >
          {title}
        </h3>

        <div
          className={cn(
            "w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-200 shrink-0",
            isGreen
              ? "bg-white/10 text-white/90 group-hover:bg-white/20 group-hover:text-white"
              : "bg-surface-muted text-muted group-hover:bg-sage-100 group-hover:text-brand-900"
          )}
          aria-hidden="true"
        >
          <HugeiconsIcon
            icon={ArrowRight01Icon}
            size={18}
            className="transform transition-transform duration-200 group-hover:translate-x-0.5"
          />
        </div>
      </div>

      {/* Decorative Graphic Visualization */}
      <div className={cn(isGreen ? "w-full mt-6 sm:mt-10" : "flex justify-end items-end mt-4 sm:mt-6")}>
        {graphic}
      </div>
    </Link>
  );
}
