import React from "react";
import Link from "next/link";
import { GstGraph } from "./graphics/gst-graph";
import { TaxDonut } from "./graphics/tax-donut";
import { AccountingLedger } from "./graphics/accounting-ledger";
import { RegistrationShapes } from "./graphics/registration-shapes";
import { TenderDocument } from "./graphics/tender-document";

export function ServiceCanvas() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-6xl mx-auto items-stretch">
      {/* 
        Card 1 (The Dominant Card): GST Registration & Filing
        Left column, spans both rows on desktop
      */}
      <Link
        href="/services/gst-registration"
        className="md:col-span-2 lg:col-span-1 lg:row-span-2 relative rounded-3xl bg-gradient-to-b from-[#17452D] via-[#143E29] to-[#0E2C1D] text-white p-7 sm:p-9 lg:p-10 flex flex-col justify-between shadow-[0_16px_40px_-8px_rgba(16,45,32,0.36)] border border-brand-900/60 hover:shadow-[0_22px_48px_-8px_rgba(16,45,32,0.48)] hover:-translate-y-1.5 transition-all duration-300 ease-out group min-h-[380px] sm:min-h-[420px] lg:min-h-[470px]"
      >
        <div>
          <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-[1.15]">
            GST
            <br />
            Registration
            <br />
            & Filing
          </h3>
        </div>

        <div className="w-full mt-6">
          <GstGraph />
        </div>
      </Link>

      {/* Card 2: Income Tax Return (Row 1, Col 2 on Desktop) */}
      <Link
        href="/services/itr-filing"
        className="col-span-1 bg-white rounded-3xl p-6 sm:p-8 flex items-center justify-between gap-4 border border-border/80 shadow-[0_10px_30px_-4px_rgba(23,69,45,0.06),0_4px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_-6px_rgba(23,69,45,0.12)] hover:-translate-y-1 transition-all duration-300 ease-out group min-h-[195px] sm:min-h-[215px]"
      >
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground leading-snug group-hover:text-brand-900 transition-colors">
          Income
          <br />
          Tax Return
        </h3>
        <TaxDonut />
      </Link>

      {/* Card 3: Business Registration (Row 1, Col 3 on Desktop) */}
      <Link
        href="/services/company-incorporation"
        className="col-span-1 bg-white rounded-3xl p-6 sm:p-8 flex items-center justify-between gap-4 border border-border/80 shadow-[0_10px_30px_-4px_rgba(23,69,45,0.06),0_4px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_-6px_rgba(23,69,45,0.12)] hover:-translate-y-1 transition-all duration-300 ease-out group min-h-[195px] sm:min-h-[215px]"
      >
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground leading-snug group-hover:text-brand-900 transition-colors">
          Business
          <br />
          Registration
        </h3>
        <RegistrationShapes />
      </Link>

      {/* Card 4: Accounting & Bookkeeping (Row 2, Col 2 on Desktop) */}
      <Link
        href="/services/accounting-bookkeeping"
        className="col-span-1 bg-white rounded-3xl p-6 sm:p-8 flex items-center justify-between gap-4 border border-border/80 shadow-[0_10px_30px_-4px_rgba(23,69,45,0.06),0_4px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_-6px_rgba(23,69,45,0.12)] hover:-translate-y-1 transition-all duration-300 ease-out group min-h-[195px] sm:min-h-[215px]"
      >
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground leading-snug group-hover:text-brand-900 transition-colors">
          Accounting &
          <br />
          Bookkeeping
        </h3>
        <AccountingLedger />
      </Link>

      {/* Card 5: Tender Filing & DSC (Row 2, Col 3 on Desktop) */}
      <Link
        href="/services/tender-filing"
        className="col-span-1 bg-white rounded-3xl p-6 sm:p-8 flex items-center justify-between gap-4 border border-border/80 shadow-[0_10px_30px_-4px_rgba(23,69,45,0.06),0_4px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_-6px_rgba(23,69,45,0.12)] hover:-translate-y-1 transition-all duration-300 ease-out group min-h-[195px] sm:min-h-[215px]"
      >
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground leading-snug group-hover:text-brand-900 transition-colors">
          Tender
          <br />
          Filing & DSC
        </h3>
        <TenderDocument />
      </Link>
    </div>
  );
}

