import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SignupForm from "../components/SignUp";
import LoginForm from "../components/LoginForm";
import ForgotPasswordForm from "../components/ForgotPasswordForm";
import VerificationForm from "../components/VerificationForm";
import SetNewPasswordForm from "../components/SetNewPasswordForm";
import Dashboard from "../components/Dashboard";
import MainLayout from "./MainLayout";
import EditProfile from "../components/Settings";  // Ensure this component is correctly imported

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,  // Signup page without Navbar
        element: <SignupForm />,
      },
      {
        path: "login",  // Login page without Navbar
        element: <LoginForm />,
      },
      {
        path: "forgot-password",  // Forgot Password page without Navbar
        element: <ForgotPasswordForm />,
      },
      {
        path: "verification-form",  // Verification page without Navbar
        element: <VerificationForm />,
      },
      {
        path: "set-new-password-form",  // Set New Password page without Navbar
        element: <SetNewPasswordForm />,
      },
      {
        path: "dashboard",  // Dashboard page with Navbar
        element: <MainLayout />,  // Using MainLayout to include Navbar
        children: [
          {
            index: true,  // Default route for Dashboard
            element: <Dashboard />,
          },
        ],
      },
      {
        path: "setting",  // Settings page with Navbar (separate from /dashboard)
        element: <MainLayout />,  // Using MainLayout to include Navbar
        children: [
          {
            index: true,
            element: <EditProfile />,  // Settings page will render here
          },
        ],
      },
    ],
  },
]);

export default router;
