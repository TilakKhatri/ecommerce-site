import BarChart from "@/features/admin/dashboard/charts/BarChart";
import DonutChart from "@/features/admin/dashboard/charts/DonutChart";
import LineChart from "@/features/admin/dashboard/charts/LineChart";
import Map from "@/features/admin/dashboard/charts/Map";
import Card from "@/components/ui/Card";

function Dashboard() {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <Card />
        <Card />
        <Card />
        <Card />
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
