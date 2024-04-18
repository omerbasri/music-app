import Home from "pages/Home";
import Login from "pages/Login";
import Register from "pages/Register";

const routes = [
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <Login />,
  },
];
export default routes;
