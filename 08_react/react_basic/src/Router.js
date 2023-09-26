import {
  createBrowserRouter,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./11_Router/Header";
import Home from "./11_Router/Home";
import About from "./11_Router/About";
import NotFound from "./11_Router/404";
import User from "./11_Router/User";
import Redirect from "./11_Router/Redirect";
import UserDetail from "./11_Router/UserDetail";
import App from "./App";
import Error from "./11_Router/Error";
import Comment from "./11_Router/Comment";

/* ver.1
export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user" element={<User />} />
          <Route path="/user/:userId" element={<UserDetail />} />
          <Route path="/redirect" element={<Redirect />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
*/

// ver.2
const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/redirect",
        element: <Redirect />,
      },
    ],
    errorElement: <NotFound />,
  },
  {
    path: "/user",
    element: <App />,
    children: [
      {
        path: "",
        element: <User />,
      },
      {
        path: ":userId",
        element: <UserDetail />,
        children: [
          {
            path: "comment",
            element: <Comment />,
          },
        ],
      },
      {
        path: "redirect",
        element: <Redirect />,
      },
    ],
  },
]);

export default Router;
