const StandingsTable = () => {
    const teams = [
      { pos: 1, club: 'Liverpool', played: 19, won: 13, drawn: 5, lost: 1, gd: 28, points: 44, form: ['W', 'D', 'W', 'D', 'W'] },
      { pos: 2, club: 'Arsenal', played: 19, won: 11, drawn: 6, lost: 2, gd: 21, points: 39, form: ['W', 'W', 'W', 'D', 'W'] },
      { pos: 3, club: "Nott'm Forest", played: 19, won: 11, drawn: 4, lost: 4, gd: 10, points: 37, form: ['W', 'L', 'L', 'W', 'D'] },
      { pos: 4, club: 'Man City', played: 19, won: 11, drawn: 3, lost: 5, gd: 18, points: 36, form: ['L', 'W', 'W', 'W', 'W'] },
      { pos: 5, club: 'Chelsea', played: 19, won: 9, drawn: 6, lost: 4, gd: 12, points: 33, form: ['W', 'W', 'D', 'L', 'W'] },
    ];
  
    const getFormColor = (result: string) => {
      switch (result) {
        case 'W': return 'bg-green-500';
        case 'D': return 'bg-gray-400';
        case 'L': return 'bg-red-500';
        default: return 'bg-gray-300';
      }
    };
  
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-50 text-gray-500 font-medium border-b border-gray-200 uppercase tracking-wider text-xs">
            <tr>
              <th className="px-6 py-4">Pos</th>
              <th className="px-6 py-4 w-1/3">Club</th>
              <th className="px-6 py-4">MP</th>
              <th className="px-6 py-4">W</th>
              <th className="px-6 py-4">D</th>
              <th className="px-6 py-4">L</th>
              <th className="px-6 py-4">GD</th>
              <th className="px-6 py-4 font-bold text-gray-700">Pts</th>
              <th className="px-6 py-4 text-center">Form</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white">
            {teams.map((team) => (
              <tr key={team.club} className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-6 py-4 font-medium text-gray-900">{team.pos}</td>
                <td className="px-6 py-4 font-bold text-gray-900 flex items-center gap-3">
                  {/* Placeholder for club logo */}
                  <div className={`h-6 w-6 rounded-full flex items-center justify-center text-[10px] text-white font-bold
                    ${team.club === 'Liverpool' ? 'bg-red-700' : 
                      team.club === 'Arsenal' ? 'bg-red-500' :
                      team.club === 'Man City' ? 'bg-sky-400' :
                      team.club === 'Chelsea' ? 'bg-blue-600' : 'bg-red-600'}
                  `}>
                    {team.club.charAt(0)}
                  </div>
                  {team.club}
                </td>
                <td className="px-6 py-4 text-gray-600">{team.played}</td>
                <td className="px-6 py-4 text-gray-600">{team.won}</td>
                <td className="px-6 py-4 text-gray-600">{team.drawn}</td>
                <td className="px-6 py-4 text-gray-600">{team.lost}</td>
                <td className="px-6 py-4 text-gray-600">{team.gd}</td>
                <td className="px-6 py-4 font-bold text-gray-900">{team.points}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-center gap-1">
                    {team.form.map((result, index) => (
                      <span
                        key={index}
                        className={`h-2 w-2 rounded-full ${getFormColor(result)}`}
                        title={result === 'W' ? 'Won' : result === 'D' ? 'Drawn' : 'Lost'}
                      />
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default StandingsTable;
  
