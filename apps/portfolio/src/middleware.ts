import { COURSES } from '@/lib/courses'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(
  request: NextRequest,
): Promise<NextResponse | null> {
  const courseFromPathname = request.nextUrl.pathname.slice(1)

  console.log('should print for middleware')

  const course = COURSES.find((e) => e.slug === courseFromPathname)

  // const { ip } = request

  // await fetch('https://plausible.io/api/event', {
  //   method: 'POST',
  //   body: JSON.stringify({
  //     name: 'pageview',
  //     url: `https://yann-lauwers.io/${courseFromPathname}`,
  //     domain: 'yann-lauwers.io',
  //     props: { course: course?.title },
  //   }),
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'X-Forwarded-For': ip ?? '',
  //   },
  // })

  if (!course) return null

  return NextResponse.redirect(new URL(course.redirectLink))
}

export const config = {
  api: {
    bodyParser: false,
  },
}

export const routes = COURSES.map((course) => ({
  path: `/${course.slug}`,
  config: {
    middleware: ['middleware'], // Add your middleware here
  },
}))
