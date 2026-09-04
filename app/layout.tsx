import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  metadataBase: new URL("https://yutoridesigns.in"),
  title: {
    default: "Interior Designers in Mangalore & Udupi | Yutori Designs",
    template: "%s | Yutori Designs",
  },
  description:
    "Yutori Designs is a leading interior design and turnkey execution studio in Mangalore and Udupi, Karnataka. We design offices, homes, hotels, and commercial spaces across coastal Karnataka.",
  keywords: [
    "interior designers Mangalore",
    "interior design Mangalore",
    "interior contractors Mangalore",
    "interior designers Udupi",
    "interior design Udupi",
    "commercial interior design Mangalore",
    "residential interior design Mangalore",
    "office interior design Mangalore",
    "turnkey interior projects Mangalore",
    "best interior designers Mangalore",
    "interior design company Udupi",
    "home interior design Mangalore",
    "interior decorators Mangalore",
    "interior design coastal Karnataka",
  ],
  authors: [{ name: "Yutori Designs", url: "https://yutoridesigns.in" }],
  creator: "Yutori Designs",
  publisher: "Yutori Designs",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://yutoridesigns.in",
    siteName: "Yutori Designs",
    title: "Interior Designers in Mangalore & Udupi | Yutori Designs",
    description:
      "Leading interior design and turnkey execution studio in Mangalore and Udupi. Commercial offices, homes, hotels, and retail spaces across coastal Karnataka.",
    images: [
      {
        url: "/images/brand/og-image.png",
        width: 1200,
        height: 630,
        alt: "Yutori Designs — Interior Designers in Mangalore & Udupi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Interior Designers in Mangalore & Udupi | Yutori Designs",
    description:
      "Leading interior design and turnkey execution studio in Mangalore and Udupi.",
    images: ["/images/brand/og-image.png"],
  },
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
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,500&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
