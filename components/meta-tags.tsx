import Head from "next/head"

interface MetaTagsProps {
  title?: string
  description?: string
  ogImage?: string
  url?: string
  type?: string
}

export function MetaTags({
  title = "Cheland - Innovación y Estrategia",
  description = "Consultoría y Desarrollo de Aplicaciones especializadas en optimización de procesos y WMS",
  ogImage = "/og-image.jpg",
  url = "https://cheland.io",
  type = "website",
}: MetaTagsProps) {
  return (
    <Head>
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />

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
