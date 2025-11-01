"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { ArrowRight, Brain, Workflow, Code, Bot, CheckCircle2, Users, Target, Zap } from "lucide-react"
import { AnimatedButton } from "@/components/ui/animated-button"
import { AnimatedCard } from "@/components/ui/animated-card"
import { OptimizedImage } from "@/components/optimized-image"

const serviceComponents = [
  {
    icon: Brain,
    title: "Tecnologías de IA",
    description:
      "Utilizamos inteligencia artificial avanzada para crear soluciones de automatización inteligentes que aprenden y se adaptan a los procesos de tu empresa.",
    features: [
      "Machine Learning aplicado",
      "Procesamiento de lenguaje natural",
      "Análisis predictivo",
      "Automatización cognitiva",
    ],
    image: "/images/ai-marketing-consultoria.webp",
    keywords: ["inteligencia artificial", "machine learning", "automatización IA"],
  },
  {
    icon: Workflow,
    title: "Optimización de Procesos",
    description:
      "Analizamos y rediseñamos tus flujos de trabajo antes de automatizarlos, asegurando máxima eficiencia y resultados óptimos en la automatización.",
    features: [
      "Análisis de procesos actuales",
      "Rediseño de workflows",
      "Metodología Lean",
      "Preparación para automatización",
    ],
    image: "/images/optimizacion-procesos.webp",
    keywords: ["optimización procesos", "análisis workflows", "mejora continua"],
  },
  {
    icon: Code,
    title: "Desarrollo Personalizado",
    description:
      "Creamos las herramientas y sistemas específicos necesarios para lograr una automatización perfectamente adaptada a tu empresa y procesos únicos.",
    features: [
      "Sistemas de automatización a medida",
      "Integraciones personalizadas",
      "APIs y conectores",
      "Interfaces intuitivas",
    ],
    image: "/images/desarrollo-medida.jpg",
    keywords: ["desarrollo personalizado", "sistemas automatización", "software a medida"],
  },
]

const benefits = [
  {
    icon: Target,
    title: "Automatización Integral",
    description: "Cubrimos todo el proceso desde el análisis hasta la implementación de automatización inteligente.",
  },
  {
    icon: Users,
    title: "Equipo Especializado",
    description: "Expertos en IA, desarrollo y optimización de procesos trabajando en conjunto para tu automatización.",
  },
  {
    icon: Zap,
    title: "Resultados Medibles",
    description: "Implementamos métricas claras para medir la eficiencia y ROI de la automatización implementada.",
  },
]

export default function ServiciosPageClient() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />

      <main className="relative">
        {/* Hero Section - Same height as Prototipos */}
        <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold text-white mb-6"
              >
                Automatización Inteligente
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-white/90 max-w-3xl mx-auto"
              >
                Transformamos tu empresa mediante automatización inteligente integral. Combinamos tecnologías de IA,
                optimización de procesos y desarrollo personalizado para crear soluciones de automatización que impulsan
                la eficiencia y el crecimiento empresarial en Argentina.
              </motion.p>
            </div>
          </div>
        </div>

        {/* Main Service Section */}
        <div className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl font-bold text-gray-900 mb-4"
              >
                Nuestro Servicio: Automatización Inteligente
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-gray-600 max-w-3xl mx-auto"
              >
                Ofrecemos un servicio integral de automatización inteligente que combina múltiples disciplinas
                tecnológicas para crear soluciones completas y efectivas para tu empresa.
              </motion.p>
            </div>

            {/* Main Service Card */}
            <div className="max-w-4xl mx-auto mb-20">
              <AnimatedCard
                hoverEffect="lift"
                className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-8 md:p-12">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                      <Bot className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 text-center mb-6">
                    Automatización Inteligente Integral
                  </h3>
                  <p className="text-lg text-gray-600 text-center mb-8 max-w-2xl mx-auto">
                    Implementamos soluciones completas de automatización que combinan inteligencia artificial,
                    optimización de procesos y desarrollo personalizado para transformar completamente la operación de
                    tu empresa.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">RPA (Robotic Process Automation)</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Chatbots y asistentes inteligentes</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Workflows automatizados</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Integración completa de sistemas</span>
                    </div>
                  </div>

                  <div className="text-center">
                    <AnimatedButton
                      className="bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700"
                      iconRight={<ArrowRight className="h-4 w-4" />}
                    >
                      <Link href="/contacto">Solicitar consulta</Link>
                    </AnimatedButton>
                  </div>
                </div>
              </AnimatedCard>
            </div>
          </div>
        </div>

        {/* Service Components */}
        <div className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl font-bold text-gray-900 mb-4"
              >
                Componentes de Nuestra Metodología
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-gray-600 max-w-3xl mx-auto"
              >
                Para lograr una automatización inteligente exitosa, combinamos estas disciplinas especializadas en un
                enfoque integral y personalizado
              </motion.p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {serviceComponents.map((component, index) => (
                <AnimatedCard
                  key={component.title}
                  hoverEffect="lift"
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="aspect-video relative">
                      <OptimizedImage
                        src={component.image}
                        alt={`${component.title} - Componente de automatización inteligente`}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover"
                        keywords={component.keywords}
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center mr-3">
                          <component.icon className="h-5 w-5 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">{component.title}</h3>
                      </div>

                      <p className="text-gray-600 mb-4 text-sm">{component.description}</p>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm">Incluye:</h4>
                        <ul className="space-y-1">
                          {component.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircle2 className="h-4 w-4 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-600 text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl font-bold text-gray-900 mb-4"
              >
                ¿Por qué elegir Cheland para tu Automatización?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-gray-600 max-w-2xl mx-auto"
              >
                Nuestro enfoque integral en automatización inteligente nos diferencia, con{" "}
                <Link href="/casos-exito" className="text-purple-600 hover:text-purple-700 underline">
                  resultados comprobados
                </Link>{" "}
                en múltiples industrias
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <AnimatedCard key={benefit.title} hoverEffect="glow" className="text-center p-8 bg-gray-50 rounded-lg">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <benefit.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </motion.div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold text-white mb-6"
            >
              ¿Listo para automatizar tu empresa?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
            >
              Contactanos para una consulta gratuita y descubre cómo la automatización inteligente puede transformar tu
              negocio
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex justify-center"
            >
              <AnimatedButton
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100"
                iconRight={<ArrowRight className="h-4 w-4" />}
              >
                <Link href="/contacto">Solicitar consulta</Link>
              </AnimatedButton>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
