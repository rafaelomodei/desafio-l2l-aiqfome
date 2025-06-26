'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTicket } from '@/contexts/TicketContext/TicketContext';
import { getEstablishment } from '@/lib/services/establishment';
import ProductCount from '@/components/ProductCount/ProductCount';
import { Button } from '@/components/ui/button';
import { ProductPrice } from '@/components/ProductPrice/ProductPrice';
import { TicketItem } from '@/contexts/TicketContext/interface';
import TicketEmpty from './component/TicketEmpty';
import { groupByEstablishment } from './utils';

export default function TicketView() {
  const { items, subtotal } = useTicket();
  const [estabInfo, setEstabInfo] = useState<
    Record<string, { name: string; image: string }>
  >({});

  useEffect(() => {
    const ids = [...new Set(items.map((i) => i.establishmentId))].filter(
      (id) => !estabInfo[id]
    );
    if (!ids.length) return;
    Promise.all(ids.map((id) => getEstablishment(id))).then((resp) => {
      const data = resp.reduce((acc, est) => {
        if (est) acc[est.id] = { name: est.name, image: est.image };
        return acc;
      }, {} as Record<string, { name: string; image: string }>);
      setEstabInfo((prev) => ({ ...prev, ...data }));
    });
  }, [items, estabInfo]);

  if (!items.length) return <TicketEmpty />;

  const groups = groupByEstablishment(items);

  return (
    <>
      {Object.entries(groups).map(([estabId, list]) => {
        const name = estabInfo[estabId]?.name ?? estabId;
        const logo = estabInfo[estabId]?.image ?? '/svg/iconPlaceholder.svg';

        const byProduct: Record<string, TicketItem[]> = list.reduce(
          (acc, it) => {
            const base = it.productId.split(':')[0];
            (acc[base] ??= []).push(it);
            return acc;
          },
          {} as Record<string, TicketItem[]>
        );

        return (
          <section key={estabId}>
            <div className='p-4'>
              <div className='flex gap-2 pb-2 items-center'>
                <div className='w-[36px] h-[36px] rounded overflow-hidden'>
                  <Image src={logo} alt='' width={36} height={36} />
                </div>
                <h3 className='font-bold text-xl truncate text-[color:var(--color-text-title)]'>
                  {name}
                </h3>
              </div>

              {Object.entries(byProduct).map(([baseId, prodList]) => {
                const parent = prodList.find((p) => p.productId === baseId);
                const addons = prodList.filter((p) => p.productId !== baseId);

                if (!parent) return null;

                return (
                  <div
                    key={parent.lineId}
                    className='border-b py-4 last:border-none'
                  >
                    <div className='flex justify-between'>
                      <h3 className='font-semibold'>{parent.productName}</h3>
                      <ProductPrice price={parent.basePrice} />
                    </div>

                    <div className='flex gap-8 items-center justify-end'>
                      <Link
                        href={`/produto/${parent.productId}`}
                        className='flex items-center gap-1 text-[color:var(--color-text-verde-agua)] text-sm'
                      >
                        <Image
                          src='/svg/iconEdit.svg'
                          alt=''
                          width={16}
                          height={16}
                        />
                        editar
                      </Link>
                      <ProductCount
                        productId={parent.productId}
                        productName={parent.productName}
                        establishmentId={parent.establishmentId}
                        basePrice={parent.basePrice}
                        size='sm'
                      />
                    </div>

                    <ul className='mt-1 ml-3 list-disc text-sm text-zinc-500 space-y-0.5'>
                      {parent.options.map((o) => (
                        <li key={o.choiceId}>{o.choiceName}</li>
                      ))}
                      {parent.extras.map((e) => (
                        <li key={e.id}>
                          {e.name}{' '}
                          {e.unitPrice > 0 && (
                            <span className='flex text-[color:var(--color-text-verde-agua)]'>
                              +
                              <ProductPrice
                                price={e.unitPrice}
                                priceClassName='text-sm text-[color:var(--color-text-verde-agua)]'
                              />
                            </span>
                          )}
                        </li>
                      ))}
                      {addons.map((ad) => (
                        <li key={ad.lineId} className='flex gap-2'>
                          {ad.productName}
                          {ad.basePrice > 0 && (
                            <span className='flex text-[color:var(--color-text-verde-agua)]'>
                              +
                              <ProductPrice
                                price={ad.basePrice}
                                priceClassName='text-sm text-[color:var(--color-text-verde-agua)]'
                              />
                            </span>
                          )}
                          {ad.note && (
                            <span className='flex w-full rounded-md bg-gray-400'>
                              {ad.note}
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>

                    {parent.note && (
                      <p className='mt-2 rounded bg-zinc-100 p-2 text-sm'>
                        <span className='font-semibold'>observação:</span>{' '}
                        {parent.note}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
            <div className='border-b-4' />
          </section>
        );
      })}
    </>
  );
}
