import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainLayout from "../components/shared/MainLayout";

// Auth Components
import SignupForm from "../components/auth/SignUp";
import LoginForm from "../components/auth/LoginForm";
import ForgotPasswordForm from "../components/auth/ForgotPasswordForm";
import VerificationForm from "../components/auth/VerificationForm";
import SetNewPasswordForm from "../components/auth/SetNewPasswordForm";

// Dashboard & Settings
import Dashboard from "../components/dashboard/Dashboard";
import ProfileSettings from "../components/settings";
import UserTable from "../components/users/UserTable";

// Route Guards
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // Public Routes
      {
        element: <PublicRoute />,
        children: [
          {
            index: true,
            element: <SignupForm />,
          },
          {
            path: "login",
            element: <LoginForm />,
          },
          {
            path: "forgot-password",
            element: <ForgotPasswordForm />,
          },
          {
            path: "verification-form/:email",
            element: <VerificationForm />,
          },
          {
            path: "set-new-password-form",
            element: <SetNewPasswordForm />,
          },
        ],
      },
      // Protected Routes
      {
        element: <PrivateRoute />,
        children: [
          {
            path: "dashboard",
            element: <MainLayout />,
            children: [
              {
                index: true,
                element: <Dashboard />,
              },
            ],
          },
          {
            path: "user-details",
            element: <MainLayout />,
            children: [
              {
                index: true,
                element: <UserTable />,
              },
            ],
          },
          {
            path: "setting",
            element: <MainLayout />,
            children: [
              {
                path: ":tab?",
                element: <ProfileSettings />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

export default router; 