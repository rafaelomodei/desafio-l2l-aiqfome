'use client';

import { useState, useRef } from 'react';
import { useTicket } from '@/contexts/TicketContext/TicketContext';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { ProductPrice } from '@/components/ProductPrice/ProductPrice';

const ADDONS = [
  { id: 'biscoito-da-sorte', label: 'biscoito da sorte', price: 2 },
  { id: 'rolinho-primavera', label: 'rolinho primavera', price: 8 },
  { id: 'guioza', label: 'guioza', price: 6 },
] as const;

type Addon = (typeof ADDONS)[number];

interface AnythingElseProps {
  productId: string;
  productName: string;
  establishmentId: string;
}

export default function AnythingElse({
  productId,
  productName,
  establishmentId,
}: AnythingElseProps) {
  const { addItem, removeItem } = useTicket();

  const [selected, setSelected] = useState<string[]>([]);
  const lineMapRef = useRef<Record<string, string>>({});

  const toggle = (addon: Addon) => {
    setSelected((prev) => {
      const isMarked = prev.includes(addon.id);

      if (isMarked) {
        const newSel = prev.filter((x) => x !== addon.id);
        const lineId = lineMapRef.current[addon.id];
        if (lineId) removeItem(lineId);
        delete lineMapRef.current[addon.id];
        return newSel;
      }

      const lineId = addItem({
        establishmentId,
        productId: `${productId}:addon:${addon.id}`,
        productName: `${productName} – ${addon.label}`,
        basePrice: addon.price,
        qty: 1,
        options: [],
        extras: [],
      });
      lineMapRef.current[addon.id] = lineId;
      return [...prev, addon.id];
    });
  };

  return (
    <div className='flex flex-col gap-4 px-4'>
      <div className='flex flex-col gap-1'>
        <p className='text-[color:var(--color-text-title)]'>algo a mais?</p>
        <p className='text-sm text-zinc-500'>adicione se quiser</p>
      </div>

      <div className='space-y-3'>
        {ADDONS.map((addon) => {
          const checked = selected.includes(addon.id);

          return (
            <div key={addon.id} className='flex items-center justify-between'>
              <div className='flex items-center gap-3'>
                <Checkbox
                  id={addon.id}
                  checked={checked}
                  onCheckedChange={() => toggle(addon)}
                  className='border-2 shadow-none'
                />
                <Label htmlFor={addon.id}>{addon.label}</Label>
              </div>

              <ProductPrice price={addon.price} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
