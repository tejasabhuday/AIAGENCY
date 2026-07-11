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
              Bespoke AI<br />
              Architectures for<br />
              <span className={styles.titleAccent}>Enterprise.</span>
            </h1>
            
            <p className={styles.subtitle}>
              Axon AI designs, validates, and deploys custom autonomous agents and secure transaction workflows. Built with deterministic logic models, zero wrapper abstractions, and full compliance guarantees.
            </p>
            
            <div className={styles.actions}>
              <Link href="/contact" className="btn btn-primary">
                Request Roadmap
              </Link>
              <Link href="/services" className="btn btn-ghost">
                View Services
              </Link>
            </div>
          </div>
          
          <HeroVisual />
        </div>
      </section>

      {/* ─── Trust / Industry Strip ─── */}
      <section className={styles.trust} aria-label="Clients and Trust">
        <div className="container">
          <div className={styles.trustLogos}>
            <span className={styles.logoItem}>FINTECH LOGIC</span>
            <span className={styles.logoItem}>APEX LOGISTICS</span>
            <span className={styles.logoItem}>KINETIC SECURITIES</span>
            <span className={styles.logoItem}>SYSTEMIC GROUP</span>
            <span className={styles.logoItem}>SECURE CORE</span>
          </div>
        </div>
      </section>

      {/* ─── Capabilities Section ─── */}
      <section className={styles.capabilities} aria-labelledby="cap-title">
        <div className="container">
          <div className={styles.capHeader}>
            <div>
              <span className="mono-label mono-label-muted">[ DISCIPLINE : CAPABILITIES ]</span>
              <h2 className={styles.capTitle} id="cap-title">
                Custom System<br />
                <span className={styles.capTitleAccent}>Orchestration</span>
              </h2>
            </div>
            <div>
              <p className={styles.capDesc}>
                We build dedicated, non-shared models and state machinery. No templates. Every installation is engineered from zero to map exactly to your legacy infrastructure rules.
              </p>
            </div>
          </div>

          <div className={styles.capGrid}>
            <article className={`${styles.capCard} card`}>
              <span className={styles.cardNum}>[ 01 ]</span>
              <h3 className={styles.cardTitle}>Autonomous Agents</h3>
              <p className={styles.cardText}>
                Secure agents equipped for automated decision cycles, compliance checks, and cross-application tool calls with built-in sandbox environments.
              </p>
              <Link href="/services#agents" className={styles.cardLink}>
                Explore Agent Logic
              </Link>
            </article>

            <article className={`${styles.capCard} card`}>
              <span className={styles.cardNum}>[ 02 ]</span>
              <h3 className={styles.cardTitle}>Transaction Workflows</h3>
              <p className={styles.cardText}>
                State-machine workflows designed to process document flows, query databases, and connect APIs with robust failover mechanisms and live metric logs.
              </p>
              <Link href="/services#workflows" className={styles.cardLink}>
                Explore Workflows
              </Link>
            </article>

            <article className={`${styles.capCard} card`}>
              <span className={styles.cardNum}>[ 03 ]</span>
              <h3 className={styles.cardTitle}>Structured RAG</h3>
              <p className={styles.cardText}>
                Semantic searches that map contextual database files directly into instruction prompts, using vector-index structures to resolve queries accurately.
              </p>
              <Link href="/services#rag" className={styles.cardLink}>
                Explore Indexing
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
              <span className="mono-label" style={{ marginBottom: '1.5rem' }}>[ SCOPING SESSION : ACCELERATE ]</span>
              <h2 className={styles.ctaTitle} id="cta-heading">Begin Implementation</h2>
              <p className={styles.ctaDesc}>
                Schedule a briefing with our tech leads. We perform a stack evaluation and provide a custom deployment plan.
              </p>
            </div>
            <div className={styles.ctaActionSection}>
              <Link href="/contact" className="btn btn-primary" style={{ padding: '1rem 2.5rem' }}>
                Request briefing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
