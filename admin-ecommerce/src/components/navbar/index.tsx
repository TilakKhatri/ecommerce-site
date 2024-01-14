import { useSelector } from "react-redux";
import { PlusIcon, UserIcon } from "@heroicons/react/24/solid";

const NavBar = () => {
  const { user } = useSelector((state: any) => state.user);
  return (
    <nav className="dark:bg-darkBackground drop-shadow-sm dark:text-white bg-gray-50 sticky top-0 left-0 z-30 flex items-center justify-around w-full h-16 font-semibold text-gray-900">
      <div className="flex-1 w-9/12 pl-8">
        <h1 className=" text-darkAsscent dark:text-primaryColor">Nepal LMS</h1>
      </div>
      <ul className="flex items-center justify-around w-3/12">
        <li>
          <div className="relative w-fit max-h-[12] bottom-0 left-0 flex justify-around items-center gap-8">
            <div className="md:inline-block hidden">
              <p className="dark:text-gray-200 text-gray-600">
                {user?.username || "Tilak"}
              </p>
              <p className="text-sm text-gray-400 dark:text-gray-300 font-thin max-w-[15ch] text-ellipsis  ">
                {user?.role || "admin"}
              </p>
            </div>
            <UserIcon />
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
