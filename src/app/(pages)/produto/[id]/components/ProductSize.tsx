'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useTicket } from '@/contexts/TicketContext/TicketContext';
import { ProductPrice } from '@/components/ProductPrice/ProductPrice';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const SIZES = [
  { id: 'option-one', label: 'médio', price: 22.9, promo: 19.9 },
  { id: 'option-two', label: 'grande', price: 28.9 },
] as const;

type Size = (typeof SIZES)[number];

interface ProductSizeProps {
  productId: string;
  productName: string;
  establishmentId: string;
}

export default function ProductSize({
  productId,
  productName,
  establishmentId,
}: ProductSizeProps) {
  const { addItem, removeItem } = useTicket();
  const [selected, setSelected] = useState<Size>(SIZES[0]);

  const lineIdRef = useRef<string | null>(null);

  useEffect(() => {
    if (lineIdRef.current) {
      removeItem(lineIdRef.current);
    }

    const newLineId = addItem({
      establishmentId,
      productId,
      productName,
      basePrice: selected.price,
      qty: 1,
      options: [
        {
          groupId: 'size',
          groupName: 'qual o tamanho?',
          choiceId: selected.id,
          choiceName: selected.label,
          extraPrice: 0,
        },
      ],
      extras: [],
    });

    lineIdRef.current = newLineId;
  }, [selected, addItem, removeItem, establishmentId, productId, productName]);

  return (
    <div className='flex flex-col gap-4 px-4'>
      <div className='flex justify-between items-center'>
        <div className='flex flex-col gap-1'>
          <p className='text-[color:var(--color-text-title)]'>
            qual o tamanho?
          </p>
          <p className='text-sm text-zinc-500'>escolha 1</p>
        </div>

        <Badge
          variant='secondary'
          className='font-semibold h-8 text-white bg-[color:var(--color-text-title)] shadow-none'
        >
          obrigatório
        </Badge>
      </div>

      <RadioGroup
        value={selected.id}
        onValueChange={(val) =>
          setSelected(SIZES.find((s) => s.id === val) as Size)
        }
      >
        <div className='flex justify-between'>
          <div className='flex items-center gap-3'>
            <RadioGroupItem value='option-one' id='option-one' />
            <Image
              src='/svg/iconMoney.svg'
              alt='Ícone representando moeda'
              width={20}
              height={20}
            />
            <Label htmlFor='option-one'>médio</Label>
          </div>
          <ProductPrice
            showRow
            price={22.9}
            pricePromotion={19.9}
            priceClassName=''
          />
        </div>

        <div className='flex justify-between'>
          <div className='flex items-center gap-3'>
            <RadioGroupItem value='option-two' id='option-two' />
            <Label htmlFor='option-two'>grande</Label>
          </div>
          <ProductPrice price={28.9} />
        </div>
      </RadioGroup>
    </div>
  );
}
