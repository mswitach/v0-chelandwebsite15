"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { AnimatedIcon } from "@/components/ui/animated-icon"
import { usePathname } from "next/navigation"

export function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // Páginas con fondo blanco que necesitan texto oscuro desde el inicio
  const whiteBackgroundPages = ["/servicios", "/wms", "/contacto"]
  const isWhiteBackgroundPage = whiteBackgroundPages.some((page) => pathname.startsWith(page))

  const navItems = ["HOME", "SERVICIOS", "WMS", "CONTACTO"]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Función para obtener el color del texto
  const getTextColor = () => {
    if (isWhiteBackgroundPage) {
      return "text-gray-900" // Texto oscuro en páginas blancas
    }
    return scrolled ? "text-gray-900" : "text-white" // Texto blanco en home, oscuro al scroll
  }

  // Función para obtener el fondo de la navegación
  const getNavBackground = () => {
    if (isWhiteBackgroundPage) {
      return scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white/90 backdrop-blur-sm"
    }
    return scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
  }

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${getNavBackground()}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <motion.div
            className="flex-shrink-0 flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link href="/" className="flex items-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cheland_transparent%20%281%29-yvmKkzIb5PgO1EWqzudoZ9sJzHiLiG.png"
                alt="Cheland"
                width={120}
                height={40}
                className="h-8 w-auto"
                priority
              />
            </Link>
          </motion.div>

          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item}
                href={
                  item === "HOME"
                    ? "/"
                    : item === "CASOS DE ÉXITO"
                      ? "/casos-exito"
                      : `/${item.toLowerCase().replace(/ /g, "-")}`
                }
                className={`relative group text-sm font-medium transition-colors ${getTextColor()}`}
              >
                <motion.span
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
                <span
                  className={`absolute inset-x-0 bottom-0 h-0.5 ${scrolled || isWhiteBackgroundPage ? "bg-purple-600" : "bg-white"} scale-x-0 group-hover:scale-x-100 transition-transform origin-left`}
                />
              </Link>
            ))}
          </div>

          <AnimatedIcon
            icon={
              <Button
                variant="ghost"
                size="icon"
                className={`md:hidden ${getTextColor()} hover:bg-white/20`}
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            }
            hoverEffect="pulse"
          />
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden"
          >
            <div className="px-4 pt-2 pb-3 space-y-1 bg-white/80 backdrop-blur-md shadow-lg">
              {navItems.map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Link
                    href={
                      item === "HOME"
                        ? "/"
                        : item === "CASOS DE ÉXITO"
                          ? "/casos-exito"
                          : `/${item.toLowerCase().replace(/ /g, "-")}`
                    }
                    className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-purple-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
