import type { Metadata } from 'next';
import { Cormorant_Garamond, Cinzel, DM_Sans } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
});

const cinzel = Cinzel({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-cinzel',
  display: 'swap',
});

const dmSans = DM_Sans({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Karungi Anna — Designer & Developer',
  description: 'Portfolio of Karungi Anna, a designer and developer.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${cinzel.variable} ${dmSans.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col relative">
        {children}
      </body>
    </html>
  );
}
