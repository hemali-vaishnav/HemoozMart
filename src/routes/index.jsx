import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./defaultlayout";
import Home from "../components/home";
import Cart from "../components/cart";
import About from "../components/about";
import Favourite from "../components/favourite";
import Fashionpage from "../components/fashionpage";
import Signup from "../components/signup";
import AuthRoute from "./authrout";
import Login from "../components/login";

const router = createBrowserRouter([
    {
        path: '/signup/:id?',
        element: (
            <AuthRoute>
                <Signup />
            </AuthRoute>
        ),
    },
    {
        path: '/login',
        element: (
            <AuthRoute>
                <Login />
            </AuthRoute>
        ),
    },
    {
        path: "/",
        element: (
            <AuthRoute>
                <DefaultLayout />
            </AuthRoute>
        ),
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },

            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/favourite",
                element: <Favourite />
            },

            {
                path: "/fashionpage",
                element: <Fashionpage />
            }


        ]
    }
])
export default router;