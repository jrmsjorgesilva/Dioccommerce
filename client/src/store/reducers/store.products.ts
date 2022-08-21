import { createSlice } from "@reduxjs/toolkit";

const products = createSlice({
  name: "product",
  initialState: {
    product: "",
  },
  reducers: {
    addProduct(state) {
      return state;
    },
    removeProduct(state) {
      return state;
    },
    getProduct(state) {
      return state;
    },
  },
});

export const { addProduct, removeProduct, getProduct } = products.actions;

export default products.reducer;
