'use client';

import Image from 'next/image';
import { useTicket } from '@/contexts/TicketContext/TicketContext';
import { Button } from '@/components/ui/button';

interface ProductCountProps {
  productId: string;
  productName: string;
  establishmentId: string;
  basePrice: number;
  size?: 'md' | 'sm';
}

export default function ProductCount({
  productId,
  productName,
  establishmentId,
  basePrice,
  size = 'md',
}: ProductCountProps) {
  const { items, addItem, increment, decrement, removeItem } = useTicket();

  const item = items.find((i) => i.productId === productId);
  const qty = item?.qty ?? 0;
  const iconSz = size === 'sm' ? 24 : 36;

  const handleMinus = () => {
    if (!item) return;
    if (item.qty === 1) {
      removeItem(item.lineId);
    } else {
      decrement(item.lineId);
    }
  };

  const handlePlus = () => {
    if (!item) {
      addItem({
        establishmentId,
        productId,
        productName,
        basePrice,
        qty: 1,
        options: [],
        extras: [],
      });
    } else {
      increment(item.lineId);
    }
  };

  return (
    <div className='flex items-center gap-2'>
      <Button
        onClick={handleMinus}
        disabled={!item}
        variant='outline'
        className='flex items-center justify-center rounded-full p-0 border-none shadow-none'
      >
        {item && item.qty > 1 && (
          <Image
            src='/svg/iconMinus.svg'
            alt='menos'
            width={iconSz}
            height={iconSz}
          />
        )}
        {item && item.qty === 1 && (
          <Image
            src='/svg/iconTrash.svg'
            alt='lixeira'
            width={iconSz}
            height={iconSz}
          />
        )}
        {!item && (
          <Image
            src='/svg/iconMinusDisabled.svg'
            alt='menos desabilitado'
            width={iconSz}
            height={iconSz}
          />
        )}
      </Button>

      <span className='w-6 text-center tabular-nums text-[color:var(--color-text-title)]'>
        {qty}
      </span>

      <Button
        onClick={handlePlus}
        variant='outline'
        className='rounded-full p-0 border-none shadow-none'
      >
        <Image
          src='/svg/iconAdd.svg'
          alt='mais'
          width={iconSz}
          height={iconSz}
        />
      </Button>
    </div>
  );
}
