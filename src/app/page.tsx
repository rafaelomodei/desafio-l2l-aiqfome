'use client';

import { Banner } from '@/components/Banner/Banner';
import { CardEstablishments } from '@/components/CardEstablishments/CardEstablishments';
import { Search } from '@/components/Search/Search';
import { useEstablishments } from '@/hooks/useEstablishment/useEstablishment';
import { useRouter } from 'next/navigation';

export default function Home() {
  const { establishments } = useEstablishments();
  const router = useRouter();

  const handleClick = (id: string) => {
    router.push(`/catalago/${id}`);
  };

  return (
    <main className='min-h-screen bg-background'>
      <Search />
      <Banner />
      <div className='flex flex-col not-only-of-type:px-4 py-6 gap-3'>
        <div className='flex flex-col gap-4'>
          <h1 className='text-xl font-bold text-primary'>abertos</h1>

          {establishments
            .filter((e) => e.isOpen)
            .map((e) => (
              <div key={e.id} onClick={() => handleClick(e.id)}>
                <CardEstablishments {...e} />
              </div>
            ))}
        </div>
        <div className='flex flex-col gap-4'>
          <h1 className='text-xl font-bold text-primary'>fechados</h1>

          {establishments
            .filter((e) => !e.isOpen)
            .map((e) => (
              <div key={e.id} onClick={() => handleClick(e.id)}>
                <CardEstablishments {...e} />
              </div>
            ))}
        </div>
      </div>
    </main>
  );
}
