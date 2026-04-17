import styles from './CVHeader.module.css';

export default function CVHeader() {
  return (
    <div className={styles.cvHeader}>
      <div className={styles.cvPhoto}>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="rgba(244,239,230,0.3)" strokeWidth="0.8">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
        <span className={styles.cvPhotoLabel}>Photo Here</span>
      </div>

      <div className={styles.cvNameBlock}>
        <p className={styles.cvRole}>Full-Stack Developer &amp; UI/UX Designer</p>
        <h1 className={styles.cvName}>Karungi <em>Anna</em></h1>
        <p className={styles.cvTagline}>
          Crafting purposeful digital experiences through elegant code and thoughtful design. Available for remote collaboration worldwide.
        </p>

        <div className={styles.cvSocials}>
          <a href="https://github.com/karungianna" className={styles.cvSocialPill} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/in/karungianna" className={styles.cvSocialPill} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://karungianna.dev" className={styles.cvSocialPill} target="_blank" rel="noreferrer">
            Portfolio
          </a>
        </div>
      </div>

      <div className={styles.cvContactBlock}>
        <a href="mailto:karungi.anna@example.com" className={styles.cvContactItem}>
          <span className={styles.icon}>✉</span> karungi.anna@example.com
        </a>
        <a href="tel:+1234567890" className={styles.cvContactItem}>
          <span className={styles.icon}>☏</span> +1 234 567 890
        </a>
        <span className={styles.cvContactItem}>
          <span className={styles.icon}>◎</span> Kampala, Uganda
        </span>
        <span className={styles.cvContactItem}>
          <span className={styles.icon}>✈</span> Open to Remote — Worldwide
        </span>
      </div>
    </div>
  );
}
