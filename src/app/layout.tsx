import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Mono } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/components/NavigationBar";
import CustomCursor from "@/components/CustomCursor";
import GrainOverlay from "@/components/GrainOverlay";
import Preloader from "@/components/Preloader";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
});

export const metadata: Metadata = {
  title: "Pixel & Grid — The Digital Designers",
  description: "Boutique digital design studio specialising in UI/UX, brand identity, and web experience.",
  openGraph: {
    title: "Pixel & Grid — The Digital Designers",
    description: "Boutique digital design studio specialising in UI/UX, brand identity, and web experience.",
    url: "https://pixelandgrid.studio",
    siteName: "Pixel & Grid Studio",
    locale: "en_IE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pixel & Grid — The Digital Designers",
    description: "Boutique digital design studio specialising in UI/UX, brand identity, and web experience.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Pixel & Grid",
    "image": "https://pixelandgrid.studio/logo.png",
    "@id": "https://pixelandgrid.studio/#agency",
    "url": "https://pixelandgrid.studio",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "New Delhi",
      "addressRegion": "Delhi",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://twitter.com/pixelandgrid",
      "https://www.instagram.com/pixelandgrid",
      "https://www.linkedin.com/company/pixelandgrid"
    ],
    "description": "Boutique digital design studio specialising in UI/UX, brand identity, and web experience."
  };

  return (
    <html lang="en" className={`${cormorant.variable} ${dmMono.variable}`}>
      <body className="antialiased selection:bg-gold selection:text-paper overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Preloader />
        <GrainOverlay />
        <CustomCursor />
        <header role="banner">
          <NavigationBar />
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
