import Image from "next/image"

interface OptimizedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
  keywords?: string[]
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  keywords = [],
}: OptimizedImageProps) {
  // Crear alt text optimizado para SEO con keywords
  const createSEOAlt = (baseAlt: string, keywords: string[]) => {
    if (!baseAlt || baseAlt.length < 10) {
      return "Imagen de servicios tecnológicos Cheland - consultoría IA y automatización empresarial"
    }

    // Si ya tiene keywords, mantener el alt original
    if (keywords.length === 0) return baseAlt

    // Agregar keywords naturalmente si no están presentes
    const keywordsToAdd = keywords.filter((keyword) => !baseAlt.toLowerCase().includes(keyword.toLowerCase()))

    if (keywordsToAdd.length === 0) return baseAlt

    return `${baseAlt} - ${keywordsToAdd.slice(0, 2).join(", ")}`
  }

  const optimizedAlt = createSEOAlt(alt, keywords)

  return (
    <Image
      src={src || "/placeholder.svg"}
      alt={optimizedAlt}
      width={width}
      height={height}
      className={className}
      loading={priority ? "eager" : "lazy"}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      priority={priority}
      quality={85}
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
    />
  )
}
