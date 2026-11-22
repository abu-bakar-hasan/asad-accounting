import React from "react";

export function TenderDocument() {
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
          <filter id="doc-shadow" x="20" y="10" width="100" height="100" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#17452D" floodOpacity="0.08" />
          </filter>
        </defs>

        {/* Back document (offset, subtle sage tint) */}
        <g transform="rotate(-6 55 55)">
          <rect
            x="24"
            y="14"
            width="60"
            height="76"
            rx="8"
            fill="#EDF4E9"
            stroke="#DCE9D8"
            strokeWidth="1.2"
          />
          {/* Subtle faint placeholder lines on back doc */}
          <line x1="34" y1="28" x2="52" y2="28" stroke="#C5D9C2" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="34" y1="36" x2="68" y2="36" stroke="#DCE9D8" strokeWidth="2" strokeLinecap="round" />
          <line x1="34" y1="44" x2="62" y2="44" stroke="#DCE9D8" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* Front document (clean white with soft shadow) */}
        <g filter="url(#doc-shadow)" className="transition-transform duration-500 group-hover:-translate-y-1">
          <rect
            x="44"
            y="20"
            width="64"
            height="80"
            rx="8"
            fill="#FFFFFF"
            stroke="#E5EAE3"
            strokeWidth="1.2"
          />

          {/* Heading placeholder line */}
          <rect x="54" y="32" width="26" height="3" rx="1.5" fill="#829A86" />

          {/* Body placeholder lines */}
          <rect x="54" y="42" width="44" height="2.5" rx="1.25" fill="#DCE9D8" />
          <rect x="54" y="50" width="38" height="2.5" rx="1.25" fill="#DCE9D8" />
          <rect x="54" y="58" width="42" height="2.5" rx="1.25" fill="#EDF4E9" />
          <rect x="54" y="66" width="30" height="2.5" rx="1.25" fill="#EDF4E9" />

          {/* Digital Signature Certificate (DSC) Seal */}
          <circle cx="89" cy="83" r="9" fill="#17452D" />
          <circle cx="89" cy="83" r="11" stroke="#287A45" strokeWidth="1" strokeOpacity="0.4" fill="none" />
          {/* Subtle checkmark inside DSC seal */}
          <path
            d="M 86 83.5 L 88 85.5 L 92.5 81"
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
