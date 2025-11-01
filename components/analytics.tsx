"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"

export function Analytics() {
  const pathname = usePathname()

  // Seguimiento de cambios de página
  useEffect(() => {
    // Verificar que estamos en el cliente y que gtag está disponible
    if (typeof window === "undefined" || typeof window.gtag !== "function") {
      return
    }

    // Pequeño delay para asegurar que la página esté completamente cargada
    const timer = setTimeout(() => {
      const searchParams = window.location.search
      const url = searchParams ? `${pathname}${searchParams}` : pathname

      window.gtag("event", "page_view", {
        page_path: url,
        page_title: document.title,
        page_location: window.location.href,
      })

      console.log(`📊 Página vista enviada a GA: ${url}`)
    }, 100)

    return () => clearTimeout(timer)
  }, [pathname])

  return null // No renderiza nada, solo maneja el tracking
}

// Definiciones de tipos para evitar errores
declare global {
  interface Window {
    dataLayer: any[]
    gtag?: Function
  }
}
