import { Component, input } from '@angular/core';

@Component({
  selector: 'app-stats-card',
  standalone: true,
  imports: [],
  templateUrl: './stats-card.html'
})
export class StatsCard {
  readonly title = input.required<string>();
  readonly value = input.required<string>();
  readonly subValue = input<string>();
}
