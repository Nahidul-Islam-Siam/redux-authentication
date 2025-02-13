// services/api.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define the base URL
const BASE_URL = "https://outlet-appointment-booking.onrender.com/v1";

// Base API setup
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      // Retrieve the token from localStorage or Redux store
      const token = localStorage.getItem("accessToken");

      // If we have a token, include it in the headers
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      // Set the content type to JSON for POST requests
      headers.set("Content-Type", "application/json");

      return headers;
    },
  }),
  endpoints: (builder) => ({
    // Define any common endpoints or leave it empty for now
  }),
});

// Export the hooks for your components
export const { useGetQuery, usePostMutation } = api;  // Can be used for other general endpoints if needed
