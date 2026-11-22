import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ASAD Accounting & Tax Solution — Pakur, Jharkhand",
  description:
    "Your Partner in Accounting, Taxation & Business Compliance. Professional GST, ITR, company registration, and financial reporting services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans antialiased selection:bg-sage-200 selection:text-brand-950">
        {children}
      </body>
    </html>
  );
}
