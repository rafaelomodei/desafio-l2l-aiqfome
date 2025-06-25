import React from 'react';
import Link from 'next/link';
import { formatPrice } from '@/lib/utils/currency';
import { ProductListProps } from './interface';
import { ProductPrice } from '../ProductPrice/ProductPrice';
import Image from 'next/image';

const ProductList = (props: ProductListProps) => {
  const { products } = props;

  return (
    <ul className='flex flex-col gap-2'>
      {products.map((product) => (
        <li key={product.id}>
          <Link
            href={`/produto/${product.id}`}
            className='flex w-full items-center gap-4 rounded-sm py-3 px-2 transition-colors hover:bg-primary/5'
          >
            <div className='flex flex-1 flex-col text-left'>
              <div className='flex gap-1 items-center pb-1'>
                <p className='font-semibold text-[color:var(--color-text-title)]'>
                  {product.name}
                </p>
                {product.icon && (
                  <Image
                    src={product.icon}
                    alt={`ícon ${product.name}`}
                    width={20}
                    height={20}
                  />
                )}
              </div>
              {product.description && (
                <p className='text-md'>{product.description}</p>
              )}
            </div>

            <ProductPrice
              price={product.price}
              priceRange={product.priceRange}
              pricePromotion={product.pricePromotion}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
