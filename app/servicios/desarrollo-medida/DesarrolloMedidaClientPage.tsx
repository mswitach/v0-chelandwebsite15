"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Smartphone, Globe, Database, Cloud, Shield, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function DesarrolloMedidaClientPage() {
  const tiposSoftware = [
    {
      icon: Globe,
      title: "Aplicaciones Web",
      description: "Desarrollo de aplicaciones web modernas, responsivas y escalables con las últimas tecnologías.",
    },
    {
      icon: Smartphone,
      title: "Aplicaciones Móviles",
      description: "Apps nativas e híbridas para iOS y Android con experiencia de usuario excepcional.",
    },
    {
      icon: Database,
      title: "Sistemas Empresariales",
      description: "ERP, CRM y sistemas de gestión personalizados para optimizar procesos internos.",
    },
    {
      icon: Cloud,
      title: "APIs y Microservicios",
      description: "Arquitecturas modernas y escalables para integración de sistemas y servicios.",
    },
  ]

  const procesoDesarrollo = [
    "Análisis de requerimientos y planificación",
    "Diseño de arquitectura y prototipado",
    "Desarrollo ágil con entregas iterativas",
    "Testing y aseguramiento de calidad",
    "Despliegue y puesta en producción",
    "Soporte y mantenimiento continuo",
  ]

  const tecnologias = [
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "TypeScript",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Docker",
    "Kubernetes",
    "React Native",
    "Flutter",
  ]

  const caracteristicas = [
    {
      icon: Shield,
      title: "Seguridad Avanzada",
      description: "Implementamos las mejores prácticas de seguridad y protección de datos.",
    },
    {
      icon: Cloud,
      title: "Escalabilidad",
      description: "Arquitecturas diseñadas para crecer con tu negocio sin limitaciones.",
    },
    {
      icon: Code,
      title: "Código Limpio",
      description: "Desarrollo con estándares de calidad y documentación completa.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Desarrollo a Medida</h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Creamos <strong>aplicaciones web, móviles y sistemas empresariales personalizados</strong> con
                tecnologías modernas. Nuestro equipo de desarrollo de software a medida ayuda a empresas argentinas a
                digitalizar procesos, crear soluciones únicas y acelerar su transformación digital.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
                  <Link href="/contacto">
                    Solicitar Cotización
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/prototipos">Ver Prototipos</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/desarrollo-medida.jpg"
                alt="Desarrollo a Medida - Servicios de desarrollo software, aplicaciones personalizadas, sistemas a medida para empresas argentinas"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tipos de Software */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tipos de Software que Desarrollamos</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Soluciones tecnológicas adaptadas a las necesidades específicas de tu empresa
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tiposSoftware.map((tipo, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <tipo.icon className="h-6 w-6 text-purple-600" />
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

      {/* Proceso y Tecnologías */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Proceso de Desarrollo Ágil</h2>
              <p className="text-lg text-gray-600 mb-8">
                Seguimos metodologías ágiles que garantizan entregas rápidas, calidad superior y adaptabilidad a
                cambios.
              </p>
              <ul className="space-y-4">
                {procesoDesarrollo.map((paso, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{paso}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Stack Tecnológico Moderno</h3>
              <p className="text-gray-600 mb-6">Utilizamos las tecnologías más actuales y robustas del mercado.</p>
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

      {/* Características */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Características de Nuestro Desarrollo</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {caracteristicas.map((caracteristica, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <caracteristica.icon className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl">{caracteristica.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{caracteristica.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">¿Tienes una Idea de Software?</h2>
          <p className="text-xl text-purple-100 mb-8">
            Contactanos para una consulta gratuita y convirtamos tu idea en una solución digital exitosa.
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
