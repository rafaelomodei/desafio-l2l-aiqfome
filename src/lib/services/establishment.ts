import { mockCategories } from '@/mocks/categories';
import { mockEstablishments } from '@/mocks/establishments';
import { mockProducts } from '@/mocks/products';
import { Category } from '@/types/Category';
import type { Product } from '@/types/Product';

export async function getEstablishment(id: string): Promise<{
  establishment: Establishment;
  categories: Category[];
  products: Product[];
} | null> {
  const establishment = mockEstablishments.find((e) => e.id === id);
  if (!establishment) return null;

  const products = mockProducts.filter((p) => p.establishmentId === id);
  const categories = mockCategories.filter((c) => c.establishmentId === id);

  return {
    establishment,
    categories,
    products,
  };
}

export async function listEstablishments(): Promise<Establishment[]> {
  return mockEstablishments;
}
