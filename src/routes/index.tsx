import React from "react";
import Header from "../components/Header";
import Top from "../components/Top";

const rootPath = [
  {
    path: "/",
    element: <Header />,
    children: [{ path: "/", element: <Top /> }],
  },
];

export default rootPath;
