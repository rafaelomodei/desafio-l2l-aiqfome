import { Banner } from '@/components/Banner/Banner';
import { CardEstablishments } from '@/components/CardEstablishments/CardEstablishments';
import { Header } from '@/components/Header/Header';
import { Search } from '@/components/Search/Search';

export default function Home() {
  return (
    <main className='min-h-screen bg-background'>
      <Search />
      <Banner />
      <div className='flex flex-col not-only-of-type:px-4 py-6 gap-3'>
        <div className='flex flex-col gap-4'>
          <h1 className='text-xl font-bold text-primary'>abertos</h1>

          <CardEstablishments
            image='/png/companies/matsuriConcept.png'
            name='Matsuri Concept'
            deliveryPrice={6}
            rating={4.7}
            isOpen={true}
          />

          <CardEstablishments
            image='/png/companies/matsuriConcept.png'
            name='Matsuri Concept'
            deliveryFee={true}
            deliveryPrice={6}
            rating={4.7}
            isOpen={true}
          />

          <CardEstablishments
            image='/png/companies/matsuriConcept.png'
            name='Matsuri Concept'
            outsourcedMotorcycle
            deliveryPrice={6}
            rating={4.7}
            isOpen={true}
          />
        </div>
        <div className='flex flex-col gap-4'>
          <h1 className='text-xl font-bold text-primary'>fechados</h1>

          <CardEstablishments
            image='/png/companies/matsuriConcept.png'
            name='Matsuri Concept'
            deliveryPrice={6}
            rating={4.7}
            isOpen={false}
          />
          <CardEstablishments
            image='/png/companies/matsuriConcept.png'
            name='Matsuri Concept'
            deliveryPrice={6}
            deliveryFee={true}
            rating={4.7}
            isOpen={false}
          />
        </div>
      </div>
    </main>
  );
}
