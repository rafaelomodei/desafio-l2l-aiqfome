import { Category } from '@/types/Category';

export const mockCategories: Category[] = [
  {
    id: 'niguiris',
    establishmentId: '1',
    name: 'Niguiris',
    hasPromotion: true,
  },
  { id: 'temakis', establishmentId: '1', name: 'Temakis' },
  { id: 'sandwiches', establishmentId: '2', name: 'Sanduíches' },
  { id: 'beverages', establishmentId: '2', name: 'Bebidas' },
  { id: 'burgers', establishmentId: '4', name: 'Burgers' },
  { id: 'drinks', establishmentId: '4', name: 'Bebidas' },
  { id: 'burgers-bk', establishmentId: '3', name: 'Burgers' },
  { id: 'combos-bk', establishmentId: '3', name: 'Combos', hasPromotion: true },
  { id: 'desserts-bk', establishmentId: '3', name: 'Sobremesas' },
  { id: 'drinks-bk', establishmentId: '3', name: 'Bebidas' },
];
