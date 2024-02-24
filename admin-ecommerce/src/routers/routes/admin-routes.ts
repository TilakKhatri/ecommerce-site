import { lazy } from "react";

const Dashboard = lazy(() => import("@/pages/admin/dashboard/dashboard"));
const Product = lazy(() => import("@/pages/merchant/product"));
const User = lazy(() => import("@/pages/admin/merchant"));
const Login = lazy(() => import("@/pages/auth/Login"));
const Category = lazy(() => import("@/pages/admin/category"));

interface IAdminRoutes {
  id: string;
  path: string;
  exact: boolean;
  component: React.FC;
  meta?: {
    appLayout?: boolean;
    privateRoute?: boolean;
  };
}

const AdminRoutes: IAdminRoutes[] = [
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
    path: "/admin/dashboard",
    exact: true,
    component: Dashboard,
    meta: {
      appLayout: true,
      privateRoute: true,
    },
  },

  {
    id: "product",
    path: "/admin/product",
    exact: true,
    component: Product,
    meta: {
      appLayout: true,
      privateRoute: true,
    },
  },

  {
    id: "merchant",
    path: "/admin/merchant",
    exact: true,
    component: User,
    meta: {
      appLayout: true,
      privateRoute: true,
    },
  },
  {
    id: "category",
    path: "/admin/category",
    exact: true,
    component: Category,
    meta: {
      appLayout: true,
      privateRoute: true,
    },
  },
];

export default AdminRoutes;
