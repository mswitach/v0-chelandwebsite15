import type { Metadata } from "next"
import Head from "next/head"
import ServiciosPageClient from "./ServiciosPageClient"

export const metadata: Metadata = {
  title: "Servicios de Consultoría Tecnológica | Cheland - IA, WMS y Automatización",
  description:
    "Servicios especializados: consultoría en IA, optimización de procesos, desarrollo de software a medida y automatización inteligente para empresas.",
  keywords: [
    "servicios consultoría tecnológica",
    "consultoría IA Argentina",
    "optimización procesos empresariales",
    "desarrollo software a medida",
    "automatización inteligente",
    "sistema WMS personalizado",
    "transformación digital empresas",
  ],
  openGraph: {
    title: "Servicios de Consultoría Tecnológica | Cheland",
    description:
      "Transformamos empresas con IA, automatización y sistemas WMS. Consultoría especializada en optimización de procesos y desarrollo de software.",
    url: "https://cheland.io/servicios",
    type: "website",
    images: [
      {
        url: "https://cheland.io/og-servicios.jpg",
        width: 1200,
        height: 630,
        alt: "Servicios de Consultoría Tecnológica Cheland - IA, WMS y Automatización",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Servicios de Consultoría Tecnológica | Cheland",
    description:
      "Especialistas en IA, automatización y sistemas WMS para empresas. Consultoría tecnológica en Argentina.",
    images: ["https://cheland.io/og-servicios.jpg"],
  },
  alternates: {
    canonical: "https://cheland.io/servicios",
  },
}

export default function ServiciosPage() {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Servicios de Consultoría Tecnológica",
              description: "Consultoría especializada en IA, automatización y sistemas WMS para empresas",
              provider: {
                "@type": "Organization",
                name: "Cheland",
                url: "https://cheland.io",
              },
              areaServed: {
                "@type": "Country",
                name: "Argentina",
              },
              serviceType: "Consultoría Tecnológica",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Catálogo de Servicios Tecnológicos",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Consultoría en Inteligencia Artificial",
                      description:
                        "Implementación de soluciones de IA personalizadas para optimizar procesos y mejorar la toma de decisiones.",
                      serviceType: "Consultoría IA",
                      areaServed: {
                        "@type": "Country",
                        name: "Argentina",
                      },
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Optimización de Procesos Empresariales",
                      description:
                        "Rediseño y optimización de workflows empresariales para aumentar la eficiencia y reducir costos.",
                      serviceType: "Optimización de Procesos",
                      areaServed: {
                        "@type": "Country",
                        name: "Argentina",
                      },
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Desarrollo de Software a Medida",
                      description:
                        "Creación de aplicaciones personalizadas para satisfacer las necesidades específicas de tu negocio.",
                      serviceType: "Desarrollo de Software",
                      areaServed: {
                        "@type": "Country",
                        name: "Argentina",
                      },
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Automatización Inteligente",
                      description:
                        "Desarrollo de bots y sistemas de automatización para tareas repetitivas y optimización de recursos.",
                      serviceType: "Automatización",
                      areaServed: {
                        "@type": "Country",
                        name: "Argentina",
                      },
                    },
                  },
                ],
              },
            }),
          }}
        />
      </Head>
      <ServiciosPageClient />
    </>
  )
}
