import type { Metadata } from "next"
import DesarrolloMedidaClientPage from "./DesarrolloMedidaClientPage"

export const metadata: Metadata = {
  title: "Desarrollo de Software a Medida | Cheland",
  description:
    "Creamos aplicaciones web, móviles y sistemas empresariales personalizados. Desarrollo de software a medida con tecnologías modernas para empresas argentinas.",
  keywords:
    "desarrollo software medida, aplicaciones personalizadas, desarrollo web Argentina, aplicaciones móviles, sistemas empresariales Buenos Aires",
  openGraph: {
    title: "Desarrollo de Software a Medida | Cheland",
    description:
      "Creamos aplicaciones web, móviles y sistemas empresariales personalizados. Desarrollo de software a medida con tecnologías modernas.",
    url: "https://cheland.io/servicios/desarrollo-medida",
    siteName: "Cheland",
    images: [
      {
        url: "https://cheland.io/images/desarrollo-medida.jpg",
        width: 1200,
        height: 630,
        alt: "Desarrollo de Software a Medida",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Desarrollo de Software a Medida | Cheland",
    description:
      "Creamos aplicaciones web, móviles y sistemas empresariales personalizados. Desarrollo de software a medida con tecnologías modernas.",
    images: ["https://cheland.io/images/desarrollo-medida.jpg"],
  },
  alternates: {
    canonical: "https://cheland.io/servicios/desarrollo-medida",
  },
}

export default function DesarrolloMedidaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Desarrollo de Software a Medida",
            description:
              "Creamos aplicaciones web, móviles y sistemas empresariales personalizados. Desarrollo de software a medida con tecnologías modernas.",
            provider: {
              "@type": "Organization",
              name: "Cheland",
              url: "https://cheland.io",
            },
            serviceType: "Desarrollo de Software",
            areaServed: "Argentina",
            serviceOutput: "Aplicaciones web, aplicaciones móviles, sistemas empresariales personalizados",
            serviceAudience: "Empresas que necesitan soluciones de software personalizadas",
          }),
        }}
      />
      <DesarrolloMedidaClientPage />
    </>
  )
}
