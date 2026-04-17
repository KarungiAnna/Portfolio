import { getAllExperiences } from '@/db/queries';
import ExperienceForm from '@/components/Admin/ExperienceForm';
import { deleteExperience } from '@/app/actions/experiences';
import styles from '../admin.module.css';

export default async function CVEntriesPage() {
  const experiences = await getAllExperiences();

  return (
    <div>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Manage CV Entries</h1>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '3rem', alignItems: 'start' }}>
        <div>
          <h2 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', fontFamily: 'var(--ff-display)' }}>Existing Experiences</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {experiences.map((exp) => (
              <div key={exp.id} style={{ background: 'var(--cream-2)', padding: '1.5rem', border: '1px solid var(--border)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', margin: '0 0 0.3rem 0', fontFamily: 'var(--ff-display)' }}>{exp.role}</h3>
                    <p style={{ fontSize: '0.8rem', color: 'var(--muted)', margin: '0 0 1rem 0' }}>{exp.companyName} ({exp.duration})</p>
                    
                    <ul style={{ paddingLeft: '1rem', fontSize: '0.8rem', color: 'var(--ink)' }}>
                      {exp.bullets.map((bullet, idx) => (
                        <li key={idx} style={{ marginBottom: '0.3rem' }}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                  <form action={async () => {
                    'use server';
                    await deleteExperience(exp.id);
                  }}>
                    <button type="submit" style={{ background: 'var(--wine)', color: 'var(--cream)', border: 'none', padding: '0.4rem 0.8rem', fontSize: '0.6rem', cursor: 'pointer', fontFamily: 'var(--ff-label)', textTransform: 'uppercase' }}>Delete</button>
                  </form>
                </div>
              </div>
            ))}
            {experiences.length === 0 && <p style={{ color: 'var(--muted)' }}>No CV entries found. Add one!</p>}
          </div>
        </div>

        <div>
          <h2 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', fontFamily: 'var(--ff-display)' }}>Add New Entry</h2>
          <ExperienceForm />
        </div>
      </div>
    </div>
  );
}
