import type { Service } from "../types/service";

export const services: Service[] = [
  {
    slug: "gst-registration",
    title: "GST Registration",
    shortDescription: "End-to-end assistance with GST registration for businesses and traders in Pakur.",
    category: "taxation",
    featured: true,
    description:
      "Complete assistance with new Goods and Services Tax (GST) registration, documentation verification, and application submission on the GST Portal.",
    benefits: [
      "Expert verification of electricity bills, rent agreements, and identity documents",
      "Correct selection of HSN / SAC codes to avoid future amendment notices",
      "Fast ARN tracking and timely certificate generation",
    ],
    documents: [
      "PAN Card & Aadhaar Card of Proprietor / Partners / Directors",
      "Business premises proof (Electricity bill / Municipal Tax Receipt)",
      "Rent Agreement and NOC from property owner",
      "Bank Account details or cancelled cheque",
    ],
    faqs: [
      {
        question: "Who is required to take GST registration?",
        answer:
          "Businesses selling goods with aggregate annual turnover exceeding ₹40 Lakhs (₹20 Lakhs for services) or engaging in interstate commerce are required to register.",
      },
      {
        question: "How long does it take to obtain GST registration?",
        answer:
          "Typically 3 to 7 working days once all verified documents are submitted without portal queries.",
      },
    ],
  },
  {
    slug: "gst-return-filing",
    title: "GST Return Filing",
    shortDescription: "Timely monthly and quarterly GSTR-1 and GSTR-3B filings with ITC reconciliation.",
    category: "taxation",
    featured: true,
    description:
      "Accurate monthly and quarterly return preparation to claim eligible Input Tax Credit (ITC) under GSTR-2B and stay free of late fees and penalties.",
    benefits: [
      "Purchase bill reconciliations against GSTR-2B to maximize legal tax credits",
      "Timely filing before the 11th (GSTR-1) and 20th (GSTR-3B)",
      "Zero-penalty compliance tracking and annual return (GSTR-9) preparation",
    ],
    documents: [
      "Sales invoices / register for the period",
      "Purchase invoices and expense bills",
      "Bank statement for reconciliation",
    ],
  },
  {
    slug: "itr-filing",
    title: "Income Tax Return (ITR) Filing",
    shortDescription: "Income tax filing for salaried individuals, professionals, traders, and businesses.",
    category: "taxation",
    featured: true,
    description:
      "Expert preparation and e-filing of ITR-1, ITR-2, ITR-3, ITR-4, ITR-5, and ITR-6 with computation of total taxable income and advance tax verification.",
    benefits: [
      "Verification of Form 26AS, AIS, and TIS to avoid mismatch notices",
      "Optimal deduction claims under applicable sections of the Income Tax Act",
      "Prompt e-verification and refund status tracking",
    ],
    documents: [
      "PAN Card and Aadhaar Card",
      "Form 16 / Salary slips (for salaried individuals)",
      "Bank account statements for all accounts held during the financial year",
      "Investment and insurance receipts (LIC, PPF, health insurance)",
    ],
  },
  {
    slug: "accounting-bookkeeping",
    title: "Accounting & Bookkeeping",
    shortDescription: "Systematic day-to-day accounts maintenance, ledger reconciliation, and tally entries.",
    category: "accounting",
    featured: true,
    description:
      "Reliable accounting services tailored for local retail stores, wholesalers, contractors, and firms in Pakur to maintain clear transaction ledgers and financial hygiene.",
    benefits: [
      "Accurate ledger maintenance and bank reconciliation statements (BRS)",
      "Periodic financial reports for business owners to track margins and expenses",
      "Readiness for year-end statutory and internal audits",
    ],
    documents: [
      "Bank statements and passbooks",
      "Cash expense vouchers and bills",
      "Sales and purchase register records",
    ],
  },
  {
    slug: "balance-sheet-finalization",
    title: "Balance Sheet & CMA Project Reports",
    shortDescription: "Profit & Loss statements, balance sheet finalization, and bank loan CMA reports.",
    category: "accounting",
    featured: false,
    description:
      "Preparation of final accounts, depreciation schedules, and comprehensive Credit Monitoring Arrangement (CMA) reports required by commercial banks for CC limits and term loans.",
    benefits: [
      "Prepared by CMA Finalist with rigorous financial modeling standards",
      "Accepted by leading public and private banks for working capital and loan proposals",
      "Clear ratio analysis and projected financial statements",
    ],
  },
  {
    slug: "company-incorporation",
    title: "Company & LLP Incorporation",
    shortDescription: "Private Limited, OPC, and LLP registration on the Ministry of Corporate Affairs (MCA).",
    category: "registration",
    featured: true,
    description:
      "Complete startup legal setup including name approval (RUN), digital signatures (DSC), DIN allocation, MOA & AOA drafting, and certificate of incorporation.",
    benefits: [
      "Limited liability protection and formal corporate stature",
      "PAN, TAN, EPFO, ESIC, and Bank Account opening integrated with SPICe+",
      "Guidance on share capital structure and director appointments",
    ],
    documents: [
      "PAN and identity proof for all directors",
      "Address proof (Voter ID, Passport, or Driving License)",
      "Registered office premises ownership proof or lease deed with NOC",
    ],
  },
  {
    slug: "msme-registration",
    title: "MSME / Udyam Registration",
    shortDescription: "Free government recognition certificate for small enterprises and traders.",
    category: "licenses",
    featured: false,
    description:
      "Quick registration on the Udyam portal to unlock priority sector lending, lower bank interest rates, and government subsidy eligibility.",
    benefits: [
      "Eligible for collateral-free bank loans and lower interest rates",
      "Protection against delayed payments from buyers",
      "Subsidy eligibility on trademark registrations and ISO certifications",
    ],
  },
  {
    slug: "fssai-license",
    title: "FSSAI Food License",
    shortDescription: "Mandatory food safety registration and licensing for restaurants, grocery, and food units.",
    category: "licenses",
    featured: false,
    description:
      "Food Safety and Standards Authority of India (FSSAI) Basic Registration and State License application filing with all mandatory layout and food safety declarations.",
  },
  {
    slug: "trademark-registration",
    title: "Trademark & Brand Registration",
    shortDescription: "Legal protection for your business name, logo, and brand identity across India.",
    category: "licenses",
    featured: false,
    description:
      "Comprehensive trademark search across trademark classes, application filing with the IP India registry, and notice handling.",
  },
  {
    slug: "epf-esi-registration",
    title: "EPF & ESI Statutory Compliance",
    shortDescription: "Employee provident fund and state insurance registration and monthly challan filings.",
    category: "legal",
    featured: false,
    description:
      "Establishment registration and monthly return generation for Employee Provident Fund (EPFO) and Employee State Insurance (ESIC) to protect your workforce.",
  },
  {
    slug: "tender-filing",
    title: "Government E-Tender Assistance",
    shortDescription: "Technical and financial bid preparation and e-Procurement portal submissions.",
    category: "tender",
    featured: false,
    description:
      "Assistance for civil contractors and suppliers with digital signature token mapping, solvency certificates, tender fee documentation, and online bid submission.",
  },
];
