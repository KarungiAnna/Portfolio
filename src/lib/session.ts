import { getIronSession } from 'iron-session';
import { cookies } from 'next/headers';

export const sessionOptions = {
  password: process.env.SESSION_SECRET!,
  cookieName: 'karungi-admin-session',
  cookieOptions: {
    // secure: true should be used in production (HTTPS), but can be false in dev
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24, // 24 hours
  },
};

export async function getSession() {
  const cookieStore = await cookies();
  return await getIronSession<{ isLoggedIn: boolean }>(cookieStore, sessionOptions);
}
