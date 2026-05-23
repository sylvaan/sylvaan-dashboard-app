import { Component, inject, computed } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ThemeService } from '../../../core/services/theme.service';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexStroke,
  ApexTooltip,
  ApexDataLabels,
  ApexGrid,
  ApexLegend,
  ApexYAxis
} from 'ng-apexcharts';

@Component({
  selector: 'app-league-analytics',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './league-analytics.html'
})
export class LeagueAnalytics {
  protected readonly themeService = inject(ThemeService);

  protected readonly chartSeries: ApexAxisChartSeries = [
    {
      name: 'Liverpool',
      data: [35, 38, 41, 42, 44]
    },
    {
      name: 'Arsenal',
      data: [30, 33, 36, 39, 39]
    },
    {
      name: 'Man City',
      data: [29, 32, 33, 36, 36]
    }
  ];

  protected readonly chartDetails = computed<ApexChart>(() => {
    const isDark = this.themeService.isDarkMode();
    return {
      height: 350,
      type: 'line',
      background: 'transparent',
      theme: {
        mode: isDark ? 'dark' : 'light'
      },
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
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
      min: 25
    };
  });

  protected readonly chartStroke: ApexStroke = {
    curve: 'smooth',
    width: 3
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

  protected readonly chartColors = ['#B91C1C', '#EF4444', '#38BDF8'];

  protected readonly chartTooltip = computed<ApexTooltip>(() => {
    const isDark = this.themeService.isDarkMode();
    return {
      theme: isDark ? 'dark' : 'light',
      y: {
        formatter: function(val) {
          return val + " Pts";
        }
      }
    };
  });

  protected readonly chartLegend = computed<ApexLegend>(() => {
    const isDark = this.themeService.isDarkMode();
    return {
      position: 'top',
      horizontalAlign: 'right',
      fontFamily: 'sans-serif',
      labels: {
        colors: isDark ? '#F1F5F9' : '#374151'
      }
    };
  });
}
