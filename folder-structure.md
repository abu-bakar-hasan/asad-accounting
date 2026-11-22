# ASAD Accounting & Tax Solution — Project Folder Structure

## Stack and goals

Use **Next.js App Router**, **TypeScript**, **Tailwind CSS v4**, and **shadcn/ui** for a service-first website. Priorities: reusable components, separately maintained homepage sections, data-driven service detail pages, local SEO, responsive layouts, subtle animation, and illustrative financial widgets. A backend is not needed for static content; a contact form requires a submission endpoint or service.

## Recommended structure

```text
asad-accounting/
├── public/
│   ├── images/
│   │   ├── branding/
│   │   │   ├── logo.svg
│   │   │   └── logo-mark.svg
│   │   ├── about/
│   │   └── og/
│   │       └── default.png
│   ├── icons/
│   └── fonts/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── not-found.tsx
│   │   ├── loading.tsx
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   ├── about/page.tsx
│   │   ├── services/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── privacy-policy/page.tsx
│   │   └── terms/page.tsx
│   ├── components/
│   │   ├── ui/
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── accordion.tsx
│   │   │   ├── dialog.tsx
│   │   │   └── tabs.tsx
│   │   ├── layout/
│   │   │   ├── header.tsx
│   │   │   ├── navbar.tsx
│   │   │   ├── mobile-nav.tsx
│   │   │   ├── footer.tsx
│   │   │   └── container.tsx
│   │   ├── shared/
│   │   │   ├── section-heading.tsx
│   │   │   ├── page-heading.tsx
│   │   │   ├── breadcrumb.tsx
│   │   │   ├── contact-cta.tsx
│   │   │   ├── whatsapp-button.tsx
│   │   │   └── animated-section.tsx
│   │   └── graphics/
│   │       ├── line-chart.tsx
│   │       ├── bar-chart.tsx
│   │       ├── donut-chart.tsx
│   │       ├── gradient-mesh.tsx
│   │       └── decorative-grid.tsx
│   ├── features/
│   │   ├── home/
│   │   │   ├── components/
│   │   │   │   ├── hero-section.tsx
│   │   │   │   ├── services-section.tsx
│   │   │   │   ├── about-preview.tsx
│   │   │   │   ├── why-choose-us.tsx
│   │   │   │   ├── process-section.tsx
│   │   │   │   ├── faq-section.tsx
│   │   │   │   └── contact-section.tsx
│   │   │   └── index.ts
│   │   ├── services/
│   │   │   ├── components/
│   │   │   │   ├── service-card.tsx
│   │   │   │   ├── service-grid.tsx
│   │   │   │   ├── service-category.tsx
│   │   │   │   ├── service-search.tsx
│   │   │   │   ├── service-filter.tsx
│   │   │   │   ├── service-details.tsx
│   │   │   │   ├── service-benefits.tsx
│   │   │   │   ├── service-faq.tsx
│   │   │   │   └── related-services.tsx
│   │   │   ├── data/
│   │   │   │   ├── services.ts
│   │   │   │   └── categories.ts
│   │   │   ├── types/service.ts
│   │   │   └── utils/get-service.ts
│   │   ├── finance-widgets/
│   │   │   ├── components/
│   │   │   │   ├── finance-showcase.tsx
│   │   │   │   ├── revenue-card.tsx
│   │   │   │   ├── expense-card.tsx
│   │   │   │   ├── tax-calendar-card.tsx
│   │   │   │   ├── income-expense-card.tsx
│   │   │   │   └── chart-tooltip.tsx
│   │   │   ├── data/demo-finance.ts
│   │   │   └── types/finance.ts
│   │   ├── about/components/
│   │   │   ├── about-hero.tsx
│   │   │   ├── proprietor-profile.tsx
│   │   │   └── firm-overview.tsx
│   │   └── contact/
│   │       ├── components/
│   │       │   ├── contact-info.tsx
│   │       │   ├── contact-form.tsx
│   │       │   └── location-map.tsx
│   │       └── schemas/contact-schema.ts
│   ├── config/
│   │   ├── site.ts
│   │   ├── navigation.ts
│   │   ├── business.ts
│   │   └── seo.ts
│   ├── hooks/
│   │   ├── use-media-query.ts
│   │   ├── use-scroll-position.ts
│   │   └── use-debounce.ts
│   ├── lib/
│   │   ├── utils.ts
│   │   ├── metadata.ts
│   │   ├── structured-data.ts
│   │   └── whatsapp.ts
│   ├── types/index.ts
│   └── styles/
│       ├── animations.css
│       └── utilities.css
├── content/
│   ├── info.md
│   └── faq.md
├── .env.example
├── components.json
├── next.config.ts
├── postcss.config.mjs
├── tsconfig.json
├── package.json
└── README.md
```

> This is a target structure, not a requirement to create every placeholder file immediately. shadcn/ui components should be added only when used. Fonts managed through `next/font` do not need files in `public/fonts`.

## Responsibilities

- **`app/`**: routes, layouts, SEO metadata, static generation, and page composition; avoid large JSX files.
- **`components/ui/`**: reusable primitives, including shadcn/ui components.
- **`components/layout/`**: navigation, footer, and layout containers.
- **`components/shared/`**: cross-feature UI such as CTAs, headings, and breadcrumbs.
- **`components/graphics/`**: reusable chart primitives and decorative elements.
- **`features/`**: business-specific sections, logic, data, and components; keep a component within its feature until shared reuse is justified.
- **`config/`**: business identity, navigation, site settings, and SEO defaults.
- **`hooks/`**: reusable React hooks; don't add hooks for simple CSS behavior.
- **`lib/`**: pure helpers, metadata utilities, schema generation, and WhatsApp URL helpers.
- **`content/`**: source briefs and FAQ copy. `info.md` is a reference document, not necessarily a runtime content loader.

