'use client';

import { Button } from '@/components/ui/button';
import ProductCount from '@/components/ProductCount/ProductCount';
import { useTicket } from '@/contexts/TicketContext/TicketContext';

interface ProductActionsProps {
  productId: string;
  productName: string;
  establishmentId: string;
  basePrice: number;
}

export default function ProductActions({
  productId,
  productName,
  establishmentId,
  basePrice,
}: ProductActionsProps) {
  const { items, addItem, increment } = useTicket();

  const line = items.find((i) => i.productId.startsWith(productId));

  const handleAdd = () => {
    if (line) {
      increment(line.lineId);
    } else {
      addItem({
        establishmentId,
        productId,
        productName,
        basePrice,
        qty: 1,
        options: [],
        extras: [],
      });
    }
  };

  if (!line) {
    return (
      <Button
        variant='secondary'
        size='lg'
        onClick={handleAdd}
        className='
          bg-[color:var(--color-text)]
          hover:bg-[color:var(--color-text-input)]
          text-white
          transition-colors
        '
      >
        adicionar
      </Button>
    );
  }

  return (
    <ProductCount
      productId={productId}
      productName={productName}
      establishmentId={establishmentId}
      basePrice={basePrice}
    />
  );
}
