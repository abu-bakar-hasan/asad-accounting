import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { business } from "@/config/business";
import { cn } from "@/lib/utils";

export function WhatsAppButton({
  text = "Chat on WhatsApp",
  className,
}: {
  text?: string;
  className?: string;
}) {
  return (
    <a
      href={getWhatsAppUrl(business.phone)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "bg-brand-900 hover:bg-brand-800 text-white font-medium px-6 py-3.5 rounded-xl transition-colors inline-flex items-center justify-center gap-2 text-sm shadow-sm",
        className
      )}
    >
      <span>{text}</span>
      <HugeiconsIcon icon={ArrowUpRight01Icon} size={16} />
    </a>
  );
}
