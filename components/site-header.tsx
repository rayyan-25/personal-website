import { profile } from '@/lib/portfolio-data'
import { Arrow } from '@/components/visuals'
import { MobileMenu } from '@/components/mobile-menu'
const links = [{ href: '/#work', label: 'Work' }, { href: '/#experience', label: 'Experience' }, { href: '/#about', label: 'About' }, { href: '/#contact', label: 'Contact' }]
export function SiteHeader() {
  return <header className="site-header"><div className="header-inner wrap"><a className="brand" href="/" aria-label="Rayyan Sharief, home"><span className="brand-symbol" aria-hidden="true">r<span>→</span>s</span><span className="brand-name">Rayyan Sharief<span>ENGINEER & BUILDER</span></span></a><nav className="nav-desktop" aria-label="Primary">{links.map(link => <a key={link.href} href={link.href}>{link.label}</a>)}</nav><a className="nav-resume" href={profile.resumePath} target="_blank" rel="noopener noreferrer">Resume <Arrow /></a><MobileMenu><nav aria-label="Mobile">{links.map(link => <a key={link.href} href={link.href}>{link.label}<Arrow /></a>)}</nav></MobileMenu></div></header>
}
