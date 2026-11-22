import React from "react";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import type { Service } from "../types/service";
import { getServiceIcon } from "./service-row";

export function FeaturedServiceRow({ service }: { service: Service }) {
  const icon = getServiceIcon(service.slug);

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex items-center justify-between gap-4 sm:gap-6 lg:gap-8 rounded-2xl sm:rounded-3xl p-6 sm:p-7 lg:px-9 lg:py-7 bg-gradient-to-r from-sage-100/95 via-sage-50 to-surface border border-sage-200 shadow-[0_4px_18px_rgba(23,69,45,0.06)] hover:shadow-[0_12px_32px_rgba(23,69,45,0.1)] hover:border-brand-700/50 hover:-translate-y-0.5 transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700"
    >
      {/* Left: Featured Visual Icon */}
      <div className="w-13 h-13 sm:w-16 sm:h-16 rounded-2xl bg-brand-900 text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 group-hover:bg-brand-800 transition-all duration-200">
        <HugeiconsIcon icon={icon} size={26} className="text-white" />
      </div>

      {/* Center: Featured Title & Description */}
      <div className="flex-1 min-w-0 pr-2">
        <h3 className="text-xl sm:text-2xl lg:text-[25px] font-bold text-foreground tracking-tight group-hover:text-brand-900 transition-colors leading-snug">
          {service.title}
        </h3>
        <p className="text-sm sm:text-base text-muted mt-1 leading-relaxed line-clamp-1 sm:line-clamp-2">
          {service.shortDescription}
        </p>
      </div>

      {/* Right: Diagonal Arrow Button */}
      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-sage-200/90 flex items-center justify-center text-brand-900 group-hover:bg-brand-900 group-hover:text-white group-hover:border-brand-900 transition-all duration-200 shrink-0 shadow-xs">
        <HugeiconsIcon
          icon={ArrowUpRight01Icon}
          size={20}
          className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
        />
      </div>
    </Link>
  );
}
