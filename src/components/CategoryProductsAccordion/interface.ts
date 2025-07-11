import { Category } from '@/types/Category';
import { Product } from '@/types/Product';

export interface CategoryProductsAccordionProps {
  categories: Category[] | null;
  products: Product[] | null;
}
