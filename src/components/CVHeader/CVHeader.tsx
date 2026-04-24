import styles from './CVHeader.module.css';

export default function CVHeader() {
  return (
    <header className={styles.cvHeader}>
      <div className={styles.cvNameBlock}>
        <h1 className={styles.cvName}>Karungi Anna</h1>
        <p className={styles.cvRole}>Junior Full Stack Developer & UI/UX Designer</p>
        <a 
          href="https://github.com/KarungiAnna" 
          className={styles.cvPortfolioLink}
          target="_blank"
          rel="noopener noreferrer"
        >
         https://github.com/KarungiAnna
        </a>
      </div>

      <div className={styles.cvContactBlock}>
        <a href="tel:+256705562066" className={styles.cvContactItem}>
          <span className={styles.ciIcon}>☏</span>
          +256 705 562066
        </a>
        <div className={styles.cvContactItem}>
          <span className={styles.ciIcon}>◎</span>
          Kampala, Uganda
        </div>
        <a href="mailto:annakarungi15@gmail.com" className={styles.cvContactItem}>
          <span className={styles.ciIcon}>✉</span>
          annakarungi15@gmail.com
        </a>
        <div className={styles.cvContactItem}>
          <span className={styles.ciIcon}>✈</span>
          Open to Remote — Worldwide
        </div>
      </div>
    </header>
  );
}
