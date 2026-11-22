"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Call02Icon,
  Menu01Icon,
  Cancel01Icon,
  WhatsappIcon,
} from "@hugeicons/core-free-icons";
import { business } from "@/config/business";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { AsadLogo } from "./logo";
import { Container } from "./container";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

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

  const navLinks = [
    { title: "Home", href: "/" },
    { title: "Services", href: "/services" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-surface/90 backdrop-blur-md border-b border-border/80 transition-colors">
      <Container className="h-20 flex items-center justify-between gap-4">
        {/* Left: Brand Identity */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <AsadLogo className="w-10 h-10 transition-transform group-hover:scale-105" />
          <div>
            <span className="text-xl font-bold tracking-tight text-foreground block leading-tight">
              ASAD
            </span>
            <span className="text-xs text-muted font-medium block tracking-wide">
              Accounting & Tax Solution
            </span>
          </div>
        </Link>

        {/* Center: Clean Navigation Links with Active State */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-8 text-sm font-medium"
        >
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-1 transition-colors ${
                  isActive
                    ? "text-brand-900 font-semibold"
                    : "text-foreground hover:text-brand-900"
                }`}
              >
                <span>{link.title}</span>
                {isActive && (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-800 rounded-full"
                    aria-hidden="true"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right: Phone CTA Button (matching reference image) */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={`tel:${business.phone}`}
            className="bg-brand-950 hover:bg-brand-900 text-white font-medium px-5 py-2.5 rounded-full inline-flex items-center gap-2 text-sm shadow-sm transition-colors group"
            title="Call ASAD Accounting"
          >
            <HugeiconsIcon
              icon={Call02Icon}
              size={16}
              className="group-hover:scale-110 transition-transform"
            />
            <span>{business.displayPhone}</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-surface-muted transition-colors cursor-pointer"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            suppressHydrationWarning
          >
            <HugeiconsIcon
              icon={mobileMenuOpen ? Cancel01Icon : Menu01Icon}
              size={20}
            />
          </button>
        </div>
      </Container>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-surface px-4 py-6 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="max-w-md mx-auto space-y-5">
            <div className="space-y-1">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname?.startsWith(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                      isActive
                        ? "bg-sage-100 text-brand-900"
                        : "text-foreground hover:bg-sage-50"
                    }`}
                  >
                    {link.title}
                  </Link>
                );
              })}
            </div>

            {/* Direct Contact Buttons */}
            <div className="pt-4 border-t border-border space-y-2.5">
              <a
                href={`tel:${business.phone}`}
                className="w-full bg-brand-950 text-white font-medium py-3 rounded-xl transition-colors text-center flex items-center justify-center gap-2 text-sm"
              >
                <HugeiconsIcon icon={Call02Icon} size={16} />
                <span>Call {business.displayPhone}</span>
              </a>

              <a
                href={getWhatsAppUrl(business.phone)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full border border-border text-foreground font-medium py-3 rounded-xl transition-colors text-center flex items-center justify-center gap-2 text-sm hover:bg-surface-muted"
              >
                <HugeiconsIcon
                  icon={WhatsappIcon}
                  size={16}
                  className="text-[#25D366]"
                />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
