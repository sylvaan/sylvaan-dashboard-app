import { Trophy, Medal, Users } from 'lucide-react';
import StatsCard from '../../components/ui/StatsCard';
import StandingsTable from './components/StandingsTable';

const DashboardPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Premier League Analytics</h1>
        <span className="text-sm text-gray-500">Season 2025/26</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard
          title="League Leader"
          value="45 Pts"
          subValue="Liverpool FC"
          icon={<Trophy className="h-6 w-6" />}
        />
        <StatsCard
          title="Top Scorer"
          value="14 Goals"
          subValue="Erling Haaland"
          icon={<Medal className="h-6 w-6" />}
        />
        <StatsCard
          title="Most Assists"
          value="8 Assists"
          subValue="Mohamed Salah"
          icon={<Users className="h-6 w-6" />}
        />
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 min-h-[400px]">
        <div className="border-b border-gray-100 pb-4 mb-4">
          <h2 className="text-lg font-semibold text-gray-900">League Standings</h2>
        </div>
        
        {/* Placeholder for standings table */}
        <StandingsTable />
      </div>
    </div>
  );
};

export default DashboardPage;
