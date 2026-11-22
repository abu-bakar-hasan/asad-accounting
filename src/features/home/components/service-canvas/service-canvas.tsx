import React from "react";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { GstGraph } from "./graphics/gst-graph";
import { TaxDonut } from "./graphics/tax-donut";
import { AccountingBars } from "./graphics/accounting-bars";
import { RegistrationShapes } from "./graphics/registration-shapes";
import { TenderDocument } from "./graphics/tender-document";

export function ServiceCanvas() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 max-w-6xl mx-auto items-stretch">
      {/* 
        Left + Center Block (Col 1 & Col 2 on Desktop):
        Single unified bento container with deep forest-green background and the continuous
        ascending line graph spanning behind both the GST section and the gap between the white cards.
      */}
      <div className="lg:col-span-2 relative rounded-3xl bg-gradient-to-b from-[#143B28] to-[#0D261B] overflow-hidden shadow-[0_12px_36px_-8px_rgba(16,45,32,0.32)] border border-brand-900/60 flex flex-col md:grid md:grid-cols-2">
        {/* Full-width ascending line graph in the background */}
        <GstGraph />

        {/* GST Registration & Filing (Left Half) */}
        <Link
          href="/services/gst-registration"
          className="relative z-10 p-7 sm:p-9 lg:p-10 flex flex-col justify-between h-full min-h-[220px] md:min-h-[460px] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700"
        >
          <div>
            <h3 className="text-2xl sm:text-3xl lg:text-[28px] font-bold text-white tracking-tight leading-snug max-w-[260px]">
              GST Registration & Filing
            </h3>
          </div>
          {/* Transparent bottom area reveals the green ascending graph and vertical bars */}
          <div className="h-28 sm:h-36 pointer-events-none" aria-hidden="true" />
        </Link>

        {/* Right Half: Income Tax Return & Accounting stacked with green graph showing in the gap */}
        <div className="relative z-10 p-0 flex flex-col gap-4 sm:gap-5 h-full">
          {/* Card 2: Income Tax Return (Top) */}
          <Link
            href="/services/itr-filing"
            className="bg-white rounded-3xl p-6 sm:p-7 flex-1 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 ease-out hover:-translate-y-0.5 group min-h-[195px] sm:min-h-[215px]"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground group-hover:text-brand-900 transition-colors">
                Income Tax Return
              </h3>
              <div
                className="w-8 h-8 rounded-full bg-[#F1F3EF] flex items-center justify-center text-muted group-hover:text-brand-900 group-hover:bg-sage-100 transition-colors shrink-0"
                aria-hidden="true"
              >
                <HugeiconsIcon
                  icon={ArrowRight01Icon}
                  size={15}
                  className="transform transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </div>
            </div>

            <div className="flex justify-end items-end mt-4">
              <TaxDonut />
            </div>
          </Link>

          {/* Card 4: Accounting & Bookkeeping (Bottom) */}
          <Link
            href="/services/accounting-bookkeeping"
            className="bg-white rounded-3xl p-6 sm:p-7 flex-1 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 ease-out hover:-translate-y-0.5 group min-h-[195px] sm:min-h-[215px]"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground group-hover:text-brand-900 transition-colors">
                Accounting & Bookkeeping
              </h3>
              <div
                className="w-8 h-8 rounded-full bg-[#F1F3EF] flex items-center justify-center text-muted group-hover:text-brand-900 group-hover:bg-sage-100 transition-colors shrink-0"
                aria-hidden="true"
              >
                <HugeiconsIcon
                  icon={ArrowRight01Icon}
                  size={15}
                  className="transform transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </div>
            </div>

            <div className="flex justify-end items-end mt-4">
              <AccountingBars />
            </div>
          </Link>
        </div>
      </div>

      {/* 
        Right Block (Col 3 on Desktop):
        Two separate white cards (Business Registration & Tender Filing) matching the same height
      */}
      <div className="lg:col-span-1 flex flex-col gap-4 sm:gap-5 h-full">
        {/* Card 3: Business Registration (Top) */}
        <Link
          href="/services/company-incorporation"
          className="bg-white rounded-3xl p-6 sm:p-7 flex-1 flex flex-col justify-between border border-border/80 shadow-[0_4px_20px_-2px_rgba(23,69,45,0.06)] hover:shadow-[0_16px_36px_-6px_rgba(23,69,45,0.12)] transition-all duration-300 ease-out hover:-translate-y-1 group min-h-[195px] sm:min-h-[215px]"
        >
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground group-hover:text-brand-900 transition-colors">
              Business Registration
            </h3>
            <div
              className="w-8 h-8 rounded-full bg-[#F1F3EF] flex items-center justify-center text-muted group-hover:text-brand-900 group-hover:bg-sage-100 transition-colors shrink-0"
              aria-hidden="true"
            >
              <HugeiconsIcon
                icon={ArrowRight01Icon}
                size={15}
                className="transform transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </div>
          </div>

          <div className="flex justify-end items-end mt-4">
            <RegistrationShapes />
          </div>
        </Link>

        {/* Card 5: Tender Filing & DSC (Bottom) */}
        <Link
          href="/services/tender-filing"
          className="bg-white rounded-3xl p-6 sm:p-7 flex-1 flex flex-col justify-between border border-border/80 shadow-[0_4px_20px_-2px_rgba(23,69,45,0.06)] hover:shadow-[0_16px_36px_-6px_rgba(23,69,45,0.12)] transition-all duration-300 ease-out hover:-translate-y-1 group min-h-[195px] sm:min-h-[215px]"
        >
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground group-hover:text-brand-900 transition-colors">
              Tender Filing & DSC
            </h3>
            <div
              className="w-8 h-8 rounded-full bg-[#F1F3EF] flex items-center justify-center text-muted group-hover:text-brand-900 group-hover:bg-sage-100 transition-colors shrink-0"
              aria-hidden="true"
            >
              <HugeiconsIcon
                icon={ArrowRight01Icon}
                size={15}
                className="transform transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </div>
          </div>

          <div className="flex justify-end items-end mt-4">
            <TenderDocument />
          </div>
        </Link>
      </div>
    </div>
  );
}
