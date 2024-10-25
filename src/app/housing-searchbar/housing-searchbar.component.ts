import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-housing-searchbar',
  standalone: true,
  imports: [],
  template: `
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
  `,
  styleUrl: './housing-searchbar.component.css',
})
export class HousingSearchbarComponent {
  // @Output allows the child component to send data to their parent
  @Output() filterResultsEvent = new EventEmitter<string>();

  filterResults(text: string) {
    this.filterResultsEvent.emit(text);
  }
}
