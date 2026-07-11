import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';
import SpotlightBg from '@/components/SpotlightBg/SpotlightBg';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Axon AI — our mission, our values, and how we build deterministic AI systems.',
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
          <h1 className={styles.title} id="about-heading">Operational Engineering</h1>
          <p className={styles.description}>
            Axon AI is a technical engineering agency. We reject AI hype in favor of custom-engineered, robust solutions that drive bottom-line efficiency.
          </p>
        </div>

        {/* Split layout */}
        <div className={styles.layout}>
          
          {/* Story side */}
          <div className={styles.story}>
            <h2 className={styles.storyTitle}>Our Approach</h2>
            <p className={styles.storyText}>
              Too many businesses build fragile, wrapper-based AI systems that fail under real-world edge cases. We believe the future of enterprise software is custom-built autonomous workflows, backed by strong state machines, offline database storage, and secure pipelines.
            </p>
            <p className={styles.storyText}>
              Our engineering team handles the entire lifecycle: from tech-stack audits and pipeline mockups, to setting up vector stores, tuning model instructions, and orchestrating Docker containers.
            </p>
          </div>

          {/* Values side */}
          <div className={styles.values}>
            
            <div className={`${styles.valueCard} card`}>
              <h3 className={styles.valueTitle}>
                <span>Security Isolation</span>
              </h3>
              <p className={styles.valueText}>
                We build in isolation. Your corporate data never trains public models. We specialize in air-gapped deployments and GDPR/SOC 2 compliance.
              </p>
            </div>

            <div className={`${styles.valueCard} card`}>
              <h3 className={styles.valueTitle}>
                <span>Deterministic Logic</span>
              </h3>
              <p className={styles.valueText}>
                We wrap generative language models in strict state machines and routing graphs, ensuring system operations remain predictable and consistent.
              </p>
            </div>

            <div className={`${styles.valueCard} card`}>
              <h3 className={styles.valueTitle}>
                <span>Compounding Assets</span>
              </h3>
              <p className={styles.valueText}>
                Every automated system we build is fully owned by you, serving as proprietary operational assets that compound value over time.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
    </>
  );
}
