import { CardInfoPrice } from '@/components/CardInfoPrice/CardInfoPrice';
import { Star } from '@/components/Star/Star';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function EstablishmentMenu(props: EstablishmentProps) {
  const { name, rating, deliveryFee, deliveryPrice, outsourcedMotorcycle } =
    props;

  return (
    <main className='min-h-screen bg-background text-primary'>
      <div className='flex'>
        <Image
          src='/png/companies/matsuriConcept.png'
          alt={`Imagem do restaurante `}
          width={32}
          height={32}
        />
        <h3 className='text-[color:var(--color-title)] font-bold text-md truncate'>
          {name}
        </h3>
      </div>
      <div className='flex '>
        <div className='flex'>
          <Button>
            <Image
              src='/svg/iconShared'
              alt={`Icon compartilhar`}
              width={32}
              height={32}
            />
          </Button>

          <Button>
            <Image
              src='/svg/iconLike'
              alt={`Icon compartilhar`}
              width={32}
              height={32}
            />
          </Button>
        </div>

        <Button
          variant='link'
          className='text-[color:var(--color-text-verde-agua)]'
        >
          mais infos
          <Image
            src='/svg/iconLike'
            alt={`Icon compartilhar`}
            width={32}
            height={32}
          />
        </Button>
      </div>
      <div className='flex gap-[6px]'>
        <CardInfoPrice
          deliveryFee={Boolean(deliveryFee)}
          rating={rating}
          deliveryPrice={deliveryPrice}
          outsourcedMotorcycle={outsourcedMotorcycle}
        />
        <p>hoje, 30-40 min</p>
        <p>5.2km</p>
      </div>
      <Button variant='secondary'>entrega grátis acima de R$ 35,00</Button>
      <div className='flex'>
        <Star rating={rating} />
        <p>fecha às 20:00</p>
      </div>
    </main>
  );
}
