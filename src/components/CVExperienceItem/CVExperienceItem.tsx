import styles from './CVExperienceItem.module.css';

interface CVExperienceItemProps {
  role: string;
  duration: string;
  companyName: string;
  companyUrl?: string;
  companyDescription: string;
  bullets: (string | React.ReactNode)[];
}

export default function CVExperienceItem({
  role,
  duration,
  companyName,
  companyUrl,
  companyDescription,
  bullets
}: CVExperienceItemProps) {
  return (
    <div className={styles.expItem}>
      <div className={styles.expHeader}>
        <div className={styles.expMeta}>
          <div className={styles.expRole}>{role}</div>
          <div className={styles.expDuration}>{duration}</div>
        </div>
        <div className={styles.expCompanyRow}>
          {companyUrl ? (
            <a href={companyUrl} target="_blank" rel="noopener noreferrer" className={styles.expCompanyName}>
              {companyName}
            </a>
          ) : (
            <span className={styles.expCompanyName}>{companyName}</span>
          )}
          <span className={styles.expDivot}></span>
          <span className={styles.expCompanyDesc}>{companyDescription}</span>
        </div>
      </div>
      <ul className={styles.expBullets}>
        {bullets.map((bullet, idx) => (
          <li key={idx} className={styles.expBullet}>{bullet}</li>
        ))}
      </ul>
    </div>
  );
}
