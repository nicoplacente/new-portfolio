import { siteConfig } from "@/lib/site";

export default function sitemap() {
  return [
    {
      url: siteConfig.url,
      lastModified: "2026-06-07",
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          "es-AR": siteConfig.url,
        },
      },
      images: [
        `${siteConfig.url}/nicoplacente.webp`,
        `${siteConfig.url}/nicoplacente-pixelart-metadata.png`,
      ],
    },
  ];
}
