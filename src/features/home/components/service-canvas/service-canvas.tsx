import React from "react";
import { ServiceCard } from "./service-card";
import { GstGraph } from "./graphics/gst-graph";
import { TaxDonut } from "./graphics/tax-donut";
import { AccountingBars } from "./graphics/accounting-bars";
import { RegistrationShapes } from "./graphics/registration-shapes";
import { TenderDocument } from "./graphics/tender-document";

export function ServiceCanvas() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-5 sm:gap-6 max-w-6xl mx-auto">
      {/* Card 1: GST Registration & Filing (Left column, spans 2 rows on desktop) */}
      <ServiceCard
        title="GST Registration & Filing"
        href="/services/gst-registration"
        variant="green"
        graphic={<GstGraph />}
        className="md:col-span-2 lg:col-start-1 lg:row-start-1 lg:row-span-2 min-h-[380px] sm:min-h-[420px] lg:min-h-[480px]"
      />

      {/* Card 2: Income Tax Return (Top middle) */}
      <ServiceCard
        title="Income Tax Return"
        href="/services/itr-filing"
        variant="white"
        graphic={<TaxDonut />}
        className="md:col-span-1 lg:col-start-2 lg:row-start-1 lg:row-span-1 min-h-[190px] sm:min-h-[210px] lg:min-h-[225px]"
      />

      {/* Card 3 (Mobile order 3 / Desktop bottom-middle): Accounting & Bookkeeping */}
      <ServiceCard
        title="Accounting & Bookkeeping"
        href="/services/accounting-bookkeeping"
        variant="white"
        graphic={<AccountingBars />}
        className="md:col-span-1 lg:col-start-2 lg:row-start-2 lg:row-span-1 min-h-[190px] sm:min-h-[210px] lg:min-h-[225px]"
      />

      {/* Card 4 (Mobile order 4 / Desktop top-right): Business Registration */}
      <ServiceCard
        title="Business Registration"
        href="/services/company-incorporation"
        variant="white"
        graphic={<RegistrationShapes />}
        className="md:col-span-1 lg:col-start-3 lg:row-start-1 lg:row-span-1 min-h-[190px] sm:min-h-[210px] lg:min-h-[225px]"
      />

      {/* Card 5 (Mobile order 5 / Desktop bottom-right): Tender Filing & DSC */}
      <ServiceCard
        title="Tender Filing & DSC"
        href="/services/tender-filing"
        variant="white"
        graphic={<TenderDocument />}
        className="md:col-span-1 lg:col-start-3 lg:row-start-2 lg:row-span-1 min-h-[190px] sm:min-h-[210px] lg:min-h-[225px]"
      />
    </div>
  );
}
