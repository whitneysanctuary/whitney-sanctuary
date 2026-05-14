import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://whitneysanctuary.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
      images: [
        "https://whitneysanctuary.com/images/hero-facade.jpg",
        "https://whitneysanctuary.com/images/heritage-cabin.jpg",
        "https://whitneysanctuary.com/images/entry-maple.jpg",
      ],
    },
    {
      url: "https://whitneysanctuary.com/infrastructure-report.pdf",
      lastModified: new Date("2026-05-14"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
