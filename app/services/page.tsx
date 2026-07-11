import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Specialized AI architecture and production services — from rapid workflow automations to custom multi-agent deployments.',
};

// Matte 3D Cube diagram using clean SVG styling with Platinum accent
const MatteCubeDiagram = () => (
  <div className={styles.visualSide}>
    <svg className={styles.matteDiagram} width="320" height="220" viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Shadow */}
      <ellipse cx="160" cy="180" rx="70" ry="15" fill="#000000" fillOpacity="0.4" />
      
      {/* Matte black isometric cube faces with platinum edge light */}
      {/* Top face */}
      <path className={styles.cubeTop} d="M160 30 L230 65 L160 100 L90 65 Z" fill="#202023" stroke="#E5E7EB" strokeWidth="1.2" />
      {/* Left face */}
      <path className={styles.cubeLeft} d="M90 65 L160 100 L160 170 L90 135 Z" fill="#141416" />
      {/* Right face */}
      <path className={styles.cubeRight} d="M160 100 L230 65 L230 135 L160 170 Z" fill="#0D0D0F" />
      
      {/* Edge outline highlighting isometric structural rules */}
      <path className={styles.cubeLeft} d="M90 65 L160 100" stroke="var(--border-card)" strokeWidth="1.5" />
      <path className={styles.cubeRight} d="M160 100 L230 65" stroke="var(--border-card)" strokeWidth="1.5" />
      <path className={styles.cubeRight} d="M160 100 V170" stroke="var(--border-card)" strokeWidth="1.5" />
    </svg>
  </div>
);

// Matte 3D Sphere/Rings diagram
const MatteSphereDiagram = () => (
  <div className={styles.visualSide}>
    <svg className={styles.matteDiagram} width="320" height="220" viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <ellipse cx="160" cy="180" rx="60" ry="12" fill="#000000" fillOpacity="0.4" />
      {/* 3D Sphere */}
      <circle className={styles.sphereCore} cx="160" cy="100" r="50" fill="url(#sphereFill)" />
      <circle className={styles.sphereCore} cx="160" cy="100" r="50" stroke="#E5E7EB" strokeWidth="1" opacity="0.8" />
      {/* Matte ring slicing through */}
      <ellipse className={styles.sphereRing} cx="160" cy="115" rx="70" ry="18" stroke="var(--text-secondary)" strokeWidth="1.5" opacity="0.5" transform-origin="160 115" />
      <defs>
        <radialGradient id="sphereFill" cx="140" cy="80" r="60" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#252528" />
          <stop offset="100%" stopColor="#0B0B0D" />
        </radialGradient>
      </defs>
    </svg>
  </div>
);

