import type { Metadata } from "next"

interface GenerateMetadataProps {
  title: string
  description: string
  path: string
  ogImage?: string
}

export function generateMetadata({
  title,
  description,
  path,
  ogImage = "/og-image.jpg",
}: GenerateMetadataProps): Metadata {
  const url = `https://cheland.io${path}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: "Cheland",
      locale: "es_ES",
      type: "website",
      images: [
        {
          url: `https://cheland.io${ogImage}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`https://cheland.io${ogImage}`],
    },
    alternates: {
      canonical: url,
    },
  }
}
