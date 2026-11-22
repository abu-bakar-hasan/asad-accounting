import styles from "./service-objects.module.css";

export function TaxDonut() {
  return (
    <div className="relative flex items-center justify-center select-none pointer-events-none w-20 h-20 sm:w-24 sm:h-24 shrink-0">
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${styles.donut} w-full h-full`}
        aria-hidden="true"
      >
        {/* Base hollow background ring */}
        <circle
          cx="50"
          cy="50"
          r="34"
          stroke="#F1F3EF"
          strokeWidth="13"
          fill="none"
        />

        {/* Primary Segment - Deep Forest Green (~65%) */}
        {/* Circumference = 2 * PI * 34 ≈ 213.63 */}
        <circle
          cx="50"
          cy="50"
          r="34"
          stroke="#17452D"
          strokeWidth="13"
          strokeDasharray="138 75.63"
          strokeDashoffset="0"
          strokeLinecap="round"
          fill="none"
        />

        {/* Secondary Segment - Sage Green (~35%) */}
        <circle
          cx="50"
          cy="50"
          r="34"
          stroke="#829A86"
          strokeWidth="13"
          strokeDasharray="66 147.63"
          strokeDashoffset="-144"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </div>
  );
}

