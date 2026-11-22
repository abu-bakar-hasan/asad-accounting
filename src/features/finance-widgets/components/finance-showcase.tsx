"use client";

import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Clock01Icon } from "@hugeicons/core-free-icons";

export function FinanceShowcase() {
  const [activeRange, setActiveRange] = useState<"7D" | "30D" | "90D">("30D");

  return (
    <div className="bg-surface rounded-2xl p-6 border border-border shadow-lg space-y-6">
      {/* Header with 7D | 30D | 90D Filter */}
      <div className="flex items-center justify-between pb-4 border-b border-border">
        <span className="text-sm font-bold text-foreground">
          Financial Year 2026–27
        </span>

        {/* Range Selector */}
        <div className="inline-flex p-1 bg-surface-muted rounded-lg border border-border text-xs font-medium">
          {(["7D", "30D", "90D"] as const).map((range) => (
            <button
              key={range}
              type="button"
              suppressHydrationWarning
              onClick={() => setActiveRange(range)}
              className={`px-3 py-1 rounded-md transition-colors ${
                activeRange === range
                  ? "bg-brand-900 text-white"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* Progress bar from Style Guide */}
      <div className="space-y-2">
        <div className="flex justify-between text-xs font-semibold">
          <span className="text-muted">GST & Tax Compliance Rate</span>
          <span className="text-brand-900 font-bold">72%</span>
        </div>
        <div className="w-full h-2.5 bg-sage-100 rounded-lg overflow-hidden">
          <div
            className="h-full bg-brand-900 rounded-lg transition-all duration-500"
            style={{ width: "72%" }}
          ></div>
        </div>
      </div>

      {/* Area Graph line & fill from Style Guide */}
      <div className="space-y-2 pt-2">
        <div className="flex items-center justify-between text-xs text-muted">
          <span>Tax Efficiency Curve</span>
          <span className="text-success font-medium">Optimized</span>
        </div>
        <div className="w-full h-24 relative overflow-hidden rounded-xl bg-surface-muted/50 p-1">
          <svg
            viewBox="0 0 300 90"
            className="w-full h-full overflow-visible"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#C5D9C2" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#EDF4E9" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <path
              d="M0 70 C 40 60, 70 68, 110 40 C 150 15, 190 45, 230 30 C 265 15, 285 20, 300 12 L 300 90 L 0 90 Z"
              fill="url(#chartGradient)"
            />
            <path
              d="M0 70 C 40 60, 70 68, 110 40 C 150 15, 190 45, 230 30 C 265 15, 285 20, 300 12"
              fill="none"
              className="stroke-brand-700"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <circle cx="300" cy="12" r="4.5" className="fill-brand-900" />
            <circle
              cx="300"
              cy="12"
              r="8"
              className="stroke-brand-700"
              strokeWidth="1.5"
              fill="none"
              opacity="0.4"
            />
          </svg>
        </div>
      </div>

      {/* Reminder Notice */}
      <div className="p-4 rounded-xl bg-sage-100 border border-sage-200 flex items-start gap-3 text-xs text-brand-950">
        <HugeiconsIcon
          icon={Clock01Icon}
          size={18}
          className="text-brand-900 shrink-0 mt-0.5"
        />
        <div>
          <span className="font-semibold block">Upcoming Deadline: GSTR-3B</span>
          <span className="text-muted leading-tight block mt-0.5">
            Verify input tax credits (ITC) and finalize purchase reconciliations before the 20th.
          </span>
        </div>
      </div>
    </div>
  );
}
