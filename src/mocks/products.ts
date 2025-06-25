import type { Product } from '@/types/Product';

export const mockProducts: Product[] = [
  {
    id: 'niguiri-salmao',
    categoryId: 'niguiris',
    name: 'Niguiri de Salmão',
    image: '/png/products/niguiri-salmao.png',
    description: 'Arroz temperado coberto com lâmina de salmão fresco.',
    price: 1290,
    rating: 4.8,
  },
  {
    id: 'niguiri-atum',
    categoryId: 'niguiris',
    name: 'Niguiri de Atum',
    image: '/png/products/niguiri-atum.png',
    description: 'Atum fresco sobre bolinho de arroz.',
    price: 1190,
    rating: 4.7,
  },

  {
    id: 'ceviche-salmao',
    categoryId: 'cevic',
    name: 'Ceviche de Salmão',
    image: '/png/products/ceviche-salmao.png',
    description:
      'Cubos de salmão marinados no limão com coentro e cebola-roxa.',
    price: 2890,
    rating: 4.9,
  },
  {
    id: 'ceviche-tilapia',
    categoryId: 'cevic',
    name: 'Ceviche de Tilápia',
    image: '/png/products/ceviche-tilapia.png',
    description:
      'Versão suave com tilápia, pimenta dedo-de-moça e milho verde.',
    price: 2490,
    rating: 4.6,
  },

  {
    id: 'sub-steak-supreme',
    categoryId: 'sandwiches',
    name: 'Steak Supreme 30 cm',
    image: '/png/products/sub-steak.png',
    description: 'Pão integral, queijo, alcatra grelhada e mix de vegetais.',
    price: 3490,
    rating: 4.5,
  },
  {
    id: 'sub-frango-teriyaki',
    categoryId: 'sandwiches',
    name: 'Frango Teriyaki 15 cm',
    image: '/png/products/sub-frango.png',
    description: 'Frango em cubos ao molho teriyaki, queijo prato e salada.',
    price: 2190,
  },

  {
    id: 'coca-lata',
    categoryId: 'beverages',
    name: 'Coca-Cola Lata 350 ml',
    image: '/png/products/coca-lata.png',
    price: 690,
  },
  {
    id: 'suco-laranja',
    categoryId: 'beverages',
    name: 'Suco Natural de Laranja 500 ml',
    image: '/png/products/suco-laranja.png',
    price: 990,
  },

  {
    id: 'bk-whopper-combo',
    categoryId: 'combos',
    name: 'Combo Whopper',
    image: '/png/products/whopper-combo.png',
    description: 'Whopper + batata média + refri 400 ml.',
    price: 3290,
    rating: 4.7,
  },

  {
    id: 'bk-sundae',
    categoryId: 'desserts',
    name: 'Sundae de Chocolate',
    image: '/png/products/sundae.png',
    price: 890,
  },

  {
    id: 'mc-bigmac',
    categoryId: 'burgers',
    name: 'Big Mac®',
    image: '/png/products/bigmac.png',
    description: 'O clássico com molho especial, dois hambúrgueres e queijo.',
    price: 1990,
    rating: 4.8,
  },
  {
    id: 'mc-quarter-pounder',
    categoryId: 'burgers',
    name: 'Quarterão',
    image: '/png/products/quarterao.png',
    price: 2190,
  },

  {
    id: 'mc-milkshake-oreo',
    categoryId: 'drinks',
    name: 'Milk-shake Oreo 400 ml',
    image: '/png/products/milkshake-oreo.png',
    price: 1490,
  },
  {
    id: 'mc-refri-guarana',
    categoryId: 'drinks',
    name: 'Guaraná 500 ml',
    image: '/png/products/guarana.png',
    price: 790,
  },
];
