import React from "react";
import { Navigate } from "react-router-dom";
import Layout from "layouts";
import TopPage from "components/pages/TopPage";
import NotFoundPage from "components/pages/NotFoundPage";

const routes = [
  {
    path: "portfolio",
    element: <Layout />,
    children: [
      { path: "top", element: <TopPage /> },
      { path: "/", element: <Navigate to="/portfolio/top" /> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "404", element: <NotFoundPage /> },
      { path: "/", element: <Navigate to="/portfolio/top" /> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
];

export default routes;
