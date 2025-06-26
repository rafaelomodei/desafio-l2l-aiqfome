import { cn } from '@/lib/utils';
import { formatPrice } from '@/lib/utils/currency';
import Image from 'next/image';

interface ProductPriceProps {
  price: number;
  priceRange?: boolean;
  pricePromotion?: number;
  showRow?: boolean;
  priceClassName?: string;
}

export function ProductPrice(props: ProductPriceProps) {
  const { price, pricePromotion, priceRange, showRow, priceClassName } = props;

  if (!showRow && pricePromotion)
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
          <p
            className={cn(
              'flex text-lg font-semibold text-[color:var(--color-success)]',
              priceClassName
            )}
          >
            {formatPrice(pricePromotion)}
          </p>
        </div>
      </div>
    );

  if (showRow && pricePromotion)
    return (
      <div className='flex items-center gap-1'>
        <p className='flex text-sm font-semibold '>
          de {formatPrice(price)} por
        </p>
        <div className='flex justify-center gap-1'>
          <Image
            src='/svg/iconMoney.svg'
            alt='Ícon representando moeda'
            width={20}
            height={20}
          />
          <p
            className={cn(
              'flex text-lg font-semibold text-[color:var(--color-success)]',
              priceClassName
            )}
          >
            {formatPrice(pricePromotion)}
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
        <p
          className={cn(
            `flex text-lg font-semibold text-primary ${priceClassName}`,
            showRow && 'text-xl font-black'
          )}
        >
          {formatPrice(price)}
        </p>
      </div>
    );

  return (
    <p
      className={cn('flex text-lg font-semibold text-primary', priceClassName)}
    >
      {formatPrice(price)}
    </p>
  );
}
