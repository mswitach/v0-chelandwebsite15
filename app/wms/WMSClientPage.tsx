"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { WMSAnimation } from "@/components/wms-animation"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Package, BarChart3, Clock, Shield, Zap, Users } from "lucide-react"
import { OptimizedImage } from "@/components/optimized-image"

const features = [
  {
    icon: Package,
    title: "Gestión de Inventario",
    description: "Control total de stock con seguimiento en tiempo real y alertas automáticas.",
  },
  {
    icon: BarChart3,
    title: "Analytics Avanzado",
    description: "Dashboards intuitivos con métricas clave y reportes personalizables.",
  },
  {
    icon: Clock,
    title: "Optimización de Tiempos",
    description: "Reduce tiempos de procesamiento y mejora la eficiencia operativa.",
  },
  {
    icon: Shield,
    title: "Seguridad y Trazabilidad",
    description: "Seguimiento completo de productos con historial detallado de movimientos.",
  },
  {
    icon: Zap,
    title: "Automatización",
    description: "Procesos automatizados que reducen errores y aumentan la productividad.",
  },
  {
    icon: Users,
    title: "Gestión de Personal",
    description: "Asignación inteligente de tareas y seguimiento de rendimiento del equipo.",
  },
]

const benefits = [
  { metric: "40%", description: "Reducción en tiempos de procesamiento" },
  { metric: "95%", description: "Precisión en el inventario" },
  { metric: "60%", description: "Menos errores operativos" },
  { metric: "24/7", description: "Monitoreo continuo" },
]

export default function WMSClientPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Nav />

      <main className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Sistema WMS Personalizado
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Revoluciona la gestión de tu almacén con nuestros sistemas WMS personalizados. Inteligencia artificial
                aplicada a la gestión de almacenes para empresas argentinas que buscan optimizar sus procesos logísticos
                y mejorar la eficiencia operativa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                >
                  <Link href="/contacto" className="flex items-center">
                    Solicitar Demo
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                >
                  <Link href="/wms/caracteristicas" className="flex items-center">
                    Ver Características
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <WMSAnimation />
            </motion.div>
          </div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          >
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{benefit.metric}</div>
                <div className="text-gray-600">{benefit.description}</div>
              </div>
            ))}
          </motion.div>

          {/* Features Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Características Principales
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Nuestro WMS incluye todas las herramientas necesarias para optimizar tu operación logística, con{" "}
                <Link href="/casos-exito" className="text-blue-600 hover:text-blue-700 underline">
                  implementaciones exitosas
                </Link>{" "}
                en diferentes industrias.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full group hover:shadow-lg transition-shadow duration-300 bg-white/80 backdrop-blur-sm border-blue-100">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <feature.icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-xl mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {feature.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600">{feature.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Real WMS Dashboard Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Interfaz Real del Sistema
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Conoce la interfaz profesional de nuestro sistema WMS con funcionalidades avanzadas de gestión
                logística.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <OptimizedImage
                src="/images/wms-dashboard-real.png"
                alt="Dashboard real del sistema WMS mostrando cronograma de logística, asignación de pedidos, gestión de almacenes y reportes operativos"
                width={1200}
                height={600}
                className="rounded-lg shadow-lg w-full"
                keywords={["sistema WMS", "dashboard logística", "gestión pedidos", "cronograma logística"]}
                priority={true}
              />
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para optimizar tu almacén?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Descubre cómo nuestro sistema WMS puede transformar tu operación logística y aumentar tu rentabilidad.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Contactar Especialista
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
