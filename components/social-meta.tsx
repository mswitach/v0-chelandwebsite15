import Head from "next/head"

interface SocialMetaProps {
  title?: string
  description?: string
  ogImage?: string
  url?: string
  type?: string
}

export function SocialMeta({
  title = "Cheland - Innovación y Estrategia",
  description = "Consultoría y Desarrollo de Aplicaciones especializadas en optimización de procesos y WMS",
  ogImage = "/og-image.jpg", // Imagen por defecto
  url = "https://cheland.io",
  type = "website",
}: SocialMetaProps) {
  return (
    <Head>
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Cheland" />
      <meta property="og:image" content={`${url}${ogImage}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="es_ES" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${url}${ogImage}`} />
    </Head>
  )
}
