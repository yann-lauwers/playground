import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function RessourceSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({
  title,
  description,
  author,
  cta,
  href,
}: {
  title: string
  description: string
  author: string
  cta: string
  href: string
}) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      {author && <Card.Eyebrow decorate>{author}</Card.Eyebrow>}
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export const metadata: Metadata = {
  title: 'Speaking',
  description:
    'I love to read articles, watch videos and listen to audiobooks.',
}

export default function Speaking() {
  return (
    <SimpleLayout
      title="I love to read articles, watch videos and listen to audiobooks."
      intro="My favorite way of keeping up to date is by reading articles. I also like to listening to audiobooks and watch videos."
    >
      <div className="space-y-20">
        <RessourceSection title="Articles">
          <Appearance
            href="https://wasp-lang.dev/blog/2023/10/12/on-importance-of-naming-in-programming?ck_subscriber_id=2108090509"
            title="On the Importance of Naming in Programming"
            description="Martin Sosic reminds you what you already know: naming is hard. He also gives you some tips on how to get better at it."
            author="Martin Sosic"
            cta="Read article"
          />
        </RessourceSection>
        <RessourceSection title="Audiobooks">
          <Appearance
            href="https://www.audible.fr/pd/The-Design-of-Everyday-Things-Livre-Audio/B07L5RR6T6?eac_link=k9vz9Ls8D6qI&ref=web_search_eac_asin_1&eac_selected_type=asin&eac_selected=B07L5RR6T6&qid=AzlGfVobFe&eac_id=258-3892605-8063352_AzlGfVobFe&sr=1-1"
            title="The design of everyday things"
            description="The design of everyday things is a book about how design serves as the communication between object and user, and how to optimise that conduit of communication in order to make the experience of using the object pleasurable."
            author="Don Norman"
            cta="Listen to audiobook"
          />
          <Appearance
            href="https://www.audible.fr/pd/Never-Split-the-Difference-Livre-Audio/B01EI8VJ36?eac_link=D0l9iPCe81qA&ref=web_search_eac_asin_1&eac_selected_type=asin&eac_selected=B01EI8VJ36&qid=HZ3KHwKiKn&eac_id=258-3892605-8063352_HZ3KHwKiKn&sr=1-1"
            title="Never split the difference"
            description="Negotiating as if your life depended on it. This audiobook is a must read for anyone who wants to improve their negotiation skills."
            author="Chris Voss"
            cta="Listen to audiobook"
          />
          <Appearance
            href="https://www.audible.fr/pd/The-Mom-Test-Livre-Audio/B07RGS5FW3"
            title="The mom test"
            description="How to talk to customers & learn if your business is a good idea when everyone is lying to you."
            author="Rob Fitzpatrick"
            cta="Listen to audiobook"
          />
        </RessourceSection>
        <RessourceSection title="Videos">
          <Appearance
            href="https://www.youtube.com/watch?v=ByBPyMBTzM0&t=1s"
            title="Concurrent Rendering in React - React Conf 2018"
            description="Andrew Clark and Brian Vaughn presented Concurrent Rendering in React. Andrew covered the recently announced React.lazy API for code splitting and previewed two upcoming features: concurrent mode and Suspense. Brian demonstrated how to use React’s new profiler tooling to make apps built in React run faster."
            author="Andrew Clark and Brian Vaughn"
            cta="Watch video"
          />
        </RessourceSection>
      </div>
    </SimpleLayout>
  )
}
