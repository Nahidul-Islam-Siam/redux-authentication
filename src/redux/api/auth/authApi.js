import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'https://outlet-appointment-booking.onrender.com/v1',
    }),
    endpoints: (builder) => ({
        signup: builder.mutation({
            query: (credentials) => ({
                url: '/signup',  
                method: 'POST',
                body: credentials,
            }),
        }),
        login: builder.mutation({
            query: (credentials) => ({
                url: "/auth/login",
                method: "POST",
                body: credentials,
                credentials: "omit"
            }),
      
        }),
        verifyEmail: builder.mutation({
            query: (emailData) => ({
                url: "/user/auth/verify-email",
                method: "POST",
                body: emailData
            })
        }),
        resendVerificationCode: builder.mutation({
            query: (resendCodeData) => ({
                url: "/user/auth/email-verification/resend-code",
                method: "POST",
                body: resendCodeData
            })
        }),

        sendForgetPasswordOTP: builder.mutation({
            query: (email) => ({
                url: "/auth/forget-password/send-otp",
                method: "POST",
                body: email
            })
        }),
        verifyOTP: builder.mutation({
            query: ({ email, code }) => ({
                url: "/user/auth/verify-email",
                method: "POST",
                body: { email, code }
            })
        }),
        forgotPassword: builder.mutation({
            query: (credentials) => ({
                url: "/auth/forget-password/send-otp",
                method: "POST",
                body: credentials
            }),
        }),
        resetPassword: builder.mutation({
            query: (credentials) => ({
                url: "/auth/reset-password",
                method: "POST",
                body: credentials
            }),
        }),
    }),
});

export const { 
    useSignupMutation,
    useLoginMutation,
    useVerifyEmailMutation,
    useSendForgetPasswordOTPMutation,
    useVerifyOTPMutation,
    useResendVerificationCodeMutation,
    useForgotPasswordMutation,
    useResetPasswordMutation
} = authApi;