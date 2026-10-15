import type { Metadata } from 'next'
import { ProductPage } from '@/components/product-page'
import { grub } from '@/lib/portfolio-data'

export const metadata: Metadata = {
  title: 'Grub: Clips, creator restaurant videos',
  description:
    'Grub is a food discovery product centered on Clips, creator restaurant videos linked to specific restaurant branches. It is in development and launching first in Columbus.',
  alternates: { canonical: '/work/grub/' },
  openGraph: {
    title: 'Grub: Clips, creator restaurant videos | Rayyan Sharief',
    description: 'Creator restaurant videos linked to specific branches, with halal information shown as information.',
    url: '/work/grub',
  },
}

export default function GrubPage() {
  return (
    <ProductPage
      product={grub}
      title="Clips connects food creators to the restaurant they are reviewing"
      sections={[
        {
          heading: 'The problem',
          paragraphs: [
            'A creator video shows what a restaurant is like. On its own, it does not tell a viewer which branch the video covers or how to find that exact location.',
          ],
        },
        {
          heading: 'How Clips works',
          steps: [
            'A creator submits a restaurant review video.',
            'Grub links the video to the restaurant branch it covers, so one location can be told apart from another.',
            'A viewer watches the review and opens the restaurant from the video, with dish and restaurant information where it is available.',
          ],
        },
        {
          heading: 'Halal information',
          paragraphs: [
            'Where halal information is available, Grub shows it as information. Grub does not certify food, and a creator video is never treated as proof that a restaurant is halal.',
          ],
        },
        {
          heading: 'Current stage',
          paragraphs: [
            'Grub is in development and launching first in Columbus. The website does not accept Clip submissions yet, and this page will be updated as features launch.',
          ],
        },
      ]}
    />
  )
}
