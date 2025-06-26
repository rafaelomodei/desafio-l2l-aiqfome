import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import { Providers } from '@/providers/providers';

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-nunito',
});

export const metadata: Metadata = {
  title: 'Desafio L2L Aiqfome',
  description: 'Aplicação de delivery mobile-first desenvolvida em Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-BR' className=''>
      <body className={`${nunito.variable} antialiased `}>
        <Providers>
          <Header />
          <div className='flex flex-col min-h-screen-no-nav min-h-[var(--min-custom-screen)]'>
            {children}
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
