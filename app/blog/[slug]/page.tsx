"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { Calendar, Clock, Tag, Share2, ArrowLeft, Twitter, Facebook, Linkedin } from "lucide-react"

// Ejemplo de post multimedia
const post = {
  title: "Transformación Digital: El Camino Hacia el Éxito Empresarial",
  date: "15 de Marzo, 2025",
  readTime: "5 min",
  author: "María González",
  authorRole: "Consultora de Innovación",
  authorImage: "/placeholder.svg?height=100&width=100",
  category: "Tecnología",
  tags: ["Transformación Digital", "Innovación", "Estrategia"],
  heroImage: "/placeholder.svg?height=600&width=1200",
  content: [
    {
      type: "paragraph",
      content:
        "La transformación digital no es simplemente una tendencia pasajera, sino una necesidad imperativa para las empresas que desean mantenerse competitivas en el panorama empresarial actual. En un mundo donde la tecnología evoluciona a un ritmo sin precedentes, las organizaciones deben adaptarse rápidamente para satisfacer las cambiantes expectativas de los clientes y aprovechar las nuevas oportunidades de mercado.",
    },
    {
      type: "heading",
      content: "¿Qué es la Transformación Digital?",
    },
    {
      type: "paragraph",
      content:
        "La transformación digital implica la integración de tecnologías digitales en todas las áreas de una empresa, cambiando fundamentalmente la forma en que opera y entrega valor a sus clientes. Va más allá de la simple implementación de nuevas herramientas; requiere un cambio cultural que desafía constantemente el statu quo, experimenta y se siente cómodo con el fracaso.",
    },
    {
      type: "image",
      url: "/placeholder.svg?height=400&width=800",
      caption: "La transformación digital abarca múltiples aspectos de la empresa",
    },
    {
      type: "heading",
      content: "Beneficios de la Transformación Digital",
    },
    {
      type: "list",
      items: [
        "Mayor eficiencia operativa y reducción de costos",
        "Mejora en la experiencia del cliente",
        "Capacidad para tomar decisiones basadas en datos",
        "Creación de nuevos modelos de negocio",
        "Agilidad y adaptabilidad mejoradas",
      ],
    },
    {
      type: "paragraph",
      content:
        "Las empresas que han adoptado con éxito la transformación digital han experimentado un aumento significativo en sus ingresos y una mayor satisfacción del cliente. Según un estudio reciente, las organizaciones digitalmente maduras tienen un 26% más de rentabilidad que sus competidores.",
    },
    {
      type: "quote",
      content:
        "La transformación digital no se trata solo de tecnología, sino de reimaginar tu negocio para la era digital.",
      author: "Satya Nadella, CEO de Microsoft",
    },
    {
      type: "heading",
      content: "Pasos para una Transformación Digital Exitosa",
    },
    {
      type: "paragraph",
      content:
        "Implementar una estrategia de transformación digital efectiva requiere un enfoque metódico y bien planificado. Aquí hay algunos pasos clave a considerar:",
    },
    {
      type: "video",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      caption: "Estrategias para una transformación digital exitosa",
    },
    {
      type: "paragraph",
      content:
        "En Cheland, ayudamos a las empresas a navegar por su viaje de transformación digital, proporcionando soluciones personalizadas que se alinean con sus objetivos comerciales específicos. Nuestro enfoque holístico garantiza que la tecnología se implemente de manera que complemente y mejore los procesos existentes, en lugar de interrumpirlos.",
    },
    {
      type: "heading",
      content: "Conclusión",
    },
    {
      type: "paragraph",
      content:
        "La transformación digital es un viaje continuo, no un destino. Las empresas que adoptan esta mentalidad y se comprometen a evolucionar constantemente estarán mejor posicionadas para prosperar en el futuro digital. Al invertir en las personas, los procesos y la tecnología adecuados, las organizaciones pueden desbloquear nuevas oportunidades de crecimiento y mantener una ventaja competitiva en un mercado cada vez más digital.",
    },
  ],
  relatedPosts: [
    {
      slug: "inteligencia-artificial-negocios",
      title: "Inteligencia Artificial: Aplicaciones Prácticas para tu Negocio",
      image: "/placeholder.svg?height=150&width=300",
    },
    {
      slug: "optimizacion-procesos-wms",
      title: "Optimización de Procesos Logísticos con WMS",
      image: "/placeholder.svg?height=150&width=300",
    },
    {
      slug: "seguridad-informatica-empresas",
      title: "Seguridad Informática: Protegiendo los Activos Digitales de tu Empresa",
      image: "/placeholder.svg?height=150&width=300",
    },
  ],
}

