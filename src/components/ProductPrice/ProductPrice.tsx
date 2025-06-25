import { cn } from '@/lib/utils';
import { formatPrice } from '@/lib/utils/currency';
import Image from 'next/image';

interface ProductPriceProps {
  price: number;
  priceRange?: boolean;
  pricePromotion?: number;
  showRow?: boolean;
}

export function ProductPrice(props: ProductPriceProps) {
  const { price, pricePromotion, priceRange, showRow } = props;

  if (pricePromotion)
    return (
      <div className='flex flex-col items-end'>
        <p className='flex text-sm font-semibold line-through '>
          {formatPrice(price)}
        </p>
        <div className='flex justify-center gap-1'>
          <Image
            src='/svg/iconMoney.svg'
            alt='Ícon representando moeda'
            width={20}
            height={20}
          />
          <p className='flex text-lg font-semibold text-[color:var(--color-success)]'>
            {formatPrice(price)}
          </p>
        </div>
      </div>
    );

  if (priceRange)
    return (
      <div
        className={cn(
          'flex flex-col gap-2 justify-end',
          showRow && 'flex-row items-center'
        )}
      >
        <p className='font-semibold'>a partir de</p>
        <p className='flex text-lg font-semibold text-primary'>
          {formatPrice(price)}
        </p>
      </div>
    );

  return (
    <p className='flex text-lg font-semibold text-primary'>
      {formatPrice(price)}
    </p>
  );
}
