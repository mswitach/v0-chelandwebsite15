"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, User, ArrowRight } from "lucide-react"
import { AnimatedButton } from "@/components/ui/animated-button"
import { AnimatedCard } from "@/components/ui/animated-card"
import { AnimatedIcon } from "@/components/ui/animated-icon"

const blogPosts = [
  {
    slug: "transformacion-digital-empresas",
    title: "Transformación Digital: El Camino Hacia el Éxito Empresarial",
    excerpt:
      "Descubre cómo la transformación digital está redefiniendo los modelos de negocio y creando nuevas oportunidades para las empresas.",
    date: "15 de Marzo, 2025",
    readTime: "5 min",
    author: "María González",
    category: "Tecnología",
    image: "/placeholder.svg?height=300&width=600",
  },
  {
    slug: "inteligencia-artificial-negocios",
    title: "Inteligencia Artificial: Aplicaciones Prácticas para tu Negocio",
    excerpt:
      "Explora cómo la IA está transformando diferentes industrias y cómo puedes implementarla en tu empresa para obtener ventajas competitivas.",
    date: "10 de Marzo, 2025",
    readTime: "7 min",
    author: "Carlos Rodríguez",
    category: "Innovación",
    image: "/placeholder.svg?height=300&width=600",
  },
  {
    slug: "optimizacion-procesos-wms",
    title: "Optimización de Procesos Logísticos con WMS",
    excerpt:
      "Aprende cómo un sistema WMS puede transformar la gestión de tu cadena de suministro y mejorar la eficiencia operativa.",
    date: "5 de Marzo, 2025",
    readTime: "6 min",
    author: "Laura Martínez",
    category: "Logística",
    image: "/placeholder.svg?height=300&width=600",
  },
  {
    slug: "seguridad-informatica-empresas",
    title: "Seguridad Informática: Protegiendo los Activos Digitales de tu Empresa",
    excerpt:
      "Conoce las mejores prácticas para proteger la información sensible de tu empresa contra amenazas cibernéticas.",
    date: "28 de Febrero, 2025",
    readTime: "8 min",
    author: "Javier López",
    category: "Seguridad",
    image: "/placeholder.svg?height=300&width=600",
  },
]

export default function BlogPageClient() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-50 via-white to-purple-50">
      <Nav />

      <main className="relative pt-32 pb-16 px-4">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem]">
          <div className="absolute inset-0 bg-gradient-to-r from-white/50 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Blog de Cheland: Innovación y Tecnología Empresarial
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Artículos, noticias y recursos sobre tecnología, innovación y tendencias del sector
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <AnimatedCard
                  className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white/80 backdrop-blur-sm border-purple-100"
                  hoverEffect="lift"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-medium px-2 py-1 rounded">
                      {post.category}
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl hover:text-purple-600 transition-colors">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </CardTitle>
                    <CardDescription className="flex items-center gap-4 text-xs mt-2">
                      <span className="flex items-center gap-1">
                        <AnimatedIcon icon={<Calendar size={14} />} hoverEffect="pulse" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <AnimatedIcon icon={<Clock size={14} />} hoverEffect="pulse" />
                        {post.readTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <AnimatedIcon icon={<User size={14} />} hoverEffect="pulse" />
                        {post.author}
                      </span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{post.excerpt}</p>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-purple-600 hover:text-blue-600 transition-colors group"
                    >
                      <span>Leer más</span>
                      <AnimatedIcon
                        icon={<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />}
                        hoverEffect="scale"
                      />
                    </Link>
                  </CardFooter>
                </AnimatedCard>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <AnimatedButton
              variant="outline"
              className="border-purple-200 hover:border-purple-400 text-purple-600 hover:text-blue-600"
              iconRight={<ArrowRight className="h-4 w-4" />}
            >
              Ver más artículos
            </AnimatedButton>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
