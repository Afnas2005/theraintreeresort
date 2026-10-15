import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

// 2. Metadata Configuration
export const metadata: Metadata = {
  metadataBase: new URL('https://theraintreeresort.com'),
  title: {
    default: 'The Rain Tree Resort | Nature Resort in Wayanad',
    template: '%s | The Rain Tree Resort',
  },
  description: 'Stay next to Tholpetty Wildlife Sanctuary in Wayanad, Kerala. Wake up to bird calls and immerse yourself in the serene forest surroundings.',
  keywords: ['Wayanad resort', 'Tholpetty wildlife sanctuary stay', 'forest stay wayanad', 'nature resort kerala', 'jungle cottage', 'bird watching wayanad', 'resort near nagarhole'],
  icons: {
    icon: '/images/favicon_io/favicon-32x32.png',
    apple: '/images/favicon_io/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Escape to the Forest | The Rain Tree Resort Wayanad',
    description: 'Stay comfortably in the heart of nature. Located right next to Tholpetty Wildlife Sanctuary.',
    images: ['/images/hero/the_rain_tree_hero_swimming_pool.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#11200f', // Matches bg-forest-base
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans bg-forest-base text-forest-text antialiased selection:bg-forest-gold selection:text-forest-base">
        <Navbar />
        <main className="min-h-screen relative flex flex-col">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
