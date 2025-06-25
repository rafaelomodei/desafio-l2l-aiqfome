import { mockEstablishments } from '@/mocks/establishments';
import { mockProducts } from '@/mocks/products';
import type { Product } from '@/types/Product';

export async function getEstablishment(id: string): Promise<{
  establishment: Establishment;
  categories: Establishment['categories'];
  products: Product[];
} | null> {
  const establishment = mockEstablishments.find((e) => e.id === id);
  if (!establishment) return null;

  return {
    establishment,
    categories: establishment.categories,
    products: mockProducts,
  };
}

export async function listEstablishments(): Promise<Establishment[]> {
  return mockEstablishments;
}
