import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../layouts/RootLayout";
import PrivateLayout from "../layouts/PrivateLayout";
import SesionLayout from "../layouts/SesionLayout";
import HomeLayout from "../layouts/HomeLayout";

import NotFound from "../pages/NotFound";
import LogIn from "../pages/LogIn";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Info from "../pages/Info";
import Services from "../pages/Services";
import Us from "../pages/Us";
import Contact from "../pages/Contact";
import Configuration from "../pages/Configuration";
import ProfileLayout from "../layouts/ProfileLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        errorElement: <NotFound />,
        children: [
          {
            element: <HomeLayout />,
            children: [
              {
                index: true,
                element: <Home />,
                active: "true",
              },
              {
                path: "/services",
                element: <Services />,
              },
              {
                path: "/us",
                element: <Us />,
              },
              {
                path: "/contact",
                element: <Contact />,
              },
            ],
          },
          {
            path: "/priv",
            element: <PrivateLayout />,
            children: [
              {
                path: "/priv/profile",
                element: <ProfileLayout />,
                children: [
                  {
                    index: true,
                    element: <Info />,
                    active: "true",
                  },
                  {
                    path: "/priv/profile/config",
                    element: <Configuration />,
                  },
                ],
              },
            ],
          },
          {
            path: "/sesion",
            element: <SesionLayout />,
            children: [
              {
                path: "/sesion/register",
                element: <Register />,
              },
              {
                path: "/sesion/login",
                element: <LogIn />,
              },
            ],
          },
        ],
      },
    ],
  },
]);
