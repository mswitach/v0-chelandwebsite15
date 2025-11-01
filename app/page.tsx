import ClientPage from "./ClientPage"
import type { Metadata } from "next"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Cheland - WMS para pymes LATAM y Automatización con IA",
  description:
    "WMS para pymes: implementación en semanas, trazabilidad total. Automatización con IA para procesos críticos. Reducí errores y ganá eficiencia.",
  keywords:
    "WMS Argentina, sistema gestión depósitos, automatización IA logística, WMS pymes LATAM, RPA pedidos, chatbot logística, trazabilidad inventario",
  openGraph: {
    title: "Cheland - WMS para pymes LATAM y Automatización con IA",
    description:
      "WMS para pymes: implementación en semanas, trazabilidad total. Automatización con IA para procesos críticos.",
    type: "website",
    locale: "es_ES",
    url: "https://cheland.io/",
    siteName: "Cheland",
    images: [
      {
        url: "https://cheland.io/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cheland - WMS y Automatización IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cheland - WMS para pymes LATAM y Automatización con IA",
    description: "WMS para pymes e implementación en semanas. Automatización con IA para procesos críticos.",
    images: ["https://cheland.io/og-image.jpg"],
  },
  alternates: {
    canonical: "https://cheland.io/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function Home() {
  return (
    <>
      <Script
        id="schema-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Cheland",
            url: "https://cheland.io",
            logo: "https://cheland.io/logo.png",
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "+54-11-2176-6464",
                contactType: "sales",
                areaServed: "LATAM",
                availableLanguage: ["Spanish"],
              },
            ],
            sameAs: ["https://www.linkedin.com/company/cheland/"],
            description: "WMS para pymes LATAM y automatización con IA para procesos críticos",
          }),
        }}
      />
      <ClientPage />
    </>
  )
}
