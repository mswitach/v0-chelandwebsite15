import type { Organization, WithContext } from "schema-dts"

export default function SchemaOrg() {
  const schema: WithContext<Organization> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Cheland",
    url: "https://cheland.io",
    logo: "https://cheland.io/cheland_transparent.png",
    description: "Consultoría y Desarrollo de Aplicaciones especializadas en optimización de procesos y WMS",
    sameAs: [
      "https://www.linkedin.com/company/cheland",
      "https://twitter.com/cheland_io",
      // Añade aquí tus otras redes sociales
    ],
    address: {
      "@type": "PostalAddress",
      // Completa con tu dirección real
      addressCountry: "Argentina",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+54-XXX-XXXXXXX", // Reemplaza con tu número real
      contactType: "customer service",
      email: "contacto@cheland.io", // Reemplaza con tu email real
      availableLanguage: ["Spanish", "English"],
    },
    foundingDate: "2020", // Ajusta según la fecha real de fundación
    founders: [
      {
        "@type": "Person",
        name: "Nombre del Fundador", // Reemplaza con el nombre real
      },
    ],
    knowsAbout: [
      "Inteligencia Artificial",
      "Optimización de Procesos",
      "Desarrollo de Software",
      "WMS",
      "Automatización Inteligente",
    ],
    slogan: "Innovación y Estrategia para tu Negocio",
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function LocalBusinessSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Cheland",
          image: "https://cheland.io/cheland_transparent.png",
          "@id": "https://cheland.io",
          url: "https://cheland.io",
          telephone: "+54-9-11-2176-6464",
          email: "info@cheland.io",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Belgrano",
            addressLocality: "CABA",
            addressRegion: "Buenos Aires",
            postalCode: "",
            addressCountry: "AR",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: -34.5603,
            longitude: -58.4632,
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "09:00",
              closes: "18:00",
            },
          ],
          priceRange: "$$",
        }),
      }}
    />
  )
}

export function ServiceSchema({ name, description, url }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: name,
          description: description,
          provider: {
            "@type": "Organization",
            name: "Cheland",
            url: "https://cheland.io",
          },
          url: url,
        }),
      }}
    />
  )
}

export function FAQSchema({ questions }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: questions.map((q) => ({
            "@type": "Question",
            name: q.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: q.answer,
            },
          })),
        }),
      }}
    />
  )
}

export function BreadcrumbSchema({ items }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Inicio",
              item: "https://cheland.io",
            },
            ...items.map((item, index) => ({
              "@type": "ListItem",
              position: index + 2,
              name: item.label,
              item: `https://cheland.io${item.href}`,
            })),
          ],
        }),
      }}
    />
  )
}

export function ArticleSchema({ article }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: article.title,
          image: article.image,
          datePublished: article.date,
          dateModified: article.modified || article.date,
          author: {
            "@type": "Person",
            name: article.author,
          },
          publisher: {
            "@type": "Organization",
            name: "Cheland",
            logo: {
              "@type": "ImageObject",
              url: "https://cheland.io/cheland_transparent.png",
            },
          },
          description: article.excerpt,
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://cheland.io/blog/${article.slug}`,
          },
        }),
      }}
    />
  )
}
