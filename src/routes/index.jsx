import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./defaultlayout";
import Home from "../components/home";
import Cart from "../components/cart";
import About from "../components/about";
import Favourite from "../components/favourite";
import Fashionpage from "../components/fashionpage";
import Signup from "../components/signup";

const router = createBrowserRouter([
    {
        path: "/",
        element: localStorage.getItem("isLogin") === "true" ? <DefaultLayout /> : <Signup />
    },
    {
        path: "/",
        element: localStorage.getItem("isLogin") === "true" ? <DefaultLayout /> : <Signup/>,
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