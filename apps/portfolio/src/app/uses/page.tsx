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
          <Tool title="Sublime Text 4">
            I don’t care if it’s missing all of the fancy IDE features everyone
            else relies on, Sublime Text is still the best text editor ever
            made.
          </Tool>
          <Tool title="iTerm2">
            I’m honestly not even sure what features I get with this that aren’t
            just part of the macOS Terminal but it’s what I use.
          </Tool>
          <Tool title="TablePlus">
            Great software for working with databases. Has saved me from
            building about a thousand admin interfaces for my various projects
            over the years.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Figma">
            We started using Figma as just a design tool but now it’s become our
            virtual whiteboard for the entire company. Never would have expected
            the collaboration features to be the real hook.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Alfred">
            It’s not the newest kid on the block but it’s still the fastest. The
            Sublime Text of the application launcher world.
          </Tool>
          <Tool title="Reflect">
            Using a daily notes system instead of trying to keep things
            organized by topics has been super powerful for me. And with
            Reflect, it’s still easy for me to keep all of that stuff
            discoverable by topic even though all of my writing happens in the
            daily note.
          </Tool>
          <Tool title="SavvyCal">
            Great tool for scheduling meetings while protecting my calendar and
            making sure I still have lots of time for deep work during the week.
          </Tool>
          <Tool title="Focus">
            Simple tool for blocking distracting websites when I need to just do
            the work and get some momentum going.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
