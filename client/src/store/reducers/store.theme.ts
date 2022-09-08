import { createSlice } from "@reduxjs/toolkit";

const theme = createSlice({
  name: "theme",
  initialState: {
    themeState: [{}],
  },
  reducers: {
    background(state) {
      return state;
    },
    navigation(state) {
      return state;
    },
    footer(state) {
      return state;
    },
  },
});

export const { background, navigation, footer } = theme.actions;

export default theme.reducer;
