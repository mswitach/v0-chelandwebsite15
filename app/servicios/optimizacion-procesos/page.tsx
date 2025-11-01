import type { Metadata } from "next"
import OptimizacionProcesosClientPage from "./OptimizacionProcesosClientPage"

export const metadata: Metadata = {
  title: "Optimización de Procesos Empresariales | Cheland",
  description:
    "Mejoramos la eficiencia de tu empresa con metodologías Lean, BPM y Six Sigma. Consultoría especializada en optimización de procesos para empresas argentinas.",
  keywords:
    "optimización procesos, metodología lean, BPM Argentina, six sigma, mejora continua, consultoría procesos Buenos Aires",
  openGraph: {
    title: "Optimización de Procesos Empresariales | Cheland",
    description:
      "Mejoramos la eficiencia de tu empresa con metodologías Lean, BPM y Six Sigma. Consultoría especializada en optimización de procesos.",
    url: "https://cheland.io/servicios/optimizacion-procesos",
    siteName: "Cheland",
    images: [
      {
        url: "https://cheland.io/images/optimizacion-procesos.webp",
        width: 1200,
        height: 630,
        alt: "Optimización de Procesos Empresariales",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Optimización de Procesos Empresariales | Cheland",
    description:
      "Mejoramos la eficiencia de tu empresa con metodologías Lean, BPM y Six Sigma. Consultoría especializada en optimización de procesos.",
    images: ["https://cheland.io/images/optimizacion-procesos.webp"],
  },
  alternates: {
    canonical: "https://cheland.io/servicios/optimizacion-procesos",
  },
}

export default function OptimizacionProcesosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Optimización de Procesos Empresariales",
            description:
              "Mejoramos la eficiencia de tu empresa con metodologías Lean, BPM y Six Sigma. Consultoría especializada en optimización de procesos.",
            provider: {
              "@type": "Organization",
              name: "Cheland",
              url: "https://cheland.io",
            },
            serviceType: "Consultoría de Procesos",
            areaServed: "Argentina",
            serviceOutput: "Procesos optimizados, reducción de costos, mejora de eficiencia operacional",
            serviceAudience: "Empresas que buscan mejorar sus procesos operacionales",
          }),
        }}
      />
      <OptimizacionProcesosClientPage />
    </>
  )
}
