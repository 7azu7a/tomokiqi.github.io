import React from "react";
import Layout from "layouts";
import TopPage from "components/pages/TopPage";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "/", element: <TopPage /> }],
  },
];

export default routes;
