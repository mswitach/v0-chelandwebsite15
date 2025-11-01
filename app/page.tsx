"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { ChevronDown, Code, ArrowRight, Brain, Workflow, Bot, CheckCircle2, ExternalLink } from "lucide-react"
import { AnimatedButton } from "@/components/ui/animated-button"
import { AnimatedIcon } from "@/components/ui/animated-icon"
import { AnimatedCard } from "@/components/ui/animated-card"
import Head from "next/head"

// Importa el componente SchemaOrg
import SchemaOrg from "@/components/schema-org"

const services = [
  {
    icon: Brain,
    title: "Consultoría en IA",
    description:
      "Implementamos soluciones de IA para automatizar procesos, analizar datos y mejorar la toma de decisiones.",
  },
  {
    icon: Workflow,
    title: "Optimización de Procesos",
    description: "Analizamos y rediseñamos flujos de trabajo para maximizar la eficiencia operativa y reducir costos.",
  },
  {
    icon: Code,
    title: "Desarrollo a Medida",
    description:
      "Creamos software personalizado que se adapta perfectamente a las necesidades específicas de tu empresa.",
  },
  {
    icon: Bot,
    title: "Automatización Inteligente",
    description:
      "Implementamos robots de software y flujos automatizados para tareas repetitivas y procesos complejos.",
  },
]

const testimonials = [
  {
    quote:
      "Cheland transformó completamente nuestros procesos logísticos. La implementación del WMS nos permitió reducir errores en un 85% y aumentar la velocidad de procesamiento en un 60%.",
    author: "María RR.",
    position: "Directora de Operaciones",
    company: "LogTech S.A.",
  },
  {
    quote:
      "La consultoría en IA que recibimos de Cheland nos ayudó a automatizar tareas que antes requerían horas de trabajo manual. Ahora nuestro equipo puede enfocarse en actividades de mayor valor.",
    author: "Carlos M.",
    position: "CTO",
    company: "InnovaT",
  },
  {
    quote:
      "El software desarrollado por Cheland se adaptó perfectamente a nuestras necesidades específicas. Su enfoque en entender nuestro negocio antes de proponer soluciones marcó la diferencia.",
    author: "Laura F.",
    position: "Gerente de Proyectos",
    company: "Grupo Norte",
  },
]

const stats = [
  { value: "85%", label: "Reducción de errores" },
  { value: "60%", label: "Aumento en eficiencia" },
  { value: "40%", label: "Reducción de costos" },
  { value: "3x", label: "ROI promedio" },
]

