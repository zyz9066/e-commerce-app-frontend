import { useState } from "react";
import Router from "./router/Router";
import publicRoutes from "./router/routes/publicRoutes";

function App() {
  const [allRoutes, setAllRoute] = useState([...publicRoutes]);

  return (
    <Router allRoutes={allRoutes} />
  )
}

export default App;
