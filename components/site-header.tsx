import { profile } from '@/lib/portfolio-data'
import { ThemeToggle } from '@/components/theme-toggle'
import { MobileMenu } from '@/components/mobile-menu'

const links = [
  { href: '/#work', label: 'Work' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#about', label: 'About' },
  { href: '/#contact', label: 'Contact' },
]

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="/" aria-label="Rayyan Sharief, home">
          <span className="brand-mark" aria-hidden="true">r<span>.</span>s</span>
          <span className="brand-name">Rayyan Sharief</span>
        </a>

        <nav className="nav-desktop" aria-label="Primary">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <a className="nav-cta" href={profile.resumePath}>
            Resume
          </a>
        </nav>

        <div className="header-controls">
          <ThemeToggle />
          <MobileMenu>
            <nav aria-label="Mobile">
              {links.map((link) => (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}
              <a href={profile.resumePath}>Resume (PDF)</a>
            </nav>
          </MobileMenu>
        </div>
      </div>
    </header>
  )
}

