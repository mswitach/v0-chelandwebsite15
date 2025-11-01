"use client"

import { motion } from "framer-motion"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { Check, ArrowRight } from "lucide-react"
import { AnimatedButton } from "@/components/ui/animated-button"
import { AnimatedCard } from "@/components/ui/animated-card"
import Link from "next/link"

const wmsPlans = [
  {
    name: "Pilot",
    description: "Ideal para validar el WMS en tu operación",
    price: "Consultar",
    features: [
      "Hasta 500 líneas/mes",
      "1-2 usuarios",
      "Módulos básicos (recepción, picking, despacho)",
      "Soporte por email",
      "Implementación en 1-2 semanas",
    ],
    cta: "Iniciar Pilot",
    highlighted: false,
  },
  {
    name: "Pro",
    description: "Para operaciones en crecimiento",
    price: "Desde USD 500/mes",
    features: [
      "Hasta 5,000 líneas/mes",
      "Usuarios ilimitados",
      "Todos los módulos WMS",
      "Integraciones API",
      "Soporte prioritario",
      "Capacitación incluida",
      "SLA 99.5%",
    ],
    cta: "Contratar Pro",
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "Solución completa para grandes operaciones",
    price: "Consultar",
    features: [
      "Líneas ilimitadas",
      "Usuarios ilimitados",
      "Personalización completa",
      "Integraciones a medida",
      "Soporte 24/7",
      "Account manager dedicado",
      "SLA 99.9%",
      "Ambientes de staging",
    ],
    cta: "Contactar ventas",
    highlighted: false,
  },
]

const iaPlans = [
  {
    name: "Diagnóstico",
    description: "Evaluación de oportunidades de automatización",
    price: "Sin cargo",
    features: [
      "Análisis de procesos actuales",
      "Identificación de oportunidades",
      "Estimación de ROI",
      "Roadmap de implementación",
    ],
    cta: "Solicitar diagnóstico",
    highlighted: false,
  },
  {
    name: "Pilot",
    description: "Prueba de concepto en 21 días",
    price: "Desde USD 3,000",
    features: [
      "1 proceso automatizado",
      "Implementación en 3 semanas",
      "Validación de valor",
      "Documentación completa",
      "Capacitación del equipo",
    ],
    cta: "Iniciar Pilot",
    highlighted: true,
  },
  {
    name: "Producción",
    description: "Despliegue completo y escalamiento",
    price: "Consultar",
    features: [
      "Múltiples procesos",
      "Integración completa",
      "Soporte continuo",
      "Mantenimiento incluido",
      "Mejoras iterativas",
      "SLA personalizado",
    ],
    cta: "Contactar ventas",
    highlighted: false,
  },
]

const faqs = [
  {
    question: "¿Los precios incluyen implementación?",
    answer:
      "Los planes Pilot incluyen implementación básica. Los planes Pro y Enterprise incluyen implementación completa, capacitación y soporte durante el onboarding.",
  },
  {
    question: "¿Puedo cambiar de plan?",
    answer:
      "Sí, puedes hacer upgrade o downgrade de tu plan en cualquier momento. Los cambios se aplican en el siguiente ciclo de facturación.",
  },
  {
    question: "¿Qué métodos de pago aceptan?",
    answer: "Aceptamos transferencia bancaria, tarjeta de crédito y débito automático. Facturación mensual o anual.",
  },
  {
    question: "¿Hay costos de setup?",
    answer:
      "El plan Pilot no tiene costo de setup. Los planes Pro y Enterprise pueden tener un costo único de implementación según la complejidad y personalización requerida.",
  },
  {
    question: "¿Qué incluye el soporte?",
    answer:
      "Todos los planes incluyen soporte técnico. El nivel de soporte varía: email para Pilot, prioritario para Pro, y 24/7 con account manager para Enterprise.",
  },
]

export default function PreciosClient() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-6"
            >
              PRECIOS
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Planes flexibles para cada etapa de tu negocio
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Desde pilotos para validar hasta soluciones enterprise. Sin sorpresas, con soporte incluido.
            </motion.p>
          </div>
        </section>

        {/* WMS Pricing */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Planes WMS</h2>
              <p className="text-xl text-gray-600">Gestión de pedidos y operaciones logísticas</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {wmsPlans.map((plan, index) => (
                <AnimatedCard
                  key={index}
                  hoverEffect="lift"
                  className={`p-8 rounded-lg ${
                    plan.highlighted
                      ? "bg-gradient-to-br from-purple-600 to-blue-600 text-white border-2 border-purple-600 shadow-xl"
                      : "bg-white border border-gray-200"
                  }`}
                >
                  <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? "text-white" : "text-gray-900"}`}>
                    {plan.name}
                  </h3>
                  <p className={`mb-6 ${plan.highlighted ? "text-white/90" : "text-gray-600"}`}>{plan.description}</p>
                  <div className="mb-6">
                    <span className={`text-4xl font-bold ${plan.highlighted ? "text-white" : "text-gray-900"}`}>
                      {plan.price}
                    </span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check
                          className={`h-5 w-5 mr-2 flex-shrink-0 mt-0.5 ${plan.highlighted ? "text-white" : "text-purple-600"}`}
                        />
                        <span className={plan.highlighted ? "text-white" : "text-gray-700"}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <AnimatedButton
                    className={`w-full ${
                      plan.highlighted
                        ? "bg-white text-purple-600 hover:bg-gray-100"
                        : "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700"
                    }`}
                    iconRight={<ArrowRight className="h-4 w-4" />}
                  >
                    <Link href="/contacto">{plan.cta}</Link>
                  </AnimatedButton>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* IA Pricing */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Planes Automatización con IA</h2>
              <p className="text-xl text-gray-600">RPA, chatbots y agentes inteligentes</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {iaPlans.map((plan, index) => (
                <AnimatedCard
                  key={index}
                  hoverEffect="lift"
                  className={`p-8 rounded-lg ${
                    plan.highlighted
                      ? "bg-gradient-to-br from-purple-600 to-blue-600 text-white border-2 border-purple-600 shadow-xl"
                      : "bg-white border border-gray-200"
                  }`}
                >
                  <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? "text-white" : "text-gray-900"}`}>
                    {plan.name}
                  </h3>
                  <p className={`mb-6 ${plan.highlighted ? "text-white/90" : "text-gray-600"}`}>{plan.description}</p>
                  <div className="mb-6">
                    <span className={`text-4xl font-bold ${plan.highlighted ? "text-white" : "text-gray-900"}`}>
                      {plan.price}
                    </span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check
                          className={`h-5 w-5 mr-2 flex-shrink-0 mt-0.5 ${plan.highlighted ? "text-white" : "text-purple-600"}`}
                        />
                        <span className={plan.highlighted ? "text-white" : "text-gray-700"}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <AnimatedButton
                    className={`w-full ${
                      plan.highlighted
                        ? "bg-white text-purple-600 hover:bg-gray-100"
                        : "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700"
                    }`}
                    iconRight={<ArrowRight className="h-4 w-4" />}
                  >
                    <Link href="/contacto">{plan.cta}</Link>
                  </AnimatedButton>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Preguntas frecuentes sobre precios</h2>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <AnimatedCard key={index} hoverEffect="glow" className="p-6 bg-white border border-gray-200 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">¿Necesitas un plan personalizado?</h2>
            <p className="text-xl text-white/90 mb-8">Contactanos para diseñar una solución a medida de tu operación</p>
            <AnimatedButton
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100"
              iconRight={<ArrowRight className="h-5 w-5" />}
            >
              <Link href="/contacto">Contactar ventas</Link>
            </AnimatedButton>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
