import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p className={styles.copyright}>
          &copy; 2026 <strong style={{ color: '#F4EFE6', fontWeight: 'bold' }}>KARUNGI ANNA</strong>. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}
