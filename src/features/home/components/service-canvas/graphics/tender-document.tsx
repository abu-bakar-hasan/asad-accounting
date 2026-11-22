import React from "react";

export function TenderDocument() {
  return (
    <div className="relative flex items-end justify-end select-none pointer-events-none w-24 h-20 sm:w-28 sm:h-24 shrink-0">
      <svg
        viewBox="0 0 120 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible transition-transform duration-500 ease-out group-hover:scale-105"
        aria-hidden="true"
      >
        {/* Back document (angled, sage tint) */}
        <g transform="rotate(-6 50 50)">
          <rect
            x="20"
            y="14"
            width="52"
            height="66"
            rx="6"
            fill="#EDF4E9"
            stroke="#DCE9D8"
            strokeWidth="1"
          />
        </g>

        {/* Front document (white with lines and DSC seal) */}
        <g className="transition-transform duration-500 group-hover:-translate-y-1">
          <rect
            x="36"
            y="18"
            width="54"
            height="68"
            rx="6"
            fill="#FFFFFF"
            stroke="#E5EAE3"
            strokeWidth="1.2"
          />

          {/* Placeholder lines */}
          <rect x="44" y="28" width="22" height="2.5" rx="1.25" fill="#829A86" />
          <rect x="44" y="36" width="38" height="2" rx="1" fill="#DCE9D8" />
          <rect x="44" y="43" width="32" height="2" rx="1" fill="#DCE9D8" />
          <rect x="44" y="50" width="36" height="2" rx="1" fill="#EDF4E9" />

          {/* Circular DSC seal stamp with checkmark */}
          <circle cx="74" cy="71" r="8" fill="#17452D" />
          <path
            d="M 71 71 L 73 73 L 77.5 68.5"
            stroke="#FFFFFF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </g>
      </svg>
    </div>
  );
}
