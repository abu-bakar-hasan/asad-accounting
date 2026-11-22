import type { Metadata } from "next";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { CheckmarkCircle01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { business } from "@/config/business";

export const metadata: Metadata = {
  title: `About Us — ${business.name}`,
  description: `Learn about ${business.name} in Pakur, Jharkhand, led by ${business.proprietor} (${business.qualification}).`,
};

export default function AboutPage() {
  const credentials = [
    "CMA Finalist with extensive hands-on taxation & corporate reporting background",
    "Comprehensive domain experience spanning GST, Income Tax, ROC, and MSME frameworks",
    "Dedicated local client assistance in Pakur with verified office locations",
    "Transparent documentation and proactive deadline alerts to safeguard clients against fines",
  ];

  return (
    <main className="py-16 space-y-16">
      <Container className="space-y-12">
        <SectionHeading
          title="About ASAD Accounting & Tax Solution"
          description={`Providing reliable financial, taxation, and statutory advisory services to local entrepreneurs, traders, civil contractors, societies, and institutions across Pakur, Jharkhand.`}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="p-8 rounded-2xl bg-surface border border-border space-y-4">
            <h3 className="text-xl font-bold text-foreground">
              Proprietor Profile
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              <strong>{business.proprietor}</strong> ({business.qualification}) leads the firm with a strong grounding in cost and management accounting, corporate taxation, and statutory compliance.
            </p>
            <p className="text-sm text-muted leading-relaxed">
              The practice was established to give local businesses in Pakur access to structured, professional-grade financial advisory and statutory filings without having to navigate complicated government portals on their own.
            </p>
            <div className="pt-4 border-t border-border">
              <span className="text-xs text-muted block">Direct Contact:</span>
              <span className="text-sm font-semibold text-brand-900 block mt-1">
                {business.displayPhone} • {business.email}
              </span>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-surface border border-border space-y-4">
            <h3 className="text-xl font-bold text-foreground">
              Core Principles & Standards
            </h3>
            <ul className="space-y-3">
              {credentials.map((cred, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-muted">
                  <HugeiconsIcon
                    icon={CheckmarkCircle01Icon}
                    size={18}
                    className="text-brand-700 shrink-0 mt-0.5"
                  />
                  <span>{cred}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Office locations */}
        <div className="p-8 rounded-2xl bg-surface border border-border space-y-6">
          <h3 className="text-xl font-bold text-foreground">
            Pakur Office Locations
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-background border border-border space-y-2">
              <span className="text-sm font-bold text-foreground block">
                Bus Stand Office
              </span>
              <p className="text-xs text-muted leading-relaxed">
                {business.address.primary}
              </p>
              <span className="text-[11px] text-muted-light block">
                Primary office on business card
              </span>
            </div>

            <div className="p-6 rounded-xl bg-background border border-border space-y-2">
              <span className="text-sm font-bold text-foreground block">
                Harindanga Bazar Office
              </span>
              <p className="text-xs text-muted leading-relaxed">
                {business.address.alternative}
              </p>
              <span className="text-[11px] text-muted-light block">
                Alternative service location
              </span>
            </div>
          </div>
        </div>

        <div className="text-center pt-4">
          <Link
            href="/contact"
            className="bg-brand-900 hover:bg-brand-800 text-white font-medium px-6 py-3.5 rounded-xl transition-colors inline-flex items-center gap-2 text-sm"
          >
            <span>Book an In-Person Consultation</span>
            <HugeiconsIcon icon={ArrowRight01Icon} size={16} />
          </Link>
        </div>
      </Container>
    </main>
  );
}
