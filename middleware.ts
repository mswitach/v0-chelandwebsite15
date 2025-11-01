import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl
  const url = request.nextUrl.clone()

  if (request.headers.get("x-forwarded-proto") === "http") {
    url.protocol = "https:"
    return NextResponse.redirect(url)
  }

  if (pathname !== "/" && pathname.endsWith("/")) {
    url.pathname = pathname.slice(0, -1)
    return NextResponse.redirect(url, 301)
  }

  if (request.headers.get("host")?.startsWith("www.")) {
    url.host = url.host.replace("www.", "")
    return NextResponse.redirect(url, 301)
  }

  const redirects: Record<string, string> = {
    "/prototipos": "/servicios",
    "/prototipo": "/servicios",
    "/prototype": "/servicios",
    "/prototypes": "/servicios",
    "/consulta": "/contacto",
    "/contact": "/contacto",
    "/about": "/servicios",
    "/acerca": "/servicios",
    "/home": "/",
    "/inicio": "/",
  }

  if (redirects[pathname]) {
    url.pathname = redirects[pathname]
    return NextResponse.redirect(url, 301)
  }

  const paramsToRemove = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "fbclid", "gclid"]
  const searchParams = new URLSearchParams(search)
  let hasRemovedParams = false

  paramsToRemove.forEach((param) => {
    if (searchParams.has(param)) {
      searchParams.delete(param)
      hasRemovedParams = true
    }
  })

  if (hasRemovedParams) {
    url.search = searchParams.toString()
    return NextResponse.redirect(url, 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - robots.txt
     * - sitemap.xml
     */
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
}
