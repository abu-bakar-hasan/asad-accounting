"use client";

import { useId } from "react";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import type { Service } from "../types/service";
import { ServiceVisual } from "./service-visual";


export function ExpandingServiceRow({ service, index, expanded, onExpand, onCollapse, onToggle }: {
  service: Service;
  index: number;
  expanded: boolean;
  onExpand: () => void;
  onCollapse: () => void;
  onToggle: () => void;
}) {
  const visualId = useId();
  return (
    <article
      className="service-expand-row"
      data-expanded={expanded}
      onPointerEnter={(event) => { if (event.pointerType === "mouse") onExpand(); }}
      onPointerLeave={(event) => { if (event.pointerType === "mouse") onCollapse(); }}
      onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) onCollapse(); }}
      onKeyDown={(event) => { if (event.key === "Escape" && expanded) onToggle(); }}
    >
      <h3 className="service-expand-heading">
        <button
          type="button"
          className="service-expand-trigger"
          aria-expanded={expanded}
          aria-controls={visualId}
          onClick={onToggle}
        >
          <span className="service-expand-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
          <span className="service-expand-copy">
            <span className="service-expand-title">{service.title}</span>
            <span className="service-expand-description">{service.shortDescription}</span>
          </span>
        </button>
      </h3>
      <div id={visualId} className="service-expand-visual" aria-hidden="true"><ServiceVisual service={service} /></div>
      <Link href={`/services/${service.slug}`} className="service-expand-link" aria-label={`View ${service.title}`}>
        <span>View service</span>
        <HugeiconsIcon icon={ArrowUpRight01Icon} size={20} />
      </Link>
    </article>
  );
}

