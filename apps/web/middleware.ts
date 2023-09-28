import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { courses } from "./constants/courses"

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest): NextResponse | null {
  const courseFromPathname = request.nextUrl.pathname.slice(1)

  const course = courses.find(e => e.slug === courseFromPathname)

  if (!course) return null

  return NextResponse.redirect(new URL(course.redirectLink))
}

export const config = {
  api: {
    bodyParser: false,
  },
}

export const routes = courses.map(course => ({
  path: `/${course.slug}`,
  config: {
    middleware: ["middleware"], // Add your middleware here
  },
}))
