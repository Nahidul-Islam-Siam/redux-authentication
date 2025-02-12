import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SignupForm from "../components/SignUp";
import LoginForm from "../components/LoginForm";
import ForgotPasswordForm from "../components/ForgotPasswordForm";

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
   path:"login" ,
        element: <LoginForm />,
      },
      {
        path:"forgot-password" ,
             element: <ForgotPasswordForm />,
           },
    ],
  },
]);

export default router;