## Homepage composition

`src/app/page.tsx`:

```tsx
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
```

`src/features/home/index.ts` should export the named components. Add `WhyChooseUs` if needed, but avoid repeating claims or sections.

## Data-driven services

`src/features/services/types/service.ts`:

```ts
export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  category: string;
  featured: boolean;
  description: string;
  benefits?: string[];
  faqs?: { question: string; answer: string }[];
}
```

`src/features/services/data/services.ts`:

```ts
import type { Service } from "../types/service";

export const services: Service[] = [
  {
    slug: "gst-registration",
    title: "GST Registration",
    shortDescription: "Assistance with GST registration.",
    category: "taxation",
    featured: true,
    description: "Get assistance with GST registration and documentation.",
  },
  {
    slug: "itr-filing",
    title: "Income Tax Return Filing",
    shortDescription: "ITR filing for individuals and businesses.",
    category: "taxation",
    featured: true,
    description: "Assistance with preparing and filing income tax returns.",
  },
];
```

Maintain category IDs in `categories.ts` and keep slugs unique. Reuse this single dataset in search, category listings, featured cards, related services, and detail pages.

### Dynamic routes and SEO

Use `src/app/services/[slug]/page.tsx` rather than manually creating a folder for every service. Examples:

```text
/services/gst-registration
/services/itr-filing
/services/msme-registration
/services/company-incorporation
```

Use `generateStaticParams()` for known slugs, `generateMetadata()` for service-specific titles/descriptions, and `notFound()` for unknown services. Provide relevant service FAQs and structured data only when accurate and appropriate. Use `sitemap.ts` and `robots.ts` for discoverability.

## Finance widgets

The Pinterest-inspired hero visuals belong in `features/finance-widgets/`. `finance-showcase.tsx` composes independent widgets such as `revenue-card.tsx`, `expense-card.tsx`, `tax-calendar-card.tsx`, and `income-expense-card.tsx`. Use reusable chart primitives from `components/graphics/` when appropriate.

- **Recharts** for chart rendering.
- **Motion** for restrained entrance/hover animations.
- **Tailwind v4** for color, spacing, responsive layout, and effects.
- **shadcn/ui** for accessible controls.
- Store illustrative data in `demo-finance.ts` and label it as demo data; do not imply it represents the firm's or clients' actual finances.
- A real tax deadline widget must use verified, maintained deadlines rather than fabricated dates.

## Central business configuration

`src/config/business.ts`:

```ts
export const business = {
  name: "ASAD Accounting & Tax Solution",
  proprietor: "Md Asad Ansari",
  qualification: "CMA Finalist",
  phone: "+918797124734",
  email: "taxexpertthe@gmail.com",
  address: {
    street: "Shop No. 14, Bus Stand",
    city: "Pakur",
    state: "Jharkhand",
    postalCode: "816107",
    country: "India",
  },
};
```

**Verify the public-facing address before launch:** supplied promotional materials also mention Harindanga Bazar. Centralize the confirmed values so the footer, contact page, metadata, and WhatsApp CTAs stay consistent.

## Suggested packages

| Package | Use |
| --- | --- |
| Next.js | Routing, rendering, metadata, static generation |
| TypeScript | Typed data and components |
| Tailwind CSS v4 | Styling and design tokens |
| shadcn/ui | UI primitives and patterns |
| lucide-react | Icons |
| motion | Animations |
| recharts | Finance visualizations |
| react-hook-form | Contact form state |
| zod | Form validation |
| clsx + tailwind-merge | Class composition (often via `cn`) |

Install packages as features require them. For fonts, use **Plus Jakarta Sans** for headings and **Inter** for body text via `next/font/google`.

## Engineering conventions

1. **One component, one responsibility.** Keep complex UI broken into meaningful parts without splitting trivial markup into unnecessary files.
2. **Co-locate feature code.** Move something into `components/shared` only when multiple features actually reuse it.
3. **Prefer Server Components.** Use `"use client"` only for search/filter interactions, animated charts, and browser-dependent UI.
4. **Separate content and presentation.** Keep service data in typed modules, not scattered across JSX.
5. **No unnecessary backend.** Static pages can be pre-rendered. A functional contact form needs a server action, API endpoint, or external submission provider.
6. **Build mobile-first.** Prioritize accessible navigation, service discovery, and contact actions.
7. **Keep SEO accurate.** Use business and service metadata, local information, and honest structured data. Do not invent ratings, years of experience, or client counts.
8. **Use one design system.** Forest green + sage + neutral surfaces, consistent typography, and subtle charts; avoid clutter and redundant service grids.
9. **Expand folders only as needed.** The tree above describes the intended organization, not a checklist of empty files to generate.

## Minimal mental model

```text
src/
├── app/          # Routes and metadata
├── components/   # Shared UI
├── features/     # Page sections and business functionality
├── config/       # Business/site configuration
├── hooks/        # Shared hooks
├── lib/          # Utilities
├── styles/       # Additional CSS
└── types/        # Shared types
```

This structure is scalable while remaining practical for a local accounting service website.
