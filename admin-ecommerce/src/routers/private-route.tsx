import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { RootState } from "@/redux/store";

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const loginStatus = useSelector<RootState>((state) => state.user.loginStatus);

  if (!loginStatus) {
    return <Navigate to="/admin/login" />;
  }

  return <>{children}</>;
}

export default PrivateRoute;
