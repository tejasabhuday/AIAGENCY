import Link from 'next/link';
import styles from './Footer.module.css';

const Logo = () => (
  <svg width="24" height="24" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <rect width="32" height="32" rx="8" fill="url(#footerLogoGrad)" />
    <path d="M9 16L13 10L16 14L19 8L23 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <defs>
      <linearGradient id="footerLogoGrad" x1="0" y1="0" x2="32" y2="32">
        <stop stopColor="#7C3AED" />
        <stop offset="1" stopColor="#4F46E5" />
      </linearGradient>
    </defs>
  </svg>
);

const FOOTER_GROUPS = [
  {
    title: 'Solutions',
    links: [
      { label: 'AI Agents', href: '/services#agents' },
      { label: 'Workflows', href: '/services#workflows' },
      { label: 'LLM Integrations', href: '/services#llms' },
      { label: 'RAG Systems', href: '/services#rag' },
    ],
  },
  {
    title: 'Agency',
    links: [
      { label: 'Our Work', href: '/work' },
      { label: 'About Us', href: '/about' },
      { label: 'System Blueprints', href: '/blueprint' },
      { label: 'Contact', href: '/contact' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <Logo />
              <span className={styles.logoText}>Axon AI</span>
            </Link>
            <p className={styles.description}>
              We design, build, and deploy custom intelligent agents and robust automated workflows for high-growth enterprises.
            </p>
          </div>
          <div className={styles.links}>
            {FOOTER_GROUPS.map((group) => (
              <div key={group.title} className={styles.group}>
                <span className={styles.groupTitle}>{group.title}</span>
                <ul className={styles.groupList}>
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className={styles.link}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.bottom}>
          <p className={styles.copyright}>&copy; {new Date().getFullYear()} Axon AI Inc. All rights reserved.</p>
          <div className={styles.legal}>
            <a href="#" className={styles.legalLink}>Privacy Policy</a>
            <a href="#" className={styles.legalLink}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
