import { createBrowserRouter } from "react-router-dom";
import { Login } from "./pages/login";
import { NotFound } from "./pages/not-found";
import { Products } from "./pages/products";
import { Lists } from "./pages/lists";
import { AuthGuard, wrapWithAuthGuard } from "./guards/auth-guard";

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
    element: wrapWithAuthGuard(<Products />),
    // children: [
    //   {
    //     path: "team",
    //     element: <Team />,
    //     loader: teamLoader,
    //   },
    // ],
  },
  {
    path: "/lists",
    element: wrapWithAuthGuard(<Lists />),
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
