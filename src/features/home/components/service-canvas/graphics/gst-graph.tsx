"use client";

import { useId } from "react";
import { sampledGrowth, useChartTime } from "./use-chart-time";

export function GstGraph() {
  const { container, time } = useChartTime();
  const id = useId();
  const duration = 24;
  const left = 18;
  const right = 296;
  const bottom = 161;
  const step = 1;
  const head = time * 3.5;
  const y = (sample: number) => 45 + head - sampledGrowth(sample);
  const x = (sample: number) => right - (time - sample) / duration * (right - left);
  const first = Math.floor((time - duration) / step);
  const last = Math.floor(time / step);
  const points = Array.from({ length: last - first + 1 }, (_, index) => {
    const sample = (first + index) * step;
    return { x: x(sample), y: y(sample) };
  });
  const tipY = y(time);
  points.push({ x: right, y: tipY });
  const line = points.map((point, index) => `${index ? "L" : "M"}${point.x.toFixed(3)} ${point.y.toFixed(3)}`).join(" ");

  return (
    <div ref={container} className="w-full pt-2 overflow-hidden select-none pointer-events-none">
      <svg viewBox="0 0 320 180" fill="none" className="w-full h-auto" aria-hidden="true">
        <defs>
          <linearGradient id={`${id}-area`} x1="0" y1="25" x2="0" y2="161" gradientUnits="userSpaceOnUse">
            <stop stopColor="#C5D9C2" stopOpacity=".65" /><stop offset="1" stopColor="#C5D9C2" stopOpacity="0" />
          </linearGradient>
          <clipPath id={`${id}-clip`}><rect x={left} y="12" width={right-left+1} height={bottom-12} /></clipPath>
        </defs>
        {[41,81,121,161].map(level => <line key={level} x1={left} x2={right} y1={level} y2={level} stroke="white" strokeOpacity=".09" />)}
        <g clipPath={`url(#${id}-clip)`}>
          <path d={`${line} L${right} ${bottom} L${points[0].x} ${bottom}Z`} fill={`url(#${id}-area)`} />
          <path d={line} stroke="#DCE9D8" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
          {points.slice(0, -1).map((point, index) => <circle key={first+index} cx={point.x} cy={point.y} r="2.5" fill="#DCE9D8" stroke="#17452D" strokeWidth="1" />)}
        </g>
        <line x1={right} x2={right} y1={tipY} y2={bottom} stroke="#DCE9D8" strokeOpacity=".2" strokeDasharray="3 4" />
        <circle cx={right} cy={tipY} r="8" fill="#DCE9D8" fillOpacity=".13" />
        <circle cx={right} cy={tipY} r="3.5" fill="white" />
      </svg>
    </div>
  );
}

