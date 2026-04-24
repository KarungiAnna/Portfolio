import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './cv.module.css';
import sharedStyles from '@/components/CVShared.module.css';
import CVHeader from '@/components/CVHeader/CVHeader';
import CVExperienceItem from '@/components/CVExperienceItem/CVExperienceItem';
import PrintButton from '@/components/PrintButton/PrintButton';
import { 
  getSummary, 
  getAllExperiences, 
  getAllEducation, 
  getAllSkills, 
  getAllStrengths, 
  getAllCertifications, 
  getAllReferees 
} from '@/db/queries';

export const metadata: Metadata = {
  title: 'Karungi Anna — Curriculum Vitae',
  description: 'The CV of Karungi Anna',
};

export default async function CVPage() {
  const [
    summary, 
    experiences, 
    education, 
    skills, 
    strengths, 
    certifications, 
    referees
  ] = await Promise.all([
    getSummary(),
    getAllExperiences(),
    getAllEducation(),
    getAllSkills(),
    getAllStrengths(),
    getAllCertifications(),
    getAllReferees(),
  ]);

  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    const cat = skill.category || 'Other';
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <div className={styles.cvWrapper}>
      <div className={styles.cvActions}>
        <PrintButton />
        <Link href="/" className={styles.actionBtnSecondary}>
          ← Back to Portfolio
        </Link>
      </div>

      <div className={styles.cvPage}>
        <CVHeader />

        <div className={styles.cvBody}>
          
          {/* Professional Summary */}
          {summary?.content && (
            <section className={sharedStyles.cvSection}>
              <div className={sharedStyles.cvSectionHead}>
                <span className={sharedStyles.cvSectionOrnament}>✦</span>
                <h2 className={sharedStyles.cvSectionTitle}>Professional Summary</h2>
                <div className={sharedStyles.cvSectionLine}></div>
              </div>
              <div className={styles.summaryBlock}>
                <p className={styles.summaryText}>{summary.content}</p>
              </div>
            </section>
          )}

          {/* Work Experience */}
          {experiences.length > 0 && (
            <section className={sharedStyles.cvSection}>
              <div className={sharedStyles.cvSectionHead}>
                <span className={sharedStyles.cvSectionOrnament}>✦</span>
                <h2 className={sharedStyles.cvSectionTitle}>Work Experience</h2>
                <div className={sharedStyles.cvSectionLine}></div>
              </div>
              <div className={styles.expList}>
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
            </section>
          )}

          {/* Skills & Technologies */}
          {skills.length > 0 && (
            <section className={sharedStyles.cvSection}>
              <div className={sharedStyles.cvSectionHead}>
                <span className={sharedStyles.cvSectionOrnament}>✦</span>
                <h2 className={sharedStyles.cvSectionTitle}>Skills & Technologies</h2>
                <div className={sharedStyles.cvSectionLine}></div>
              </div>
              <div className={styles.skillRows}>
                {Object.entries(groupedSkills).map(([category, items]) => (
                  <div key={category} className={styles.skillRow}>
                    <span className={styles.skillRowLabel}>{category}</span>
                    <span className={styles.skillRowItems}>
                      {items.map(s => s.name).join(' · ')}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Education */}
          {education.length > 0 && (
            <section className={sharedStyles.cvSection}>
              <div className={sharedStyles.cvSectionHead}>
                <span className={sharedStyles.cvSectionOrnament}>✦</span>
                <h2 className={sharedStyles.cvSectionTitle}>Education</h2>
                <div className={sharedStyles.cvSectionLine}></div>
              </div>
              <div className={styles.eduList}>
                {education.map(edu => (
                  <div key={edu.id} className={styles.eduItem}>
                    <div className={styles.eduDegree}>{edu.degree}</div>
                    <div className={styles.eduSchool}>{edu.institution}</div>
                    <div className={styles.eduYear}>{edu.year}</div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Certifications */}
          {certifications.length > 0 && (
            <section className={sharedStyles.cvSection}>
              <div className={sharedStyles.cvSectionHead}>
                <span className={sharedStyles.cvSectionOrnament}>✦</span>
                <h2 className={sharedStyles.cvSectionTitle}>Certifications</h2>
                <div className={sharedStyles.cvSectionLine}></div>
              </div>
              <div className={styles.eduList}>
                {certifications.map(cert => (
                  <div key={cert.id} className={styles.eduItem}>
                    <div className={styles.eduDegree}>{cert.name}</div>
                    <div className={styles.eduSchool}>{cert.issuer}</div>
                    <div className={styles.eduYear}>{cert.year}</div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Strengths */}
          {strengths.length > 0 && (
            <section className={sharedStyles.cvSection}>
              <div className={sharedStyles.cvSectionHead}>
                <span className={sharedStyles.cvSectionOrnament}>✦</span>
                <h2 className={sharedStyles.cvSectionTitle}>Strengths</h2>
                <div className={sharedStyles.cvSectionLine}></div>
              </div>
              <div className={styles.strengthsList}>
                {strengths.map(s => (
                  <div key={s.id} className={styles.strengthItem}>
                    <p className={styles.strengthName}>{s.title}</p>
                    <p className={styles.strengthProof}>{s.proof}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Referees */}
          {referees.length > 0 && (
            <section className={sharedStyles.cvSection}>
              <div className={sharedStyles.cvSectionHead}>
                <span className={sharedStyles.cvSectionOrnament}>✦</span>
                <h2 className={sharedStyles.cvSectionTitle}>Referees</h2>
                <div className={sharedStyles.cvSectionLine}></div>
              </div>
              <div className={styles.refGrid}>
                {referees.map(ref => (
                  <div key={ref.id} className={styles.refCard}>
                    <div className={styles.refName}>{ref.name}</div>
                    <div className={styles.refTitle}>{ref.title}</div>
                    <div className={styles.refOrg}>{ref.company}</div>
                    <div className={styles.refContacts}>
                      <div className={styles.refContact}>✉ <a href={`mailto:${ref.email}`}>{ref.email}</a></div>
                      {ref.phone && <div className={styles.refContact}>☏ {ref.phone}</div>}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

        </div>

        <footer className={styles.cvFooter}>
          <p>Curriculum Vitae — 2026</p>
          <span className={styles.footerName}>Karungi Anna</span>
          <p>annakarungi15@gmail.com · karungi-anna.vercel.app</p>
        </footer>
      </div>
    </div>
  );
}
