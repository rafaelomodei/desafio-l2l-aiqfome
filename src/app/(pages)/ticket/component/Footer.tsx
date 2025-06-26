import { useTicket } from '@/contexts/TicketContext/TicketContext';
import Link from 'next/link';

export default function Footer() {
  const { subtotal } = useTicket();

  return (
    <>
      <div className='flex flex-col items-start justify-center mb-4 font-bold'>
        <span className='text-[color:var(--color-text-title)]'>subtotal</span>
        <span className='text-xl'>
          {subtotal.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </span>
      </div>

      <Link
        href={`/pagamento}`}
        className='flex w-full py-3 rounded-md justify-center items-center gap-1 text-md text-white bg-[color:var(--color-primary)] '
      >
        ir para pagamento
      </Link>
    </>
  );
}
