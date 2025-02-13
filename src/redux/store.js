// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/baseApi";
import { authApi } from "./api/auth/authApi";



// Create the Redux store and add api slices
const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,  // Attach the base API
    [authApi.reducerPath]: authApi.reducer,  // Attach the auth API
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware, authApi.middleware),  // Add the middleware from both APIs
});

export default store;
