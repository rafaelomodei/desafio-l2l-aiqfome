import { Banner } from '@/components/Banner/Banner';
import { CardEstablishments } from '@/components/CardEstablishments/CardEstablishments';
import { Search } from '@/components/Search/Search';
import { listEstablishments } from '@/lib/services/establishment';
import Link from 'next/link';

export default async function Home() {
  const establishments = await listEstablishments();

  return (
    <main className='flex flex-col  items-center bg-background '>
      <Search />
      <div className='flex flex-col w-full max-w-2xl'>
        <Banner />
        <div className='flex flex-col not-only-of-type:px-4 py-6 gap-3'>
          <div className='flex flex-col gap-4'>
            <h1 className='text-xl font-bold text-primary'>abertos</h1>

            {establishments
              .filter((e) => e.isOpen)
              .map((e) => (
                <Link key={e.id} href={`/catalago/${e.id}`}>
                  <CardEstablishments {...e} />
                </Link>
              ))}
          </div>
          <div className='flex flex-col gap-4'>
            <h1 className='text-xl font-bold text-primary'>fechados</h1>

            {establishments
              .filter((e) => !e.isOpen)
              .map((e) => (
                <Link key={e.id} href={`/catalago/${e.id}`}>
                  <CardEstablishments {...e} />
                </Link>
              ))}
          </div>
        </div>
      </div>
    </main>
  );
}
