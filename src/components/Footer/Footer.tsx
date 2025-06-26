'use client';

import Link from 'next/link';
import { useTicket } from '@/contexts/TicketContext/TicketContext';
import { usePathname } from 'next/navigation';

export function Footer() {
  const pathname = usePathname();
  const { items } = useTicket();
  const hasItems = items.length > 0;

  if (pathname.startsWith('/ticket')) return null;

  return (
    <footer className='flex flex-col items-center w-full px-4 py-6 gap-1 text-md font-bold text-center text-[color:var(--color-text-footer)] bg-[color:var(--color-background-card-product)]'>
      <p>feito com 💜 em maringá-PR</p>

      {hasItems ? (
        <Link
          href='/ticket'
          className='w-full max-w-2xl mt-2 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-lg text-white transition hover:bg-primary/70'
        >
          ver ticket
        </Link>
      ) : (
        <p className='text-lg'>
          aiqfome.com © 2007-2023 aiqfome LTDA . CNPJ: 09.186.786/0001-58
        </p>
      )}
    </footer>
  );
}
