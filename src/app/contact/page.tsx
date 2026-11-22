import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { ContactSection } from "@/features/home/components/contact-section";
import { business } from "@/config/business";

export const metadata: Metadata = {
  title: `Contact Us — ${business.name}`,
  description: `Contact ${business.name} in Pakur, Jharkhand. Call ${business.displayPhone} or visit our Bus Stand / Harindanga Bazar offices.`,
};

export default function ContactPage() {
  return (
    <main className="py-12">
      <Container className="space-y-6">
        <ContactSection />
      </Container>
    </main>
  );
}
