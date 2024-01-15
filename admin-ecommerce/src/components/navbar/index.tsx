import { useSelector } from "react-redux";

import { Bars3CenterLeftIcon, UserIcon } from "@heroicons/react/24/solid";
import UserMenu from "../usermenu";
import NotificationMenu from "../notificationmenu";

const NavBar = () => {
  const { user } = useSelector((state: any) => state.user);
  return (
    <nav className="h-16 w-full ">
      <div className="flex justify-between items-center py-4 px-4">
        <div>
          <Bars3CenterLeftIcon width={24} height={24} />
        </div>
        <div className="flex gap-3  items-center">
          <NotificationMenu />
          <UserMenu />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
