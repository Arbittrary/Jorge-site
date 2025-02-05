import type { Metadata } from "next";
import type { Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#050518",
};

export const metadata: Metadata = {
  title: "Homepage \u2014 Jorge Ortiz",
  description: "Hire Jorge Ortiz for your next project.",
  generator: "Next.js",
  applicationName: "Jorge Ortiz",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Web Dev",
    "Jorge Ortiz",
    "Developer",
    "Freelance",
    "Hire",
    "Full-Stack",
    "Front-End",
    "Back-End",
    "React",
    "Node",
  ],
  authors: [{ name: "Jorge Ortiz" }, { name: "Dalphan" }],
  creator: "Jorge Ortiz",
  publisher: "Jorge Ortiz",
  // metadataBase: "https://jorge-site.vercel.app/" as URL,
  twitter: {
    card: "summary_large_image",
    title: "Jorge Ortiz",
    description: "Hire Jorge Ortiz for your next project.",
    siteId: "4821638103",
    creator: "@Arbittrary",
    creatorId: "4821638103",
    images: ["https://dalphan-site.vercel.app/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#050518]">
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
