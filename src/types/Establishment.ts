interface Establishment {
  id: string;
  name: string;
  image: string;
  rating: number;
  deliveryPrice: number;
  deliveryFee: boolean;
  freeDeliveryAbove?: number;
  distanceInKm: number;
  estimatedDeliveryTime: string;
  openingTime: string;
  closingTime: string;
  isOpen: boolean;
  minOrderValue: number;
  outsourcedMotorcycle: boolean;
  address: {
    point1: string;
    point2?: string;
  };
  categories: {
    id: string;
    name: string;
    hasPromotion?: boolean;
    description?: string;
  }[];
}
