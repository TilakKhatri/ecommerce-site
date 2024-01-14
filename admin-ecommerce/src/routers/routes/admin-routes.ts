import Dashboard from "@/pages/admin/dashboard/dashboard";
import Product from "@/pages/admin/product";
import User from "@/pages/admin/user";
import Login from "@/pages/auth/Login";

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
    path: "/admin/login",
    exact: true,
    component: Login,
    meta: {
      appLayout: true,
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
    id: "user",
    path: "/admin/user",
    exact: true,
    component: User,
    meta: {
      appLayout: true,
      privateRoute: true,
    },
  },
];

export default AdminRoutes;
