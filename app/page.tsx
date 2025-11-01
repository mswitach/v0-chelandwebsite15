import ClientPage from "./ClientPage"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cheland - Automatización Inteligente y Sistema WMS | Consultoría Tecnológica Argentina",
  description:
    "Cheland ofrece servicios de automatización inteligente y sistema WMS en Argentina. Especialistas en consultoría tecnológica y optimización con IA.",
  keywords:
    "automatización inteligente Argentina, sistema WMS personalizado, consultoría tecnológica, optimización procesos IA, gestión logística, desarrollo software empresarial",
  openGraph: {
    title: "Cheland - Automatización Inteligente y Sistema WMS",
    description:
      "Transformamos empresas con dos líneas de negocio: servicios de automatización inteligente con IA y nuestro sistema WMS para gestión logística.",
    type: "website",
    locale: "es_ES",
    url: "https://cheland.io/",
    siteName: "Cheland",
    images: [
      {
        url: "https://cheland.io/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cheland - Automatización Inteligente y Sistema WMS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cheland - Automatización Inteligente y Sistema WMS",
    description:
      "Transformamos empresas con automatización inteligente y sistema WMS. Consultoría especializada en Argentina.",
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
  return <ClientPage />
}
