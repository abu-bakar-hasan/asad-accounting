"use client";

import { useState } from "react";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { Calendar01Icon } from "@hugeicons/core-free-icons";
import { entitySchedules } from "../data/demo-finance";

export function TaxCalendarCard() {
  const [selectedEntity, setSelectedEntity] = useState<string>("proprietorship");

  return (
    <div className="space-y-8">
      {/* Business Type Selector Tabs */}
      <div className="flex flex-wrap justify-center gap-3">
        {[
          { id: "proprietorship", label: "Sole Proprietorship / Trader" },
          { id: "partnership", label: "Partnership / LLP" },
          { id: "pvtltd", label: "Private Limited Co." },
          { id: "ngo", label: "NGO / Trust / Society" },
        ].map((entity) => (
          <button
            key={entity.id}
            onClick={() => setSelectedEntity(entity.id)}
            className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
              selectedEntity === entity.id
                ? "bg-brand-900 text-white shadow-xs"
                : "bg-background border border-border text-muted hover:text-foreground"
            }`}
          >
            {entity.label}
          </button>
        ))}
      </div>

      {/* Deadline Details Box */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-background rounded-2xl p-6 sm:p-8 border border-border space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border">
            <h3 className="text-lg font-bold text-foreground">
              {entitySchedules[selectedEntity]?.title}
            </h3>
            <span className="text-xs text-muted">
              Statutory Compliance Schedule
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {entitySchedules[selectedEntity]?.deadlines.map((filing, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-surface border border-border flex items-start justify-between gap-3 shadow-2xs hover:border-sage-400 transition-colors"
              >
                <div className="space-y-1">
                  <span className="text-sm font-semibold text-foreground block">
                    {filing.name}
                  </span>
                  <span className="text-xs text-muted flex items-center gap-1.5">
                    <HugeiconsIcon
                      icon={Calendar01Icon}
                      size={13}
                      className="text-brand-800"
                    />
                    {filing.due}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-sage-100 border border-sage-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
            <span className="text-muted leading-relaxed">
              Need assistance preparing your documentation or verifying your pending returns?
            </span>
            <Link
              href="/contact"
              className="bg-brand-900 hover:bg-brand-800 text-white font-medium px-4 py-2.5 rounded-xl transition-colors shrink-0 inline-block text-center"
            >
              Schedule Filing Assistance
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
