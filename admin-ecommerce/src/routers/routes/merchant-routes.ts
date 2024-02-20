import { lazy } from "react";

const Dashboard = lazy(() => import("@/pages/admin/dashboard/dashboard"));

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
    component: Dashboard,
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
