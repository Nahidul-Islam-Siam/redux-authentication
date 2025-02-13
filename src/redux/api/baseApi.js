import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

// Create base query with error handling
const baseQuery = fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL || "https://outlet-appointment-booking.onrender.com/v1",
    credentials: "include",
    prepareHeaders: (headers) => {
        const token = Cookies.get("auth_token");
        if (token) {
            headers.set("Authorization", `Bearer ${token}`);
        }
        return headers;
    }
});

// Add error handling wrapper
const baseQueryWithErrorHandling = async (args, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions);
    
    if (result.error) {
        // Handle specific error cases
        if (result.error.status === 401) {
            Cookies.remove("auth_token");
            toast.error("Session expired. Please login again.");
            window.location.href = "/login";
        } else if (result.error.data?.message) {
            toast.error(result.error.data.message);
        } else {
            toast.error("An error occurred. Please try again.");
        }
    }
    
    return result;
};

const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: baseQueryWithErrorHandling,
    tagTypes: ["User", "Settings", "Profile"],
    endpoints: () => ({}),
});

export const { useGetPostsQuery, useAddPostMutation } = baseApi;
export default baseApi;