import type { Metadata } from "next"
import CasosExitoPageClient from "./CasosExitoPageClient"

export const metadata: Metadata = {
  title: "Casos de Éxito - Transformación Digital con Cheland",
  description:
    "Casos reales de empresas que optimizaron su operación con soluciones de WMS, IA y automatización de Cheland. Resultados comprobables y exitosos.",
  keywords: [
    "casos éxito WMS Argentina",
    "transformación digital empresas",
    "resultados automatización IA",
    "implementación WMS exitosa",
    "consultoría tecnológica casos reales",
    "optimización procesos empresariales",
  ],
  openGraph: {
    title: "Casos de Éxito - Transformación Digital con Cheland",
    description:
      "Casos reales de empresas que transformaron su operación con WMS, IA y automatización. Resultados comprobables.",
    url: "https://cheland.io/casos-exito",
    type: "website",
    images: [
      {
        url: "https://cheland.io/og-casos-exito.jpg",
        width: 1200,
        height: 630,
        alt: "Casos de Éxito Cheland - Transformación Digital Empresarial",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Casos de Éxito - Transformación Digital con Cheland",
    description: "Casos reales de transformación digital con WMS, IA y automatización empresarial.",
    images: ["https://cheland.io/og-casos-exito.jpg"],
  },
  alternates: {
    canonical: "https://cheland.io/casos-exito",
  },
}

export default function CasosExitoPage() {
  return <CasosExitoPageClient />
}
