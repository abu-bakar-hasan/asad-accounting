import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { business } from "@/config/business";

export function AboutPreview() {
  return (
    <section aria-labelledby="about-preview-heading" className="bg-surface py-16 sm:py-24 lg:py-28">
      <Container className="grid items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-24">
        <div className="relative mx-auto w-full max-w-[480px] overflow-hidden rounded-2xl bg-sage-100 md:mx-0">
          <Image
            src="/images/asad-owner.webp"
            alt={`${business.proprietor}, proprietor of ASAD Accounting & Tax Solution`}
            width={1000}
            height={1250}
            sizes="(max-width: 767px) calc(100vw - 32px), (max-width: 1023px) 45vw, 480px"
            className="aspect-[4/5] w-full object-cover"
          />
        </div>

        <div className="max-w-lg">
          <h2 id="about-preview-heading" className="text-4xl font-semibold leading-[1.1] tracking-[-0.045em] text-foreground sm:text-5xl lg:text-[3.5rem]">
            Your business.
            <br />
            <span className="text-brand-800">My personal commitment.</span>
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted sm:text-lg">
            Clear accounts. Timely filings. Practical guidance.
            Personal support for your business, right here in Pakur.
          </p>

          <div className="mt-9 sm:mt-12">
            <p className="text-2xl font-semibold tracking-tight text-foreground">{business.proprietor}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">Proprietor, ASAD Accounting &amp; Tax Solution<br />{business.qualification}</p>
          </div>

          <Link
            href="/about"
            className="mt-8 inline-block border-b border-brand-900 pb-1.5 text-base font-semibold text-brand-900 transition-colors hover:text-brand-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-800"
          >
            Get to know ASAD
          </Link>
        </div>
      </Container>
    </section>
  );
}
