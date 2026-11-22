import React from "react";

export function TenderDocument() {
  return (
    <div className="relative flex items-end justify-end select-none pointer-events-none w-24 h-22 sm:w-28 sm:h-24 shrink-0">
      <svg
        viewBox="0 0 130 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible transition-transform duration-500 ease-out group-hover:scale-105"
        aria-hidden="true"
      >
        <defs>
          <filter id="tender-doc-shadow" x="25" y="10" width="95" height="100" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#17452D" floodOpacity="0.08" />
          </filter>
        </defs>

        {/* Back document (angled, soft sage tint) */}
        <g transform="rotate(-7 55 55)">
          <rect
            x="24"
            y="12"
            width="58"
            height="76"
            rx="8"
            fill="#EDF4E9"
            stroke="#DCE9D8"
            strokeWidth="1.2"
          />
        </g>

        {/* Front document (clean white with subtle lines and signature) */}
        <g filter="url(#tender-doc-shadow)" className="transition-transform duration-500 group-hover:-translate-y-1">
          <rect
            x="42"
            y="18"
            width="62"
            height="80"
            rx="8"
            fill="#FFFFFF"
            stroke="#E5EAE3"
            strokeWidth="1.2"
          />

          {/* Heading placeholder line */}
          <rect x="52" y="28" width="28" height="2.5" rx="1.25" fill="#829A86" />

          {/* Horizontal text lines */}
          <rect x="52" y="37" width="42" height="2" rx="1" fill="#DCE9D8" />
          <rect x="52" y="44" width="36" height="2" rx="1" fill="#DCE9D8" />
          <rect x="52" y="51" width="40" height="2" rx="1" fill="#EDF4E9" />
          <rect x="52" y="58" width="28" height="2" rx="1" fill="#EDF4E9" />

          {/* Subtle signature line */}
          <line x1="52" y1="78" x2="88" y2="78" stroke="#E5EAE3" strokeWidth="1" strokeLinecap="round" />

          {/* Green handwritten signature flourish */}
          <path
            d="M 52 75 C 54 72, 57 70, 58 74 C 59 78, 62 76, 64 72 C 66 69, 69 71, 71 75 C 73 78, 77 73, 80 73 C 83 73, 86 75, 88 74"
            stroke="#287A45"
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
