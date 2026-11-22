"use client";

import { useState } from "react";
import type { Service, ServiceCategory } from "../types/service";
import { ServiceCard } from "./service-card";

export function ServiceGrid({
  services,
  categories,
}: {
  services: Service[];
  categories: ServiceCategory[];
}) {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredServices =
    activeCategory === "all"
      ? services
      : services.filter((s) => s.category === activeCategory);

  return (
    <div className="space-y-8">
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setActiveCategory("all")}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
            activeCategory === "all"
              ? "bg-brand-900 text-white shadow-xs"
              : "bg-surface border border-border text-muted hover:text-foreground hover:border-sage-300"
          }`}
        >
          All Services ({services.length})
        </button>

        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeCategory === cat.id
                ? "bg-brand-900 text-white shadow-xs"
                : "bg-surface border border-border text-muted hover:text-foreground hover:border-sage-300"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Grid of Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredServices.map((service) => (
          <ServiceCard
            key={service.slug}
            service={service}
            highlight={service.featured && activeCategory === "all"}
          />
        ))}
      </div>
    </div>
  );
}
