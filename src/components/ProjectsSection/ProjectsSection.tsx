import styles from './ProjectsSection.module.css';
import sectionStyles from '../Section.module.css';
import FadeIn from '../FadeIn/FadeIn';
import Image from 'next/image';
import { getAllProjects } from '@/db/queries';

export default async function ProjectsSection() {
  const projects = await getAllProjects();

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
        {projects.length > 0 ? (
          projects.map((proj, idx) => (
            <FadeIn key={proj.id} className={`${styles.projectCard} ${styles.span6}`} delay={idx * 0.2}>
              <div className={`${styles.projImage} ${proj.imageUrl ? styles.projImageReal : styles.projImage5}`}>
                <div className={styles.projOverlay}>
                  {proj.liveUrl && <a href={proj.liveUrl} target="_blank" rel="noopener noreferrer">Live URL</a>}
                  {proj.repoUrl && <a href={proj.repoUrl} target="_blank" rel="noopener noreferrer">Repo URL</a>}
                </div>
                {proj.imageUrl ? (
                  <Image 
                    src={proj.imageUrl} 
                    alt={proj.title} 
                    fill 
                    priority={idx < 2}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: 'contain', objectPosition: 'center' }} 
                  />
                ) : (
                  <div className={styles.projImageInner}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(244,239,230,0.3)" strokeWidth="1">
                      <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" />
                    </svg>
                    <span>Project Preview</span>
                  </div>
                )}
              </div>
              <div className={styles.projBody}>
                <p className={styles.projTag}>{proj.tag}</p>
                <h3 className={styles.projTitle}>{proj.title}</h3>
                <p className={styles.projDesc}>{proj.description}</p>
              </div>
            </FadeIn>
          ))
        ) : (
          <p style={{ color: 'var(--muted)', gridColumn: '1 / -1' }}>No projects found.</p>
        )}
      </div>
    </section>
  );
}
