import type { Metadata } from "next"
import ContactoPageClient from "./ContactoPageClient"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Contacto - Demo WMS y Diagnóstico IA | Cheland",
  description:
    "Coordiná una demo de Cheland WMS o un diagnóstico de automatización con IA. Respuesta en menos de 24 horas. Atendemos toda LATAM.",
  keywords: [
    "contacto Cheland",
    "demo WMS Argentina",
    "consultoría automatización IA",
    "diagnóstico IA logística",
    "contactar Cheland LATAM",
  ],
  openGraph: {
    title: "Contacto - Demo WMS y Diagnóstico IA | Cheland",
    description:
      "Coordiná una demo de Cheland WMS o un diagnóstico de automatización con IA. Solo 2 pasos y te contactamos en menos de 24 horas.",
    url: "https://cheland.io/contacto",
    type: "website",
    images: [
      {
        url: "https://cheland.io/og-contacto.jpg",
        width: 1200,
        height: 630,
        alt: "Contacto Cheland - WMS y Automatización IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto - Demo WMS y Diagnóstico IA | Cheland",
    description: "Coordiná una demo o diagnóstico. Respuesta en 24hs.",
    images: ["https://cheland.io/og-contacto.jpg"],
  },
  alternates: {
    canonical: "https://cheland.io/contacto",
  },
}

export default function ContactoPage() {
  return (
    <>
      <Script
        id="schema-contacto"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contacto Cheland",
            description: "Coordiná una demo de Cheland WMS o un diagnóstico de automatización con IA",
            url: "https://cheland.io/contacto",
            mainEntity: {
              "@type": "Organization",
              name: "Cheland",
              url: "https://cheland.io",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+54-11-2176-6464",
                contactType: "sales",
                areaServed: "LATAM",
                availableLanguage: ["Spanish"],
              },
            },
          }),
        }}
      />
      <ContactoPageClient />
    </>
  )
}
