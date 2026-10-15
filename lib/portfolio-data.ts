export const profile = {
  name: 'Rayyan Sharief',
  location: 'Columbus, Ohio',
  email: 'rsharief1225@gmail.com',
  github: 'https://github.com/rayyan-25',
  // Existing destination from the current site. The resume lists a different
  // LinkedIn slug, so this is flagged for confirmation before final launch.
  linkedin: 'https://www.linkedin.com/in/rayyan-sharief-787919299/',
  resumePath: '/Rayyan-Sharief-Resume.pdf',
  education: 'The Ohio State University, B.S. Data Analytics, expected December 2027',
  auraLabs: 'https://auralabs.group',
}

export type ProductDetail = {
  slug: 'grub' | 'seed'
  name: string
  tagline: string
  status: string
  website: string
  logo: string
  logoAlt: string
  accent: 'coral' | 'green'
  summary: string
}

export const grub: ProductDetail = {
  slug: 'grub',
  name: 'Grub',
  tagline: 'Food discovery through creator restaurant videos.',
  status: 'In development',
  website: 'https://usegrub.app',
  logo: '/brands/grub-logo.png',
  logoAlt: 'Grub logo: a cream lowercase g on a coral background',
  accent: 'coral',
  summary:
    'Clips is Grub’s flagship. Food creators post restaurant reviews, and Grub connects each review to the specific restaurant branch it covers, so viewers can find the place they just watched.',
}

export const seed: ProductDetail = {
  slug: 'seed',
  name: 'Seed',
  tagline: 'Automatic giving from everyday purchases.',
  status: 'Pre-launch. Early access sign-ups are open.',
  website: 'https://givewithseed.com',
  logo: '/brands/seed-logo.png',
  logoAlt: 'Seed logo: two leaves, one pale green and one dark green',
  accent: 'green',
  summary:
    'Seed calculates a round-up on each eligible purchase, up to the next whole dollar, and accumulates those amounts for a cause the donor chooses. Money is collected only in a donation the donor authorizes, within a monthly limit the donor sets.',
}

export type WorkItem = {
  name: string
  kind: string
  description: string
  href: string
  hrefLabel: string
}

export const selectedWork: WorkItem[] = [
  {
    name: 'iWaqf',
    kind: 'Digital charitable endowment, built at Wahed Invest',
    description:
      'A full-stack endowment platform that manages £741K across 1,718 waqfs. I worked on Stripe webhook processing and idempotent settlement across 22K+ transactions, with Supabase and row-level-security protected RPCs.',
    href: 'https://iwaqf.io',
    hrefLabel: 'iwaqf.io',
  },
  {
    name: 'Swyft Payments',
    kind: 'Fintech startup, co-founded',
    description:
      'A tap-to-donate system built on NFC terminals, designed so a contribution takes about two seconds. It has raised $30K+ from 2.5K+ donors. The backend ran on a Raspberry Pi with C/C++ and SQL, and it used the WorldPay API for nonprofit organizations.',
    href: 'https://www.paywithswyft.com',
    hrefLabel: 'paywithswyft.com',
  },
  {
    name: 'HOPE AI',
    kind: 'Faith-informed mental health chatbot',
    description:
      'A chatbot built to improve access and engagement for 500+ users. It integrates Supabase and OpenAI APIs and uses multi-agent workflows. I also collaborated on a 20-person mental health research initiative.',
    href: 'https://hopelabs.org',
    hrefLabel: 'hopelabs.org',
  },
  {
    name: 'PlanMyDegree',
    kind: 'Degree planning app, team of six',
    description:
      'A full-stack planner for 500+ Ohio State students, built with JavaScript, Python Flask, and MySQL. The team added prerequisite validation, course lookup, and requirement tracking, which produced a 40% gain in planning efficiency.',
    href: '',
    hrefLabel: '',
  },
]

export type ExperienceItem = {
  id: string
  role: string
  company: string
  location: string
  dates: string
  bullets: string[]
}

