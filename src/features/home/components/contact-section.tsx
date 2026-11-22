"use client";

import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Call02Icon,
  Mail01Icon,
  Location01Icon,
  CheckmarkCircle01Icon,
  ArrowRight01Icon,
} from "@hugeicons/core-free-icons";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { business } from "@/config/business";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Contact info column */}
        <div className="lg:col-span-5 space-y-6">
          <SectionHeading
            title="Speak with Our Tax & Compliance Team"
            description="Whether you need a new GST registration, quick ITR filing, or complete accounting support, reach out directly."
          />

          <div className="space-y-4 pt-2">
            <a
              href={`tel:${business.phone}`}
              className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-border hover:border-brand-700 transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-sage-100 text-brand-900 flex items-center justify-center group-hover:bg-brand-900 group-hover:text-white transition-colors">
                <HugeiconsIcon icon={Call02Icon} size={20} />
              </div>
              <div>
                <span className="text-xs text-muted block">Direct Phone</span>
                <span className="text-sm font-semibold text-foreground">
                  {business.displayPhone}
                </span>
              </div>
            </a>

            <a
              href={`mailto:${business.email}`}
              className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-border hover:border-brand-700 transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-sage-100 text-brand-900 flex items-center justify-center group-hover:bg-brand-900 group-hover:text-white transition-colors">
                <HugeiconsIcon icon={Mail01Icon} size={20} />
              </div>
              <div>
                <span className="text-xs text-muted block">Primary Email</span>
                <span className="text-sm font-semibold text-foreground">
                  {business.email}
                </span>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-border">
              <div className="w-10 h-10 rounded-lg bg-sage-100 text-brand-900 flex items-center justify-center">
                <HugeiconsIcon icon={Location01Icon} size={20} />
              </div>
              <div>
                <span className="text-xs text-muted block">Headquarters</span>
                <span className="text-sm font-semibold text-foreground">
                  {business.address.city}, {business.address.state} – {business.address.postalCode}
                </span>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <WhatsAppButton className="w-full" />
          </div>
        </div>

        {/* Form column */}
        <div className="lg:col-span-7">
          <div className="bg-surface rounded-2xl p-8 border border-border shadow-xs space-y-6">
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-foreground">
                Request a Consultation / Callback
              </h3>
              <p className="text-xs text-muted">
                Submit your requirement and we will contact you with details and service scope.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-xl bg-sage-100 text-center space-y-3">
                <HugeiconsIcon
                  icon={CheckmarkCircle01Icon}
                  size={40}
                  className="text-brand-900 mx-auto"
                />
                <h4 className="text-base font-bold text-brand-950">
                  Inquiry Received!
                </h4>
                <p className="text-xs text-brand-900">
                  Thank you. We will get back to you shortly at the provided number.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    suppressHydrationWarning
                    aria-label="Full Name"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm focus:outline-none focus:border-brand-700"
                  />
                  <input
                    type="tel"
                    required
                    suppressHydrationWarning
                    aria-label="Phone Number"
                    placeholder="Phone Number (+91)"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm focus:outline-none focus:border-brand-700"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <select
                    suppressHydrationWarning
                    aria-label="Service Needed"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm focus:outline-none focus:border-brand-700"
                  >
                    <option>GST Registration / Return Filing</option>
                    <option>Income Tax Return (ITR)</option>
                    <option>Accounting & Bookkeeping</option>
                    <option>Company / LLP Incorporation</option>
                    <option>NGO / Trust 12A & 80G</option>
                    <option>MSME / FSSAI License</option>
                    <option>Other Legal Compliance</option>
                  </select>

                  <select
                    suppressHydrationWarning
                    aria-label="Business Entity"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm focus:outline-none focus:border-brand-700"
                  >
                    <option>Individual / Salaried</option>
                    <option>Sole Proprietorship</option>
                    <option>Partnership Firm / LLP</option>
                    <option>Private Limited Company</option>
                    <option>NGO / Trust / Society</option>
                  </select>
                </div>

                <textarea
                  rows={3}
                  suppressHydrationWarning
                  aria-label="Message or Query Details"
                  placeholder="Tell us about your requirement or deadlines..."
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm focus:outline-none focus:border-brand-700 resize-none"
                ></textarea>

                <button
                  type="submit"
                  suppressHydrationWarning
                  className="w-full bg-brand-900 hover:bg-brand-800 text-white font-medium py-3.5 rounded-xl transition-colors text-sm shadow-xs flex items-center justify-center gap-2"
                >
                  <span>Send Consultation Request</span>
                  <HugeiconsIcon icon={ArrowRight01Icon} size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
