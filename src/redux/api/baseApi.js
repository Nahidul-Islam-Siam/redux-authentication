// services/api.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define the base URL
const BASE_URL = "https://outlet-appointment-booking.onrender.com/v1";

// Base API setup
export const api = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,

  }),
  endpoints: () => ({
    // Define any common endpoints or leave it empty for now
  }),
});

export const {} = api;
export default api;