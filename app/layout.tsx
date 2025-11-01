import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { AnalyticsWrapper } from "@/components/analytics-provider"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Cheland - Consultoría en IA, Optimización de Procesos y WMS | Innovación y Estrategia",
  description:
    "Especialistas en consultoría de IA, desarrollo de software a medida, automatización inteligente y sistemas WMS para optimizar procesos empresariales. Soluciones tecnológicas que transforman tu negocio.",
  openGraph: {
    title: "Cheland - Consultoría en IA y Optimización de Procesos Empresariales",
    description:
      "Transformamos empresas con soluciones tecnológicas: consultoría en IA, desarrollo a medida, automatización de procesos y sistemas WMS. Mejora la eficiencia y reduce costos.",
    type: "website",
    locale: "es_ES",
    url: "https://cheland.io/",
    siteName: "Cheland",
    images: [
      {
        url: "https://cheland.io/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cheland - Consultoría en IA y Optimización de Procesos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cheland - Soluciones Tecnológicas para Empresas",
    description:
      "Optimizamos procesos empresariales con IA, desarrollo a medida y sistemas WMS. Consultoría especializada para transformar tu negocio.",
    images: ["https://cheland.io/og-image.jpg"],
  },
  alternates: {
    canonical: "https://cheland.io/",
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "Cheland" }],
  publisher: "Cheland",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  generator: "v0.dev",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="font-sans antialiased">
        {children}
        <AnalyticsWrapper />
      </body>
    </html>
  )
}