export const experiences: ExperienceItem[] = [
  {
    id: 'wahed',
    role: 'Software Engineer Intern',
    company: 'Wahed Invest',
    location: 'London, UK (remote)',
    dates: 'Aug 2026 to present',
    bullets: [
      'Worked on backend systems for Wahed Private Markets, helping design PostgreSQL schemas and row-level security for deposit and redemption workflows. Wahed’s broader platforms serve 400,000+ investors.',
      'Engineered Stripe webhook processing and idempotent settlement across 22K+ transactions for iWaqf, a platform that manages £741K across 1,718 waqfs.',
    ],
  },
  {
    id: 'bmw',
    role: 'Data Science Intern',
    company: 'BMW Group Financial Services',
    location: 'Columbus, Ohio',
    dates: 'Feb 2026 to Jul 2026',
    bullets: [
      'Built Request2PO, a PowerApps and SharePoint automation platform that centralizes purchase orders, vendor routing, approvals, and status tracking. It saves 15+ hours a week.',
      'Helped develop AI-driven insurance valuation and funding verification systems using VIN analysis, ID validation, and workflow automation. Projected to reduce annual operational costs by $400K+.',
      'Worked on enterprise AI tools, including a document search pipeline on AWS SageMaker and a conversational assistant built with GAIA and n8n.',
    ],
  },
  {
    id: 'odot',
    role: 'Data Analytics Intern',
    company: 'Ohio Department of Transportation, Rail Division',
    location: 'Columbus, Ohio',
    dates: 'Sep 2025 to Jan 2026',
    bullets: [
      'Analyzed workflow bottlenecks in the Rail Division and built an AI assistant to automate repetitive tasks and centralize process guidance.',
      'Migrated 42 Salesforce workflows to Flow Builder and validated the deployments in sandbox environments. Estimated to save $20K+ annually.',
    ],
  },
  {
    id: 'jpmorgan',
    role: 'Software Engineer Intern',
    company: 'JPMorgan Chase & Co.',
    location: 'Columbus, Ohio',
    dates: 'Jun 2024 to Aug 2024',
    bullets: [
      'Designed and launched DocDoctor, an AWS platform built with Node.js and React.js. It uses DynamoDB to speed up document retrieval across 1M+ records.',
      'Reduced latency by 40% by refactoring data flows and connecting structured and unstructured sources to React dashboards. Set up CI/CD with Git, Jenkins, and Docker.',
    ],
  },
]

export const earlierExperiences: ExperienceItem[] = [
  {
    id: 'edi-matrix',
    role: 'Developer and Business Analyst',
    company: 'EDI Matrix',
    location: 'Columbus, Ohio',
    dates: 'Jan 2024 to May 2024',
    bullets: [
      'Helped improve performance and scalability for 1K+ users of STARS 2.0, an enterprise CRM and sales-tracking platform for restaurant operations.',
      'Built analytics modules and data synchronization services with PostgreSQL and Sage APIs for forecasting, pipeline visibility, and compliance tracking.',
      'Automated reporting and dashboards, cutting manual processing by 15+ hours a month.',
    ],
  },
  {
    id: 'past-foundation',
    role: 'Information Technology Intern',
    company: 'PAST Foundation',
    location: 'Columbus, Ohio',
    dates: 'Jun 2023 to Aug 2023',
    bullets: [
      'Supported IT operations for 100+ systems, applying CompTIA A+ troubleshooting practices.',
      'Improved ticket resolution speed by 25% by analyzing recurring issues and streamlining support workflows.',
    ],
  },
]

export const skillGroups: { label: string; items: string[] }[] = [
  {
    label: 'Languages',
    items: ['JavaScript', 'Python', 'Java', 'C/C++', 'SQL'],
  },
  {
    label: 'Systems',
    items: ['PostgreSQL', 'Supabase', 'AWS (DynamoDB, SageMaker)', 'Stripe', 'Docker', 'Git and CI/CD'],
  },
  {
    label: 'Data and AI',
    items: ['Tableau', 'Power BI', 'OpenAI APIs', 'n8n', 'SageMaker pipelines', 'Multi-agent workflows'],
  },
  {
    label: 'Enterprise',
    items: ['Salesforce Flow Builder', 'PowerApps', 'SharePoint'],
  },
]
