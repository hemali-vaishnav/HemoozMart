import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./defaultlayout";
import Home from "../components/home";
import Cart from "../components/cart";
import About from "../components/about";
import Favourite from "../components/favourite";
import Account from "../components/account";
import Fashionpage from "../components/fashionpage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
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
                path: "/account",
                element: <Account />
            },
            {
                path: "/fashionpage",
                element: <Fashionpage />
            }
            

        ]
    }
])
export default router;