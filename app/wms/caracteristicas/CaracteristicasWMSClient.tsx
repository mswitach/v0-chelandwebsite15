"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Package, Database, CheckCircle, Layers } from "lucide-react"

const components = [
  {
    icon: Package,
    title: "Pallets",
    description: "Unidad de carga estandarizada para movimientos y almacenamiento masivo.",
    features: ["ID único de pallet", "Zona y ubicación actuales", "Historial de movimientos"],
  },
  {
    icon: Layers,
    title: "Pallet-lines",
    description: "Subdivisiones del pallet que agrupan SKUs, cantidades y atributos.",
    features: ["SKU, lote/serie, cantidad", "Dimensiones/peso (opcional)", "Vencimiento (si aplica)"],
  },
  {
    icon: Database,
    title: "SKUs",
    description: "Identificación única por producto para trazabilidad total.",
    features: [
      "Catálogo con atributos (marca, familia, etc.)",
      "Mapeo a pallet-lines y ubicaciones",
      "Series y lotes (opcional)",
    ],
  },
]

const additionalFeatures = [
  {
    title: "Integraciones",
    description: "APIs logísticas, e-commerce, facturación y datos maestros.",
  },
  {
    title: "Usuarios & permisos",
    description: "Perfiles, roles, autorización de movimientos y auditoría.",
  },
  {
    title: "Reportes & analíticas",
    description: "KPIs de stock, rotación, OTIF, lead times y productividad.",
  },
]

const orderSteps = [
  { step: 1, title: "Creado", description: "Ingreso del pedido por API, e-commerce o carga operativa." },
  { step: 2, title: "Armado", description: "Picking y consolidación según reglas y disponibilidades." },
  { step: 3, title: "Listo para envío", description: "Control final, packing y generación de etiquetas/documentos." },
  { step: 4, title: "Entregado", description: "Confirmación y actualización de estados hacia el canal origen." },
]

export default function CaracteristicasWMSClient() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />

      <main className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Características del{" "}
              <span className="bg-gradient-to-r from-black to-gray-500 bg-clip-text text-transparent">WMS+</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Un sistema flexible y potente para gestionar tu depósito, controlar inventarios y asegurar trazabilidad
              total de punta a punta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                <Link href="/contacto" className="flex items-center">
                  Solicitar Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link href="/wms" className="flex items-center">
                  Volver al WMS
                </Link>
              </Button>
            </div>

            {/* Key Benefits */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="flex items-start gap-3 text-left">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Stock en tiempo real</p>
                  <p className="text-sm text-gray-600">Por ubicación y SKU</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-left">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Movimientos con trazabilidad</p>
                  <p className="text-sm text-gray-600">Entre zonas controladas</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-left">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Ciclo de vida configurable</p>
                  <p className="text-sm text-gray-600">De extremo a extremo</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Estructura Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-20"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Estructura flexible y escalable del depósito
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Definí tu operación con una jerarquía clara y adaptable a distintos layouts físicos y a múltiples
                  sitios.
                </p>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-3 h-3 rounded-full bg-purple-600 mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold">Depósitos:</p>
                      <p className="text-gray-600">Uno o varios, con parámetros operativos propios.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-3 h-3 rounded-full bg-purple-600 mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold">Zonas:</p>
                      <p className="text-gray-600">
                        Recepción, control, reserva, picking, packing, expedición (configurable).
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-3 h-3 rounded-full bg-purple-600 mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold">Ubicaciones:</p>
                      <p className="text-gray-600">
                        Posiciones únicas (pasillo/estante/nivel/slot) para trazabilidad exacta.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>Beneficio:</strong> organización precisa que acelera operaciones y minimiza errores.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="font-semibold mb-4">Ejemplo de jerarquía</h3>
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <p className="text-sm text-gray-500">Depósito</p>
                    <p className="font-medium">Casa Central</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="border border-gray-200 rounded-lg p-3">
                      <p className="text-sm text-gray-500">Zona</p>
                      <p className="font-medium">Reserva</p>
                      <p className="text-xs text-gray-500 mt-1">Ubicaciones: R-01-01-01 …</p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-3">
                      <p className="text-sm text-gray-500">Zona</p>
                      <p className="font-medium">Picking</p>
                      <p className="text-xs text-gray-500 mt-1">Ubicaciones: P-02-03-05 …</p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-3">
                      <p className="text-sm text-gray-500">Zona</p>
                      <p className="font-medium">Expedición</p>
                      <p className="text-xs text-gray-500 mt-1">Docks: D-01 / D-02</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-600">
                    <strong>Tip:</strong> combiná reglas de reposición automática para mantener abastecido el picking
                    desde reserva.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Componentes Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Componentes clave para la gestión de inventario
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Control granular de la mercadería, desde la unidad de carga hasta el ítem individual.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {components.map((component, index) => (
                <motion.div
                  key={component.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center mb-4">
                        <component.icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-xl mb-2">{component.title}</CardTitle>
                      <CardDescription className="mb-4">{component.description}</CardDescription>
                      <ul className="space-y-2">
                        {component.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-2 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-700">
                <strong>Beneficio:</strong> saber exactamente qué, cuánto y dónde, en todo momento.
              </p>
            </div>
          </motion.section>

          {/* Movimientos Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-20"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Movimientos inteligentes y stock en tiempo real
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Ejecutá y auditá movimientos entre zonas (p. ej., de <em>reserva</em> a <em>picking</em>), con
                  actualización inmediata de inventario.
                </p>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-3 h-3 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600">
                      Entradas, salidas, transferencias, reposiciones y ajustes controlados por permisos.
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-3 h-3 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600">
                      Cálculo de stock por depósito, zona, ubicación y SKU (en tiempo real).
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-3 h-3 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600">Trazabilidad completa: quién, cuándo, desde-dónde y hacia-dónde.</p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>Beneficio:</strong> disponibilidad asegurada y menos quiebres de stock.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="font-semibold mb-4">Flujo de ejemplo</h3>
                <div className="space-y-4">
                  {[
                    "Recepción → Control de calidad",
                    "Ubicación en reserva",
                    "Reposición hacia picking (automática o manual)",
                    "Preparación, packing y expedición",
                  ].map((step, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white flex items-center justify-center text-sm font-medium">
                        {index + 1}
                      </div>
                      <p className="text-sm">{step}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-600">
                    <strong>Tip:</strong> habilitá reglas de reposición por mínimos/máximos para cada SKU en picking.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Pedidos Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Ciclo de vida del pedido con trazabilidad total
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Estados personalizables según tu operación. Trazabilidad para equipo y clientes.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-6 top-0 h-full w-0.5 bg-gray-200"></div>
                <div className="space-y-8">
                  {orderSteps.map((item, index) => (
                    <div key={index} className="relative pl-16">
                      <div className="absolute left-0 w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white flex items-center justify-center font-semibold">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-700">
                <strong>Extras:</strong> validaciones operativas, auditoría de cambios, SLAs, y webhooks de eventos.
              </p>
            </div>
          </motion.section>

          {/* Funcionalidades Adicionales */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Funcionalidades adicionales
              </h2>
              <p className="text-lg text-gray-600">Ampliá capacidades sin fricción.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {additionalFeatures.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </motion.section>

          {/* CTA Final */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para ver el WMS+ en acción?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Te mostramos cómo se adapta a tu operación y armamos un plan de implementación.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contacto"
                className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                Solicitar Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-colors"
              >
                Hablar con un especialista
              </Link>
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
