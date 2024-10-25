import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingLocation } from '../interfaces';
import { HousingService } from '../housing.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    @if (housingLocation) {
    <article>
      <img
        class="listing-photo"
        [src]="housingLocation.photo"
        alt="Exterior photo of {{ housingLocation.name }}"
        crossorigin
      />
      <section class="listing-description">
        <h2 class="listing-heading">{{ housingLocation.name }}</h2>
        <p class="listing-location">
          {{ housingLocation.city }}, {{ housingLocation.state }}
        </p>
      </section>
      <section class="listing-features">
        <h2 class="section-heading">About this housing location</h2>
        <ul>
          <li>
            Units available:
            {{ housingLocation.availableUnits ? 'Yes' : 'No' }}
          </li>
          <li>
            Does this location have wifi:
            {{ housingLocation.wifi ? 'Yes' : 'No' }}
          </li>
          <li>
            Does this location have laundry:
            {{ housingLocation.laundry ? 'Yes' : 'No' }}
          </li>
        </ul>
      </section>
      <section>
        <h2 class="section-heading">Apply now to live here</h2>
        <form [formGroup]="applyForm" (submit)="submitApplication()">
          <label for="first-name">First Name</label>
          <input id="first-name" type="text" formControlName="firstName" />
          <label for="last-name">Last Name</label>
          <input id="last-name" type="text" formControlName="lastName" />
          <label for="email">Email</label>
          <input id="email" type="email" formControlName="email" />
          <button class="primary" type="submit">Apply now</button>
        </form>
      </section>
    </article>
    } @else { }
  `,
  styles: `
    .listing-photo {
      height: 600px;
      width: 50%;
      object-fit: cover;
      border-radius: 30px;
      float: right;
    }
    .listing-heading {
      font-size: 48pt;
      font-weight: bold;
      margin-bottom: 15px;
    }
    .listing-location::before {
      content: url('/assets/location-pin.svg') / '';
    }
    .listing-location {
      font-size: 24pt;
      margin-bottom: 15px;
    }
    .listing-features > .section-heading {
      color: var(--secondary-color);
      font-size: 24pt;
      margin-bottom: 15px;
    }
    .listing-features {
      margin-bottom: 20px;
    }
    .listing-features li {
      font-size: 14pt;
    }
    li {
      list-style-type: none;
    }
    .listing-apply .section-heading {
      font-size: 18pt;
      margin-bottom: 15px;
    }
    label, input {
      display: block;
    }
    label {
      color: var(--secondary-color);
      font-weight: bold;
      text-transform: uppercase;
      font-size: 12pt;
    }
    input {
      font-size: 16pt;
      margin-bottom: 15px;
      padding: 10px;
      width: 400px;
      border-top: none;
      border-right: none;
      border-left: none;
      border-bottom: solid .3px;
    }
    @media (max-width: 1024px) {
      .listing-photo {
        width: 100%;
        height: 400px;
      }
    }
  `,
})
export class DetailsComponent {
  // This code gives the DetailsComponent access to the ActivatedRoute router feature that enables you to have access to the data about the current route
  route: ActivatedRoute = inject(ActivatedRoute);

  housingService: HousingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;

  // FormGroup and FormControl are types that enable you to build forms
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  constructor() {
    // the code converts the id parameter acquired from the route from a string to a number
    const housingLocationId = Number(this.route.snapshot.params['id']);

    this.housingService
      .getHousingLocationById(housingLocationId)
      .then((housingLocation: HousingLocation | undefined) => {
        this.housingLocation = housingLocation;
      });
  }

  // code to handle the Apply now click
  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }
}
