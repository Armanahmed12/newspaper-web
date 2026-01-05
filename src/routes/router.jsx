
import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../components/CategoryNews";
import AuthLayout from "../layouts/AuthLayout";
import LogIn from "../pages/LogIn";
import Register from "../pages/Register";
import NewsDetails from "../pages/NewsDetails"
import PrivateRoute from "../provider/PrivateRoute"

 const router = createBrowserRouter([
    {

        path : "/",
        element : <HomeLayout></HomeLayout>,
        children : [
            {
                path : "/",
                element: <Home></Home>
            },
            {
                path : "/category/:id",
                element : <CategoryNews/>,
                loader : () => fetch("/news.json")
            }
        ]
    },
    {
        path : "/auth",
        element: <AuthLayout></AuthLayout>,
        children : [
            {
                path : "/auth/logIn",
                element : <LogIn></LogIn>
            },
            {
                path : "/auth/register",
                element: <Register></Register>
            }
        ]
    },
    {
        path: "/news-details/:id",
        element: <PrivateRoute>
            <NewsDetails></NewsDetails>
        </PrivateRoute>,
        loader : ()=> fetch('/news.json')
    }
 
   
]);
export default router;
