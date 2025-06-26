'use client';

import { useTicket } from '@/contexts/TicketContext/TicketContext';
import Footer from './component/Footer';

export default function TicketLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { subtotal } = useTicket();

  return (
    <>
      <section className='min-h-[var(--min-custom-screen)]'>{children}</section>
      <footer className='flex items-center justify-center w-full px-4 py-6 gap-8 text-md font-bold text-center text-[color:var(--color-text-footer)] shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] bg-white'>
        <div className='flex w-full max-w-2xl gap-8 '>
          <Footer />
        </div>
      </footer>
    </>
  );
}
