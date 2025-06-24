import { Banner } from '@/components/Banner/Banner';
import { Header } from '@/components/Header/Header';
import { Search } from '@/components/Search/Search';

export default function Home() {
  return (
    <main className='min-h-screen bg-background'>
      <Search />
      <Banner />
      <div className='px-4 py-6'>
        <h1 className='text-xl font-bold text-primary'>abertos</h1>
      </div>
    </main>
  );
}
