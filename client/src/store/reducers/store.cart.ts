import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name: "cart",
  initialState: {
    counter: 0,
  },
  reducers: {
    add(state) {
      state.counter += 1;
    },
    subtract(state) {
      state.counter -= 1;
    },
  },
});

export const { add, subtract } = cart.actions;

export default cart.reducer;
