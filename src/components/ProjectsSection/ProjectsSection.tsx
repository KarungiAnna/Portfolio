import styles from './ProjectsSection.module.css';
import sectionStyles from '../Section.module.css';
import FadeIn from '../FadeIn/FadeIn';

export default function ProjectsSection() {
  return (
    <section id="projects" className={`${sectionStyles.section} ${styles.projects}`} aria-labelledby="projects-heading">
      <div className={sectionStyles.sectionHeader}>
        <div>
          <p className="label" style={{ marginBottom: '0.8rem' }}>Selected Work</p>
          <h2 id="projects-heading" className={`${sectionStyles.sectionHeading} ${styles.heading}`}>
            <em>Projects</em>
          </h2>
        </div>
      </div>

      <div className={styles.projectsGrid}>
        <FadeIn className={`${styles.projectCard} ${styles.span7}`}>
          <div className={styles.projImage}>
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
            <p className={styles.projTag}>Full-Stack · React · Node.js</p>
            <h3 className={styles.projTitle}>E-Commerce Platform Redesign</h3>
            <p className={styles.projDesc}>Revamped the checkout flow and product discovery system, resulting in a 34% improvement in conversion rate. Built with React, Node.js, and PostgreSQL.</p>
          </div>
        </FadeIn>

        <FadeIn className={`${styles.projectCard} ${styles.span5}`} delay={0.1}>
          <div className={`${styles.projImage} ${styles.projImage2}`}>
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
            <p className={styles.projTag}>UI/UX · Figma · Vue.js</p>
            <h3 className={styles.projTitle}>Analytics Dashboard</h3>
            <p className={styles.projDesc}>Real-time data visualization platform for SaaS product teams. Serves 200+ active users daily.</p>
          </div>
        </FadeIn>

        <FadeIn className={`${styles.projectCard} ${styles.span4}`} delay={0.2}>
          <div className={`${styles.projImage} ${styles.projImage3}`}>
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
            <p className={styles.projTag}>Mobile · React Native</p>
            <h3 className={styles.projTitle}>Health Tracking App</h3>
            <p className={styles.projDesc}>Cross-platform mobile app with offline-first architecture and real-time sync.</p>
          </div>
        </FadeIn>

        <FadeIn className={`${styles.projectCard} ${styles.span5}`} delay={0.3}>
          <div className={`${styles.projImage} ${styles.projImage4}`}>
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
            <p className={styles.projTag}>Backend · Python · AWS</p>
            <h3 className={styles.projTitle}>API Gateway & Microservices</h3>
            <p className={styles.projDesc}>Scalable microservices architecture handling 50k+ requests/day with 99.9% uptime.</p>
          </div>
        </FadeIn>

        <FadeIn className={`${styles.projectCard} ${styles.span3}`} delay={0.4}>
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
