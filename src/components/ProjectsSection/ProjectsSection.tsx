import styles from './ProjectsSection.module.css';
import sectionStyles from '../Section.module.css';
import FadeIn from '../FadeIn/FadeIn';
import Image from 'next/image';

export default function ProjectsSection() {
  return (
    <section id="projects" className={`${sectionStyles.section} ${styles.projects}`} aria-labelledby="projects-heading">
      <div className={sectionStyles.sectionHeader}>
        <div>
          <p className="label" style={{ marginBottom: '0.8rem' }}>My Work</p>
          <h2 id="projects-heading" className={`${sectionStyles.sectionHeading} ${styles.heading}`}>
            <em>Projects</em>
          </h2>
        </div>
      </div>

      <div className={styles.projectsGrid}>
        {/* ACPS Project */}
        <FadeIn className={`${styles.projectCard} ${styles.span6}`}>
          <div className={`${styles.projImage} ${styles.projImageReal}`}>
            <div className={styles.projOverlay}>
              <a href="#">Live</a>
            </div>
            <Image 
              src="/ACPS.png" 
              alt="Automated Claims Portal" 
              fill 
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'contain' }} 
            />
          </div>
          <div className={styles.projBody}>
            <p className={styles.projTag}>React · TypeScript · Tailwind CSS · Django · PostgreSQL</p>
            <h3 className={styles.projTitle}>Automated Claims Portal</h3>
            <p className={styles.projDesc}>A full-stack insurance claims platform built for Old Mutual Uganda, handling the end-to-end lifecycle of insurance claims.</p>
          </div>
        </FadeIn>

        {/* Brand Identity Project stays in place to maintain some grid aesthetic */}
        <FadeIn className={`${styles.projectCard} ${styles.span6}`} delay={0.2}>
          <div className={`${styles.projImage} ${styles.projImage5}`}>
            <div className={styles.projOverlay}>
              <a href="#">Live Demo</a>
              <a href="#">GitHub</a>
            </div>
            <div className={styles.projImageInner}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(244,239,230,0.3)" strokeWidth="1">
                <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" />
              </svg>
              <span>Project Preview</span>
            </div>
          </div>
          <div className={styles.projBody}>
            <p className={styles.projTag}>Design System</p>
            <h3 className={styles.projTitle}>Brand Identity</h3>
            <p className={styles.projDesc}>Complete visual identity and component library for a FinTech startup.</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
