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

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`} aria-label="Main navigation">
      <Link href="/" className={styles.navLogo} aria-label="Lorem Ipsum Home">
        LI.
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
          <li><Link href={pathname === '/' ? '#about' : '/#about'} onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link href={pathname === '/' ? '#projects' : '/#projects'} onClick={() => setMenuOpen(false)}>Work</Link></li>
          <li><Link href="/cv" onClick={() => setMenuOpen(false)}>CV</Link></li>
        </ul>
        
        <div className={styles.navBadge}>
          <div className={styles.dot}></div>
          Available for work
        </div>
      </div>
    </nav>
  );
}
