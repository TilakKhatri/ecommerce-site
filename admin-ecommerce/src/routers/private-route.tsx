// import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

// import { RootState } from "@/redux/store";

function PrivateRoute({ children }: { children: React.ReactNode }) {
  // Check login status
  //   const loginStatus = useSelector<RootState>((state) => state.user.loginStatus);
  const loginStatus = false;
  if (!loginStatus) {
    return <Navigate to="/admin/login" />;
  }

  return <>{children}</>;
}

export default PrivateRoute;
