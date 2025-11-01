import Link from "next/link"
import { BreadcrumbSchema } from "./schema-org"

interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <>
      <nav aria-label="Breadcrumb" className="mb-4">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link href="/" className="text-gray-500 hover:text-purple-600 transition-colors">
              Home
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              <span className="mx-2 text-gray-400">/</span>
              {index === items.length - 1 ? (
                <span className="text-gray-900 font-medium">{item.label}</span>
              ) : (
                <Link href={item.href} className="text-gray-500 hover:text-purple-600 transition-colors">
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>

      <BreadcrumbSchema items={items} />
    </>
  )
}
