import type { Metadata } from "next"
import RecursosPageClient from "./RecursosPageClient"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Recursos - Blog, Guías y FAQs | Cheland",
  description:
    "Recursos sobre WMS, automatización con IA y optimización de operaciones. Guías prácticas, artículos y FAQs para mejorar tu logística.",
  keywords: [
    "blog WMS Argentina",
    "guías automatización IA",
    "recursos logística",
    "FAQs WMS",
    "optimización operaciones",
  ],
  openGraph: {
    title: "Recursos - Blog, Guías y FAQs | Cheland",
    description: "Recursos sobre WMS, automatización con IA y optimización de operaciones.",
    url: "https://cheland.io/recursos",
    type: "website",
    images: [
      {
        url: "https://cheland.io/og-recursos.jpg",
        width: 1200,
        height: 630,
        alt: "Recursos Cheland",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Recursos - Blog, Guías y FAQs | Cheland",
    description: "Recursos sobre WMS, automatización con IA y optimización de operaciones.",
    images: ["https://cheland.io/og-recursos.jpg"],
  },
  alternates: {
    canonical: "https://cheland.io/recursos",
  },
}

export default function RecursosPage() {
  return (
    <>
      <Script
        id="schema-recursos"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Recursos Cheland",
            description: "Blog, guías y FAQs sobre WMS y automatización con IA",
            url: "https://cheland.io/recursos",
            publisher: {
              "@type": "Organization",
              name: "Cheland",
              url: "https://cheland.io",
            },
          }),
        }}
      />
      <RecursosPageClient />
    </>
  )
}
