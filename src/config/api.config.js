export const API_CONFIG = {
    BASE_URL: import.meta.env.VITE_API_URL || "https://outlet-appointment-booking.onrender.com/v1",
    TIMEOUT: 30000,
    CREDENTIALS: "include",
    AUTH_TOKEN_KEY: "auth_token"
};

export const API_ENDPOINTS = {
    AUTH: {
        LOGIN: "/auth/login",
        SIGNUP: "/user/create",
        VERIFY_EMAIL: "/user/auth/verify-email",
        FORGOT_PASSWORD: "/auth/forget-password/send-otp",
        RESET_PASSWORD: "/auth/reset-password"
    },
    USER: {
        PROFILE: "/user/profile",
        UPDATE_PROFILE: "/user/profile/update",
        CHANGE_PASSWORD: "/user/change-password"
    },
    SETTINGS: {
        GET: "/settings",
        UPDATE: "/settings/update"
    }
}; 