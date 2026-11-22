import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { ServiceGrid } from "@/features/services/components/service-grid";
import { getAllServices, getAllCategories } from "@/features/services/utils/get-service";

export function ServicesSection() {
  const services = getAllServices();
  const categories = getAllCategories();

  return (
    <section id="services" className="py-20 bg-background border-t border-border">
      <Container className="space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <SectionHeading
            title="Specialized Services for Every Business Stage"
            description="Structured solutions designed to keep your business legally secure, tax-optimized, and audit-ready."
          />
          <Link
            href="/services"
            className="text-xs font-semibold text-brand-900 hover:text-brand-800 flex items-center gap-1.5 shrink-0"
          >
            <span>Browse Full Catalog</span>
            <HugeiconsIcon icon={ArrowRight01Icon} size={14} />
          </Link>
        </div>

        <ServiceGrid services={services} categories={categories} />
      </Container>
    </section>
  );
}
