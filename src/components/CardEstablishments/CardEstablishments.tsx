'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { CardEstablishmentsProps } from './interface';
import { CardInfoPrice } from '../CardInfoPrice/CardInfoPrice';

export function CardEstablishments(props: CardEstablishmentsProps) {
  const {
    image,
    name,
    deliveryPrice,
    deliveryFee,
    rating,
    isOpen,
    outsourcedMotorcycle,
  } = props;

  return (
    <Card
      className={
        'flex flex-row gap-3 rounded-md h-18 items-center p-0 shadow-none border-none bg-[color:var(--color-background-card-product)]  cursor-pointer'
      }
    >
      <div className='relative w-18 h-18 shrink-0 rounded overflow-hidden'>
        <Image
          src={image}
          alt={`Imagem do restaurante ${name}`}
          fill
          className={cn('object-cover', !isOpen && 'opacity-50')}
        />
      </div>

      <CardContent className='p-0 flex flex-col justify-center w-full'>
        <h3 className='font-bold text-md truncate'>{name}</h3>

        <CardInfoPrice
          deliveryFee={Boolean(deliveryFee)}
          rating={rating}
          deliveryPrice={deliveryPrice}
          outsourcedMotorcycle={outsourcedMotorcycle}
        />
      </CardContent>
    </Card>
  );
}
