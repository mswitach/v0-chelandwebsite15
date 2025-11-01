"use client"

import { useState, useEffect, useRef } from "react"
import { X, Maximize2, Minimize2, Play, Pause, Download } from "lucide-react"

interface AnalyticsEvent {
  timestamp: Date
  type: string
  eventName?: string
  eventParams?: Record<string, any>
  pageView?: {
    path: string
    title: string
    location: string
  }
  raw: any
}

export function AnalyticsDebugger() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [events, setEvents] = useState<AnalyticsEvent[]>([])
  const eventsRef = useRef<AnalyticsEvent[]>([])
  const originalGtag = useRef<Function | null>(null)

  // Solo mostrar en desarrollo o con un parámetro en la URL
  useEffect(() => {
    // Solo activar si está explícitamente solicitado
    const shouldActivate = typeof window !== "undefined" && window.location.search.includes("debug_analytics=true")

    if (!shouldActivate) return

    setIsVisible(true)
  }, [])

  // Interceptar llamadas a gtag
  useEffect(() => {
    if (!isVisible) return

    // Verificar que gtag existe antes de interceptarlo
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      originalGtag.current = window.gtag
    } else {
      // Si gtag no está disponible, esperar un poco más
      const waitForGtag = () => {
        if (typeof window.gtag === "function") {
          originalGtag.current = window.gtag
        } else {
          setTimeout(waitForGtag, 100)
        }
      }
      waitForGtag()
    }

    // Reemplazar gtag con nuestra versión instrumentada
    const interceptGtag = (...args: any[]) => {
      // Llamar a la función original
      if (originalGtag.current) {
        originalGtag.current(...args)
      }

      // No registrar eventos si está pausado
      if (isPaused) return

      // Procesar el evento
      const eventType = args[0]
      const event: AnalyticsEvent = {
        timestamp: new Date(),
        type: eventType,
        raw: args,
      }

      // Extraer información específica según el tipo de evento
      if (eventType === "event") {
        event.eventName = args[1]
        event.eventParams = args[2]

        // Detectar si es un page_view
        if (args[1] === "page_view") {
          event.pageView = {
            path: args[2]?.page_path || window.location.pathname,
            title: args[2]?.page_title || document.title,
            location: args[2]?.page_location || window.location.href,
          }
        }
      } else if (eventType === "config") {
        event.eventName = "config"
        event.eventParams = { trackingId: args[1], ...args[2] }
      }

      // Actualizar el estado
      const updatedEvents = [...eventsRef.current, event]
      setEvents(updatedEvents)
      eventsRef.current = updatedEvents

      // Registrar en la consola para depuración adicional
      console.log("📊 GA Event:", event)
    }

    // Reemplazar la función global
    if (typeof window !== "undefined") {
      window.gtag = interceptGtag
    }

    // Restaurar la función original al desmontar
    return () => {
      if (typeof window !== "undefined" && originalGtag.current) {
        window.gtag = originalGtag.current
      }
    }
  }, [isVisible, isPaused])

  const clearEvents = () => {
    setEvents([])
    eventsRef.current = []
  }

  const downloadEvents = () => {
    const dataStr = JSON.stringify(events, null, 2)
    const dataUri = "data:application/json;charset=utf-8," + encodeURIComponent(dataStr)

    const exportFileDefaultName = `ga-events-${new Date().toISOString()}.json`

    const linkElement = document.createElement("a")
    linkElement.setAttribute("href", dataUri)
    linkElement.setAttribute("download", exportFileDefaultName)
    linkElement.click()
  }

  if (!isVisible) return null

  return (
    <div
      className={`fixed ${isMinimized ? "bottom-4 right-4 w-auto h-auto" : "bottom-4 right-4 w-96 h-96"} 
                 z-50 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-all duration-300`}
    >
      {/* Header */}
      <div className="bg-purple-600 text-white p-2 flex justify-between items-center">
        <h3 className="text-sm font-medium">Google Analytics Debugger</h3>
        <div className="flex items-center space-x-1">
          {isPaused ? (
            <button
              onClick={() => setIsPaused(false)}
              className="p-1 hover:bg-purple-700 rounded"
              title="Reanudar captura"
            >
              <Play size={14} />
            </button>
          ) : (
            <button
              onClick={() => setIsPaused(true)}
              className="p-1 hover:bg-purple-700 rounded"
              title="Pausar captura"
            >
              <Pause size={14} />
            </button>
          )}

          {isMinimized ? (
            <button onClick={() => setIsMinimized(false)} className="p-1 hover:bg-purple-700 rounded" title="Maximizar">
              <Maximize2 size={14} />
            </button>
          ) : (
            <button onClick={() => setIsMinimized(true)} className="p-1 hover:bg-purple-700 rounded" title="Minimizar">
              <Minimize2 size={14} />
            </button>
          )}

          <button onClick={() => setIsVisible(false)} className="p-1 hover:bg-purple-700 rounded" title="Cerrar">
            <X size={14} />
          </button>
        </div>
      </div>

      {/* Contenido */}
      {!isMinimized && (
        <>
          {/* Eventos */}
          <div className="h-[calc(100%-80px)] overflow-y-auto p-2">
            {events.length === 0 ? (
              <div className="text-center text-gray-500 py-4">
                No se han registrado eventos de Google Analytics.
                <br />
                Navega por el sitio para ver los eventos.
              </div>
            ) : (
              <div className="space-y-2">
                {events.map((event, index) => (
                  <div key={index} className="border border-gray-200 rounded p-2 text-xs">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium">{event.eventName || event.type}</span>
                      <span className="text-gray-500">{event.timestamp.toLocaleTimeString()}</span>
                    </div>

                    {event.pageView && (
                      <div className="bg-blue-50 p-1 rounded mb-1">
                        <div>
                          <span className="font-medium">Ruta:</span> {event.pageView.path}
                        </div>
                        <div>
                          <span className="font-medium">Título:</span> {event.pageView.title}
                        </div>
                      </div>
                    )}

                    {event.eventParams && (
                      <div className="bg-gray-50 p-1 rounded overflow-x-auto">
                        <pre>{JSON.stringify(event.eventParams, null, 2)}</pre>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="absolute bottom-0 left-0 right-0 bg-gray-100 p-2 flex justify-between items-center">
            <div className="text-xs text-gray-600">{events.length} eventos capturados</div>
            <div className="flex space-x-2">
              <button onClick={clearEvents} className="text-xs bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded">
                Limpiar
              </button>
              <button
                onClick={downloadEvents}
                className="text-xs bg-purple-600 hover:bg-purple-700 text-white px-2 py-1 rounded flex items-center"
              >
                <Download size={12} className="mr-1" /> Exportar
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

// Añadir estas definiciones de tipos para evitar errores
declare global {
  interface Window {
    gtag: Function
  }
}
