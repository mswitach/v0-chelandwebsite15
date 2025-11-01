"use client"

import { motion } from "framer-motion"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { Zap, MessageSquare, Brain, CheckCircle2, ArrowRight, Clock, TrendingDown, Shield } from "lucide-react"
import { AnimatedButton } from "@/components/ui/animated-button"
import { AnimatedCard } from "@/components/ui/animated-card"
import Link from "next/link"

const useCases = [
  {
    icon: Zap,
    title: "Pedidos → WMS",
    description:
      "Lectura y fusión automática de pedidos desde múltiples fuentes (ERP, planillas, apps) con alta automática en WMS.",
    benefits: ["Eliminación de carga manual", "Reducción de errores de tipeo", "Procesamiento en tiempo real"],
  },
  {
    icon: MessageSquare,
    title: "Atención y Soporte",
    description:
      "Chatbot con conocimiento profundo de tus operaciones, SLAs y procesos para atención 24/7 a clientes y equipo interno.",
    benefits: ["Respuestas instantáneas", "Disponibilidad 24/7", "Escalamiento inteligente"],
  },
  {
    icon: Brain,
    title: "Backoffice Inteligente",
    description:
      "Agentes que concilian datos, monitorean excepciones y notifican proactivamente sobre situaciones críticas.",
    benefits: ["Conciliaciones automáticas", "Alertas proactivas", "Reducción de tareas repetitivas"],
  },
]

const methodology = [
  {
    step: "1",
    title: "Descubrimiento",
    description: "Entendemos tu operación, identificamos puntos de dolor y oportunidades de automatización.",
  },
  {
    step: "2",
    title: "Pilot (21 días)",
    description: "Implementamos un piloto funcional en 3 semanas para validar el valor y ajustar la solución.",
  },
  {
    step: "3",
    title: "Despliegue y Escalado",
    description: "Rollout completo con capacitación, documentación y soporte continuo.",
  },
]

const benefits = [
  {
    icon: Clock,
    title: "Ahorro de tiempo",
    description: "Reducción de 60-80% en tareas manuales repetitivas",
  },
  {
    icon: TrendingDown,
    title: "Menos errores",
    description: "Disminución de 70-90% en errores de procesamiento",
  },
  {
    icon: Shield,
    title: "Mayor control",
    description: "Trazabilidad completa y auditoría de todas las operaciones",
  },
]

const faqs = [
  {
    question: "¿Qué herramientas usan para automatización?",
    answer:
      "Utilizamos RPA (Robotic Process Automation), LLMs (Large Language Models), agentes inteligentes y APIs de integración según las necesidades específicas de cada proyecto.",
  },
  {
    question: "¿Cómo aseguran la seguridad de los datos?",
    answer:
      "Implementamos entornos segregados, logs de auditoría completos, control de acceso granular y cumplimos con estándares de seguridad de la industria.",
  },
  {
    question: "¿Cuánto tiempo toma implementar una automatización?",
    answer:
      "Nuestros pilotos se implementan en 21 días. El despliegue completo varía según la complejidad, típicamente entre 4-8 semanas.",
  },
  {
    question: "¿Qué ROI puedo esperar?",
    answer:
      "Los clientes típicamente ven retorno de inversión en 6-12 meses a través de ahorro de horas, reducción de errores y mejora en tiempos de ciclo.",
  },
]

export default function AutomatizacionIAClient() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-purple-50 via-white to-blue-50 overflow-hidden">
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-6"
              >
                AUTOMATIZACIÓN INTELIGENTE
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
              >
                Automatización con IA donde más duele tu operación
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
              >
                RPA, chatbots y agentes que ejecutan tareas, integrados a tus sistemas
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                <AnimatedButton
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700"
                  iconRight={<ArrowRight className="h-5 w-5" />}
                >
                  <Link href="/contacto">Solicitar diagnóstico</Link>
                </AnimatedButton>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Casos de uso que transforman operaciones
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Automatizamos los procesos críticos que consumen tiempo y generan errores
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <AnimatedCard key={index} hoverEffect="lift" className="p-8 bg-white border border-gray-200 rounded-lg">
                  <div className="w-14 h-14 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                    <useCase.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
                  <p className="text-gray-600 mb-6">{useCase.description}</p>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">ROI y Payback</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Resultados medibles en ahorro de tiempo, reducción de errores y mejora de procesos
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cómo trabajamos</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Metodología ágil con resultados rápidos y escalamiento progresivo
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {methodology.map((phase, index) => (
                <div key={index} className="relative">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {phase.step}
                    </div>
                    {index < methodology.length - 1 && (
                      <div className="hidden md:block flex-1 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 ml-4" />
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{phase.title}</h3>
                  <p className="text-gray-600">{phase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Preguntas frecuentes</h2>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <AnimatedCard key={index} hoverEffect="glow" className="p-6 bg-white rounded-lg">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ¿Listo para automatizar tus procesos críticos?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Agenda un diagnóstico gratuito y descubre cómo la automatización con IA puede transformar tu operación
            </p>
            <AnimatedButton
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100"
              iconRight={<ArrowRight className="h-5 w-5" />}
            >
              <Link href="/contacto">Solicitar diagnóstico</Link>
            </AnimatedButton>
          </div>
        </section>
      </main>

      <Footer />

      {/* Schema.org JSON-LD per refactor doc section 11.5 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Automatización con IA",
            provider: {
              "@type": "Organization",
              name: "Cheland",
            },
            areaServed: "LATAM",
            serviceType: "Automation, RPA, Chatbots, Agents",
            url: "https://cheland.io/automatizacion-ia",
          }),
        }}
      />

      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </div>
  )
}
