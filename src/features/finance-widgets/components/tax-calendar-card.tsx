"use client";

import { useState } from "react";
import Link from "next/link";
import { DayPicker } from "@daypicker/react";
import "@daypicker/react/style.css";
import styles from "./tax-calendar.module.css";

const filters = ["All filings", "GST", "Income Tax"] as const;
type Filter = typeof filters[number];
const rules = [
  { title: "GSTR-1", category: "GST", day: 11, months: null, description: "Outward supplies for the previous month. For taxpayers filing monthly.", source: "https://tutorial.gst.gov.in/downloads/news/welcome_kit_for_new_taxpyers.pdf" },
  { title: "GSTR-3B", category: "GST", day: 20, months: null, description: "Summary return and tax payment for the previous month. Monthly filers only; QRMP dates differ.", source: "https://tutorial.gst.gov.in/userguide/returns/Create_and_Submit_GSTR3B.htm" },
  { title: "Advance tax instalment", category: "Income Tax", day: 15, months: [2, 5, 8, 11], description: "For taxpayers liable to pay advance tax in quarterly instalments. Presumptive taxpayers generally pay by 15 March.", source: "https://www.incometax.gov.in/iec/foportal/help/all-topics/e-filing-services/tax-payments?mobile-app=1" },
];

export function TaxCalendarCard() {
  const [month, setMonth] = useState(() => new Date(new Date().getFullYear(), new Date().getMonth(), 1));
  const [selected, setSelected] = useState<Date | undefined>();
  const [filter, setFilter] = useState<Filter>("All filings");
  const filings = rules.filter(rule => (filter === "All filings" || rule.category === filter) && (!rule.months || rule.months.includes(month.getMonth())));
  const dates = filings.map(rule => new Date(month.getFullYear(), month.getMonth(), rule.day));
  const visible = selected ? filings.filter(rule => rule.day === selected.getDate()) : filings;
  const dateLabel = selected
    ? selected.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })
    : month.toLocaleDateString("en-IN", { month: "long", year: "numeric" });

  return (
    <section aria-labelledby="filing-calendar-heading" className="grid items-start gap-10 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
      <div className="lg:pt-8">
        <h2 id="filing-calendar-heading" className="text-4xl font-semibold leading-[1.12] tracking-[-0.045em] text-foreground sm:text-5xl">Stay ahead<br />of your filings.</h2>
        <p className="mt-5 max-w-sm text-base leading-relaxed text-muted">A clearer view of what is due. Choose a date to see the details.</p>
        <div aria-label="Filter filing calendar" className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
          {filters.map(item => <button key={item} type="button" aria-pressed={filter === item} onClick={() => { setFilter(item); setSelected(undefined); }} className={`border-b-2 pb-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-800 ${filter === item ? "border-brand-800 text-brand-900" : "border-transparent text-muted hover:text-brand-900"}`}>{item}</button>)}
        </div>
        <p className="mt-8 max-w-sm text-xs leading-relaxed text-muted">Standard schedules, not live deadline updates. Extensions, filing schemes and individual circumstances may change your due date. Confirm with ASAD before filing.</p>
        <Link href="/contact" className="mt-6 inline-block border-b border-brand-900 pb-1 text-sm font-semibold text-brand-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-800">Check my filing dates</Link>
      </div>

      <div className={styles.calendar}>
        <DayPicker mode="single" month={month} onMonthChange={next => { setMonth(next); setSelected(undefined); }} selected={selected} onSelect={setSelected} weekStartsOn={1} fixedWeeks showOutsideDays={false} modifiers={{ deadline: dates }} modifiersClassNames={{ deadline: styles.deadline }} aria-label="Standard filing schedule calendar" />
        <p className="mt-4 flex items-center gap-2 text-xs text-muted"><span className="h-1.5 w-1.5 rounded-full bg-brand-700" aria-hidden="true" />Standard filing date</p>
        <div aria-live="polite" aria-atomic="true" className="mt-6 min-h-40 border-t border-border pt-6">
          <p className="mb-4 text-sm font-medium text-muted">{dateLabel}</p>
          {visible.length ? <ul className="space-y-5">{visible.map(item => <li key={item.title} className="flex gap-5"><span className="w-7 shrink-0 text-2xl font-semibold tabular-nums tracking-tight text-brand-900">{item.day}</span><div><h3 className="text-base font-semibold text-foreground">{item.title}</h3><p className="mt-1 text-sm leading-relaxed text-muted">{item.description}</p><a href={item.source} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-xs text-brand-800 underline underline-offset-4">Official guidance</a></div></li>)}</ul> : <p className="text-sm leading-relaxed text-muted">No standard {filter === "All filings" ? "filings" : filter + " filings"} listed for {selected ? "this date" : "this month"}. Your individual obligations may differ.</p>}
        </div>
      </div>
    </section>
  );
}

