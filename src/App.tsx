import React from "react";
import { useRoutes } from "react-router-dom";
import rootPath from "./routes";

function App() {
  const elements = useRoutes(rootPath);

  return <React.Fragment>{elements}</React.Fragment>;
}

export default App;
