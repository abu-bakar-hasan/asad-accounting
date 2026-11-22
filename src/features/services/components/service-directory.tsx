"use client";

import React, { useState } from "react";
import type { Service, ServiceCategory } from "../types/service";
import { ServiceCategoryTabs } from "./service-category-tabs";
import { ExpandingServiceRow } from "./expanding-service-row";

const highlights = ["gst-registration", "itr-filing", "accounting-bookkeeping", "company-incorporation", "tender-filing"];

interface ServiceDirectoryProps {
  services: Service[];
  categories: ServiceCategory[];
}

export function ServiceDirectory({
  services,
  categories,
}: ServiceDirectoryProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);

  const filteredServices =
    activeCategory === "all"
      ? highlights.flatMap((slug) => services.filter((service) => service.slug === slug))
      : services.filter((s) => s.category === activeCategory);

  const activeSlug = expandedSlug ?? filteredServices[0]?.slug;

  return (
    <div className="space-y-8 sm:space-y-10">
      {/* Category Navigation with Active Underline */}
      <ServiceCategoryTabs
        categories={categories}
        activeCategory={activeCategory}
        onSelectCategory={(category) => {
          setActiveCategory(category);
          setExpandedSlug(null);
        }}
      />

      {/* Directory of Horizontal Service Rows */}
      {filteredServices.length > 0 ? (
        <div>
          {filteredServices.map((service, index) => (
            <ExpandingServiceRow
              key={service.slug}
              service={service}
              index={index}
              expanded={activeSlug === service.slug}
              onExpand={() => setExpandedSlug(service.slug)}
              onCollapse={() => setExpandedSlug((current) => current === service.slug ? null : current)}
              onToggle={() => setExpandedSlug(activeSlug === service.slug ? null : service.slug)}
            />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="py-16 text-center rounded-3xl bg-surface border border-border">
          <p className="text-base font-medium text-foreground mb-3">
            No services available in this category yet.
          </p>
          <button
            type="button"
            onClick={() => setActiveCategory("all")}
            className="text-sm font-semibold text-brand-900 hover:text-brand-800 hover:underline cursor-pointer"
          >
            Return to All Services
          </button>
        </div>
      )}
    </div>
  );
}
