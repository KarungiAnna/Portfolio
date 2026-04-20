'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './Nav.module.css';
import { usePathname } from 'next/navigation';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderLink = (hash: string, text: string) => {
    if (pathname === '/') {
      return <a href={hash} onClick={() => setMenuOpen(false)}>{text}</a>;
    }
    return <Link href={`/${hash}`} onClick={() => setMenuOpen(false)}>{text}</Link>;
  };

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`} aria-label="Main navigation">
      <Link href="/" className={styles.navLogo} aria-label="Anna K. Home">
        Anna K.
      </Link>

      {/* Hamburger for mobile could be added here */}
      <button
        className={styles.mobileMenuBtn}
        aria-expanded={menuOpen}
        aria-label="Toggle menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`${styles.navContent} ${menuOpen ? styles.open : ''}`}>
        <ul className={styles.navLinks}>
          <li>{renderLink('#', 'Home')}</li>
          <li>{renderLink('#about', 'About')}</li>
          <li>{renderLink('#projects', 'Work')}</li>
          <li>{renderLink('#skills', 'Stack')}</li>
          <li>{renderLink('#contact', 'Contact')}</li>
        </ul>

        <div className={styles.navBadge}>
          <div className={styles.dot}></div>
          Available for work
        </div>
      </div>
    </nav>
  );
}
