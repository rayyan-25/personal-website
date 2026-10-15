import { Arrow, Asterisk, OrbitalSculpture } from '@/components/visuals'
import { Motion } from '@/components/motion'
import { CopyEmail } from '@/components/copy-email'
import { earlierExperiences, experiences, profile, skillGroups } from '@/lib/portfolio-data'

const otherWork = [
  { name: 'iWaqf', category: 'FINTECH · WAHED', description: 'Reliable money movement for digital endowments. Stripe settlement, PostgreSQL, and access controls across 22K+ transactions.', outcome: '£741K managed by the platform', href: 'https://iwaqf.io' },
  { name: 'Swyft Payments', category: 'CO-FOUNDED · PAYMENTS', description: 'Tap-to-donate terminals that make contributing take about two seconds. Hardware, payments, and the business behind both.', outcome: '$30K+ raised from 2.5K+ donors', href: 'https://www.paywithswyft.com' },
  { name: 'HOPE AI', category: 'AI · COMMUNITY', description: 'A faith-informed mental health chatbot built with Supabase, OpenAI APIs, and multi-agent workflows.', outcome: 'Built for a community of 500+ users', href: 'https://hopelabs.org' },
  { name: 'PlanMyDegree', category: 'SOFTWARE · EDUCATION', description: 'Less guesswork in graduation planning. Course lookup, prerequisite validation, and requirement tracking, built with a team of six.', outcome: 'Built for 500+ Ohio State students', href: '' },
]

