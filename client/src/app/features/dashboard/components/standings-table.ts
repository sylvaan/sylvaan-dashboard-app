import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-standings-table',
  standalone: true,
  imports: [],
  templateUrl: './standings-table.html'
})
export class StandingsTable {
  protected readonly teams = signal([
    { pos: 1, club: 'Liverpool', played: 19, won: 13, drawn: 5, lost: 1, gd: 28, points: 44, form: ['W', 'D', 'W', 'D', 'W'] },
    { pos: 2, club: 'Arsenal', played: 19, won: 11, drawn: 6, lost: 2, gd: 21, points: 39, form: ['W', 'W', 'W', 'D', 'W'] },
    { pos: 3, club: "Nott'm Forest", played: 19, won: 11, drawn: 4, lost: 4, gd: 10, points: 37, form: ['W', 'L', 'L', 'W', 'D'] },
    { pos: 4, club: 'Man City', played: 19, won: 11, drawn: 3, lost: 5, gd: 18, points: 36, form: ['L', 'W', 'W', 'W', 'W'] },
    { pos: 5, club: 'Chelsea', played: 19, won: 9, drawn: 6, lost: 4, gd: 12, points: 33, form: ['W', 'W', 'D', 'L', 'W'] },
  ]);

  protected getFormColor(result: string): string {
    switch (result) {
      case 'W': return 'bg-green-500';
      case 'D': return 'bg-gray-400';
      case 'L': return 'bg-red-500';
      default: return 'bg-gray-300';
    }
  }
}
