import type { Metadata } from 'next';
import LoginForm from './LoginForm';
import styles from './login.module.css';

export const metadata: Metadata = {
  title: 'Admin Login — Karungi Anna',
  description: 'Secure admin portal login',
};

export default function LoginPage() {
  return (
    <div className={styles.pageWrapper}>
      <LoginForm />
    </div>
  );
}
