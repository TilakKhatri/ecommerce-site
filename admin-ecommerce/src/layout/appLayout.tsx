import cn from "classnames";
import { useState, lazy } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

import { RootState } from "@/redux/store";

const NavBar = lazy(() => import("@/components/navbar"));
const Sidebar = lazy(() => import("@/components/sidebar"));

function AppLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const isToggle = () => setIsOpen(!isOpen);

  const { pathname } = useLocation();

  const loginStatus = useSelector<RootState>((state) => state.user.loginStatus);

  if (!loginStatus) {
    // console.log("false login");
    return <Navigate to="/login" />;
  }

  if (loginStatus && (pathname === "/login" || pathname === "/admin")) {
    // console.log("false login");
    return <Navigate to="/admin/dashboard" />;
  }
  console.log("from app layout");
  return (
    <div className={cn("dark:bg-boxdark-2 dark:text-bodydark")}>
      <div className="flex">
        <Sidebar isOpen={isOpen} isToggle={isToggle} />
        <div
          className={cn("flex flex-col w-full px-8", {
            "md:ml-72": !isOpen,
            "md:ml-20": isOpen,
          })}
        >
          <NavBar />
          <div className=" p-4 md:p-6 2xl:p-10">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
