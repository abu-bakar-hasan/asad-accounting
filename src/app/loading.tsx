import { Container } from "@/components/layout/container";

export default function Loading() {
  return (
    <div className="py-24 text-center">
      <Container className="space-y-4 max-w-sm">
        <div className="w-8 h-8 rounded-full border-2 border-brand-900 border-t-transparent animate-spin mx-auto"></div>
        <p className="text-xs text-muted">Loading...</p>
      </Container>
    </div>
  );
}
