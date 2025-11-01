import type { Metadata } from "next"
import PreciosClient from "./PreciosClient"

export const metadata: Metadata = {
  title: "Precios | Cheland - Planes WMS y Automatización con IA",
  description:
    "Planes flexibles para WMS y automatización con IA. Desde pilotos hasta soluciones enterprise. Consulta nuestros precios y encuentra el plan ideal.",
  alternates: {
    canonical: "https://cheland.io/precios",
  },
  openGraph: {
    title: "Precios | Cheland",
    description: "Planes flexibles para WMS y automatización con IA adaptados a tu negocio",
    url: "https://cheland.io/precios",
    type: "website",
  },
}

export default function PreciosPage() {
  return <PreciosClient />
}
