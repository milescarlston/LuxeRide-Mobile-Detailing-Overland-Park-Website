import type { Metadata, Viewport } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { organizationSchema } from "@/lib/schema";
import { BUSINESS } from "@/lib/constants";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A0A0A",
};

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.url),
  title: {
    default: `${BUSINESS.name} | Premium Mobile Detailing in Overland Park, KS`,
    template: `%s | ${BUSINESS.name} Overland Park`,
  },
  description:
    "Premium mobile car detailing in Overland Park, KS. We come to you with professional exterior & interior detailing, ceramic coating, and paint correction. Book today!",
  keywords: [
    "mobile car detailing Overland Park",
    "auto detailing Overland Park KS",
    "car detailing near me",
    "ceramic coating Overland Park",
    "paint correction Kansas City",
    "mobile detailing Kansas City",
  ],
  authors: [{ name: BUSINESS.name }],
  creator: BUSINESS.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BUSINESS.url,
    siteName: BUSINESS.name,
    title: `${BUSINESS.name} | Premium Mobile Detailing in Overland Park, KS`,
    description:
      "Premium mobile car detailing in Overland Park, KS. We come to you with professional detailing, ceramic coating, and paint correction.",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: `${BUSINESS.name} - Premium Mobile Car Detailing`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BUSINESS.name} | Premium Mobile Detailing in Overland Park, KS`,
    description:
      "Premium mobile car detailing in Overland Park, KS. We come to you with professional detailing, ceramic coating, and paint correction.",
    images: ["/images/og-default.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: BUSINESS.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfair.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="flex min-h-screen flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema()),
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
