import React from 'react';
import Image from 'next/image';
import { formatPrice } from '@/lib/utils/currency';
import Link from 'next/link';
import { CategoryProductsAccordionProps } from './interface';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import ProductList from '../ProductList/ProductList';

const CategoryProductsAccordion = (props: CategoryProductsAccordionProps) => {
  const { categories, products } = props;

  return (
    <Accordion type='single' collapsible className='w-full'>
      {categories?.map((category) => {
        const categoryProducts = products?.filter(
          (p) => p.categoryId === category.id
        );

        if (categoryProducts?.length === 0) return null;

        return (
          <AccordionItem
            key={category.id}
            value={category.id}
            className='border-b-4'
          >
            <AccordionTrigger className=' font-semibold text-[color:var(--color-text-title)]'>
              <div className='flex items-center gap-1'>
                {category.name}
                {category.hasPromotion && (
                  <Image
                    src='/svg/iconMoney.svg'
                    alt='Ícon representando moeda'
                    width={24}
                    height={24}
                  />
                )}
              </div>
            </AccordionTrigger>

            <AccordionContent>
              {products?.length && <ProductList products={products} />}
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export default CategoryProductsAccordion;
