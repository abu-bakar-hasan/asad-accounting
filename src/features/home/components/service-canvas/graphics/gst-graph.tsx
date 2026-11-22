import React from "react";

export function GstGraph() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden select-none pointer-events-none">
      <svg
        viewBox="0 0 760 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover sm:object-fill"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          {/* Subtle area gradient */}
          <linearGradient id="gst-bento-area" x1="380" y1="10" x2="380" y2="230" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#A5BCA5" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#829A86" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#102D20" stopOpacity="0.0" />
          </linearGradient>

          {/* Line stroke gradient */}
          <linearGradient id="gst-bento-line" x1="20" y1="200" x2="740" y2="10" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#829A86" />
            <stop offset="45%" stopColor="#A5BCA5" />
            <stop offset="100%" stopColor="#EDF4E9" />
          </linearGradient>

          {/* Vertical Bar gradient */}
          <linearGradient id="gst-bento-bar" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#EDF4E9" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#EDF4E9" stopOpacity="0.02" />
          </linearGradient>
        </defs>

        {/* Subtle grid guidelines across the entire 2-column block */}
        <line x1="15" y1="210" x2="745" y2="210" stroke="#FFFFFF" strokeOpacity="0.08" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="15" y1="145" x2="745" y2="145" stroke="#FFFFFF" strokeOpacity="0.06" strokeWidth="1" strokeDasharray="4 4" />

        {/* Translucent ascending vertical bars (spaced across both GST area and the middle column) */}
        <rect x="35" y="172" width="22" height="38" rx="6" fill="url(#gst-bento-bar)" />
        <rect x="75" y="158" width="22" height="52" rx="6" fill="url(#gst-bento-bar)" />
        <rect x="115" y="144" width="22" height="66" rx="6" fill="url(#gst-bento-bar)" />
        <rect x="155" y="128" width="22" height="82" rx="6" fill="url(#gst-bento-bar)" />
        <rect x="195" y="114" width="22" height="96" rx="6" fill="url(#gst-bento-bar)" />
        <rect x="235" y="98" width="22" height="112" rx="6" fill="url(#gst-bento-bar)" />
        <rect x="275" y="84" width="22" height="126" rx="6" fill="url(#gst-bento-bar)" />
        <rect x="315" y="70" width="22" height="140" rx="6" fill="url(#gst-bento-bar)" />

        {/* Bars extending into the middle column gap */}
        <rect x="365" y="58" width="22" height="152" rx="6" fill="url(#gst-bento-bar)" />
        <rect x="415" y="46" width="22" height="164" rx="6" fill="url(#gst-bento-bar)" />
        <rect x="465" y="34" width="22" height="176" rx="6" fill="url(#gst-bento-bar)" />
        <rect x="515" y="24" width="22" height="186" rx="6" fill="url(#gst-bento-bar)" />
        <rect x="565" y="18" width="22" height="192" rx="6" fill="url(#gst-bento-bar)" />
        <rect x="615" y="14" width="22" height="196" rx="6" fill="url(#gst-bento-bar)" />
        <rect x="665" y="10" width="22" height="200" rx="6" fill="url(#gst-bento-bar)" />
        <rect x="715" y="8" width="22" height="202" rx="6" fill="url(#gst-bento-bar)" />

        {/* Gradient Area Fill under the full curve */}
        <path
          d="M 15 210 L 15 180 C 100 178, 190 156, 280 112 C 325 90, 360 76, 395 64 C 475 38, 580 18, 745 8 L 745 210 Z"
          fill="url(#gst-bento-area)"
        />

        {/* Ascending financial line curve flowing across */}
        <path
          d="M 15 180 C 100 178, 190 156, 280 112 C 325 90, 360 76, 395 64 C 475 38, 580 18, 745 8"
          stroke="url(#gst-bento-line)"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Glowing Data Point Marker at the transition threshold (around x=345) */}
        <circle cx="345" cy="82" r="14" fill="#DCE9D8" fillOpacity="0.15" />
        <circle cx="345" cy="82" r="7" stroke="#A5BCA5" strokeWidth="1.5" strokeOpacity="0.5" fill="none" />
        <circle cx="345" cy="82" r="3.5" fill="#FFFFFF" />

        {/* Terminal peak glow */}
        <circle cx="745" cy="8" r="8" fill="#EDF4E9" fillOpacity="0.25" />
        <circle cx="745" cy="8" r="3" fill="#FFFFFF" />
      </svg>
    </div>
  );
}
