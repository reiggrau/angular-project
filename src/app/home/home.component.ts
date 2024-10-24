import { Component, inject } from '@angular/core'; // 'inject' is used to retrieve data
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../interfaces';
import { HousingService } from '../housing.service'; // Housing data to retrieve

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" #filter />
        <button
          class="primary"
          type="button"
          (click)="filterResults(filter.value)"
        >
          Search
        </button>
      </form>
      <section class="results">
        <app-housing-location
          *ngFor="let housingLocation of filteredLocationList"
          [housingLocation]="housingLocation"
          (mouseover)="onMouseOver(housingLocation.id)"
        ></app-housing-location>
      </section>
      <div>
        <h4>Quick acces:</h4>
        <ul>
          @for (housingLocation of housingLocationList; track
          housingLocation.id) {
          <li>
            {{ housingLocation.name }}
          </li>
          }
        </ul>
      </div>
    </section>
  `,
  styleUrl: './home.component.css',
})
export class HomeComponent {
  housingService: HousingService = inject(HousingService);

  housingLocationList: HousingLocation[] = [];
  filteredLocationList: HousingLocation[] = [];

  constructor() {
    this.housingService
      .getAllHousingLocations()
      .then((allHousingLocationList: HousingLocation[]) => {
        this.housingLocationList = allHousingLocationList;
        this.filteredLocationList = allHousingLocationList;
      });
  }

  filterResults(text: string) {
    if (text) {
      this.filteredLocationList = this.housingLocationList.filter(
        (housingLocation) =>
          housingLocation?.city.toLowerCase().includes(text.toLowerCase())
      );
    } else {
      this.filteredLocationList = this.housingLocationList;
    }
  }

  onMouseOver(id: number) {
    console.log('Hovering over housing id:', id);
  }
}
