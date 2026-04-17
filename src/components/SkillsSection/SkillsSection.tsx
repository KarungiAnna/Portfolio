import styles from './SkillsSection.module.css';
import sectionStyles from '../Section.module.css';
import FadeIn from '../FadeIn/FadeIn';

export default function SkillsSection() {
  return (
    <section id="skills" className={`${sectionStyles.section} ${styles.skills}`} aria-labelledby="skills-heading">
      <div className={sectionStyles.sectionHeader}>
        <div>
          <p className="label" style={{ marginBottom: '0.8rem' }}>Technical Proficiency</p>
          <h2 id="skills-heading" className={sectionStyles.sectionHeading}>
            <em>Stack</em>
          </h2>
        </div>
      </div>

      <div className={styles.skillsLayout}>
        <div style={{ display: 'none' }}></div>

        <div className={styles.skillsColumns}>
          <FadeIn>
            <p className={styles.skillCategoryTitle}>Frontend</p>
            <ul className={styles.skillList}>
              <li className={styles.skillItem}>React / Next.js</li>
              <li className={styles.skillItem}>Vue.js / Nuxt</li>
              <li className={styles.skillItem}>TypeScript</li>
              <li className={styles.skillItem}>Tailwind CSS</li>
              <li className={styles.skillItem}>Figma / UI Design</li>
              <li className={styles.skillItem}>React Native</li>
            </ul>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <p className={styles.skillCategoryTitle}>Backend</p>
            <ul className={styles.skillList}>
              <li className={styles.skillItem}>Node.js / Express</li>
              <li className={styles.skillItem}>React / Django</li>
              <li className={styles.skillItem}>REST &amp; GraphQL APIs</li>
              <li className={styles.skillItem}>PostgreSQL / MySQL</li>
              <li className={styles.skillItem}>MongoDB / Redis</li>
              <li className={styles.skillItem}>Microservices</li>
            </ul>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className={styles.skillCategoryTitle}>Tools &amp; Cloud</p>
            <ul className={styles.skillList}>
              <li className={styles.skillItem}>AWS / GCP</li>
              <li className={styles.skillItem}>Docker / Kubernetes</li>
              <li className={styles.skillItem}>CI/CD Pipelines</li>
              <li className={styles.skillItem}>Git / GitHub</li>
              <li className={styles.skillItem}>Linux / Bash</li>
              <li className={styles.skillItem}>Agile / Scrum</li>
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
