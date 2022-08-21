import { createSlice } from "@reduxjs/toolkit";

const posts = createSlice({
  name: "posts",
  initialState: {
    posts: "",
  },
  reducers: {
    addPosts(state) {
      return state;
    },
    deletePosts(state) {
      return state;
    },
    getPosts(state) {
      return state;
    },
    updatePosts(state) {
      return state;
    },
  },
});

export const { addPosts, deletePosts, getPosts, updatePosts } = posts.actions;

export default posts.reducer;
