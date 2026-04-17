import styles from './CVSidebar.module.css';
import sharedStyles from '../CVShared.module.css';

export default function CVSidebar() {
  return (
    <aside className={styles.cvSidebar}>
      <div className={sharedStyles.cvSection}>
        <h3 className={sharedStyles.cvSectionTitle}>Skills</h3>
        <ul className={styles.skillTagList}>
          <li className={styles.skillTag}>React / Next.js</li>
          <li className={styles.skillTag}>Vue.js / Nuxt</li>
          <li className={styles.skillTag}>TypeScript</li>
          <li className={styles.skillTag}>Node.js / Express</li>
          <li className={styles.skillTag}>Python / Django</li>
          <li className={styles.skillTag}>PostgreSQL / MySQL</li>
          <li className={styles.skillTag}>MongoDB / Redis</li>
          <li className={styles.skillTag}>REST &amp; GraphQL APIs</li>
          <li className={styles.skillTag}>React Native</li>
          <li className={styles.skillTag}>Docker / Kubernetes</li>
          <li className={styles.skillTag}>AWS / GCP</li>
          <li className={styles.skillTag}>CI/CD Pipelines</li>
          <li className={styles.skillTag}>Figma / UI Design</li>
          <li className={styles.skillTag}>Git / GitHub</li>
          <li className={styles.skillTag}>Agile / Scrum</li>
          <li className={styles.skillTag}>Linux / Bash</li>
        </ul>
      </div>

      <div className={sharedStyles.cvSection}>
        <h3 className={sharedStyles.cvSectionTitle}>Education</h3>

        <div className={styles.eduItem}>
          <div className={styles.eduDegree}>MSc. Computer Science</div>
          <div className={styles.eduSchool}>Makerere University, Kampala</div>
          <div className={styles.eduYear}>2022 — 2024</div>
        </div>

        <div className={styles.eduItem}>
          <div className={styles.eduDegree}>BSc. Software Engineering</div>
          <div className={styles.eduSchool}>Makerere University, Kampala</div>
          <div className={styles.eduYear}>2018 — 2022</div>
        </div>

        <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
          <p className={sharedStyles.cvSectionTitle} style={{ marginBottom: '0.8rem' }}>Certifications</p>
          <div className={styles.eduItem}>
            <div className={styles.eduDegree} style={{ fontSize: '0.82rem' }}>AWS Solutions Architect</div>
            <div className={styles.eduSchool}>Amazon Web Services</div>
            <div className={styles.eduYear}>2023</div>
          </div>
          <div className={styles.eduItem}>
            <div className={styles.eduDegree} style={{ fontSize: '0.82rem' }}>Meta Frontend Developer</div>
            <div className={styles.eduSchool}>Meta / Coursera</div>
            <div className={styles.eduYear}>2022</div>
          </div>
        </div>
      </div>

      <div className={sharedStyles.cvSection}>
        <h3 className={sharedStyles.cvSectionTitle}>Strengths</h3>

        <div className={styles.strengthItem}>
          <div className={styles.strengthName}>Problem Solving</div>
          <div className={styles.strengthProof}>Reduced system latency by 40% by re-architecting a bottlenecked API pipeline.</div>
        </div>

        <div className={styles.strengthItem}>
          <div className={styles.strengthName}>Communication</div>
          <div className={styles.strengthProof}>Consistently rated 4.9/5 by clients for clarity in technical briefings and progress updates.</div>
        </div>

        <div className={styles.strengthItem}>
          <div className={styles.strengthName}>Adaptability</div>
          <div className={styles.strengthProof}>Onboarded to 3 new technology stacks within 2 weeks each, all while maintaining delivery timelines.</div>
        </div>

        <div className={styles.strengthItem}>
          <div className={styles.strengthName}>Attention to Detail</div>
          <div className={styles.strengthProof}>Maintained a &lt;2% bug-in-production rate across all projects over 3 years.</div>
        </div>

        <div className={styles.strengthItem}>
          <div className={styles.strengthName}>Leadership</div>
          <div className={styles.strengthProof}>Led a cross-functional team of 5 engineers, delivering a $120k project on time and 8% under budget.</div>
        </div>
      </div>
    </aside>
  );
}
