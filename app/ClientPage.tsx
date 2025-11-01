"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { ChevronDown, ArrowRight, Bot, Package, CheckCircle2 } from "lucide-react"
import { AnimatedButton } from "@/components/ui/animated-button"
import { AnimatedIcon } from "@/components/ui/animated-icon"
import { AnimatedCard } from "@/components/ui/animated-card"
import { WMSAnimation } from "@/components/wms-animation"

import SchemaOrg from "@/components/schema-org"
import { TestimonialsSchema } from "@/components/testimonials-schema"
import type { TestimonialType } from "@/types/testimonial"

const businessLines = [
  {
    icon: Bot,
    title: "Automatización Inteligente",
    description:
      "Servicios de consultoría especializados en automatización de procesos empresariales utilizando IA, optimización de workflows y desarrollo de soluciones a medida.",
    features: [
      "Consultoría en IA aplicada",
      "Optimización de procesos",
      "Desarrollo personalizado",
      "Automatización de workflows",
    ],
    link: "/servicios",
    linkText: "Ver servicios",
  },
  {
    icon: Package,
    title: "WMS - Sistema de Gestión",
    description:
      "Aplicación web SaaS para gestión integral de pedidos y operaciones logísticas, con flujos de trabajo configurables y trazabilidad completa.",
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

          {/* Hero Section - Full Width Image with Text Overlay */}
          <div className="relative h-[90vh] min-h-[600px] w-full">
            {/* Hero Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src="https://raw.githubusercontent.com/mswitach/assets/main/iStock-1483223036.jpg"
                alt="Equipo de Cheland especializado en automatización inteligente y sistemas WMS para empresas"
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
                  className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-12 text-white"
                >
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent"
                  >
                    Cheland: Automatización Inteligente
                  </motion.span>{" "}
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    y Sistema WMS
                  </motion.span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-lg md:text-xl text-gray-200 mb-12 max-w-2xl mx-auto"
                >
                  Transformamos empresas con dos líneas de negocio: servicios de automatización inteligente con IA y
                  nuestro sistema WMS para gestión logística. Soluciones tecnológicas integrales en Argentina.
                </motion.p>
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

          {/* Business Lines Section */}
          <div className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="inline-block px-3 py-1 text-sm font-medium bg-purple-100 text-purple-800 rounded-full mb-4"
                >
                  NUESTRAS LÍNEAS DE NEGOCIO
                </motion.span>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4"
                >
                  Dos verticales para transformar tu empresa
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl text-gray-600 max-w-3xl mx-auto"
                >
                  Combinamos servicios de consultoría en automatización inteligente con nuestro sistema WMS
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

          {/* WMS Feature Section */}
          <div className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex-1 order-1 lg:order-1"
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

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex-1 order-2 lg:order-2"
                >
                  <WMSAnimation />
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
                Agenda una consulta gratuita y descubre cómo nuestros servicios de automatización inteligente y sistema
                WMS pueden potenciar tu crecimiento.
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
