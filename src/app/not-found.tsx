import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { Container } from "@/components/layout/container";

export default function NotFound() {
  return (
    <main className="py-24 text-center">
      <Container className="space-y-6 max-w-lg">
        <span className="text-4xl font-mono font-bold text-brand-900 block">
          404
        </span>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
          Page Not Found
        </h1>
        <p className="text-sm text-muted">
          The requested page or service could not be found. Please check the URL or return to our homepage.
        </p>
        <div className="pt-2">
          <Link
            href="/"
            className="bg-brand-900 hover:bg-brand-800 text-white font-medium px-6 py-3 rounded-xl transition-colors inline-flex items-center gap-2 text-xs"
          >
            <span>Return to Home</span>
            <HugeiconsIcon icon={ArrowRight01Icon} size={14} />
          </Link>
        </div>
      </Container>
    </main>
  );
}
