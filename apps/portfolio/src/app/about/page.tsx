import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Yann Lauwers. I live in Brussels, where I live life like it is a dream.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            I’m Yann Lauwers. I am a hard worker and a hockey player.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I’ve been hooked on computers for as long as I can remember. The
              internet has always been this fascinating realm for me, and I’ve
              been navigating it since I was practically a kid. Born with a
              computer, I picked up the ropes pretty fast, and I haven’t looked
              back. Nostalgia hits hard when I think about those classic iMac G3
              days – that’s where my tech journey kicked off!
            </p>
            <p>
              My childhood was a mix of video games and tennis matches. Fond
              memories include putting together my first Minecraft server at 14,
              creating a vibrant community with 80+ active players every
              evening. It was an exciting project that, as you might expect,
              resulted in a few computer confiscations. Then came the phase
              where, like any wide-eyed kid, I aimed to be a professional Call
              of Duty 4 player. Fast forward to today, and here I am – not a
              gaming pro, but a web developer
            </p>
            <p>
              Turning 18 marked the beginning of an extraordinary journey for
              me. I decided to take apart an old Renault 4L and rebuild it from
              the ground up. It took me five years of dedication, but the result
              was worth it. I drove it all the way to Morocco, covering 6,000 km
              in just 10 days to deliver school supplies to children in need.
              Not stopping there, I also tackled the restoration of my dad’s old
              Yamaha Virago 750 motorcycle. There’s something incredibly
              satisfying about working with my hands and bringing machines back
              to life.
            </p>
            <p>
              oday, I’m a dedicated web developer, a skilled project manager,
              and a design enthusiast. My goal is to craft impactful products
              that have the power to enhance people’s lives.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://github.com/yann-lauwers"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/yann-lauwers/"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:yann.lauwers@icloud.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              yann.lauwers@icloud.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
