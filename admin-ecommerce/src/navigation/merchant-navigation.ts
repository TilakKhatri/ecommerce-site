import {
  BanknotesIcon,
  Squares2X2Icon,
  ShoppingBagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

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

export const MerchantLinks: INavigation[] = [
  {
    id: "dashboard",
    name: "Dashboard",
    path: "/merchant/dashboard",
    icon: Squares2X2Icon,
  },
  {
    id: "product",
    name: "Product",
    path: "/merchant/product/",
    icon: ShoppingBagIcon,
  },
  {
    id: "customer",
    name: "Customer",
    path: "/merchant/customer/",
    icon: UserGroupIcon,
  },
  {
    id: "order",
    name: "Order",
    path: "/merchant/order/",
    icon: BanknotesIcon,
  },
];
