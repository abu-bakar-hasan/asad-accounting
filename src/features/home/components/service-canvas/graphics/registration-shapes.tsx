import React from "react";

export function RegistrationShapes() {
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
          {/* Gradients for 3D isometric building faces */}
          <linearGradient id="bldg-front-1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#829A86" />
            <stop offset="100%" stopColor="#287A45" />
          </linearGradient>

          <linearGradient id="bldg-side-1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1D6038" />
            <stop offset="100%" stopColor="#102D20" />
          </linearGradient>

          <linearGradient id="bldg-roof-1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#A5BCA5" />
            <stop offset="100%" stopColor="#829A86" />
          </linearGradient>

          <linearGradient id="bldg-front-2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#C5D9C2" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#829A86" stopOpacity="0.6" />
          </linearGradient>

          <linearGradient id="bldg-side-2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#829A86" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#287A45" stopOpacity="0.5" />
          </linearGradient>
        </defs>

        {/* Back Building (Tall, translucent sage) */}
        <g opacity="0.85">
          {/* Roof */}
          <path d="M 50 14 L 75 4 L 95 14 L 70 24 Z" fill="#DCE9D8" />
          {/* Left / Front Face */}
          <path d="M 50 14 L 70 24 L 70 100 L 50 90 Z" fill="url(#bldg-front-2)" />
          {/* Right / Side Face */}
          <path d="M 70 24 L 95 14 L 95 90 L 70 100 Z" fill="url(#bldg-side-2)" />
        </g>

        {/* Front Building (Medium, solid green architecture) */}
        <g>
          {/* Roof */}
          <path d="M 70 38 L 92 28 L 114 38 L 92 48 Z" fill="url(#bldg-roof-1)" />
          {/* Left / Front Face */}
          <path d="M 70 38 L 92 48 L 92 105 L 70 95 Z" fill="url(#bldg-front-1)" />
          {/* Right / Side Face */}
          <path d="M 92 48 L 114 38 L 114 95 L 92 105 Z" fill="url(#bldg-side-1)" />
        </g>

        {/* Glass floor lines on front tower */}
        <line x1="72" y1="52" x2="90" y2="61" stroke="#FFFFFF" strokeOpacity="0.25" strokeWidth="1" />
        <line x1="72" y1="66" x2="90" y2="75" stroke="#FFFFFF" strokeOpacity="0.25" strokeWidth="1" />
        <line x1="72" y1="80" x2="90" y2="89" stroke="#FFFFFF" strokeOpacity="0.25" strokeWidth="1" />
      </svg>
    </div>
  );
}
