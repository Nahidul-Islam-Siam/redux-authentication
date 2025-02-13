// services/authApi.js

import { api } from "../baseApi";


// Auth API Slice
export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // 🔹 User Registration
    registerUser: builder.mutation({
      query: (userData) => ({
        url: "/user/create",
        method: "POST",
        body: userData,
      }),
    }),

    // 🔹 User Login
    loginUser: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),

    // 🔹 Other auth-related endpoints can go here (e.g., forgot password, etc.)
  }),
});

// Export hooks to be used in components
export const { useRegisterUserMutation, useLoginUserMutation } = authApi;
