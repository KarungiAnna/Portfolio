import styles from './AboutSection.module.css';
import sectionStyles from '../Section.module.css';
import FadeIn from '../FadeIn/FadeIn';

export default function AboutSection() {
  return (
    <section id="about" className={`${sectionStyles.section} ${styles.about}`} aria-labelledby="about-heading">
      <div className={sectionStyles.sectionHeader}>
        <div>
          <p className="label" style={{ marginBottom: '0.8rem', color: 'rgba(244,239,230,0.5)' }}>Who I Am</p>
          <h2 id="about-heading" className={`${sectionStyles.sectionHeading} ${styles.heading}`}>
            A little bit<br /><em>about me</em>
          </h2>
        </div>
      </div>

      <div className={styles.aboutGrid}>
        <div className={styles.aboutImageWrap}>
          <div className={styles.aboutPlaceholder} style={{ position: 'relative' }}>
            <div className={styles.aboutPlaceholderIcon}>
              <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="M20.4 14.5L16 10 4 20" />
              </svg>
            </div>
            <span>Image Placeholder</span>
          </div>
        </div>

        <FadeIn className={styles.aboutContent}>
          <p>Hi, I am Karungi Anna. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, crafting meaningful digital solutions that bridge the gap between humans and technology.</p>
          <p>With a passion for clean code and intuitive design, I bring a holistic approach to every project — from the first sketch to the final deployment. I thrive in collaborative environments and adapt seamlessly to remote workflows across different time zones.</p>
          <p>When I'm not building, you'll find me exploring open-source contributions, mentoring junior developers, or reading about design systems and emerging web technologies.</p>
        </FadeIn>
      </div>
    </section>
  );
}
