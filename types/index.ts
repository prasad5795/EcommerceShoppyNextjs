// TO_BE_REMOVED
export type ProductType = {
  id: number;
  title: string;
  price: number;
  description?: string;
  category?: string;
  image: string;
  rating?: { rate: number, count: number };
}

export type ProductTypeList = {
  id: number;
  title: string;
  price: number;
  description?: string;
  category?: string;
  image: string;
  rating?: { rate: number, count: number };
}

export type ProductStoreType = {
  id: number;
  title: string;
  thumb: string;
  price: number;
  count: number;
}