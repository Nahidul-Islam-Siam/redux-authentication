import baseApi from '../baseApi';
import { API_ENDPOINTS } from '../../../config/api.config';

const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getUserProfile: builder.query({
            query: () => ({
                url: API_ENDPOINTS.USER.PROFILE,
                method: 'GET'
            }),
            providesTags: ['Profile']
        }),
        updateUserProfile: builder.mutation({
            query: (userData) => ({
                url: API_ENDPOINTS.USER.UPDATE_PROFILE,
                method: 'PATCH',
                body: userData
            }),
            invalidatesTags: ['Profile']
        })
    })
});

export const {
    useGetUserProfileQuery,
    useUpdateUserProfileMutation
} = userApi; 