import { Component, signal, inject } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../core/services/theme.service';
import { 
  LucideLayoutDashboard, 
  LucideBarChart3, 
  LucideSettings, 
  LucideLogOut, 
  LucideMenu, 
  LucideX, 
  LucideBell, 
  LucideUser,
  LucideSun,
  LucideMoon
} from '@lucide/angular';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    RouterOutlet, 
    RouterLink, 
    RouterLinkActive,
    LucideLayoutDashboard,
    LucideBarChart3,
    LucideSettings,
    LucideLogOut,
    LucideMenu,
    LucideX,
    LucideBell,
    LucideUser,
    LucideSun,
    LucideMoon
  ],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css'
})
export class MainLayout {
  protected readonly themeService = inject(ThemeService);
  protected readonly isSidebarOpen = signal(false);

  protected readonly navigation = [
    { name: 'Dashboard', to: '/', icon: 'dashboard', exact: true },
    { name: 'Analytics', to: '/analytics', icon: 'analytics', exact: false },
    { name: 'Settings', to: '/settings', icon: 'settings', exact: false }
  ];

  protected toggleSidebar() {
    this.isSidebarOpen.update(v => !v);
  }

  protected closeSidebar() {
    this.isSidebarOpen.set(false);
  }
}
