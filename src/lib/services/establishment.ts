import { mockCategories } from '@/mocks/categories';
import { mockEstablishments } from '@/mocks/establishments';
import { mockProducts } from '@/mocks/products';
import { Category } from '@/types/Category';
import type { Product } from '@/types/Product';

export async function getEstablishment(
  id: string
): Promise<Establishment | null> {
  const establishment = mockEstablishments.find((e) => e.id === id);
  if (!establishment) return null;

  return establishment;
}

export async function getProductsByEstablishment(
  idEstablishment: string
): Promise<Product[] | null> {
  const products: Product[] = mockProducts.filter(
    (p) => p.establishmentId === idEstablishment
  );

  if (!products) return null;

  return products;
}

export async function getCategoriesByEstablishment(
  idEstablishment: string
): Promise<Category[] | null> {
  const categories: Category[] = mockCategories.filter(
    (c) => c.establishmentId === idEstablishment
  );

  if (!categories) return null;

  return categories;
}

export async function getProduct(id: string): Promise<Product | null> {
  return mockProducts.find((p) => p.id === id) ?? null;
}

export async function listEstablishments(): Promise<Establishment[]> {
  return mockEstablishments;
}
