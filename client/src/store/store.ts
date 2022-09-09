import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/store.cart";
import productsReducer from "./reducers/store.products";
import postsReducer from "./reducers/store.posts";
import themeReducer from "./reducers/store.theme";
import langReducer from "./reducers/store.lang";

const store = configureStore({
  // todo
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    posts: postsReducer,
    theme: themeReducer,
    lang: langReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
