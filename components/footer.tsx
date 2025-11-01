import { MapPin, Phone, Mail } from "lucide-react"
import { AnimatedIcon } from "@/components/ui/animated-icon"

export function Footer() {
  return (
    <footer className="w-full py-6 px-4 bg-white/80 backdrop-blur-sm border-t border-purple-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
        <div className="flex items-center gap-2 hover:text-purple-600 transition-colors">
          <AnimatedIcon icon={<MapPin size={16} />} hoverEffect="bounce" />
          <span>Belgrano, CABA, Pcia. de Buenos Aires, Argentina</span>
        </div>
        <div className="flex items-center gap-2 hover:text-purple-600 transition-colors">
          <AnimatedIcon icon={<Phone size={16} />} hoverEffect="shake" />
          <span>+54 9 11 2176 6464</span>
        </div>
        <div className="flex items-center gap-2 hover:text-purple-600 transition-colors">
          <AnimatedIcon icon={<Mail size={16} />} hoverEffect="pulse" />
          <span>info@cheland.io</span>
        </div>
      </div>
    </footer>
  )
}
