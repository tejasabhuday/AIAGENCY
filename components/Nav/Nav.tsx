'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Nav.module.css';

const Logo = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <rect width="32" height="32" rx="8" fill="url(#logoFill)" />
    <path d="M9 16L13 10L16 14L19 8L23 16" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="16" cy="23" r="2.5" fill="black" fillOpacity="0.8" />
    <defs>
      <linearGradient id="logoFill" x1="0" y1="0" x2="32" y2="32">
        <stop stopColor="#FFFFFF" />
        <stop offset="0.5" stopColor="#E5E7EB" />
        <stop offset="1" stopColor="#9CA3AF" />
      </linearGradient>
    </defs>
  </svg>
);

const NAV_LINKS = [
  { href: '/services',  label: 'Services'  },
  { href: '/work',      label: 'Work'      },
  { href: '/about',     label: 'About'     },
  { href: '/blueprint', label: 'Blueprint' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <header
      className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}
      id="site-nav"
    >
      <div className={`${styles.inner} container`}>
        {/* Logo */}
        <Link href="/" className={styles.logo} aria-label="Axon AI home">
          <Logo />
          <span className={styles.logoText}>Axon AI</span>
        </Link>

        {/* Desktop Links */}
        <nav className={styles.links} aria-label="Main navigation">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`${styles.link} ${pathname === href ? styles.linkActive : ''}`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className={styles.actions}>
          <Link href="/contact" className="btn btn-primary" id="nav-cta" style={{ padding: '0.6rem 1.4rem', fontSize: '0.85rem' }}>
            Get Started
          </Link>
          {/* Hamburger */}
          <button
            className={styles.hamburger}
            id="nav-toggle"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(o => !o)}
          >
            <span className={`${styles.bar} ${menuOpen ? styles.barTop : ''}`} />
            <span className={`${styles.bar} ${menuOpen ? styles.barMid : ''}`} />
            <span className={`${styles.bar} ${menuOpen ? styles.barBot : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`${styles.mobile} ${menuOpen ? styles.mobileOpen : ''}`}
        aria-hidden={!menuOpen}
      >
        <nav className={styles.mobileLinks} aria-label="Mobile navigation">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`${styles.mobileLink} ${pathname === href ? styles.mobileLinkActive : ''}`}
            >
              {label}
            </Link>
          ))}
          <Link href="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}>
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
}
