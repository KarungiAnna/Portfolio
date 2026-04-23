import styles from './HeroSection.module.css';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section id="hero" className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.heroStreak}></div>

      <div className={styles.heroInner}>
        <p className={styles.heroEyebrow}>Ideating. Crafting. Evolving.</p>

        <h1 id="hero-heading" className={styles.heroHeadline}>
          Crafting Purposeful<br /><em>Digital Experiences</em>
        </h1>

        <p className={styles.heroSubtitle}>Hey, I'm <strong style={{ color: '#F4EFE6', fontWeight: 'bold' }}>Karungi Anna</strong> — a Junior Full-Stack Developer &amp; UI/UX Designer</p>
        <p className={styles.heroLocation}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'text-bottom', marginRight: '4px' }}>
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          Kampala, Uganda · Open to work remotely
        </p>

        <div className={styles.heroCtas}>
          <Link href="#contact" className={styles.btnPrimary}>
            👋 Let's Connect
          </Link>
          <Link href="/cv" className={styles.btnOutline} target="_blank">
            View CV →
          </Link>
        </div>
      </div>

      <div className={styles.heroSocials}>
        <a href="https://github.com/KarungiAnna" target="_blank" className={styles.socialLink} title="GitHub" aria-label="GitHub (opens in new tab)">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/karungi-anna" target="_blank" className={styles.socialLink} title="LinkedIn" aria-label="LinkedIn (opens in new tab)">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
        <a href="mailto:annakarungi15@gmail.com" className={styles.socialLink} title="Email" aria-label="Email Karungi Anna">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
        </a>
      </div>
    </section>
  );
}
