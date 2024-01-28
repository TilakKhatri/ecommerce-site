import { useState } from "react";
import {
  ArrowDownLeftIcon,
  // PlusIcon,
  ArrowRightOnRectangleIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
import cn from "classnames";

import logo from "@/assets/Icon.svg";

import {
  customerCareLink,
  navigationLinks,
} from "@/navigation/admin-navigation";

import { resetLogin } from "@/redux/slices/user-slice";

function Sidebar({
  className,
  isOpen,
  isToggle,
}: {
  className?: string;
  isOpen: Boolean;
  isToggle: () => void;
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const handleLogout = () => {
    dispatch(resetLogin());
    navigate("/login");
    navigate(0);
  };

  // className="max-w-[260px] shadow-md w-full flex-none sticky top-0 bg-shade-light"

  return (
    <>
      <aside
        className={cn(
          {
            "md:w-20 transition-all delay-50": isOpen,
            "md:w-72 transition-all delay-50": !isOpen,
          },
          className,
          "dark:bg-boxdark-2 dark:text-bodydark hidden md:fixed md:inset-y-0 z-10 md:flex md:flex-col md:justify-between h-screen bg-white transition-all shadow-graydark shadow-md"
        )}
      >
        <div className="px-5">
          <div className="mt-4 flex justify-between items-center">
            <div className={cn({ hidden: isOpen })}>
              <Link to="/">
                <img src={logo} alt="logo" className="" />
              </Link>
            </div>
            <div className="cursor-pointer text-core-secondary ">
              <ArrowLeftCircleIcon
                className={cn(
                  {
                    "rotate-180 ml-2 transition delay-10  text-core-indigo":
                      isOpen,
                  },
                  "hover:text-core-indigo"
                )}
                onClick={isToggle}
                width={24}
                height={24}
              />
            </div>
          </div>
          <div>
            {navigationLinks.map((item) => (
              <Link
                to={item.path}
                key={item.id}
                className={cn(
                  "mt-3 p-2 body-default-semibold flex gap-2 group text-core-secondary transition-all hover:bg-core-primary-light",
                  {
                    "bg-transparent": item.path === pathname,
                  }
                )}
              >
                <item.icon
                  className={cn("shrink-0 group-hover:text-core-indigo", {
                    "text-core-indigo": item.path === pathname,
                  })}
                  height={20}
                  width={20}
                />
                <p
                  className={cn(
                    "group-hover:text-core-indigo",
                    {
                      "text-core-indigo": item.path === pathname,
                    },
                    {
                      hidden: isOpen,
                    }
                  )}
                >
                  {item.name}
                </p>
              </Link>
            ))}
          </div>
        </div>

        <div className="p-5">
          {customerCareLink?.map((item) => (
            <Link
              to={item.path}
              key={item.id}
              className={cn(
                "mt-3 p-2 body-default-semibold flex gap-2 group text-core-secondary transition-all hover:bg-core-primary-light",
                {
                  "bg-transparent": item.path === pathname,
                }
              )}
            >
              <item.icon
                className={cn("shrink-0 group-hover:text-core-indigo", {
                  "text-core-indigo": item.path === pathname,
                })}
                height={20}
                width={20}
              />
              <p
                className={cn(
                  "group-hover:text-core-indigo",
                  {
                    "text-core-indigo": item.path === pathname,
                  },
                  {
                    hidden: isOpen,
                  }
                )}
              >
                {item.name}
              </p>
            </Link>
          ))}
          <button
            onClick={handleLogout}
            className="group text-core-red flex items-center mt-3 p-2 justify-between  transition-all mb-10 rounded-lg hover:bg-core-primary-light"
            type="button"
          >
            <ArrowRightOnRectangleIcon
              height={24}
              width={24}
              className="group-hover:text-core-secondary"
            />
            <p
              className={cn("group-hover:text-core-secondary", {
                hidden: isOpen,
              })}
            >
              Log out
            </p>
          </button>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;

{
  /* 
{navigationLinks.map((item) => (
              <>
                <Link
                  to={item.path}
                  key={item.id}
                  className={cn(
                    "mt-3 p-2 body-default-semibold flex gap-2 group text-core-secondary transition-all hover:bg-core-primary-light",
                    {
                      "bg-transparent": item.path === pathname,
                    }
                  )}
                >
                  <item.icon
                    className={cn("shrink-0 group-hover:text-core-indigo", {
                      "text-core-indigo": item.path === pathname,
                    })}
                    height={20}
                    width={20}
                  />
                  <p
                    className={cn(
                      "group-hover:text-core-indigo",
                      {
                        "text-core-indigo": item.path === pathname,
                      },
                      {
                        hidden: isOpen,
                      }
                    )}
                  >
                    {item.name}
                  </p>
                  {item.subMenus && (
                    <ChevronDownIcon
                      onClick={() => setSubMenuOpen(!subMenuOpen)}
                      className={`${subMenuOpen && "rotate-180"}`}
                      width={15}
                      height={15}
                    />
                  )}
                </Link>
                {item.subMenu && subMenuOpen && (
                  <ul>
                    {item.subMenu.map((subMenuItem, idx) => (
                      <li
                        key={idx}
                        className="flex px-5 cursor-pointer text-center text-sm text-gray-200 py-1"
                      >
                        {subMenuItem.name}
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ))}
            <br />

  
            </div> */
}
