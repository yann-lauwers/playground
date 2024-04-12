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
      'A course offered by Harvard University featuring interactive lessons, practical homework assignments, and stimulating projects covering computer science and the fundamentals of programming, algorithms, and data structures',
    redirectLink:
      'https://www.edx.org/learn/computer-science/harvard-university-cs50-s-introduction-to-computer-science',
    end_date: '2021-08-13',
  },
  {
    slug: 'jj',
    title: 'Just Javascript',
    icon: justJavascriptIcon,
    description:
      'A JavaScript course created by Dan Abramov (former React core team member). This course taught me to rethink my mental model not only about JavaScript but also the fundamentals of development.',
    redirectLink: 'https://justjavascript.com/',
    end_date: '2021-07-28',
  },
  {
    slug: 'lewagon',
    title: 'Le wagon',
    icon: leWagonIcon,
    description:
      'Intense 2 months bootcamp which introduced me to web development through Ruby on rails and Javascript.',
    redirectLink: 'https://www.lewagon.com/fr/brussels',
    end_date: '2020-03-13',
  },
]
