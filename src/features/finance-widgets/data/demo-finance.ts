import type { EntitySchedule } from "../types/finance";

export const entitySchedules: Record<string, EntitySchedule> = {
  proprietorship: {
    title: "Sole Proprietorship / Small Traders",
    deadlines: [
      { name: "GSTR-1 (Outward Supplies)", due: "11th of every month", category: "GST" },
      { name: "GSTR-3B (Summary Return & Tax)", due: "20th of every month", category: "GST" },
      { name: "Income Tax Return (ITR-3/4)", due: "31st July annually", category: "ITR" },
      { name: "Quarterly Advance Tax", due: "15th Jun / Sep / Dec / Mar", category: "Advance Tax" },
    ],
  },
  partnership: {
    title: "Partnership Firm / LLP",
    deadlines: [
      { name: "Monthly / Quarterly GST Filing", due: "11th & 20th monthly", category: "GST" },
      { name: "LLP Form 11 (Annual Return)", due: "30th May annually", category: "MCA" },
      { name: "LLP Form 8 (Statement of Accounts)", due: "30th October", category: "MCA" },
      { name: "ITR-5 Tax Filing", due: "31st July (or 31st Oct if audited)", category: "ITR" },
    ],
  },
  pvtltd: {
    title: "Private Limited Company",
    deadlines: [
      { name: "Monthly GSTR-1 & GSTR-3B", due: "Monthly cycle", category: "GST" },
      { name: "AOC-4 (Financial Statements)", due: "Within 30 days of AGM", category: "MCA" },
      { name: "MGT-7 (Annual Return)", due: "Within 60 days of AGM", category: "MCA" },
      { name: "ITR-6 Corporate Tax Return", due: "31st October annually", category: "ITR" },
    ],
  },
  ngo: {
    title: "NGO / Trust / Society",
    deadlines: [
      { name: "ITR-7 (Exempt Entities)", due: "31st October annually", category: "ITR" },
      { name: "Form 10B / 10BB Audit Report", due: "30th September annually", category: "Audit" },
      { name: "12A & 80G Renewal", due: "Periodic regulatory cycle", category: "Exemption" },
      { name: "NITI Aayog Darpan Updates", due: "Annual renewal", category: "Grants" },
    ],
  },
};
