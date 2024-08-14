import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../Features/CartSlicer";

export const store = configureStore({
  reducer: {
    cart: CartReducer
  }
});
