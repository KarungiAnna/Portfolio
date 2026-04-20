import styles from './CVHeader.module.css';

export default function CVHeader() {
  return (
    <div className={styles.cvHeader}>
      <div className={styles.cvNameBlock}>
        <h1 className={styles.cvName} style={{ marginBottom: '0.8rem', textTransform: 'uppercase', fontStyle: 'normal', fontSize: '2.5rem', letterSpacing: '0.05em' }}>KARUNGI ANNA</h1>
        <p className={styles.cvRole} style={{ color: 'var(--cream)', letterSpacing: '0', fontSize: '0.85rem' }}>Junior Full Stack Developer</p>
        <a href="https://karungianna.dev" className={styles.cvRole} style={{ color: 'var(--gold)', letterSpacing: '0', textDecoration: 'none' }}>Link to portfolio</a>
      </div>

      <div className={styles.cvContactBlock}>
        <span className={styles.cvContactItem} style={{ color: 'var(--cream)', fontSize: '0.85rem' }}>+256 705 562066</span>
        <span className={styles.cvContactItem} style={{ color: 'var(--cream)', fontSize: '0.85rem' }}>KAMPALA, UGANDA</span>
        <a href="mailto:annakarungi15@gmail.com" className={styles.cvContactItem} style={{ color: 'var(--cream)', fontSize: '0.85rem' }}>annakarungi15@gmail.com</a>
      </div>
    </div>
  );
}
