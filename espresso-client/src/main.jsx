import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import AddCoffee from "./components/AddCoffee.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/add_coffee",
    element: <AddCoffee></AddCoffee>,
  },
  {
    path: "/update_coffee",
    element: <AddCoffee></AddCoffee>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);
