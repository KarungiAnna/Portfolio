import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p className={styles.copyright}>&copy; {year} Karungi Anna. All rights reserved.</p>
      </div>
    </footer>
  );
}
