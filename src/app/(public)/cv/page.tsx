import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './cv.module.css';
import sharedStyles from '@/components/CVShared.module.css';
import CVHeader from '@/components/CVHeader/CVHeader';
import CVSidebar from '@/components/CVSidebar/CVSidebar';
import CVExperienceItem from '@/components/CVExperienceItem/CVExperienceItem';
import { getSummary, getAllExperiences, getAllEducation, getAllSkills, getAllStrengths, getAllCertifications, getAllReferees } from '@/db/queries';

export const metadata: Metadata = {
  title: 'Karungi Anna — Curriculum Vitae',
  description: 'The CV of Karungi Anna',
  alternates: {
    types: {
      'application/pdf': '/api/cv/pdf',
    },
  },
};

export default async function CVPage() {
  const [summary, experiences, education, skills, strengths, certifications, referees] = await Promise.all([
    getSummary(),
    getAllExperiences(),
    getAllEducation(),
    getAllSkills(),
    getAllStrengths(),
    getAllCertifications(),
    getAllReferees(),
  ]);

  return (
    <div className={styles.cvWrapper}>
      <div className={styles.cvActions}>
        <a href="/api/cv/pdf" download="karungi-anna-cv.pdf" className={styles.actionBtn}>
          ⎙ Download PDF
        </a>
        <Link href="/" className={styles.actionBtnSecondary}>
          ← Back to Portfolio
        </Link>
      </div>

      <div className={styles.cvPage}>
        <CVHeader />

        <div className={styles.cvBody}>
          <CVSidebar
            skills={skills}
            education={education}
            certifications={certifications}
            strengths={strengths}
          />

          <main className={styles.cvMain}>
            {summary?.content && (
              <div className={sharedStyles.cvSection}>
                <h3 className={sharedStyles.cvSectionTitle}>Professional Summary</h3>
                <p className={styles.summaryText}>{summary.content}</p>
              </div>
            )}

            {experiences.length > 0 && (
              <>
                {summary?.content && <div className={sharedStyles.cvDivider}><span className={sharedStyles.cvDividerOrnament}>✦</span></div>}
                <div className={sharedStyles.cvSection}>
                  <h3 className={sharedStyles.cvSectionTitle}>Work Experience</h3>
                  <div style={{ paddingLeft: '2rem', position: 'relative' }}>
                    {experiences.map(exp => (
                      <CVExperienceItem
                        key={exp.id}
                        role={exp.role}
                        duration={exp.duration}
                        companyName={exp.companyName}
                        companyUrl={exp.companyUrl ?? undefined}
                        companyDescription={exp.companyDescription}
                        bullets={exp.bullets}
                      />
                    ))}
                  </div>
                </div>
              </>
            )}

            {referees.length > 0 && (
              <>
                <div className={sharedStyles.cvDivider}><span className={sharedStyles.cvDividerOrnament}>✦</span></div>
                <div className={sharedStyles.cvSection}>
                  <h3 className={sharedStyles.cvSectionTitle}>Referees</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1.2rem' }}>
                    {referees.map(ref => (
                      <div key={ref.id} style={{ padding: '1rem', border: '1px solid var(--border)', background: 'var(--cream-2)' }}>
                        <div style={{ fontFamily: 'var(--ff-display)', fontWeight: 600, fontSize: '0.95rem', color: 'var(--ink)', marginBottom: '0.2rem' }}>{ref.name}</div>
                        <div style={{ fontSize: '0.78rem', color: 'var(--muted)', marginBottom: '0.1rem' }}>{ref.title}</div>
                        <div style={{ fontSize: '0.78rem', color: 'var(--muted)', marginBottom: '0.5rem' }}>{ref.company}</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--ink)' }}>{ref.email}</div>
                        {ref.phone && <div style={{ fontSize: '0.75rem', color: 'var(--ink)' }}>{ref.phone}</div>}
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </main>
        </div>

        <footer className={styles.cvFooter}>
          <p>© 2026 Karungi Anna. All rights reserved.</p>
          <span className={styles.footerName}>Karungi Anna</span>
          <p>Designed &amp; Built with ♥</p>
        </footer>
      </div>
    </div>
  );
}
