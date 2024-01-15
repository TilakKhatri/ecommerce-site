import { Menu, Transition } from "@headlessui/react";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline";
import { BellIcon } from "@heroicons/react/24/solid";
import { Fragment } from "react";

export default function NotificationMenu() {
  return (
    <div className="w-fit">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button>
            <BellIcon width={24} height={24} />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="ring-1 ring-black ring-opacity-5 focus:outline-none absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg">
            <div className=" px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <div>
                    <div>
                      <ArrowLeftOnRectangleIcon width={24} height={24} />
                    </div>
                    <div>Setting</div>
                  </div>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
