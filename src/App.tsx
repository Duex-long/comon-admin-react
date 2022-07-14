import { Navigate, useRoutes } from "react-router-dom";
import "./App.css";
import "antd/dist/antd.css";
import { lazy, Suspense } from "react";
import HomePage from "./pages/HomePage/HomePage";
import LayoutContainer from "./pages/Layout/Layout";

const App = () => {
  // const navigate = useNavigate();

  const routerRedirect = () => (
    <Navigate
      to={`/${sessionStorage.getItem("token") ? "main/userinfo" : "login"}`}
    />
  );

  const AsyncUnserInfoComponent = lazy(
    () => import("./pages/Layout/UserInfo/UserInfo")
  );
  const AsyncGroupInfoComponent = lazy(
    () => import("./pages/Layout/GroupInfo/GroupInfo")
  );

  const PromissionRoute = useRoutes([
    { path: "/", element: routerRedirect() },
    { path: "/login", element: <HomePage /> },
    {
      path: "/main/*",
      element: <LayoutContainer />,
      children: [
        {
          index: true,
          path: "userinfo",
          element: (
            <Suspense>
              <AsyncUnserInfoComponent />
            </Suspense>
          ),
        },
        {
          path:'groupinfo',
          element: (
            <Suspense>
              <AsyncGroupInfoComponent />
            </Suspense>
          ),
        }
      ],
    },
  ]);

  return <div className="App h-full w-full">{PromissionRoute}</div>;
};

export default App;
