import Login from "@/pages/auth/Login";

interface IAuthRoutes {
  id: string;
  path: string;
  component: React.FC;
  meta: {
    adminLayout: boolean;
    privateRoute: boolean;
  };
}

const authRoutes: IAuthRoutes[] = [
  {
    id: "login",
    path: "/admin/login",
    component: Login,
    meta: {
      adminLayout: false,
      privateRoute: false,
    },
  },
];

export default authRoutes;
