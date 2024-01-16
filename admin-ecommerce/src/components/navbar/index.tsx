import { useSelector } from "react-redux";

import { Bars3CenterLeftIcon } from "@heroicons/react/24/solid";
import UserMenu from "../usermenu";
import NotificationMenu from "../notificationmenu";

const NavBar = () => {
  return (
    <nav className="h-16 w-full ">
      <div className="flex justify-end items-center py-4 px-4">
        <div className="flex gap-3  items-center">
          <NotificationMenu />
          <UserMenu />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
