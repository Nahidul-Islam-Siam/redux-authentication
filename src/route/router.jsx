import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SignupForm from "../components/SignUp";
import LoginForm from "../components/LoginForm";
import ForgotPasswordForm from "../components/ForgotPasswordForm";
import VerificationForm from "../components/VerificationForm";
import SetNewPasswordForm from "../components/SetNewPasswordForm";
import Dashboard from "../components/Dashboard";
import MainLayout from "./MainLayout";

import UserTable from "../components/UserList";
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
        path: "verification-form/:email", 
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
        path: "user-details",  
        element: <MainLayout />,  
        children: [
          {
            index: true,  
            element: <UserTable/>,
          },
        ],
      },
      {
        path: "setting",  
        element: <MainLayout />,  
        children: [
          {
            path: "",  // Empty path for index route
            element: <ProfileSettings />,
          },
          {
            path: ":tab",  // This will handle /setting/edit-profile
            element: <ProfileSettings />,
          }
        ],
      },
    ],
  },
]);

export default router;
