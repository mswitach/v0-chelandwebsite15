import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Home } from "lucide-react"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-50 via-white to-purple-50">
      <Nav />

      <div className="min-h-[80vh] flex flex-col items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="mb-8">
            <h1 className="text-8xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
              404
            </h1>
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Página no encontrada</h2>
            <p className="text-lg text-gray-600 mb-8">
              Lo sentimos, la página que estás buscando no existe o ha sido movida. Te sugerimos explorar nuestros
              servicios de automatización inteligente o sistema WMS.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
              <Link href="/" className="inline-flex items-center">
                <Home className="mr-2 h-4 w-4" />
                Ir al inicio
              </Link>
            </Button>

            <Button asChild variant="outline" className="border-purple-200 text-purple-600 bg-transparent">
              <Link href="/servicios" className="inline-flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Ver servicios
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
