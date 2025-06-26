'use client';

import { useState, useRef } from 'react';
import { useTicket } from '@/contexts/TicketContext/TicketContext';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

const ACCOMPANIMENTS = [
  { id: 'acomp-1', label: 'shoyu', price: 0 },
  { id: 'acomp-2', label: 'gengibre', price: 0 },
  { id: 'acomp-3', label: 'wasabi', price: 0 },
  { id: 'empty', label: 'sem acompanhamentos', price: 0 },
] as const;

type Acomp = (typeof ACCOMPANIMENTS)[number];

interface AccompanimentProps {
  productId: string;
  productName: string;
  establishmentId: string;
}
export default function Accompaniment({
  productId,
  productName,
  establishmentId,
}: AccompanimentProps) {
  const { addItem, removeItem } = useTicket();

  const [selected, setSelected] = useState<string[]>([]);

  const lineMapRef = useRef<Record<string, string>>({});

  const toggle = (acomp: Acomp) => {
    setSelected((prev) => {
      const isMarked = prev.includes(acomp.id);

      if (isMarked) {
        const newSel = prev.filter((x) => x !== acomp.id);
        const lineId = lineMapRef.current[acomp.id];
        if (lineId) removeItem(lineId);
        delete lineMapRef.current[acomp.id];
        return newSel;
      }

      if (acomp.id === 'empty') {
        prev.forEach((id) => {
          const lineId = lineMapRef.current[id];
          if (lineId) removeItem(lineId);
          delete lineMapRef.current[id];
        });

        const lineId = addItem({
          establishmentId,
          productId: `${productId}:empty`,
          productName: `${productName} – sem acompanhamentos`,
          basePrice: 0,
          qty: 1,
          options: [],
          extras: [],
        });
        lineMapRef.current['empty'] = lineId;
        return ['empty'];
      }

      let baseSel = prev;
      if (prev.includes('empty')) {
        const emptyLineId = lineMapRef.current['empty'];
        if (emptyLineId) removeItem(emptyLineId);
        delete lineMapRef.current['empty'];
        baseSel = prev.filter((id) => id !== 'empty');
      }

      if (baseSel.length >= 2) return baseSel;

      const lineId = addItem({
        establishmentId,
        productId: `${productId}:${acomp.id}`,
        productName: `${productName} – ${acomp.label}`,
        basePrice: acomp.price,
        qty: 1,
        options: [],
        extras: [],
      });
      lineMapRef.current[acomp.id] = lineId;
      return [...baseSel, acomp.id];
    });
  };

  return (
    <div className='flex flex-col gap-4 px-4'>
      <div className='flex items-center justify-between'>
        <div className='flex flex-col gap-1'>
          <p className='text-[color:var(--color-text-title)]'>
            acompanhamentos
          </p>
          <p className='text-sm text-zinc-500'>escolha 1 a 2</p>
        </div>
        <Badge
          variant='secondary'
          className='h-8 bg-[color:var(--color-text-title)] font-semibold text-white shadow-none'
        >
          obrigatório
        </Badge>
      </div>

      <div className='flex flex-col gap-4 space-y-3'>
        {ACCOMPANIMENTS.map((acomp) => {
          const checked = selected.includes(acomp.id);
          const emptySelected = selected.includes('empty');

          let disabled = false;
          if (acomp.id === 'empty') {
            disabled = false;
          } else {
            disabled = emptySelected || (!checked && selected.length >= 2);
          }

          return (
            <div key={acomp.id} className='flex items-center justify-between'>
              <div className='flex items-center gap-3'>
                <Checkbox
                  id={acomp.id}
                  checked={checked}
                  disabled={disabled}
                  onCheckedChange={() => toggle(acomp)}
                  className='border-2 shadow-none'
                />
                <Label htmlFor={acomp.id}>{acomp.label}</Label>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
