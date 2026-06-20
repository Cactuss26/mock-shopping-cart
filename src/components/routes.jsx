import { createBrowserRouter } from "react-router";
import App from "../App";
import { Home } from "./Home";
import { Shop } from "./Shop";
import { Cart } from "./Cart";

export const router = createBrowserRouter([
    {
        path: "/home",
        element: <App />,
        children: [
            { index: true, element: <Home />},
            { path: "cart", element: <Cart />},
            { path: "shop", element: <Shop />},
        ],
    },
]);