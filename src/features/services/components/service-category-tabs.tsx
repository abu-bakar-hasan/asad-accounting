"use client";

import React from "react";
import type { ServiceCategory } from "../types/service";

interface ServiceCategoryTabsProps {
  categories: ServiceCategory[];
  activeCategory: string;
  onSelectCategory: (id: string) => void;
  totalServicesCount: number;
}

export function ServiceCategoryTabs({
  categories,
  activeCategory,
  onSelectCategory,
  totalServicesCount,
}: ServiceCategoryTabsProps) {
  return (
    <div className="border-b border-border">
      <div className="flex items-center gap-6 sm:gap-8 overflow-x-auto no-scrollbar scroll-smooth pb-px">
        {/* All Services Tab */}
        <button
          type="button"
          onClick={() => onSelectCategory("all")}
          suppressHydrationWarning
          className={`relative py-3 sm:py-3.5 text-sm sm:text-base whitespace-nowrap transition-colors cursor-pointer focus-visible:outline-none ${
            activeCategory === "all"
              ? "text-brand-900 font-semibold"
              : "text-muted hover:text-foreground font-medium"
          }`}
        >
          <span>All Services ({totalServicesCount})</span>
          {activeCategory === "all" && (
            <span
              className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-brand-900 rounded-full"
              aria-hidden="true"
            />
          )}
        </button>

        {/* Individual Category Tabs */}
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;

          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => onSelectCategory(cat.id)}
              suppressHydrationWarning
              className={`relative py-3 sm:py-3.5 text-sm sm:text-base whitespace-nowrap transition-colors cursor-pointer focus-visible:outline-none ${
                isActive
                  ? "text-brand-900 font-semibold"
                  : "text-muted hover:text-foreground font-medium"
              }`}
            >
              <span>{cat.name}</span>
              {isActive && (
                <span
                  className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-brand-900 rounded-full"
                  aria-hidden="true"
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
