"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { ArrowRight, Brain, Workflow, Code, Bot, Package2, Lightbulb } from "lucide-react"
import { AnimatedButton } from "@/components/ui/animated-button"
import { AnimatedCard } from "@/components/ui/animated-card"
import { useEffect, useRef } from "react"

// Casos de éxito de WMS
const wmsCases = [
  {
    title: "Optimización de cadena de suministro para empresa de retail",
    description:
      "Implementamos nuestro WMS en una cadena de tiendas con más de 50 sucursales, logrando reducir los tiempos de preparación de pedidos en un 40% y mejorando la precisión del inventario al 99.78%.",
    client: "Retail Nacional S.A.",
    industry: "Retail",
    results: [
      "40% reducción en tiempos de preparación",
      "99.78% precisión de inventario",
      "28% reducción de costos logísticos",
    ],
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    title: "Gestión de almacén para distribuidor farmacéutico",
    description:
      "Nuestro WMS permitió a un distribuidor farmacéutico gestionar más de 15,000 SKUs con trazabilidad completa, cumpliendo con regulaciones sanitarias y reduciendo errores de picking en un 85%.",
    client: "FarmaDist",
    industry: "Farmacéutica",
    results: [
      "85% reducción de errores",
      "100% trazabilidad de productos",
      "60% aumento en velocidad de procesamiento",
    ],
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    title: "Transformación logística para empresa de manufactura",
    description:
      "Implementamos el WMS para gestionar materias primas y producto terminado, integrándolo con el ERP existente y logrando una visibilidad en tiempo real del inventario y una reducción del 30% en tiempos de despacho.",
    client: "Industrias del Norte",
    industry: "Manufactura",
    results: ["30% reducción en tiempos de despacho", "25% reducción de inventario", "ROI en 8 meses"],
    image: "/placeholder.svg?height=300&width=500",
  },
]

// Casos de éxito de servicios
const servicesCases = [
  {
    title: "Automatización de procesos con IA para análisis de datos",
    description:
      "Desarrollamos un sistema de IA que analiza patrones de consumo y predice demanda con una precisión del 92%, permitiendo optimizar la gestión de inventario y reducir costos de almacenamiento.",
    client: "TechRetail",
    industry: "Retail",
    service: "Automatización Inteligente",
    icon: Brain,
    results: [
      "92% precisión en predicción de demanda",
      "22% reducción en costos de inventario",
      "15% aumento en ventas",
    ],
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    title: "Rediseño de procesos para empresa de servicios financieros",
    description:
      "Optimizamos el proceso de aprobación de créditos, reduciendo el tiempo de 5 días a 4 horas mediante la automatización de verificaciones y la implementación de flujos de trabajo digitales.",
    client: "FinanceCorp",
    industry: "Servicios Financieros",
    service: "Automatización Inteligente",
    icon: Workflow,
    results: [
      "96% reducción en tiempo de aprobación",
      "40% aumento en solicitudes procesadas",
      "65% reducción en costos operativos",
    ],
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    title: "Desarrollo de plataforma de gestión para clínica médica",
    description:
      "Creamos un sistema a medida para la gestión de pacientes, historias clínicas y turnos, integrando telemedicina y permitiendo un aumento del 35% en la capacidad de atención.",
    client: "Centro Médico Integral",
    industry: "Salud",
    service: "Automatización Inteligente",
    icon: Code,
    results: [
      "35% aumento en capacidad de atención",
      "98% satisfacción de pacientes",
      "45% reducción en tareas administrativas",
    ],
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    title: "Automatización de facturación y cobranzas",
    description:
      "Implementamos robots de software que automatizan la emisión de facturas, seguimiento de pagos y conciliación bancaria, reduciendo errores en un 95% y liberando 120 horas mensuales de trabajo manual.",
    client: "Servicios Industriales S.A.",
    industry: "Manufactura",
    service: "Automatización Inteligente",
    icon: Bot,
    results: ["95% reducción de errores", "120 horas mensuales liberadas", "ROI en 4 meses"],
    image: "/placeholder.svg?height=300&width=500",
  },
]

export default function CasosExitoPageClient() {
  const hasScrolledRef = useRef(false)

  useEffect(() => {
    if (!hasScrolledRef.current) {
      window.scrollTo(0, 0)
      hasScrolledRef.current = true
    }
  }, [])

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-50 via-white to-purple-50">
      <Nav />

      <main className="relative pt-32 pb-16 px-4">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem]">
          <div className="absolute inset-0 bg-gradient-to-r from-white/50 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Casos de Éxito: Transformación Digital en Empresas
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Descubre cómo hemos ayudado a empresas de diferentes industrias a transformar sus operaciones y alcanzar
              resultados excepcionales.
            </p>
          </motion.div>

          {/* WMS Cases Section */}
          <section className="mb-20">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center justify-center mb-12"
            >
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                <Package2 className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Implementaciones de WMS
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              {wmsCases.map((caseStudy, index) => (
                <AnimatedCard
                  key={index}
                  hoverEffect="lift"
                  className="bg-white/80 backdrop-blur-sm border-purple-100 overflow-hidden"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={caseStudy.image || "/placeholder.svg"}
                      alt={caseStudy.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-medium px-2 py-1 rounded">
                      {caseStudy.industry}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{caseStudy.title}</h3>
                    <p className="text-gray-600 mb-4">{caseStudy.description}</p>
                    <div className="mb-4">
                      <span className="text-sm font-semibold text-gray-700">Cliente: </span>
                      <span className="text-sm text-gray-600">{caseStudy.client}</span>
                    </div>
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Resultados:</h4>
                      <ul className="space-y-1">
                        {caseStudy.results.map((result, i) => (
                          <li key={i} className="text-sm text-gray-600 flex items-center">
                            <span className="h-1.5 w-1.5 rounded-full bg-purple-600 mr-2"></span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </section>

          {/* Services Cases Section */}
          <section>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center justify-center mb-12"
            >
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Servicios de Automatización Inteligente
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
              {servicesCases.map((caseStudy, index) => (
                <AnimatedCard
                  key={index}
                  hoverEffect="lift"
                  className="bg-white/80 backdrop-blur-sm border-purple-100 overflow-hidden"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={caseStudy.image || "/placeholder.svg"}
                      alt={caseStudy.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-medium px-2 py-1 rounded">
                      {caseStudy.industry}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                        <caseStudy.icon className="h-5 w-5 text-purple-600" />
                      </div>
                      <span className="text-sm font-medium text-purple-600">{caseStudy.service}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{caseStudy.title}</h3>
                    <p className="text-gray-600 mb-4">{caseStudy.description}</p>
                    <div className="mb-4">
                      <span className="text-sm font-semibold text-gray-700">Cliente: </span>
                      <span className="text-sm text-gray-600">{caseStudy.client}</span>
                    </div>
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Resultados:</h4>
                      <ul className="space-y-1">
                        {caseStudy.results.map((result, i) => (
                          <li key={i} className="text-sm text-gray-600 flex items-center">
                            <span className="h-1.5 w-1.5 rounded-full bg-purple-600 mr-2"></span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-20 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              ¿Quieres ser nuestro próximo caso de éxito?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Contáctanos hoy mismo y descubre cómo podemos ayudarte a transformar tu negocio con nuestras soluciones
              personalizadas.
            </p>
            <AnimatedButton
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
              iconRight={<ArrowRight className="h-4 w-4" />}
            >
              <Link href="/contacto">Contactar ahora</Link>
            </AnimatedButton>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
