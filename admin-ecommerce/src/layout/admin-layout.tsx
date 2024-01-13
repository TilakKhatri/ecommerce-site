// import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

// import { RootState } from "@/redux/store";
import Sidebar from "@/components/sidebar";

function AdminLayout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();

  //   const loginStatus = useSelector<RootState>((state) => state.user.loginStatus);
  const loginStatus = false;
  if (!loginStatus) {
    return <Navigate to="/admin/login" />;
  }

  if (loginStatus && pathname === "/admin") {
    return <Navigate to="/admin/dashboard" />;
  }

  return (
    <div className="flex gap-[6px] lg:gap-[32px] bg-neutral-50">
      <Sidebar className="max-w-[260px] shadow-md w-full flex-none sticky top-0 bg-shade-light" />

      <main className="grow p-12 rounded-lg overflow-auto bg-neutral-50">
        {children}
      </main>
    </div>
  );
}

export default AdminLayout;
