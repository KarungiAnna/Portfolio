'use client';

import { useActionState } from 'react';
import { login } from '@/app/actions/auth';
import styles from './login.module.css';

export default function LoginForm() {
  const [state, formAction, pending] = useActionState(login, undefined);

  return (
    <form action={formAction} className={styles.loginForm}>
      <h1 className={styles.title}>Admin Login</h1>
      
      {state?.error && <p className={styles.error} role="alert">{state.error}</p>}
      
      <div className={styles.formGroup}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" required disabled={pending} autoComplete="username" />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required disabled={pending} autoComplete="current-password" />
      </div>
      
      <button type="submit" disabled={pending} className={styles.btn}>
        {pending ? 'Authenticating...' : 'Sign In'}
      </button>

      <a href="/" className={styles.backLink}>← Back to Portfolio</a>
    </form>
  );
}
