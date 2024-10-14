import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
    <header class="brand-name">
      <img class="brand-logo" src="assets/logo.svg" alt="logo" aria-hidden="true"/>
    </header>
  `,
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