export default function Home() {
  return (
    <>
      <SchemaOrg />
      <Head>
        <title>Cheland - Consultoría en IA, WMS y Software a Medida</title>
        <link rel="canonical" href="https://cheland.io/" />
      </Head>

      <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-50 via-white to-purple-50">
        <Nav />

        <main className="relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem]">
            <div className="absolute inset-0 bg-gradient-to-r from-white/50 to-transparent"></div>
          </div>

          {/* Hero Section - Full Width Image with Text Overlay */}
          <div className="relative h-[90vh] min-h-[600px] w-full">
            {/* Hero Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src="https://raw.githubusercontent.com/mswitach/assets/main/iStock-1483223036.jpg"
                alt="Equipo de Cheland analizando datos y optimizando procesos empresariales con tecnología avanzada"
                fill
                priority
                className="object-cover"
                sizes="100vw"
              />
              {/* Dark Overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30 z-10"></div>
            </div>

            {/* Hero Content */}
            <div className="relative z-20 flex flex-col justify-center items-center h-full w-full px-4 text-center">
              <div className="max-w-4xl mx-auto">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6 text-white"
                >
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent"
                  >
                    Cheland: Consultoría para optimizar
                  </motion.span>{" "}
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    procesos y software, potenciados por IA
                  </motion.span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto"
                >
                  Ayudamos a empresas a optimizar procesos, desarrollar productos digitales y escalar con soluciones
                  como nuestro WMS.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <AnimatedButton
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                    iconRight={<ArrowRight className="h-4 w-4" />}
                    pulseOnRender
                  >
                    <Link href="/contacto">Solicitar consulta</Link>
                  </AnimatedButton>

                  <AnimatedButton
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                    iconRight={<ExternalLink className="h-4 w-4" />}
                  >
                    <Link href="/wms">Solicitar Demo WMS</Link>
                  </AnimatedButton>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
              >
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                  className="cursor-pointer"
                >
                  <AnimatedIcon icon={<ChevronDown className="h-8 w-8 text-white" />} hoverEffect="bounce" />
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Services Section */}
          <div className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="inline-block px-3 py-1 text-sm font-medium bg-purple-100 text-purple-800 rounded-full mb-4"
                >
                  NUESTROS SERVICIOS
                </motion.span>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4"
                >
                  Soluciones integrales para tu negocio
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl text-gray-600 max-w-3xl mx-auto"
                >
                  Combinamos consultoría estratégica, tecnología avanzada e IA para transformar tu empresa
                </motion.p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {services.map((service, index) => (
                  <AnimatedCard
                    key={service.title}
                    hoverEffect="lift"
                    className="p-6 pt-10 bg-white rounded-lg shadow-md"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="text-center relative"
                    >
                      <div className="flex justify-center">
                        <div className="w-14 h-14 bg-purple-600 rounded-full flex items-center justify-center absolute -top-7">
                          <service.icon className="h-7 w-7 text-white" />
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">{service.title}</h3>
                      <p className="text-gray-600 mb-6">{service.description}</p>
                    </motion.div>
                  </AnimatedCard>
                ))}
              </div>

              <div className="mt-16 text-center">
                <AnimatedButton
                  variant="outline"
                  className="border-purple-200 hover:border-purple-400 text-purple-600"
                  iconRight={<ArrowRight className="h-4 w-4" />}
                >
                  <Link href="/servicios">Ver nuestros servicios</Link>
                </AnimatedButton>
              </div>
            </div>
          </div>

          {/* WMS Feature Section */}
          <div className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex-1 order-2 lg:order-1"
                >
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-1 rounded-lg shadow-2xl">
                    <div className="bg-white rounded-md overflow-hidden">
                      <Image
                        src="https://raw.githubusercontent.com/mswitach/assets/main/wms_demo.png"
                        alt="Interfaz del sistema WMS de Cheland mostrando el panel de control para gestión de pedidos y logística"
                        width={600}
                        height={400}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex-1 order-1 lg:order-2"
                >
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="inline-block px-3 py-1 text-sm font-medium bg-purple-100 text-purple-800 rounded-full mb-4"
                  >
                    PRODUCTO DESTACADO
                  </motion.span>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">WMS: Sistema de Gestión de Pedidos</h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Nuestro WMS es una aplicación web SaaS que permite a las empresas gestionar sus pedidos de forma
                    ágil, configurando flujos de trabajo que involucran a diferentes sectores y perfiles.
                  </p>

                  <ul className="space-y-4 mb-8">
                    {[
                      "Gestión integral de pedidos",
                      "Flujos de trabajo personalizables",
                      "Información en tiempo real",
                      "Trazabilidad completa",
                      "Escalable para empresas de cualquier tamaño",
                    ].map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index }}
                        className="flex items-start"
                      >
                        <CheckCircle2 className="h-6 w-6 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <AnimatedButton
                    className="bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                    iconRight={<ArrowRight className="h-4 w-4" />}
                  >
                    <Link href="/wms" scroll={true}>
                      Descubrir WMS
                    </Link>
                  </AnimatedButton>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="py-16 bg-gradient-to-r from-purple-600 to-blue-600">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl font-bold text-white text-center mb-10"
              >
                Mejoras logradas con WMS
              </motion.h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-sm md:text-base text-white/80">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="inline-block px-3 py-1 text-sm font-medium bg-purple-100 text-purple-800 rounded-full mb-4"
                >
                  TESTIMONIOS
                </motion.span>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4"
                >
                  Lo que dicen nuestros clientes
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl text-gray-600 max-w-3xl mx-auto"
                >
                  Empresas que han transformado sus operaciones con nuestras soluciones
                </motion.p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <AnimatedCard
                    key={index}
                    hoverEffect="glow"
                    className="p-6 bg-white rounded-lg shadow-md flex flex-col h-full"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex-1"
                    >
                      <div className="text-4xl text-purple-200 mb-4">"</div>
                      <p className="text-gray-600 mb-6 italic">{testimonial.quote}</p>
                      <div className="mt-auto">
                        <p className="font-semibold text-gray-900">{testimonial.author}</p>
                        <p className="text-sm text-gray-500">
                          {testimonial.position}, {testimonial.company}
                        </p>
                      </div>
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
                ¿Listo para transformar tu negocio?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
              >
                Agenda una consulta gratuita y descubre cómo podemos ayudarte a optimizar tus procesos y potenciar tu
                crecimiento.
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
                  <Link href="/contacto">Contactar ahora</Link>
                </AnimatedButton>
              </motion.div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}
