import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HousingLocation } from '../interfaces';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-card',
  standalone: true,
  imports: [CommonModule, RouterModule, NgOptimizedImage],
  template: `
    <!-- The routerLink directive enables Angular's router to create dynamic links in the application -->
    <a [routerLink]="['details', housingLocation.id]">
      <div class="listing">
        <div class="listing-textbox">
          <!-- {{}} for value interpolation -->
          <h2 class="listing-heading">{{ housingLocation.name }}</h2>
          <p class="listing-location">
            {{ housingLocation.city }}, {{ housingLocation.state }}
          </p>
        </div>
        <!-- To enable the NgOptimizedImage directive, swap out the src attribute for ngSrc -->
        <!-- For the fill image to render properly, its parent element must be styled with position: "relative", position: "fixed", or  -->
        <img
          class="listing-photo"
          [ngSrc]="housingLocation.photo"
          alt="Exterior photo of {{ housingLocation.name }}"
          fill
        />
      </div>
    </a>
  `,
  styleUrl: `./housing-card.component.css`,
})
export class HousingCardComponent {
  // @Input allows the child component to receive data from their parent
  @Input() housingLocation!: HousingLocation;
}
