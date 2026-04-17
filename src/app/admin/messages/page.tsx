import { getAllMessages } from '@/db/queries';
import styles from '../admin.module.css';

export default async function InboxPage() {
  const messages = await getAllMessages();

  return (
    <div>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Inbox (Messages)</h1>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
        {messages.map((msg) => (
          <div key={msg.id} style={{ background: 'var(--cream-2)', border: '1px solid var(--border)' }}>
            <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h3 style={{ fontSize: '1.2rem', margin: '0 0 0.3rem 0', fontFamily: 'var(--ff-display)' }}>{msg.subject || 'No Subject'}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', margin: 0 }}>
                  From: <a href={`mailto:${msg.email}`} style={{ color: 'var(--wine)', textDecoration: 'none' }}>{msg.name} ({msg.email})</a>
                </p>
              </div>
              <div style={{ fontSize: '0.7rem', color: 'var(--muted)', fontFamily: 'var(--ff-label)', textTransform: 'uppercase' }}>
                {msg.createdAt?.toLocaleDateString()}
              </div>
            </div>
            <div style={{ padding: '1.5rem', fontSize: '0.9rem', color: 'var(--ink)', lineHeight: 1.7, whiteSpace: 'pre-wrap' }}>
              {msg.message}
            </div>
          </div>
        ))}
        {messages.length === 0 && <p style={{ color: 'var(--muted)' }}>No messages yet.</p>}
      </div>
    </div>
  );
}
