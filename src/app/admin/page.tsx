import styles from './admin.module.css';

export default function AdminDashboardPage() {
  return (
    <div>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Dashboard Overview</h1>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem' }}>
        <div style={{ background: 'var(--cream-2)', padding: '2rem', border: '1px solid var(--border)' }}>
          <p style={{ fontFamily: 'var(--ff-label)', fontSize: '0.6rem', letterSpacing: '0.15em', color: 'var(--wine)', textTransform: 'uppercase', marginBottom: '1rem' }}>Total Projects</p>
          <p style={{ fontFamily: 'var(--ff-display)', fontSize: '2.5rem', color: 'var(--ink)' }}>—</p>
        </div>
        
        <div style={{ background: 'var(--cream-2)', padding: '2rem', border: '1px solid var(--border)' }}>
          <p style={{ fontFamily: 'var(--ff-label)', fontSize: '0.6rem', letterSpacing: '0.15em', color: 'var(--wine)', textTransform: 'uppercase', marginBottom: '1rem' }}>CV Entries</p>
          <p style={{ fontFamily: 'var(--ff-display)', fontSize: '2.5rem', color: 'var(--ink)' }}>—</p>
        </div>
        
        <div style={{ background: 'var(--cream-2)', padding: '2rem', border: '1px solid var(--border)' }}>
          <p style={{ fontFamily: 'var(--ff-label)', fontSize: '0.6rem', letterSpacing: '0.15em', color: 'var(--wine)', textTransform: 'uppercase', marginBottom: '1rem' }}>Unread Messages</p>
          <p style={{ fontFamily: 'var(--ff-display)', fontSize: '2.5rem', color: 'var(--ink)' }}>—</p>
        </div>
      </div>
    </div>
  );
}
