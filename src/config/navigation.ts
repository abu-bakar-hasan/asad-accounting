export interface NavItem {
  title: string;
  href: string;
}

export const navigationConfig: {
  mainNav: NavItem[];
  footerNav: {
    services: NavItem[];
    company: NavItem[];
    legal: NavItem[];
  };
} = {
  mainNav: [
    { title: "Home", href: "/" },
    { title: "Services", href: "/services" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
  ],
  footerNav: {
    services: [
      { title: "GST Registration", href: "/services/gst-registration" },
      { title: "GST Return Filing", href: "/services/gst-return-filing" },
      { title: "Income Tax Return (ITR)", href: "/services/itr-filing" },
      { title: "Accounting & Bookkeeping", href: "/services/accounting-bookkeeping" },
      { title: "Company Incorporation", href: "/services/company-incorporation" },
      { title: "MSME Registration", href: "/services/msme-registration" },
    ],
    company: [
      { title: "About Md Asad Ansari", href: "/about" },
      { title: "All Services", href: "/services" },
      { title: "Office Locations", href: "/contact#locations" },
      { title: "Book a Consultation", href: "/contact" },
    ],
    legal: [
      { title: "Privacy Policy", href: "/privacy-policy" },
      { title: "Terms & Conditions", href: "/terms" },
    ],
  },
};
