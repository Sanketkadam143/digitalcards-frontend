import { Navigate, useRoutes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Error from "./pages/Error/Error";
import NotFound from "./pages/404-Page/404";

interface RouteObject {
  title: string;
  path: string;
  element: JSX.Element;
  errorElement?: JSX.Element;
}

export const routes: RouteObject[] = [
  {
    title: "Home",
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    title: "Login",
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    title: "404",
    path: "/404",
    element: <NotFound />,
    errorElement: <Error />,
  },
  {
    title: "Error",
    path: "*",
    element: <Navigate to="/404" />,
    errorElement: <Error />,
  },
];

export default function Routing() {
  return useRoutes(routes);
}
