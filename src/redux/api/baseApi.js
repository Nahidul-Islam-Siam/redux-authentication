import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://outlet-appointment-booking.onrender.com/v1",
        credentials: "include",
        prepareHeaders: (headers) => {
            const token = Cookies.get("auth_token");

            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }

            return headers;
        }
    }),
    endpoints: () => ({}),
});

export const { useGetPostsQuery, useAddPostMutation } = baseApi;
export default baseApi;