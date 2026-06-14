import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Home";
import Shop from "../Shop";
import Cart from "../Cart";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "shop", element: <Shop /> },
      { path: "cart", element: <Cart /> },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
