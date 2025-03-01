import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import MetaTags from './MetaTags';
import { ThemeProvider } from '@/utils/themeContext';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  image?: string;
}

export default function Layout({ 
  children, 
  title = 'SwahiliPot Hub - Empowering Innovation in East Africa',
  description = 'SwahiliPot Hub is a collaborative space for technology, arts, and culture in Mombasa, Kenya.',
  image = '/images/og-image.jpg'
}: LayoutProps) {
  return (
    <ThemeProvider>
      <MetaTags title={title} description={description} image={image} />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}