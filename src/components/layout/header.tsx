import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Call02Icon,
  Mail01Icon,
  Calendar01Icon,
  ArrowRight01Icon,
} from "@hugeicons/core-free-icons";
import { business } from "@/config/business";
import { navigationConfig } from "@/config/navigation";
import { AsadLogo } from "./logo";
import { Container } from "./container";

export function Header() {
  return (
    <>
      {/* Top Advisory Bar */}
      <aside
        aria-label="Quick contact"
        className="bg-brand-950 text-sage-200 text-xs py-2.5 px-4 border-b border-brand-900"
      >
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span>
              {business.name} • {business.address.city}, {business.address.state}
            </span>
            <span className="hidden md:inline text-sage-400">|</span>
            <span className="hidden md:inline text-sage-300">
              {business.proprietor} ({business.qualification})
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${business.phone}`}
              className="hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <HugeiconsIcon icon={Call02Icon} size={14} />
              <span>{business.displayPhone}</span>
            </a>
            <span className="text-brand-800">•</span>
            <a
              href={`mailto:${business.email}`}
              className="hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <HugeiconsIcon icon={Mail01Icon} size={14} />
              <span>{business.email}</span>
            </a>
          </div>
        </div>
      </aside>

      {/* Main Navigation Header */}
      <header className="sticky top-0 z-40 bg-surface/90 backdrop-blur-md border-b border-border">
        <Container className="h-20 flex items-center justify-between">
          {/* Brand Identity */}
          <Link href="/" className="flex items-center gap-3 group">
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

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-muted">
            {navigationConfig.mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-foreground transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* CTA Actions */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-brand-800 px-3 py-2 rounded-xl transition-colors"
            >
              <HugeiconsIcon icon={Calendar01Icon} size={18} strokeWidth={2} />
              <span className="hidden sm:inline">Book Consultation</span>
            </Link>

            <Link
              href="/services"
              className="bg-brand-900 hover:bg-brand-800 text-white text-sm font-medium px-5 py-2.5 rounded-xl transition-colors shadow-xs inline-flex items-center gap-2"
            >
              <span>Get Started</span>
              <HugeiconsIcon icon={ArrowRight01Icon} size={16} strokeWidth={2} />
            </Link>
          </div>
        </Container>
      </header>
    </>
  );
}
