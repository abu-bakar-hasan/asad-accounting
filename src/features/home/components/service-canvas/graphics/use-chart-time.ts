"use client";

import { useEffect, useRef, useState } from "react";

// An accumulated clock, never a looping animation percentage.
export function useChartTime() {
  const container = useRef<HTMLDivElement>(null);
  const [time, setTime] = useState(0);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let previous: number | null = null;
    let elapsed = 0;
    let visible = true;
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; });
    if (container.current) observer.observe(container.current);
    const tick = (now: number) => {
      if (previous !== null && visible && !document.hidden) {
        elapsed += Math.min(now - previous, 100) / 1000;
        setTime(elapsed);
      }
      previous = now;
      frame = requestAnimationFrame(tick);
    };
    const sync = () => {
      cancelAnimationFrame(frame);
      previous = null;
      if (!preference.matches) frame = requestAnimationFrame(tick);
    };
    sync();
    preference.addEventListener("change", sync);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      preference.removeEventListener("change", sync);
    };
  }, []);

  return { container, time };
}

// An upward trend with visible rises and dips; the camera follows the trend.
export function chartGrowth(time: number) {
  return time * 3.5 + Math.sin(time * .74) * 15 + Math.sin(time * 1.63) * 7;
}

export function sampledGrowth(time: number, step = 1) {
  const start = Math.floor(time / step) * step;
  const progress = (time - start) / step;
  return chartGrowth(start) * (1 - progress) + chartGrowth(start + step) * progress;
}

