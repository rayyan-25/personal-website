import type { Metadata } from 'next'
import { ProductPage } from '@/components/product-page'
import { seed } from '@/lib/portfolio-data'

export const metadata: Metadata = {
  title: 'Seed: automatic giving from everyday purchases',
  description:
    'Seed is a pre-launch round-up giving product. Purchases round up to the next whole dollar, within a monthly limit the donor sets. Sign-ups are open for early access.',
  alternates: { canonical: '/work/seed/' },
  openGraph: {
    title: 'Seed: automatic giving from everyday purchases | Rayyan Sharief',
    description: 'A pre-launch round-up giving product with a donor-set monthly limit.',
    url: '/work/seed',
  },
}

export default function SeedPage() {
  return (
    <ProductPage
      product={seed}
      title="Seed turns everyday purchases into giving"
      sections={[
        {
          heading: 'The problem',
          paragraphs: [
            'Giving often waits for a moment of planning. Seed moves it into ordinary spending, so a donor does not have to decide again each time they buy something.',
          ],
        },
        {
          heading: 'How it works',
          steps: [
            'The donor chooses a cause and sets a monthly limit.',
            'Each eligible purchase rounds up to the next whole dollar. For example, a $6.14 purchase rounds up to $7.00, and the $0.86 difference goes toward giving.',
            'Donations are funded by ACH, and the monthly limit caps what the donor sends.',
          ],
        },
        {
          heading: 'Rules',
          paragraphs: [
            'Round-ups are voluntary sadaqah, not zakat. Donations go only to organizations that have passed review and verification.',
          ],
        },
        {
          heading: 'What is built',
          paragraphs: [
            'Money movement is designed around an append-only, double-entry ledger. Each round-up or recurring gift is recorded as balanced debit and credit entries before any money is disbursed.',
          ],
        },
        {
          heading: 'Current stage',
          paragraphs: [
            'Seed is pre-launch. Sign-ups are open for news and early access. Live giving starts after payments and organization verification are complete.',
          ],
        },
      ]}
    />
  )
}
