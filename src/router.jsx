import { createBrowserRouter } from "react-router-dom";
import Login, { loginAction } from "./features/identity/components/Login";
import Register, {
  registerAction,
} from "./features/identity/components/Register";
import IdentityLayout from "./layouts/identity-layout";

const router = createBrowserRouter([
  {
    element: <IdentityLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
        action: loginAction,
        errorElement: <Login />,
      },
      {
        path: "register",
        element: <Register />,
        action: registerAction,
        errorElement: <Register />,
      },
    ],
  },
]);

export default router;
