import type { Metadata } from "next"
import CasosExitoPageClient from "./CasosExitoPageClient"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Casos de Éxito - WMS y Automatización IA | Cheland",
  description:
    "Transformaciones reales en operaciones de pymes LATAM con Cheland WMS y automatización IA. Resultados medibles: -85% errores, +40% velocidad.",
  keywords: [
    "casos éxito WMS Argentina",
    "resultados automatización IA",
    "implementación WMS exitosa",
    "transformación digital logística",
    "casos reales Cheland",
  ],
  openGraph: {
    title: "Casos de Éxito - WMS y Automatización IA | Cheland",
    description: "Transformaciones reales con resultados medibles. Implementaciones en 3-6 semanas.",
    url: "https://cheland.io/casos-exito",
    type: "website",
    images: [
      {
        url: "https://cheland.io/og-casos-exito.jpg",
        width: 1200,
        height: 630,
        alt: "Casos de Éxito Cheland",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Casos de Éxito - WMS y Automatización IA | Cheland",
    description: "Transformaciones reales con resultados medibles.",
    images: ["https://cheland.io/og-casos-exito.jpg"],
  },
  alternates: {
    canonical: "https://cheland.io/casos-exito",
  },
}

export default function CasosExitoPage() {
  return (
    <>
      <Script
        id="schema-casos"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Casos de Éxito Cheland",
            description: "Transformaciones reales en operaciones de pymes LATAM con Cheland WMS y automatización IA",
            url: "https://cheland.io/casos-exito",
            publisher: {
              "@type": "Organization",
              name: "Cheland",
              url: "https://cheland.io",
            },
          }),
        }}
      />
      <CasosExitoPageClient />
    </>
  )
}
