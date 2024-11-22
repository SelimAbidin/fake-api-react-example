import { createBrowserRouter } from "react-router-dom";
import { Login } from "./pages/login";
import { NotFound } from "./pages/not-found";
import { Products } from "./pages/products";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    // loader: rootLoader,
    // children: [
    // ],
  },
  {
    path: "/products",
    element: <Products />,
    // children: [
    //   {
    //     path: "team",
    //     element: <Team />,
    //     loader: teamLoader,
    //   },
    // ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
