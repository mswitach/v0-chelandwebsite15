import type { Metadata } from "next"
import Head from "next/head"
import WMSClientPage from "./WMSClientPage"

export const metadata: Metadata = {
  title: "Sistema WMS Personalizado | Cheland - Gestión Inteligente de Almacenes",
  description:
    "Sistema WMS personalizado para empresas argentinas. Optimizá la gestión de inventarios, automatizá procesos logísticos y mejorá la eficiencia.",
  keywords: [
    "sistema WMS personalizado",
    "gestión almacenes Argentina",
    "WMS inteligente",
    "automatización logística",
    "gestión inventarios tiempo real",
    "software almacén a medida",
    "optimización procesos logísticos",
  ],
  openGraph: {
    title: "Sistema WMS Personalizado | Cheland - Gestión Inteligente de Almacenes",
    description:
      "Revolucioná la gestión de tu almacén con nuestro sistema WMS personalizado. Automatización, trazabilidad y eficiencia para empresas argentinas.",
    url: "https://cheland.io/wms",
    type: "website",
    images: [
      {
        url: "https://cheland.io/og-wms.jpg",
        width: 1200,
        height: 630,
        alt: "Sistema WMS Personalizado Cheland - Gestión Inteligente de Almacenes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sistema WMS Personalizado | Cheland",
    description:
      "Optimizá tu almacén con nuestro sistema WMS inteligente. Gestión de inventarios y automatización logística.",
    images: ["https://cheland.io/og-wms.jpg"],
  },
  alternates: {
    canonical: "https://cheland.io/wms",
  },
}

export default function WMSPage() {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Sistema WMS Cheland",
              description: "Sistema de gestión de almacenes personalizado para empresas argentinas",
              applicationCategory: "BusinessApplication",
              applicationSubCategory: "Warehouse Management",
              operatingSystem: "Web-based",
              softwareVersion: "1.0",
              offers: {
                "@type": "Offer",
                description: "Sistema WMS personalizado con implementación y soporte",
                priceCurrency: "ARS",
              },
              provider: {
                "@type": "Organization",
                name: "Cheland",
                url: "https://cheland.io",
              },
              featureList: [
                "Gestión inteligente de inventarios",
                "Automatización de procesos logísticos",
                "Integración con sistemas ERP",
                "Reportes y analytics en tiempo real",
                "Trazabilidad completa de productos",
              ],
              review: {
                "@type": "Review",
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "5",
                  bestRating: "5",
                },
                name: "Excelente sistema WMS",
                author: { "@type": "Person", name: "Usuario Satisfecho" },
                reviewBody: "Este sistema WMS ha transformado nuestra gestión de almacenes. ¡Altamente recomendado!",
                publisher: { "@type": "Organization", name: "Cheland" },
              },
            }),
          }}
        />
      </Head>
      <WMSClientPage />
    </>
  )
}
