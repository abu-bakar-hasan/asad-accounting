import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { Location01Icon, CheckmarkCircle01Icon } from "@hugeicons/core-free-icons";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { business } from "@/config/business";

export function AboutPreview() {
  return (
    <section className="py-20 bg-surface border-y border-border">
      <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 space-y-6">
          <SectionHeading
            title="Local Commitment, Professional Precision."
            description={`Based in Pakur, Jharkhand, ${business.name} provides reliable financial, taxation, and statutory advisory services to local entrepreneurs, traders, civil contractors, societies, and institutions.`}
          />
          <p className="text-muted text-sm sm:text-base leading-relaxed">
            Led by <strong>{business.proprietor}</strong> ({business.qualification}), the practice emphasizes timely filings, transparent calculations, and continuous regulatory adherence.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-background border border-border">
              <span className="text-2xl font-bold text-brand-900 block">Pakur</span>
              <span className="text-xs text-muted">Jharkhand Headquarters</span>
            </div>
            <div className="p-4 rounded-xl bg-background border border-border">
              <span className="text-2xl font-bold text-brand-900 block">
                {business.qualification}
              </span>
              <span className="text-xs text-muted">Proprietor Qualification</span>
            </div>
          </div>

          <div className="pt-2">
            <Link
              href="/about"
              className="text-xs font-semibold text-brand-900 hover:text-brand-800"
            >
              Read More About Firm & Credentials →
            </Link>
          </div>
        </div>

        {/* Office & Verification Note Card */}
        <div className="lg:col-span-7 space-y-6">
          <div className="p-8 rounded-2xl bg-background border border-border shadow-xs space-y-6">
            <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
              <HugeiconsIcon icon={Location01Icon} size={20} className="text-brand-900" />
              <span>Office & Service Locations</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-4 rounded-xl bg-surface border border-border space-y-2">
                <span className="text-sm font-bold text-foreground block">
                  Bus Stand Office
                </span>
                <p className="text-xs text-muted leading-relaxed">
                  {business.address.primary}
                </p>
                <span className="inline-block text-[11px] text-muted-light">
                  Business card location
                </span>
              </div>

              <div className="p-4 rounded-xl bg-surface border border-border space-y-2">
                <span className="text-sm font-bold text-foreground block">
                  Harindanga Bazar Office
                </span>
                <p className="text-xs text-muted leading-relaxed">
                  {business.address.alternative}
                </p>
                <span className="inline-block text-[11px] text-muted-light">
                  Service point location
                </span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-sage-50 border border-sage-200 text-xs text-brand-950 flex items-start gap-3">
              <HugeiconsIcon icon={CheckmarkCircle01Icon} size={18} className="text-brand-900 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                For appointments and document drop-off, please call in advance to confirm current office desk availability.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
