import React from "react";

export function GstGraph() {
  return (
    <div className="w-full pt-4 overflow-hidden select-none pointer-events-none">
      <svg
        viewBox="0 0 360 170"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto overflow-visible"
        aria-hidden="true"
      >
        <defs>
          {/* Subtle area gradient */}
          <linearGradient id="gst-area-grad" x1="180" y1="25" x2="180" y2="165" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#A5BCA5" stopOpacity="0.32" />
            <stop offset="45%" stopColor="#829A86" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#102D20" stopOpacity="0.0" />
          </linearGradient>

          {/* Line stroke gradient */}
          <linearGradient id="gst-line-grad" x1="10" y1="130" x2="350" y2="25" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#829A86" />
            <stop offset="40%" stopColor="#A5BCA5" />
            <stop offset="100%" stopColor="#DCE9D8" />
          </linearGradient>

          {/* Bar gradient */}
          <linearGradient id="gst-bar-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#EDF4E9" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#EDF4E9" stopOpacity="0.03" />
          </linearGradient>
        </defs>

        {/* Subtle grid guidelines */}
        <line x1="10" y1="160" x2="350" y2="160" stroke="#FFFFFF" strokeOpacity="0.08" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="10" y1="105" x2="350" y2="105" stroke="#FFFFFF" strokeOpacity="0.06" strokeWidth="1" strokeDasharray="3 3" />

        {/* Translucent ascending vertical bars behind the graph */}
        <rect x="25" y="125" width="18" height="35" rx="5" fill="url(#gst-bar-grad)" />
        <rect x="62" y="112" width="18" height="48" rx="5" fill="url(#gst-bar-grad)" />
        <rect x="99" y="100" width="18" height="60" rx="5" fill="url(#gst-bar-grad)" />
        <rect x="136" y="86" width="18" height="74" rx="5" fill="url(#gst-bar-grad)" />
        <rect x="173" y="74" width="18" height="86" rx="5" fill="url(#gst-bar-grad)" />
        <rect x="210" y="66" width="18" height="94" rx="5" fill="url(#gst-bar-grad)" />
        <rect x="247" y="52" width="18" height="108" rx="5" fill="url(#gst-bar-grad)" />
        <rect x="284" y="38" width="18" height="122" rx="5" fill="url(#gst-bar-grad)" />
        <rect x="321" y="22" width="18" height="138" rx="5" fill="url(#gst-bar-grad)" />

        {/* Area fill polygon beneath the curve */}
        <path
          d="M 12 160 L 12 136 C 60 134, 105 120, 150 96 C 195 72, 240 82, 285 50 C 315 28, 335 24, 348 20 L 348 160 Z"
          fill="url(#gst-area-grad)"
        />

        {/* Ascending financial line curve */}
        <path
          d="M 12 136 C 60 134, 105 120, 150 96 C 195 72, 240 82, 285 50 C 315 28, 335 24, 348 20"
          stroke="url(#gst-line-grad)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />

        {/* Mid-curve marker point */}
        <circle cx="150" cy="96" r="3.5" fill="#C5D9C2" fillOpacity="0.85" />
        <circle cx="150" cy="96" r="7" stroke="#A5BCA5" strokeOpacity="0.3" strokeWidth="1" fill="none" />

        {/* Peak data marker with concentric glow */}
        <circle cx="348" cy="20" r="10" fill="#DCE9D8" fillOpacity="0.2" className="animate-pulse" />
        <circle cx="348" cy="20" r="5" fill="#DCE9D8" fillOpacity="0.5" />
        <circle cx="348" cy="20" r="2.5" fill="#FFFFFF" />
      </svg>
    </div>
  );
}
