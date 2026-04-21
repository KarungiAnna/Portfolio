import styles from './CVSidebar.module.css';
import sharedStyles from '../CVShared.module.css';

type Skill = { id: number; name: string; category: string | null };
type Education = { id: number; degree: string; institution: string; year: string; description: string | null };
type Certification = { id: number; name: string; issuer: string; year: string; url: string | null };
type Strength = { id: number; title: string; proof: string };

type Props = {
  skills: Skill[];
  education: Education[];
  certifications: Certification[];
  strengths: Strength[];
};

export default function CVSidebar({ skills, education, certifications, strengths }: Props) {
  return (
    <aside className={styles.cvSidebar}>
      {skills.length > 0 && (
        <div className={sharedStyles.cvSection}>
          <h3 className={sharedStyles.cvSectionTitle}>Skills</h3>
          <ul className={styles.skillTagList}>
            {skills.map(s => (
              <li key={s.id} className={styles.skillTag}>{s.name}</li>
            ))}
          </ul>
        </div>
      )}

      {(education.length > 0 || certifications.length > 0) && (
        <div className={sharedStyles.cvSection}>
          {education.length > 0 && (
            <>
              <h3 className={sharedStyles.cvSectionTitle}>Education</h3>
              {education.map(edu => (
                <div key={edu.id} className={styles.eduItem}>
                  <div className={styles.eduDegree}>{edu.degree}</div>
                  <div className={styles.eduSchool}>{edu.institution}</div>
                  <div className={styles.eduYear}>{edu.year}</div>
                </div>
              ))}
            </>
          )}

          {certifications.length > 0 && (
            <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
              <p className={sharedStyles.cvSectionTitle} style={{ marginBottom: '0.8rem' }}>Certifications</p>
              {certifications.map(cert => (
                <div key={cert.id} className={styles.eduItem}>
                  <div className={styles.eduDegree} style={{ fontSize: '0.82rem' }}>{cert.name}</div>
                  <div className={styles.eduSchool}>{cert.issuer}</div>
                  <div className={styles.eduYear}>{cert.year}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {strengths.length > 0 && (
        <div className={sharedStyles.cvSection}>
          <h3 className={sharedStyles.cvSectionTitle}>Strengths</h3>
          {strengths.map(s => (
            <div key={s.id} className={styles.strengthItem}>
              <div className={styles.strengthName}>{s.title}</div>
              <div className={styles.strengthProof}>{s.proof}</div>
            </div>
          ))}
        </div>
      )}
    </aside>
  );
}
