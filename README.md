# Stock App

A modern web application built with **Next.js**, **Tailwind CSS**, and **Hugeicons**.

---

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, React 19, TypeScript)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Hugeicons React](https://hugeicons.com/) (`@hugeicons/react` + `@hugeicons/core-free-icons`)
- **Package Manager**: [pnpm](https://pnpm.io/)

---

## Getting Started

1. Navigate to the project directory:

```bash
cd stock
```

2. Run the development server:

```bash
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Hugeicons Usage

Import the `HugeiconsIcon` component and any desired icons from `@hugeicons/core-free-icons`:

```tsx
import { HugeiconsIcon } from "@hugeicons/react";
import { Rocket01Icon, SparklesIcon } from "@hugeicons/core-free-icons";

export default function MyComponent() {
  return (
    <div className="flex items-center gap-3">
      {/* Standard Icon */}
      <HugeiconsIcon icon={Rocket01Icon} size={24} className="text-blue-500" />

      {/* Customized Icon */}
      <HugeiconsIcon
        icon={SparklesIcon}
        size={28}
        strokeWidth={2}
        className="text-amber-500"
      />
    </div>
  );
}
```

---

## Available Scripts

- `pnpm dev`: Starts the Next.js development server.
- `pnpm build`: Builds the production bundle.
- `pnpm start`: Starts the Next.js production server.
- `pnpm lint`: Runs ESLint to check for code quality issues.
