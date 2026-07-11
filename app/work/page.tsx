import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Our Work',
  description: 'See how Axon AI builds high-impact custom AI solutions and agents that drive enterprise efficiency.',
};

const PROJECTS = [
  {
    title: 'Autonomous Claims Agent',
    category: 'AI Agents',
    description: 'Developed an end-to-end agentic workflow for a major fintech client that reads claim attachments, runs fraud validation, and automatically structures database entries, cutting claim process time from hours to seconds.',
    metrics: [
      { value: '94%', label: 'AUTOMATION RATE' },
      { value: '12s', label: 'PROCESSING TIME', isSecond: true },
    ],
  },
  {
    title: 'Enterprise Document Intelligence',
    category: 'RAG Systems',
    description: 'Architected a multi-vector retrieval system linked to 40,000+ internal engineering sheets for a hardware logistics firm. Features hybrid semantic-keyword ranking and document-level metadata filter isolation.',
    metrics: [
      { value: '0%', label: 'HALLUCINATION RATE' },
      { value: '98%', label: 'ACCURACY SLA', isSecond: true },
    ],
  },
  {
    title: 'Customer Operations Router',
    category: 'Workflow Automation',
    description: 'Designed a dynamic routing workflow triggered by real-time Webhook events. Classifies incoming requests with fine-tuned instruction models, updates active CRM entries, and alerts regional Slack channels.',
    metrics: [
      { value: '88%', label: 'SUPPORT SAVINGS' },
      { value: '25k+', label: 'DAILY REQUESTS', isSecond: true },
    ],
  },
  {
    title: 'Regulatory Audit Pipeline',
    category: 'Data Engineering',
    description: 'Built a secure, containerized data validation workflow for a healthcare client. Automatically indexes incoming clinical documents, performs compliance screening via secure offline models, and flags irregularities.',
    metrics: [
      { value: '100%', label: 'COMPLIANT RATE' },
      { value: '10x', label: 'AUDIT SPEEDUP', isSecond: true },
    ],
  },
];

export default function WorkPage() {
  return (
    <section className={styles.section} aria-labelledby="work-heading">
      <div className="container">
        
        {/* Intro */}
        <div className={styles.intro}>
          <span className="mono-label">[ CLIENTS : IMPLEMENTATIONS ]</span>
          <h1 className={styles.title} id="work-heading">System Implementations</h1>
          <p className={styles.description}>
            We focus on shipping production code that solves real business problems. Here is a selection of systems we have deployed.
          </p>
        </div>

        {/* Portfolio grid */}
        <div className={styles.grid}>
          {PROJECTS.map((project) => (
            <article key={project.title} className={`${styles.projectCard} card`}>
              <div className={styles.cardHeader}>
                <span className={styles.category}>{project.category}</span>
              </div>
              <h2 className={styles.projectTitle}>{project.title}</h2>
              <p className={styles.projectDesc}>{project.description}</p>
              
              <div className={styles.metrics}>
                {project.metrics.map((m) => (
                  <div key={m.label} className={styles.metricItem}>
                    <span className={`${styles.metricValue} ${m.isSecond ? styles.metricValueSecond : ''}`}>
                      {m.value}
                    </span>
                    <span className={styles.metricLabel}>{m.label}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div style={{ borderTop: '1px solid var(--border-grid)', padding: '6rem 0 2rem', marginTop: '6rem', display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', alignItems: 'center' }}>
          <div>
            <span className="mono-label" style={{ marginBottom: '1.5rem' }}>[ SCOPING BRIEFING ]</span>
            <h3 style={{ fontSize: '2rem', fontFamily: 'var(--font-display)', textTransform: 'uppercase', fontWeight: 800 }}>Ready to configure your system?</h3>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Link href="/contact" className="btn btn-primary" style={{ padding: '1rem 2.5rem' }}>
              Contact our engineering leads
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
