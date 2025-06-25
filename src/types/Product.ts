export interface Product {
  id: string;
  categoryId: string;
  establishmentId: string;
  name: string;
  image: string;
  icon?: string;
  description?: string;
  price: number;
  pricePromotion?: number;
  priceRange?: boolean;
  rating?: number;
}
