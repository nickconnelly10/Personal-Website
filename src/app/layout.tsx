import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Nicholas Connelly",
  description: "Exploring health, finance, and the nature of things.",
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: "Nicholas Connelly",
    description: "Exploring health, finance, and the nature of things.",
    url: "https://nickconnelly.com",
    siteName: "Nicholas Connelly",
    images: [
      {
        url: "https://nickconnelly.com/images/nick/nicholas-personal-2.jpeg?w=1200&h=630&fit=crop&crop=center",
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
    images: ["https://nickconnelly.com/images/nick/nicholas-personal-2.jpeg?w=1200&h=630&fit=crop&crop=center"],
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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="canonical" href="https://nickconnelly.com" />
      </head>
      <body className="antialiased">
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
