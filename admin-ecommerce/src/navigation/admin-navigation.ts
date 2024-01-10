import { Squares2X2Icon, UsersIcon } from "@heroicons/react/24/outline";

interface INavigation {
  id: string;
  name: string;
  path: string;
  icon: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
      title?: string | undefined;
      titleId?: string | undefined;
    } & React.RefAttributes<SVGSVGElement>
  >;
}

export const navigationLinks: INavigation[] = [
  {
    id: "dashboard",
    name: "Dashboard",
    path: "/admin/dashboard",
    icon: Squares2X2Icon,
  },

  {
    id: "user",
    name: "User",
    path: "/admin/user",
    icon: UsersIcon,
  },
];
