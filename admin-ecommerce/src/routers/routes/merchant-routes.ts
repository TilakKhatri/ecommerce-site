import { lazy } from "react";

const Login = lazy(() => import("@/pages/auth/Login"));
const Dashboard = lazy(() => import("@/pages/merchant/dashboard/dashboard"));
const Product = lazy(() => import("@/pages/merchant/product"));

interface IMerchantRoutes {
  id: string;
  path: string;
  exact: boolean;
  component: React.FC;
  meta?: {
    appLayout?: boolean;
    privateRoute?: boolean;
  };
}

const MerchantRoutes: IMerchantRoutes[] = [
  {
    id: "login",
    path: "/login",
    exact: true,
    component: Login,
    meta: {
      appLayout: false,
      privateRoute: false,
    },
  },
  {
    id: "dashboard",
    path: "/merchant/dashboard",
    exact: true,
    component: Dashboard,
    meta: {
      appLayout: true,
      privateRoute: true,
    },
  },

  {
    id: "product",
    path: "/merchant/product",
    exact: true,
    component: Product,
    meta: {
      appLayout: true,
      privateRoute: true,
    },
  },

  {
    id: "customer",
    path: "/merchant/customer",
    exact: true,
    component: Dashboard,
    meta: {
      appLayout: true,
      privateRoute: true,
    },
  },
  {
    id: "order",
    path: "/merchant/order",
    exact: true,
    component: Dashboard,
    meta: {
      appLayout: true,
      privateRoute: true,
    },
  },
];

export default MerchantRoutes;
