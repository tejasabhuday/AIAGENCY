import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';
import SpotlightBg from '@/components/SpotlightBg/SpotlightBg';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Engineering rigor meets agentic intelligence — a specialized AI product studio built on advanced software engineering depth paired with native generative AI fluency.',
};

export default function AboutPage() {
  return (
    <>
      <SpotlightBg />
      <section className={styles.section} aria-labelledby="about-heading">
      <div className="container">
        
        {/* Intro */}
        <div className={styles.intro}>
          <span className="mono-label">[ PHILOSOPHY : MISSION ]</span>
          <h1 className={styles.title} id="about-heading">Engineering Rigor Meets Agentic Intelligence</h1>
          <p className={styles.description}>
            We are a specialized AI product studio built on a rare technical foundation: advanced software engineering depth paired with native generative AI fluency.
          </p>
        </div>

        {/* Split layout */}
        <div className={styles.layout}>
          
          {/* Story side */}
          <div className={styles.story}>
            <h2 className={styles.storyTitle}>Why We Built This Studio</h2>
            <p className={styles.storyText}>
              The digital landscape is flooded with generic agencies selling basic chat prompts and fragile no-code wrappers that buckle under real-world enterprise demands. At the same time, traditional software development shops quote multi-month timelines and bloated budgets just to integrate basic artificial intelligence. We recognized that modern businesses don't need expensive experiments—they need reliable, autonomous infrastructure that prints operational leverage from day one.
            </p>
            <p className={styles.storyText}>
              We bridge the gap between high-level AI research and production-grade software engineering. By combining core SDE architecture with cutting-edge multi-agent orchestration, we build autonomous systems that work silently in the background while your team sleeps. We wire intelligence directly into your databases, CRMs, and communication channels, transforming unstructured data and manual tasks into streamlined, self-executing workflows.
            </p>
          </div>

          {/* Values side */}
          <div className={styles.values}>
            
            <div className={`${styles.valueCard} card`}>
              <h3 className={styles.valueTitle}>
                <span>Speed to Production</span>
              </h3>
              <p className={styles.valueText}>
                Our technical stack allows us to build custom RAG backends, complex vector databases, and multi-agent workflows in a matter of days—delivering in fractions of the time required by traditional dev shops.
              </p>
            </div>

            <div className={`${styles.valueCard} card`}>
              <h3 className={styles.valueTitle}>
                <span>Value-Based Alignment</span>
              </h3>
              <p className={styles.valueText}>
                We reject billable hours. We price our engagements strictly around the tangible business value, cost reductions, and hundreds of operational hours saved for your organization.
              </p>
            </div>

            <div className={`${styles.valueCard} card`}>
              <h3 className={styles.valueTitle}>
                <span>Architectural Ownership</span>
              </h3>
              <p className={styles.valueText}>
                We don't just leave you with a script. We build scalable, secure, and maintainable systems deployed on robust cloud infrastructure, backed by continuous monitoring and iterative improvements.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
    </>
  );
}
