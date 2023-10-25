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
