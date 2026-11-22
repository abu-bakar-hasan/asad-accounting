import React from "react";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowUpRight01Icon,
  Invoice01Icon,
  File02Icon,
  Analytics01Icon,
  ChartHistogramIcon,
  Briefcase01Icon,
  Building01Icon,
  Certificate01Icon,
  Stamp01Icon,
  TrademarkIcon,
  ShieldCheckIcon,
  DocumentValidationIcon,
  File01Icon,
} from "@hugeicons/core-free-icons";
import type { Service } from "../types/service";

export function getServiceIcon(slug: string) {
  switch (slug) {
    case "gst-registration":
      return Invoice01Icon;
    case "gst-return-filing":
      return File02Icon;
    case "itr-filing":
      return Analytics01Icon;
    case "accounting-bookkeeping":
      return ChartHistogramIcon;
    case "balance-sheet-finalization":
      return Briefcase01Icon;
    case "company-incorporation":
      return Building01Icon;
    case "msme-registration":
      return Certificate01Icon;
    case "fssai-license":
      return Stamp01Icon;
    case "trademark-registration":
      return TrademarkIcon;
    case "epf-esi-registration":
      return ShieldCheckIcon;
    case "tender-filing":
      return DocumentValidationIcon;
    default:
      return File01Icon;
  }
}

export function ServiceRow({ service }: { service: Service }) {
  const icon = getServiceIcon(service.slug);

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex items-center justify-between gap-4 sm:gap-6 lg:gap-8 rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:px-8 lg:py-6 bg-surface border border-border/80 shadow-[0_2px_10px_rgba(23,69,45,0.03)] hover:shadow-[0_8px_24px_rgba(23,69,45,0.08)] hover:border-sage-300 hover:bg-sage-50/50 hover:-translate-y-0.5 transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700"
    >
      {/* Left: Restrained Service Icon */}
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-surface-muted border border-border/80 flex items-center justify-center text-brand-900 group-hover:bg-sage-100 group-hover:border-sage-200 transition-all duration-200 shrink-0">
        <HugeiconsIcon icon={icon} size={22} className="group-hover:scale-105 transition-transform" />
      </div>

      {/* Center: Service Title & Concise Description */}
      <div className="flex-1 min-w-0 pr-2">
        <h3 className="text-lg sm:text-xl lg:text-[22px] font-bold text-foreground tracking-tight group-hover:text-brand-900 transition-colors leading-snug">
          {service.title}
        </h3>
        <p className="text-xs sm:text-sm text-muted mt-1 leading-relaxed line-clamp-1 sm:line-clamp-2">
          {service.shortDescription}
        </p>
      </div>

      {/* Right: Minimal Diagonal Arrow */}
      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-surface-muted flex items-center justify-center text-muted group-hover:text-brand-900 group-hover:bg-sage-100 transition-all duration-200 shrink-0">
        <HugeiconsIcon
          icon={ArrowUpRight01Icon}
          size={18}
          className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
        />
      </div>
    </Link>
  );
}
