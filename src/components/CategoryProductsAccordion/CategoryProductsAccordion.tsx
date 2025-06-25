import React from 'react';
import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import type { Category } from '@/types/Category';
import type { Product } from '@/types/Product';
import { formatPrice } from '@/lib/utils/currency';

interface CategoryProductsAccordionProps {
  categories: Category[];
  products: Product[];
  onProductClick?: (product: Product) => void;
}

const CategoryProductsAccordion = (props: CategoryProductsAccordionProps) => {
  const { categories, products, onProductClick } = props;

  return (
    <Accordion type='single' collapsible className='w-full'>
      {categories.map((category) => {
        const categoryProducts = products.filter(
          (p) => p.categoryId === category.id
        );

        if (categoryProducts.length === 0) return null;

        return (
          <AccordionItem key={category.id} value={category.id}>
            <AccordionTrigger>{category.name}</AccordionTrigger>

            <AccordionContent>
              <ul className='flex flex-col gap-4'>
                {categoryProducts.map((product) => (
                  <li key={product.id}>
                    <button
                      onClick={() => onProductClick?.(product)}
                      className='flex w-full items-center gap-4 rounded-lg border p-4 transition-colors hover:bg-muted/50'
                    >
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={64}
                        height={64}
                        className='h-16 w-16 flex-none rounded-md object-cover'
                      />

                      <div className='flex flex-1 flex-col text-left'>
                        <span className='font-medium'>{product.name}</span>
                        {product.description && (
                          <span className='text-sm text-muted-foreground line-clamp-2'>
                            {product.description}
                          </span>
                        )}
                      </div>

                      <span className='whitespace-nowrap font-semibold'>
                        {formatPrice(product.price)}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export default CategoryProductsAccordion;
