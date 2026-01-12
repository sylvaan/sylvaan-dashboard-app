import { Trophy, Medal, User } from 'lucide-react';
import StatsCard from '../../components/ui/StatsCard';

const DashboardPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Premier League Analytics</h1>
        <span className="text-sm text-gray-500">Season 2025/26</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatsCard
          title="League Leader"
          value="45 Pts"
          subValue="Liverpool"
          icon={Trophy}
        />
        <StatsCard
          title="Top Scorer"
          value="14 Goals"
          subValue="Erling Haaland"
          icon={Medal}
        />
        <StatsCard
          title="Most Assists"
          value="8 Assists"
          subValue="Mohamed Salah"
          icon={User}
        />
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 min-h-[400px]">
        <div className="border-b border-gray-100 pb-4 mb-4">
          <h2 className="text-lg font-semibold text-gray-900">League Standings</h2>
        </div>
        
        {/* Placeholder for standings table */}
        <div className="flex items-center justify-center h-64 border-2 border-dashed border-gray-200 rounded-lg bg-gray-50 text-gray-400">
          League Table Component Placeholder
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
