import type { Metadata, Viewport } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import Script from "next/script";
import StructuredData from "@/components/StructuredData";
import Clarity from "@/components/Clarity";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
  weight: ["400", "600", "700"],
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://whitneysanctuary.com"),
  title: {
    default:
      "The Whitney Sanctuary — 1.26-Acre Legacy Compound | Waxhaw NC | $2,025,000",
    template: "%s | The Whitney Sanctuary",
  },
  description:
    "Luxury two-parcel compound at 7810 Stonehaven Drive. John Wieland Whitney floorplan, 5,454 sq ft, 6BR/5BA. $201,000–$337,000 in 2025-2026 system renewals. Non-HOA rear parcel with Heritage Cabin and Japanese garden. MLS #4362179. Active 6/1/2026.",
  keywords: [
    "Waxhaw NC luxury homes",
    "John Wieland Whitney for sale",
    "Marvin NC luxury real estate",
    "Weddington Chase homes",
    "non-HOA luxury homes North Carolina",
    "Charlotte luxury compound",
    "7810 Stonehaven Drive",
    "luxury homes near Charlotte NC",
    "Union County luxury real estate",
    "relocation North Carolina from California",
    "tax advantage real estate NC",
    "$2 million homes Charlotte",
    "principal-led real estate sale NC",
  ],
  authors: [{ name: "Alex Purdy", url: "https://whitneysanctuary.com" }],
  creator: "Alex Purdy",
  publisher: "The Whitney Sanctuary",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://whitneysanctuary.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://whitneysanctuary.com",
    siteName: "The Whitney Sanctuary",
    title: "The Whitney Sanctuary — Legacy Compound | $2,025,000",
    description:
      "1.26-acre two-parcel luxury compound in Waxhaw NC. $201,000–$337,000 in documented 2025-2026 system renewals. Pre-inspection certified. MLS #4362179.",
    images: [
      {
        url: "https://whitneysanctuary.com/images/hero-facade.jpg",
        width: 2400,
        height: 1350,
        alt: "The Whitney Sanctuary full-brick facade illuminated at night, 7810 Stonehaven Drive Waxhaw NC",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Whitney Sanctuary — $2,025,000 | Waxhaw NC",
    description:
      "1.26-acre two-parcel luxury compound. $201,000–$337,000 in 2025-2026 system renewals. Non-HOA rear parcel.",
    images: ["https://whitneysanctuary.com/images/hero-facade.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "Real Estate",
  applicationName: "The Whitney Sanctuary",
  referrer: "origin-when-cross-origin",
};

export const viewport: Viewport = {
  themeColor: "#1B2A4A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${sourceSans.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-white antialiased">
        <StructuredData />
        <Clarity />
        {children}

        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-XXXXXXX');`,
          }}
        />

        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window,document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init','XXXXXXXXXX');
              fbq('track','PageView');`,
          }}
        />
      </body>
    </html>
  );
}
