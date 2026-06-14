import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Home";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [{ index: true, element: <Home /> }],
  },
];

const router = createBrowserRouter(routes);

export default router;
