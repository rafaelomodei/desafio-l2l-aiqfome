'use client';

import Image from 'next/image';
import { CardInfoPriceProps } from './interface';

export function CardInfoPrice({
  freeShipping,
  shippingValue,
  outsourcedMotorcycle,
  rating,
}: CardInfoPriceProps) {
  const handleShipping = () => {
    if (freeShipping)
      return (
        <>
          <Image
            src='/svg/iconDeliveryMotorcycleFree.svg'
            width={24}
            height={24}
            alt='Ícone entrega grátis'
          />
          <p className='text-[color:var(--color-text-delivery-free)]'>grátis</p>
        </>
      );

    if (shippingValue && outsourcedMotorcycle)
      return (
        <>
          <Image
            src='/svg/iconDeliveryMotorcycle.svg'
            width={24}
            height={24}
            alt='Ícone entrega paga'
          />
          {shippingValue && <p className='text-primary'>{shippingValue}</p>}
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
        {shippingValue && <p className='text-primary'>{shippingValue}</p>}
      </>
    );
  };

  return (
    <div className='flex max-w-min items-center gap-1 text-xs font-bold'>
      {handleShipping()}
      <div className='flex items-center gap-1 text-muted-foreground ml-auto'>
        <Image
          src='/svg/iconStar.svg'
          width={24}
          height={24}
          alt='Ícone estrela'
        />
        <p>{rating}</p>
      </div>
    </div>
  );
}
