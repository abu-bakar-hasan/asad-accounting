import React from "react";

export function RegistrationShapes() {
  return (
    <div className="relative flex items-end justify-end select-none pointer-events-none w-28 h-24 sm:w-32 sm:h-28 shrink-0">
      <svg
        viewBox="0 0 130 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible transition-transform duration-500 ease-out group-hover:scale-105"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="reg-shape-grad-1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#C5D9C2" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#EDF4E9" stopOpacity="0.3" />
          </linearGradient>

          <linearGradient id="reg-shape-grad-2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#829A86" />
            <stop offset="100%" stopColor="#A5BCA5" stopOpacity="0.7" />
          </linearGradient>

          <linearGradient id="reg-shape-grad-3" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#287A45" />
            <stop offset="100%" stopColor="#1D6038" />
          </linearGradient>

          <linearGradient id="reg-shape-grad-4" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#17452D" />
            <stop offset="100%" stopColor="#102D20" />
          </linearGradient>
        </defs>

        {/* Pillar 1 (back, tallest, light sage translucent) */}
        <rect
          x="66"
          y="10"
          width="26"
          height="88"
          rx="10"
          fill="url(#reg-shape-grad-1)"
          className="transition-transform duration-500 group-hover:-translate-y-1"
        />

        {/* Pillar 2 (mid-layer, sage 500) */}
        <rect
          x="38"
          y="28"
          width="24"
          height="70"
          rx="9"
          fill="url(#reg-shape-grad-2)"
          opacity="0.85"
          className="transition-transform duration-500 group-hover:-translate-y-0.5"
        />

        {/* Pillar 3 (front right, brand green) */}
        <rect
          x="88"
          y="42"
          width="24"
          height="56"
          rx="9"
          fill="url(#reg-shape-grad-3)"
          opacity="0.9"
          className="transition-transform duration-500 group-hover:-translate-y-1.5"
        />

        {/* Pillar 4 (front left anchor, deep forest green) */}
        <rect
          x="12"
          y="54"
          width="22"
          height="44"
          rx="8"
          fill="url(#reg-shape-grad-4)"
        />

        {/* Subtle decorative dot accent above Pillar 1 */}
        <circle cx="79" cy="4" r="2.5" fill="#829A86" opacity="0.6" />
      </svg>
    </div>
  );
}
