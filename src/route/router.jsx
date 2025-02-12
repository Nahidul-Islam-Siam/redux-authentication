import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SignupForm from "../components/SignUp";
import LoginForm from "../components/LoginForm";

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
    ],
  },
]);

export default router;
