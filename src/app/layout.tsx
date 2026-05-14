import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import Script from "next/script";
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

const siteUrl = "https://whitneysanctuary.com";
const heroImage = `${siteUrl}/images/hero-facade.jpg`;

export const metadata: Metadata = {
  title:
    "The Whitney Sanctuary | All Systems Renewed 2025–2026 | 1.26-Acre Legacy Compound | Waxhaw, NC | $2,195,000",
  description:
    "1.26-acre dual-parcel compound at 7810 Stonehaven Drive, Waxhaw NC. $201,000–$337,000 in documented system renewals: roof, HVAC, 37-window fenestration package, grand entry, gutters, crawlspace, pool systems, plumbing, electrical, landscaping, and more. Pre-inspection certified. Wolf/Sub-Zero culinary suite. Non-HOA rear lot with Japanese garden. Offered at $2,195,000.",
  keywords: [
    "Luxury Waxhaw Estate",
    "John Wieland Whitney for Sale",
    "Marvin NC Relocation",
    "Weddington Chase luxury home",
    "Charlotte compound for sale",
    "Non-HOA estate NC",
  ],
  openGraph: {
    title:
      "The Whitney Sanctuary | All Systems Renewed 2025–2026 | 1.26-Acre Legacy Compound | Waxhaw, NC | $2,195,000",
    description:
      "1.26-acre dual-parcel compound at 7810 Stonehaven Drive, Waxhaw NC. $201,000–$337,000 in documented system renewals: roof, HVAC, 37-window fenestration package, grand entry, gutters, crawlspace, pool systems, plumbing, electrical, landscaping, and more. Pre-inspection certified. Wolf/Sub-Zero culinary suite. Non-HOA rear lot with Japanese garden. Offered at $2,195,000.",
    url: siteUrl,
    siteName: "The Whitney Sanctuary",
    images: [
      {
        url: heroImage,
        width: 2400,
        height: 1350,
        alt: "The Whitney Sanctuary full-brick facade illuminated at night, 7810 Stonehaven Drive Waxhaw NC",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "The Whitney Sanctuary | All Systems Renewed 2025–2026 | $2,195,000",
    description:
      "1.26-acre dual-parcel compound at 7810 Stonehaven Drive, Waxhaw NC. $201,000–$337,000 in documented system renewals. Pre-inspection certified. Wolf/Sub-Zero culinary suite. Non-HOA rear lot. Offered at $2,195,000.",
    images: [heroImage],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SingleFamilyResidence",
      name: "The Whitney Sanctuary: Legacy Compound",
      description:
        "1.26-acre dual-parcel compound at 7810 Stonehaven Drive, Waxhaw NC. $201,000–$337,000 in documented system renewals. All major systems renewed 2025–2026. Pre-inspection certified. Wolf/Sub-Zero culinary suite. Non-HOA rear lot with Japanese garden and heritage cabin.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "7810 Stonehaven Drive",
        addressLocality: "Waxhaw",
        addressRegion: "NC",
        postalCode: "28173",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 34.9388,
        longitude: -80.7367,
      },
      numberOfRooms: 11,
      numberOfBedrooms: 6,
      numberOfBathroomsTotal: 5,
      floorSize: {
        "@type": "QuantitativeValue",
        value: 5454,
        unitCode: "FTK",
      },
      lotSize: {
        "@type": "QuantitativeValue",
        value: 1.26,
        unitCode: "ACR",
      },
      yearBuilt: 2002,
      image: heroImage,
      url: siteUrl,
    },
    {
      "@type": "RealEstateAgent",
      name: "Alex Purdy",
      url: siteUrl,
      telephone: "+1-704-989-9005",
      email: "alex@whitneysanctuary.com",
      areaServed: {
        "@type": "City",
        name: "Waxhaw",
        containedInPlace: { "@type": "State", name: "North Carolina" },
      },
    },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-white antialiased">
        {children}

        {/* GTM — replace GTM-XXXXXXX with your container ID */}
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

        {/* Meta Pixel — replace XXXXXXXXXX with your Pixel ID */}
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
