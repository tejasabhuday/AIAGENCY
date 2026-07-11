import Link from 'next/link';
import HeroVisual from '@/components/HeroVisual/HeroVisual';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      {/* ─── Hero Section ─── */}
      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.gridLines} aria-hidden="true" />
        
        <div className={`${styles.grid} container`}>
          <div className={styles.content}>
            <div className="mono-label" style={{ marginBottom: '2.5rem' }}>
              <span>[ PIPELINE: DECISION MATRIX ]</span>
            </div>
            
            <h1 className={styles.title} id="hero-title">
              Autonomous AI<br />
              Systems. Shipped<br />
              <span className={styles.titleAccent}>in Days.</span>
            </h1>
            
            <p className={styles.subtitle}>
              We combine elite Software Development Engineering depth with advanced generative and agentic AI fluency to wire autonomous reasoning engines directly into your core business infrastructure. No chat wrappers. No manual prompting. Just custom-engineered workflows that operate 24/7 without human intervention.
            </p>
            

          </div>
          
          <HeroVisual />
        </div>
      </section>

      {/* ─── Target Audience Strip ─── */}
      <section className={styles.trust} aria-label="Target Audience">
        <div className="container">
          <div className={styles.trustLabel}>Engineered for High-Velocity B2B Operations</div>
          <div className={styles.trustLogos}>
            <span className={styles.logoItem}>SCALING B2B SAAS TEAMS</span>
            <span className={styles.logoItem}>OPS-HEAVY SMBS</span>
            <span className={styles.logoItem}>LOGISTICS PROVIDERS</span>
            <span className={styles.logoItem}>HIGH-GROWTH BRANDS</span>
            <span className={styles.logoItem}>AUTOMATED REVENUE PIPELINES</span>
          </div>
        </div>
      </section>

      {/* ─── Value Proposition Cards ─── */}
      <section className={styles.capabilities} aria-labelledby="cap-title">
        <div className="container">
          <div className={styles.capHeader}>
            <div>
              <span className="mono-label mono-label-muted">[ WHY US : COMPETITIVE EDGE ]</span>
              <h2 className={styles.capTitle} id="cap-title">
                Why Businesses<br />
                <span className={styles.capTitleAccent}>Choose Us</span>
              </h2>
            </div>
            <div>
              <p className={styles.capDesc}>
                Purpose-built for scaling B2B SaaS teams, ops-heavy SMBs, logistics providers, and high-growth brands seeking immediate operational leverage and automated revenue pipelines.
              </p>
            </div>
          </div>

          <div className={styles.capGrid}>
            <article className={`${styles.capCard} card`}>
              <span className={styles.cardNum}>[ 01 ]</span>
              <h3 className={styles.cardTitle}>Engineering Depth Over No-Code Hacks</h3>
              <p className={styles.cardText}>
                While traditional agencies quote months and rely on fragile no-code tools, our SDE background allows us to deploy production-grade vector databases, custom API wiring, and multi-agent teams in days.
              </p>
              <Link href="/services" className={styles.cardLink}>
                View Our Services
              </Link>
            </article>

            <article className={`${styles.capCard} card`}>
              <span className={styles.cardNum}>[ 02 ]</span>
              <h3 className={styles.cardTitle}>Truly Autonomous Systems</h3>
              <p className={styles.cardText}>
                We move your team beyond manually typing prompts into chat interfaces. Our systems integrate natively into your CRMs, ERPs, and communication channels like WhatsApp to execute research, lead qualification, and data pipelines automatically.
              </p>
              <Link href="/services" className={styles.cardLink}>
                Explore Agent Systems
              </Link>
            </article>

            <article className={`${styles.capCard} card`}>
              <span className={styles.cardNum}>[ 03 ]</span>
              <h3 className={styles.cardTitle}>ROI-Driven 2-Week Pilots</h3>
              <p className={styles.cardText}>
                We eliminate implementation risk through structured, low-risk paid pilots. We build, deploy, and prove measurable operational hours saved in your live environment before scaling into comprehensive maintenance retainers.
              </p>
              <Link href="/blueprint" className={styles.cardLink}>
                Explore Our Blueprint
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* ─── Call to Action ─── */}
      <section className={styles.cta} aria-labelledby="cta-heading">
        <div className="container">
          <div className={styles.ctaGrid}>
            <div className={styles.ctaTextSection}>
              <span className="mono-label" style={{ marginBottom: '1.5rem' }}>[ DISCOVERY CALL : CLAIM YOUR DEMO ]</span>
              <h2 className={styles.ctaTitle} id="cta-heading">Ready to Build the System That Prints Time?</h2>
              <p className={styles.ctaDesc}>
                Stop manually prompting and start deploying autonomous operational infrastructure today.
              </p>
            </div>
            <div className={styles.ctaActionSection}>
              <Link href="/contact" className="btn btn-primary" style={{ padding: '1rem 2.5rem' }}>
                Book Your Discovery Call &amp; Claim Your Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
