import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./App.tsx";
import ProjectModule from "./modules/project/Index.tsx";
import ProjectHomePage from "./modules/project/pages/Home.tsx";
import HomeModule from "./modules/home/Index.tsx";
import LandingPage from "./modules/home/pages/Landing.tsx";
import HomePage from "./modules/home/pages/Home.tsx";
import AdminUserModule from "./modules/userAdmin/Index.tsx";
import "./index.css";
// import ProjectRouting from "./modules/project/Router.tsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <HomeModule />,
        children: [
          {
            path: "landing",
            element: <LandingPage />,
          },
          {
            path: "home",
            element: <HomePage />,
          }
        ],
      },
      {
        path: "projects",
        element: <ProjectModule />,
        children: [
          {
            path: "",
            element: <ProjectHomePage />,
          },
          {
            path: ":projectId",
            element: <h1>project con id</h1>,
          },
        ],
      },
      {
        path: "/contact",
        element: <h1>contact</h1>,
      },
      {
        path: "/admin",
        element: <AdminUserModule />,
        children: [
          {
            path: "home",
            element: <h1>panel en home</h1>,
          },
          {
            path: "proyectos",
            element: <h1>proyectos</h1>,
          },
        ]
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