// Matte Cylinder diagram
const MatteCylinderDiagram = () => (
  <div className={styles.visualSide}>
    <svg className={styles.matteDiagram} width="320" height="220" viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <ellipse cx="160" cy="180" rx="55" ry="10" fill="#000000" fillOpacity="0.4" />
      {/* Bottom Face */}
      <path className={styles.cylinderBody} d="M110 130 C110 145, 210 145, 210 130 L210 60 C210 75, 110 75, 110 60 Z" fill="url(#cylinderFill)" />
      {/* Top Face */}
      <ellipse className={styles.cylinderTop} cx="160" cy="60" rx="50" ry="15" fill="#202023" stroke="#E5E7EB" strokeWidth="1" />
      {/* Lateral borders */}
      <path className={styles.cylinderBody} d="M110 60 V130" stroke="var(--border-card)" strokeWidth="1.5" />
      <path className={styles.cylinderBody} d="M210 60 V130" stroke="var(--border-card)" strokeWidth="1.5" />
      <defs>
        <linearGradient id="cylinderFill" x1="110" y1="60" x2="210" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#141416" />
          <stop offset="0.5" stopColor="#1C1C1F" />
          <stop offset="1" stopColor="#08080A" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

// Matte diamond/prism diagram for 4th service
const MattePrismDiagram = () => (
  <div className={styles.visualSide}>
    <svg className={styles.matteDiagram} width="320" height="220" viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <ellipse cx="160" cy="185" rx="65" ry="12" fill="#000000" fillOpacity="0.4" />
      {/* Diamond shape */}
      <path className={styles.prismFace} d="M160 30 L220 105 L160 180 L100 105 Z" fill="url(#prismFill)" stroke="#E5E7EB" strokeWidth="1.2" />
      <path className={styles.prismFace} d="M160 30 L220 105" stroke="var(--border-card)" strokeWidth="1.5" />
      <path className={styles.prismFace} d="M160 30 L100 105" stroke="var(--border-card)" strokeWidth="1.5" />
      <path className={styles.prismFace} d="M160 105 L160 30" stroke="rgba(229,231,235,0.2)" strokeWidth="1" strokeDasharray="3 3" />
      <defs>
        <linearGradient id="prismFill" x1="100" y1="30" x2="220" y2="180" gradientUnits="userSpaceOnUse">
          <stop stopColor="#252528" />
          <stop offset="0.5" stopColor="#141416" />
          <stop offset="1" stopColor="#08080A" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

export default function ServicesPage() {
  return (
    <section className={styles.section} aria-labelledby="services-heading">
      <div className="container">
        
        {/* Intro Header */}
        <div className={styles.intro}>
          <span className="mono-label">[ CATALOGUE : CAPABILITIES ]</span>
          <h1 className={styles.title} id="services-heading">Specialized AI Architecture &amp; Production Services</h1>
          <p className={styles.description}>
            From rapid workflow automations to custom multi-agent product studios, we price and deliver based on operational value and hours saved—not billable hours.
          </p>
        </div>

        {/* Alternate Row Lists */}
        <div className={styles.grid}>
          
          {/* Row 1: AI Workflow Automation */}
          <div className={styles.serviceRow} id="agents">
            <div className={styles.textSide}>
              <span className="mono-label mono-label-muted">[ SERVICE 01 : WORKFLOW AUTOMATION ]</span>
              <h2 className={styles.rowTitle}>AI Workflow Automation</h2>
              <p className={styles.rowText}>
                We construct custom automated pipelines that handle repetitive B2B operations without human oversight. Solutions include automated outbound lead research, real-time CRM enrichment, automated data pipelines, and intelligent customer routing systems. We connect reasoning engines to your existing stack via webhooks, APIs, and robust workflow orchestration tools.
              </p>
              <div className={styles.specs}>
                <span className={styles.specBadge}>Best Fit: Ops-Heavy Teams</span>
                <span className={styles.specBadge}>Scaling SMBs</span>
                <span className={styles.specBadge}>B2B SaaS Organizations</span>
              </div>
              <p style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginTop: '1.5rem', letterSpacing: '0.05em' }}>
                DELIVERY: Shipped and deployed in 1–3 weeks, backed by ongoing maintenance retainers.
              </p>
            </div>
            <MatteCubeDiagram />
          </div>

          {/* Row 2: Custom AI Agent Development */}
          <div className={`${styles.serviceRow} ${styles.serviceRowReverse}`} id="workflows">
            <div className={styles.textSide}>
              <span className="mono-label mono-label-muted">[ SERVICE 02 : AGENT DEVELOPMENT ]</span>
              <h2 className={styles.rowTitle}>Custom AI Agent Development Studio</h2>
              <p className={styles.rowText}>
                We engineer specialized, autonomous AI agents tailored to execute complex professional roles within your organization. Deliverables include autonomous sales outreach agents, tier-1 customer support bots, and internal knowledge assistants securely wired to your proprietary data. Built using custom-coded multi-agent orchestration and production RAG databases to ensure absolute factual accuracy and data privacy.
              </p>
              <div className={styles.specs}>
                <span className={styles.specBadge}>Best Fit: Mid-Market Companies</span>
                <span className={styles.specBadge}>Funded Startups</span>
                <span className={styles.specBadge}>Enterprise Teams</span>
              </div>
              <p style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginTop: '1.5rem', letterSpacing: '0.05em' }}>
                DELIVERY: Delivered in 4–8 weeks as a comprehensive, productized deployment.
              </p>
            </div>
            <MatteSphereDiagram />
          </div>

          {/* Row 3: AI Transformation Consulting */}
          <div className={styles.serviceRow} id="rag">
            <div className={styles.textSide}>
              <span className="mono-label mono-label-muted">[ SERVICE 03 : TRANSFORMATION CONSULTING ]</span>
              <h2 className={styles.rowTitle}>AI Transformation &amp; Readiness Consulting</h2>
              <p className={styles.rowText}>
                We act as your fractional AI leadership, conducting comprehensive audits of your current operational workflows and software stack. We identify high-ROI automation opportunities, map internal processes, and deliver an actionable technical roadmap. Our consulting frameworks provide executive clarity and rigorous ROI projections before any engineering work begins.
              </p>
              <div className={styles.specs}>
                <span className={styles.specBadge}>Best Fit: Traditional Businesses</span>
                <span className={styles.specBadge}>Executive Leadership</span>
                <span className={styles.specBadge}>CMOs</span>
              </div>
              <p style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginTop: '1.5rem', letterSpacing: '0.05em' }}>
                DELIVERY: High-leverage 2–4 week intensive advisory engagements.
              </p>
            </div>
            <MatteCylinderDiagram />
          </div>

          {/* Row 4: Productized Industry Solutions */}
          <div className={`${styles.serviceRow} ${styles.serviceRowReverse}`} id="productized">
            <div className={styles.textSide}>
              <span className="mono-label mono-label-muted">[ SERVICE 04 : PRODUCTIZED SOLUTIONS ]</span>
              <h2 className={styles.rowTitle}>Productized Industry Solutions</h2>
              <p className={styles.rowText}>
                Fixed-scope, fixed-price standardized AI deployments requiring zero lengthy scoping calls or custom architecture delays. Examples include automated weekly competitor intelligence reporting, standardized lead qualification engines, and automated customer intake desks. Maximum operational leverage delivered as a predictable, plug-and-play monthly service.
              </p>
              <div className={styles.specs}>
                <span className={styles.specBadge}>Best Fit: Niche Businesses</span>
                <span className={styles.specBadge}>Localized Enterprises</span>
                <span className={styles.specBadge}>Fixed-Price Deployments</span>
              </div>
              <p style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginTop: '1.5rem', letterSpacing: '0.05em' }}>
                DELIVERY: Predictable, plug-and-play monthly service.
              </p>
            </div>
            <MattePrismDiagram />
          </div>

        </div>

        {/* Global Bottom CTA */}
        <div style={{ borderTop: '1px solid var(--border-grid)', padding: '6rem 0 2rem', marginTop: '6rem', display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', alignItems: 'center' }}>
          <div>
            <span className="mono-label" style={{ marginBottom: '1.5rem' }}>[ DISCOVERY CALL : CLAIM YOUR DEMO ]</span>
            <h3 style={{ fontSize: '2rem', fontFamily: 'var(--font-display)', textTransform: 'uppercase', fontWeight: 800 }}>Ready to Build the System That Prints Time?</h3>
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
