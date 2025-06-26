import TicketView from './ticket-view';

export const dynamic = 'force-dynamic';

export default async function TicketPage() {
  return (
    <main className='flex justify-center pb-[68px] font-semibold text-[color:var(--color-text)]'>
      <div className='w-full max-w-2xl'>
        <TicketView />
      </div>
    </main>
  );
}
