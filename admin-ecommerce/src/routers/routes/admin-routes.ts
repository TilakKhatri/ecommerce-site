import Dashboard from "@/pages/admin/dashboard/dashboard";
import Product from "@/pages/admin/product";
import User from "@/pages/admin/user";
import Login from "@/pages/auth/Login";

interface IAdminRoutes {
  id: string;
  path: string;
  component: React.FC;
  meta?: {
    adminLayout?: boolean;
    privateRoute?: boolean;
  };
}

const AdminRoutes: IAdminRoutes[] = [
  {
    id: "login",
    path: "/admin/login",
    component: Login,
    meta: {
      adminLayout: false,
      privateRoute: false,
    },
  },
  {
    id: "dashboard",
    path: "/admin/dashboard",
    component: Dashboard,
    meta: {
      adminLayout: true,
      privateRoute: true,
    },
  },

  {
    id: "product",
    path: "/admin/product",
    component: Product,
    meta: {
      adminLayout: true,
      privateRoute: true,
    },
  },

  {
    id: "user",
    path: "/admin/user",
    component: User,
    meta: {
      adminLayout: true,
      privateRoute: true,
    },
  },
];

export default AdminRoutes;
