"use client";

import { useId } from "react";
import styles from "./service-objects.module.css";

export function TenderDocument() {
  const id = useId();
  return (
    <div className="w-24 h-24 sm:w-28 sm:h-28 shrink-0 select-none pointer-events-none">
      <svg viewBox="0 0 140 130" fill="none" className={`${styles.float} w-full h-full`} aria-hidden="true">
        <defs><linearGradient id={`${id}-paper`} x1="26" y1="20" x2="100" y2="110" gradientUnits="userSpaceOnUse"><stop stopColor="#fff" /><stop offset="1" stopColor="#EDF4E9" /></linearGradient><linearGradient id={`${id}-token`} x1="94" y1="70" x2="116" y2="114" gradientUnits="userSpaceOnUse"><stop stopColor="#39945A" /><stop offset="1" stopColor="#17452D" /></linearGradient></defs>
        <ellipse cx="75" cy="118" rx="51" ry="6" fill="#17452D" fillOpacity=".06" />
        <rect x="23" y="19" width="68" height="91" rx="6" fill="#DCE9D8" transform="rotate(-8 57 64)" />
        <path d="M37 15h48l18 18v74a5 5 0 0 1-5 5H37a5 5 0 0 1-5-5V20a5 5 0 0 1 5-5Z" fill={`url(#${id}-paper)`} stroke="#A5BCA5" />
        <path d="M85 15v18h18" fill="#C5D9C2" />
        <path d="M44 32h25M44 44h43M44 53h39M44 62h30" stroke="#A5BCA5" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M44 92h42" stroke="#C5D9C2" />
        <path pathLength="1" className={styles.signature} d="M44 87c9-17 13-13 7-3s-1 8 5 0 5-1 8 2 7-8 10-3 7 3 12 0" stroke="#287A45" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <g transform="rotate(22 110 88)">
          <path d="M100 57V43h20v14" fill="#DCE9D8" stroke="#829A86" /><path d="M106 48v4m8-4v4" stroke="#829A86" strokeWidth="3" />
          <rect x="95" y="56" width="30" height="58" rx="9" fill={`url(#${id}-token)`} />
          <path d="M101 63v36" stroke="#C5D9C2" strokeOpacity=".4" strokeLinecap="round" /><circle cx="110" cy="104" r="3" stroke="#A5BCA5" />
          <g className={`${styles.seal} ${styles.signed}`}><path d="m104 79 4 4 8-9" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></g>
        </g>
      </svg>
    </div>
  );
}

