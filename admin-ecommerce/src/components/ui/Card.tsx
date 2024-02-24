import { EyeIcon, ArrowTrendingUpIcon } from "@heroicons/react/24/outline";

const Card = ({
  id,
  name,
  value,
  Icon,
}: {
  id: string;
  name: string;
  value: number;
  Icon: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
      title?: string | undefined;
      titleId?: string | undefined;
    } & React.RefAttributes<SVGSVGElement>
  >;
}) => {
  return (
    <div className="rounded-md border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex items-center gap-2">
        <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
          <Icon className="text-core-indigo" height={24} width={24} />
        </div>
        <h4 className="text-title-md font-bold text-black dark:text-white">
          {id === "order" || id === "sale" ? `$${value} K` : `${value}`}
        </h4>
      </div>
      <div className="mt-f4 flex items-end justify-between">
        <div>
          <span className="text-sm font-medium">{name}</span>
        </div>

        <span className="flex items-center gap-1 text-sm font-medium text-meta-3">
          0.43%
          <ArrowTrendingUpIcon height={24} width={24} />
        </span>
      </div>
    </div>
  );
};

export default Card;
