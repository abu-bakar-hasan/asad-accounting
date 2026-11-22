"use client";

import React, { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Calculator01Icon,
  Invoice01Icon,
  Briefcase01Icon,
  JusticeScale01Icon,
  Analytics01Icon,
  Calendar01Icon,
  Call02Icon,
  Mail01Icon,
  Location01Icon,
  CheckmarkCircle01Icon,
  Tick01Icon,
  ArrowRight01Icon,
  ArrowUpRight01Icon,
  Clock01Icon,
  Shield01Icon,
} from "@hugeicons/core-free-icons";

// ASAD Custom Geometric Monogram Logo
function AsadLogo({ className = "w-9 h-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Left green leg */}
      <path
        d="M20 4L7 34H14.5L20 20.5L25.5 34H33L20 4Z"
        fill="#17452D"
      />
      {/* Accent inner fold */}
      <path
        d="M20 11L14 25.5H26L20 11Z"
        fill="#287A45"
      />
      {/* Lower geometric crossbar accent */}
      <circle cx="20" cy="28.5" r="3" fill="#829A86" />
    </svg>
  );
}

export default function Home() {
  const [activeRange, setActiveRange] = useState<"7D" | "30D" | "90D">("30D");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedEntity, setSelectedEntity] = useState<string>("proprietorship");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Service catalog organized from info.md
  const serviceCategories = [
    {
      id: "tax",
      title: "Taxation & GST",
      icon: Invoice01Icon,
      highlight: true,
      description:
        "Comprehensive end-to-end tax advisory, filing, and registration services to avoid penalties and stay fully compliant.",
      items: [
        "GST Registration & Amendments",
        "Monthly / Quarterly GST Return Filing (GSTR-1, GSTR-3B)",
        "Income Tax Return (ITR) Filing (Salaried & Business)",
        "Professional Tax Assessment & Filing",
        "New PAN & TAN Applications",
      ],
      badge: "Core Service",
    },
    {
      id: "accounting",
      title: "Accounting & Audit",
      icon: Calculator01Icon,
      highlight: false,
      description:
        "Accurate bookkeeping, financial statements, and CMA report preparation for bank loans and audits.",
      items: [
        "Day-to-day Accounting & Bookkeeping",
        "Balance Sheet & Profit/Loss Finalization",
        "Statutory & Internal Audit Assistance",
        "Project Reports & CMA Data for Bank Financing",
        "Reconciliations & Cash Flow Statements",
      ],
      badge: "Financial Health",
    },
    {
      id: "registration",
      title: "Business & Firm Registration",
      icon: Briefcase01Icon,
      highlight: false,
      description:
        "Legally establish your venture with proper corporate structure, government recognitions, and registrations.",
      items: [
        "Private Limited Company Incorporation",
        "Limited Liability Partnership (LLP) Registration",
        "Partnership Deed Drafting & Registration",
        "NGO / Society / Trust Formation",
        "12A, 80G & NITI Aayog (Darpan) Registration",
      ],
      badge: "Startup Ready",
    },
    {
      id: "licenses",
      title: "Licenses & Certifications",
      icon: Shield01Icon,
      highlight: false,
      description:
        "Mandatory government licenses, certificates, and registrations to operate your business legally in Jharkhand & India.",
      items: [
        "MSME / Udyam Certificate Registration",
        "FSSAI Food License (Basic, State)",
        "Class 3 Digital Signature Certificate (DSC)",
        "Trademark & Brand Name Filing",
        "Government Contractor License Assistance",
      ],
      badge: "Authorizations",
    },
    {
      id: "legal",
      title: "Legal & Statutory Compliance",
      icon: JusticeScale01Icon,
      highlight: false,
      description:
        "Employee benefits registration, deed drafting, and legal documentation tailored to local requirements.",
      items: [
        "ESI & Provident Fund (EPFO) Registration",
        "Corporate Social Responsibility (CSR) Filing",
        "Partnership Deeds, Rent Agreements & Affidavits",
        "Annual Statutory Filings with ROC & Regulators",
        "Notice Handling & Clarification Drafting",
      ],
      badge: "Governance",
    },
    {
      id: "tender",
      title: "Tender & Special Applications",
      icon: Analytics01Icon,
      highlight: false,
      description:
        "Government procurement documentation, e-Tender bid filing, and grant application assistance.",
      items: [
        "Government E-Tender Bidding & Documentation",
        "e-Anudaan Portal Grant Applications",
        "Net Worth Certificates & Solvency Reports",
        "Vendor Registration on Portals",
        "Custom Compliance Documentation",
      ],
      badge: "Government Portals",
    },
  ];

  const filteredServices =
    selectedCategory === "all"
      ? serviceCategories
      : serviceCategories.filter((cat) => cat.id === selectedCategory);

  // Compliance timelines based on entity type
  const entityDeadlines: Record<
    string,
    { title: string; filings: { name: string; due: string; status: string }[] }
  > = {
    proprietorship: {
      title: "Sole Proprietorship / Small Traders",
      filings: [
        { name: "GSTR-1 (Outward Supplies)", due: "11th of every month", status: "Recurring" },
        { name: "GSTR-3B (Summary Return & Tax)", due: "20th of every month", status: "Critical" },
        { name: "Income Tax Return (ITR-3/4)", due: "31st July annually", status: "Annual" },
        { name: "Quarterly Advance Tax", due: "15th Jun / Sep / Dec / Mar", status: "Quarterly" },
      ],
    },
    partnership: {
      title: "Partnership Firm / LLP",
      filings: [
        { name: "Monthly / Quarterly GST Filing", due: "11th & 20th monthly", status: "Recurring" },
        { name: "LLP Form 11 (Annual Return)", due: "30th May annually", status: "Statutory" },
        { name: "LLP Form 8 (Statement of Accounts)", due: "30th October", status: "Statutory" },
        { name: "ITR-5 Tax Filing", due: "31st July (or 31st Oct if audited)", status: "Annual" },
      ],
    },
    pvtltd: {
      title: "Private Limited Company",
      filings: [
        { name: "Monthly GSTR-1 & GSTR-3B", due: "Monthly cycle", status: "Recurring" },
        { name: "AOC-4 (Financial Statements)", due: "Within 30 days of AGM", status: "Mandatory" },
        { name: "MGT-7 (Annual Return)", due: "Within 60 days of AGM", status: "Mandatory" },
        { name: "ITR-6 Corporate Tax Return", due: "31st October annually", status: "Critical" },
      ],
    },
    ngo: {
      title: "NGO / Trust / Society",
      filings: [
        { name: "ITR-7 (Exempt Entities)", due: "31st October annually", status: "Mandatory" },
        { name: "Form 10B / 10BB Audit Report", due: "30th September annually", status: "Statutory" },
        { name: "12A & 80G Renewal / Compliance", due: "Periodic regulatory cycle", status: "Tax Exemption" },
        { name: "NITI Aayog Darpan Updates", due: "Annual project renewal", status: "Funding" },
      ],
    },
  };

  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setSubmitted(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      {/* Top Advisory Bar */}
      <aside aria-label="Quick contact" className="bg-brand-950 text-sage-200 text-xs py-2 px-4 border-b border-brand-900">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>ASAD Accounting & Tax Solution • Pakur, Jharkhand</span>
            <span className="hidden md:inline text-sage-400">|</span>
            <span className="hidden md:inline text-sage-300">Proprietor: Md Asad Ansari (CMA Finalist)</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="tel:+918797124734"
              className="hover:text-white flex items-center gap-1 transition-colors"
            >
              <HugeiconsIcon icon={Call02Icon} size={13} />
              <span>+91 8797124734</span>
            </a>
            <span className="text-brand-800">•</span>
            <a
              href="mailto:taxexpertthe@gmail.com"
              className="hover:text-white flex items-center gap-1 transition-colors"
            >
              <HugeiconsIcon icon={Mail01Icon} size={13} />
              <span>taxexpertthe@gmail.com</span>
            </a>
          </div>
        </div>
      </aside>

      {/* Main Navigation Header */}
      <header className="sticky top-0 z-40 bg-surface/90 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          {/* Brand Identity */}
          <a href="#" className="flex items-center gap-3 group">
            <AsadLogo className="w-10 h-10 transition-transform group-hover:scale-105" />
            <div>
              <span className="text-xl font-bold tracking-tight text-foreground block leading-tight">
                ASAD
              </span>
              <span className="text-xs text-muted font-medium block tracking-wide">
                Accounting & Tax Solution
              </span>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-muted">
            <a href="#services" className="hover:text-foreground transition-colors">
              Services
            </a>
            <a href="#compliance" className="hover:text-foreground transition-colors">
              Compliance Timeline
            </a>
            <a href="#about" className="hover:text-foreground transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-brand-800 px-3 py-2 rounded-xl transition-colors"
            >
              <HugeiconsIcon icon={Calendar01Icon} size={18} strokeWidth={2} />
              <span className="hidden sm:inline">Book a Consultation</span>
            </button>

            <a
              href="https://wa.me/918797124734"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-900 hover:bg-brand-800 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors shadow-xs inline-flex items-center gap-2"
            >
              <span>Get Started</span>
              <HugeiconsIcon icon={ArrowRight01Icon} size={16} strokeWidth={2} />
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 px-4 sm:px-6">
        {/* Subtle decorative background gradient wave */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <svg
            className="w-full h-full"
            viewBox="0 0 1440 600"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M0 200C320 280 420 120 720 180C1020 240 1200 130 1440 220V600H0V200Z"
              fill="url(#sage-grad)"
            />
            <defs>
              <linearGradient id="sage-grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#EDF4E9" />
                <stop offset="100%" stopColor="#F8F9F6" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-sage-100 text-brand-900 border border-sage-200">
              <HugeiconsIcon icon={CheckmarkCircle01Icon} size={16} strokeWidth={2.5} className="text-brand-800" />
              <span>Accounting, Taxation & Business Compliance</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.12]">
              Empowering Your Business with Financial Clarity & Total Compliance.
            </h1>

            <p className="text-lg text-muted max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Professional accounting, GST return filing, income tax returns (ITR), company incorporation, and licensing in Pakur, Jharkhand.
            </p>

            {/* Button Styles from Style Guide */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              {/* Primary button */}
              <a
                href="#services"
                className="bg-brand-900 hover:bg-brand-800 text-white font-medium px-6 py-3.5 rounded-full transition-colors shadow-sm inline-flex items-center gap-2"
              >
                <span>Get Started</span>
                <HugeiconsIcon icon={ArrowRight01Icon} size={18} strokeWidth={2} />
              </a>

              {/* Outline button */}
              <a
                href="#services"
                className="border border-brand-900 text-brand-900 hover:bg-sage-100 font-medium px-6 py-3.5 rounded-full transition-colors inline-flex items-center gap-2"
              >
                <span>Our Services</span>
              </a>

              {/* Ghost / Consultation button */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 text-foreground font-medium hover:text-brand-800 px-4 py-3.5 rounded-full transition-colors"
              >
                <HugeiconsIcon icon={Calendar01Icon} size={18} strokeWidth={2} />
                <span>Book a Consultation</span>
              </button>
            </div>

            {/* Quick trust metrics */}
            <div className="pt-6 border-t border-border flex flex-wrap items-center justify-center lg:justify-start gap-8 text-xs text-muted">
              <div className="flex items-center gap-2">
                <HugeiconsIcon icon={Tick01Icon} size={18} className="text-brand-700" />
                <span>GST & ITR Specialist</span>
              </div>
              <div className="flex items-center gap-2">
                <HugeiconsIcon icon={Tick01Icon} size={18} className="text-brand-700" />
                <span>Fast & Accurate Filing</span>
              </div>
              <div className="flex items-center gap-2">
                <HugeiconsIcon icon={Tick01Icon} size={18} className="text-brand-700" />
                <span>Pakur Local Presence</span>
              </div>
            </div>
          </div>

          {/* Right Hero Visual / Style Guide Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Main Illustrative Dashboard Card */}
              <div className="bg-surface rounded-2xl p-6 border border-border shadow-lg relative z-10 space-y-6">
                {/* Header with 7D | 30D | 90D Filter */}
                <div className="flex items-center justify-between pb-4 border-b border-border">
                  <div>
                    <span className="text-xs font-semibold text-muted uppercase tracking-wider block">
                      Compliance Overview
                    </span>
                    <span className="text-sm font-bold text-foreground">
                      Financial Year 2026–27
                    </span>
                  </div>

                  {/* Useful UI Elements: Time Range Pills */}
                  <div className="inline-flex p-1 bg-surface-muted rounded-full border border-border text-xs font-medium">
                    {(["7D", "30D", "90D"] as const).map((range) => (
                      <button
                        key={range}
                        onClick={() => setActiveRange(range)}
                        className={`px-3 py-1 rounded-full transition-colors ${
                          activeRange === range
                            ? "bg-brand-900 text-white shadow-xs"
                            : "text-muted hover:text-foreground"
                        }`}
                      >
                        {range}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Status Badges from Style Guide */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sage-100 text-brand-900 border border-sage-200">
                      <span>↑ +12.5%</span>
                      <span className="text-muted-light font-normal text-[11px]">Accuracy</span>
                    </span>
                  </div>

                  {/* Due in 5 days badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-sage-50 text-brand-900 border border-sage-200">
                    <HugeiconsIcon icon={Calendar01Icon} size={14} className="text-brand-800" />
                    <span>Due in 5 days</span>
                  </div>
                </div>

                {/* Progress bar from Style Guide */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-muted">GST & Tax Compliance Rate</span>
                    <span className="text-brand-900 font-bold">72%</span>
                  </div>
                  <div className="w-full h-2.5 bg-sage-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-brand-900 rounded-full transition-all duration-500"
                      style={{ width: "72%" }}
                    ></div>
                  </div>
                </div>

                {/* Area Graph line & fill from Style Guide (stroke-brand-700, fill-sage-200) */}
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
                      {/* Area Fill: fill-sage-200 */}
                      <path
                        d="M0 70 C 40 60, 70 68, 110 40 C 150 15, 190 45, 230 30 C 265 15, 285 20, 300 12 L 300 90 L 0 90 Z"
                        fill="url(#chartGradient)"
                      />
                      {/* Line: stroke-brand-700 */}
                      <path
                        d="M0 70 C 40 60, 70 68, 110 40 C 150 15, 190 45, 230 30 C 265 15, 285 20, 300 12"
                        fill="none"
                        className="stroke-brand-700"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                      {/* End point dot */}
                      <circle cx="300" cy="12" r="4.5" className="fill-brand-900" />
                      <circle cx="300" cy="12" r="8" className="stroke-brand-700" strokeWidth="1.5" fill="none" opacity="0.4" />
                    </svg>
                  </div>
                </div>

                {/* Illustrative Reminder Notice */}
                <div className="p-3.5 rounded-xl bg-sage-100 border border-sage-200 flex items-start gap-3 text-xs text-brand-950">
                  <HugeiconsIcon icon={Clock01Icon} size={18} className="text-brand-900 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block">Upcoming Deadline: GSTR-3B</span>
                    <span className="text-muted leading-tight block">
                      Verify input tax credits (ITC) and finalize purchase reconciliations before the 20th.
                    </span>
                  </div>
                </div>
              </div>

              {/* Background Accent Card Offset (Style Guide Accent Card with sage gradient) */}
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-sage-200 rounded-2xl -z-10 opacity-70 transform rotate-1"></div>
            </div>
          </div>
        </div>
      </section>

      {/* STYLE GUIDE ICONS SHOWCASE STRIP */}
      <section className="py-10 bg-surface border-y border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-md mx-auto mb-8">
            <span className="text-xs font-bold text-muted uppercase tracking-wider block">
              Comprehensive Domain Capabilities
            </span>
            <p className="text-sm text-foreground font-semibold mt-1">
              End-to-End Accounting, Tax & Corporate Solutions
            </p>
          </div>

          {/* 6 Icons matching the Style Guide Board exactly */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { label: "Taxation & GST", icon: Invoice01Icon, desc: "Returns & Filing" },
              { label: "Accounting", icon: Calculator01Icon, desc: "Books & Reports" },
              { label: "Registration", icon: Briefcase01Icon, desc: "Firms & NGOs" },
              { label: "Compliance", icon: JusticeScale01Icon, desc: "Legal & Labor" },
              { label: "Audit & Analysis", icon: Analytics01Icon, desc: "CMA & Bank Loan" },
              { label: "Deadlines", icon: Calendar01Icon, desc: "Timely Advice" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-surface-muted transition-colors group cursor-default"
              >
                <div className="w-14 h-14 rounded-2xl bg-sage-100 border border-sage-200 text-brand-900 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform group-hover:bg-brand-900 group-hover:text-white">
                  <HugeiconsIcon icon={item.icon} size={26} strokeWidth={1.8} />
                </div>
                <span className="text-sm font-semibold text-foreground block">
                  {item.label}
                </span>
                <span className="text-xs text-muted mt-0.5">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILED SERVICES SECTION */}
      <section id="services" className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header & Filter Tabs */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sage-100 text-brand-900">
                <span>Services Catalog</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                Specialized Services for Every Business Stage
              </h2>
              <p className="text-muted text-base max-w-xl">
                Structured solutions designed to keep your business legally secure, tax-optimized, and audit-ready.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: "all", label: "All Services" },
                { id: "tax", label: "Tax & GST" },
                { id: "accounting", label: "Accounting" },
                { id: "registration", label: "Registration" },
                { id: "licenses", label: "Licenses" },
                { id: "legal", label: "Compliance" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                    selectedCategory === tab.id
                      ? "bg-brand-900 text-white shadow-xs"
                      : "bg-surface border border-border text-muted hover:text-foreground hover:border-sage-300"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Service Cards Grid (Matching Card Styles from Style Guide) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => {
              const isHighlight = service.highlight;
              return (
                <div
                  key={service.title}
                  className={`rounded-2xl p-7 flex flex-col justify-between transition-all duration-200 border ${
                    isHighlight
                      ? "bg-sage-100 border-sage-300 shadow-md relative overflow-hidden"
                      : "bg-surface border-border hover:shadow-lg hover:border-sage-400"
                  }`}
                >
                  {/* Subtle top decoration for highlighted cards */}
                  {isHighlight && (
                    <div className="absolute top-0 right-0 -mr-8 -mt-8 w-28 h-28 rounded-full bg-sage-200/60 pointer-events-none"></div>
                  )}

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          isHighlight
                            ? "bg-brand-900 text-white"
                            : "bg-sage-100 text-brand-900"
                        }`}
                      >
                        <HugeiconsIcon icon={service.icon} size={24} strokeWidth={2} />
                      </div>
                      <span
                        className={`text-xs font-semibold px-3 py-1 rounded-full ${
                          isHighlight
                            ? "bg-white text-brand-900"
                            : "bg-surface-muted text-muted"
                        }`}
                      >
                        {service.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-foreground">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted mt-2 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <ul className="space-y-2.5 pt-3 border-t border-border/80">
                      {service.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-xs text-foreground font-medium"
                        >
                          <HugeiconsIcon
                            icon={Tick01Icon}
                            size={16}
                            className="text-brand-700 shrink-0 mt-0.5"
                            strokeWidth={2.5}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 mt-6 border-t border-border/60">
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className={`w-full py-2.5 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-colors ${
                        isHighlight
                          ? "bg-brand-900 hover:bg-brand-800 text-white"
                          : "border border-brand-900 text-brand-900 hover:bg-sage-100"
                      }`}
                    >
                      <span>Inquire for {service.title}</span>
                      <HugeiconsIcon icon={ArrowRight01Icon} size={14} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* COMPLIANCE & DEADLINE TIMELINE SECTION */}
      <section id="compliance" className="py-20 bg-surface border-y border-border px-4 sm:px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sage-100 text-brand-900">
              <HugeiconsIcon icon={Clock01Icon} size={15} />
              <span>Statutory Compliance Matrix</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Know Your Key Filing Deadlines
            </h2>
            <p className="text-muted text-sm sm:text-base">
              Select your business type below to check mandatory regulatory filing requirements and prevent interest or late fees.
            </p>
          </div>

          {/* Business Type Selector */}
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
                className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all ${
                  selectedEntity === entity.id
                    ? "bg-brand-900 text-white shadow-xs"
                    : "bg-background border border-border text-muted hover:text-foreground"
                }`}
              >
                {entity.label}
              </button>
            ))}
          </div>

          {/* Deadline Cards for Selected Entity */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-background rounded-2xl p-6 sm:p-8 border border-border space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border">
                <div>
                  <span className="text-xs font-semibold text-muted uppercase tracking-wider block">
                    Entity Profile
                  </span>
                  <h3 className="text-lg font-bold text-foreground">
                    {entityDeadlines[selectedEntity]?.title}
                  </h3>
                </div>
                <div className="inline-flex items-center gap-2 text-xs font-medium text-brand-900 bg-sage-100 px-3 py-1.5 rounded-full">
                  <HugeiconsIcon icon={Shield01Icon} size={16} />
                  <span>Mandatory Statutory Compliance</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {entityDeadlines[selectedEntity]?.filings.map((filing, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-surface border border-border flex items-start justify-between gap-3 shadow-2xs hover:border-sage-400 transition-colors"
                  >
                    <div className="space-y-1">
                      <span className="text-sm font-semibold text-foreground block">
                        {filing.name}
                      </span>
                      <span className="text-xs text-muted block flex items-center gap-1.5">
                        <HugeiconsIcon icon={Calendar01Icon} size={13} className="text-brand-800" />
                        {filing.due}
                      </span>
                    </div>
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-sage-50 text-brand-900 border border-sage-200 shrink-0">
                      {filing.status}
                    </span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-sage-100 border border-sage-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
                <span className="text-muted leading-relaxed">
                  Need assistance preparing your documentation or verifying your pending returns?
                </span>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-brand-900 hover:bg-brand-800 text-white font-medium px-4 py-2 rounded-xl transition-colors shrink-0"
                >
                  Schedule Filing Assistance
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT & PROPRIETOR SECTION */}
      <section id="about" className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sage-100 text-brand-900">
              <span>About the Firm</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Local Commitment, Professional Precision.
            </h2>
            <p className="text-muted text-sm sm:text-base leading-relaxed">
              Based in Pakur, Jharkhand, <strong>ASAD Accounting & Tax Solution</strong> provides reliable financial, taxation, and statutory advisory services to local entrepreneurs, traders, civil contractors, societies, and institutions.
            </p>
            <p className="text-muted text-sm sm:text-base leading-relaxed">
              Led by <strong>Md Asad Ansari</strong> (CMA Finalist), the practice emphasizes timely filings, transparent calculations, and continuous regulatory adherence.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-surface border border-border">
                <span className="text-2xl font-bold text-brand-900 block">Pakur</span>
                <span className="text-xs text-muted">Jharkhand Headquarters</span>
              </div>
              <div className="p-4 rounded-xl bg-surface border border-border">
                <span className="text-2xl font-bold text-brand-900 block">CMA Finalist</span>
                <span className="text-xs text-muted">Proprietor Qualification</span>
              </div>
            </div>
          </div>

          {/* Office & Verification Note Card */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 rounded-2xl bg-surface border border-border shadow-xs space-y-6">
              <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                <HugeiconsIcon icon={Location01Icon} size={20} className="text-brand-900" />
                <span>Office & Service Locations</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-4 rounded-xl bg-background border border-border space-y-2">
                  <span className="text-xs font-bold text-brand-900 uppercase tracking-wider block">
                    Bus Stand Location
                  </span>
                  <p className="text-xs text-muted leading-relaxed">
                    Shop No. 14, Bus Stand, Pakur, Jharkhand – 816107
                  </p>
                  <span className="inline-block text-[11px] text-muted-light">
                    As listed on business card
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-background border border-border space-y-2">
                  <span className="text-xs font-bold text-brand-900 uppercase tracking-wider block">
                    Harindanga Bazar Location
                  </span>
                  <p className="text-xs text-muted leading-relaxed">
                    Harindanga Bazar, Pakur, Jharkhand – 816107
                  </p>
                  <span className="inline-block text-[11px] text-muted-light">
                    Alternative office / service point
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-sage-50 border border-sage-200 text-xs text-brand-950 flex items-start gap-3">
                <HugeiconsIcon icon={CheckmarkCircle01Icon} size={18} className="text-brand-900 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  <strong>Location Note:</strong> For appointments and document drop-off, please call in advance to confirm current office desk availability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT & CONSULTATION BOOKING SECTION */}
      <section id="contact" className="py-20 bg-surface border-t border-border px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sage-100 text-brand-900">
                <HugeiconsIcon icon={Call02Icon} size={14} />
                <span>Get in Touch</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                Speak with Our Tax & Compliance Team.
              </h2>

              <p className="text-muted text-sm sm:text-base leading-relaxed">
                Whether you need a new GST registration, quick ITR filing, or complete accounting support, reach out directly.
              </p>

              <div className="space-y-4 pt-2">
                <a
                  href="tel:+918797124734"
                  className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border hover:border-brand-700 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-sage-100 text-brand-900 flex items-center justify-center group-hover:bg-brand-900 group-hover:text-white transition-colors">
                    <HugeiconsIcon icon={Call02Icon} size={20} />
                  </div>
                  <div>
                    <span className="text-xs text-muted block">Direct Phone</span>
                    <span className="text-sm font-semibold text-foreground">
                      +91 8797124734
                    </span>
                  </div>
                </a>

                <a
                  href="mailto:taxexpertthe@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border hover:border-brand-700 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-sage-100 text-brand-900 flex items-center justify-center group-hover:bg-brand-900 group-hover:text-white transition-colors">
                    <HugeiconsIcon icon={Mail01Icon} size={20} />
                  </div>
                  <div>
                    <span className="text-xs text-muted block">Primary Email</span>
                    <span className="text-sm font-semibold text-foreground">
                      taxexpertthe@gmail.com
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border">
                  <div className="w-10 h-10 rounded-lg bg-sage-100 text-brand-900 flex items-center justify-center">
                    <HugeiconsIcon icon={Location01Icon} size={20} />
                  </div>
                  <div>
                    <span className="text-xs text-muted block">Address</span>
                    <span className="text-sm font-semibold text-foreground">
                      Pakur, Jharkhand – 816107
                    </span>
                  </div>
                </div>
              </div>

              {/* WhatsApp direct chat link */}
              <div className="pt-2">
                <a
                  href="https://wa.me/918797124734"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-brand-900 hover:bg-brand-800 text-white font-medium px-6 py-3.5 rounded-full transition-colors inline-flex items-center justify-center gap-2 text-sm shadow-sm"
                >
                  <span>Chat on WhatsApp</span>
                  <HugeiconsIcon icon={ArrowUpRight01Icon} size={16} />
                </a>
              </div>
            </div>

            {/* Quick Consultation Form */}
            <div className="lg:col-span-7">
              <div className="bg-background rounded-2xl p-8 border border-border shadow-xs space-y-6">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-foreground">
                    Request a Consultation / Callback
                  </h3>
                  <p className="text-xs text-muted">
                    Submit your requirement and we will contact you with details and service scope.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-8 rounded-xl bg-sage-100 text-center space-y-3">
                    <HugeiconsIcon
                      icon={CheckmarkCircle01Icon}
                      size={40}
                      className="text-brand-900 mx-auto"
                    />
                    <h4 className="text-base font-bold text-brand-950">
                      Inquiry Received!
                    </h4>
                    <p className="text-xs text-brand-900">
                      Thank you. We will get back to you shortly at the provided number.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleConsultationSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-foreground">
                          Full Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Your name"
                          className="w-full px-4 py-2.5 rounded-xl bg-surface border border-border text-sm focus:outline-none focus:border-brand-700"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-foreground">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 9876543210"
                          className="w-full px-4 py-2.5 rounded-xl bg-surface border border-border text-sm focus:outline-none focus:border-brand-700"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-foreground">
                          Service Needed
                        </label>
                        <select className="w-full px-4 py-2.5 rounded-xl bg-surface border border-border text-sm focus:outline-none focus:border-brand-700">
                          <option>GST Registration / Return Filing</option>
                          <option>Income Tax Return (ITR)</option>
                          <option>Accounting & Bookkeeping</option>
                          <option>Company / LLP Incorporation</option>
                          <option>NGO / Trust 12A & 80G</option>
                          <option>MSME / FSSAI License</option>
                          <option>Other Legal Compliance</option>
                        </select>
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-foreground">
                          Business Entity
                        </label>
                        <select className="w-full px-4 py-2.5 rounded-xl bg-surface border border-border text-sm focus:outline-none focus:border-brand-700">
                          <option>Individual / Salaried</option>
                          <option>Sole Proprietorship</option>
                          <option>Partnership Firm / LLP</option>
                          <option>Private Limited Company</option>
                          <option>NGO / Trust / Society</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-foreground">
                        Message / Query Details
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Tell us about your requirement or deadlines..."
                        className="w-full px-4 py-2.5 rounded-xl bg-surface border border-border text-sm focus:outline-none focus:border-brand-700 resize-none"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-brand-900 hover:bg-brand-800 text-white font-medium py-3 rounded-full transition-colors text-sm shadow-xs flex items-center justify-center gap-2"
                    >
                      <span>Send Consultation Request</span>
                      <HugeiconsIcon icon={ArrowRight01Icon} size={16} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-brand-950 text-sage-300 py-12 px-4 sm:px-6 border-t border-brand-900 text-xs">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-brand-900/60">
            <div className="flex items-center gap-3">
              <AsadLogo className="w-9 h-9" />
              <div>
                <span className="text-base font-bold text-white block">
                  ASAD Accounting & Tax Solution
                </span>
                <span className="text-sage-400 text-xs block">
                  Pakur, Jharkhand – 816107
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-6 text-sage-300">
              <a href="#services" className="hover:text-white transition-colors">
                Services
              </a>
              <a href="#compliance" className="hover:text-white transition-colors">
                Compliance Matrix
              </a>
              <a href="#about" className="hover:text-white transition-colors">
                About Firm
              </a>
              <a href="#contact" className="hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Legal Disclaimer as advised in info.md */}
          <div className="text-[11px] text-sage-400/80 leading-relaxed max-w-4xl">
            <p>
              <strong>Disclaimer:</strong> Service descriptions, categories, and regulatory dates on this website are organized for informational guidance. Exact engagement scope, statutory eligibility, pricing, and document requirements are confirmed directly with the proprietor, Md Asad Ansari (CMA Finalist), upon consultation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-brand-900/40 text-sage-400">
            <span>
              © 2026 ASAD Accounting & Tax Solution. All rights reserved.
            </span>
            <span>
              Crafted with Next.js, Tailwind CSS & Hugeicons
            </span>
          </div>
        </div>
      </footer>

      {/* CONSULTATION MODAL DIALOG */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-surface border border-border rounded-2xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-muted hover:text-foreground text-sm p-1 rounded-lg"
            >
              ✕
            </button>

            <div className="space-y-1">
              <span className="text-xs font-semibold text-brand-900 bg-sage-100 px-3 py-1 rounded-full inline-block">
                Direct Appointment
              </span>
              <h3 className="text-xl font-bold text-foreground">
                Schedule a Consultation
              </h3>
              <p className="text-xs text-muted">
                Discuss your tax filing, business registration, or accounting requirement with Md Asad Ansari.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-xl bg-sage-100 text-center space-y-3">
                <HugeiconsIcon
                  icon={CheckmarkCircle01Icon}
                  size={40}
                  className="text-brand-900 mx-auto"
                />
                <h4 className="text-base font-bold text-brand-950">
                  Request Confirmed!
                </h4>
                <p className="text-xs text-brand-900">
                  We will call you at your preferred time.
                </p>
              </div>
            ) : (
              <form onSubmit={handleConsultationSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-semibold text-foreground block mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full px-4 py-2.5 rounded-xl bg-background border border-border text-sm focus:outline-none focus:border-brand-700"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-foreground block mb-1">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 8797124734"
                    className="w-full px-4 py-2.5 rounded-xl bg-background border border-border text-sm focus:outline-none focus:border-brand-700"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-foreground block mb-1">
                    Service Required
                  </label>
                  <select className="w-full px-4 py-2.5 rounded-xl bg-background border border-border text-sm focus:outline-none focus:border-brand-700">
                    <option>GST Return Filing & Reconciliations</option>
                    <option>Income Tax Return (ITR)</option>
                    <option>Company / Firm Registration</option>
                    <option>Accounting & Balance Sheet</option>
                    <option>MSME / FSSAI / Digital Signature</option>
                    <option>Other Compliance</option>
                  </select>
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="flex-1 py-2.5 rounded-full border border-border text-xs font-semibold text-muted hover:text-foreground"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-brand-900 hover:bg-brand-800 text-white py-2.5 rounded-full text-xs font-semibold transition-colors"
                  >
                    Confirm Callback
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
