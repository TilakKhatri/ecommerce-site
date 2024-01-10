import AdminRoutes from "./admin-routes";
import authRoutes from "./auth-routes";

const allRoutes = [...AdminRoutes, ...authRoutes];

export default allRoutes;
