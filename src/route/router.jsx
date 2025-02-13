import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SignupForm from "../components/SignUp";
import LoginForm from "../components/LoginForm";
import ForgotPasswordForm from "../components/ForgotPasswordForm";
import VerificationForm from "../components/VerificationForm";
import SetNewPasswordForm from "../components/SetNewPasswordForm";
import Dashboard from "../components/Dashboard";
import MainLayout from "./MainLayout";

import ProfileSettings from "../components/Settings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
        path: "verification-form",  
        element: <VerificationForm />,
      },
      {
        path: "set-new-password-form",  
        element: <SetNewPasswordForm />,
      },
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
        path: "setting",  
        element: <MainLayout />,  
        children: [
          {
            path: ":tab?", // Accepts optional `tab` parameter (e.g., /setting/edit-profile)
            element: <ProfileSettings />,
          },
        ],
      },
    ],
  },
]);

export default router;
