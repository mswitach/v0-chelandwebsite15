"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Target, Zap, TrendingUp, Users, Shield, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ConsultoriaIAPageClient() {
  const beneficios = [
    {
      icon: Brain,
      title: "Análisis Inteligente",
      description: "Procesamiento avanzado de datos para insights accionables y toma de decisiones estratégicas.",
    },
    {
      icon: Target,
      title: "Soluciones Personalizadas",
      description: "Desarrollo de estrategias de IA adaptadas específicamente a las necesidades de tu empresa.",
    },
    {
      icon: Zap,
      title: "Automatización Avanzada",
      description: "Implementación de procesos automatizados que mejoran la eficiencia operacional.",
    },
    {
      icon: TrendingUp,
      title: "ROI Medible",
      description: "Resultados cuantificables con métricas claras de retorno de inversión.",
    },
    {
      icon: Users,
      title: "Capacitación Integral",
      description: "Formación completa de equipos para maximizar el aprovechamiento de las soluciones IA.",
    },
    {
      icon: Shield,
      title: "Implementación Segura",
      description: "Despliegue de IA con los más altos estándares de seguridad y privacidad de datos.",
    },
  ]

  const serviciosIncluidos = [
    "Auditoría de procesos actuales",
    "Identificación de oportunidades de IA",
    "Desarrollo de roadmap estratégico",
    "Implementación de soluciones piloto",
    "Capacitación de equipos",
    "Soporte post-implementación",
  ]

  const tecnologias = [
    "Machine Learning",
    "Deep Learning",
    "Natural Language Processing",
    "Computer Vision",
    "Predictive Analytics",
    "Chatbots & Virtual Assistants",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Consultoría en Inteligencia Artificial
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transformamos tu negocio con <strong>consultoría especializada en inteligencia artificial</strong> y
                soluciones de IA personalizadas. Nuestros expertos en IA ayudan a empresas argentinas a automatizar
                procesos, analizar datos complejos y tomar decisiones estratégicas basadas en machine learning y
                análisis predictivo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Link href="/contacto">
                    Solicitar Consultoría
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/prototipos">Ver Prototipos IA</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/ai-marketing-consultoria.webp"
                alt="Consultoría en IA - Servicios de consultoría IA, inteligencia artificial, automatización para empresas argentinas"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Beneficios de Nuestra Consultoría en IA</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Aprovecha el poder de la inteligencia artificial para transformar tu empresa
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beneficios.map((beneficio, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <beneficio.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{beneficio.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{beneficio.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios Incluidos */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Servicios Incluidos</h2>
              <p className="text-lg text-gray-600 mb-8">
                Nuestro proceso integral de consultoría en IA abarca desde la evaluación inicial hasta la implementación
                completa.
              </p>
              <ul className="space-y-4">
                {serviciosIncluidos.map((servicio, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{servicio}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Tecnologías que Utilizamos</h3>
              <div className="flex flex-wrap gap-3">
                {tecnologias.map((tech, index) => (
                  <Badge key={index} variant="secondary" className="px-3 py-1">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">¿Listo para Transformar tu Empresa con IA?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Contactanos para una consulta gratuita y descubre cómo la inteligencia artificial puede revolucionar tu
            negocio.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contacto">
              Solicitar Consulta Gratuita
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
