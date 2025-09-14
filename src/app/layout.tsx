import type { Metadata } from "next";
import "./globals.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Nicholas Connelly",
  description: "Dedicated to all forms of creation. Building software, creating health solutions, and writing to make the world a little better.",
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: "Nicholas Connelly - Health and Financial Self-Sovereignty",
    description: "Dedicated to all forms of creation. Building software, creating health solutions, and writing to make the world a little better.",
    url: "https://nicholasconnelly.box",
    siteName: "Nicholas Connelly",
    images: [
      {
        url: "https://nicholasconnelly.box/images/nicholas-connelly-personal-photo.jpeg",
        width: 1200,
        height: 630,
        alt: "Nicholas Connelly",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nicholas Connelly - Health and Financial Self-Sovereignty",
    description: "Dedicated to all forms of creation. Building software, creating health solutions, and writing to make the world a little better.",
    creator: "@nicklutk",
  },
  keywords: ["DeFi", "Bitcoin", "Health", "Medicine", "Self-Sovereignty", "Finance", "Crypto", "Medical Student"],
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
        <link rel="canonical" href="https://nicholasconnelly.box" />
      </head>
      <body className="antialiased">
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
