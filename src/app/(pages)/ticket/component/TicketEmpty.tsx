import Link from 'next/link';

export default function TicketEmpty() {
  return (
    <div className='flex flex-col gap-8 items-center justify-center'>
      <p className='mt-10 text-center'>Seu ticket está vazio!</p>
      <Link
        href='/'
        className='max-w-2xl mt-2 inline-flex items-center justify-center rounded-md bg-primary px-12 py-3 text-lg text-white transition hover:bg-primary/70'
      >
        Volta ao início
      </Link>
    </div>
  );
}
