import type { Metadata } from "next"
import ConsultoriaIAPageClient from "./ConsultoriaIAPageClient"

export const metadata: Metadata = {
  title: "Consultoría en Inteligencia Artificial | Cheland",
  description:
    "Transformamos tu negocio con soluciones de IA personalizadas. Consultoría especializada en inteligencia artificial, automatización y análisis de datos para empresas argentinas.",
  keywords:
    "consultoría IA, inteligencia artificial Argentina, automatización IA, análisis datos, machine learning, consultor IA Buenos Aires",
  openGraph: {
    title: "Consultoría en Inteligencia Artificial | Cheland",
    description:
      "Transformamos tu negocio con soluciones de IA personalizadas. Consultoría especializada en inteligencia artificial para empresas argentinas.",
    url: "https://cheland.io/servicios/consultoria-ia",
    siteName: "Cheland",
    images: [
      {
        url: "https://cheland.io/images/ai-marketing-consultoria.webp",
        width: 1200,
        height: 630,
        alt: "Consultoría en Inteligencia Artificial",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Consultoría en Inteligencia Artificial | Cheland",
    description:
      "Transformamos tu negocio con soluciones de IA personalizadas. Consultoría especializada en inteligencia artificial para empresas argentinas.",
    images: ["https://cheland.io/images/ai-marketing-consultoria.webp"],
  },
  alternates: {
    canonical: "https://cheland.io/servicios/consultoria-ia",
  },
}

export default function ConsultoriaIAPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Consultoría en Inteligencia Artificial",
            description:
              "Transformamos tu negocio con soluciones de IA personalizadas. Consultoría especializada en inteligencia artificial, automatización y análisis de datos.",
            provider: {
              "@type": "Organization",
              name: "Cheland",
              url: "https://cheland.io",
            },
            serviceType: "Consultoría Tecnológica",
            areaServed: "Argentina",
            serviceOutput: "Estrategias de IA personalizadas, implementación de soluciones, automatización de procesos",
            serviceAudience: "Empresas que buscan integrar inteligencia artificial en sus operaciones",
          }),
        }}
      />
      <ConsultoriaIAPageClient />
    </>
  )
}
