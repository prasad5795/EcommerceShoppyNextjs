/**
 * Redux Slice for Cart Management
 * This slice handles the state and actions related to the shopping cart.
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductStoreType } from 'types';

/**
 * Interface for the cart state in Redux store
 */
interface CartTypes {
  cartItems: ProductStoreType[];
}

/**
 * Initial state for the cart slice
 */
const initialState = {
  cartItems: [],
} as CartTypes;

/**
 * Utility function to find the index of a product with the same ID in the cart
 */
const indexSameProduct = (state: CartTypes, action: ProductStoreType) => {
  const sameProduct = (product: ProductStoreType) => product.id === action.id;
  return state.cartItems.findIndex(sameProduct);
};

/**
 * Payload type for adding a product to the cart
 */
type AddProductType = {
  product: ProductStoreType;
  count: number;
};

/**
 * Create a Redux slice for cart management
 */
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    /**
     * Add a product to the cart or update its count if it already exists
     */
    addProduct: (state, action: PayloadAction<AddProductType>) => {
      const cartItems = state.cartItems;
      const index = indexSameProduct(state, action.payload.product);

      if (index !== -1) {
        cartItems[index].count += action.payload.count;
        return;
      }

      state.cartItems.push(action.payload.product);
    },

    /**
     * Remove a product from the cart
     */
    removeProduct(state, action: PayloadAction<ProductStoreType>) {
      const indexToRemove = indexSameProduct(state, action.payload);
      if (indexToRemove !== -1) {
        state.cartItems.splice(indexToRemove, 1);
      }
    },

    /**
     * Set the count of a product in the cart
     */
    setCount(state, action: PayloadAction<AddProductType>) {
      const indexToUpdate = indexSameProduct(state, action.payload.product);
      if (indexToUpdate !== -1) {
        state.cartItems[indexToUpdate].count = action.payload.count;
      }
    },
  },
});

/**
 * Export individual actions and the reducer from the cart slice
 */
export const { addProduct, removeProduct, setCount } = cartSlice.actions;
export default cartSlice.reducer;
