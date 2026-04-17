import Nav from '@/components/Nav/Nav';
import Footer from '@/components/Footer/Footer';

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
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
    </>
  );
}
