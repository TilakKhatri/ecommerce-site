import {
  // PlusIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";
// import toast from "react-hot-toast";
import { Link, useLocation } from "react-router-dom";
import cn from "classnames";

import logo from "@/assets/Icon.svg";

import {
  customerCareLink,
  navigationLinks,
} from "@/navigation/admin-navigation";
import { useSelector } from "react-redux";
import { useState } from "react";

function Sidebar({ className }: { className?: string }) {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useSelector((state: any) => state.user);

  return (
    <>
      <aside
        className={cn(className, " flex flex-col justify-between h-screen")}
      >
        <div className="px-5">
          <Link to="/">
            <img src={logo} alt="logo" className="mt-4 mb-12" />
          </Link>

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
                  className={cn("group-hover:text-core-indigo", {
                    "text-core-indigo": item.path === pathname,
                  })}
                >
                  {item.name}
                </p>
              </Link>
            ))}
            <br />

            <div className="mt-4">
              {/* <div className="flex justify-between items-center text-neutral-600">
                <p className="font-semibold text-sm">PROJECTS</p>
                <Link to="/admin/create-project">
                  <PlusIcon height={20} width={20} />
                </Link>
              </div> */}

              {/* <div className="mt-4 max-h-[60vh] overflow-y-scroll bar">
                {projects?.data &&
                  projects.data.projects.map((item) => (
                    <Link
                      to={`/admin/project-detail/${item.id}/overview`}
                      key={item.id}
                      className={cn(
                        "block p-2 body-default-semibold text-neutral-400 hover:text-core-primary hover:bg-core-primary-light",
                        {
                          "!text-core-primary bg-core-primary-light":
                            pathname.includes(String(`/${item.id}/`)),
                        }
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
              </div> */}
            </div>
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
                className={cn("group-hover:text-core-indigo", {
                  "text-core-indigo": item.path === pathname,
                })}
              >
                {item.name}
              </p>
            </Link>
          ))}
          <button
            //   onClick={handleLogout}
            className="group text-core-red flex items-center mt-3 p-2 justify-between  transition-all mb-10 rounded-lg hover:bg-core-primary-light"
            type="button"
          >
            <ArrowRightOnRectangleIcon
              height={24}
              width={24}
              className="group-hover:text-core-secondary"
            />
            <p className={cn("group-hover:text-core-secondary")}>Log out</p>
          </button>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
