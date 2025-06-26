'use client';

import { useTicket } from '@/contexts/TicketContext/TicketContext';
import { Plus, Minus, Trash } from 'lucide-react';

const ProductList = () => {
  const { items, subtotal, increment, decrement, removeItem } = useTicket();

  if (items.length === 0) {
    return (
      <p className='mt-8 text-center text-zinc-500'>
        Seu ticket está vazio <span className='text-lg'>😔</span>
      </p>
    );
  }

  return (
    <section className='space-y-6 text-red-700'>
      {/* linhas do ticket */}
      {items.map((item) => (
        <div
          key={item.lineId}
          className='flex items-center justify-between border-b pb-4 last:border-none'
        >
          <div>
            <h3 className='font-semibold'>{item.productName}</h3>
            <p className='text-sm text-zinc-500'>
              {item.basePrice.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </p>
          </div>

          <div className='flex items-center gap-2'>
            {/* diminuir */}
            <button
              onClick={() => decrement(item.lineId)}
              className='grid h-8 w-8 place-content-center rounded-full border'
            >
              <Minus size={16} />
            </button>

            {/* quantidade */}
            <span className='w-6 text-center tabular-nums'>{item.qty}</span>

            {/* aumentar */}
            <button
              onClick={() => increment(item.lineId)}
              className='grid h-8 w-8 place-content-center rounded-full border'
            >
              <Plus size={16} />
            </button>

            {/* remover */}
            <button
              onClick={() => removeItem(item.lineId)}
              className='grid h-8 w-8 place-content-center rounded-full border text-red-500'
            >
              <Trash size={16} />
            </button>
          </div>
        </div>
      ))}

      {/* subtotal */}
      <div className='flex justify-between pt-4 text-lg font-bold'>
        <span>Subtotal</span>
        <span>
          {subtotal.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </span>
      </div>
    </section>
  );
};

export default ProductList;
