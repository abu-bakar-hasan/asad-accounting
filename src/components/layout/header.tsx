"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowDown01Icon,
  Invoice01Icon,
  WhatsappIcon,
  Menu01Icon,
  Cancel01Icon,
  ArrowRight01Icon,
  Call02Icon,
  Location01Icon,
} from "@hugeicons/core-free-icons";
import { business } from "@/config/business";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { AsadLogo } from "./logo";
import { Container } from "./container";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  const servicesRef = useRef<HTMLDivElement>(null);
  const resourcesRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }
      if (
        resourcesRef.current &&
        !resourcesRef.current.contains(event.target as Node)
      ) {
        setResourcesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-surface/90 backdrop-blur-md border-b border-border/80 transition-colors">
      <Container className="h-16 sm:h-[68px] flex items-center justify-between gap-4">
        {/* Left: Brand Identity */}
        <Link href="/" className="flex items-center gap-2.5 group shrink-0">
          <AsadLogo className="w-8 h-8 transition-transform group-hover:scale-105" />
          <div className="flex items-baseline gap-1.5">
            <span className="text-lg font-bold tracking-tight text-foreground">
              ASAD
            </span>
            <span className="hidden sm:inline text-xs text-muted font-medium tracking-wide">
              Accounting
            </span>
          </div>
        </Link>

        {/* Center: Dual Floating Pill Capsules (HorizonX style) */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Capsule 1: Primary Navigation with Dropdowns */}
          <nav
            aria-label="Main Navigation"
            className="flex items-center gap-5 xl:gap-6 rounded-full border border-border/80 bg-surface/95 px-5 py-2 shadow-[0_1px_3px_rgba(0,0,0,0.02)] text-[13px] font-medium text-muted"
          >
            {/* Services with Dropdown */}
            <div
              ref={servicesRef}
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center gap-1 hover:text-foreground transition-colors cursor-pointer focus-visible:outline-none"
                aria-expanded={servicesOpen}
                suppressHydrationWarning
              >
                <span>Services</span>
                <HugeiconsIcon
                  icon={ArrowDown01Icon}
                  size={12}
                  className={`transition-transform duration-200 ${
                    servicesOpen ? "rotate-180 text-foreground" : "text-muted"
                  }`}
                />
              </button>

              {/* Services Dropdown Menu */}
              {servicesOpen && (
                <div className="absolute top-full left-0 pt-2 w-72 z-50">
                  <div className="bg-surface border border-border/90 rounded-2xl shadow-xl p-2 space-y-0.5 animate-in fade-in slide-in-from-top-1 duration-150">
                    <Link
                      href="/services/gst-registration"
                      onClick={() => setServicesOpen(false)}
                      className="flex flex-col px-3 py-2 rounded-xl text-left hover:bg-sage-50 transition-colors group"
                    >
                      <span className="text-sm font-semibold text-foreground group-hover:text-brand-900">
                        GST Registration & Filing
                      </span>
                      <span className="text-xs text-muted">
                        New GSTIN & monthly GSTR-1 / 3B
                      </span>
                    </Link>

                    <Link
                      href="/services/itr-filing"
                      onClick={() => setServicesOpen(false)}
                      className="flex flex-col px-3 py-2 rounded-xl text-left hover:bg-sage-50 transition-colors group"
                    >
                      <span className="text-sm font-semibold text-foreground group-hover:text-brand-900">
                        Income Tax Return (ITR)
                      </span>
                      <span className="text-xs text-muted">
                        Salaried, business & capital gains
                      </span>
                    </Link>

                    <Link
                      href="/services/accounting-bookkeeping"
                      onClick={() => setServicesOpen(false)}
                      className="flex flex-col px-3 py-2 rounded-xl text-left hover:bg-sage-50 transition-colors group"
                    >
                      <span className="text-sm font-semibold text-foreground group-hover:text-brand-900">
                        Accounting & Bookkeeping
                      </span>
                      <span className="text-xs text-muted">
                        Daily ledgers, tally & monthly reports
                      </span>
                    </Link>

                    <Link
                      href="/services/company-incorporation"
                      onClick={() => setServicesOpen(false)}
                      className="flex flex-col px-3 py-2 rounded-xl text-left hover:bg-sage-50 transition-colors group"
                    >
                      <span className="text-sm font-semibold text-foreground group-hover:text-brand-900">
                        Company & LLP Incorporation
                      </span>
                      <span className="text-xs text-muted">
                        Pvt Ltd, OPC & LLP registration
                      </span>
                    </Link>

                    <Link
                      href="/services/tender-filing"
                      onClick={() => setServicesOpen(false)}
                      className="flex flex-col px-3 py-2 rounded-xl text-left hover:bg-sage-50 transition-colors group"
                    >
                      <span className="text-sm font-semibold text-foreground group-hover:text-brand-900">
                        Tender Filing & DSC
                      </span>
                      <span className="text-xs text-muted">
                        E-procurement bids & digital signatures
                      </span>
                    </Link>

                    <div className="pt-1.5 border-t border-border mt-1">
                      <Link
                        href="/services"
                        onClick={() => setServicesOpen(false)}
                        className="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold text-brand-900 hover:bg-sage-100 transition-colors"
                      >
                        <span>View All 11 Services</span>
                        <HugeiconsIcon icon={ArrowRight01Icon} size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Direct Nav Links */}
            <Link
              href="/about"
              className="hover:text-foreground transition-colors"
            >
              About
            </Link>

            <Link
              href="/#process"
              className="hover:text-foreground transition-colors"
            >
              Process
            </Link>

            {/* Resources with Dropdown */}
            <div
              ref={resourcesRef}
              className="relative"
              onMouseEnter={() => setResourcesOpen(true)}
              onMouseLeave={() => setResourcesOpen(false)}
            >
              <button
                type="button"
                onClick={() => setResourcesOpen(!resourcesOpen)}
                className="flex items-center gap-1 hover:text-foreground transition-colors cursor-pointer focus-visible:outline-none"
                aria-expanded={resourcesOpen}
                suppressHydrationWarning
              >
                <span>Resources</span>
                <HugeiconsIcon
                  icon={ArrowDown01Icon}
                  size={12}
                  className={`transition-transform duration-200 ${
                    resourcesOpen ? "rotate-180 text-foreground" : "text-muted"
                  }`}
                />
              </button>

              {/* Resources Dropdown Menu */}
              {resourcesOpen && (
                <div className="absolute top-full left-0 pt-2 w-56 z-50">
                  <div className="bg-surface border border-border/90 rounded-2xl shadow-xl p-2 space-y-0.5 animate-in fade-in slide-in-from-top-1 duration-150">
                    <Link
                      href="/#faq"
                      onClick={() => setResourcesOpen(false)}
                      className="block px-3 py-2 rounded-xl text-sm font-medium text-foreground hover:bg-sage-50 hover:text-brand-900 transition-colors"
                    >
                      Frequently Asked Questions
                    </Link>
                    <Link
                      href="/services/balance-sheet-finalization"
                      onClick={() => setResourcesOpen(false)}
                      className="block px-3 py-2 rounded-xl text-sm font-medium text-foreground hover:bg-sage-50 hover:text-brand-900 transition-colors"
                    >
                      CMA Bank Reports
                    </Link>
                    <Link
                      href="/contact"
                      onClick={() => setResourcesOpen(false)}
                      className="block px-3 py-2 rounded-xl text-sm font-medium text-foreground hover:bg-sage-50 hover:text-brand-900 transition-colors"
                    >
                      Pakur Office & Map
                    </Link>
                    <Link
                      href="/terms"
                      onClick={() => setResourcesOpen(false)}
                      className="block px-3 py-2 rounded-xl text-sm font-medium text-foreground hover:bg-sage-50 hover:text-brand-900 transition-colors"
                    >
                      Compliance & Terms
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Capsule 2: Quick Direct Actions (MCP & Figma style) */}
          <div
            aria-label="Quick Links"
            className="flex items-center gap-3.5 rounded-full border border-border/80 bg-surface/95 px-4 py-2 shadow-[0_1px_3px_rgba(0,0,0,0.02)] text-[13px] font-medium text-foreground"
          >
            <Link
              href="/services/gst-registration"
              className="flex items-center gap-1.5 text-muted hover:text-brand-900 transition-colors group"
              title="GST & Taxation Services"
            >
              <HugeiconsIcon
                icon={Invoice01Icon}
                size={14}
                className="text-brand-700 group-hover:scale-110 transition-transform"
              />
              <span className="text-foreground">GST & Tax</span>
            </Link>

            <span className="w-px h-3.5 bg-border" aria-hidden="true" />

            <a
              href={getWhatsAppUrl(business.phone)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-muted hover:text-brand-900 transition-colors group"
              title="Chat with Md Asad Ansari on WhatsApp"
            >
              <HugeiconsIcon
                icon={WhatsappIcon}
                size={15}
                className="text-[#25D366] group-hover:scale-110 transition-transform"
              />
              <span className="text-foreground">WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Right: Text Link + Dark Solid Pill Button */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          <Link
            href="/contact"
            className="hidden sm:inline text-sm font-medium text-muted hover:text-foreground transition-colors"
          >
            Book Consultation
          </Link>

          <Link
            href="/services"
            className="bg-brand-950 hover:bg-brand-900 text-white text-sm font-medium px-5 py-2 rounded-full transition-colors shadow-xs inline-flex items-center gap-1.5"
          >
            <span>Get Started</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-9 h-9 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-surface-muted transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            suppressHydrationWarning
          >
            <HugeiconsIcon
              icon={mobileMenuOpen ? Cancel01Icon : Menu01Icon}
              size={18}
            />
          </button>
        </div>
      </Container>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-surface px-4 py-6 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="max-w-md mx-auto space-y-6">
            {/* Quick Action Badges on Mobile */}
            <div className="flex items-center justify-center gap-3 p-2 rounded-2xl bg-surface-muted border border-border text-xs font-semibold">
              <Link
                href="/services/gst-registration"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-1.5 text-brand-900 px-3 py-1.5 rounded-xl bg-white shadow-xs"
              >
                <HugeiconsIcon
                  icon={Invoice01Icon}
                  size={14}
                  className="text-brand-700"
                />
                <span>GST & Tax</span>
              </Link>
              <a
                href={getWhatsAppUrl(business.phone)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-brand-900 px-3 py-1.5 rounded-xl bg-white shadow-xs"
              >
                <HugeiconsIcon
                  icon={WhatsappIcon}
                  size={14}
                  className="text-[#25D366]"
                />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Navigation Links */}
            <div className="space-y-1">
              <Link
                href="/services"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-xl text-base font-semibold text-foreground hover:bg-sage-50 transition-colors"
              >
                Our Services
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-xl text-base font-semibold text-foreground hover:bg-sage-50 transition-colors"
              >
                About Firm & CMA Profile
              </Link>
              <Link
                href="/#process"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-xl text-base font-semibold text-foreground hover:bg-sage-50 transition-colors"
              >
                Our 4-Step Process
              </Link>
              <Link
                href="/#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-xl text-base font-semibold text-foreground hover:bg-sage-50 transition-colors"
              >
                Frequently Asked Questions
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-xl text-base font-semibold text-foreground hover:bg-sage-50 transition-colors"
              >
                Contact & Office Details
              </Link>
            </div>

            {/* Quick Contact Info */}
            <div className="pt-4 border-t border-border space-y-2 text-xs text-muted">
              <div className="flex items-center gap-2">
                <HugeiconsIcon icon={Call02Icon} size={15} />
                <a
                  href={`tel:${business.phone}`}
                  className="hover:text-foreground font-medium text-foreground"
                >
                  {business.displayPhone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <HugeiconsIcon icon={Location01Icon} size={15} />
                <span>
                  {business.address.city}, {business.address.state} —{" "}
                  {business.proprietor} ({business.qualification})
                </span>
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-2">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full bg-brand-950 text-white font-medium py-3 rounded-xl transition-colors text-center block text-sm"
              >
                Book a Free Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
