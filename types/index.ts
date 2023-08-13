// These types represent the structure of product data used in your application.

// ProductType represents a single product.
export type ProductType = {
  id: number;
  title: string;
  price: number;
  description?: string;
  category?: string;
  image: string;
  rating?: { rate: number, count: number };
}

// ProductTypeList represents a list of products.
export type ProductTypeList = {
  id: number;
  title: string;
  price: number;
  description?: string;
  category?: string;
  image: string;
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
