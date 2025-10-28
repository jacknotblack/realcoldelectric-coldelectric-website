import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./screens/Home";
import { About } from "./screens/About";
import { Contact } from "./screens/Contact";
import { Products } from "./screens/Products";
import { ColdSub } from "./screens/ColdSub";
import { ColdZero } from "./screens/ColdZero";
import { ColdOg } from "./screens/ColdOg";
import { ColdOgTwo } from "./screens/ColdOgTwo";
import { MicroGrid } from "./screens/MicroGrid";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/coldsub",
    element: <ColdSub />,
  },
  {
    path: "/coldzero",
    element: <ColdZero />,
  },
  {
    path: "/coldog",
    element: <ColdOg />,
  },
  {
    path: "/coldogtwo",
    element: <ColdOgTwo />,
  },
  {
    path: "/microgrid",
    element: <MicroGrid />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
