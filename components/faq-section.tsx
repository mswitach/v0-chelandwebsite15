import { FAQSchema } from "./schema-org"

interface FAQItem {
  question: string
  answer: string
}

interface FAQSectionProps {
  questions: FAQItem[]
  title?: string
}

export function FAQSection({ questions, title = "Preguntas Frecuentes" }: FAQSectionProps) {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>

        <div className="space-y-6">
          {questions.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">{item.question}</h3>
              <p className="text-gray-600">{item.answer}</p>
            </div>
          ))}
        </div>

        <FAQSchema questions={questions} />
      </div>
    </section>
  )
}
