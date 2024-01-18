import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from "../api/apiSlice";
import authReducer from "../features/auth/authSlice";
import rootReducer from "../features/root/rootSlice";
import productReducer from "../features/product/productSlice";
import shopReducer from "../features/shop/shopSlice";
import blogReducer from "../features/blog/blogSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    root: rootReducer,
    product: productReducer,
    shop: shopReducer,
    blog: blogReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: false,
});