import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
    <header class="brand-name">
      <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true"/>
    </header>
  `,
  styles: `
    header {
      display: block;
      height: 60px;
      padding: var(--content-padding);
      box-shadow: 0px 5px 25px var(--shadow-color);
    }
  `
})
export class HeaderComponent {

}
