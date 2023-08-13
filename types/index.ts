// ProductType represents a single product.
export type ProductType = {
  id: number;
  title: string;
  price: number;
  image: string;
  description?: string;
  category?: string;
  rating?: { rate: number, count: number };
}

// ProductStoreType represents product data in the shopping cart.
export type ProductStoreType = {
  id: number;
  title: string;
  thumb: string;
  price: number;
  count: number;
}
