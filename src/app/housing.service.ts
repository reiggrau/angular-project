import { Injectable } from '@angular/core';
import { HousingLocation } from './interfaces';

@Injectable({
  providedIn: 'root',
})

// Services serve data and functions that can be used by multiple components in the app
export class HousingService {
  // Create a "db.json" file representing the database, install json-server with "npm install -g json-server", and activate the server with "npx json-server db.json"
  readonly url = 'http://localhost:3000/locations';

  constructor() {}

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const response = await fetch(this.url);
    if (response.ok) {
      return await response.json();
    } else {
      return [];
    }
  }

  async getHousingLocationById(
    id: Number
  ): Promise<HousingLocation | undefined> {
    const response = await fetch(`${this.url}/${id}`);
    if (response.ok) {
      return await response.json();
    } else {
      return;
    }
  }

  // adds a method to your app's service that receives the form data to send to the data's destination
  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
  }
}
