"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { ChevronDown, ArrowRight, Bot, Package, CheckCircle2, Sparkles, Workflow, Rocket } from "lucide-react"
import { AnimatedButton } from "@/components/ui/animated-button"
import { AnimatedIcon } from "@/components/ui/animated-icon"
import { AnimatedCard } from "@/components/ui/animated-card"

import SchemaOrg from "@/components/schema-org"
import { TestimonialsSchema } from "@/components/testimonials-schema"
import type { TestimonialType } from "@/types/testimonial"

const businessLines = [
  {
    icon: Bot,
    title: "Automatización con IA",
    description:
      "Transformamos procesos manuales en flujos inteligentes. Desde chatbots hasta automatización de workflows, liberamos tiempo para que tu equipo se enfoque en lo estratégico.",
    features: [
      "Consultoría en IA aplicada",
      "Automatización de workflows",
      "Desarrollo personalizado",
      "Optimización de procesos",
    ],
    link: "/automatizacion-ia",
    linkText: "Ver servicios de IA",
  },
  {
    icon: Package,
    title: "WMS - Sistema de Gestión",
    description:
      "Plataforma SaaS para gestionar pedidos, inventario y operaciones logísticas. Flujos configurables, trazabilidad completa y visibilidad en tiempo real.",
    features: ["Gestión de pedidos", "Flujos personalizables", "Información en tiempo real", "Escalable y flexible"],
    link: "/wms",
    linkText: "Conocer WMS",
  },
]

