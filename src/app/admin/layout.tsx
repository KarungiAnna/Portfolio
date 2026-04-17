import { getSession } from '@/lib/session';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { logout } from '@/app/actions/auth';
import styles from './admin.module.css';

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession();
  
  if (!session.isLoggedIn) {
    redirect('/login');
  }

  return (
    <div className={styles.adminContainer}>
      <aside className={styles.adminSidebar}>
        <div className={styles.sidebarHeader}>
          <h2>Admin Dashboard</h2>
          <p>Welcome back</p>
        </div>
        <nav className={styles.sidebarNav}>
          <Link href="/admin">Dashboard Overview</Link>
          <Link href="/admin/projects">Manage Projects</Link>
          <Link href="/admin/cv">Manage CV Entries</Link>
          <Link href="/admin/messages">Inbox (Messages)</Link>
          <a href="/" target="_blank" className={styles.viewSiteLink}>↗ View Live Site</a>
        </nav>
        <div className={styles.sidebarFooter}>
          <form action={logout}>
            <button type="submit" className={styles.btnLogout}>Log Out</button>
          </form>
        </div>
      </aside>
      <main className={styles.adminMain}>
        {children}
      </main>
    </div>
  );
}
