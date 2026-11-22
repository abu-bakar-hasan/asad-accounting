import React from "react";

export function GstGraph() {
  return (
    <div className="w-full pt-2 overflow-hidden select-none pointer-events-none">
      <svg
        viewBox="0 0 320 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto overflow-visible"
        aria-hidden="true"
      >
        <defs>
          {/* Subtle area gradient */}
          <linearGradient id="gst-card-area" x1="160" y1="20" x2="160" y2="175" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#A5BCA5" stopOpacity="0.35" />
            <stop offset="50%" stopColor="#829A86" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#102D20" stopOpacity="0.0" />
          </linearGradient>

          {/* Line stroke gradient */}
          <linearGradient id="gst-card-line" x1="15" y1="140" x2="295" y2="25" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#829A86" />
            <stop offset="45%" stopColor="#C5D9C2" />
            <stop offset="100%" stopColor="#FFFFFF" />
          </linearGradient>

          {/* Vertical Bar gradient */}
          <linearGradient id="gst-card-bar" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#DCE9D8" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#EDF4E9" stopOpacity="0.04" />
          </linearGradient>
        </defs>

        {/* Subtle grid guidelines */}
        <line x1="15" y1="165" x2="305" y2="165" stroke="#FFFFFF" strokeOpacity="0.1" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="15" y1="110" x2="305" y2="110" stroke="#FFFFFF" strokeOpacity="0.08" strokeWidth="1" strokeDasharray="3 3" />

        {/* 6 Translucent ascending vertical bars */}
        <rect x="25" y="130" width="22" height="35" rx="6" fill="url(#gst-card-bar)" />
        <rect x="75" y="112" width="22" height="53" rx="6" fill="url(#gst-card-bar)" />
        <rect x="125" y="94" width="22" height="71" rx="6" fill="url(#gst-card-bar)" />
        <rect x="175" y="74" width="22" height="91" rx="6" fill="url(#gst-card-bar)" />
        <rect x="225" y="52" width="22" height="113" rx="6" fill="url(#gst-card-bar)" />
        <rect x="275" y="28" width="22" height="137" rx="6" fill="url(#gst-card-bar)" />

        {/* Area fill polygon beneath the curve */}
        <path
          d="M 15 165 L 15 142 C 65 140, 115 125, 160 100 C 205 75, 245 52, 286 28 L 286 165 Z"
          fill="url(#gst-card-area)"
        />

        {/* Ascending financial line curve */}
        <path
          d="M 15 142 C 65 140, 115 125, 160 100 C 205 75, 245 52, 286 28"
          stroke="url(#gst-card-line)"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Peak glowing data marker with bright white halo */}
        <circle cx="286" cy="28" r="14" fill="#FFFFFF" fillOpacity="0.2" className="animate-pulse" />
        <circle cx="286" cy="28" r="7" fill="#DCE9D8" fillOpacity="0.6" />
        <circle cx="286" cy="28" r="3.5" fill="#FFFFFF" />
      </svg>
    </div>
  );
}
