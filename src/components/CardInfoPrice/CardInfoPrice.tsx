'use client';

import Image from 'next/image';
import { CardInfoPriceProps } from './interface';
import { Star } from '../Star/Star';

export function CardInfoPrice({
  deliveryFee,
  deliveryPrice,
  outsourcedMotorcycle,
  rating,
}: CardInfoPriceProps) {
  const handleShipping = () => {
    if (deliveryFee)
      return (
        <>
          <Image
            src='/svg/iconDeliveryMotorcycleFree.svg'
            width={24}
            height={24}
            alt='Ícone entrega grátis'
          />
          <p className='text-[color:var(--color-text-verde-agua)]'>grátis</p>
        </>
      );

    if (deliveryPrice && outsourcedMotorcycle)
      return (
        <>
          <Image
            src='/svg/iconDeliveryMotorcycle.svg'
            width={24}
            height={24}
            alt='Ícone entrega paga'
          />
          {deliveryPrice && (
            <p className='flex min-w-max text-primary'>
              R$ {deliveryPrice.toFixed(2)}
            </p>
          )}
        </>
      );

    return (
      <>
        <Image
          src='/svg/iconDelivery.svg'
          width={24}
          height={24}
          alt='Ícone motoboy entrega paga'
        />
        {deliveryPrice && (
          <p className='flex min-w-max text-primary'>
            R$ {deliveryPrice.toFixed(2)}
          </p>
        )}
      </>
    );
  };

  return (
    <div className='flex max-w-min items-center gap-1 text-xs font-bold'>
      {handleShipping()}
      <Star rating={rating} />
    </div>
  );
}
