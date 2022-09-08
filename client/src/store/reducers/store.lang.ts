import { createSlice } from "@reduxjs/toolkit";

const lang = createSlice({
  name: "lang",
  initialState: {
    langState: [],
  },
  reducers: {
    portuguese(state) {
      return state;
    },
    another(state) {
      return state;
    },
  },
});

export const { portuguese, another } = lang.actions;

export default lang.reducer;
