import React from "react";

export function AccountingBars() {
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
          <linearGradient id="acc-bar-grad-1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#C5D9C2" />
            <stop offset="100%" stopColor="#EDF4E9" />
          </linearGradient>
          <linearGradient id="acc-bar-grad-2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#A5BCA5" />
            <stop offset="100%" stopColor="#DCE9D8" />
          </linearGradient>
          <linearGradient id="acc-bar-grad-3" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#829A86" />
            <stop offset="100%" stopColor="#C5D9C2" />
          </linearGradient>
          <linearGradient id="acc-bar-grad-4" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#39945A" />
            <stop offset="100%" stopColor="#829A86" />
          </linearGradient>
        </defs>

        {/* 5 ascending bars */}
        <rect x="14" y="66" width="14" height="26" rx="4.5" fill="url(#acc-bar-grad-1)" />
        <rect x="34" y="52" width="14" height="40" rx="4.5" fill="url(#acc-bar-grad-2)" />
        <rect x="54" y="38" width="14" height="54" rx="4.5" fill="url(#acc-bar-grad-3)" />
        <rect x="74" y="24" width="14" height="68" rx="4.5" fill="url(#acc-bar-grad-4)" />
        <rect x="94" y="10" width="14" height="82" rx="4.5" fill="#17452D" />
      </svg>
    </div>
  );
}
