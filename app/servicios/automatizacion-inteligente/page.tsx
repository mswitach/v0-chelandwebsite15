import type { Metadata } from "next"
import AutomatizacionInteligenteClientPage from "./AutomatizacionInteligenteClientPage"

export const metadata: Metadata = {
  title: "Automatización Inteligente y RPA | Cheland",
  description:
    "Automatizamos procesos empresariales con RPA, bots inteligentes y workflows. Servicios de automatización inteligente para empresas argentinas.",
  keywords:
    "automatización inteligente, RPA Argentina, bots empresariales, workflows automatizados, robotic process automation Buenos Aires",
  openGraph: {
    title: "Automatización Inteligente y RPA | Cheland",
    description:
      "Automatizamos procesos empresariales con RPA, bots inteligentes y workflows. Servicios de automatización inteligente para empresas argentinas.",
    url: "https://cheland.io/servicios/automatizacion-inteligente",
    siteName: "Cheland",
    images: [
      {
        url: "https://cheland.io/images/automatizacion-inteligente.jpg",
        width: 1200,
        height: 630,
        alt: "Automatización Inteligente y RPA",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Automatización Inteligente y RPA | Cheland",
    description:
      "Automatizamos procesos empresariales con RPA, bots inteligentes y workflows. Servicios de automatización inteligente para empresas argentinas.",
    images: ["https://cheland.io/images/automatizacion-inteligente.jpg"],
  },
  alternates: {
    canonical: "https://cheland.io/servicios/automatizacion-inteligente",
  },
}

export default function AutomatizacionInteligentePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Automatización Inteligente y RPA",
            description:
              "Automatizamos procesos empresariales con RPA, bots inteligentes y workflows. Servicios de automatización inteligente para empresas argentinas.",
            provider: {
              "@type": "Organization",
              name: "Cheland",
              url: "https://cheland.io",
            },
            serviceType: "Automatización de Procesos",
            areaServed: "Argentina",
            serviceOutput: "Procesos automatizados, bots RPA, workflows inteligentes, reducción de tareas manuales",
            serviceAudience: "Empresas que buscan automatizar procesos repetitivos y mejorar eficiencia",
          }),
        }}
      />
      <AutomatizacionInteligenteClientPage />
    </>
  )
}