const testimonials: TestimonialType[] = [
  {
    quote:
      "Cheland transformó completamente nuestros procesos logísticos. La implementación del WMS nos permitió reducir errores en un 85% y aumentar la velocidad de procesamiento en un 60%.",
    author: "María RR.",
    position: "Directora de Operaciones",
    company: "LogTech S.A.",
  },
  {
    quote:
      "La consultoría en automatización inteligente que recibimos de Cheland nos ayudó a optimizar tareas que antes requerían horas de trabajo manual. Ahora nuestro equipo puede enfocarse en actividades de mayor valor.",
    author: "Carlos M.",
    position: "CTO",
    company: "InnovaT",
  },
  {
    quote:
      "El enfoque integral de Cheland, combinando consultoría y tecnología, se adaptó perfectamente a nuestras necesidades específicas. Su metodología de entender nuestro negocio antes de proponer soluciones marcó la diferencia.",
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

const howWeWork = [
  {
    icon: Sparkles,
    title: "1. Entendemos tu negocio",
    description: "Analizamos tus procesos actuales y detectamos oportunidades de mejora.",
  },
  {
    icon: Workflow,
    title: "2. Diseñamos la solución",
    description: "Creamos un plan personalizado que se adapta a tus necesidades específicas.",
  },
  {
    icon: Rocket,
    title: "3. Implementamos y acompañamos",
    description: "Ejecutamos la solución y te acompañamos en cada paso del proceso.",
  },
]

export default function ClientPage() {
  return (
    <>
      <SchemaOrg />

      <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-50 via-white to-purple-50">
        <Nav />

        <main className="relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem]">
            <div className="absolute inset-0 bg-gradient-to-r from-white/50 to-transparent"></div>
          </div>

          <div className="relative h-[90vh] min-h-[600px] w-full">
            <div className="absolute inset-0 z-0">
              <Image
                src="https://raw.githubusercontent.com/mswitach/assets/main/iStock-1483223036.jpg"
                alt="Equipo de Cheland especializado en automatización inteligente y sistemas WMS para empresas"
                fill
                priority
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30 z-10"></div>
            </div>

            <div className="relative z-20 flex flex-col justify-center items-center h-full w-full px-4 text-center">
              <div className="max-w-4xl mx-auto">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6 text-white"
                >
                  Automatización con IA y WMS para empresas que quieren crecer
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-lg md:text-xl text-gray-200 mb-12 max-w-2xl mx-auto"
                >
                  Optimizamos procesos con inteligencia artificial y gestionamos tu logística con nuestro WMS. Dos
                  soluciones, un objetivo: que tu empresa opere mejor.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <AnimatedButton
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700"
                    iconRight={<ArrowRight className="h-4 w-4" />}
                  >
                    <Link href="/contacto">Agendar consulta gratuita</Link>
                  </AnimatedButton>
                  <AnimatedButton
                    size="lg"
                    variant="outline"
                    className="bg-white text-purple-600 border-white hover:bg-purple-600 hover:text-white hover:border-purple-600"
                  >
                    <Link href="/casos-exito">Ver casos de éxito</Link>
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

          <div className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4"
                >
                  ¿Qué necesita tu empresa?
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl text-gray-600 max-w-3xl mx-auto"
                >
                  Elegí la solución que mejor se adapte a tus desafíos
                </motion.p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <AnimatedCard
                  hoverEffect="lift"
                  className="p-8 bg-gradient-to-br from-purple-50 to-white rounded-lg border border-purple-100"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Querés automatizar procesos?</h3>
                  <p className="text-gray-600 mb-6">
                    Si perdés tiempo en tareas repetitivas, necesitás optimizar workflows o querés implementar IA en tu
                    operación.
                  </p>
                  <AnimatedButton
                    className="bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 w-full"
                    iconRight={<ArrowRight className="h-4 w-4" />}
                  >
                    <Link href="/automatizacion-ia">Ver Automatización con IA</Link>
                  </AnimatedButton>
                </AnimatedCard>

                <AnimatedCard
                  hoverEffect="lift"
                  className="p-8 bg-gradient-to-br from-blue-50 to-white rounded-lg border border-blue-100"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Necesitás gestionar tu logística?</h3>
                  <p className="text-gray-600 mb-6">
                    Si manejás inventario, pedidos o almacenes y querés tener control total con trazabilidad en tiempo
                    real.
                  </p>
                  <AnimatedButton
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 w-full"
                    iconRight={<ArrowRight className="h-4 w-4" />}
                  >
                    <Link href="/wms">Conocer WMS</Link>
                  </AnimatedButton>
                </AnimatedCard>
              </div>
            </div>
          </div>

          {/* Business Lines Section */}
          <div className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="inline-block px-3 py-1 text-sm font-medium bg-purple-100 text-purple-800 rounded-full mb-4"
                >
                  NUESTRAS SOLUCIONES
                </motion.span>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4"
                >
                  Dos líneas de negocio, un mismo compromiso
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl text-gray-600 max-w-3xl mx-auto"
                >
                  Combinamos servicios de automatización inteligente con nuestro sistema WMS
                </motion.p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {businessLines.map((line, index) => (
                  <AnimatedCard
                    key={line.title}
                    hoverEffect="lift"
                    className="p-8 bg-white rounded-lg shadow-lg border border-gray-100"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                    >
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mr-4">
                          <line.icon className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">{line.title}</h3>
                      </div>

                      <p className="text-gray-600 mb-6 text-lg leading-relaxed">{line.description}</p>

                      <ul className="space-y-3 mb-8">
                        {line.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <CheckCircle2 className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <AnimatedButton
                        variant="outline"
                        className="border-purple-200 hover:border-purple-400 text-purple-600 w-full"
                        iconRight={<ArrowRight className="h-4 w-4" />}
                      >
                        <Link href={line.link}>{line.linkText}</Link>
                      </AnimatedButton>
                    </motion.div>
                  </AnimatedCard>
                ))}
              </div>
            </div>
          </div>

          <div className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="inline-block px-3 py-1 text-sm font-medium bg-purple-100 text-purple-800 rounded-full mb-4"
                >
                  NUESTRA METODOLOGÍA
                </motion.span>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4"
                >
                  Cómo trabajamos
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl text-gray-600 max-w-3xl mx-auto"
                >
                  Un proceso simple y efectivo para transformar tu operación
                </motion.p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {howWeWork.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </motion.div>
                ))}
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
                <Link href="/casos-exito" className="text-white hover:text-purple-200 underline">
                  Resultados comprobados
                </Link>
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

          <TestimonialsSchema testimonials={testimonials} />

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
                Agenda una consulta gratuita y descubre cómo podemos ayudarte a crecer.
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Cheland",
            url: "https://cheland.io",
            logo: "https://cheland.io/cheland_transparent.png",
            description:
              "Automatización inteligente y sistema WMS para optimizar procesos empresariales y gestión logística",
            address: {
              "@type": "PostalAddress",
              addressCountry: "Argentina",
              addressLocality: "Buenos Aires",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+54-9-11-2176-6464",
              contactType: "customer service",
              email: "info@cheland.io",
            },
            sameAs: ["https://www.linkedin.com/company/cheland"],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Servicios y Productos Tecnológicos",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Automatización Inteligente",
                    description: "Servicios de consultoría en automatización de procesos con IA",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "SoftwareApplication",
                    name: "Sistema WMS",
                    description: "Aplicación web para gestión integral de pedidos y operaciones logísticas",
                  },
                },
              ],
            },
          }),
        }}
      />
    </>
  )
}
