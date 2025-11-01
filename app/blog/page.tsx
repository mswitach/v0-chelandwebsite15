import type { Metadata } from "next"
import BlogPageClient from "./BlogPageClient"

export const metadata: Metadata = {
  title: "Blog de Cheland - Innovación y Tecnología Empresarial",
  description:
    "Artículos, noticias y recursos sobre tecnología, innovación y tendencias del sector. Últimas novedades en IA, automatización y sistemas WMS.",
  keywords: [
    "blog tecnología empresarial",
    "artículos IA Argentina",
    "innovación tecnológica",
    "automatización empresarial",
    "tendencias WMS",
    "transformación digital",
  ],
  openGraph: {
    title: "Blog de Cheland - Innovación y Tecnología Empresarial",
    description: "Artículos, noticias y recursos sobre tecnología, innovación y tendencias del sector.",
    url: "https://cheland.io/blog",
    type: "website",
    images: [
      {
        url: "https://cheland.io/og-blog.jpg",
        width: 1200,
        height: 630,
        alt: "Blog Cheland - Innovación y Tecnología Empresarial",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog de Cheland - Innovación y Tecnología Empresarial",
    description: "Artículos sobre IA, automatización y sistemas WMS para empresas.",
    images: ["https://cheland.io/og-blog.jpg"],
  },
  alternates: {
    canonical: "https://cheland.io/blog",
  },
}

export default function BlogPage() {
  return <BlogPageClient />
}
