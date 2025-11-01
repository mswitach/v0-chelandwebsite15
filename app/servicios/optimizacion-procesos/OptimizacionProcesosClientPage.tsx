"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Target, Users, BarChart3, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function OptimizacionProcesosClientPage() {
  const metodologias = [
    {
      icon: TrendingUp,
      title: "Metodología Lean",
      description: "Eliminación de desperdicios y optimización del flujo de valor para maximizar la eficiencia.",
    },
    {
      icon: Target,
      title: "Business Process Management (BPM)",
      description: "Gestión integral de procesos de negocio con enfoque en la mejora continua.",
    },
    {
      icon: BarChart3,
      title: "Six Sigma",
      description: "Reducción de variabilidad y defectos mediante análisis estadístico y control de calidad.",
    },
    {
      icon: Users,
      title: "Metodología Agile",
      description: "Implementación ágil de mejoras con iteraciones rápidas y feedback continuo.",
    },
  ]

  const procesoOptimizacion = [
    "Diagnóstico inicial y mapeo de procesos actuales",
    "Identificación de cuellos de botella y oportunidades",
    "Diseño de procesos optimizados",
    "Implementación gradual con seguimiento",
    "Capacitación de equipos",
    "Monitoreo y mejora continua",
  ]

  const herramientas = [
    "Process Mining",
    "Value Stream Mapping",
    "Root Cause Analysis",
    "Statistical Process Control",
    "Workflow Automation",
    "KPI Dashboards",
  ]

  const beneficios = [
    { metric: "30-50%", description: "Reducción en tiempos de proceso" },
    { metric: "20-40%", description: "Disminución de costos operativos" },
    { metric: "60-80%", description: "Mejora en satisfacción del cliente" },
    { metric: "25-35%", description: "Incremento en productividad" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Optimización de Procesos</h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Mejoramos la eficiencia de tu empresa con <strong>metodologías de optimización de procesos</strong> como
                Lean, BPM y Six Sigma. Nuestros consultores especializados en mejora continua ayudan a empresas
                argentinas a reducir costos, eliminar desperdicios y maximizar la productividad operacional.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                  <Link href="/contacto">
                    Solicitar Diagnóstico
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/casos-exito">Ver Casos de Éxito</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/optimizacion-procesos.webp"
                alt="Optimización de Procesos - Servicios de optimización procesos, metodología lean, BPM para empresas argentinas"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Metodologías */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Metodologías de Optimización</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Aplicamos las mejores prácticas internacionales adaptadas a la realidad empresarial argentina
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metodologias.map((metodologia, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <metodologia.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-lg">{metodologia.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{metodologia.description}</CardDescription>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Nuestro Proceso de Optimización</h2>
              <p className="text-lg text-gray-600 mb-8">
                Seguimos un enfoque estructurado que garantiza resultados medibles y sostenibles en el tiempo.
              </p>
              <ul className="space-y-4">
                {procesoOptimizacion.map((paso, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{paso}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Herramientas Especializadas</h3>
              <p className="text-gray-600 mb-6">
                Utilizamos las herramientas más avanzadas para el análisis y optimización de procesos.
              </p>
              <div className="flex flex-wrap gap-3">
                {herramientas.map((herramienta, index) => (
                  <Badge key={index} variant="secondary" className="px-3 py-1">
                    {herramienta}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resultados */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Resultados Comprobados</h2>
            <p className="text-lg text-gray-600">
              Nuestros clientes experimentan mejoras significativas en sus operaciones
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {beneficios.map((beneficio, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">{beneficio.metric}</div>
                <p className="text-gray-600">{beneficio.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-green-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">¿Listo para Optimizar tus Procesos?</h2>
          <p className="text-xl text-green-100 mb-8">
            Contactanos para un diagnóstico gratuito y descubre cómo podemos mejorar la eficiencia de tu empresa.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contacto">
              Solicitar Diagnóstico Gratuito
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
