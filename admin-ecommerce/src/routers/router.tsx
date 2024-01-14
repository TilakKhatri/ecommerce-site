import { Fragment, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AdminRoutes from "./routes/admin-routes";
import Login from "@/pages/auth/Login";
import Home from "@/pages/home";
import PrivateLayout from "./private-route";
import AppLayout from "@/layout/appLayout";

interface IRoutes {
  id: string;
  path: string;
  exact: boolean;
  component: React.FC;
  meta?: {
    appLayout?: boolean;
    privateRoute?: boolean;
  };
}

const MergeLayoutRoute = ({
  children,
  route,
}: {
  children: React.ReactNode;
  route: IRoutes;
}) => {
  const AppLayoutWrapper = route.meta?.appLayout ? AppLayout : Fragment;
  const PrivateRouteWrapper = route.meta?.privateRoute
    ? PrivateLayout
    : Fragment;

  return route.meta?.privateRoute ? (
    <AppLayoutWrapper>{children}</AppLayoutWrapper>
  ) : (
    <PrivateRouteWrapper>{children}</PrivateRouteWrapper>
  );
};

const Router = () => {
  const { loginStatus, user } = useSelector((state: any) => state.user);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {/* change false to loginStatus after setting up login logic*/}
      {!loginStatus && !user.isAdmin ? (
        <Routes>
          <Route path="*" element={<Login />} />
        </Routes>
      ) : (
        <Routes>
          {AdminRoutes.map((route) => {
            return (
              <Route
                key={route.id}
                path={route.path}
                element={
                  <Suspense
                    fallback={
                      <div className="flex w-full h-[100vh] items-center justify-center">
                        Loading...
                      </div>
                    }
                  >
                    <MergeLayoutRoute route={route}>
                      <route.component />
                    </MergeLayoutRoute>
                  </Suspense>
                }
              />
            );
          })}
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default Router;
