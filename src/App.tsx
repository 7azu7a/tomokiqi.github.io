import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";

function App() {
  const elements = useRoutes(routes);

  return <React.Fragment>{elements}</React.Fragment>;
}

export default App;
