import React from "react";

export function TaxDonut() {
  return (
    <div className="relative flex items-center justify-center select-none pointer-events-none w-24 h-24 sm:w-28 sm:h-28 shrink-0">
      <svg
        viewBox="0 0 110 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full transform -rotate-90 transition-transform duration-500 ease-out group-hover:rotate-[-70deg] group-hover:scale-105"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="tax-grad-forest" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#17452D" />
            <stop offset="100%" stopColor="#1D6038" />
          </linearGradient>
          <linearGradient id="tax-grad-sage" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#829A86" />
            <stop offset="100%" stopColor="#A5BCA5" />
          </linearGradient>
        </defs>

        {/* Base background ring */}
        <circle
          cx="55"
          cy="55"
          r="38"
          stroke="#F1F3EF"
          strokeWidth="14"
          fill="none"
        />

        {/* Primary segment - Forest Green (approx 46%) */}
        {/* Circumference = 2 * PI * 38 = 238.76 */}
        <circle
          cx="55"
          cy="55"
          r="38"
          stroke="url(#tax-grad-forest)"
          strokeWidth="14"
          strokeDasharray="104 134.76"
          strokeDashoffset="0"
          strokeLinecap="round"
          fill="none"
        />

        {/* Secondary segment - Mid Green (approx 26%) */}
        <circle
          cx="55"
          cy="55"
          r="38"
          stroke="#287A45"
          strokeWidth="14"
          strokeDasharray="56 182.76"
          strokeDashoffset="-112"
          strokeLinecap="round"
          fill="none"
        />

        {/* Tertiary segment - Sage (approx 16%) */}
        <circle
          cx="55"
          cy="55"
          r="38"
          stroke="url(#tax-grad-sage)"
          strokeWidth="14"
          strokeDasharray="36 202.76"
          strokeDashoffset="-174"
          strokeLinecap="round"
          fill="none"
        />

        {/* Accent dot / mini arc - Light Sage (approx 8%) */}
        <circle
          cx="55"
          cy="55"
          r="38"
          stroke="#C5D9C2"
          strokeWidth="14"
          strokeDasharray="16 222.76"
          strokeDashoffset="-216"
          strokeLinecap="round"
          fill="none"
        />

        {/* Inner subtle center halo */}
        <circle
          cx="55"
          cy="55"
          r="23"
          fill="#FAFBF9"
        />
      </svg>
    </div>
  );
}
