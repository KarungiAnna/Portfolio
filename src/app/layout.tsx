import type { Metadata } from 'next';
import { Cormorant_Garamond, Cinzel, DM_Sans } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav/Nav';
import Footer from '@/components/Footer/Footer';

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
    >
      <body className="min-h-full flex flex-col relative">
        <a 
          href="#main-content" 
          className="absolute top-[-9999px] left-[-9999px] z-[99999] focus:top-4 focus:left-4 bg-ink text-cream px-4 py-2 text-sm uppercase tracking-widest font-label outline-none focus:outline-gold focus:outline-4"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
