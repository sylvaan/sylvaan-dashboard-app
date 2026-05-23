import { Component } from '@angular/core';
import { StatsCard } from '../../components/ui/stats-card';
import { StandingsTable } from './components/standings-table';
import { LucideTrophy, LucideMedal, LucideUsers } from '@lucide/angular';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [StatsCard, StandingsTable, LucideTrophy, LucideMedal, LucideUsers],
  templateUrl: './dashboard.html'
})
export class DashboardPage {}
