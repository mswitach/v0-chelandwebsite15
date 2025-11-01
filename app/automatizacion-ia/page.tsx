import type { Metadata } from "next"
import AutomatizacionIAClient from "./AutomatizacionIAClient"

export const metadata: Metadata = {
  title: "Automatización con IA | Cheland - RPA, Chatbots y Agentes Inteligentes",
  description:
    "Automatización con IA donde más duele tu operación. RPA, chatbots y agentes que ejecutan tareas, integrados a tus sistemas.",
  alternates: {
    canonical: "https://cheland.io/automatizacion-ia",
  },
  openGraph: {
    title: "Automatización con IA | Cheland",
    description: "RPA, chatbots y agentes inteligentes para automatizar procesos críticos de tu negocio",
    url: "https://cheland.io/automatizacion-ia",
    type: "website",
  },
}

export default function AutomatizacionIAPage() {
  return <AutomatizacionIAClient />
}
