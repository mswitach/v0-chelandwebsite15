"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bot, Zap, Settings, Shield, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AutomatizacionInteligenteClientPage() {
  const tiposAutomatizacion = [
    {
      icon: Bot,
      title: "RPA (Robotic Process Automation)",
      description: "Bots que automatizan tareas repetitivas y procesos basados en reglas.",
    },
    {
      icon: Zap,
      title: "Workflows Inteligentes",
      description: "Automatización de flujos de trabajo complejos con toma de decisiones.",
    },
    {
      icon: Settings,
      title: "Integración de Sistemas",
      description: "Conexión automática entre diferentes sistemas y aplicaciones empresariales.",
    },
    {
      icon: Shield,
      title: "Automatización Cognitiva",
      description: "IA aplicada para automatizar procesos que requieren análisis y comprensión.",
    },
  ]

  const herramientasRPA = [
    "UiPath",
    "Automation Anywhere",
    "Blue Prism",
    "Microsoft Power Automate",
    "n8n",
    "Zapier",
    "Custom Bots",
    "Process Mining Tools",
  ]

  const procesoImplementacion = [
    "Análisis y mapeo de procesos candidatos",
    "Evaluación de ROI y priorización",
    "Desarrollo y configuración de bots",
    "Testing y validación en ambiente controlado",
    "Despliegue gradual en producción",
    "Monitoreo y optimización continua",
  ]

  const beneficiosRPA = [
    { metric: "70-90%", description: "Reducción en tiempo de proceso" },
    { metric: "24/7", description: "Operación continua sin interrupciones" },
    { metric: "99%", description: "Precisión en ejecución de tareas" },
    { metric: "6-12 meses", description: "Retorno de inversión típico" },
  ]

  const casosUso = [
    "Procesamiento de facturas y documentos",
    "Gestión de pedidos y inventario",
    "Reportes automáticos y dashboards",
    "Migración y sincronización de datos",
    "Atención al cliente automatizada",
    "Compliance y auditorías automáticas",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Automatización Inteligente</h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Automatizamos procesos empresariales con{" "}
                <strong>RPA, bots inteligentes y workflows automatizados</strong>. Nuestros servicios de automatización
                inteligente ayudan a empresas argentinas a eliminar tareas repetitivas, reducir errores y liberar tiempo
                valioso para actividades estratégicas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
                  <Link href="/contacto">
                    Automatizar Procesos
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/prototipos">Ver Demos RPA</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/automatizacion-inteligente.jpg"
                alt="Automatización Inteligente - Servicios de automatización inteligente, RPA, bots empresariales para empresas argentinas"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tipos de Automatización */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tipos de Automatización que Implementamos</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Soluciones de automatización adaptadas a diferentes necesidades empresariales
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tiposAutomatizacion.map((tipo, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <tipo.icon className="h-6 w-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-lg">{tipo.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{tipo.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso y Herramientas */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Proceso de Implementación RPA</h2>
              <p className="text-lg text-gray-600 mb-8">
                Seguimos una metodología probada que garantiza el éxito de la automatización.
              </p>
              <ul className="space-y-4">
                {procesoImplementacion.map((paso, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{paso}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Herramientas de Automatización</h3>
              <p className="text-gray-600 mb-6">Trabajamos con las mejores plataformas RPA del mercado.</p>
              <div className="flex flex-wrap gap-3">
                {herramientasRPA.map((herramienta, index) => (
                  <Badge key={index} variant="secondary" className="px-3 py-1">
                    {herramienta}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Casos de Uso */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Casos de Uso Comunes</h2>
              <p className="text-lg text-gray-600 mb-8">
                Procesos empresariales que se benefician de la automatización inteligente.
              </p>
              <ul className="space-y-3">
                {casosUso.map((caso, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{caso}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Beneficios Medibles</h3>
              <div className="space-y-6">
                {beneficiosRPA.map((beneficio, index) => (
                  <div key={index} className="flex items-center">
                    <div className="text-3xl font-bold text-orange-600 mr-4 min-w-[100px]">{beneficio.metric}</div>
                    <p className="text-gray-600">{beneficio.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">¿Listo para Automatizar tus Procesos?</h2>
          <p className="text-xl text-orange-100 mb-8">
            Contactanos para una evaluación gratuita y descubre qué procesos de tu empresa pueden automatizarse.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contacto">
              Solicitar Evaluación Gratuita
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
