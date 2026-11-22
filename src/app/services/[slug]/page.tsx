import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Tick01Icon,
  ArrowRight01Icon,
  Call02Icon,
} from "@hugeicons/core-free-icons";
import { Container } from "@/components/layout/container";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import {
  getAllServices,
  getServiceBySlug,
  getCategoryById,
} from "@/features/services/utils/get-service";
import { business } from "@/config/business";

export async function generateStaticParams() {
  const services = getAllServices();
  return services.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} — ${business.name}`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const category = getCategoryById(service.category);

  return (
    <main className="py-16">
      <Container className="space-y-12">
        {/* Breadcrumb navigation */}
        <nav aria-label="Breadcrumb" className="text-xs text-muted flex items-center gap-2">
          <Link href="/" className="hover:text-foreground">
            Home
          </Link>
          <span>/</span>
          <Link href="/services" className="hover:text-foreground">
            Services
          </Link>
          <span>/</span>
          <span className="text-foreground font-semibold">{service.title}</span>
        </nav>

        {/* Header */}
        <div className="space-y-4 max-w-3xl">
          <span className="text-xs font-semibold text-brand-900 block">
            {category?.name || "Professional Services"}
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
            {service.title}
          </h1>
          <p className="text-lg text-muted leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Content columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-10">
            {/* Benefits */}
            {service.benefits && service.benefits.length > 0 && (
              <div className="p-8 rounded-2xl bg-surface border border-border space-y-4">
                <h2 className="text-xl font-bold text-foreground">
                  Key Advantages & Scope
                </h2>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm text-foreground font-medium"
                    >
                      <HugeiconsIcon
                        icon={Tick01Icon}
                        size={18}
                        className="text-brand-700 shrink-0 mt-0.5"
                      />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Required Documents */}
            {service.documents && service.documents.length > 0 && (
              <div className="p-8 rounded-2xl bg-surface border border-border space-y-4">
                <h2 className="text-xl font-bold text-foreground">
                  Required Documents Checklist
                </h2>
                <ul className="space-y-2.5">
                  {service.documents.map((doc, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-muted flex items-start gap-2.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-700 mt-2 shrink-0"></span>
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Service FAQs */}
            {service.faqs && service.faqs.length > 0 && (
              <div className="p-8 rounded-2xl bg-surface border border-border space-y-4">
                <h2 className="text-xl font-bold text-foreground">
                  Service FAQs
                </h2>
                <div className="space-y-4">
                  {service.faqs.map((faq, idx) => (
                    <div key={idx} className="space-y-1">
                      <h3 className="text-sm font-bold text-foreground">
                        {faq.question}
                      </h3>
                      <p className="text-xs text-muted leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar CTA */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-8 rounded-2xl bg-surface border border-border space-y-6 sticky top-28">
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-foreground">
                  Inquire for {service.title}
                </h3>
                <p className="text-xs text-muted leading-relaxed">
                  Connect directly with {business.proprietor} ({business.qualification}) to start your filing or registration.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <a
                  href={`tel:${business.phone}`}
                  className="w-full bg-surface-muted hover:bg-sage-100 text-foreground border border-border font-medium px-4 py-3 rounded-xl transition-colors flex items-center justify-center gap-2 text-xs"
                >
                  <HugeiconsIcon icon={Call02Icon} size={16} />
                  <span>Call {business.displayPhone}</span>
                </a>

                <WhatsAppButton className="w-full text-xs" text="Chat on WhatsApp" />
              </div>

              <div className="pt-4 border-t border-border text-center">
                <Link
                  href="/contact"
                  className="text-xs text-brand-900 hover:text-brand-800 font-semibold inline-flex items-center gap-1"
                >
                  <span>Book in-office consultation</span>
                  <HugeiconsIcon icon={ArrowRight01Icon} size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
