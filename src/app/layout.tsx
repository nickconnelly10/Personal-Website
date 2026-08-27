import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nickconnelly.com"),
  title: {
    default: "Nicholas Connelly",
    template: "%s | Nicholas Connelly",
  },
  description: "Exploring health, finance, and the nature of things.",
  icons: {
    icon: "/favicon.svg",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Nicholas Connelly",
    description: "Exploring health, finance, and the nature of things.",
    url: "https://nickconnelly.com",
    siteName: "Nicholas Connelly",
    images: [
      {
        url: "/images/nick/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Nicholas Connelly",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nicholas Connelly",
    description: "Exploring health, finance, and the nature of things.",
    images: ["/images/nick/og-image.jpeg"],
    creator: "@nicklutk",
  },
  keywords: ["DeFi", "Bitcoin", "Health", "Medicine", "Finance", "Crypto", "Medical Student"],
  authors: [{ name: "Nicholas Connelly" }],
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:bg-white focus:px-4 focus:py-2 focus:rounded-md"
        >
          Skip to content
        </a>
        <NavBar />
        <main id="main-content">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
