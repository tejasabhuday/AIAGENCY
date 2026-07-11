import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Architecture Blueprint',
  description: 'Our precise, four-phase deployment methodology designed to validate ROI early, eliminate execution risk, and scale seamlessly into your live operations.',
};

export default function BlueprintPage() {
  return (
    <section className={styles.section} aria-labelledby="blueprint-heading">
      <div className="container">
        
        {/* Header */}
        <div className={styles.intro}>
          <span className="mono-label">[ PLAYBOOK : BLUEPRINTS ]</span>
          <h1 className={styles.title} id="blueprint-heading">The Engagement Blueprint: How We De-Risk AI Adoption</h1>
          <p className={styles.description}>
            We operate on a precise, four-phase deployment methodology designed to validate ROI early, eliminate execution risk, and scale seamlessly into your live operations.
          </p>
        </div>

        {/* Layout */}
        <div className={styles.layout}>
          
          {/* Steps List */}
          <div className={styles.blueprintList}>
            
            <div className={styles.blueprintStep}>
              <span className={styles.stepNum}>[ PHASE 01 / DAYS 1–7 ]</span>
              <h2 className={styles.stepTitle}>Architectural Discovery &amp; Targeted Demo</h2>
              <p className={styles.stepText}>
                We begin by identifying a single, high-friction operational bottleneck within your organization—such as manual lead enrichment, customer intake, or data routing. Instead of abstract slide decks, our engineering team rapidly constructs a customized, functional 30-minute demonstration of your exact use case automated in a live sandbox environment. We present this working prototype to executive leadership to validate technical feasibility and alignment before formal scoping.
              </p>
            </div>

            <div className={styles.blueprintStep}>
              <span className={styles.stepNum}>[ PHASE 02 / DAYS 8–21 ]</span>
              <h2 className={styles.stepTitle}>The 2-Week Paid Pilot</h2>
              <p className={styles.stepText}>
                We bypass lengthy consulting cycles by deploying a focused, low-risk paid pilot scoped strictly to two weeks. We build and integrate a production-ready, bug-free automation directly into your live operational environment. This phase is designed to deliver immediate, measurable proof of concept—tracking exact hours saved and workflow velocity gains before you commit to a full-scale deployment.
              </p>
            </div>

            <div className={styles.blueprintStep}>
              <span className={styles.stepNum}>[ PHASE 03 / WEEKS 4–6 ]</span>
              <h2 className={styles.stepTitle}>Full-Scale Systems Integration</h2>
              <p className={styles.stepText}>
                Upon successful pilot validation, we expand the architecture across your department or enterprise. We wire multi-agent teams and reasoning engines directly into your core systems—including CRMs, ERPs, SQL/vector databases, and messaging channels like WhatsApp or Slack. We conduct rigorous edge-case testing and team handover sessions to ensure your staff can seamlessly interact with the newly automated infrastructure.
              </p>
            </div>

            <div className={styles.blueprintStep}>
              <span className={styles.stepNum}>[ PHASE 04 / ONGOING MONTHLY ]</span>
              <h2 className={styles.stepTitle}>Dedicated Retainer Scaling &amp; Optimization</h2>
              <p className={styles.stepText}>
                Artificial intelligence models and APIs evolve rapidly; our dedicated maintenance retainers ensure your systems remain secure, optimized, and online 24/7. We manage all underlying API infrastructure, database hosting, prompt refinements, and system health monitoring. Every month, our team collaborates with your stakeholders to scope, build, and deploy new automated workflows—continuously compounding your operational leverage and profit margins.
              </p>
            </div>

          </div>

          {/* Visual SVG blueprint */}
          <div className={styles.visualSide}>
            <svg className={styles.blueprintSvg} width="360" height="400" viewBox="0 0 360 400" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              {/* Grid Background */}
              <defs>
                <pattern id="blueprintGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.025)" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="360" height="400" fill="url(#blueprintGrid)" />

              {/* Architecture drawing */}
              {/* Outer boundary */}
              <rect x="10" y="10" width="340" height="380" rx="8" stroke="var(--border-grid)" strokeWidth="1" strokeDasharray="4 4" />

              {/* Phase 01 Node */}
              <rect className={styles.svgNode} x="40" y="40" width="120" height="55" rx="4" fill="var(--bg-raised)" stroke="var(--accent)" strokeWidth="1.5" />
              <text x="100" y="63" fill="var(--text-primary)" fontSize="9" fontFamily="var(--font-mono)" textAnchor="middle" fontWeight="bold">PHASE 01</text>
              <text x="100" y="78" fill="var(--text-secondary)" fontSize="8" fontFamily="var(--font-mono)" textAnchor="middle">DISCOVERY &amp; DEMO</text>

              {/* Phase 02 Node */}
              <rect className={styles.svgNode} x="200" y="40" width="120" height="55" rx="4" fill="var(--bg-raised)" stroke="var(--border-card)" strokeWidth="1.5" />
              <text x="260" y="63" fill="var(--text-primary)" fontSize="9" fontFamily="var(--font-mono)" textAnchor="middle" fontWeight="bold">PHASE 02</text>
              <text x="260" y="78" fill="var(--text-secondary)" fontSize="8" fontFamily="var(--font-mono)" textAnchor="middle">2-WEEK PILOT</text>

              {/* Phase 03 Node */}
              <rect className={styles.svgNode} x="200" y="180" width="120" height="55" rx="4" fill="var(--bg-raised)" stroke="var(--border-card)" strokeWidth="1.5" />
              <text x="260" y="203" fill="var(--text-primary)" fontSize="9" fontFamily="var(--font-mono)" textAnchor="middle" fontWeight="bold">PHASE 03</text>
              <text x="260" y="218" fill="var(--text-secondary)" fontSize="8" fontFamily="var(--font-mono)" textAnchor="middle">FULL INTEGRATION</text>

              {/* Phase 04 Node */}
              <rect className={styles.svgNode} x="40" y="180" width="120" height="55" rx="4" fill="var(--bg-raised)" stroke="var(--border-card)" strokeWidth="1.5" />
              <text x="100" y="203" fill="var(--text-primary)" fontSize="9" fontFamily="var(--font-mono)" textAnchor="middle" fontWeight="bold">PHASE 04</text>
              <text x="100" y="218" fill="var(--text-secondary)" fontSize="8" fontFamily="var(--font-mono)" textAnchor="middle">RETAINER SCALING</text>

              {/* Retainer Loop node */}
              <rect x="120" y="305" width="120" height="55" rx="4" fill="var(--bg-elevated)" stroke="var(--accent)" strokeWidth="1" strokeDasharray="3 3" />
              <text x="180" y="328" fill="var(--accent)" fontSize="9" fontFamily="var(--font-mono)" textAnchor="middle" fontWeight="bold">ONGOING LOOP</text>
              <text x="180" y="343" fill="var(--text-secondary)" fontSize="8" fontFamily="var(--font-mono)" textAnchor="middle">24/7 OPERATIONS</text>

              {/* Paths */}
              <path className={styles.svgPath} d="M 160 67 H 200" stroke="var(--accent)" strokeWidth="1.5" />
              <path className={styles.svgPath} d="M 260 95 V 180" stroke="var(--text-secondary)" strokeWidth="1.5" />
              <path className={styles.svgPath} d="M 200 207 H 160" stroke="var(--text-secondary)" strokeWidth="1.5" />
              <path className={styles.svgPath} d="M 100 235 V 305" stroke="var(--text-secondary)" strokeWidth="1.5" />
              <path className={styles.svgPath} d="M 100 95 V 180" stroke="var(--text-secondary)" strokeWidth="1.5" strokeDasharray="4 3" />
              <path className={styles.svgPath} d="M 240 305 V 255 H 260 V 235" stroke="var(--accent)" strokeWidth="1" strokeDasharray="3 3" />

              {/* Arrow heads */}
              <polygon points="200,64 194,60 194,68" fill="var(--accent)" />
              <polygon points="257,180 253,174 261,174" fill="var(--text-secondary)" />
              <polygon points="160,204 166,200 166,208" fill="var(--text-secondary)" />
              <polygon points="97,305 93,299 101,299" fill="var(--text-secondary)" />

              {/* Decorative engineering marks */}
              <line x1="20" y1="20" x2="35" y2="20" stroke="var(--accent)" strokeWidth="2" />
              <line x1="20" y1="20" x2="20" y2="35" stroke="var(--accent)" strokeWidth="2" />
              
              <line x1="340" y1="390" x2="325" y2="390" stroke="var(--accent)" strokeWidth="2" />
              <line x1="340" y1="390" x2="340" y2="375" stroke="var(--accent)" strokeWidth="2" />
            </svg>
          </div>

        </div>

        {/* Dynamic CTA at the bottom */}
        <div style={{ borderTop: '1px solid var(--border-grid)', padding: '6rem 0 2rem', marginTop: '6rem', display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', alignItems: 'center' }}>
          <div>
            <span className="mono-label" style={{ marginBottom: '1.5rem' }}>[ DISCOVERY CALL : CLAIM YOUR DEMO ]</span>
            <h3 style={{ fontSize: '2rem', fontFamily: 'var(--font-display)', textTransform: 'uppercase', fontWeight: 800 }}>Ready to Build the System That Prints Time and Leverage?</h3>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginTop: '1rem', lineHeight: '1.6' }}>
              Stop manually prompting and start deploying autonomous operational infrastructure today.
            </p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Link href="/contact" className="btn btn-primary" style={{ padding: '1rem 2.5rem' }}>
              Book Your Discovery Call &amp; Claim Your Demo
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
