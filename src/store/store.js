import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./slices/products/productSlice";

export const store = configureStore({
  reducer: {
    products: productSlice.reducer
  }
})