export default function BlogPostPage() {
  const params = useParams()
  const slug = params.slug

  return (
    <div className="min-h-screen bg-white">
      <Nav />

      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
            <Link href="/blog" className="inline-flex items-center text-purple-600 hover:text-blue-600 mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al blog
            </Link>

            <h1 className="text-3xl md:text-4xl font-bold mb-4" id="article-title">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
              <span className="flex items-center gap-1">
                <Calendar size={16} />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={16} />
                {post.readTime}
              </span>
              <span className="flex items-center gap-1">
                <Tag size={16} />
                {post.category}
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative h-[400px] w-full mb-8 rounded-lg overflow-hidden"
          >
            <Image src={post.heroImage || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
          </motion.div>

          <div className="flex flex-col md:flex-row gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="md:w-16 flex md:flex-col items-center gap-4 md:sticky md:top-24 md:self-start"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer">
                <Twitter size={18} className="text-gray-700" />
              </div>
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer">
                <Facebook size={18} className="text-gray-700" />
              </div>
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer">
                <Linkedin size={18} className="text-gray-700" />
              </div>
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer">
                <Share2 size={18} className="text-gray-700" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex-1"
            >
              <div className="prose prose-lg max-w-none">
                {post.content.map((item, index) => {
                  if (item.type === "paragraph") {
                    return (
                      <p key={index} className="mb-6 text-gray-700 leading-relaxed">
                        {item.content}
                      </p>
                    )
                  } else if (item.type === "heading") {
                    return (
                      <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
                        {item.content}
                      </h2>
                    )
                  } else if (item.type === "image") {
                    return (
                      <figure key={index} className="my-8">
                        <div className="relative h-[300px] w-full rounded-lg overflow-hidden">
                          <Image
                            src={item.url || "/placeholder.svg"}
                            alt={item.caption || ""}
                            fill
                            className="object-cover"
                          />
                        </div>
                        {item.caption && (
                          <figcaption className="text-center text-sm text-gray-500 mt-2">{item.caption}</figcaption>
                        )}
                      </figure>
                    )
                  } else if (item.type === "list") {
                    return (
                      <ul key={index} className="list-disc pl-6 mb-6 space-y-2">
                        {item.items.map((listItem, i) => (
                          <li key={i} className="text-gray-700">
                            {listItem}
                          </li>
                        ))}
                      </ul>
                    )
                  } else if (item.type === "quote") {
                    return (
                      <blockquote key={index} className="border-l-4 border-purple-600 pl-4 py-2 my-6 italic">
                        <p className="text-gray-700">{item.content}</p>
                        {item.author && <footer className="text-sm text-gray-600 mt-2">— {item.author}</footer>}
                      </blockquote>
                    )
                  } else if (item.type === "video") {
                    return (
                      <figure key={index} className="my-8">
                        <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                          <iframe
                            src={item.url}
                            title="Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="absolute top-0 left-0 w-full h-full"
                          ></iframe>
                        </div>
                        {item.caption && (
                          <figcaption className="text-center text-sm text-gray-500 mt-2">{item.caption}</figcaption>
                        )}
                      </figure>
                    )
                  }
                  return null
                })}
              </div>

              <div className="flex items-center gap-4 border-t border-b border-gray-200 py-6 my-8">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image src={post.authorImage || "/placeholder.svg"} alt={post.author} fill className="object-cover" />
                </div>
                <div>
                  <h3 className="font-semibold">{post.author}</h3>
                  <p className="text-sm text-gray-600">{post.authorRole}</p>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-bold mb-6">Artículos relacionados</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {post.relatedPosts.map((relatedPost) => (
                    <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`} className="group">
                      <div className="relative h-40 rounded-lg overflow-hidden mb-2">
                        <Image
                          src={relatedPost.image || "/placeholder.svg"}
                          alt={relatedPost.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <h4 className="font-medium group-hover:text-purple-600 transition-colors">{relatedPost.title}</h4>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
