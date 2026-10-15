import type { Metadata } from 'next'
import { ProductPage } from '@/components/product-page'
import { seed } from '@/lib/portfolio-data'
export const metadata: Metadata = {
  title: 'Seed | Everyday giving',
  description: 'Building a simpler habit of sadaqah through everyday purchases. Seed is a pre-launch round-up giving app by Rayyan Sharief.',
  alternates: { canonical: '/work/seed/' },
}
export default function SeedPage() {
  return <ProductPage product={seed} title="Giving, built into" titleAccent="everyday life." focus="Fintech & consistent giving" sections={[
    { heading: 'The idea', paragraphs: ['Giving is easy to put off when it needs a new decision every time. Seed starts with a smaller question: what if doing a little good became part of something you already do?', 'The idea is simple. Turn the difference between a purchase and the next dollar into voluntary sadaqah for a cause you choose. Small amounts, consistently.'] },
    { heading: 'How it works', steps: ['Choose a cause and set a monthly limit that works for you.', 'Seed calculates the round-up on eligible purchases. A $6.14 purchase adds $0.86 to your accumulated round-ups.', 'Those round-ups accumulate until an authorized donation collection. Calculating a round-up does not move money. Your monthly limit caps your giving.'] },
    { heading: 'Building trust', paragraphs: ['A giving product has to be clear about what is happening to your money. Seed keeps calculated round-ups separate from collected donations, and makes pausing or adjusting your giving part of the core experience.', 'The money-movement design uses an append-only, double-entry ledger so financial entries can be traced and reconciled. Donations are intended for reviewed, verified organizations. Round-ups are voluntary sadaqah, not zakat.'] },
    { heading: 'Where it stands', paragraphs: ['Seed is pre-launch, with early access sign-ups open. The initial focus is round-up giving. Live donations depend on completing payments and organization verification.', 'I am building it under Aura Labs with a straightforward goal: make consistent giving easier to start and easier to keep doing.'] },
  ]} />
}