export default function HomePage() {
  return (
    <main id="main">
      <Motion />
      <section className="hero wrap" aria-labelledby="hero-heading">
        <div className="hero-topline"><p className="micro"><span className="status-dot" /> RAYYAN SHARIEF / SOFTWARE & PRODUCTS</p><p className="micro hero-location">COLUMBUS, OHIO <span>↗</span></p></div>
        <div className="hero-composition">
          <div className="hero-text">
            <h1 id="hero-heading"><span>Engineer by craft.</span><span className="hero-accent">Builder by instinct<span className="title-period">.</span></span></h1>
            <div className="hero-bottom">
              <p>I turn complex problems into things people can use. From financial systems to products of my own, I like taking an idea all the way.</p>
              <a className="button button-lime" href="#work">Explore my work <Arrow /></a>
            </div>
          </div>
          <div className="hero-art" data-tilt aria-hidden="true"><OrbitalSculpture /><div className="art-caption"><span>CURIOUS BY DEFAULT.</span><span>ALWAYS BUILDING.</span></div></div>
        </div>
        <div className="hero-foot"><p>Currently engineering at <strong>Wahed Invest</strong><br />Studying Data Analytics at <strong>Ohio State</strong></p><a href="#work" className="scroll-link">SCROLL TO EXPLORE <span>↓</span></a><div className="hero-socials"><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <Arrow /></a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <Arrow /></a></div></div>
      </section>
      <div className="experience-strip wrap" aria-label="Organizations where I have worked"><span className="micro">A FEW PLACES<br />I&apos;VE CONTRIBUTED</span><div><span>wahed<span className="logo-dot">.</span></span><span className="bmw-word">BMW GROUP</span><span className="jpm-word">J.P. Morgan</span><span className="odot-word">OHIO DOT</span></div></div>
      <section id="work" className="section wrap" aria-labelledby="work-heading">
        <div className="section-heading" data-reveal><p className="micro section-label"><span>01</span> INDEPENDENT PRODUCTS</p><div><h2 id="work-heading">Made from<br /><em>what if.</em></h2><p>Two ideas I couldn&apos;t leave alone.<br />Now taking shape under <a href={profile.auraLabs} target="_blank" rel="noopener noreferrer">Aura Labs <span className="sr-only">(opens in a new tab)</span>↗</a>.</p></div></div>
        <div className="product-grid">
          <article className="project-panel seed-panel" data-reveal aria-labelledby="seed-title">
            <div className="panel-top"><span className="project-wordmark">seed<span>↗</span></span><span className="panel-status">PRE-LAUNCH</span></div>
            <div className="panel-art seed-art" aria-hidden="true"><div className="seed-petal petal-one" /><div className="seed-petal petal-two" /><div className="seed-stem" /><div className="seed-orbit" /><span className="art-number">A LITTLE. OFTEN.</span></div>
            <div className="panel-copy"><p className="micro">FINTECH / EVERYDAY GIVING</p><h3 id="seed-title">Small change.<br />Lasting impact.</h3><p>A round-up giving app that makes sadaqah part of everyday life. Choose a cause, set a limit, and build a habit of giving.</p></div>
            <a className="panel-link" href="/work/seed/"><span>Meet Seed</span><span className="circle-arrow"><Arrow /></span></a>
          </article>
          <article className="project-panel grub-panel" data-reveal aria-labelledby="grub-title">
            <div className="panel-top"><span className="project-wordmark">grub<span>↗</span></span><span className="panel-status">IN DEVELOPMENT</span></div>
            <div className="panel-art grub-art" aria-hidden="true"><div className="grub-ripple ripple-one"/><div className="grub-ripple ripple-two"/><div className="grub-ripple ripple-three"/><div className="grub-play"><svg viewBox="0 0 80 80"><path d="M31 20 60 40 31 60Z" fill="currentColor" /></svg></div><span className="art-number">WATCH. DISCOVER. GO.</span></div>
            <div className="panel-copy"><p className="micro">CREATORS / FOOD DISCOVERY</p><h3 id="grub-title">Good food.<br />Found through people.</h3><p>Restaurant discovery built around creator videos. Clips connects the food you see to the exact place you can find it.</p></div>
            <a className="panel-link" href="/work/grub/"><span>Explore Grub</span><span className="circle-arrow"><Arrow /></span></a>
          </article>
        </div>
        <div className="more-work-head" data-reveal><h3>More things I&apos;ve helped build.</h3><span className="micro">SYSTEMS. PRODUCTS. REAL-WORLD PROBLEMS.</span></div>
        <div className="other-work-grid">{otherWork.map((work, index) => <article className="other-project" key={work.name} data-reveal><div className="other-top"><span className="micro">0{index + 1} / {work.category}</span>{work.href ? <a href={work.href} target="_blank" rel="noopener noreferrer" className="small-arrow" aria-label={`Visit ${work.name} (opens in a new tab)`}><Arrow /></a> : <Asterisk className="small-star" />}</div><h4>{work.name}</h4><p>{work.description}</p><span className="project-outcome">{work.outcome}</span></article>)}</div>
      </section>
      <section id="experience" className="section experience-section wrap" aria-labelledby="experience-heading">
        <div className="section-heading" data-reveal><p className="micro section-label"><span>02</span> EXPERIENCE</p><div><h2 id="experience-heading">Different teams.<br /><em>Same curiosity.</em></h2><p>Backend engineering, data, and AI.<br />Learning by doing work that matters.</p></div></div>
        <div className="career-list">{experiences.map((job, i) => <details className="career-item" key={job.id} open={i === 0} data-reveal><summary><span className="career-index">0{i + 1}</span><span className="career-company"><span>{job.company.replace(', Rail Division', '')}</span><span className="career-role">{job.role}</span></span><span className="career-date">{job.dates.replace(' to ', ' – ')}{i === 0 && <span className="current-tag">CURRENT</span>}</span><span className="career-toggle" aria-hidden="true">+</span></summary><div className="career-detail"><p className="career-location">{job.location}{job.id === 'odot' && ' · Rail Division'}</p><ul>{job.bullets.map(b => <li key={b}>{b}</li>)}</ul></div></details>)}</div>
        <div className="earlier-career" data-reveal><p className="micro">BEFORE THAT</p>{earlierExperiences.map(job => <details key={job.id}><summary><span>{job.company}</span><span>{job.role}</span><span className="early-date">{job.dates.replace(' to ', ' – ')}</span><span aria-hidden="true">+</span></summary><ul>{job.bullets.map(b => <li key={b}>{b}</li>)}</ul></details>)}</div>
        <div className="outcomes" data-reveal><div><strong>22K<span>+</span></strong><p>Transactions covered by<br />iWaqf settlement work</p></div><div><strong>15<span>+ hrs</span></strong><p>Saved each week by<br />BMW&apos;s Request2PO</p></div><div><strong>40<span>%</span></strong><p>Lower retrieval latency<br />at JPMorgan Chase</p></div></div>
      </section>
      <section id="about" className="section about-section wrap" aria-labelledby="about-heading">
        <div className="about-heading" data-reveal><p className="micro section-label"><span>03</span> THE PERSON BEHIND THE WORK</p><h2 id="about-heading">Serious about<br />the work.<br /><em>Curious about<br />everything.</em></h2><Asterisk className="about-star" /></div>
        <div className="about-content" data-reveal><p className="about-lead">I&apos;m Rayyan, a software engineer, product builder, and Data Analytics student at The Ohio State University.</p><p>I like the whole problem: how a system works, what makes it useful, and how to build a business around it. That&apos;s taken me from financial infrastructure and enterprise AI to starting products under Aura Labs.</p><p>Fintech is a particular interest. I care about making money work better for people, whether that means a reliable settlement flow or a simpler way to give.</p><p className="personal-note">Away from the keyboard? Usually soccer, travel, or another idea I&apos;ve convinced myself is worth trying.</p><div className="about-meta"><span><span className="status-dot" /> Columbus, Ohio</span><span>Ohio State · Class of 2027</span></div></div>
        <div className="toolkit" data-reveal><div className="toolkit-intro"><p className="micro">THE TOOLKIT</p><p>The tools change.<br />The habit of figuring<br />things out stays.</p></div><dl>{skillGroups.map(group => <div key={group.label}><dt>{group.label}</dt><dd>{group.items.map(item => <span key={item}>{item}</span>)}</dd></div>)}</dl></div>
      </section>
      <section id="contact" className="contact-section" aria-labelledby="contact-heading"><div className="wrap"><div className="contact-top"><p className="micro">04 / START A CONVERSATION</p><Asterisk /></div><h2 id="contact-heading" data-reveal>Something<br />on your <em>mind?</em></h2><div className="contact-bottom"><div><p>A role, an idea, or a good conversation.<br />I&apos;d like to hear about it.</p><a className="email-link" href={`mailto:${profile.email}`}>{profile.email} <Arrow /></a><CopyEmail email={profile.email} /></div><div className="contact-socials"><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <Arrow /></a><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <Arrow /></a><a href={profile.resumePath} target="_blank" rel="noopener noreferrer">Resume <Arrow /></a></div></div></div></section>
    </main>
  )
}
