import type { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string;
  subValue?: string;
  icon: LucideIcon;
}

const StatsCard = ({ title, value, subValue, icon: Icon }: StatsCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex items-start justify-between hover:shadow-md transition-shadow duration-200">
      <div className="flex flex-col gap-1">
        <span className="text-sm font-medium text-gray-500">{title}</span>
        <h3 className="text-2xl font-bold text-gray-900 mt-1">{value}</h3>
        {subValue && (
          <span className="text-sm font-medium text-indigo-600 mt-1">
            {subValue}
          </span>
        )}
      </div>
      <div className="p-3 bg-indigo-50 rounded-lg text-indigo-600">
        <Icon className="h-6 w-6" />
      </div>
    </div>
  );
};

export default StatsCard;
