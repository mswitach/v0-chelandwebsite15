"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { AnimatedIcon } from "@/components/ui/animated-icon"
import { AnimatedButton } from "@/components/ui/animated-button"
import { usePathname } from "next/navigation"

export function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const whiteBackgroundPages = ["/automatizacion-ia", "/wms", "/contacto", "/precios", "/recursos", "/casos"]
  const isWhiteBackgroundPage = whiteBackgroundPages.some((page) => pathname.startsWith(page))

  const navItems = [
    { label: "HOME", href: "/" },
    { label: "SERVICIOS", href: "/automatizacion-ia" },
    { label: "WMS", href: "/wms" },
    { label: "CONTACTO", href: "/contacto" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const getTextColor = () => {
    if (isWhiteBackgroundPage) {
      return "text-gray-900"
    }
    return scrolled ? "text-gray-900" : "text-white"
  }

  const getNavBackground = () => {
    if (isWhiteBackgroundPage) {
      return scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white/90 backdrop-blur-sm"
    }
    return scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
  }

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${getNavBackground()}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
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

            <div className="hidden lg:flex lg:items-center lg:space-x-6 lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`relative group text-sm font-medium transition-colors ${getTextColor()}`}
                >
                  <motion.span
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="inline-block"
                  >
                    {item.label}
                  </motion.span>
                  <span
                    className={`absolute inset-x-0 bottom-0 h-0.5 ${scrolled || isWhiteBackgroundPage ? "bg-purple-600" : "bg-white"} scale-x-0 group-hover:scale-x-100 transition-transform origin-left`}
                  />
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex lg:items-center lg:space-x-3">
              <AnimatedButton
                variant="outline"
                size="sm"
                className={`${scrolled || isWhiteBackgroundPage ? "border-purple-600 text-purple-600 hover:bg-purple-50" : "border-white text-white hover:bg-white/10"}`}
              >
                <Link href="/wms#demo">Ver demo WMS</Link>
              </AnimatedButton>
              <AnimatedButton
                size="sm"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700"
              >
                <Link href="/automatizacion-ia">Explorar automatizaciones</Link>
              </AnimatedButton>
            </div>

            {/* Mobile menu button */}
            <AnimatedIcon
              icon={
                <Button
                  variant="ghost"
                  size="icon"
                  className={`lg:hidden ${getTextColor()} hover:bg-white/20`}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </Button>
              }
              hoverEffect="pulse"
            />
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="lg:hidden"
            >
              <div className="px-4 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md shadow-lg">
                {navItems.map((item) => (
                  <motion.div
                    key={item.label}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Link
                      href={item.href}
                      className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-purple-600 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <div className="pt-4 space-y-2">
                  <AnimatedButton variant="outline" size="sm" className="w-full border-purple-600 text-purple-600">
                    <Link href="/wms#demo" onClick={() => setIsOpen(false)}>
                      Ver demo WMS
                    </Link>
                  </AnimatedButton>
                  <AnimatedButton size="sm" className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                    <Link href="/automatizacion-ia" onClick={() => setIsOpen(false)}>
                      Explorar automatizaciones
                    </Link>
                  </AnimatedButton>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-lg">
        <div className="px-4 py-3">
          <AnimatedButton
            size="lg"
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700"
          >
            <Link href="/wms#demo">Ver demo WMS</Link>
          </AnimatedButton>
        </div>
      </div>
    </>
  )
}
