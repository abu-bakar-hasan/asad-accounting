import type { ServiceCategory } from "../types/service";

export const categories: ServiceCategory[] = [
  {
    id: "taxation",
    name: "Taxation & GST",
    description: "Advisory, return filings, and registrations for GST and Income Tax.",
  },
  {
    id: "accounting",
    name: "Accounting & Audit",
    description: "Bookkeeping, financial statement finalization, and bank report preparation.",
  },
  {
    id: "registration",
    name: "Business Registration",
    description: "Corporate, partnership, and non-profit firm incorporation.",
  },
  {
    id: "licenses",
    name: "Licenses & Certifications",
    description: "Mandatory government approvals, MSME, FSSAI, and digital signatures.",
  },
  {
    id: "legal",
    name: "Legal & Compliance",
    description: "Statutory labor benefits, deed drafting, and legal documentation.",
  },
  {
    id: "tender",
    name: "Tender & Documentation",
    description: "E-tender bid preparation, portal registrations, and grant applications.",
  },
];
