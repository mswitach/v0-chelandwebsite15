"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, FileText, HelpCircle, ArrowRight, Search } from "lucide-react"

const categorias = [
  {
    id: "blog",
    titulo: "Blog",
    descripcion: "Artículos sobre WMS, automatización con IA y optimización de operaciones",
    icono: BookOpen,
    link: "/blog",
    color: "blue",
  },
  {
    id: "guias",
    titulo: "Guías Prácticas",
    descripcion: "Checklists y recursos descargables para implementar mejoras",
    icono: FileText,
    link: "/recursos#guias",
    color: "green",
  },
  {
    id: "faqs",
    titulo: "Preguntas Frecuentes",
    descripcion: "Respuestas sobre WMS, automatización, precios e implementación",
    icono: HelpCircle,
    link: "/recursos#faqs",
    color: "purple",
  },
]

const temasBlog = [
  "WMS para pymes en Argentina",
  "WMS vs TMS vs OMS: diferencias",
  "ROI de implementar un WMS",
  "Automatización con IA en logística",
  "Implementación WMS: 30-60-90 días",
  "Integraciones de WMS con e-commerce",
]

const guias = [
  {
    titulo: "Checklist: ¿Necesitás un WMS?",
    descripcion: "Evaluá si tu operación está lista para un sistema de gestión de depósitos",
    link: "#",
  },
  {
    titulo: "Guía de Implementación WMS",
    descripcion: "Paso a paso para una implementación exitosa en 30-60-90 días",
    link: "#",
  },
  {
    titulo: "ROI de Automatización con IA",
    descripcion: "Calculá el retorno de inversión de automatizar procesos críticos",
    link: "#",
  },
]

const faqs = [
  {
    categoria: "WMS",
    preguntas: [
      {
        pregunta: "¿En cuánto tiempo puedo implementar Cheland WMS?",
        respuesta:
          "La mayoría de los pilotos se montan en 1-2 semanas. El go-live completo toma entre 3-6 semanas según la complejidad de tu operación.",
      },
      {
        pregunta: "¿Qué integra el WMS?",
        respuesta:
          "Cheland WMS integra con e-commerce (Shopify, Tiendanube, etc.), ERPs y TMS vía API. Desarrollamos conectores a medida si es necesario.",
      },
      {
        pregunta: "¿Necesito hardware especial?",
        respuesta:
          "No. Cheland WMS funciona en tablets, smartphones y computadoras estándar. Opcionalmente podés usar lectores de códigos de barras.",
      },
    ],
  },
  {
    categoria: "Automatización IA",
    preguntas: [
      {
        pregunta: "¿Qué herramientas usan para automatización?",
        respuesta:
          "Usamos RPA, LLMs y agentes inteligentes según el caso. Todas las soluciones se integran con tus sistemas existentes vía API.",
      },
      {
        pregunta: "¿Cómo aseguran la seguridad de datos?",
        respuesta:
          "Trabajamos con entornos segregados, logs de auditoría y control de acceso estricto. Cumplimos con estándares de seguridad empresarial.",
      },
      {
        pregunta: "¿Cuál es el tiempo de implementación?",
        respuesta:
          "Los pilots de automatización toman 21 días. El escalado completo depende de la complejidad, típicamente 4-8 semanas.",
      },
    ],
  },
  {
    categoria: "Precios y Soporte",
    preguntas: [
      {
        pregunta: "¿Cómo son los planes de precios?",
        respuesta:
          "Ofrecemos planes Pilot, Pro y Enterprise según volumen transaccional. Incluyen setup, training y soporte. Consultá precios específicos en /precios.",
      },
      {
        pregunta: "¿Qué incluye el soporte?",
        respuesta:
          "Todos los planes incluyen soporte técnico, actualizaciones y training inicial. Los planes Pro y Enterprise tienen SLA garantizado.",
      },
      {
        pregunta: "¿Puedo cambiar de plan después?",
        respuesta:
          "Sí, podés hacer upgrade o downgrade según tu operación. Los cambios se aplican en el siguiente ciclo de facturación.",
      },
    ],
  },
]

export default function RecursosPageClient() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Recursos</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Todo lo que necesitás saber sobre WMS, automatización con IA y optimización de operaciones. Guías prácticas,
            artículos y respuestas a tus preguntas.
          </p>
        </div>
      </section>

      {/* Categorías */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {categorias.map((categoria) => {
            const Icono = categoria.icono
            return (
              <Card key={categoria.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-16 h-16 bg-${categoria.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <Icono className={`h-8 w-8 text-${categoria.color}-600`} />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">{categoria.titulo}</h2>
                  <p className="text-slate-600 mb-6">{categoria.descripcion}</p>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href={categoria.link}>
                      Explorar
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Temas del Blog */}
      <section className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Temas del Blog</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {temasBlog.map((tema) => (
              <Link
                key={tema}
                href="/blog"
                className="p-4 bg-white border border-slate-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3">
                  <Search className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700 hover:text-blue-600">{tema}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Guías Descargables */}
      <section id="guias" className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Guías Prácticas</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {guias.map((guia) => (
                <Card key={guia.titulo} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <FileText className="h-8 w-8 text-green-600 mb-4" />
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{guia.titulo}</h3>
                    <p className="text-slate-600 text-sm mb-4">{guia.descripcion}</p>
                    <Button asChild variant="outline" size="sm" className="w-full bg-transparent">
                      <Link href={guia.link}>Descargar</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Preguntas Frecuentes</h2>
          <div className="space-y-8">
            {faqs.map((seccion) => (
              <div key={seccion.categoria}>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">{seccion.categoria}</h3>
                <div className="space-y-4">
                  {seccion.preguntas.map((faq, idx) => (
                    <Card key={idx}>
                      <CardContent className="p-6">
                        <h4 className="text-lg font-semibold text-slate-900 mb-2">{faq.pregunta}</h4>
                        <p className="text-slate-700 leading-relaxed">{faq.respuesta}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">¿No encontraste lo que buscabas?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Hablemos directamente. Coordiná una demo o diagnóstico personalizado.
          </p>
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8">
            <Link href="/contacto">
              Contactar
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
