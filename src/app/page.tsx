import { Header } from '@/components/Header/Header';
import { Search } from '@/components/Search/Search';

export default function Home() {
  return (
    <main className='min-h-screen bg-background'>
      <Search />
      <div className='p-4'>
        <p className='text-sm text-muted-foreground'>Started...</p>
      </div>
    </main>
  );
}
