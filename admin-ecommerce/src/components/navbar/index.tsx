import UserMenu from "../usermenu";
import NotificationMenu from "../notificationmenu";
import DarkModeSwitcher from "../ui/DarkModeSwitcher";
import { memo } from "react";

const NavBar = () => {
  return (
    <nav className="h-16 w-full ">
      <div className="flex justify-between md:justify-end items-center py-4 ">
        <div className="md:hidden">{/* <MobileSidebar /> */}</div>
        <div className="flex gap-3 items-center justify-center">
          <DarkModeSwitcher />
          <NotificationMenu />
          <UserMenu />
        </div>
      </div>
    </nav>
  );
};

export default memo(NavBar);
