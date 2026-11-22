import {
  HeroSection,
  ServicesSection,
  AboutPreview,
  ProcessSection,
  FAQSection,
  ContactSection,
} from "@/features/home";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <AboutPreview />
      <ProcessSection />
      <FAQSection />
      <ContactSection />
    </main>
  );
}
