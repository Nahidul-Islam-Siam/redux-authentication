import { configureStore } from "@reduxjs/toolkit";
import baseApi from "./api/baseApi";
import userReducer from './features/user/userSlice';

const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        user: userReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware),
});

export default store;