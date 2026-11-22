import React from "react";

export function RegistrationShapes() {
  return (
    <div className="relative flex items-end justify-end select-none pointer-events-none w-24 h-20 sm:w-28 sm:h-24 shrink-0">
      <svg
        viewBox="0 0 120 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible transition-transform duration-500 ease-out group-hover:scale-105"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="bento-reg-light" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#C5D9C2" />
            <stop offset="100%" stopColor="#EDF4E9" />
          </linearGradient>
          <linearGradient id="bento-reg-sage" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#829A86" />
            <stop offset="100%" stopColor="#A5BCA5" />
          </linearGradient>
        </defs>

        {/* Pillar 1 (Left): Forest Green, medium height */}
        <rect
          x="14"
          y="52"
          width="18"
          height="40"
          rx="7"
          fill="#17452D"
        />

        {/* Pillar 2 (Mid-left): Sage, taller */}
        <rect
          x="38"
          y="32"
          width="18"
          height="60"
          rx="7"
          fill="url(#bento-reg-sage)"
        />

        {/* Pillar 3 (Mid-right): Light Sage, tallest, with floating dot */}
        <rect
          x="62"
          y="18"
          width="18"
          height="74"
          rx="7"
          fill="url(#bento-reg-light)"
        />
        {/* Floating dot above pillar 3 */}
        <circle cx="71" cy="10" r="2.5" fill="#829A86" />

        {/* Pillar 4 (Right): Forest Green */}
        <rect
          x="86"
          y="42"
          width="18"
          height="50"
          rx="7"
          fill="#17452D"
        />
      </svg>
    </div>
  );
}
