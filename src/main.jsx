import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import CategoryGadget from "./components/CategoryGadget/CategoryGadget";
import AllGadget from "./components/AllGadget/AllGadget";
import GadgetDetails from "./components/GadgetDetails/GadgetDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [
          { path: "/", element: <AllGadget></AllGadget> },

          {
            path: "/:category",
            element: <CategoryGadget></CategoryGadget>,
          },
        ],
      },
      {
        path: "/:category/:gadgetId",
        element: <GadgetDetails></GadgetDetails>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
