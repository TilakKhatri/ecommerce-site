import { BrowserRouter, Routes, Route } from "react-router-dom";

import AdminRoutes from "./routes/admin-routes";
import AdminLayout from "../layout/admin-layout";
import PrivateRoute from "./private-route";
import { Fragment } from "react";
import Home from "@/pages/home";
import PageNotFound from "@/pages/404";

interface IRoutes {
  id?: string;
  path?: string;
  component?: React.FC;
  meta?: {
    adminLayout?: boolean;
    privateRoute?: boolean;
  };
}
const getUserType = () => {
  const userType = "CUSTOMER";
  return userType;
};
const getLayoutWrapper = () => {
  switch (getUserType()) {
    case "ADMIN":
      return AdminLayout;
    default:
      return Fragment;
  }
};

const MergedLayoutRoute = ({
  route,
  children,
}: {
  route?: IRoutes;
  children?: React.ReactNode;
}) => {
  const PrivateRouteWrapper = route?.meta?.privateRoute
    ? PrivateRoute
    : Fragment;

  const LayoutWrapper = getLayoutWrapper();
  return (
    <PrivateRouteWrapper>
      <LayoutWrapper>{children}</LayoutWrapper>
    </PrivateRouteWrapper>
  );
};

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {AdminRoutes.map((route) => (
          <Route
            key={route.id}
            path={route.path}
            element={
              <MergedLayoutRoute route={route}>
                <route.component />
              </MergedLayoutRoute>
            }
          />
        ))}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
