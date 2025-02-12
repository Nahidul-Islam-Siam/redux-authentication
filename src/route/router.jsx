import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SignupForm from "../components/SignUp";
import LoginForm from "../components/LoginForm";
import ForgotPasswordForm from "../components/ForgotPasswordForm";
import VerificationForm from "../components/VerificationForm";
import SetNewPasswordForm from "../components/SetNewPasswordForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,  // This makes SignupForm render at "/"
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
        path: "set-new-password-form ",
        element: <SetNewPasswordForm />,
      },
    ],
  },
]);

export default router;
