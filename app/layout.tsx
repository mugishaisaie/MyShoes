// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from '@/components/Providers';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'My Shoes Rwanda - Premium Footwear Store',
    template: '%s | My Shoes Rwanda',
  },
  description:
    'Shop premium shoes and footwear in Rwanda. Men, women, and kids shoes with fast delivery across Kigali and beyond.',
  keywords: [
    'shoes',
    'Rwanda',
    'footwear',
    'sneakers',
    'sports shoes',
    'formal shoes',
    'online shopping',
  ],
  authors: [{ name: 'My Shoes Rwanda' }],
  openGraph: {
    type: 'website',
    locale: 'en_RW',
    url: 'https://myshoes.rw',
    title: 'My Shoes Rwanda - Premium Footwear Store',
    description:
      'Shop premium shoes and footwear in Rwanda with fast delivery.',
    siteName: 'My Shoes Rwanda',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
