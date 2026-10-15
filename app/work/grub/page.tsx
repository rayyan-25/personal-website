import type { Metadata } from 'next'
import { ProductPage } from '@/components/product-page'
import { grub } from '@/lib/portfolio-data'
export const metadata: Metadata = {
  title: 'Grub | Food, found through people',
  description: 'Building creator-led restaurant discovery. Grub connects restaurant videos, specific locations, and creator opportunities. In development, starting in Columbus.',
  alternates: { canonical: '/work/grub/' },
}
export default function GrubPage() {
  return <ProductPage product={grub} title="Good food." titleAccent="Found through people." focus="Creators & restaurant discovery" sections={[
    { heading: 'The idea', paragraphs: ['A good food video makes you want to go somewhere. Finding the exact restaurant, branch, or dish should be the easy part.', 'Grub puts Clips at the center: short creator videos connected to real restaurant locations. Watch something that catches your eye, then find the place behind it.'] },
    { heading: 'Connecting the dots', steps: ['A creator submits a restaurant video.', 'Grub connects that video to the specific branch it covers, so one location can be told apart from another.', 'Viewers open the restaurant from the video and explore the available restaurant and dish information.'] },
    { heading: 'A creator ecosystem', paragraphs: ['The broader direction is an automated creator marketing platform for restaurants. Restaurants would set offer requirements, rewards, and availability upfront, so eligible creators can claim opportunities without a constant approval process.', 'The planned offer structure includes public deals, open creator offers, and offers with specific creator requirements. Clips remains the discovery experience connecting it all.'] },
    { heading: 'Useful information', paragraphs: ['Grub also makes room for restaurant and dish details, including halal information where available. Those details need their own sources: a creator video is a review, not halal certification.'] },
    { heading: 'Where it stands', paragraphs: ['Grub is in development, with Columbus as the first city. I am building the product under Aura Labs, bringing together restaurant discovery, creator participation, and the systems behind both.'] },
  ]} />
}
