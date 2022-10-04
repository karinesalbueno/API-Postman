import {BrowserRouter as Router, useRoutes} from "react-router-dom";
import Header from "./components/Header";

import ClientCategory from "./page/ClientCategory";
import Home from "./page/home";

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/category", element: <ClientCategory /> },
  ]);
  return routes;
};

const Routes = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default Routes;