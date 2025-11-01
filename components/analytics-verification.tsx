"use client"

import { useEffect, useState } from "react"

export function AnalyticsVerification() {
  const [status, setStatus] = useState<"checking" | "success" | "error">("checking")
  const [message, setMessage] = useState<string>("Verificando Google Analytics...")

  useEffect(() => {
    // Solo mostrar en desarrollo o con parámetro debug
    const shouldShow =
      process.env.NODE_ENV === "development" ||
      (typeof window !== "undefined" && window.location.search.includes("debug_analytics"))

    if (!shouldShow) return

    const checkGA = () => {
      let attempts = 0
      const maxAttempts = 10

      const verify = () => {
        attempts++

        if (typeof window !== "undefined") {
          // Para GA4
          if (typeof window.gtag === "function") {
            setStatus("success")
            setMessage("Google Analytics 4 (GA4) detectado y funcionando correctamente.")

            // Enviar un evento de prueba
            window.gtag("event", "analytics_verification", {
              event_category: "testing",
              event_label: "GA4 verification",
              value: 1,
            })

            console.log("✅ Google Analytics 4 verificado correctamente")
            return
          }

          // Para Universal Analytics (analytics.js)
          if (typeof window.ga === "function") {
            setStatus("success")
            setMessage("Google Analytics Universal detectado y funcionando correctamente.")
            console.log("✅ Google Analytics Universal verificado correctamente")
            return
          }
        }

        // Si no se detectó GA y aún hay intentos disponibles
        if (attempts < maxAttempts) {
          setTimeout(verify, 500)
        } else {
          setStatus("error")
          setMessage("No se detectó Google Analytics después de varios intentos.")
          console.error("❌ Google Analytics no detectado después de", maxAttempts, "intentos")
        }
      }

      verify()
    }

    checkGA()
  }, [])

  // Solo mostrar en desarrollo o con parámetro debug
  if (
    process.env.NODE_ENV !== "development" &&
    (typeof window === "undefined" || !window.location.search.includes("debug_analytics"))
  ) {
    return null
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 p-4 rounded-lg shadow-lg bg-white border border-gray-200">
      <div className="flex items-center gap-2">
        {status === "checking" && <div className="w-4 h-4 rounded-full bg-yellow-400 animate-pulse"></div>}
        {status === "success" && <div className="w-4 h-4 rounded-full bg-green-500"></div>}
        {status === "error" && <div className="w-4 h-4 rounded-full bg-red-500"></div>}
        <span className={`text-sm ${status === "error" ? "text-red-600" : "text-gray-700"}`}>{message}</span>
      </div>
    </div>
  )
}

// Definiciones de tipos
declare global {
  interface Window {
    ga?: Function
    gtag?: Function
  }
}
