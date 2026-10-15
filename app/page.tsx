import Link from 'next/link'
import { CopyEmail } from '@/components/copy-email'
import { experiences, grub, profile, seed, selectedWork, skillGroups } from '@/lib/portfolio-data'

export default function HomePage() {
  return (
    <main id="main">
      <section className="hero container" aria-labelledby="hero-heading">
        <p className="eyebrow">Software engineer and product builder · {profile.location}</p>
        <h1 id="hero-heading" className="hero-name">
          Rayyan Sharief
        </h1>
        <p className="lede">
          I build backend systems, fintech infrastructure, and AI workflows, and I am building consumer
          products of my own. I am a software engineer intern at Wahed Invest and a Data Analytics student
          at The Ohio State University, expected December 2027.
        </p>
        <p className="lede-secondary">
          My current products are Grub, a food discovery app built around creator restaurant videos, and
          Seed, a round-up app for automatic giving. Both are under Aura Labs.
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
      </section>

      <section id="work" className="section container" aria-labelledby="work-heading">
        <header className="section-head">
          <p className="eyebrow">Products</p>
          <h2 id="work-heading">Two products I am building</h2>
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
              Seed rounds each eligible purchase up to the next whole dollar and sets the spare change aside for
              a cause the donor chooses. Donors set a monthly limit, so giving stays predictable. Round-ups are
              voluntary sadaqah, not zakat.
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
          <p className="eyebrow">Experience</p>
          <h2 id="experience-heading">Internships and engineering roles</h2>
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
      </section>

      <section id="about" className="section container about" aria-labelledby="about-heading">
        <header className="section-head">
          <p className="eyebrow">About</p>
          <h2 id="about-heading">How I work</h2>
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
          <h2 id="contact-heading">Get in touch</h2>
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
