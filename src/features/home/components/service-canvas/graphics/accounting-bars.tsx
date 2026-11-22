import React from "react";

export function AccountingBars() {
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
          <linearGradient id="acc-bar-1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#C5D9C2" />
            <stop offset="100%" stopColor="#EDF4E9" />
          </linearGradient>
          <linearGradient id="acc-bar-2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#A5BCA5" />
            <stop offset="100%" stopColor="#DCE9D8" />
          </linearGradient>
          <linearGradient id="acc-bar-3" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#829A86" />
            <stop offset="100%" stopColor="#C5D9C2" />
          </linearGradient>
          <linearGradient id="acc-bar-4" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#39945A" />
            <stop offset="100%" stopColor="#829A86" />
          </linearGradient>
          <linearGradient id="acc-bar-5" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#17452D" />
            <stop offset="100%" stopColor="#287A45" />
          </linearGradient>
        </defs>

        {/* Clean baseline */}
        <line
          x1="8"
          y1="98"
          x2="124"
          y2="98"
          stroke="#E5EAE3"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* Delicate ascending dashed trend indicator */}
        <path
          d="M 18 68 C 42 66, 68 48, 114 16"
          stroke="#829A86"
          strokeWidth="1.5"
          strokeDasharray="3 3"
          strokeLinecap="round"
          opacity="0.6"
        />

        {/* Bar 1 (Shortest, light sage) */}
        <rect
          x="12"
          y="72"
          width="16"
          height="26"
          rx="5"
          fill="url(#acc-bar-1)"
        />

        {/* Bar 2 */}
        <rect
          x="35"
          y="58"
          width="16"
          height="40"
          rx="5"
          fill="url(#acc-bar-2)"
        />

        {/* Bar 3 */}
        <rect
          x="58"
          y="44"
          width="16"
          height="54"
          rx="5"
          fill="url(#acc-bar-3)"
        />

        {/* Bar 4 */}
        <rect
          x="81"
          y="30"
          width="16"
          height="68"
          rx="5"
          fill="url(#acc-bar-4)"
        />

        {/* Bar 5 (Tallest, Forest Green) */}
        <rect
          x="104"
          y="16"
          width="16"
          height="82"
          rx="5"
          fill="url(#acc-bar-5)"
        />

        {/* Peak dot indicator */}
        <circle cx="112" cy="16" r="3" fill="#17452D" />
        <circle cx="112" cy="16" r="6" stroke="#39945A" strokeOpacity="0.3" strokeWidth="1" fill="none" />
      </svg>
    </div>
  );
}
