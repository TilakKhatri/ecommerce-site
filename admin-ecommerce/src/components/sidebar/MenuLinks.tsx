import { useState } from "react";
import cn from "classnames";

import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { INavigation, ISubMenu } from "@/types/route";

const MenuLink = ({ menu }: { menu: INavigation }) => {
  const [dropDown, setDropDown] = useState<boolean>();

  const handleClick = (e: any) => {
    setDropDown(!dropDown);
  };

  return (
    <li onClick={() => setDropDown(!dropDown)} key={menu.id}>
      <button className="flex gap-x-4 items-center  py-4 text-gray-500 dark:text-gray-300 hover:text-darkAsscent dark:hover:text-primaryColor active:text-darkAsscent dark:active:text-primaryColor group w-full">
        <span className="absolute w-2 h-8   bg-darkAsscent dark:bg-primaryColor rounded-full left-0 scale-y-0 -translate-x-full  group-active:scale-y-100 group-active:translate-x-0 group-hover:scale-y-100 group-hover:translate-x-0 transition-transform ease-in-out" />
        <div className={cn("flex justify-between items-center w-full")}>
          <Link to={menu.path} onClick={handleClick}>
            <div className="flex gap-2">
              <span>{menu.icon}</span>
              {/* <span className={cn({ hidden: !isOpen },"whitespace-nowrap")}>{menu.name}</span> */}
            </div>
          </Link>
          {menu.hasSubMenus && (
            <ChevronDownIcon
              className={cn({ "rotate-180": dropDown }, "w-6 h-6 mr-2")}
            />
          )}
        </div>
      </button>
    </li>
  );
};

export default MenuLink;
