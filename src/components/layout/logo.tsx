import React from "react";

export function AsadLogo({ className = "w-9 h-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M20 4L7 34H14.5L20 20.5L25.5 34H33L20 4Z"
        fill="#17452D"
      />
      <path
        d="M20 11L14 25.5H26L20 11Z"
        fill="#287A45"
      />
      <circle cx="20" cy="28.5" r="3" fill="#829A86" />
    </svg>
  );
}
