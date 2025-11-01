"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactoPageClient() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [asunto, setAsunto] = useState<string>("")
  const [showConfirmation, setShowConfirmation] = useState(false)
  const { toast } = useToast()
  const searchParams = useSearchParams()
  const hasScrolledRef = useRef(false)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    const asuntoParam = searchParams.get("asunto")
    if (asuntoParam) {
      setAsunto(asuntoParam)
    }

    if (!hasScrolledRef.current) {
      window.scrollTo(0, 0)
      hasScrolledRef.current = true
    }
  }, [searchParams])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formData = new FormData(e.currentTarget)
      const nombre = formData.get("nombre") as string
      const email = formData.get("email") as string
      const mensaje = formData.get("mensaje") as string

      console.log("[v0] Enviando formulario de contacto...")

      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre,
          email,
          asunto,
          mensaje,
        }),
      })

      console.log("[v0] Respuesta recibida, status:", response.status)

      let result
      const contentType = response.headers.get("content-type")

      if (contentType && contentType.includes("application/json")) {
        result = await response.json()
      } else {
        // Si no es JSON, leer como texto para debugging
        const text = await response.text()
        console.error("[v0] Respuesta no-JSON recibida:", text)
        throw new Error("Error del servidor. Por favor intenta nuevamente.")
      }

      console.log("[v0] Datos de respuesta:", result)

      if (result.success) {
        setShowConfirmation(true)

        toast({
          title: "Formulario enviado",
          description: result.message || "Nos pondremos en contacto contigo pronto.",
        })

        setTimeout(() => {
          if (formRef.current) {
            formRef.current.reset()
            setAsunto("")
            setShowConfirmation(false)
          }
        }, 3000)
      } else {
        toast({
          title: "Error",
          description: result.message || "Error al enviar el mensaje. Por favor, inténtalo de nuevo.",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("[v0] Error al enviar el formulario:", error)

      toast({
        title: "Error",
        description:
          error instanceof Error
            ? error.message
            : "Ocurrió un error al enviar el formulario. Por favor, inténtalo de nuevo.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contacto - Cheland",
            description: "Página de contacto para consultoría en IA y sistemas tecnológicos",
            mainEntity: {
              "@type": "Organization",
              name: "Cheland",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+54-9-11-2176-6464",
                contactType: "customer service",
                email: "info@cheland.io",
                availableLanguage: ["Spanish"],
                areaServed: "Argentina",
              },
            },
          }),
        }}
      />
      <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-50 via-white to-purple-50">
        <Nav />

        <main className="relative pt-32 pb-16 px-4">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem]">
            <div className="absolute inset-0 bg-gradient-to-r from-white/50 to-transparent"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Contactá a Cheland
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Especialistas en consultoría de inteligencia artificial y{" "}
                <Link href="/servicios" className="text-purple-600 hover:text-purple-800 underline">
                  automatización de procesos empresariales
                </Link>
                . Contactanos para transformar tu negocio con tecnología avanzada. También ofrecemos nuestro{" "}
                <Link href="/wms" className="text-blue-600 hover:text-blue-800 underline">
                  sistema WMS personalizado
                </Link>
                . Respuesta garantizada en 24 horas.
              </p>
            </motion.div>

            <motion.form
              ref={formRef}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              onSubmit={handleSubmit}
              className="space-y-6 bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre
                  </label>
                  <Input
                    id="nombre"
                    name="nombre"
                    required
                    className="border-purple-200 focus:border-blue-400 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="border-purple-200 focus:border-blue-400 focus:ring-blue-400"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="asunto" className="block text-sm font-medium text-gray-700 mb-1">
                  Asunto
                </label>
                <Select name="asunto" required value={asunto} onValueChange={setAsunto}>
                  <SelectTrigger className="border-purple-200 focus:border-blue-400 focus:ring-blue-400">
                    <SelectValue placeholder="Seleccione un asunto" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="consultas-generales">Consultas Generales</SelectItem>
                    <SelectItem value="consultas-wms">Consultas de WMS</SelectItem>
                    <SelectItem value="demo-wms">DEMO de WMS</SelectItem>
                    <SelectItem value="automatizacion-inteligente">Consultas por Automatización Inteligente</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensaje
                </label>
                <Textarea
                  id="mensaje"
                  name="mensaje"
                  rows={5}
                  required
                  className="border-purple-200 focus:border-blue-400 focus:ring-blue-400"
                />
              </div>
              {showConfirmation && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-50 border border-green-200 rounded-md text-green-700 text-center"
                >
                  Formulario enviado con éxito, te responderemos a la brevedad!
                </motion.div>
              )}

              <div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                  disabled={isSubmitting || showConfirmation}
                >
                  {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                </Button>
              </div>
            </motion.form>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-12 text-center"
            >
              <p className="text-gray-600 mb-6">¿Querés conocer más sobre nuestros servicios antes de contactarnos?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/servicios"
                  className="inline-flex items-center px-6 py-3 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors"
                >
                  Ver Servicios de Automatización
                </Link>
                <Link
                  href="/wms"
                  className="inline-flex items-center px-6 py-3 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
                >
                  Conocer nuestro WMS
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Volver al Inicio
                </Link>
              </div>
            </motion.div>
          </div>
        </main>

        <Footer />
        <Toaster />
      </div>
    </>
  )
}
