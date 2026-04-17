import { getAllProjects } from '@/db/queries';
import ProjectForm from '@/components/Admin/ProjectForm';
import { deleteProject } from '@/app/actions/projects';
import styles from '../admin.module.css';

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return (
    <div>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Manage Projects</h1>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '3rem', alignItems: 'start' }}>
        <div>
          <h2 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', fontFamily: 'var(--ff-display)' }}>Existing Projects</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {projects.map((proj) => (
              <div key={proj.id} style={{ background: 'var(--cream-2)', padding: '1.5rem', border: '1px solid var(--border)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', margin: '0 0 0.3rem 0', fontFamily: 'var(--ff-display)' }}>{proj.title}</h3>
                    <p style={{ fontSize: '0.8rem', color: 'var(--muted)', margin: 0 }}>Tag: {proj.tag} | Order: {proj.order}</p>
                  </div>
                  <form action={async () => {
                    'use server';
                    await deleteProject(proj.id);
                  }}>
                    <button type="submit" style={{ background: 'var(--wine)', color: 'var(--cream)', border: 'none', padding: '0.4rem 0.8rem', fontSize: '0.6rem', cursor: 'pointer', fontFamily: 'var(--ff-label)', textTransform: 'uppercase' }}>Delete</button>
                  </form>
                </div>
              </div>
            ))}
            {projects.length === 0 && <p style={{ color: 'var(--muted)' }}>No projects found. Add one!</p>}
          </div>
        </div>

        <div>
          <h2 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', fontFamily: 'var(--ff-display)' }}>Add New Project</h2>
          <ProjectForm />
        </div>
      </div>
    </div>
  );
}
