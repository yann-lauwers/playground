import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { formatDate } from '@/lib/formatDate'
import Image, { StaticImageData } from 'next/image'
import { COURSES } from '@/lib/courses'

function Course({
  title,
  description,
  icon,
  date,
  href,
}: {
  title: string
  description: string
  icon: StaticImageData
  date?: string
  href: string
}) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <div className="flex gap-2">
          <Image
            src={icon}
            alt="Icon"
            sizes="24px"
            className="aspect-square h-6 w-6 rotate-3 rounded-2xl bg-zinc-100 object-cover p-1 dark:bg-zinc-800"
          />
          <Card.Title href={href}>{title}</Card.Title>
        </div>
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
    'I am a lifelong learner and a strong believer in continuous education.',
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
                icon={course.icon}
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
