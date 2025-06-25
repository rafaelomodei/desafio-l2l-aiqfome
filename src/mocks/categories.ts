import type { Category } from '@/types/Category';

export const mockCategories: Category[] = [
  { id: 'niguiris', name: 'Niguiris', hasPromotion: true },
  {
    id: 'cevic',
    name: 'Ceviches',
    description:
      'Um prato super refrescante de peixe fatiado e marinado com limão',
  },
  {
    id: 'temakis',
    name: 'Temakis',
    description: 'Sushi em forma de cone com salmão e cream cheese',
  },
  { id: 'beverages', name: 'Bebidas' },
  { id: 'desserts', name: 'Sobremesas' },
];
