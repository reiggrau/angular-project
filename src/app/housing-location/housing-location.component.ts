import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housing-location';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <a [routerLink]="['details', housingLocation.id]">
      <div class='listing'>
        <img class='listing-photo' [src]='housingLocation.photo' alt='Exterior photo of {{housingLocation.name}}'/>
        <h2 class='listing-heading'>{{housingLocation.name}}</h2>
        <p class='listing-location'>{{housingLocation.city}}, {{housingLocation.state}}</p>
      </div>
    </a>
  `,
  styles: `
    a {
      text-decoration: none;
    }
    .listing {
      background: var(--accent-color);
      border-radius: 30px;
      padding-bottom: 10px;
      transition: all 0.1s ease-in-out;
    }
    .listing:hover {
      scale: 105%;
    }
    .listing-heading {
      color: var(--primary-color);
      padding: 10px 20px 0 20px;
    }
    .listing-photo {
      height: 250px;
      width: 100%;
      object-fit: cover;
      border-radius: 30px 30px 0 0;
    }
    .listing-location {
      padding: 10px 20px 20px 20px;
    }
    .listing-location::before {
      content: url("/assets/location-pin.svg") / "";
    }
    section.listing a {
      padding-left: 20px;
      text-decoration: none;
      color: var(--primary-color);
    }
    section.listing a::after {
      margin-left: 5px;
    }
  `
})
export class HousingLocationComponent {
  @Input() housingLocation!:HousingLocation;
}
