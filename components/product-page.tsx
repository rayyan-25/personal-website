import Link from 'next/link'
import type { ProductDetail } from '@/lib/portfolio-data'

export type ProductSection = {
  heading: string
  paragraphs?: string[]
  steps?: string[]
}

export function ProductPage({
  product,
  title,
  sections,
}: {
  product: ProductDetail
  title: string
  sections: ProductSection[]
}) {
  return (
    <main id="main" className="container product-page">
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link href="/#work">Back to work</Link>
      </nav>

      <header className="product-hero">
        <img className="product-hero-mark" src={product.logo} alt={product.logoAlt} width={96} height={96} />
        <div>
          <p className="eyebrow">Product · {product.name}</p>
          <h1>{title}</h1>
          <p className="lede">{product.summary}</p>
          <p className="product-status-line">
            <strong>Status:</strong> {product.status}
          </p>
        </div>
      </header>

      {sections.map((section) => (
        <section key={section.heading} className="product-section" aria-labelledby={`${product.slug}-${slugify(section.heading)}`}>
          <h2 id={`${product.slug}-${slugify(section.heading)}`}>{section.heading}</h2>
          {section.paragraphs?.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {section.steps ? (
            <ol className="product-steps">
              {section.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          ) : null}
        </section>
      ))}

      <div className="product-links actions">
        <a className="button button-primary" href={product.website} target="_blank" rel="noopener noreferrer">
          Visit {product.website.replace('https://', '')}
          <span className="visually-hidden"> (opens in a new tab)</span>
        </a>
        <Link className="button button-text" href="/#contact">
          Contact me
        </Link>
      </div>
    </main>
  )
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}
