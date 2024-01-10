import {
  // PlusIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";
// import toast from "react-hot-toast";

import cn from "classnames";
import { navigationLinks } from "@/navigation/admin-navigation";
import { Link, useLocation } from "react-router-dom";

function Sidebar({ className }: { className?: string }) {
  const { pathname } = useLocation();
  return (
    <aside className={cn(className, " flex flex-col justify-between h-screen")}>
      <div>
        {/* <Link to="/">
            <img src={logo} alt="logo" className="mt-10 mb-12" />
            Home
          </Link> */}

        <div className="p-5">
          <p className="mt-8 font-semibold">WeSale</p>

          {navigationLinks.map((item) => (
            <Link
              to={item.path}
              key={item.id}
              className={cn(
                "mt-3 p-2 body-default-semibold flex gap-2 group text-neutral-400 transition-all hover:bg-core-primary-light",
                {
                  "bg-core-primary-light": item.path === pathname,
                }
              )}
            >
              <item.icon
                className={cn("shrink-0 group-hover:text-core-primary", {
                  "text-core-primary": item.path === pathname,
                })}
                height={20}
                width={20}
              />
              <p
                className={cn("group-hover:text-core-primary", {
                  "text-core-primary": item.path === pathname,
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

      <button
        //   onClick={handleLogout}
        className="group text-neutral-600 flex items-center mx-1 justify-between gap-2 px-5 py-2 transition-all mb-10 rounded-lg hover:bg-core-primary-light"
        type="button"
      >
        <div>
          <p className="text-left group-hover:text-core-primary">
            {/* {user?.name} */}username
          </p>
          <p className="text-xs group-hover:text-core-primary">
            {/* {user?.email} */}
            user email
          </p>
        </div>

        <ArrowRightOnRectangleIcon
          height={20}
          width={20}
          className="group-hover:text-core-primary"
        />
      </button>
    </aside>
  );
}

export default Sidebar;
