"use client";

import { useId } from "react";
import { chartGrowth, useChartTime } from "./use-chart-time";

export function AccountingBars() {
  const { container, time } = useChartTime();
  const id = useId();
  const step = 2.4;
  const newest = Math.floor(time / step);
  const head = chartGrowth(time);

  return (
    <div ref={container} className="relative select-none pointer-events-none w-24 h-20 sm:w-28 sm:h-24 shrink-0 overflow-hidden">
      <svg viewBox="0 0 120 100" fill="none" className="w-full h-full" aria-hidden="true">
        <defs>
          <linearGradient id={`${id}-bar`} x1="0" y1="0" x2="0" y2="1"><stop stopColor="#287A45" /><stop offset="1" stopColor="#C5D9C2" /></linearGradient>
          <linearGradient id={`${id}-edge`}><stop stopColor="white" stopOpacity="0" /><stop offset=".12" stopColor="white" /><stop offset=".88" stopColor="white" /><stop offset="1" stopColor="white" stopOpacity="0" /></linearGradient>
          <mask id={`${id}-mask`}><rect width="120" height="100" fill={`url(#${id}-edge)`} /></mask>
        </defs>
        {[32,62,92].map(level => <path key={level} d={`M0 ${level}h120`} stroke="#E5EAE3" strokeWidth=".7" />)}
        <g mask={`url(#${id}-mask)`}>
          {Array.from({ length: 8 }, (_, index) => {
            const sample = (newest-index)*step;
            const age = time-sample;
            const x = 120-age/step*20;
            const height = Math.max(0, 80-(head-chartGrowth(sample))*.95);
            // A new bar grows while entering through the right edge.
            const reveal = Math.min(1, age/1.2);
            const grownHeight = height*reveal;
            return <rect key={newest-index} x={x} y={92-grownHeight} width="13" height={grownHeight} rx="3" fill={`url(#${id}-bar)`} />;
          })}
        </g>
      </svg>
    </div>
  );
}
