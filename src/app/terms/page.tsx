import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { business } from "@/config/business";

export const metadata: Metadata = {
  title: `Terms & Conditions — ${business.name}`,
  description: `Terms and Conditions for professional advisory and filing services with ${business.name}.`,
};

export default function TermsPage() {
  return (
    <main className="py-16">
      <Container className="space-y-8 max-w-3xl">
        <SectionHeading
          title="Terms & Conditions"
          description="Last updated: 2026"
        />

        <div className="prose prose-zinc text-muted text-sm leading-relaxed space-y-6">
          <p>
            By engaging {business.name} for accounting, taxation, company registration, or licensing services, you agree to the following terms and guidelines.
          </p>

          <h3 className="text-base font-bold text-foreground">1. Client Responsibilities</h3>
          <p>
            Clients are responsible for providing authentic, complete, and accurate financial and identity documentation in a timely manner. The firm relies on client-provided records for all tax and statutory filings.
          </p>

          <h3 className="text-base font-bold text-foreground">2. Statutory Deadlines & Penalties</h3>
          <p>
            While we make every effort to notify clients of upcoming deadlines, clients must provide documentation with adequate lead time (at least 3 to 5 business days prior to statutory due dates) to avoid late filing fees or portal traffic delays.
          </p>

          <h3 className="text-base font-bold text-foreground">3. Professional Scope</h3>
          <p>
            The services provided are professional advisory and filing assistance. Final acceptance, approval, or issuance of licenses, refunds, and registrations rests with the respective government regulatory authorities (CBDT, CBIC, MCA, etc.).
          </p>

          <h3 className="text-base font-bold text-foreground">4. Contact</h3>
          <p>
            For any clarifications regarding an engagement, please write to {business.email}.
          </p>
        </div>
      </Container>
    </main>
  );
}
