import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import type { Service } from "../types/service";

export function ServiceCard({
  service,
  highlight = false,
}: {
  service: Service;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl p-7 flex flex-col justify-between transition-all duration-200 border ${
        highlight
          ? "bg-sage-100 border-sage-300 shadow-md"
          : "bg-surface border-border hover:shadow-lg hover:border-sage-400"
      }`}
    >
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
          <p className="text-sm text-muted mt-2 leading-relaxed">
            {service.shortDescription}
          </p>
        </div>

        {service.benefits && service.benefits.length > 0 && (
          <ul className="space-y-2 pt-3 border-t border-border/80">
            {service.benefits.slice(0, 3).map((benefit, idx) => (
              <li
                key={idx}
                className="text-xs text-foreground font-medium leading-relaxed"
              >
                • {benefit}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="pt-6 mt-6 border-t border-border/60">
        <Link
          href={`/services/${service.slug}`}
          className={`w-full py-2.5 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-colors ${
            highlight
              ? "bg-brand-900 hover:bg-brand-800 text-white"
              : "border border-brand-900 text-brand-900 hover:bg-sage-100"
          }`}
        >
          <span>View Details & Requirements</span>
          <HugeiconsIcon icon={ArrowRight01Icon} size={14} />
        </Link>
      </div>
    </div>
  );
}
