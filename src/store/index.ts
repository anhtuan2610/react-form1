import { configureStore } from "@reduxjs/toolkit";
import reducerProducts from "./slides/products";

const store = configureStore({
    reducer: {
        products: reducerProducts
    }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store

export default store;