import { createBrowserRouter } from "react-router-dom";
import Login, { loginAction } from "./features/identity/components/Login";
import Register, {
  registerAction,
} from "./features/identity/components/Register";
import IdentityLayout from "./layouts/identity-layout";
import MainLayout from "./layouts/main-layout";
import Courses from "./pages/courses";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        element: <Courses />,
        index: true,
      },
    ],
  },
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
