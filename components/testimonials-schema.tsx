import type { TestimonialType } from "../types/testimonial"

interface TestimonialsSchemaProps {
  testimonials: TestimonialType[]
}

export function TestimonialsSchema({ testimonials }: TestimonialsSchemaProps) {
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Cheland",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: testimonials.length,
      bestRating: "5",
      worstRating: "1",
    },
    review: testimonials.map((testimonial, index) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: testimonial.author,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
        worstRating: "1",
      },
      reviewBody: testimonial.quote,
      datePublished: "2024-01-01", // Fecha genérica, idealmente sería dinámica
      publisher: {
        "@type": "Organization",
        name: testimonial.company,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(reviewSchema),
      }}
    />
  )
}
