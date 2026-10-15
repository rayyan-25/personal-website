import type { ProductDetail } from '@/lib/portfolio-data'
import { Arrow } from '@/components/visuals'
import { Motion } from '@/components/motion'

export type ProductSection = { heading: string; paragraphs?: string[]; steps?: string[] }
export function ProductPage({ product, title, titleAccent, sections, focus }: { product: ProductDetail; title: string; titleAccent: string; sections: ProductSection[]; focus: string }) {
  const other = product.slug === 'seed' ? { slug: 'grub', name: 'Grub' } : { slug: 'seed', name: 'Seed' }
  return (
    <main id="main" className={`wrap product-page case-${product.slug}`}>
      <Motion />
      <a className="breadcrumb" href="/#work"><span aria-hidden="true">←</span> Back to selected work</a>
      <header className="case-hero"><div className="case-kicker"><p className="micro">{product.name.toUpperCase()} / AN AURA LABS PRODUCT</p><span className="case-status">{product.slug === 'seed' ? 'PRE-LAUNCH' : 'IN DEVELOPMENT'}</span></div><h1>{title}<br /><em>{titleAccent}</em></h1><div className="case-summary"><p>{product.summary}</p><a className="button button-lime" href={product.website} target="_blank" rel="noopener noreferrer">Visit {product.name} <Arrow /><span className="sr-only">(opens in a new tab)</span></a></div></header>
      <div className="case-intro-band"><div><p className="micro">MY WORK</p><p>Product & engineering</p></div><div><p className="micro">FOCUS</p><p>{focus}</p></div><div><p className="micro">BUILT UNDER</p><p>Aura Labs · Columbus, Ohio</p></div></div>
      <div className="case-editorial"><nav className="case-sidebar" aria-label="On this page"><p className="micro">IN THIS STORY</p>{sections.map((section, i) => <a href={`#${slugify(section.heading)}`} key={section.heading}>0{i + 1} / {section.heading}</a>)}</nav><div>{sections.map(section => <section key={section.heading} id={slugify(section.heading)} className="case-section" aria-labelledby={`${slugify(section.heading)}-heading`} data-reveal><h2 id={`${slugify(section.heading)}-heading`}>{section.heading}</h2>{section.paragraphs?.map(p => <p key={p}>{p}</p>)}{section.steps && <ol>{section.steps.map(s => <li key={s}>{s}</li>)}</ol>}</section>)}<div className="case-next"><p className="micro">KEEP EXPLORING</p><a href={`/work/${other.slug}/`}>{other.name} <Arrow /></a></div></div></div>
    </main>
  )
}
function slugify(value: string) { return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') }
