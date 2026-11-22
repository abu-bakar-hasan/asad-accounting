import React from "react";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { Container } from "@/components/layout/container";
import { ServiceDirectory } from "@/features/services/components/service-directory";
import {
  getAllServices,
  getAllCategories,
} from "@/features/services/utils/get-service";

export function ServicesSection() {
  const services = getAllServices();
  const categories = getAllCategories();

  return (
    <section id="services" className="relative overflow-hidden py-20 lg:py-28 bg-background">
      <div aria-hidden="true" className="pointer-events-none absolute -right-48 -top-64 h-96 w-[700px] rounded-[50%] bg-sage-100/60 rotate-12" />
      <Container className="relative space-y-10 sm:space-y-12">
        {/* Section Introduction */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div aria-hidden="true" className="mb-4 h-1 w-12 rounded-full bg-brand-800" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.12]">
              Explore Our Services
            </h2>
            <p className="text-base sm:text-lg text-muted mt-2.5 sm:mt-3 leading-relaxed max-w-[650px]">
              From everyday tax filings to complex business registrations, find
              the support you need.
            </p>
          </div>

          {/* Browse All Services Link */}
          <Link
            href="/services"
            className="group inline-flex items-center gap-1.5 text-brand-900 hover:text-brand-800 font-semibold text-sm sm:text-base transition-colors shrink-0 self-start md:self-end"
          >
            <span>Browse All Services</span>
            <HugeiconsIcon
              icon={ArrowUpRight01Icon}
              size={18}
              className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
            />
          </Link>
        </div>

        {/* Editorial Service Directory with Tabs & Rows */}
        <ServiceDirectory services={services} categories={categories} />
      </Container>
    </section>
  );
}
