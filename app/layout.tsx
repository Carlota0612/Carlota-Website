import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://carlota-ortiz.onrender.com"),
  title: {
    default: "Carlota Ortiz | Senior HR Business Partner",
    template: "%s | Carlota Ortiz",
  },
  description:
    "Modern personal website for Carlota Ortiz, Senior HR Business Partner focused on people strategy, organisational design, and strategic hiring for technology and research organisations.",
  applicationName: "Carlota Ortiz Personal Website",
  authors: [{ name: "Carlota Ortiz" }],
  keywords: [
    "Carlota Ortiz",
    "Senior HR Business Partner",
    "people strategy",
    "organisational design",
    "strategic hiring",
    "technology organisations",
    "research organisations",
  ],
  openGraph: {
    title: "Carlota Ortiz | Senior HR Business Partner",
    description:
      "Building the teams behind breakthrough technology through people strategy, organisational design, and strategic hiring.",
    url: "https://carlota-ortiz.onrender.com",
    siteName: "Carlota Ortiz",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Carlota Ortiz | Senior HR Business Partner",
    description:
      "People strategy, organisational design, and strategic hiring for technology and research organisations.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  );
}
