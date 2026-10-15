import Link from 'next/link'
import { CopyEmail } from '@/components/copy-email'
import {
  earlierExperiences,
  experiences,
  grub,
  profile,
  seed,
  selectedWork,
  skillGroups,
} from '@/lib/portfolio-data'

export default function HomePage() {
  return (
    <main id="main">
      <section className="hero container" aria-labelledby="hero-heading">
        <p className="eyebrow">Software engineer and product builder · {profile.location}</p>
        <h1 id="hero-heading" className="hero-name">
          Rayyan<br /><em>Sharief.</em>
        </h1>
        <p className="lede">
          I build backend systems, fintech infrastructure, and products of my own.
        </p>
        <p className="lede-secondary">
          Software engineer intern at Wahed Invest. Data Analytics at Ohio State.
          Building Grub and Seed under Aura Labs.
        </p>
        <div className="actions">
          <a className="button button-primary" href="#work">
            See my work
          </a>
          <a className="button button-secondary" href={profile.resumePath}>
            Resume (PDF)
          </a>
          <a className="button button-text" href={`mailto:${profile.email}`}>
            Email me
          </a>
        </div>
        <div className="hero-socials">
          <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
        </div>
      </section>

      <section id="work" className="section container" aria-labelledby="work-heading">
        <header className="section-head">
          <p className="eyebrow"><span>01 /</span> Products</p>
          <h2 id="work-heading">What I am<br /><em>building.</em></h2>
        </header>

        <article className="product product-flagship" aria-labelledby="grub-heading">
          <div className="product-mark">
            <img src={grub.logo} alt={grub.logoAlt} width={112} height={112} />
          </div>
          <div className="product-body">
            <p className="product-status">Flagship · {grub.status}</p>
            <h3 id="grub-heading">{grub.name}</h3>
            <p className="product-tagline">{grub.tagline}</p>
            <p>
              Clips is the center of Grub. Creators submit restaurant review videos, Grub links each video to
              the specific restaurant branch it covers, and viewers can open that restaurant from the video.
              Restaurant and dish information appears where it is available, including halal details where they
              exist. Grub does not certify food, and a video is never treated as proof that a restaurant is
              halal.
            </p>
            <div className="actions">
              <Link className="button button-primary" href="/work/grub">
                Read the Grub case study
              </Link>
              <a className="button button-text" href={grub.website} target="_blank" rel="noopener noreferrer">
                Visit usegrub.app
                <span className="visually-hidden"> (opens in a new tab)</span>
              </a>
            </div>
          </div>
        </article>

        <article className="product product-seed" aria-labelledby="seed-heading">
          <div className="product-mark">
            <img src={seed.logo} alt={seed.logoAlt} width={112} height={112} />
          </div>
          <div className="product-body">
            <p className="product-status">{seed.status}</p>
            <h3 id="seed-heading">{seed.name}</h3>
            <p className="product-tagline">{seed.tagline}</p>
            <p>
              Seed calculates a round-up on each eligible purchase, up to the next whole dollar, and accumulates
              those amounts for a cause the donor chooses. Money is collected only in a donation the donor
              authorizes, within a monthly limit the donor sets. Round-ups are voluntary sadaqah, not zakat.
            </p>
            <div className="actions">
              <Link className="button button-primary" href="/work/seed">
                Read the Seed product page
              </Link>
              <a className="button button-text" href={seed.website} target="_blank" rel="noopener noreferrer">
                Visit givewithseed.com
                <span className="visually-hidden"> (opens in a new tab)</span>
              </a>
            </div>
          </div>
        </article>

        <div className="more-work">
          <h3 className="subhead">Other work</h3>
          <ul className="work-list">
            {selectedWork.map((item) => (
              <li key={item.name} className="work-row">
                <div className="work-name">
                  <p className="work-title">{item.name}</p>
                  <p className="work-kind">{item.kind}</p>
                </div>
                <div className="work-detail">
                  <p>{item.description}</p>
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer">
                      {item.hrefLabel}
                      <span className="visually-hidden"> (opens in a new tab)</span>
                    </a>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="experience" className="section container" aria-labelledby="experience-heading">
        <header className="section-head">
          <p className="eyebrow"><span>02 /</span> Experience</p>
          <h2 id="experience-heading">Where I have<br /><em>worked.</em></h2>
        </header>
        <ol className="experience-list">
          {experiences.map((job) => (
            <li key={job.id} className="experience-row">
              <div className="experience-meta">
                <p className="experience-dates">{job.dates}</p>
                <p className="experience-location">{job.location}</p>
              </div>
              <div className="experience-body">
                <h3>
                  {job.role}, <span>{job.company}</span>
                </h3>
                <ul>
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
        <div className="earlier-experience">
          <h3 className="subhead">Earlier experience</h3>
          <ul className="earlier-list">
            {earlierExperiences.map((job) => (
              <li key={job.id} className="earlier-row">
                <p className="earlier-title">
                  {job.role}, <span>{job.company}</span>
                </p>
                <p className="earlier-meta">
                  {job.dates} · {job.location}
                </p>
                <ul>
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="about" className="section container about" aria-labelledby="about-heading">
        <header className="section-head">
          <p className="eyebrow"><span>03 /</span> About</p>
          <h2 id="about-heading">A little<br /><em>about me.</em></h2>
        </header>
        <div className="about-body">
          <p>
            I am a Data Analytics student at The Ohio State University who learns best by taking hard problems
            all the way to production. Most of my work sits where money, data, and users meet: settlement flows,
            ledgers, access rules for financial data, and tools that help teams make decisions.
          </p>
          <p>
            Across internships at Wahed Invest, BMW Group Financial Services, JPMorgan Chase &amp; Co., and the
            Ohio Department of Transportation, I have worked across backend engineering, data analysis, and
            enterprise automation. That ranges from idempotent Stripe settlement to AWS SageMaker pipelines for
            document search.
          </p>
          <p>
            Outside of school and work, I build products under Aura Labs, an independent company based in
            Columbus. I care about what a product does for the person using it, and I want the business and
            technical decisions to hold up together. When I am not building, I play soccer and travel.
          </p>
        </div>

        <div className="skills">
          <h3 className="subhead">Skills</h3>
          <dl className="skill-groups">
            {skillGroups.map((group) => (
              <div key={group.label} className="skill-group">
                <dt>{group.label}</dt>
                <dd>{group.items.join(', ')}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="contact" className="section container contact" aria-labelledby="contact-heading">
        <header className="section-head">
          <p className="eyebrow">Contact</p>
          <h2 id="contact-heading">Let&apos;s<br /><em>connect.</em></h2>
        </header>
        <p className="contact-lede">
          Email is the best way to reach me about roles, collaborations, or products.
        </p>
        <a className="contact-email" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        <CopyEmail email={profile.email} />
        <ul className="contact-links">
          <li>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              GitHub
              <span className="visually-hidden"> (opens in a new tab)</span>
            </a>
          </li>
          <li>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
              <span className="visually-hidden"> (opens in a new tab)</span>
            </a>
          </li>
          <li>
            <a href={profile.resumePath}>Resume (PDF)</a>
          </li>
        </ul>
      </section>
    </main>
  )
}

