import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'
import { COURSES } from '@/lib/constants'

function Course({
  title,
  description,
  date,
  href,
}: {
  title: string
  description: string
  date?: string
  href: string
}) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={href}>{title}</Card.Title>
        <Card.Eyebrow
          {...(date && { as: 'time' })}
          {...(date && { dateTime: date })}
          className="md:hidden"
          decorate
        >
          {date ? formatDate(date) : 'Currently doing'}
        </Card.Eyebrow>
        <Card.Description>{description}</Card.Description>
        <Card.Cta>View course</Card.Cta>
      </Card>
      <Card.Eyebrow
        {...(date && { as: 'time' })}
        {...(date && { dateTime: date })}
        className="mt-1 hidden md:block"
      >
        {date ? formatDate(date) : 'Currently doing'}
      </Card.Eyebrow>
    </article>
  )
}

export const metadata: Metadata = {
  title: 'Courses',
  description:
    'All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.',
}

export default async function Courses() {
  return (
    <SimpleLayout
      title="I am a lifelong learner and a strong believer in continuous education."
      intro="I believe there is no better way to keep evolving than to learn new things. As soon as I have some time, I dive into a chapter of the course I am currently taking. It helps me to keep up to date and to learn many new concepts, ways of thinking and many more. Here are the courses I took or I am currently taking."
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {COURSES.map((course) => {
            return (
              <Course
                key={course.slug}
                href={course.redirectLink}
                title={course.title}
                description={course.description}
                date={course?.end_date}
              />
            )
          })}
        </div>
      </div>
    </SimpleLayout>
  )
}
