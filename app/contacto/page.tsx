import type { Metadata } from "next"
import ContactoPageClient from "./ContactoPageClient"

export const metadata: Metadata = {
  title: "Contacto - Consultoría en IA y Software | Cheland",
  description:
    "Contactá a Cheland para consultoría en IA, sistemas WMS personalizados y automatización de procesos. Especialistas en transformación digital.",
  keywords: [
    "contacto consultoría IA",
    "contactar Cheland Argentina",
    "consultoría tecnológica Buenos Aires",
    "demo sistema WMS",
    "automatización procesos empresariales",
  ],
  openGraph: {
    title: "Contacto - Consultoría en IA y Software | Cheland",
    description:
      "Contactá a Cheland para consultoría en inteligencia artificial, sistemas WMS y automatización de procesos. Respuesta garantizada en 24hs.",
    url: "https://cheland.io/contacto",
    type: "website",
    images: [
      {
        url: "https://cheland.io/og-contacto.jpg",
        width: 1200,
        height: 630,
        alt: "Contacto Cheland - Consultoría en IA y Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto - Consultoría en IA y Software | Cheland",
    description: "Especialistas en IA, automatización y sistemas WMS. Contactanos para transformar tu negocio.",
    images: ["https://cheland.io/og-contacto.jpg"],
  },
  alternates: {
    canonical: "https://cheland.io/contacto",
  },
}

export default function ContactoPage() {
  return <ContactoPageClient />
}
