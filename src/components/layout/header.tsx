"use client";

import { useState, useEffect, useRef } from "react";
import type { CSSProperties } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HugeiconsIcon } from "@hugeicons/react";
import { Call02Icon, Menu01Icon, Cancel01Icon } from "@hugeicons/core-free-icons";
import { business } from "@/config/business";
import { AsadLogo } from "./logo";
import { Container } from "./container";
import styles from "./header.module.css";

const navLinks = [
  { title: "Home", href: "/" },
  { title: "Services", href: "/services" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const header = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  const menu = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    menu.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    const desktop = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => { if (desktop.matches) setMobileMenuOpen(false); };
    desktop.addEventListener("change", closeOnDesktop);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
        toggle.current?.focus();
      }
      if (event.key !== "Tab") return;
      const focusable = Array.from(header.current?.querySelectorAll<HTMLElement>("a[href], button") ?? []).filter(element => element.getClientRects().length > 0);
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault(); last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault(); first?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      desktop.removeEventListener("change", closeOnDesktop);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileMenuOpen]);

  const isActive = (href: string) => href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      ref={header}
      role={mobileMenuOpen ? "dialog" : undefined}
      aria-modal={mobileMenuOpen ? true : undefined}
      aria-label={mobileMenuOpen ? "Site navigation" : undefined}
      className={`pointer-events-none sticky top-0 z-50 flex h-20 items-center sm:h-[88px] lg:block lg:h-auto lg:py-5 ${mobileMenuOpen ? "bg-background" : ""}`}
    >
      <Container className="relative flex w-full items-center justify-between gap-3 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-6">
        <Link href="/" onClick={() => setMobileMenuOpen(false)} className="pointer-events-auto flex w-fit items-center gap-2 sm:gap-3 group shrink-0 rounded-full bg-background/90 py-1 pr-3 backdrop-blur-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-800">
          <AsadLogo className="w-10 h-10 transition-transform group-hover:scale-105" />
          <div>
            <span className="text-xl font-bold tracking-tight text-foreground block leading-tight">ASAD</span>
            <span className="hidden lg:block text-xs text-muted font-medium tracking-wide">Accounting & Tax Solution</span>
          </div>
        </Link>

        <nav aria-label="Main navigation" className="pointer-events-auto hidden lg:flex items-center gap-1 rounded-full border border-border bg-surface/95 p-1.5 text-sm font-medium shadow-[0_4px_20px_rgba(16,45,32,0.04)] backdrop-blur-xl">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} aria-current={isActive(link.href) ? "page" : undefined} className={`rounded-full px-5 py-2.5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-800 ${isActive(link.href) ? "bg-sage-100 text-brand-900 font-semibold" : "text-muted hover:bg-sage-50 hover:text-brand-900"}`}>
              {link.title}
            </Link>
          ))}
        </nav>

        <div className="pointer-events-auto flex items-center justify-self-end shrink-0">
          <a href={`tel:${business.phone}`} className="hidden lg:inline-flex bg-brand-950 hover:bg-brand-900 text-white font-medium h-11 px-5 rounded-full items-center justify-center gap-2 text-sm shadow-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-800" aria-label={`Call ASAD Accounting at ${business.displayPhone}`}>
            <HugeiconsIcon icon={Call02Icon} size={16} />
            <span>{business.displayPhone}</span>
          </a>
          <button ref={toggle} type="button" onClick={() => setMobileMenuOpen(open => !open)} className="lg:hidden w-11 h-11 flex items-center justify-center text-foreground cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-800" aria-label={mobileMenuOpen ? "Close menu" : "Open menu"} aria-expanded={mobileMenuOpen} aria-controls="mobile-navigation">
            <HugeiconsIcon icon={mobileMenuOpen ? Cancel01Icon : Menu01Icon} size={26} />
          </button>
        </div>
      </Container>

      {mobileMenuOpen && (
        <nav ref={menu} id="mobile-navigation" aria-label="Mobile and tablet navigation" className={`${styles.panel} pointer-events-auto fixed inset-x-0 top-20 h-[calc(100dvh-80px)] sm:top-[88px] sm:h-[calc(100dvh-88px)] lg:hidden overflow-y-auto overscroll-contain bg-background pb-[max(2rem,env(safe-area-inset-bottom))]`}>
          <Container className="flex min-h-full flex-col justify-center py-10 sm:py-14">
            <ul className="flex flex-col gap-5 sm:gap-7">
              {navLinks.map((link, index) => (
                <li key={link.href} className={styles.item} style={{ "--link-index": index } as CSSProperties}>
                  <Link href={link.href} onClick={() => setMobileMenuOpen(false)} aria-current={isActive(link.href) ? "page" : undefined} className={`inline-block py-2 text-[clamp(2.5rem,7vw,4.5rem)] leading-[1.15] font-semibold tracking-tight transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-800 ${isActive(link.href) ? "text-brand-700" : "text-foreground hover:text-brand-700"}`}>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </nav>
      )}
    </header>
  );
}
