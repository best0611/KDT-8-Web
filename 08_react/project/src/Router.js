import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Nav from "./Router_Practice/Nav";
import Student from "./Router_Practice/Student";
import User from "./Router_Practice/User";
import RealName from "./Router_Practice/RealName";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Nav />,
      },
    ],
  },
  {
    path: "/student",
    element: <Student />,
    children: [
      {
        path: ":name",
        element: <User />,
        children: [
          {
            path: ":",
            element: <RealName />,
          },
        ],
      },
    ],
  },
]);

export default Router;
