
import { Navigate, useRoutes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Error from "./pages/Error/Error";
import NotFound from "./pages/404-Page/404";

export default function Routing() {

    interface RouteObject {
        path: string;
        element: JSX.Element;
        errorElement?: JSX.Element;
    }

    const routes:RouteObject[] = [
        {
            path: "/",
            element: <Home />,
            errorElement: <Error/>,
        },
        {
            path: "/login",
            element: <Login />,
            errorElement: <Error/>,
        },
        {
            path: "/404",
            element: <NotFound />,
            errorElement: <Error/>,
        },
        {
            path: "*",
            element: <Navigate to="/404" />,
            errorElement: <Error/>,
        },
    ]


    return useRoutes(routes);
}