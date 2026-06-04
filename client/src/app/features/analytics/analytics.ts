import { Component, signal } from '@angular/core';
import { LeagueAnalytics } from './components/league-analytics';
import { TeamAnalytics } from './components/team-analytics';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [LeagueAnalytics, TeamAnalytics],
  templateUrl: './analytics.html'
})
export class AnalyticsPage {
  protected readonly activeTab = signal<'league' | 'team'>('league');

  protected setActiveTab(tab: 'league' | 'team') {
    this.activeTab.set(tab);
  }
}
