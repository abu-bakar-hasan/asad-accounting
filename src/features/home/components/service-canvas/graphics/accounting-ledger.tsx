"use client";

import { useId } from "react";
import styles from "./service-objects.module.css";

export function AccountingLedger() {
  const id = useId();
  return (
    <div className="w-24 h-24 sm:w-28 sm:h-28 shrink-0 select-none pointer-events-none">
      <svg viewBox="0 0 140 130" fill="none" className="w-full h-full" aria-hidden="true">
        <defs><linearGradient id={`${id}-paper`} x1="24" y1="36" x2="110" y2="116" gradientUnits="userSpaceOnUse"><stop stopColor="#fff" /><stop offset="1" stopColor="#EDF4E9" /></linearGradient></defs>
        <ellipse cx="72" cy="116" rx="56" ry="7" fill="#17452D" fillOpacity=".06" />
        <g transform="rotate(9 98 40)">
          <path d="M79 10h38v62l-5-4-5 4-5-4-5 4-5-4-5 4-8-4Z" fill="#DCE9D8" stroke="#A5BCA5" />
          <path d="M87 22h21M87 30h15M87 40h21M87 48h21" stroke="#829A86" strokeWidth="2" strokeLinecap="round" />
        </g>
        <path d="M12 48q27-12 57 0 30-12 59 0v65q-30-10-59 0-30-10-57 0Z" fill="#17452D" />
        <path d="M14 42q27-12 55 0 29-12 57 0v64q-29-10-57 0-28-10-55 0Z" fill={`url(#${id}-paper)`} stroke="#A5BCA5" />
        <path d="M69 42v64M48 54v42M103 54v42" stroke="#C5D9C2" />
        <path d="M23 55h15M79 55h15" stroke="#829A86" strokeWidth="2.5" strokeLinecap="round" />
        {[67,79,91].map((y, i) => <g key={y} stroke="#829A86" strokeWidth="2" strokeLinecap="round" className={`${styles.entry} ${i === 1 ? styles.second : i === 2 ? styles.third : ""}`}><path pathLength="1" d={`M23 ${y}h16m16 0h5M79 ${y}h16m14 0h7`} /></g>)}
        <circle cx="113" cy="105" r="14" fill="#287A45" />
        <path pathLength="1" className={styles.check} d="m106 105 5 5 9-10" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M69 107v10l6-4 5 4v-12" fill="#829A86" />
      </svg>
    </div>
  );
}
