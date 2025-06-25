import { Product } from '@/types/Product';

export const mockProducts: Product[] = [
  {
    id: 'p-niguiri-salmao',
    establishmentId: '1',
    categoryId: 'niguiris',
    name: 'Niguiri de Salmão',
    image: '/png/products/niguiri-salmao.png',
    price: 1290,
    rating: 4.8,
  },
  {
    id: 'p-temaki-filadelfia',
    establishmentId: '1',
    categoryId: 'temakis',
    name: 'Temaki Filadélfia',
    image: '/png/products/temaki-filadelfia.png',
    price: 1390,
  },

  {
    id: 'p-sub-steak',
    establishmentId: '2',
    categoryId: 'sandwiches',
    name: 'Steak Supreme 30 cm',
    image: '/png/products/sub-steak.png',
    price: 3490,
  },
  {
    id: 'p-coca-lata',
    establishmentId: '2',
    categoryId: 'beverages',
    name: 'Coca-Cola Lata 350 ml',
    image: '/png/products/coca-lata.png',
    price: 690,
  },
];
