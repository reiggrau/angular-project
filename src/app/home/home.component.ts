import { Component, inject } from '@angular/core'; // 'inject' is used to retrieve data
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service'; // Housing data to retrieve
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ CommonModule, HousingLocationComponent ],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
      <section class='results'>
        <app-housing-location *ngFor="let housingLocation of housingLocationList" [housingLocation]="housingLocation"></app-housing-location>
      </section>
    </section>
  `,
  styles: `
    .results {
      display: grid;
      column-gap: 14px;
      row-gap: 14px;
      grid-template-columns: repeat(auto-fill, minmax(300px, 450px));
      margin-top: 50px;
      justify-content: space-around;
    }
      
    input[type="text"] {
      border: solid 1px var(--primary-color);
      padding: 10px;
      border-radius: 8px;
      margin-right: 4px;
      display: inline-block;
      width: 30%;
    }
      
    button {
      cursor: pointer;
      padding: 10px;
      border: solid 1px var(--primary-color);
      background: var(--primary-color);
      color: white;
      border-radius: 8px;
    }

    button:hover {
      background: var(--primary-color-darker);
    }

    button:active {
      background: var(--primary-color-darkest);
    }
      
    @media (min-width: 500px) and (max-width: 768px) {
      .results {
        grid-template-columns: repeat(2, 1fr);
      }
      input[type="text"] {
        width: 70%;
      }   
    }
      
    @media (max-width: 499px) {
      .results {
        grid-template-columns: 1fr;
      }    
    }
  `
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];

  housingService: HousingService = inject(HousingService);

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}
