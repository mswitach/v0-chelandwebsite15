import Image, { type ImageProps } from "next/image"

interface SEOImageProps extends Omit<ImageProps, "alt"> {
  alt: string
  keywords?: string[]
  context?: string
}

export function SEOImage({ alt, keywords = [], context = "", ...props }: SEOImageProps) {
  // Crear un texto alternativo enriquecido para SEO
  let enhancedAlt = alt

  // Añadir contexto si está disponible
  if (context && !alt.includes(context)) {
    enhancedAlt = `${context}: ${enhancedAlt}`
  }

  // Añadir palabras clave relevantes si no están ya en el alt
  if (keywords.length > 0) {
    const keywordsToAdd = keywords.filter((keyword) => !enhancedAlt.toLowerCase().includes(keyword.toLowerCase()))

    if (keywordsToAdd.length > 0) {
      enhancedAlt = `${enhancedAlt} - ${keywordsToAdd.join(", ")}`
    }
  }

  return <Image {...props} alt={enhancedAlt} />
}
