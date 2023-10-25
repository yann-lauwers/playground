import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { formatDate } from '@/lib/formatDate'
import Image, { StaticImageData } from 'next/image'
import cs50Icon from '@/images/logos/courses/cs-50.png'
import shiftNudgeIcon from '@/images/logos/courses/shift-nudge.png'
import justJavascriptIcon from '@/images/logos/courses/just-javascript.png'
import leWagonIcon from '@/images/logos/courses/le-wagon.png'

export const COURSES = [
  {
    slug: 'sn',
    title: 'Shift Nudge',
    icon: shiftNudgeIcon,
    description:
      'Shift Nudge is the systematic process to learn the visual skills of interface design. It is an online course that covers all the nitty-gritty details of crafting the visual side of UI. The course is taught through the lens of UX, with a focus on designing beautiful & functional user interfaces.',
    redirectLink: 'https://shiftnudge.com/',
  },
  {
    slug: 'cs-50',
    title: "CS-50's Introduction to computer science",
    icon: cs50Icon,
    description:
      'Harvard University’s introduction to the intellectual enterprises of computer science and the art of programming for majors and non-majors alike, with or without prior programming experience. An entry-level course taught by David J. Malan.',
    redirectLink:
      'https://www.edx.org/learn/computer-science/harvard-university-cs50-s-introduction-to-computer-science',
    end_date: '2021-08-13',
  },
  {
    slug: 'jj',
    title: 'Just Javascript',
    icon: justJavascriptIcon,
    description:
      'Just JavaScript is a course given by Dan Abramov that will rebuild your mental model about Javascript from the inside out.',
    redirectLink: 'https://justjavascript.com/',
    end_date: '2021-07-28',
  },
  {
    slug: 'lewagon',
    title: 'Le wagon',
    icon: leWagonIcon,
    description:
      'Le Wagon is an immersive tech training. They teach people the skills they need to change their lives by kick-starting their tech careers or launching their own startups.',
    redirectLink: 'https://www.lewagon.com/fr/brussels',
    end_date: '2020-03-13',
  },
]

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
