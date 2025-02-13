import baseApi from "../baseApi";

const authApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        signup: build.mutation({
            query: (userData) => ({
                url: `user/create`,
                method: "POST",
                body: userData,
            })
        }),
        login: build.mutation({
            query: (credentials) => ({
                url: "/auth/login",
                method: "POST",
                body: credentials,
            })
        }),
        verifyEmail: build.mutation({
            query: (emailData) => ({
                url: "/user/auth/verify-email",
                method: "POST",
                body: emailData
            })
        }),
        resendVerificationCode: build.mutation({
            query: (resendCodeData) => ({
                url: "/user/auth/email-verification/resend-code",
                method: "POST",
                body: resendCodeData
            })
        }),
        sendForgetPasswordOTP: build.mutation({
            query: (email) => ({
                url: "/auth/forget-password/send-otp",
                method: "POST",
                body: email
            })
        }),
        verifyOTP: build.mutation({
            query: ({ email, code }) => ({
                url: "/auth/forget-password/verify-otp", // Ensure this URL is correct
                method: "POST",
                body: { email, code }
            })
        })
    }),
});

export const { 
    useSignupMutation, 
    useLoginMutation, 
    useVerifyEmailMutation, 
    useResendVerificationCodeMutation, 
    useSendForgetPasswordOTPMutation, 
    useVerifyOTPMutation 
} = authApi;

export default authApi;