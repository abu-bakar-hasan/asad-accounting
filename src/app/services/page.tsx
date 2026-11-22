import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { ServiceGrid } from "@/features/services/components/service-grid";
import { getAllServices, getAllCategories } from "@/features/services/utils/get-service";
import { business } from "@/config/business";

export const metadata: Metadata = {
  title: `Our Services — ${business.name}`,
  description: `Explore all accounting, GST, income tax, corporate registration, and licensing services offered by ${business.name} in Pakur, Jharkhand.`,
};

export default function ServicesPage() {
  const services = getAllServices();
  const categories = getAllCategories();

  return (
    <main className="py-16">
      <Container className="space-y-12">
        <SectionHeading
          title="All Services & Practice Areas"
          description="Browse our comprehensive service directory covering accounting, taxation, company formation, and government licensing."
        />

        <ServiceGrid services={services} categories={categories} />
      </Container>
    </main>
  );
}
