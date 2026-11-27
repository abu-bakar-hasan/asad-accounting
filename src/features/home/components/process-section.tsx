import { HugeiconsIcon } from "@hugeicons/react";
import { Message01Icon, File01Icon, CheckmarkCircle01Icon, SentIcon } from "@hugeicons/core-free-icons";
import { Container } from "@/components/layout/container";

import { TaxCalendarCard } from "@/features/finance-widgets/components/tax-calendar-card";
import styles from "./process-section.module.css";

const steps = [
  { step: "01", title: "Let's understand your business", description: "Share what you need. We review your documents and explain the next steps.", icon: Message01Icon },
  { step: "02", title: "We prepare the details", description: "Your accounts, calculations and documents, checked and prepared for filing.", icon: File01Icon },
  { step: "03", title: "You review. You approve.", description: "We walk you through the details. Nothing is submitted without your approval.", icon: CheckmarkCircle01Icon },
  { step: "04", title: "Filed. Confirmed. Delivered.", description: "We submit your filing and share the acknowledgement or certificate with you.", icon: SentIcon },
];

export function ProcessSection() {
  return (
    <section aria-labelledby="process-heading" className="bg-background py-16 sm:py-24">
      <Container>
        <div className="rounded-[28px] bg-surface px-4 py-12 sm:rounded-[40px] sm:px-10 sm:py-20 lg:px-16">
          <div className="mx-auto max-w-xl text-center">
            <h2 id="process-heading" className="text-4xl font-semibold tracking-[-0.045em] text-foreground sm:text-5xl">How we work</h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted sm:text-base">From the first conversation to the final filing.<br className="hidden sm:block" /> A clear process, with you at every step.</p>
          </div>

          <ol className={styles.timeline}>
            {steps.map((item, index) => (
              <li key={item.step} className={`${styles.step} ${index === 0 ? styles.highlight : ""}`}>
                <div className={styles.visual} aria-hidden="true">
                  <div className={styles.icon}><HugeiconsIcon icon={item.icon} size={28} strokeWidth={1.5} /></div>
                  <span className={styles.number}>{item.step}</span>
                </div>
                <span className={styles.node} aria-hidden="true" />
                <div className={styles.copy}>
                  <h3 className="text-lg font-semibold leading-snug tracking-tight text-foreground sm:text-xl">{item.title}</h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-16 space-y-8 sm:mt-24">

          <TaxCalendarCard />
        </div>
      </Container>
    </section>
  );
}

