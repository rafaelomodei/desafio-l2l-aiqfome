export interface Product {
  id: string;
  categoryId: string;
  name: string;
  image: string;
  description?: string;
  price: number;
  rating?: number;
}
