import {
  Squares2X2Icon,
  UsersIcon,
  BuildingStorefrontIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";

interface ISubMenu {
  id: string;
  name: string;
  path: string;
}
interface INavigation {
  id: string;
  name: string;
  hasSubMenus: boolean;
  path: string;
  icon: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
      title?: string | undefined;
      titleId?: string | undefined;
    } & React.RefAttributes<SVGSVGElement>
  >;
  subMenus?: ISubMenu[];
}

export const navigationLinks: INavigation[] = [
  {
    id: "dashboard",
    name: "Dashboard",
    hasSubMenus: false,
    path: "/admin/dashboard",
    icon: Squares2X2Icon,
  },

  {
    id: "merchant",
    name: "Merchant",
    path: "/admin/merchant",
    hasSubMenus: true,
    icon: UsersIcon,
    subMenus: [
      {
        id: "add-merchant",
        name: "Add merchant",
        path: "/admin/merchant/new",
      },
      {
        id: "list-merchant",
        name: "List user",
        path: "/admin/user/list",
      },
    ],
  },
  {
    id: "product",
    name: "Product",
    path: "/admin/product/list",
    hasSubMenus: true,
    icon: BuildingStorefrontIcon,
    subMenus: [
      {
        id: "list-product",
        name: "Add product",
        path: "/admin/product/list",
      },
      {
        id: "list-product",
        name: "Add product",
        path: "/admin/product/list",
      },
    ],
  },
  {
    id: "category",
    name: "Category",
    path: "/admin/category",
    hasSubMenus: false,
    icon: BuildingStorefrontIcon,
  },
];

export const customerCareLink: INavigation[] = [
  {
    id: "help-center",
    name: "Help center",
    path: "/help-center",
    hasSubMenus: false,
    icon: InformationCircleIcon,
  },
  {
    id: "contact-us",
    name: "Contact us",
    path: "/contact-us",
    hasSubMenus: false,
    icon: ChatBubbleOvalLeftEllipsisIcon,
  },
];
