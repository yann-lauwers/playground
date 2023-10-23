import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Software essentials, beloved tech gear, and items I endorse.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Software essentials, beloved tech gear, and items I endorse."
      intro="I like sharing with others what I believe makes me an efficient, organized, and professional person. I've listed all the things I adore right here."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="13” MacBook Pro, M1, 16GB RAM (2020)">
            I have always used an Apple computer. I love the user experience
            they provide and the software design. Since they released Apple
            Silicon chips, we&apos;re in a new world. No more noisy fans, and
            there&apos;s power for everything.
          </Tool>
          <Tool title="Samsung 32” Odissey G7 (curved)">
            The Samsung 32” Odyssey G7 (curved) boasts a mesmerizing QLED
            display, immersive 1000R curvature, and high-speed 240Hz refresh
            rate, elevating the coding and design experience.
          </Tool>
          <Tool title="Targus docking station">
            If there is one thing I really like when I sit down to work is the
            ability to plug in a single cable and have everything just work.
            This docking station does that for me.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="Visual Studio Code">
            I&apos;ve tried a few code editors. I&apos;ve used WebStorm and
            Sublime Text, but I always come back to VS Code. It&apos;s fast,
            it&apos;s free, and has a lot of cool plugins.
          </Tool>

          <Tool title="TablePlus">
            Great software for working with databases. Has saved me from
            building about a thousand admin interfaces for my various projects
            over the years.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Figma">
            I discovered Figma when I started learning to code. I learn more
            about the tool every time I use it. I feel like I&apos;m empowering
            myself every day, and I use it in every project.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Arc">
            Trendy, minimalist, and privacy-first, I love this Chromium browser.
            It reinvents the way I used to navigate the web. The spaces allow me
            to organize my tabs throughout my projects.
          </Tool>
          <Tool title="Raycast">
            Fast, keyboard-driven, and extensible, I use it to launch apps, run
            projects in VSCode, and many more thanks to the plugins. It&apos;s
            the best way to save time in your day.
          </Tool>
          <Tool title="Fantastical">
            I&apos;m organized. I like to have everything in my calendar, from
            my reminders to my professional and personal events. Fantastical is
            the best calendar app I&apos;ve used so far that fits all my needs.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
