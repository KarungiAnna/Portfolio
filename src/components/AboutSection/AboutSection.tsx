import styles from './AboutSection.module.css';
import sectionStyles from '../Section.module.css';
import FadeIn from '../FadeIn/FadeIn';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className={`${sectionStyles.section} ${styles.about}`} aria-labelledby="about-heading">
      <div className={sectionStyles.sectionHeader}>
        <div>
          <p className="label" style={{ marginBottom: '0.8rem', color: 'rgba(244,239,230,0.5)' }}>Who I Am</p>
          <h2 id="about-heading" className={`${sectionStyles.sectionHeading} ${styles.heading}`} style={{ color: '#8A3047' }}>
            About me
          </h2>
        </div>
      </div>

      <div className={styles.aboutGrid}>
        <div className={styles.aboutImageWrap}>
          <div className={styles.aboutPlaceholder} style={{ position: 'relative' }}>
            <img 
              src="/Profile3.jpg.jpeg" 
              alt="Karungi Anna" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} 
            />
          </div>
        </div>

        <FadeIn className={styles.aboutContent}>
          <p>I build where engineering and design converge turning complex systems into interfaces people actually enjoy using.</p>
          <p>I'm driven by the tension between technical rigour and user empathy. Whether I'm architecting a data layer or refining a prototype in Figma, I hold both to the same standard: software should be as reliable as it is intuitive.</p>
          <p>My recent work has focused on moving manual processes into well-structured digital workflows.</p>
        </FadeIn>
      </div>
    </section>
  );
}
