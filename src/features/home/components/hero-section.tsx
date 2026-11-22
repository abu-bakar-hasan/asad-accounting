import React from "react";
import { Container } from "@/components/layout/container";
import { ServiceCanvas } from "./service-canvas/service-canvas";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-14 pb-20 sm:pt-20 sm:pb-28 lg:pt-24 lg:pb-32 px-4 sm:px-6">
      {/* Subtle organic sage background glow */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[420px] bg-gradient-to-b from-sage-100/50 via-sage-50/30 to-transparent blur-3xl -z-10"
        aria-hidden="true"
      />

      <Container className="relative">
        {/* Centered Introduction */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-bold tracking-tight text-foreground leading-[1.08] mb-5 sm:mb-6 animate-hero-fade">
            What can we help you with today?
          </h1>

          <p className="text-muted text-lg sm:text-xl font-normal leading-relaxed max-w-[650px] mx-auto animate-hero-delay-1">
            From tax filing to business registration, find the assistance you need, all in one place.
          </p>
        </div>

        {/* Asymmetric Service Canvas */}
        <div className="animate-hero-delay-2">
          <ServiceCanvas />
        </div>
      </Container>
    </section>
  );
}
