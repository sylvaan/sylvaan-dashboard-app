import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-settings',
  standalone: true,
  templateUrl: './settings.html'
})
export class SettingsPage {
  protected readonly favoriteTeam = signal('Liverpool');

  protected onSubmit(event: Event) {
    event.preventDefault();
    alert(`Settings saved! Favorite Team: ${this.favoriteTeam()}`);
  }

  protected onTeamChange(event: Event) {
    const selectEl = event.target as HTMLSelectElement;
    this.favoriteTeam.set(selectEl.value);
  }
}
