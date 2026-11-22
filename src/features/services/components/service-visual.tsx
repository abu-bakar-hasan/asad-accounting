"use client";

import { useId } from "react";
import type { ReactNode } from "react";
import type { Service } from "../types/service";

export function ServiceVisual({ service }: { service: Service }) {
  const id = useId();
  const paper = `url(#${id}-paper)`;
  const green = `url(#${id}-green)`;
  const check = <path d="m-10 0 7 7 14-16" stroke="#17452D" strokeWidth="4" fill="none" />;
  const scenes: Record<string, ReactNode> = {
    "gst-registration": <>
      <rect x="81" y="31" width="138" height="153" rx="9" fill="#A5BCA5" transform="rotate(-8 150 108)" />
      <rect x="92" y="22" width="138" height="153" rx="9" fill={paper} />
      <text x="112" y="64" fontSize="28" fontWeight="700" stroke="none" fill="#17452D">GST</text>
      <path d="M113 85h94M113 100h76M113 115h48" />
      <circle cx="212" cy="151" r="30" fill={green} />
      <g transform="translate(212 151)">{check}</g>
      <path d="m195 176-4 24 20-10 17 10-2-24" fill="#A5BCA5" />
    </>,
    "gst-return-filing": <>
      <rect x="66" y="40" width="173" height="143" rx="12" fill={paper} />
      <path d="M66 79h173" /><path d="M101 28v27M202 28v27" stroke="#17452D" strokeWidth="7" />
      {[0,1,2].map(row => [0,1,2].map(col => <rect key={`${row}-${col}`} x={89+col*43} y={97+row*25} width="17" height="10" rx="3" fill="#A5BCA5" stroke="none" />))}
      <circle cx="233" cy="151" r="34" fill={green} />
      <path d="M215 151a18 18 0 0 1 30-13m0-10v12h-12M251 152a18 18 0 0 1-30 14m0 10v-12h12" stroke="#fff" />
    </>,
    "itr-filing": <>
      <path d="M84 27h104l27 27v128H84Z" fill={paper} /><path d="M188 27v29h27M105 108h69M105 124h52M105 140h39" />
      <text x="103" y="84" fontSize="28" fontWeight="700" stroke="none" fill="#17452D">ITR</text>
      <rect x="183" y="105" width="67" height="85" rx="10" fill={green} />
      <path d="M198 123h37M198 134h37m-32-11c22 0 22 23-3 23l28 27" stroke="#fff" strokeWidth="3" />
    </>,
    "accounting-bookkeeping": <>
      <path d="M55 47q48-19 100 3 52-22 103-3v128q-50-16-103 4-53-20-100-4Z" fill={paper} />
      <path d="M155 50v129M76 76h57M76 96h57M76 116h57M76 136h57M175 76h60M175 96h60M175 116h60M175 136h60M112 68v83M212 68v83" />
      <g transform="rotate(30 238 128)"><rect x="232" y="72" width="13" height="106" rx="3" fill={green} /><path d="m232 178 7 17 6-17" fill="#17452D" /></g>
    </>,
    "balance-sheet-finalization": <>
      <rect x="69" y="30" width="152" height="159" rx="9" fill={paper} />
      <path d="M89 52h79M89 65h52M89 162h110" />
      <rect x="94" y="124" width="20" height="30" rx="3" fill="#C5D9C2" /><rect x="128" y="103" width="20" height="51" rx="3" fill="#829A86" /><rect x="162" y="78" width="20" height="76" rx="3" fill={green} />
      <circle cx="222" cy="148" r="35" fill={green} /><path d="M222 113v35h35" fill="#DCE9D8" /><path d="m222 148-24 25" stroke="#fff" />
    </>,
    "company-incorporation": <>
      <path d="M67 183V72l91-37v148Z" fill={paper} /><path d="M158 35l65 37v111h-65Z" fill={green} />
      {[0,1,2].map(row => <g key={row}><path d={`M86 ${83+row*29}v12m23-20v12m23-20v12`} stroke="#829A86" strokeWidth="9" /><path d={`M176 ${80+row*29}v12m26-1v12`} stroke="#DCE9D8" strokeWidth="8" /></g>)}
      <path d="M125 183v-28h23v28M52 184h191" /><circle cx="239" cy="151" r="27" fill={paper} /><g transform="translate(239 151)">{check}</g>
    </>,
    "msme-registration": <>
      <rect x="66" y="85" width="166" height="100" rx="5" fill={paper} /><path d="M58 86 76 48h146l19 38Z" fill={green} />
      <path d="M78 50 67 86m46-36-4 36m40-36v36m35-36 5 36m23-36 12 36" stroke="#DCE9D8" strokeWidth="7" />
      <rect x="85" y="112" width="58" height="46" rx="3" fill="#DCE9D8" /><path d="M164 185v-74h45v74M114 112v46" />
      <circle cx="239" cy="152" r="29" fill={green} /><path d="M239 170v-35m0 14q-21 0-17-16 17 0 17 16m0 7q22-1 18-18-18 1-18 18" fill="#DCE9D8" />
    </>,
    "fssai-license": <>
      <circle cx="143" cy="115" r="66" fill={paper} /><circle cx="143" cy="115" r="48" />
      <path d="M57 54v40q0 15 15 15V181M72 54v55M87 54v40q0 15-15 15M242 55q-24 30-17 66h17V55v126" stroke="#5D8867" strokeWidth="5" />
      <path d="M185 115l37 13v27q-1 29-37 46-36-17-36-46v-27Z" fill={green} /><g transform="translate(185 155)">{check}</g>
    </>,
    "trademark-registration": <>
      <path d="m67 62 105-28 79 80-98 79-84-78Z" fill={paper} /><circle cx="96" cy="81" r="9" fill="#C5D9C2" />
      <path d="M95 72Q50 22 45 65q-3 29 42 24" />
      <text x="123" y="126" fontSize="43" fontWeight="700" fill="#17452D" stroke="none">TM</text>
      <circle cx="237" cy="158" r="30" fill={green} /><text x="220" y="171" fontSize="37" fill="#fff" stroke="none">®</text>
    </>,
    "epf-esi-registration": <>
      <circle cx="104" cy="83" r="22" fill="#A5BCA5" /><circle cx="211" cy="83" r="22" fill="#A5BCA5" />
      <path d="M62 164v-28a42 42 0 0 1 84 0v28M169 164v-28a42 42 0 0 1 84 0v28" fill={paper} />
      <path d="m158 76 44 17v46q0 35-44 57-44-22-44-57V93Z" fill={green} />
      <path d="M158 111v48M134 135h48" stroke="#fff" strokeWidth="11" />
    </>,
    "tender-filing": <>
      <rect x="59" y="49" width="193" height="125" rx="9" fill={green} /><rect x="69" y="59" width="173" height="103" rx="4" fill={paper} /><path d="M42 174h227l-14 16H56Z" fill="#A5BCA5" />
      <path d="M96 126V91l54-20 54 20v35M88 130h124M112 95v27m25-27v27m25-27v27m25-27v27" stroke="#5D8867" strokeWidth="4" />
      <circle cx="229" cy="153" r="30" fill={green} /><path d="M229 169v-31m-12 12 12-12 12 12" stroke="#fff" strokeWidth="4" />
    </>,
  };

  return (
    <svg viewBox="0 0 320 210" width="265" height="174" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-paper`} x1="70" y1="25" x2="230" y2="195" gradientUnits="userSpaceOnUse"><stop stopColor="#fff" /><stop offset="1" stopColor="#DCE9D8" /></linearGradient>
        <linearGradient id={`${id}-green`} x1="90" y1="35" x2="235" y2="190" gradientUnits="userSpaceOnUse"><stop stopColor="#A5BCA5" /><stop offset="1" stopColor="#287A45" /></linearGradient>
      </defs>
      <ellipse cx="160" cy="190" rx="118" ry="14" fill="#DCE9D8" opacity=".65" />
      <g stroke="#829A86" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{scenes[service.slug] ?? scenes["gst-registration"]}</g>
    </svg>
  );
}
