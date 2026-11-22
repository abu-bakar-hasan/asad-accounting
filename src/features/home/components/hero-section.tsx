import React from "react";
import { Container } from "@/components/layout/container";
import { ServiceCanvas } from "./service-canvas/service-canvas";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28 px-4 sm:px-6">
      {/* Ambient Botanical Foliage (Top-Left, matching reference mockup) */}
      <div
        className="pointer-events-none absolute -top-8 -left-12 w-64 h-64 sm:w-80 sm:h-80 opacity-40 blur-[2px] -z-10 select-none"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full transform -rotate-12"
        >
          {/* Main branch stems */}
          <path
            d="M 10 10 Q 60 70 120 120 Q 150 150 180 190"
            stroke="#287A45"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.4"
          />
          {/* Leaves */}
          <path
            d="M 40 45 C 30 25, 60 20, 70 38 C 75 48, 55 55, 40 45 Z"
            fill="#17452D"
            opacity="0.55"
          />
          <path
            d="M 65 72 C 55 55, 85 45, 95 62 C 100 72, 80 82, 65 72 Z"
            fill="#1D6038"
            opacity="0.65"
          />
          <path
            d="M 95 98 C 85 80, 115 70, 128 88 C 132 98, 110 110, 95 98 Z"
            fill="#287A45"
            opacity="0.5"
          />
          <path
            d="M 125 128 C 115 110, 145 102, 158 120 C 162 130, 140 142, 125 128 Z"
            fill="#39945A"
            opacity="0.45"
          />
          <path
            d="M 50 85 C 35 88, 30 112, 48 116 C 60 118, 62 98, 50 85 Z"
            fill="#829A86"
            opacity="0.5"
          />
          <path
            d="M 80 118 C 65 120, 60 142, 78 148 C 90 150, 92 130, 80 118 Z"
            fill="#17452D"
            opacity="0.4"
          />
        </svg>
      </div>

      {/* Subtle organic background sage glow */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[380px] bg-gradient-to-b from-sage-100/40 via-sage-50/20 to-transparent blur-3xl -z-10"
        aria-hidden="true"
      />

      <Container className="relative">
        {/* Centered Introduction */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14 lg:mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-bold tracking-tight leading-[1.1] mb-5 animate-hero-fade">
            <span className="text-brand-900 block sm:inline">What can we help you </span>
            <span className="text-foreground block sm:inline">with today?</span>
          </h1>

          <p className="text-muted text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-[650px] mx-auto animate-hero-delay-1">
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
