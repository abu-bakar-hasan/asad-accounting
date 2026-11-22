import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { business } from "@/config/business";

export const metadata: Metadata = {
  title: `Privacy Policy — ${business.name}`,
  description: `Privacy Policy for ${business.name}.`,
};

export default function PrivacyPolicyPage() {
  return (
    <main className="py-16">
      <Container className="space-y-8 max-w-3xl">
        <SectionHeading
          title="Privacy Policy"
          description="Last updated: 2026"
        />

        <div className="prose prose-zinc text-muted text-sm leading-relaxed space-y-6">
          <p>
            At {business.name}, we recognize the critical sensitivity of financial, identity, and taxation data. This policy outlines how client documentation is collected, handled, and protected.
          </p>

          <h3 className="text-base font-bold text-foreground">1. Information We Collect</h3>
          <p>
            To perform accounting, GST return filing, income tax filings, and company incorporation services, we may collect documents such as PAN cards, Aadhaar cards, bank statements, sales/purchase registers, electricity bills, and digital signatures.
          </p>

          <h3 className="text-base font-bold text-foreground">2. Use of Information</h3>
          <p>
            Collected information is exclusively utilized for preparing computations, filing statutory returns with authorized government portals (e.g., GST Portal, Income Tax e-Filing, MCA21), and communicating with you regarding your service status.
          </p>

          <h3 className="text-base font-bold text-foreground">3. Confidentiality & Security</h3>
          <p>
            We do not share, sell, or rent client documents to third parties. Access to client documents is strictly restricted to authorized staff preparing your filings.
          </p>

          <h3 className="text-base font-bold text-foreground">4. Contact Us</h3>
          <p>
            If you have questions regarding data privacy or wish to update your records, contact us at {business.email} or call {business.displayPhone}.
          </p>
        </div>
      </Container>
    </main>
  );
}
