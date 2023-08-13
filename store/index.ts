import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper';
import cartReducer from './reducers/cart';
import storage from 'redux-persist/lib/storage'
import {
  persistStore,
  persistReducer,
} from 'redux-persist'

// Combine all reducers
const reducer = {
  cart: cartReducer,
}

// Create a root reducer by combining all reducers
const rootReducer = combineReducers({
  cart: cartReducer,
})

// Create a Redux store with the initial reducer
let store = configureStore({ 
  reducer,
});

// Define a function to create the Redux store
const makeStore = ({ isServer }: { isServer: boolean }) => {
  if (isServer) {
    // If it's on the server side, create a store without persisting state
    return store = configureStore({ 
      reducer,
    });
  } else {
    // If it's on the client side, create a store with state persistence
    const persistConfig = {
      key: "shoppingcart",
      whitelist: ["cart"], // Only 'cart' will be persisted
      storage, // Use a storage mechanism (e.g., localStorage) for persisting state
    };

    // Create a new reducer with state persistence
    const persistedReducer = persistReducer(persistConfig, rootReducer);

    // Create the Redux store with the persisted reducer
    store = configureStore({ 
      reducer: persistedReducer,
    });

    // Attach the persistor object to the store for managing state persistence
    // @ts-ignore:next-line
    store.__persistor = persistStore(store);

    return store;
  }
};

// Create a Redux store wrapper using the provided makeStore function
// @ts-ignore:next-line
export const wrapper = createWrapper(makeStore, { debug: true });

// Define types for RootState and AppDispatch using the store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
