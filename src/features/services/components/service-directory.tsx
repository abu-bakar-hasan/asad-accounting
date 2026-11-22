"use client";

import React, { useState } from "react";
import type { Service, ServiceCategory } from "../types/service";
import { ServiceCategoryTabs } from "./service-category-tabs";
import { ServiceRow } from "./service-row";
import { FeaturedServiceRow } from "./featured-service-row";

interface ServiceDirectoryProps {
  services: Service[];
  categories: ServiceCategory[];
}

export function ServiceDirectory({
  services,
  categories,
}: ServiceDirectoryProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredServices =
    activeCategory === "all"
      ? services
      : services.filter((s) => s.category === activeCategory);

  // The first visible service with `featured: true` receives the featured row treatment
  const featuredIndex = filteredServices.findIndex((s) => s.featured);

  return (
    <div className="space-y-8 sm:space-y-10">
      {/* Category Navigation with Active Underline */}
      <ServiceCategoryTabs
        categories={categories}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
        totalServicesCount={services.length}
      />

      {/* Directory of Horizontal Service Rows */}
      {filteredServices.length > 0 ? (
        <div className="space-y-3.5 sm:space-y-4">
          {filteredServices.map((service, index) => {
            if (index === featuredIndex) {
              return (
                <FeaturedServiceRow key={service.slug} service={service} />
              );
            }
            return <ServiceRow key={service.slug} service={service} />;
          })}
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
