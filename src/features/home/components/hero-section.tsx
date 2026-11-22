import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowRight01Icon,
  Calendar01Icon,
  Tick01Icon,
} from "@hugeicons/core-free-icons";
import { Container } from "@/components/layout/container";
import { FinanceShowcase } from "@/features/finance-widgets/components/finance-showcase";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 px-4 sm:px-6">
      <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Hero Content */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.12]">
            Empowering Your Business with Financial Clarity & Total Compliance.
          </h1>

          <p className="text-lg text-muted max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Professional accounting, GST return filing, income tax returns (ITR), company incorporation, and licensing in Pakur, Jharkhand.
          </p>

          {/* Action Buttons (Style Guide rounded-xl, no pills) */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
            <Link
              href="/services"
              className="bg-brand-900 hover:bg-brand-800 text-white font-medium px-6 py-3.5 rounded-xl transition-colors shadow-sm inline-flex items-center gap-2"
            >
              <span>Get Started</span>
              <HugeiconsIcon icon={ArrowRight01Icon} size={18} strokeWidth={2} />
            </Link>

            <Link
              href="/services"
              className="border border-brand-900 text-brand-900 hover:bg-sage-100 font-medium px-6 py-3.5 rounded-xl transition-colors inline-flex items-center gap-2"
            >
              <span>Our Services</span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-foreground font-medium hover:text-brand-800 px-4 py-3.5 rounded-xl transition-colors"
            >
              <HugeiconsIcon icon={Calendar01Icon} size={18} strokeWidth={2} />
              <span>Book a Consultation</span>
            </Link>
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

        {/* Right Hero Visual Showcase */}
        <div className="lg:col-span-5">
          <FinanceShowcase />
        </div>
      </Container>
    </section>
  );
}
