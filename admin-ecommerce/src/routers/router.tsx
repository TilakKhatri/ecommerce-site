import { Fragment, Suspense } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AdminRoutes from "./routes/admin-routes";
import MerchantRoutes from "./routes/merchant-routes";

import Login from "@/pages/auth/Login";
import Home from "@/pages/home";
import PrivateLayout from "./private-route";
import AppLayout from "@/layout/appLayout";
// import PageNotFound from "@/pages/404";

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
  const PrivateRouteWrapper = route?.meta?.privateRoute
    ? PrivateLayout
    : Fragment;

  return (
    <PrivateRouteWrapper>
      <AppLayout>{children}</AppLayout>
    </PrivateRouteWrapper>
  );
};

const Router = () => {
  const { loginStatus, user } = useSelector((state: any) => state.user);
  // console.log("loginStatus", loginStatus, "user", user);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {!loginStatus && !user.isAdmin && (
          <Route path="/login" element={<Login />} />
        )}
      </Routes>
      {/* change false to loginStatus after setting up login logic*/}

      <Routes>
        {loginStatus && user.role === "ADMIN"
          ? AdminRoutes.map((route) => (
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
            ))
          : MerchantRoutes.map((route) => (
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
            ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
