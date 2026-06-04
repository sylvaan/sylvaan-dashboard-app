import { Routes } from '@angular/router';
import { MainLayout } from './layouts/main-layout';
import { DashboardPage } from './features/dashboard/dashboard';
import { AnalyticsPage } from './features/analytics/analytics';
import { SettingsPage } from './features/settings/settings';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '',
        component: DashboardPage
      },
      {
        path: 'analytics',
        component: AnalyticsPage
      },
      {
        path: 'settings',
        component: SettingsPage
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];
