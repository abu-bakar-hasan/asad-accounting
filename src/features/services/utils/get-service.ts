import { services } from "../data/services";
import { categories } from "../data/categories";
import type { Service, ServiceCategory } from "../types/service";

export function getAllServices(): Service[] {
  return services;
}

export function getFeaturedServices(): Service[] {
  return services.filter((s) => s.featured);
}

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getServicesByCategory(categoryId: string): Service[] {
  return services.filter((s) => s.category === categoryId);
}

export function getAllCategories(): ServiceCategory[] {
  return categories;
}

export function getCategoryById(id: string): ServiceCategory | undefined {
  return categories.find((c) => c.id === id);
}
