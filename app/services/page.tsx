import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Custom AI agent orchestration, deterministic transaction workflows, and structured RAG databases.',
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

export default function ServicesPage() {
  return (
    <section className={styles.section} aria-labelledby="services-heading">
      <div className="container">
        
        {/* Intro Header */}
        <div className={styles.intro}>
          <span className="mono-label">[ CATALOGUE : CAPABILITIES ]</span>
          <h1 className={styles.title} id="services-heading">System Engineering</h1>
          <p className={styles.description}>
            We engineer bespoke, secure, and reliable AI systems tailored specifically for your proprietary workflows and business goals.
          </p>
        </div>

        {/* Alternate Row Lists */}
        <div className={styles.grid}>
          
          {/* Row 1: AI Agents */}
          <div className={styles.serviceRow} id="agents">
            <div className={styles.textSide}>
              <span className="mono-label mono-label-muted">[ CLASSIFICATION: AUTONOMOUS AGENTS ]</span>
              <h2 className={styles.rowTitle}>Autonomous Agent Systems</h2>
              <p className={styles.rowText}>
                We build goal-directed agents that run autonomously to manage operational workflows. Equipped with custom toolsets, memory management, and feedback loops, these agents can execute complex business routines with safety rails.
              </p>
              <div className={styles.specs}>
                <span className={styles.specBadge}>Multi-Agent Frameworks</span>
                <span className={styles.specBadge}>Self-Reflective Loops</span>
                <span className={styles.specBadge}>Human-in-the-Loop Safeguards</span>
              </div>
            </div>
            <MatteCubeDiagram />
          </div>

          {/* Row 2: Workflow Automation */}
          <div className={`${styles.serviceRow} ${styles.serviceRowReverse}`} id="workflows">
            <div className={styles.textSide}>
              <span className="mono-label mono-label-muted">[ CLASSIFICATION: TRANSACTION WORKFLOWS ]</span>
              <h2 className={styles.rowTitle}>Intelligent Workflows</h2>
              <p className={styles.rowText}>
                Eliminate routine manual operations by introducing robust logic chains that bridge your database, CRM, file-storage, and communications tools. Built with error logs, retries, and transaction monitoring.
              </p>
              <div className={styles.specs}>
                <span className={styles.specBadge}>State-Machine Logic</span>
                <span className={styles.specBadge}>API Integrations</span>
                <span className={styles.specBadge}>Real-time Event Triggers</span>
              </div>
            </div>
            <MatteSphereDiagram />
          </div>

          {/* Row 3: RAG & LLM Integration */}
          <div className={styles.serviceRow} id="rag">
            <div className={styles.textSide}>
              <span className="mono-label mono-label-muted">[ CLASSIFICATION: RETRIEVAL INDEX ]</span>
              <h2 className={styles.rowTitle}>Knowledge retrieval</h2>
              <p className={styles.rowText}>
                Equip your LLMs with direct, secure access to your internal documentation. We construct robust retrieval pipelines featuring semantic vector search, intelligent chunking methods, and hybrid filters to avoid hallucinations.
              </p>
              <div className={styles.specs}>
                <span className={styles.specBadge}>Vector Database Setup</span>
                <span className={styles.specBadge}>Metadata Filtering</span>
                <span className={styles.specBadge}>Context Re-ranking</span>
              </div>
            </div>
            <MatteCylinderDiagram />
          </div>

        </div>

        {/* Global Bottom CTA */}
        <div style={{ borderTop: '1px solid var(--border-grid)', padding: '6rem 0 2rem', marginTop: '6rem', display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', alignItems: 'center' }}>
          <div>
            <span className="mono-label" style={{ marginBottom: '1.5rem' }}>[ SCOPING BRIEFING ]</span>
            <h3 style={{ fontSize: '2rem', fontFamily: 'var(--font-display)', textTransform: 'uppercase', fontWeight: 800 }}>Ready to validate your system rules?</h3>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Link href="/contact" className="btn btn-primary" style={{ padding: '1rem 2.5rem' }}>
              Request technical scoping
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
