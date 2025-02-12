import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SignupForm from "../components/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,  // This makes SignupForm render at "/"
        element: <SignupForm />,
      },
    ],
  },
]);

export default router;
