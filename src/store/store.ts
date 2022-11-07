import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "../slices/favoriteSlice";
import productsReducer from "../slices/productsSlice";

const store = configureStore({
  reducer: {
    favorite: favoriteReducer,
    products: productsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
