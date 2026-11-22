import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { TaxCalendarCard } from "@/features/finance-widgets/components/tax-calendar-card";

export function ProcessSection() {
  const steps = [
    {
      step: "01",
      title: "Consultation & Document Review",
      description: "Discuss your specific requirements and submit necessary KYC, invoices, or business details.",
    },
    {
      step: "02",
      title: "Preparation & Reconciliation",
      description: "We compute tax liabilities, reconcile purchases with GSTR-2B/AIS, and draft statutory filings.",
    },
    {
      step: "03",
      title: "Client Approval & Verification",
      description: "Review computations and approve draft returns before final government portal submission.",
    },
    {
      step: "04",
      title: "Filing & Acknowledgement",
      description: "Timely e-filing with immediate dispatch of official ITR-V, GSTR acknowledgement, or registration certificates.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <Container className="space-y-16">
        <div className="space-y-10">
          <SectionHeading
            align="center"
            title="How We Work With You"
            description="A clear, structured engagement process to ensure total accuracy and zero compliance lapses."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((item) => (
              <div
                key={item.step}
                className="p-6 rounded-2xl bg-surface border border-border space-y-3"
              >
                <span className="text-2xl font-bold text-brand-900 block font-mono">
                  {item.step}
                </span>
                <h3 className="text-base font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="text-xs text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Integrated Statutory Deadlines */}
        <div className="space-y-8 pt-8 border-t border-border">
          <SectionHeading
            align="center"
            title="Know Your Key Filing Deadlines"
            description="Select your business type below to check mandatory regulatory filing requirements and prevent interest or late fees."
          />
          <TaxCalendarCard />
        </div>
      </Container>
    </section>
  );
}
