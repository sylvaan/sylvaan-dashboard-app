import { Component, signal, computed, inject } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ThemeService } from '../../../core/services/theme.service';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexStroke,
  ApexTooltip,
  ApexGrid,
  ApexYAxis,
  ApexPlotOptions
} from 'ng-apexcharts';

interface TeamData {
  rank: number;
  wins: number;
  topScorer: string;
  topScorerGoals: number;
  avgGoals: number;
  last5Matches: { match: string; goals: number }[];
}

const TEAMS_DATA: Record<string, TeamData> = {
  'Liverpool': {
    rank: 1,
    wins: 13,
    topScorer: 'Mohamed Salah',
    topScorerGoals: 14,
    avgGoals: 2.3,
    last5Matches: [
      { match: 'GW15', goals: 2 },
      { match: 'GW16', goals: 1 },
      { match: 'GW17', goals: 3 },
      { match: 'GW18', goals: 2 },
      { match: 'GW19', goals: 4 },
    ]
  },
  'Arsenal': {
    rank: 2,
    wins: 11,
    topScorer: 'Kai Havertz',
    topScorerGoals: 10,
    avgGoals: 1.9,
    last5Matches: [
      { match: 'GW15', goals: 1 },
      { match: 'GW16', goals: 3 },
      { match: 'GW17', goals: 2 },
      { match: 'GW18', goals: 2 },
      { match: 'GW19', goals: 0 },
    ]
  },
  'Man City': {
    rank: 3,
    wins: 11,
    topScorer: 'Erling Haaland',
    topScorerGoals: 14,
    avgGoals: 2.1,
    last5Matches: [
      { match: 'GW15', goals: 0 },
      { match: 'GW16', goals: 4 },
      { match: 'GW17', goals: 2 },
      { match: 'GW18', goals: 3 },
      { match: 'GW19', goals: 1 },
    ]
  }
};

@Component({
  selector: 'app-team-analytics',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './team-analytics.html'
})
export class TeamAnalytics {
  protected readonly themeService = inject(ThemeService);
  protected readonly selectedTeam = signal('Liverpool');
  protected readonly teamsList = signal(Object.keys(TEAMS_DATA));

  protected readonly currentData = computed(() => {
    return TEAMS_DATA[this.selectedTeam()];
  });

  protected readonly chartSeries = computed<ApexAxisChartSeries>(() => {
    const goals = this.currentData().last5Matches.map(m => m.goals);
    return [
      {
        name: 'Goals Scored',
        data: goals
      }
    ];
  });

  protected readonly chartColors = computed(() => {
    return this.selectedTeam() === 'Man City' ? ['#38BDF8'] : ['#EF4444'];
  });

  protected readonly chartDetails = computed<ApexChart>(() => {
    const isDark = this.themeService.isDarkMode();
    return {
      height: 350,
      type: 'bar',
      background: 'transparent',
      theme: {
        mode: isDark ? 'dark' : 'light'
      },
      toolbar: {
        show: false
      }
    };
  });

  protected readonly chartXaxis = computed<ApexXAxis>(() => {
    const isDark = this.themeService.isDarkMode();
    return {
      categories: ['GW15', 'GW16', 'GW17', 'GW18', 'GW19'],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        style: {
          colors: isDark ? '#94A3B8' : '#6B7280',
          fontSize: '12px',
          fontFamily: 'sans-serif'
        }
      }
    };
  });

  protected readonly chartYaxis = computed<ApexYAxis>(() => {
    const isDark = this.themeService.isDarkMode();
    return {
      labels: {
        style: {
          colors: isDark ? '#94A3B8' : '#6B7280',
          fontSize: '12px',
          fontFamily: 'sans-serif'
        }
      },
      tickAmount: 4
    };
  });

  protected readonly chartPlotOptions: ApexPlotOptions = {
    bar: {
      borderRadius: 4,
      columnWidth: '40px'
    }
  };

  protected readonly chartGrid = computed<ApexGrid>(() => {
    const isDark = this.themeService.isDarkMode();
    return {
      strokeDashArray: 4,
      borderColor: isDark ? '#334155' : '#E5E7EB',
      xaxis: {
        lines: {
          show: false
        }
      },
      yaxis: {
        lines: {
          show: true
        }
      }
    };
  });

  protected readonly chartTooltip = computed<ApexTooltip>(() => {
    const isDark = this.themeService.isDarkMode();
    return {
      theme: isDark ? 'dark' : 'light'
    };
  });

  protected onTeamChange(event: Event) {
    const selectEl = event.target as HTMLSelectElement;
    this.selectedTeam.set(selectEl.value);
  }
}
