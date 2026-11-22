"use client";

import { useId } from "react";
import styles from "./service-objects.module.css";

export function RegistrationShapes() {
  const id = useId();
  return (
    <div className="w-24 h-24 sm:w-28 sm:h-28 shrink-0 select-none pointer-events-none">
      <svg viewBox="0 0 140 130" fill="none" className={`${styles.float} w-full h-full`} aria-hidden="true">
        <defs><linearGradient id={`${id}-paper`} x1="25" y1="42" x2="99" y2="119" gradientUnits="userSpaceOnUse"><stop stopColor="#fff" /><stop offset="1" stopColor="#EDF4E9" /></linearGradient></defs>
        <ellipse cx="74" cy="117" rx="53" ry="6" fill="#17452D" fillOpacity=".06" />
        <path d="m78 24 27-12 24 13-28 12Z" fill="#C5D9C2" /><path d="m78 24 23 13v62L78 86Z" fill="#829A86" /><path d="m101 37 28-12v62l-28 12Z" fill="#287A45" />
        <path d="m109 47 12-5m-12 18 12-5m-12 18 12-5M85 39l8 4m-8 9 8 4" stroke="#DCE9D8" strokeWidth="3" />
        <g transform="rotate(-6 61 78)">
          <rect x="22" y="36" width="76" height="77" rx="5" fill="#DCE9D8" />
          <rect x="18" y="31" width="76" height="77" rx="5" fill={`url(#${id}-paper)`} stroke="#A5BCA5" />
          <path d="M25 39h62v61H25Z" stroke="#DCE9D8" />
          <path d="M37 49h38M33 60h46M33 68h40M33 76h27" stroke="#A5BCA5" strokeWidth="2" strokeLinecap="round" />
          <path d="M34 89q5-9 7-1t8-3 9 3" stroke="#829A86" strokeWidth="1.5" strokeLinecap="round" />
          <g className={styles.seal}>
            <path d="m69 92-3 23 10-5 9 5-3-23" fill="#829A86" />
            <circle cx="76" cy="88" r="14" fill="#287A45" /><circle cx="76" cy="88" r="10" stroke="#C5D9C2" />
            <path d="m71 88 3 3 7-7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </g>
      </svg>
    </div>
  );
}

