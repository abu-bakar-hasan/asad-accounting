import React from "react";
import { cn } from "@/lib/utils";

export function SectionHeading({
  title,
  description,
  align = "left",
  className,
}: {
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "space-y-3",
        align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-2xl",
        className
      )}
    >
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
        {title}
      </h2>
      {description && (
        <p className="text-muted text-sm sm:text-base leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
