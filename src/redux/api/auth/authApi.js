import baseApi from "../baseApi";


const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        singup: builder.mutation({
            query: (userData) => ({
                url: `/user/create`,
                method: "POST",
                body: userData,
                credentials: "omit"
            })
        }),
        login: builder.mutation({
            query: (credentials) => ({
                url: "/auth/login",
                method: "POST",
                body: credentials,
                credentials: "omit"
            })
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
        })
    }),
})


export const { useSingupMutation, useLoginMutation, useVerifyEmailMutation, resendCodeData, useSendForgetPasswordOTPMutation, useVerifyOTPMutation,  useResendVerificationCodeMutation } = authApi;
export default authApi;