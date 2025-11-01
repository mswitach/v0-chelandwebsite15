import type { Metadata } from "next"
import CaracteristicasWMSClient from "./CaracteristicasWMSClient"

export const metadata: Metadata = {
  title: "Características del WMS+ | Cheland - Sistema de Gestión de Almacenes",
  description:
    "Características del WMS+ de Cheland: estructura depósito-zona-ubicación, pallets, movimientos entre zonas, stock en tiempo real y trazabilidad.",
  keywords: [
    "características WMS",
    "sistema gestión almacenes",
    "estructura depósito",
    "pallets pallet-lines",
    "movimientos stock tiempo real",
    "ciclo vida pedidos",
    "trazabilidad WMS",
  ],
  openGraph: {
    title: "Características del WMS+ | Cheland - Sistema de Gestión de Almacenes",
    description:
      "Estructura flexible, componentes clave, movimientos inteligentes y trazabilidad total para la gestión de tu almacén.",
    url: "https://cheland.io/wms/caracteristicas",
    type: "website",
  },
  alternates: {
    canonical: "https://cheland.io/wms/caracteristicas",
  },
}

export default function CaracteristicasWMSPage() {
  return <CaracteristicasWMSClient />
}
