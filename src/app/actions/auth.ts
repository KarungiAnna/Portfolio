'use server';

import { getSession } from '@/lib/session';
import { redirect } from 'next/navigation';

export async function login(prevState: { error: string } | undefined, formData: FormData) {
  const username = formData.get('username') as string;
  const password = formData.get('password') as string;

  const usernameMatch = username === process.env.ADMIN_USERNAME;
  const passwordMatch = password === process.env.ADMIN_PASSWORD;

  if (usernameMatch && passwordMatch) {
    const session = await getSession();
    session.isLoggedIn = true;
    await session.save();
    redirect('/admin');
  }

  return { error: 'Invalid credentials' };
}

export async function logout() {
  const session = await getSession();
  session.destroy();
  redirect('/login');
}
