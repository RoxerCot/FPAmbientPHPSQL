import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import UserContextProvider from "./context/UserContext";
import { Flowbite } from "flowbite-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Flowbite>
    <UserContextProvider>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </UserContextProvider>
  </Flowbite>
);
