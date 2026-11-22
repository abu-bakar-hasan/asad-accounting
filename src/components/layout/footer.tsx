import Link from "next/link";
import { business } from "@/config/business";
import { navigationConfig } from "@/config/navigation";
import { AsadLogo } from "./logo";
import { Container } from "./container";

export function Footer() {
  return (
    <footer className="bg-brand-950 text-sage-300 py-14 border-t border-brand-900 text-xs">
      <Container className="space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-brand-900/60">
          {/* Brand info */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <AsadLogo className="w-8 h-8" />
              <div>
                <span className="text-base font-bold text-white block">
                  {business.name}
                </span>
                <span className="text-sage-400 text-xs block">
                  {business.address.city}, {business.address.state}
                </span>
              </div>
            </div>
            <p className="text-sage-400/90 text-xs leading-relaxed">
              {business.tagline}. Local advisory and compliance services for individuals and enterprises.
            </p>
          </div>

          {/* Services Links */}
          <div className="space-y-3">
            <span className="text-xs font-bold text-white uppercase tracking-wider block">
              Services
            </span>
            <ul className="space-y-2">
              {navigationConfig.footerNav.services.map((item) => (
                <li key={`${item.href}-${item.title}`}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-3">
            <span className="text-xs font-bold text-white uppercase tracking-wider block">
              Company
            </span>
            <ul className="space-y-2">
              {navigationConfig.footerNav.company.map((item) => (
                <li key={`${item.href}-${item.title}`}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="space-y-3">
            <span className="text-xs font-bold text-white uppercase tracking-wider block">
              Office Locations
            </span>
            <div className="space-y-2 text-sage-400">
              <p>
                <strong className="text-white">Bus Stand:</strong><br />
                {business.address.primary}
              </p>
              <p>
                <strong className="text-white">Harindanga Bazar:</strong><br />
                {business.address.alternative}
              </p>
              <p className="pt-1">
                <a
                  href={`tel:${business.phone}`}
                  className="text-white hover:underline"
                >
                  {business.displayPhone}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="text-[11px] text-sage-400/80 leading-relaxed max-w-4xl">
          <p>{business.disclaimer}</p>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-brand-900/40 text-sage-400">
          <span>
            © 2026 {business.name}. All rights reserved.
          </span>
          <div className="flex gap-6">
            {navigationConfig.footerNav.legal.map((item) => (
              <Link
                key={`${item.href}-${item.title}`}
                href={item.href}
                className="hover:text-white transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
