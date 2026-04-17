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
        <div className={styles.expRole}>{role}</div>
        <div className={styles.expDuration}>{duration}</div>
      </div>
      <div className={styles.expCompany}>
        {companyUrl ? (
          <a href={companyUrl} target="_blank" rel="noreferrer">{companyName}</a>
        ) : (
          <strong>{companyName}</strong>
        )}
        {' '}— {companyDescription}
      </div>
      <ul className={styles.expBullets}>
        {bullets.map((bullet, idx) => (
          <li key={idx} className={styles.expBullet}>{bullet}</li>
        ))}
      </ul>
    </div>
  );
}
