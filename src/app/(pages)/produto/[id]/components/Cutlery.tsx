'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useTicket } from '@/contexts/TicketContext/TicketContext';
import { ProductPrice } from '@/components/ProductPrice/ProductPrice';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const CUTLERY = [
  { id: 'hashi', label: 'hashi', price: 0 },
  { id: 'garfo-faca-descartavel', label: 'garfo e faca descartável', price: 1 },
] as const;

type CutleryOption = (typeof CUTLERY)[number];

interface CutleryProps {
  productId: string;
  productName: string;
  establishmentId: string;
}

export default function Cutlery({
  productId,
  productName,
  establishmentId,
}: CutleryProps) {
  const { addItem, removeItem } = useTicket();
  const [selected, setSelected] = useState<CutleryOption | undefined>();

  const lineIdRef = useRef<string | null>(null);

  useEffect(() => {
    if (!selected) return;

    if (lineIdRef.current) removeItem(lineIdRef.current);

    const newLineId = addItem({
      establishmentId,
      productId: `${productId}:cutlery`,
      productName: `${productName} ${selected.label}`,
      basePrice: selected.price,
      qty: 1,
      options: [
        {
          groupId: 'cutlery',
          groupName: 'talheres',
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
      <div className='flex items-center justify-between'>
        <div className='flex flex-col gap-1'>
          <p className='text-[color:var(--color-text-title)]'>
            precisa de talheres?
          </p>
          <p className='text-sm text-zinc-500'>escolha 1</p>
        </div>
        <Badge
          variant='secondary'
          className='h-8 bg-[color:var(--color-text-title)] font-semibold text-white shadow-none'
        >
          obrigatório
        </Badge>
      </div>

      <RadioGroup
        value={selected?.id}
        onValueChange={(val) =>
          setSelected(CUTLERY.find((c) => c.id === val) as CutleryOption)
        }
      >
        {CUTLERY.map((c) => (
          <div key={c.id} className='flex items-center justify-between py-2'>
            <div className='flex items-center gap-3'>
              <RadioGroupItem value={c.id} id={c.id} />
              <Label htmlFor={c.id}>{c.label}</Label>
            </div>
            {Boolean(c.price) && <ProductPrice price={c.price} />}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}
