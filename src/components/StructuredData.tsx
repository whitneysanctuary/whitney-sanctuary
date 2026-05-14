export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SingleFamilyResidence",
        "@id": "https://whitneysanctuary.com/#property",
        name: "The Whitney Sanctuary",
        alternateName: ["Whitney Compound", "7810 Stonehaven Drive"],
        description:
          "1.26-acre two-parcel luxury legacy compound in Waxhaw, NC. John Wieland Whitney floorplan with $201,000-$337,000 in 2025-2026 system renewals. Non-HOA rear parcel with Heritage Cabin, Japanese garden, and private creek.",
        url: "https://whitneysanctuary.com",
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
          latitude: 35.005,
          longitude: -80.725,
        },
        numberOfBedrooms: 6,
        numberOfBathroomsTotal: 5,
        numberOfRooms: 11,
        numberOfFullBathrooms: 5,
        floorSize: {
          "@type": "QuantitativeValue",
          value: 5454,
          unitCode: "FTK",
        },
        lotSize: {
          "@type": "QuantitativeValue",
          value: 1.26,
          unitText: "acres",
        },
        yearBuilt: "2002",
        image: [
          "https://whitneysanctuary.com/images/hero-facade.jpg",
          "https://whitneysanctuary.com/images/heritage-cabin.jpg",
          "https://whitneysanctuary.com/images/entry-maple.jpg",
          "https://whitneysanctuary.com/images/side-corridor.jpg",
        ],
        amenityFeature: [
          { "@type": "LocationFeatureSpecification", name: "Swimming Pool", value: true },
          { "@type": "LocationFeatureSpecification", name: "Hot Tub", value: true },
          { "@type": "LocationFeatureSpecification", name: "Wolf Dual-Fuel Range", value: true },
          { "@type": "LocationFeatureSpecification", name: "Sub-Zero Refrigeration", value: true },
          { "@type": "LocationFeatureSpecification", name: "Heated Marble Floors", value: true },
          { "@type": "LocationFeatureSpecification", name: "3-Car Garage", value: true },
          { "@type": "LocationFeatureSpecification", name: "Sunroom / Professional Studio", value: true },
          {
            "@type": "LocationFeatureSpecification",
            name: "Heritage Cabin",
            value: "150 sq ft reclaimed-wood structure with electrical service",
          },
          { "@type": "LocationFeatureSpecification", name: "Japanese Walking Garden", value: true },
          { "@type": "LocationFeatureSpecification", name: "Private Creek with Bridge", value: true },
          { "@type": "LocationFeatureSpecification", name: "Chicken Coop / Small Farm", value: true },
          {
            "@type": "LocationFeatureSpecification",
            name: "Non-HOA Rear Parcel",
            value: "0.784 acres, Town of Marvin zoning",
          },
        ],
        identifier: [
          { "@type": "PropertyValue", name: "MLS", value: "4362179" },
          { "@type": "PropertyValue", name: "Parcel-Primary", value: "06156102" },
          { "@type": "PropertyValue", name: "Parcel-Rear", value: "06156006R" },
          { "@type": "PropertyValue", name: "Deed", value: "Book 8351, Page 858" },
        ],
      },
      {
        "@type": "Offer",
        "@id": "https://whitneysanctuary.com/#offer",
        url: "https://whitneysanctuary.com",
        price: 2195000,
        priceCurrency: "USD",
        availability: "https://schema.org/PreOrder",
        availabilityStarts: "2026-06-01",
        validFrom: "2026-05-12",
        itemOffered: { "@id": "https://whitneysanctuary.com/#property" },
        seller: { "@id": "https://whitneysanctuary.com/#alex" },
      },
      {
        "@type": "Person",
        "@id": "https://whitneysanctuary.com/#alex",
        name: "Alex Purdy",
        jobTitle: "Principal & Steward",
        telephone: "+17049899005",
        email: "alex@whitneysanctuary.com",
        url: "https://whitneysanctuary.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "7810 Stonehaven Drive",
          addressLocality: "Waxhaw",
          addressRegion: "NC",
          postalCode: "28173",
          addressCountry: "US",
        },
      },
      {
        "@type": "RealEstateAgent",
        "@id": "https://whitneysanctuary.com/#brokerage",
        name: "Chosen Realty of NC LLC",
        description: "Flat-fee MLS listing brokerage",
        url: "https://whitneysanctuary.com",
      },
      {
        "@type": "WebSite",
        "@id": "https://whitneysanctuary.com/#website",
        url: "https://whitneysanctuary.com",
        name: "The Whitney Sanctuary",
        description:
          "Luxury legacy compound at 7810 Stonehaven Drive, Waxhaw NC. Offered at $2,195,000.",
        inLanguage: "en-US",
        publisher: { "@id": "https://whitneysanctuary.com/#alex" },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
