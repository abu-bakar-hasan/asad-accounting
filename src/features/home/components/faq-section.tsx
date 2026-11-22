import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/shared/section-heading";

export function FAQSection() {
  const faqs = [
    {
      question: "Which documents are required for filing an Income Tax Return (ITR)?",
      answer:
        "For salaried individuals: Form 16, Aadhaar card, PAN card, and all bank statements for the financial year. For business owners and traders: sales register, purchase bills, bank statements, and investment proofs.",
    },
    {
      question: "When is GST registration mandatory in India?",
      answer:
        "GST registration is mandatory if your aggregate annual turnover exceeds ₹40 Lakhs for goods (₹20 Lakhs for services/special category states), or if you make interstate taxable sales or sell through e-commerce operators.",
    },
    {
      question: "What is a CMA Report and why is it needed by banks?",
      answer:
        "A Credit Monitoring Arrangement (CMA) report contains past financial performance and future projections (typically 3 to 5 years). Commercial banks evaluate it to sanction Cash Credit (CC) limits, overdrafts, and term loans.",
    },
    {
      question: "Can you assist with NGO registration and 12A/80G tax exemptions?",
      answer:
        "Yes, we assist with Society/Trust formation, NITI Aayog (Darpan) portal registration, and filing for 12A and 80G provisional and final registrations with the Income Tax Department.",
    },
    {
      question: "Do you offer online support or in-person visits in Pakur?",
      answer:
        "Both. Clients can visit our office locations in Pakur (Bus Stand / Harindanga Bazar) or securely share scanned documents over WhatsApp and email for fast digital processing.",
    },
  ];

  return (
    <section className="py-20 bg-surface border-y border-border">
      <Container className="space-y-12">
        <SectionHeading
          align="center"
          title="Frequently Asked Questions"
          description="Clear answers to common questions about taxation, accounting, and business registration."
        />

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-background border border-border space-y-2"
            >
              <h3 className="text-base font-bold text-foreground">
                {faq.question}
              </h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
