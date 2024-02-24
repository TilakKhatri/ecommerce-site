import {
  ShoppingBagIcon,
  UserIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";

import BarChart from "@/features/admin/dashboard/charts/BarChart";
import DonutChart from "@/features/admin/dashboard/charts/DonutChart";
import LineChart from "@/features/admin/dashboard/charts/LineChart";
import Card from "@/components/ui/Card";
import React from "react";

interface Idata {
  id: string;
  name: string;
  value: number;
  icon: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
      title?: string | undefined;
      titleId?: string | undefined;
    } & React.RefAttributes<SVGSVGElement>
  >;
}

const data: Idata[] = [
  {
    id: "product",
    name: "Total product",
    value: 49,
    icon: ShoppingBagIcon,
  },
  {
    id: "user",
    name: "Total customer",
    value: 45,
    icon: UserIcon,
  },
  {
    id: "order",
    name: "Total order",
    value: 107,
    icon: CurrencyDollarIcon,
  },
  {
    id: "sale",
    name: "Total sale",
    value: 92,
    icon: CurrencyDollarIcon,
  },
];

function Dashboard() {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        {data &&
          data.map((item) => (
            <>
              <Card
                key={item.id}
                id={item.id}
                name={item.name}
                value={item.value}
                Icon={item.icon}
              />
            </>
          ))}
      </div>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <LineChart />
        <BarChart />
        <DonutChart />
        <div className="col-span-12 xl:col-span-8">{/* <Map /> */}</div>
      </div>
    </>
  );
}

export default Dashboard;
