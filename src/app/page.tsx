import { Header } from '@/components/Header/Header';

export default function Home() {
  return (
    <main className='min-h-screen bg-background'>
      <Header />
      <div className='p-4'>
        <p className='text-sm text-muted-foreground'>Started...</p>
      </div>
    </main>
  );
}
