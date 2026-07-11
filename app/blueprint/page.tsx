import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Architecture Blueprint',
  description: 'Our enterprise system framework: strict state machine routing, private vector indexes, and offline container orchestration.',
};

export default function BlueprintPage() {
  return (
    <section className={styles.section} aria-labelledby="blueprint-heading">
      <div className="container">
        
        {/* Header */}
        <div className={styles.intro}>
          <span className="mono-label">[ PLAYBOOK : BLUEPRINTS ]</span>
          <h1 className={styles.title} id="blueprint-heading">System Blueprints</h1>
          <p className={styles.description}>
            A granular overview of the architecture standard we apply to private agentic networks and document workflows.
          </p>
        </div>

        {/* Layout */}
        <div className={styles.layout}>
          
          {/* Steps List */}
          <div className={styles.blueprintList}>
            
            <div className={styles.blueprintStep}>
              <span className={styles.stepNum}>[ 01 / PIPELINE RULES ]</span>
              <h2 className={styles.stepTitle}>Strict State Routing</h2>
              <p className={styles.stepText}>
                We do not let generative models call APIs directly. Every intent is parsed, routed through structured state-machine loops, and validated before trigger executions occur.
              </p>
            </div>

            <div className={styles.blueprintStep}>
              <span className={styles.stepNum}>[ 02 / STORAGE CONSTRAINTS ]</span>
              <h2 className={styles.stepTitle}>Isolated Context Indexing</h2>
              <p className={styles.stepText}>
                Corporate databases are partitioned. Semantic retrieval vectors are stored in secure, private nodes with metadata classification tags, preventing training leakage.
              </p>
            </div>

            <div className={styles.blueprintStep}>
              <span className={styles.stepNum}>[ 03 / RELIABILITY FALLBACKS ]</span>
              <h2 className={styles.stepTitle}>Multi-Model Redundancy</h2>
              <p className={styles.stepText}>
                Every node is configured with primary and offline model layers. If API latency spikes or limits are reached, the system redirects processing locally.
              </p>
            </div>

          </div>

          {/* Visual SVG blueprint */}
          <div className={styles.visualSide}>
            <svg className={styles.blueprintSvg} width="360" height="340" viewBox="0 0 360 340" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              {/* Grid Background */}
              <defs>
                <pattern id="blueprintGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.025)" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="360" height="340" fill="url(#blueprintGrid)" />

              {/* Architecture drawing */}
              {/* Outer boundary */}
              <rect x="10" y="10" width="340" height="320" rx="8" stroke="var(--border-grid)" strokeWidth="1" strokeDasharray="4 4" />

              {/* Components */}
              {/* Node 1: Input */}
              <rect className={styles.svgNode} x="40" y="40" width="100" height="50" rx="4" fill="var(--bg-raised)" stroke="var(--border-card)" strokeWidth="1.5" />
              <text x="90" y="70" fill="var(--text-secondary)" fontSize="10" fontFamily="var(--font-mono)" textAnchor="middle">INPUT</text>

              {/* Node 2: Routing Core */}
              <rect className={styles.svgNode} x="220" y="40" width="100" height="50" rx="4" fill="var(--bg-raised)" stroke="var(--accent)" strokeWidth="1.5" />
              <text x="270" y="70" fill="var(--text-primary)" fontSize="10" fontFamily="var(--font-mono)" textAnchor="middle" fontWeight="bold">CORE ROUTE</text>

              {/* Node 3: LLM Evaluation */}
              <rect className={styles.svgNode} x="220" y="170" width="100" height="50" rx="4" fill="var(--bg-raised)" stroke="var(--border-card)" strokeWidth="1.5" />
              <text x="270" y="200" fill="var(--text-secondary)" fontSize="10" fontFamily="var(--font-mono)" textAnchor="middle">EVALUATOR</text>

              {/* Node 4: Action Node */}
              <rect className={styles.svgNode} x="40" y="170" width="100" height="50" rx="4" fill="var(--bg-raised)" stroke="var(--border-card)" strokeWidth="1.5" />
              <text x="90" y="200" fill="var(--text-secondary)" fontSize="10" fontFamily="var(--font-mono)" textAnchor="middle">ACTION</text>

              {/* Paths */}
              <path className={styles.svgPath} d="M 140 65 H 220" stroke="var(--text-secondary)" strokeWidth="1.5" />
              <path className={styles.svgPath} d="M 270 90 V 170" stroke="var(--accent)" strokeWidth="1.5" />
              <path className={styles.svgPath} d="M 220 195 H 140" stroke="var(--text-secondary)" strokeWidth="1.5" />
              <path className={styles.svgPath} d="M 90 170 V 90" stroke="var(--text-secondary)" strokeWidth="1.5" />

              {/* Decorative engineering marks */}
              <line x1="20" y1="20" x2="35" y2="20" stroke="var(--accent)" strokeWidth="2" />
              <line x1="20" y1="20" x2="20" y2="35" stroke="var(--accent)" strokeWidth="2" />
              
              <line x1="340" y1="320" x2="325" y2="320" stroke="var(--accent)" strokeWidth="2" />
              <line x1="340" y1="320" x2="340" y2="305" stroke="var(--accent)" strokeWidth="2" />
            </svg>
          </div>

        </div>

        {/* Dynamic CTA at the bottom */}
        <div style={{ borderTop: '1px solid var(--border-grid)', padding: '6rem 0 2rem', marginTop: '6rem', display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', alignItems: 'center' }}>
          <div>
            <span className="mono-label" style={{ marginBottom: '1.5rem' }}>[ SCIENTIFIC SCOPING ]</span>
            <h3 style={{ fontSize: '2rem', fontFamily: 'var(--font-display)', textTransform: 'uppercase', fontWeight: 800 }}>Need custom system flow blueprints?</h3>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Link href="/contact" className="btn btn-primary" style={{ padding: '1rem 2.5rem' }}>
              Request scoping briefing
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
