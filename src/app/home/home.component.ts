import { Component, inject } from '@angular/core'; // 'inject' is used to retrieve data
import { CommonModule } from '@angular/common';
import { HousingCardComponent } from '../housing-card/housing-card.component';
import { HousingLocation } from '../interfaces';
import { HousingService } from '../housing.service';
import { HousingSearchbarComponent } from '../housing-searchbar/housing-searchbar.component'; // Housing data to retrieve

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingCardComponent, HousingSearchbarComponent],
  template: `
    <section>
      <app-housing-searchbar (filterResultsEvent)="filterResults($event)" />
      <section class="results">
        <!-- *ngFor generates a component for each item of an array -->
        <!-- [] binds the property value to the component -->
        <app-housing-card
          *ngFor="let housingLocation of filteredLocationList"
          [housingLocation]="housingLocation"
          (mouseover)="onMouseOver(housingLocation.id)"
        ></app-housing-card>
      </section>
      <div>
        <h4>Our housings:</h4>
        <ul>
          <!-- @for generates html for each item of an array -->
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
