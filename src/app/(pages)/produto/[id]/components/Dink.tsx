'use client';

import { ProductPrice } from '@/components/ProductPrice/ProductPrice';
import ProductCount from '@/components/ProductCount/ProductCount';

const DRINKS = [
  { id: 'coca-cola', label: 'coca-cola', price: 5 },
  { id: 'fanta-laranja', label: 'fanta laranja', price: 5 },
  { id: 'guarana-antarctica', label: 'guaraná antarctica', price: 5 },
  { id: 'suco-prats-laranja', label: 'suco prats laranja', price: 6 },
  { id: 'agua-sem-gas', label: 'água sem gás', price: 3 },
] as const;

interface DrinkListProps {
  productId: string;
  establishmentId: string;
}

export default function DrinkList({
  productId,
  establishmentId,
}: DrinkListProps) {
  return (
    <div className='flex flex-col gap-4 px-4'>
      <div className='flex items-center justify-between'>
        <div className='flex flex-col gap-1'>
          <p className='text-[color:var(--color-text-title)]'>
            vai querer bebida?
          </p>
          <p className='text-sm text-zinc-500'>escolha quantas quiser</p>
        </div>
      </div>

      <div className='space-y-3'>
        {DRINKS.map((drink) => (
          <div key={drink.id} className='flex items-center justify-between'>
            <div className='flex gap-4 items-center'>
              <ProductCount
                productId={`${productId}:drink:${drink.id}`}
                productName={drink.label}
                establishmentId={establishmentId}
                basePrice={drink.price}
                size='sm'
              />
              <span className='capitalize'>{drink.label}</span>
            </div>

            <div className='flex items-center gap-3'>
              <ProductPrice price={drink.price} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
