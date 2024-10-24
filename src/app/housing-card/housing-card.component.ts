import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../interfaces';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <a [routerLink]="['details', housingLocation.id]">
      <div class="listing">
        <img
          class="listing-photo"
          [src]="housingLocation.photo"
          alt="Exterior photo of {{ housingLocation.name }}"
        />
        <h2 class="listing-heading">{{ housingLocation.name }}</h2>
        <p class="listing-location">
          {{ housingLocation.city }}, {{ housingLocation.state }}
        </p>
      </div>
    </a>
  `,
  styleUrl: `./housing-card.component.css`,
})
export class HousingCardComponent {
  @Input() housingLocation!: HousingLocation;
}
