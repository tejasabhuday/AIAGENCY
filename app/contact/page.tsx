'use client';
import { useState } from 'react';
import styles from './page.module.css';

const COMMITMENTS = [
  'NDA-ready technical consultation',
  '48-hour scoping roadmap proposal',
  'Zero cost initial tech-stack evaluation',
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', details: '', budget: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.details) {
      alert('Please fill out all required fields.');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        const data = await res.json();
        alert(`Error: ${data.error || 'Failed to submit intake form'}`);
      }
    } catch (err) {
      console.error(err);
      alert('A network error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.section} aria-labelledby="contact-heading">
      <div className="container">
        
        {/* Page header */}
        <div className={styles.intro}>
          <span className="mono-label">[ INITIATE : SCOPING ]</span>
          <h1 className={styles.title} id="contact-heading">Project Intake</h1>
          <p className={styles.description}>
            Ready to design your custom AI workflow or agent? Submit your details below to schedule a scoping session.
          </p>
        </div>

        <div className={styles.grid}>
          
          {/* Details column */}
          <div className={styles.details}>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>DIRECT CHANNEL</span>
              <span className={styles.infoText}>partner@axonai.agency</span>
            </div>
            
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>OFFICE</span>
              <span className={styles.infoText}>Delhi, India</span>
            </div>

            <div className={styles.commitments}>
              {COMMITMENTS.map((c) => (
                <div key={c} className={styles.commitment}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>{c}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form column */}
          <div className={styles.formWrap}>
            <div className={`${styles.form} card`}>
              {!submitted ? (
                <form onSubmit={handleSubmit} noValidate>
                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="name">Full Name *</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      placeholder="Sarah Chen"
                      className={styles.input}
                      value={form.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="email">Work Email *</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      placeholder="sarah@enterprise.com"
                      className={styles.input}
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="budget">Estimated Budget</label>
                    <input
                      id="budget"
                      type="text"
                      name="budget"
                      placeholder="e.g. $5,000 – $20,000 or open to discuss"
                      className={styles.input}
                      value={form.budget}
                      onChange={handleChange}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="details">Project Requirements *</label>
                    <textarea
                      id="details"
                      name="details"
                      required
                      placeholder="Describe the processes you want to automate, models you want to deploy, or current pain points..."
                      className={styles.textarea}
                      value={form.details}
                      onChange={handleChange}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className={`${styles.submitBtn} btn btn-primary`}
                  >
                    {loading ? (
                      <span>Submitting Scoping...</span>
                    ) : (
                      <>
                        <span>Submit Intake Form</span>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className={styles.success} role="status">
                  <svg width="36" height="36" viewBox="0 0 48 48" fill="none" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="24" cy="24" r="22" />
                    <polyline points="16 24 22 30 32 18" />
                  </svg>
                  <h2 className={styles.successTitle}>Intake Completed</h2>
                  <p className={styles.successText}>
                    Our engineering team has received your details. We will contact you within 48 hours to schedule a scoping call.
                  </p>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
